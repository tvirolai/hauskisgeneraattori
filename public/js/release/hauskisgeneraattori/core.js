// Compiled by ClojureScript 1.9.229 {}
goog.provide('hauskisgeneraattori.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('clojure.string');
hauskisgeneraattori.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from","from",1815293044),"",new cljs.core.Keyword(null,"to","to",192099007),"",new cljs.core.Keyword(null,"result","result",1415092211),"",new cljs.core.Keyword(null,"tracks","tracks",-326768501),cljs.core.PersistentVector.EMPTY], null));
hauskisgeneraattori.core.log = (function hauskisgeneraattori$core$log(s){
return console.log([cljs.core.str(s)].join(''));
});
hauskisgeneraattori.core.to_string = (function hauskisgeneraattori$core$to_string(item){
return clojure.string.join.call(null," ",cljs.core.vals.call(null,item));
});
hauskisgeneraattori.core.contains_word_QMARK_ = (function hauskisgeneraattori$core$contains_word_QMARK_(item,word){
return clojure.string.includes_QMARK_.call(null,clojure.string.lower_case.call(null,hauskisgeneraattori.core.to_string.call(null,item)),clojure.string.lower_case.call(null,word));
});
hauskisgeneraattori.core.extract_tracks = (function hauskisgeneraattori$core$extract_tracks(response){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (entry){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"artist","artist",152869709),new cljs.core.Keyword(null,"artist","artist",152869709).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)], null);
}),new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"trackmatches","trackmatches",-105689402).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response))))));
});
hauskisgeneraattori.core.set_state_BANG_ = (function hauskisgeneraattori$core$set_state_BANG_(from,to){
cljs.core.reset_BANG_.call(null,hauskisgeneraattori.core.state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,hauskisgeneraattori.core.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007)], null),to));

return cljs.core.reset_BANG_.call(null,hauskisgeneraattori.core.state,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,hauskisgeneraattori.core.state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044)], null),from));
});
hauskisgeneraattori.core.get_tracks_BANG_ = (function hauskisgeneraattori$core$get_tracks_BANG_(url,from,to){
var c__14153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto__){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto__){
return (function (state_17841){
var state_val_17842 = (state_17841[(1)]);
if((state_val_17842 === (1))){
var inst_17824 = [cljs.core.str(url),cljs.core.str("&track="),cljs.core.str(from),cljs.core.str("&limit=300")].join('');
var inst_17825 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_17826 = [false];
var inst_17827 = cljs.core.PersistentHashMap.fromArrays(inst_17825,inst_17826);
var inst_17828 = cljs_http.client.get.call(null,inst_17824,inst_17827);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17841__$1,(2),inst_17828);
} else {
if((state_val_17842 === (2))){
var inst_17830 = (state_17841[(2)]);
var inst_17831 = [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"tracks","tracks",-326768501)];
var inst_17832 = (function (){var response = inst_17830;
return ((function (response,inst_17830,inst_17831,state_val_17842,c__14153__auto__){
return (function (p1__17797_SHARP_){
return hauskisgeneraattori.core.contains_word_QMARK_.call(null,p1__17797_SHARP_,from);
});
;})(response,inst_17830,inst_17831,state_val_17842,c__14153__auto__))
})();
var inst_17833 = hauskisgeneraattori.core.extract_tracks.call(null,inst_17830);
var inst_17834 = cljs.core.shuffle.call(null,inst_17833);
var inst_17835 = cljs.core.take.call(null,(100),inst_17834);
var inst_17836 = cljs.core.filter.call(null,inst_17832,inst_17835);
var inst_17837 = [from,to,inst_17836];
var inst_17838 = cljs.core.PersistentHashMap.fromArrays(inst_17831,inst_17837);
var inst_17839 = cljs.core.reset_BANG_.call(null,hauskisgeneraattori.core.state,inst_17838);
var state_17841__$1 = state_17841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17841__$1,inst_17839);
} else {
return null;
}
}
});})(c__14153__auto__))
;
return ((function (switch__14088__auto__,c__14153__auto__){
return (function() {
var hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto__ = null;
var hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto____0 = (function (){
var statearr_17846 = [null,null,null,null,null,null,null];
(statearr_17846[(0)] = hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto__);

(statearr_17846[(1)] = (1));

return statearr_17846;
});
var hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto____1 = (function (state_17841){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_17841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e17847){if((e17847 instanceof Object)){
var ex__14092__auto__ = e17847;
var statearr_17848_17850 = state_17841;
(statearr_17848_17850[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17851 = state_17841;
state_17841 = G__17851;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto__ = function(state_17841){
switch(arguments.length){
case 0:
return hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto____0.call(this);
case 1:
return hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto____1.call(this,state_17841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto____0;
hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto____1;
return hauskisgeneraattori$core$get_tracks_BANG__$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto__))
})();
var state__14155__auto__ = (function (){var statearr_17849 = f__14154__auto__.call(null);
(statearr_17849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto__);

return statearr_17849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto__))
);

return c__14153__auto__;
});
hauskisgeneraattori.core.api = "http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=c7ca4df78b1fb6267e80eb2ec596a278&format=json";
hauskisgeneraattori.core.form = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
var from = e.target.elements.from.value;
var to = e.target.elements.to.value;
e.preventDefault();

return hauskisgeneraattori.core.get_tracks_BANG_.call(null,hauskisgeneraattori.core.api,from,to);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"form-horizontal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"from",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"L\u00E4ht\u00F6sana",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"form-group"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-sm-8"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"to",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Kohdesana",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"form-control"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-default"], null)], null)], null)], null)], null);
hauskisgeneraattori.core.item_to_string = (function hauskisgeneraattori$core$item_to_string(item){
return [cljs.core.str(new cljs.core.Keyword(null,"artist","artist",152869709).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.str(": "),cljs.core.str(new cljs.core.Keyword(null,"track","track",195787487).cljs$core$IFn$_invoke$arity$1(item))].join('');
});
hauskisgeneraattori.core.edit_item = (function hauskisgeneraattori$core$edit_item(item,to,from){
var istring = hauskisgeneraattori.core.item_to_string.call(null,item);
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,istring,from,to),clojure.string.capitalize.call(null,from),clojure.string.capitalize.call(null,to)),clojure.string.upper_case.call(null,from),clojure.string.upper_case.call(null,to)),clojure.string.lower_case.call(null,from),clojure.string.lower_case.call(null,to));
});
hauskisgeneraattori.core.table = (function hauskisgeneraattori$core$table(sequence){
var to = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hauskisgeneraattori.core.state));
var from = new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hauskisgeneraattori.core.state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-bordered","table.table.table-striped.table-bordered",1871142382),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-spacing","cell-spacing",769666488),"0",new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hauskisgeneraattori.core.state))))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead>tr","thead>tr",-1341733367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Hauskiksia"], null)], null)),cljs.core.doall.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__7197__auto__ = ((function (to,from){
return (function hauskisgeneraattori$core$table_$_iter__17856(s__17857){
return (new cljs.core.LazySeq(null,((function (to,from){
return (function (){
var s__17857__$1 = s__17857;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__17857__$1);
if(temp__4657__auto__){
var s__17857__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17857__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__17857__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__17859 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__17858 = (0);
while(true){
if((i__17858 < size__7196__auto__)){
var item = cljs.core._nth.call(null,c__7195__auto__,i__17858);
cljs.core.chunk_append.call(null,b__17859,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),hauskisgeneraattori.core.edit_item.call(null,item,to,from)], null)], null));

var G__17860 = (i__17858 + (1));
i__17858 = G__17860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17859),hauskisgeneraattori$core$table_$_iter__17856.call(null,cljs.core.chunk_rest.call(null,s__17857__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17859),null);
}
} else {
var item = cljs.core.first.call(null,s__17857__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),hauskisgeneraattori.core.edit_item.call(null,item,to,from)], null)], null),hauskisgeneraattori$core$table_$_iter__17856.call(null,cljs.core.rest.call(null,s__17857__$2)));
}
} else {
return null;
}
break;
}
});})(to,from))
,null,null));
});})(to,from))
;
return iter__7197__auto__.call(null,sequence);
})()))], null);
});
hauskisgeneraattori.core.home_page = (function hauskisgeneraattori$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Hauskisgeneraattori"], null),hauskisgeneraattori.core.form,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hauskisgeneraattori.core.table,new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hauskisgeneraattori.core.state))], null)], null);
});
hauskisgeneraattori.core.mount_root = (function hauskisgeneraattori$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hauskisgeneraattori.core.home_page], null),document.getElementById("app"));
});
hauskisgeneraattori.core.init_BANG_ = (function hauskisgeneraattori$core$init_BANG_(){
return hauskisgeneraattori.core.mount_root.call(null);
});
