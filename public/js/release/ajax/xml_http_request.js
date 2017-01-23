// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11973,handler){
var map__11974 = p__11973;
var map__11974__$1 = ((((!((map__11974 == null)))?((((map__11974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11974):map__11974);
var uri = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__11974__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11974,map__11974__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11972_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__11972_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__11974,map__11974__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___11986 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___11986)){
var response_type_11987 = temp__4657__auto___11986;
this$__$1.responseType = cljs.core.name.call(null,response_type_11987);
} else {
}

var seq__11976_11988 = cljs.core.seq.call(null,headers);
var chunk__11977_11989 = null;
var count__11978_11990 = (0);
var i__11979_11991 = (0);
while(true){
if((i__11979_11991 < count__11978_11990)){
var vec__11980_11992 = cljs.core._nth.call(null,chunk__11977_11989,i__11979_11991);
var k_11993 = cljs.core.nth.call(null,vec__11980_11992,(0),null);
var v_11994 = cljs.core.nth.call(null,vec__11980_11992,(1),null);
this$__$1.setRequestHeader(k_11993,v_11994);

var G__11995 = seq__11976_11988;
var G__11996 = chunk__11977_11989;
var G__11997 = count__11978_11990;
var G__11998 = (i__11979_11991 + (1));
seq__11976_11988 = G__11995;
chunk__11977_11989 = G__11996;
count__11978_11990 = G__11997;
i__11979_11991 = G__11998;
continue;
} else {
var temp__4657__auto___11999 = cljs.core.seq.call(null,seq__11976_11988);
if(temp__4657__auto___11999){
var seq__11976_12000__$1 = temp__4657__auto___11999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11976_12000__$1)){
var c__7228__auto___12001 = cljs.core.chunk_first.call(null,seq__11976_12000__$1);
var G__12002 = cljs.core.chunk_rest.call(null,seq__11976_12000__$1);
var G__12003 = c__7228__auto___12001;
var G__12004 = cljs.core.count.call(null,c__7228__auto___12001);
var G__12005 = (0);
seq__11976_11988 = G__12002;
chunk__11977_11989 = G__12003;
count__11978_11990 = G__12004;
i__11979_11991 = G__12005;
continue;
} else {
var vec__11983_12006 = cljs.core.first.call(null,seq__11976_12000__$1);
var k_12007 = cljs.core.nth.call(null,vec__11983_12006,(0),null);
var v_12008 = cljs.core.nth.call(null,vec__11983_12006,(1),null);
this$__$1.setRequestHeader(k_12007,v_12008);

var G__12009 = cljs.core.next.call(null,seq__11976_12000__$1);
var G__12010 = null;
var G__12011 = (0);
var G__12012 = (0);
seq__11976_11988 = G__12009;
chunk__11977_11989 = G__12010;
count__11978_11990 = G__12011;
i__11979_11991 = G__12012;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6417__auto__ = body;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
