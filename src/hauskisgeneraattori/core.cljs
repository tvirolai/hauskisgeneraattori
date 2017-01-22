(ns hauskisgeneraattori.core
 (:require-macros [cljs.core.async.macros :refer [go]]) 
    (:require [reagent.core :as r]
                [cljs-http.client :as http]
                [cljs-http.util :refer [user-agent]]
                [cljs.core.async :refer [<! timeout]]
                [ajax.core :refer [GET]]
                [goog.userAgent :as agent]
                [clojure.string :as str]))

(def state (r/atom {:from ""
                    :to ""
                    :result ""
                    :tracks []}))

(defn log [s]
  (.log js/console (str s)))

(defn extract-tracks [response]
  (vec
   (map (fn [entry] {:artist (:artist entry)
                     :track (:name entry)})
        (:track (:trackmatches (:results (:body response)))))))

(defn tracklist->str [tracklist]
  (->> tracklist
      (map vals)
      (map #(str/join ": " %))
      (str/join ", ")))

(defn set-state! [from to]
  (do
    (reset! state (assoc-in @state [:to] to))
    (reset! state (assoc-in @state [:from] from))))

(defn get-tracks! [url query]
  (go
    (let [response (<! (http/get (str url "&track=" query) {:with-credentials? false}))]
      (reset! state
              (assoc-in @state [:tracks] (extract-tracks response))))))

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
         (get-tracks! api from)
         (set-state! from to)))
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

(defn edit-item [item]
  (let [to (:to @state)
        from (:from @state)
        istring (item-to-string item)]
    (-> istring
         (str/replace from to)
         (str/replace (str/capitalize from) (str/capitalize to))
         (str/replace (str/lower-case from) (str/lower-case to)))))

(defn table [sequence]
  [:table.table.table-striped.table-bordered 
   {:cell-spacing "0" :width "80%"}
   (when-not (empty? (:tracks @state))
              [:thead>tr 
               [:th "Hauskiksia"]])
   [:tbody
    (doall
     (for [item (:tracks @state)]
       [:tr [:td (edit-item item)]]))]])

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
