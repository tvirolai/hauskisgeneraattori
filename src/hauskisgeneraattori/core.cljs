(ns hauskisgeneraattori.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! timeout]]
            [ajax.core :refer [GET]]
            [clojure.string :as str]))

(def state (r/atom {:from ""
                    :to ""
                    :result ""
                    :tracks []}))

(defn log [s]
  (.log js/console (str s)))

(defn to-string [item]
  (str/join " " (vals item)))

(defn contains-word? [item word]
  (str/includes?
   (str/lower-case (to-string item))
   (str/lower-case word)))

(defn extract-tracks [response]
  (vec
   (map (fn [entry] {:artist (:artist entry)
                     :track (:name entry)})
        (:track (:trackmatches (:results (:body response)))))))

(defn set-state! [from to]
  (do
    (reset! state (assoc-in @state [:to] to))
    (reset! state (assoc-in @state [:from] from))))

(defn get-tracks! [url from to]
  (go
    (let [response
          (<!
           (http/get (str url "&track=" from "&limit=300") {:with-credentials? false}))]
      (reset! state
              {:from from
               :to to
               :tracks
               (->> (extract-tracks response)
                    (shuffle)
                    (take 100)
                    (filter #(contains-word? % from)))}))))

;; -------------------------
;; URL

(def api "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=MY_API_KEY&format=json")

;; -------------------------
;; Views

(def form
  [:div
   [:form
    {:on-submit
     (fn [e]
       (let [from (.. e -target -elements -from -value)
             to (.. e -target -elements -to -value)]
         (.preventDefault e)
         ;(set-state! from to)
         (get-tracks! api from to)))
     :class "form-horizontal"}
    [:div {:class "form-group"}
     [:div {:class "col-sm-8"}
      [:input {:name "from"
               :placeholder "Lähtösana"
               :type "text"
               :class "form-control"}]]]
    [:div {:class "form-group"}
     [:div {:class "col-sm-8"}
     [:input {:name "to"
              :placeholder "Kohdesana"
              :type "text"
              :class "form-control"}]]]
    [:div
     [:input {:type "submit"
              :class "btn btn-default"}]]]])

(defn item-to-string [item]
  (str (:artist item) ": " (:track item)))

(defn edit-item [item to from]
  (let [istring (item-to-string item)]
    (-> istring
         (str/replace from to)
         (str/replace (str/capitalize from) (str/capitalize to))
         (str/replace (str/upper-case from) (str/upper-case to))
         (str/replace (str/lower-case from) (str/lower-case to)))))

(defn table [sequence]
  (let [to (:to @state)
        from (:from @state)]
    [:table.table.table-striped.table-bordered 
     {:cell-spacing "0" :width "80%"}
     (when-not (empty? (:tracks @state))
       [:thead>tr 
        [:th "Hauskiksia"]])
     (doall
      (into [:tbody]
            (for [item sequence]
              [:tr [:td (edit-item item to from)]])))]))

(defn home-page []
  [:div [:h2 "Hauskisgeneraattori"]
   form
   ;[:h3 (str "From: " (:from @state))]
   ;[:h3 (str "To: " (:to @state))]
   ;[:p (str "Hauskaa:" (map edit-item (:tracks @state)))]
   [:br]
   [table (:tracks @state)]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
