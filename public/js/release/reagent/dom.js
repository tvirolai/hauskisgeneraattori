// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6417__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_17456 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_17456){
return (function (){
var _STAR_always_update_STAR_17457 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17457;
}});})(_STAR_always_update_STAR_17456))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17456;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args17458 = [];
var len__7492__auto___17461 = arguments.length;
var i__7493__auto___17462 = (0);
while(true){
if((i__7493__auto___17462 < len__7492__auto___17461)){
args17458.push((arguments[i__7493__auto___17462]));

var G__17463 = (i__7493__auto___17462 + (1));
i__7493__auto___17462 = G__17463;
continue;
} else {
}
break;
}

var G__17460 = args17458.length;
switch (G__17460) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17458.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__17469_17473 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__17470_17474 = null;
var count__17471_17475 = (0);
var i__17472_17476 = (0);
while(true){
if((i__17472_17476 < count__17471_17475)){
var v_17477 = cljs.core._nth.call(null,chunk__17470_17474,i__17472_17476);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_17477);

var G__17478 = seq__17469_17473;
var G__17479 = chunk__17470_17474;
var G__17480 = count__17471_17475;
var G__17481 = (i__17472_17476 + (1));
seq__17469_17473 = G__17478;
chunk__17470_17474 = G__17479;
count__17471_17475 = G__17480;
i__17472_17476 = G__17481;
continue;
} else {
var temp__4657__auto___17482 = cljs.core.seq.call(null,seq__17469_17473);
if(temp__4657__auto___17482){
var seq__17469_17483__$1 = temp__4657__auto___17482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17469_17483__$1)){
var c__7228__auto___17484 = cljs.core.chunk_first.call(null,seq__17469_17483__$1);
var G__17485 = cljs.core.chunk_rest.call(null,seq__17469_17483__$1);
var G__17486 = c__7228__auto___17484;
var G__17487 = cljs.core.count.call(null,c__7228__auto___17484);
var G__17488 = (0);
seq__17469_17473 = G__17485;
chunk__17470_17474 = G__17486;
count__17471_17475 = G__17487;
i__17472_17476 = G__17488;
continue;
} else {
var v_17489 = cljs.core.first.call(null,seq__17469_17483__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_17489);

var G__17490 = cljs.core.next.call(null,seq__17469_17483__$1);
var G__17491 = null;
var G__17492 = (0);
var G__17493 = (0);
seq__17469_17473 = G__17490;
chunk__17470_17474 = G__17491;
count__17471_17475 = G__17492;
i__17472_17476 = G__17493;
continue;
}
} else {
}
}
break;
}

return "Updated";
});