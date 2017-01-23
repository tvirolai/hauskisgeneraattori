// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11878__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11879__i = 0, G__11879__a = new Array(arguments.length -  0);
while (G__11879__i < G__11879__a.length) {G__11879__a[G__11879__i] = arguments[G__11879__i + 0]; ++G__11879__i;}
  args = new cljs.core.IndexedSeq(G__11879__a,0);
} 
return G__11878__delegate.call(this,args);};
G__11878.cljs$lang$maxFixedArity = 0;
G__11878.cljs$lang$applyTo = (function (arglist__11880){
var args = cljs.core.seq(arglist__11880);
return G__11878__delegate(args);
});
G__11878.cljs$core$IFn$_invoke$arity$variadic = G__11878__delegate;
return G__11878;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11881__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11882__i = 0, G__11882__a = new Array(arguments.length -  0);
while (G__11882__i < G__11882__a.length) {G__11882__a[G__11882__i] = arguments[G__11882__i + 0]; ++G__11882__i;}
  args = new cljs.core.IndexedSeq(G__11882__a,0);
} 
return G__11881__delegate.call(this,args);};
G__11881.cljs$lang$maxFixedArity = 0;
G__11881.cljs$lang$applyTo = (function (arglist__11883){
var args = cljs.core.seq(arglist__11883);
return G__11881__delegate(args);
});
G__11881.cljs$core$IFn$_invoke$arity$variadic = G__11881__delegate;
return G__11881;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
