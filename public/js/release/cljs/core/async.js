// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14198 = [];
var len__7492__auto___14204 = arguments.length;
var i__7493__auto___14205 = (0);
while(true){
if((i__7493__auto___14205 < len__7492__auto___14204)){
args14198.push((arguments[i__7493__auto___14205]));

var G__14206 = (i__7493__auto___14205 + (1));
i__7493__auto___14205 = G__14206;
continue;
} else {
}
break;
}

var G__14200 = args14198.length;
switch (G__14200) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14198.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14201 = (function (f,blockable,meta14202){
this.f = f;
this.blockable = blockable;
this.meta14202 = meta14202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14203,meta14202__$1){
var self__ = this;
var _14203__$1 = this;
return (new cljs.core.async.t_cljs$core$async14201(self__.f,self__.blockable,meta14202__$1));
});

cljs.core.async.t_cljs$core$async14201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14203){
var self__ = this;
var _14203__$1 = this;
return self__.meta14202;
});

cljs.core.async.t_cljs$core$async14201.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14201.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14201.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14201.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14202","meta14202",628000594,null)], null);
});

cljs.core.async.t_cljs$core$async14201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14201";

cljs.core.async.t_cljs$core$async14201.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async14201");
});

cljs.core.async.__GT_t_cljs$core$async14201 = (function cljs$core$async$__GT_t_cljs$core$async14201(f__$1,blockable__$1,meta14202){
return (new cljs.core.async.t_cljs$core$async14201(f__$1,blockable__$1,meta14202));
});

}

return (new cljs.core.async.t_cljs$core$async14201(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14210 = [];
var len__7492__auto___14213 = arguments.length;
var i__7493__auto___14214 = (0);
while(true){
if((i__7493__auto___14214 < len__7492__auto___14213)){
args14210.push((arguments[i__7493__auto___14214]));

var G__14215 = (i__7493__auto___14214 + (1));
i__7493__auto___14214 = G__14215;
continue;
} else {
}
break;
}

var G__14212 = args14210.length;
switch (G__14212) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14210.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args14217 = [];
var len__7492__auto___14220 = arguments.length;
var i__7493__auto___14221 = (0);
while(true){
if((i__7493__auto___14221 < len__7492__auto___14220)){
args14217.push((arguments[i__7493__auto___14221]));

var G__14222 = (i__7493__auto___14221 + (1));
i__7493__auto___14221 = G__14222;
continue;
} else {
}
break;
}

var G__14219 = args14217.length;
switch (G__14219) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14217.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14224 = [];
var len__7492__auto___14227 = arguments.length;
var i__7493__auto___14228 = (0);
while(true){
if((i__7493__auto___14228 < len__7492__auto___14227)){
args14224.push((arguments[i__7493__auto___14228]));

var G__14229 = (i__7493__auto___14228 + (1));
i__7493__auto___14228 = G__14229;
continue;
} else {
}
break;
}

var G__14226 = args14224.length;
switch (G__14226) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14224.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14231 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14231);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14231,ret){
return (function (){
return fn1.call(null,val_14231);
});})(val_14231,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14232 = [];
var len__7492__auto___14235 = arguments.length;
var i__7493__auto___14236 = (0);
while(true){
if((i__7493__auto___14236 < len__7492__auto___14235)){
args14232.push((arguments[i__7493__auto___14236]));

var G__14237 = (i__7493__auto___14236 + (1));
i__7493__auto___14236 = G__14237;
continue;
} else {
}
break;
}

var G__14234 = args14232.length;
switch (G__14234) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14232.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7332__auto___14239 = n;
var x_14240 = (0);
while(true){
if((x_14240 < n__7332__auto___14239)){
(a[x_14240] = (0));

var G__14241 = (x_14240 + (1));
x_14240 = G__14241;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14242 = (i + (1));
i = G__14242;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14246 = (function (alt_flag,flag,meta14247){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14247 = meta14247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14248,meta14247__$1){
var self__ = this;
var _14248__$1 = this;
return (new cljs.core.async.t_cljs$core$async14246(self__.alt_flag,self__.flag,meta14247__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14248){
var self__ = this;
var _14248__$1 = this;
return self__.meta14247;
});})(flag))
;

cljs.core.async.t_cljs$core$async14246.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14246.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14246.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14247","meta14247",-278945319,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14246";

cljs.core.async.t_cljs$core$async14246.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async14246");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14246 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14246(alt_flag__$1,flag__$1,meta14247){
return (new cljs.core.async.t_cljs$core$async14246(alt_flag__$1,flag__$1,meta14247));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14246(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14252 = (function (alt_handler,flag,cb,meta14253){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14253 = meta14253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14254,meta14253__$1){
var self__ = this;
var _14254__$1 = this;
return (new cljs.core.async.t_cljs$core$async14252(self__.alt_handler,self__.flag,self__.cb,meta14253__$1));
});

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14254){
var self__ = this;
var _14254__$1 = this;
return self__.meta14253;
});

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14253","meta14253",-1764115349,null)], null);
});

cljs.core.async.t_cljs$core$async14252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14252";

cljs.core.async.t_cljs$core$async14252.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async14252");
});

cljs.core.async.__GT_t_cljs$core$async14252 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14252(alt_handler__$1,flag__$1,cb__$1,meta14253){
return (new cljs.core.async.t_cljs$core$async14252(alt_handler__$1,flag__$1,cb__$1,meta14253));
});

}

return (new cljs.core.async.t_cljs$core$async14252(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14255_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14255_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14256_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14256_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6417__auto__ = wport;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14257 = (i + (1));
i = G__14257;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6417__auto__ = ret;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6405__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6405__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14263 = arguments.length;
var i__7493__auto___14264 = (0);
while(true){
if((i__7493__auto___14264 < len__7492__auto___14263)){
args__7499__auto__.push((arguments[i__7493__auto___14264]));

var G__14265 = (i__7493__auto___14264 + (1));
i__7493__auto___14264 = G__14265;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14260){
var map__14261 = p__14260;
var map__14261__$1 = ((((!((map__14261 == null)))?((((map__14261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14261):map__14261);
var opts = map__14261__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14258){
var G__14259 = cljs.core.first.call(null,seq14258);
var seq14258__$1 = cljs.core.next.call(null,seq14258);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14259,seq14258__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14266 = [];
var len__7492__auto___14316 = arguments.length;
var i__7493__auto___14317 = (0);
while(true){
if((i__7493__auto___14317 < len__7492__auto___14316)){
args14266.push((arguments[i__7493__auto___14317]));

var G__14318 = (i__7493__auto___14317 + (1));
i__7493__auto___14317 = G__14318;
continue;
} else {
}
break;
}

var G__14268 = args14266.length;
switch (G__14268) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14266.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14153__auto___14320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___14320){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___14320){
return (function (state_14292){
var state_val_14293 = (state_14292[(1)]);
if((state_val_14293 === (7))){
var inst_14288 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14294_14321 = state_14292__$1;
(statearr_14294_14321[(2)] = inst_14288);

(statearr_14294_14321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (1))){
var state_14292__$1 = state_14292;
var statearr_14295_14322 = state_14292__$1;
(statearr_14295_14322[(2)] = null);

(statearr_14295_14322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (4))){
var inst_14271 = (state_14292[(7)]);
var inst_14271__$1 = (state_14292[(2)]);
var inst_14272 = (inst_14271__$1 == null);
var state_14292__$1 = (function (){var statearr_14296 = state_14292;
(statearr_14296[(7)] = inst_14271__$1);

return statearr_14296;
})();
if(cljs.core.truth_(inst_14272)){
var statearr_14297_14323 = state_14292__$1;
(statearr_14297_14323[(1)] = (5));

} else {
var statearr_14298_14324 = state_14292__$1;
(statearr_14298_14324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (13))){
var state_14292__$1 = state_14292;
var statearr_14299_14325 = state_14292__$1;
(statearr_14299_14325[(2)] = null);

(statearr_14299_14325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (6))){
var inst_14271 = (state_14292[(7)]);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14292__$1,(11),to,inst_14271);
} else {
if((state_val_14293 === (3))){
var inst_14290 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14292__$1,inst_14290);
} else {
if((state_val_14293 === (12))){
var state_14292__$1 = state_14292;
var statearr_14300_14326 = state_14292__$1;
(statearr_14300_14326[(2)] = null);

(statearr_14300_14326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (2))){
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14292__$1,(4),from);
} else {
if((state_val_14293 === (11))){
var inst_14281 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
if(cljs.core.truth_(inst_14281)){
var statearr_14301_14327 = state_14292__$1;
(statearr_14301_14327[(1)] = (12));

} else {
var statearr_14302_14328 = state_14292__$1;
(statearr_14302_14328[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (9))){
var state_14292__$1 = state_14292;
var statearr_14303_14329 = state_14292__$1;
(statearr_14303_14329[(2)] = null);

(statearr_14303_14329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (5))){
var state_14292__$1 = state_14292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14304_14330 = state_14292__$1;
(statearr_14304_14330[(1)] = (8));

} else {
var statearr_14305_14331 = state_14292__$1;
(statearr_14305_14331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (14))){
var inst_14286 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14306_14332 = state_14292__$1;
(statearr_14306_14332[(2)] = inst_14286);

(statearr_14306_14332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (10))){
var inst_14278 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14307_14333 = state_14292__$1;
(statearr_14307_14333[(2)] = inst_14278);

(statearr_14307_14333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (8))){
var inst_14275 = cljs.core.async.close_BANG_.call(null,to);
var state_14292__$1 = state_14292;
var statearr_14308_14334 = state_14292__$1;
(statearr_14308_14334[(2)] = inst_14275);

(statearr_14308_14334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___14320))
;
return ((function (switch__14088__auto__,c__14153__auto___14320){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_14312 = [null,null,null,null,null,null,null,null];
(statearr_14312[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_14312[(1)] = (1));

return statearr_14312;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_14292){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14313){if((e14313 instanceof Object)){
var ex__14092__auto__ = e14313;
var statearr_14314_14335 = state_14292;
(statearr_14314_14335[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14336 = state_14292;
state_14292 = G__14336;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___14320))
})();
var state__14155__auto__ = (function (){var statearr_14315 = f__14154__auto__.call(null);
(statearr_14315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___14320);

return statearr_14315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___14320))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14524){
var vec__14525 = p__14524;
var v = cljs.core.nth.call(null,vec__14525,(0),null);
var p = cljs.core.nth.call(null,vec__14525,(1),null);
var job = vec__14525;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__14153__auto___14711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___14711,res,vec__14525,v,p,job,jobs,results){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___14711,res,vec__14525,v,p,job,jobs,results){
return (function (state_14532){
var state_val_14533 = (state_14532[(1)]);
if((state_val_14533 === (1))){
var state_14532__$1 = state_14532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14532__$1,(2),res,v);
} else {
if((state_val_14533 === (2))){
var inst_14529 = (state_14532[(2)]);
var inst_14530 = cljs.core.async.close_BANG_.call(null,res);
var state_14532__$1 = (function (){var statearr_14534 = state_14532;
(statearr_14534[(7)] = inst_14529);

return statearr_14534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14532__$1,inst_14530);
} else {
return null;
}
}
});})(c__14153__auto___14711,res,vec__14525,v,p,job,jobs,results))
;
return ((function (switch__14088__auto__,c__14153__auto___14711,res,vec__14525,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0 = (function (){
var statearr_14538 = [null,null,null,null,null,null,null,null];
(statearr_14538[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__);

(statearr_14538[(1)] = (1));

return statearr_14538;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1 = (function (state_14532){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14539){if((e14539 instanceof Object)){
var ex__14092__auto__ = e14539;
var statearr_14540_14712 = state_14532;
(statearr_14540_14712[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14713 = state_14532;
state_14532 = G__14713;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = function(state_14532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1.call(this,state_14532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___14711,res,vec__14525,v,p,job,jobs,results))
})();
var state__14155__auto__ = (function (){var statearr_14541 = f__14154__auto__.call(null);
(statearr_14541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___14711);

return statearr_14541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___14711,res,vec__14525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14542){
var vec__14543 = p__14542;
var v = cljs.core.nth.call(null,vec__14543,(0),null);
var p = cljs.core.nth.call(null,vec__14543,(1),null);
var job = vec__14543;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7332__auto___14714 = n;
var __14715 = (0);
while(true){
if((__14715 < n__7332__auto___14714)){
var G__14546_14716 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14546_14716) {
case "compute":
var c__14153__auto___14718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14715,c__14153__auto___14718,G__14546_14716,n__7332__auto___14714,jobs,results,process,async){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (__14715,c__14153__auto___14718,G__14546_14716,n__7332__auto___14714,jobs,results,process,async){
return (function (state_14559){
var state_val_14560 = (state_14559[(1)]);
if((state_val_14560 === (1))){
var state_14559__$1 = state_14559;
var statearr_14561_14719 = state_14559__$1;
(statearr_14561_14719[(2)] = null);

(statearr_14561_14719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14560 === (2))){
var state_14559__$1 = state_14559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14559__$1,(4),jobs);
} else {
if((state_val_14560 === (3))){
var inst_14557 = (state_14559[(2)]);
var state_14559__$1 = state_14559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14559__$1,inst_14557);
} else {
if((state_val_14560 === (4))){
var inst_14549 = (state_14559[(2)]);
var inst_14550 = process.call(null,inst_14549);
var state_14559__$1 = state_14559;
if(cljs.core.truth_(inst_14550)){
var statearr_14562_14720 = state_14559__$1;
(statearr_14562_14720[(1)] = (5));

} else {
var statearr_14563_14721 = state_14559__$1;
(statearr_14563_14721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14560 === (5))){
var state_14559__$1 = state_14559;
var statearr_14564_14722 = state_14559__$1;
(statearr_14564_14722[(2)] = null);

(statearr_14564_14722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14560 === (6))){
var state_14559__$1 = state_14559;
var statearr_14565_14723 = state_14559__$1;
(statearr_14565_14723[(2)] = null);

(statearr_14565_14723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14560 === (7))){
var inst_14555 = (state_14559[(2)]);
var state_14559__$1 = state_14559;
var statearr_14566_14724 = state_14559__$1;
(statearr_14566_14724[(2)] = inst_14555);

(statearr_14566_14724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14715,c__14153__auto___14718,G__14546_14716,n__7332__auto___14714,jobs,results,process,async))
;
return ((function (__14715,switch__14088__auto__,c__14153__auto___14718,G__14546_14716,n__7332__auto___14714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0 = (function (){
var statearr_14570 = [null,null,null,null,null,null,null];
(statearr_14570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__);

(statearr_14570[(1)] = (1));

return statearr_14570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1 = (function (state_14559){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14571){if((e14571 instanceof Object)){
var ex__14092__auto__ = e14571;
var statearr_14572_14725 = state_14559;
(statearr_14572_14725[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14726 = state_14559;
state_14559 = G__14726;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = function(state_14559){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1.call(this,state_14559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__;
})()
;})(__14715,switch__14088__auto__,c__14153__auto___14718,G__14546_14716,n__7332__auto___14714,jobs,results,process,async))
})();
var state__14155__auto__ = (function (){var statearr_14573 = f__14154__auto__.call(null);
(statearr_14573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___14718);

return statearr_14573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(__14715,c__14153__auto___14718,G__14546_14716,n__7332__auto___14714,jobs,results,process,async))
);


break;
case "async":
var c__14153__auto___14727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14715,c__14153__auto___14727,G__14546_14716,n__7332__auto___14714,jobs,results,process,async){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (__14715,c__14153__auto___14727,G__14546_14716,n__7332__auto___14714,jobs,results,process,async){
return (function (state_14586){
var state_val_14587 = (state_14586[(1)]);
if((state_val_14587 === (1))){
var state_14586__$1 = state_14586;
var statearr_14588_14728 = state_14586__$1;
(statearr_14588_14728[(2)] = null);

(statearr_14588_14728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (2))){
var state_14586__$1 = state_14586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14586__$1,(4),jobs);
} else {
if((state_val_14587 === (3))){
var inst_14584 = (state_14586[(2)]);
var state_14586__$1 = state_14586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14586__$1,inst_14584);
} else {
if((state_val_14587 === (4))){
var inst_14576 = (state_14586[(2)]);
var inst_14577 = async.call(null,inst_14576);
var state_14586__$1 = state_14586;
if(cljs.core.truth_(inst_14577)){
var statearr_14589_14729 = state_14586__$1;
(statearr_14589_14729[(1)] = (5));

} else {
var statearr_14590_14730 = state_14586__$1;
(statearr_14590_14730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (5))){
var state_14586__$1 = state_14586;
var statearr_14591_14731 = state_14586__$1;
(statearr_14591_14731[(2)] = null);

(statearr_14591_14731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (6))){
var state_14586__$1 = state_14586;
var statearr_14592_14732 = state_14586__$1;
(statearr_14592_14732[(2)] = null);

(statearr_14592_14732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14587 === (7))){
var inst_14582 = (state_14586[(2)]);
var state_14586__$1 = state_14586;
var statearr_14593_14733 = state_14586__$1;
(statearr_14593_14733[(2)] = inst_14582);

(statearr_14593_14733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14715,c__14153__auto___14727,G__14546_14716,n__7332__auto___14714,jobs,results,process,async))
;
return ((function (__14715,switch__14088__auto__,c__14153__auto___14727,G__14546_14716,n__7332__auto___14714,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0 = (function (){
var statearr_14597 = [null,null,null,null,null,null,null];
(statearr_14597[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__);

(statearr_14597[(1)] = (1));

return statearr_14597;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1 = (function (state_14586){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14598){if((e14598 instanceof Object)){
var ex__14092__auto__ = e14598;
var statearr_14599_14734 = state_14586;
(statearr_14599_14734[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14735 = state_14586;
state_14586 = G__14735;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = function(state_14586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1.call(this,state_14586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__;
})()
;})(__14715,switch__14088__auto__,c__14153__auto___14727,G__14546_14716,n__7332__auto___14714,jobs,results,process,async))
})();
var state__14155__auto__ = (function (){var statearr_14600 = f__14154__auto__.call(null);
(statearr_14600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___14727);

return statearr_14600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(__14715,c__14153__auto___14727,G__14546_14716,n__7332__auto___14714,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14736 = (__14715 + (1));
__14715 = G__14736;
continue;
} else {
}
break;
}

var c__14153__auto___14737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___14737,jobs,results,process,async){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___14737,jobs,results,process,async){
return (function (state_14622){
var state_val_14623 = (state_14622[(1)]);
if((state_val_14623 === (1))){
var state_14622__$1 = state_14622;
var statearr_14624_14738 = state_14622__$1;
(statearr_14624_14738[(2)] = null);

(statearr_14624_14738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14623 === (2))){
var state_14622__$1 = state_14622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14622__$1,(4),from);
} else {
if((state_val_14623 === (3))){
var inst_14620 = (state_14622[(2)]);
var state_14622__$1 = state_14622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14622__$1,inst_14620);
} else {
if((state_val_14623 === (4))){
var inst_14603 = (state_14622[(7)]);
var inst_14603__$1 = (state_14622[(2)]);
var inst_14604 = (inst_14603__$1 == null);
var state_14622__$1 = (function (){var statearr_14625 = state_14622;
(statearr_14625[(7)] = inst_14603__$1);

return statearr_14625;
})();
if(cljs.core.truth_(inst_14604)){
var statearr_14626_14739 = state_14622__$1;
(statearr_14626_14739[(1)] = (5));

} else {
var statearr_14627_14740 = state_14622__$1;
(statearr_14627_14740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14623 === (5))){
var inst_14606 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14622__$1 = state_14622;
var statearr_14628_14741 = state_14622__$1;
(statearr_14628_14741[(2)] = inst_14606);

(statearr_14628_14741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14623 === (6))){
var inst_14603 = (state_14622[(7)]);
var inst_14608 = (state_14622[(8)]);
var inst_14608__$1 = cljs.core.async.chan.call(null,(1));
var inst_14609 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14610 = [inst_14603,inst_14608__$1];
var inst_14611 = (new cljs.core.PersistentVector(null,2,(5),inst_14609,inst_14610,null));
var state_14622__$1 = (function (){var statearr_14629 = state_14622;
(statearr_14629[(8)] = inst_14608__$1);

return statearr_14629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14622__$1,(8),jobs,inst_14611);
} else {
if((state_val_14623 === (7))){
var inst_14618 = (state_14622[(2)]);
var state_14622__$1 = state_14622;
var statearr_14630_14742 = state_14622__$1;
(statearr_14630_14742[(2)] = inst_14618);

(statearr_14630_14742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14623 === (8))){
var inst_14608 = (state_14622[(8)]);
var inst_14613 = (state_14622[(2)]);
var state_14622__$1 = (function (){var statearr_14631 = state_14622;
(statearr_14631[(9)] = inst_14613);

return statearr_14631;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14622__$1,(9),results,inst_14608);
} else {
if((state_val_14623 === (9))){
var inst_14615 = (state_14622[(2)]);
var state_14622__$1 = (function (){var statearr_14632 = state_14622;
(statearr_14632[(10)] = inst_14615);

return statearr_14632;
})();
var statearr_14633_14743 = state_14622__$1;
(statearr_14633_14743[(2)] = null);

(statearr_14633_14743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___14737,jobs,results,process,async))
;
return ((function (switch__14088__auto__,c__14153__auto___14737,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0 = (function (){
var statearr_14637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__);

(statearr_14637[(1)] = (1));

return statearr_14637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1 = (function (state_14622){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14638){if((e14638 instanceof Object)){
var ex__14092__auto__ = e14638;
var statearr_14639_14744 = state_14622;
(statearr_14639_14744[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14745 = state_14622;
state_14622 = G__14745;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = function(state_14622){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1.call(this,state_14622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___14737,jobs,results,process,async))
})();
var state__14155__auto__ = (function (){var statearr_14640 = f__14154__auto__.call(null);
(statearr_14640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___14737);

return statearr_14640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___14737,jobs,results,process,async))
);


var c__14153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto__,jobs,results,process,async){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto__,jobs,results,process,async){
return (function (state_14678){
var state_val_14679 = (state_14678[(1)]);
if((state_val_14679 === (7))){
var inst_14674 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14680_14746 = state_14678__$1;
(statearr_14680_14746[(2)] = inst_14674);

(statearr_14680_14746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (20))){
var state_14678__$1 = state_14678;
var statearr_14681_14747 = state_14678__$1;
(statearr_14681_14747[(2)] = null);

(statearr_14681_14747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (1))){
var state_14678__$1 = state_14678;
var statearr_14682_14748 = state_14678__$1;
(statearr_14682_14748[(2)] = null);

(statearr_14682_14748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (4))){
var inst_14643 = (state_14678[(7)]);
var inst_14643__$1 = (state_14678[(2)]);
var inst_14644 = (inst_14643__$1 == null);
var state_14678__$1 = (function (){var statearr_14683 = state_14678;
(statearr_14683[(7)] = inst_14643__$1);

return statearr_14683;
})();
if(cljs.core.truth_(inst_14644)){
var statearr_14684_14749 = state_14678__$1;
(statearr_14684_14749[(1)] = (5));

} else {
var statearr_14685_14750 = state_14678__$1;
(statearr_14685_14750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (15))){
var inst_14656 = (state_14678[(8)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14678__$1,(18),to,inst_14656);
} else {
if((state_val_14679 === (21))){
var inst_14669 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14686_14751 = state_14678__$1;
(statearr_14686_14751[(2)] = inst_14669);

(statearr_14686_14751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (13))){
var inst_14671 = (state_14678[(2)]);
var state_14678__$1 = (function (){var statearr_14687 = state_14678;
(statearr_14687[(9)] = inst_14671);

return statearr_14687;
})();
var statearr_14688_14752 = state_14678__$1;
(statearr_14688_14752[(2)] = null);

(statearr_14688_14752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (6))){
var inst_14643 = (state_14678[(7)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14678__$1,(11),inst_14643);
} else {
if((state_val_14679 === (17))){
var inst_14664 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
if(cljs.core.truth_(inst_14664)){
var statearr_14689_14753 = state_14678__$1;
(statearr_14689_14753[(1)] = (19));

} else {
var statearr_14690_14754 = state_14678__$1;
(statearr_14690_14754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (3))){
var inst_14676 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14678__$1,inst_14676);
} else {
if((state_val_14679 === (12))){
var inst_14653 = (state_14678[(10)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14678__$1,(14),inst_14653);
} else {
if((state_val_14679 === (2))){
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14678__$1,(4),results);
} else {
if((state_val_14679 === (19))){
var state_14678__$1 = state_14678;
var statearr_14691_14755 = state_14678__$1;
(statearr_14691_14755[(2)] = null);

(statearr_14691_14755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (11))){
var inst_14653 = (state_14678[(2)]);
var state_14678__$1 = (function (){var statearr_14692 = state_14678;
(statearr_14692[(10)] = inst_14653);

return statearr_14692;
})();
var statearr_14693_14756 = state_14678__$1;
(statearr_14693_14756[(2)] = null);

(statearr_14693_14756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (9))){
var state_14678__$1 = state_14678;
var statearr_14694_14757 = state_14678__$1;
(statearr_14694_14757[(2)] = null);

(statearr_14694_14757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (5))){
var state_14678__$1 = state_14678;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14695_14758 = state_14678__$1;
(statearr_14695_14758[(1)] = (8));

} else {
var statearr_14696_14759 = state_14678__$1;
(statearr_14696_14759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (14))){
var inst_14656 = (state_14678[(8)]);
var inst_14658 = (state_14678[(11)]);
var inst_14656__$1 = (state_14678[(2)]);
var inst_14657 = (inst_14656__$1 == null);
var inst_14658__$1 = cljs.core.not.call(null,inst_14657);
var state_14678__$1 = (function (){var statearr_14697 = state_14678;
(statearr_14697[(8)] = inst_14656__$1);

(statearr_14697[(11)] = inst_14658__$1);

return statearr_14697;
})();
if(inst_14658__$1){
var statearr_14698_14760 = state_14678__$1;
(statearr_14698_14760[(1)] = (15));

} else {
var statearr_14699_14761 = state_14678__$1;
(statearr_14699_14761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (16))){
var inst_14658 = (state_14678[(11)]);
var state_14678__$1 = state_14678;
var statearr_14700_14762 = state_14678__$1;
(statearr_14700_14762[(2)] = inst_14658);

(statearr_14700_14762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (10))){
var inst_14650 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14701_14763 = state_14678__$1;
(statearr_14701_14763[(2)] = inst_14650);

(statearr_14701_14763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (18))){
var inst_14661 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14702_14764 = state_14678__$1;
(statearr_14702_14764[(2)] = inst_14661);

(statearr_14702_14764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (8))){
var inst_14647 = cljs.core.async.close_BANG_.call(null,to);
var state_14678__$1 = state_14678;
var statearr_14703_14765 = state_14678__$1;
(statearr_14703_14765[(2)] = inst_14647);

(statearr_14703_14765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto__,jobs,results,process,async))
;
return ((function (switch__14088__auto__,c__14153__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0 = (function (){
var statearr_14707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__);

(statearr_14707[(1)] = (1));

return statearr_14707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1 = (function (state_14678){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14708){if((e14708 instanceof Object)){
var ex__14092__auto__ = e14708;
var statearr_14709_14766 = state_14678;
(statearr_14709_14766[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14767 = state_14678;
state_14678 = G__14767;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__ = function(state_14678){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1.call(this,state_14678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14089__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto__,jobs,results,process,async))
})();
var state__14155__auto__ = (function (){var statearr_14710 = f__14154__auto__.call(null);
(statearr_14710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto__);

return statearr_14710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto__,jobs,results,process,async))
);

return c__14153__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14768 = [];
var len__7492__auto___14771 = arguments.length;
var i__7493__auto___14772 = (0);
while(true){
if((i__7493__auto___14772 < len__7492__auto___14771)){
args14768.push((arguments[i__7493__auto___14772]));

var G__14773 = (i__7493__auto___14772 + (1));
i__7493__auto___14772 = G__14773;
continue;
} else {
}
break;
}

var G__14770 = args14768.length;
switch (G__14770) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14768.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14775 = [];
var len__7492__auto___14778 = arguments.length;
var i__7493__auto___14779 = (0);
while(true){
if((i__7493__auto___14779 < len__7492__auto___14778)){
args14775.push((arguments[i__7493__auto___14779]));

var G__14780 = (i__7493__auto___14779 + (1));
i__7493__auto___14779 = G__14780;
continue;
} else {
}
break;
}

var G__14777 = args14775.length;
switch (G__14777) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14775.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14782 = [];
var len__7492__auto___14835 = arguments.length;
var i__7493__auto___14836 = (0);
while(true){
if((i__7493__auto___14836 < len__7492__auto___14835)){
args14782.push((arguments[i__7493__auto___14836]));

var G__14837 = (i__7493__auto___14836 + (1));
i__7493__auto___14836 = G__14837;
continue;
} else {
}
break;
}

var G__14784 = args14782.length;
switch (G__14784) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14782.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__14153__auto___14839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___14839,tc,fc){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___14839,tc,fc){
return (function (state_14810){
var state_val_14811 = (state_14810[(1)]);
if((state_val_14811 === (7))){
var inst_14806 = (state_14810[(2)]);
var state_14810__$1 = state_14810;
var statearr_14812_14840 = state_14810__$1;
(statearr_14812_14840[(2)] = inst_14806);

(statearr_14812_14840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (1))){
var state_14810__$1 = state_14810;
var statearr_14813_14841 = state_14810__$1;
(statearr_14813_14841[(2)] = null);

(statearr_14813_14841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (4))){
var inst_14787 = (state_14810[(7)]);
var inst_14787__$1 = (state_14810[(2)]);
var inst_14788 = (inst_14787__$1 == null);
var state_14810__$1 = (function (){var statearr_14814 = state_14810;
(statearr_14814[(7)] = inst_14787__$1);

return statearr_14814;
})();
if(cljs.core.truth_(inst_14788)){
var statearr_14815_14842 = state_14810__$1;
(statearr_14815_14842[(1)] = (5));

} else {
var statearr_14816_14843 = state_14810__$1;
(statearr_14816_14843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (13))){
var state_14810__$1 = state_14810;
var statearr_14817_14844 = state_14810__$1;
(statearr_14817_14844[(2)] = null);

(statearr_14817_14844[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (6))){
var inst_14787 = (state_14810[(7)]);
var inst_14793 = p.call(null,inst_14787);
var state_14810__$1 = state_14810;
if(cljs.core.truth_(inst_14793)){
var statearr_14818_14845 = state_14810__$1;
(statearr_14818_14845[(1)] = (9));

} else {
var statearr_14819_14846 = state_14810__$1;
(statearr_14819_14846[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (3))){
var inst_14808 = (state_14810[(2)]);
var state_14810__$1 = state_14810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14810__$1,inst_14808);
} else {
if((state_val_14811 === (12))){
var state_14810__$1 = state_14810;
var statearr_14820_14847 = state_14810__$1;
(statearr_14820_14847[(2)] = null);

(statearr_14820_14847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (2))){
var state_14810__$1 = state_14810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14810__$1,(4),ch);
} else {
if((state_val_14811 === (11))){
var inst_14787 = (state_14810[(7)]);
var inst_14797 = (state_14810[(2)]);
var state_14810__$1 = state_14810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14810__$1,(8),inst_14797,inst_14787);
} else {
if((state_val_14811 === (9))){
var state_14810__$1 = state_14810;
var statearr_14821_14848 = state_14810__$1;
(statearr_14821_14848[(2)] = tc);

(statearr_14821_14848[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (5))){
var inst_14790 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14791 = cljs.core.async.close_BANG_.call(null,fc);
var state_14810__$1 = (function (){var statearr_14822 = state_14810;
(statearr_14822[(8)] = inst_14790);

return statearr_14822;
})();
var statearr_14823_14849 = state_14810__$1;
(statearr_14823_14849[(2)] = inst_14791);

(statearr_14823_14849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (14))){
var inst_14804 = (state_14810[(2)]);
var state_14810__$1 = state_14810;
var statearr_14824_14850 = state_14810__$1;
(statearr_14824_14850[(2)] = inst_14804);

(statearr_14824_14850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (10))){
var state_14810__$1 = state_14810;
var statearr_14825_14851 = state_14810__$1;
(statearr_14825_14851[(2)] = fc);

(statearr_14825_14851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14811 === (8))){
var inst_14799 = (state_14810[(2)]);
var state_14810__$1 = state_14810;
if(cljs.core.truth_(inst_14799)){
var statearr_14826_14852 = state_14810__$1;
(statearr_14826_14852[(1)] = (12));

} else {
var statearr_14827_14853 = state_14810__$1;
(statearr_14827_14853[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___14839,tc,fc))
;
return ((function (switch__14088__auto__,c__14153__auto___14839,tc,fc){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_14831 = [null,null,null,null,null,null,null,null,null];
(statearr_14831[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_14831[(1)] = (1));

return statearr_14831;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_14810){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14832){if((e14832 instanceof Object)){
var ex__14092__auto__ = e14832;
var statearr_14833_14854 = state_14810;
(statearr_14833_14854[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14855 = state_14810;
state_14810 = G__14855;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_14810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_14810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___14839,tc,fc))
})();
var state__14155__auto__ = (function (){var statearr_14834 = f__14154__auto__.call(null);
(statearr_14834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___14839);

return statearr_14834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___14839,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto__){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto__){
return (function (state_14919){
var state_val_14920 = (state_14919[(1)]);
if((state_val_14920 === (7))){
var inst_14915 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
var statearr_14921_14942 = state_14919__$1;
(statearr_14921_14942[(2)] = inst_14915);

(statearr_14921_14942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (1))){
var inst_14899 = init;
var state_14919__$1 = (function (){var statearr_14922 = state_14919;
(statearr_14922[(7)] = inst_14899);

return statearr_14922;
})();
var statearr_14923_14943 = state_14919__$1;
(statearr_14923_14943[(2)] = null);

(statearr_14923_14943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (4))){
var inst_14902 = (state_14919[(8)]);
var inst_14902__$1 = (state_14919[(2)]);
var inst_14903 = (inst_14902__$1 == null);
var state_14919__$1 = (function (){var statearr_14924 = state_14919;
(statearr_14924[(8)] = inst_14902__$1);

return statearr_14924;
})();
if(cljs.core.truth_(inst_14903)){
var statearr_14925_14944 = state_14919__$1;
(statearr_14925_14944[(1)] = (5));

} else {
var statearr_14926_14945 = state_14919__$1;
(statearr_14926_14945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (6))){
var inst_14906 = (state_14919[(9)]);
var inst_14899 = (state_14919[(7)]);
var inst_14902 = (state_14919[(8)]);
var inst_14906__$1 = f.call(null,inst_14899,inst_14902);
var inst_14907 = cljs.core.reduced_QMARK_.call(null,inst_14906__$1);
var state_14919__$1 = (function (){var statearr_14927 = state_14919;
(statearr_14927[(9)] = inst_14906__$1);

return statearr_14927;
})();
if(inst_14907){
var statearr_14928_14946 = state_14919__$1;
(statearr_14928_14946[(1)] = (8));

} else {
var statearr_14929_14947 = state_14919__$1;
(statearr_14929_14947[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (3))){
var inst_14917 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14919__$1,inst_14917);
} else {
if((state_val_14920 === (2))){
var state_14919__$1 = state_14919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14919__$1,(4),ch);
} else {
if((state_val_14920 === (9))){
var inst_14906 = (state_14919[(9)]);
var inst_14899 = inst_14906;
var state_14919__$1 = (function (){var statearr_14930 = state_14919;
(statearr_14930[(7)] = inst_14899);

return statearr_14930;
})();
var statearr_14931_14948 = state_14919__$1;
(statearr_14931_14948[(2)] = null);

(statearr_14931_14948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (5))){
var inst_14899 = (state_14919[(7)]);
var state_14919__$1 = state_14919;
var statearr_14932_14949 = state_14919__$1;
(statearr_14932_14949[(2)] = inst_14899);

(statearr_14932_14949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (10))){
var inst_14913 = (state_14919[(2)]);
var state_14919__$1 = state_14919;
var statearr_14933_14950 = state_14919__$1;
(statearr_14933_14950[(2)] = inst_14913);

(statearr_14933_14950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14920 === (8))){
var inst_14906 = (state_14919[(9)]);
var inst_14909 = cljs.core.deref.call(null,inst_14906);
var state_14919__$1 = state_14919;
var statearr_14934_14951 = state_14919__$1;
(statearr_14934_14951[(2)] = inst_14909);

(statearr_14934_14951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto__))
;
return ((function (switch__14088__auto__,c__14153__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__14089__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14089__auto____0 = (function (){
var statearr_14938 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14938[(0)] = cljs$core$async$reduce_$_state_machine__14089__auto__);

(statearr_14938[(1)] = (1));

return statearr_14938;
});
var cljs$core$async$reduce_$_state_machine__14089__auto____1 = (function (state_14919){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e14939){if((e14939 instanceof Object)){
var ex__14092__auto__ = e14939;
var statearr_14940_14952 = state_14919;
(statearr_14940_14952[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14953 = state_14919;
state_14919 = G__14953;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14089__auto__ = function(state_14919){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14089__auto____1.call(this,state_14919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14089__auto____0;
cljs$core$async$reduce_$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14089__auto____1;
return cljs$core$async$reduce_$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto__))
})();
var state__14155__auto__ = (function (){var statearr_14941 = f__14154__auto__.call(null);
(statearr_14941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto__);

return statearr_14941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto__))
);

return c__14153__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14954 = [];
var len__7492__auto___15006 = arguments.length;
var i__7493__auto___15007 = (0);
while(true){
if((i__7493__auto___15007 < len__7492__auto___15006)){
args14954.push((arguments[i__7493__auto___15007]));

var G__15008 = (i__7493__auto___15007 + (1));
i__7493__auto___15007 = G__15008;
continue;
} else {
}
break;
}

var G__14956 = args14954.length;
switch (G__14956) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14954.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto__){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto__){
return (function (state_14981){
var state_val_14982 = (state_14981[(1)]);
if((state_val_14982 === (7))){
var inst_14963 = (state_14981[(2)]);
var state_14981__$1 = state_14981;
var statearr_14983_15010 = state_14981__$1;
(statearr_14983_15010[(2)] = inst_14963);

(statearr_14983_15010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (1))){
var inst_14957 = cljs.core.seq.call(null,coll);
var inst_14958 = inst_14957;
var state_14981__$1 = (function (){var statearr_14984 = state_14981;
(statearr_14984[(7)] = inst_14958);

return statearr_14984;
})();
var statearr_14985_15011 = state_14981__$1;
(statearr_14985_15011[(2)] = null);

(statearr_14985_15011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (4))){
var inst_14958 = (state_14981[(7)]);
var inst_14961 = cljs.core.first.call(null,inst_14958);
var state_14981__$1 = state_14981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14981__$1,(7),ch,inst_14961);
} else {
if((state_val_14982 === (13))){
var inst_14975 = (state_14981[(2)]);
var state_14981__$1 = state_14981;
var statearr_14986_15012 = state_14981__$1;
(statearr_14986_15012[(2)] = inst_14975);

(statearr_14986_15012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (6))){
var inst_14966 = (state_14981[(2)]);
var state_14981__$1 = state_14981;
if(cljs.core.truth_(inst_14966)){
var statearr_14987_15013 = state_14981__$1;
(statearr_14987_15013[(1)] = (8));

} else {
var statearr_14988_15014 = state_14981__$1;
(statearr_14988_15014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (3))){
var inst_14979 = (state_14981[(2)]);
var state_14981__$1 = state_14981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14981__$1,inst_14979);
} else {
if((state_val_14982 === (12))){
var state_14981__$1 = state_14981;
var statearr_14989_15015 = state_14981__$1;
(statearr_14989_15015[(2)] = null);

(statearr_14989_15015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (2))){
var inst_14958 = (state_14981[(7)]);
var state_14981__$1 = state_14981;
if(cljs.core.truth_(inst_14958)){
var statearr_14990_15016 = state_14981__$1;
(statearr_14990_15016[(1)] = (4));

} else {
var statearr_14991_15017 = state_14981__$1;
(statearr_14991_15017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (11))){
var inst_14972 = cljs.core.async.close_BANG_.call(null,ch);
var state_14981__$1 = state_14981;
var statearr_14992_15018 = state_14981__$1;
(statearr_14992_15018[(2)] = inst_14972);

(statearr_14992_15018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (9))){
var state_14981__$1 = state_14981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14993_15019 = state_14981__$1;
(statearr_14993_15019[(1)] = (11));

} else {
var statearr_14994_15020 = state_14981__$1;
(statearr_14994_15020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (5))){
var inst_14958 = (state_14981[(7)]);
var state_14981__$1 = state_14981;
var statearr_14995_15021 = state_14981__$1;
(statearr_14995_15021[(2)] = inst_14958);

(statearr_14995_15021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (10))){
var inst_14977 = (state_14981[(2)]);
var state_14981__$1 = state_14981;
var statearr_14996_15022 = state_14981__$1;
(statearr_14996_15022[(2)] = inst_14977);

(statearr_14996_15022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14982 === (8))){
var inst_14958 = (state_14981[(7)]);
var inst_14968 = cljs.core.next.call(null,inst_14958);
var inst_14958__$1 = inst_14968;
var state_14981__$1 = (function (){var statearr_14997 = state_14981;
(statearr_14997[(7)] = inst_14958__$1);

return statearr_14997;
})();
var statearr_14998_15023 = state_14981__$1;
(statearr_14998_15023[(2)] = null);

(statearr_14998_15023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto__))
;
return ((function (switch__14088__auto__,c__14153__auto__){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_15002 = [null,null,null,null,null,null,null,null];
(statearr_15002[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_15002[(1)] = (1));

return statearr_15002;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_14981){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_14981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e15003){if((e15003 instanceof Object)){
var ex__14092__auto__ = e15003;
var statearr_15004_15024 = state_14981;
(statearr_15004_15024[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15025 = state_14981;
state_14981 = G__15025;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_14981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_14981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto__))
})();
var state__14155__auto__ = (function (){var statearr_15005 = f__14154__auto__.call(null);
(statearr_15005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto__);

return statearr_15005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto__))
);

return c__14153__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7080__auto__ = (((_ == null))?null:_);
var m__7081__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,_);
} else {
var m__7081__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7081__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m,ch);
} else {
var m__7081__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m);
} else {
var m__7081__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15251 = (function (mult,ch,cs,meta15252){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15252 = meta15252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15253,meta15252__$1){
var self__ = this;
var _15253__$1 = this;
return (new cljs.core.async.t_cljs$core$async15251(self__.mult,self__.ch,self__.cs,meta15252__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15253){
var self__ = this;
var _15253__$1 = this;
return self__.meta15252;
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15252","meta15252",22453565,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15251";

cljs.core.async.t_cljs$core$async15251.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async15251");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15251 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15251(mult__$1,ch__$1,cs__$1,meta15252){
return (new cljs.core.async.t_cljs$core$async15251(mult__$1,ch__$1,cs__$1,meta15252));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15251(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14153__auto___15476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___15476,cs,m,dchan,dctr,done){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___15476,cs,m,dchan,dctr,done){
return (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (7))){
var inst_15384 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15390_15477 = state_15388__$1;
(statearr_15390_15477[(2)] = inst_15384);

(statearr_15390_15477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (20))){
var inst_15287 = (state_15388[(7)]);
var inst_15299 = cljs.core.first.call(null,inst_15287);
var inst_15300 = cljs.core.nth.call(null,inst_15299,(0),null);
var inst_15301 = cljs.core.nth.call(null,inst_15299,(1),null);
var state_15388__$1 = (function (){var statearr_15391 = state_15388;
(statearr_15391[(8)] = inst_15300);

return statearr_15391;
})();
if(cljs.core.truth_(inst_15301)){
var statearr_15392_15478 = state_15388__$1;
(statearr_15392_15478[(1)] = (22));

} else {
var statearr_15393_15479 = state_15388__$1;
(statearr_15393_15479[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (27))){
var inst_15256 = (state_15388[(9)]);
var inst_15336 = (state_15388[(10)]);
var inst_15331 = (state_15388[(11)]);
var inst_15329 = (state_15388[(12)]);
var inst_15336__$1 = cljs.core._nth.call(null,inst_15329,inst_15331);
var inst_15337 = cljs.core.async.put_BANG_.call(null,inst_15336__$1,inst_15256,done);
var state_15388__$1 = (function (){var statearr_15394 = state_15388;
(statearr_15394[(10)] = inst_15336__$1);

return statearr_15394;
})();
if(cljs.core.truth_(inst_15337)){
var statearr_15395_15480 = state_15388__$1;
(statearr_15395_15480[(1)] = (30));

} else {
var statearr_15396_15481 = state_15388__$1;
(statearr_15396_15481[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (1))){
var state_15388__$1 = state_15388;
var statearr_15397_15482 = state_15388__$1;
(statearr_15397_15482[(2)] = null);

(statearr_15397_15482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (24))){
var inst_15287 = (state_15388[(7)]);
var inst_15306 = (state_15388[(2)]);
var inst_15307 = cljs.core.next.call(null,inst_15287);
var inst_15265 = inst_15307;
var inst_15266 = null;
var inst_15267 = (0);
var inst_15268 = (0);
var state_15388__$1 = (function (){var statearr_15398 = state_15388;
(statearr_15398[(13)] = inst_15265);

(statearr_15398[(14)] = inst_15266);

(statearr_15398[(15)] = inst_15268);

(statearr_15398[(16)] = inst_15267);

(statearr_15398[(17)] = inst_15306);

return statearr_15398;
})();
var statearr_15399_15483 = state_15388__$1;
(statearr_15399_15483[(2)] = null);

(statearr_15399_15483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (39))){
var state_15388__$1 = state_15388;
var statearr_15403_15484 = state_15388__$1;
(statearr_15403_15484[(2)] = null);

(statearr_15403_15484[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (4))){
var inst_15256 = (state_15388[(9)]);
var inst_15256__$1 = (state_15388[(2)]);
var inst_15257 = (inst_15256__$1 == null);
var state_15388__$1 = (function (){var statearr_15404 = state_15388;
(statearr_15404[(9)] = inst_15256__$1);

return statearr_15404;
})();
if(cljs.core.truth_(inst_15257)){
var statearr_15405_15485 = state_15388__$1;
(statearr_15405_15485[(1)] = (5));

} else {
var statearr_15406_15486 = state_15388__$1;
(statearr_15406_15486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (15))){
var inst_15265 = (state_15388[(13)]);
var inst_15266 = (state_15388[(14)]);
var inst_15268 = (state_15388[(15)]);
var inst_15267 = (state_15388[(16)]);
var inst_15283 = (state_15388[(2)]);
var inst_15284 = (inst_15268 + (1));
var tmp15400 = inst_15265;
var tmp15401 = inst_15266;
var tmp15402 = inst_15267;
var inst_15265__$1 = tmp15400;
var inst_15266__$1 = tmp15401;
var inst_15267__$1 = tmp15402;
var inst_15268__$1 = inst_15284;
var state_15388__$1 = (function (){var statearr_15407 = state_15388;
(statearr_15407[(13)] = inst_15265__$1);

(statearr_15407[(18)] = inst_15283);

(statearr_15407[(14)] = inst_15266__$1);

(statearr_15407[(15)] = inst_15268__$1);

(statearr_15407[(16)] = inst_15267__$1);

return statearr_15407;
})();
var statearr_15408_15487 = state_15388__$1;
(statearr_15408_15487[(2)] = null);

(statearr_15408_15487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (21))){
var inst_15310 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15412_15488 = state_15388__$1;
(statearr_15412_15488[(2)] = inst_15310);

(statearr_15412_15488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (31))){
var inst_15336 = (state_15388[(10)]);
var inst_15340 = done.call(null,null);
var inst_15341 = cljs.core.async.untap_STAR_.call(null,m,inst_15336);
var state_15388__$1 = (function (){var statearr_15413 = state_15388;
(statearr_15413[(19)] = inst_15340);

return statearr_15413;
})();
var statearr_15414_15489 = state_15388__$1;
(statearr_15414_15489[(2)] = inst_15341);

(statearr_15414_15489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (32))){
var inst_15330 = (state_15388[(20)]);
var inst_15328 = (state_15388[(21)]);
var inst_15331 = (state_15388[(11)]);
var inst_15329 = (state_15388[(12)]);
var inst_15343 = (state_15388[(2)]);
var inst_15344 = (inst_15331 + (1));
var tmp15409 = inst_15330;
var tmp15410 = inst_15328;
var tmp15411 = inst_15329;
var inst_15328__$1 = tmp15410;
var inst_15329__$1 = tmp15411;
var inst_15330__$1 = tmp15409;
var inst_15331__$1 = inst_15344;
var state_15388__$1 = (function (){var statearr_15415 = state_15388;
(statearr_15415[(20)] = inst_15330__$1);

(statearr_15415[(22)] = inst_15343);

(statearr_15415[(21)] = inst_15328__$1);

(statearr_15415[(11)] = inst_15331__$1);

(statearr_15415[(12)] = inst_15329__$1);

return statearr_15415;
})();
var statearr_15416_15490 = state_15388__$1;
(statearr_15416_15490[(2)] = null);

(statearr_15416_15490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (40))){
var inst_15356 = (state_15388[(23)]);
var inst_15360 = done.call(null,null);
var inst_15361 = cljs.core.async.untap_STAR_.call(null,m,inst_15356);
var state_15388__$1 = (function (){var statearr_15417 = state_15388;
(statearr_15417[(24)] = inst_15360);

return statearr_15417;
})();
var statearr_15418_15491 = state_15388__$1;
(statearr_15418_15491[(2)] = inst_15361);

(statearr_15418_15491[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (33))){
var inst_15347 = (state_15388[(25)]);
var inst_15349 = cljs.core.chunked_seq_QMARK_.call(null,inst_15347);
var state_15388__$1 = state_15388;
if(inst_15349){
var statearr_15419_15492 = state_15388__$1;
(statearr_15419_15492[(1)] = (36));

} else {
var statearr_15420_15493 = state_15388__$1;
(statearr_15420_15493[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (13))){
var inst_15277 = (state_15388[(26)]);
var inst_15280 = cljs.core.async.close_BANG_.call(null,inst_15277);
var state_15388__$1 = state_15388;
var statearr_15421_15494 = state_15388__$1;
(statearr_15421_15494[(2)] = inst_15280);

(statearr_15421_15494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (22))){
var inst_15300 = (state_15388[(8)]);
var inst_15303 = cljs.core.async.close_BANG_.call(null,inst_15300);
var state_15388__$1 = state_15388;
var statearr_15422_15495 = state_15388__$1;
(statearr_15422_15495[(2)] = inst_15303);

(statearr_15422_15495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (36))){
var inst_15347 = (state_15388[(25)]);
var inst_15351 = cljs.core.chunk_first.call(null,inst_15347);
var inst_15352 = cljs.core.chunk_rest.call(null,inst_15347);
var inst_15353 = cljs.core.count.call(null,inst_15351);
var inst_15328 = inst_15352;
var inst_15329 = inst_15351;
var inst_15330 = inst_15353;
var inst_15331 = (0);
var state_15388__$1 = (function (){var statearr_15423 = state_15388;
(statearr_15423[(20)] = inst_15330);

(statearr_15423[(21)] = inst_15328);

(statearr_15423[(11)] = inst_15331);

(statearr_15423[(12)] = inst_15329);

return statearr_15423;
})();
var statearr_15424_15496 = state_15388__$1;
(statearr_15424_15496[(2)] = null);

(statearr_15424_15496[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (41))){
var inst_15347 = (state_15388[(25)]);
var inst_15363 = (state_15388[(2)]);
var inst_15364 = cljs.core.next.call(null,inst_15347);
var inst_15328 = inst_15364;
var inst_15329 = null;
var inst_15330 = (0);
var inst_15331 = (0);
var state_15388__$1 = (function (){var statearr_15425 = state_15388;
(statearr_15425[(20)] = inst_15330);

(statearr_15425[(27)] = inst_15363);

(statearr_15425[(21)] = inst_15328);

(statearr_15425[(11)] = inst_15331);

(statearr_15425[(12)] = inst_15329);

return statearr_15425;
})();
var statearr_15426_15497 = state_15388__$1;
(statearr_15426_15497[(2)] = null);

(statearr_15426_15497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (43))){
var state_15388__$1 = state_15388;
var statearr_15427_15498 = state_15388__$1;
(statearr_15427_15498[(2)] = null);

(statearr_15427_15498[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (29))){
var inst_15372 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15428_15499 = state_15388__$1;
(statearr_15428_15499[(2)] = inst_15372);

(statearr_15428_15499[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (44))){
var inst_15381 = (state_15388[(2)]);
var state_15388__$1 = (function (){var statearr_15429 = state_15388;
(statearr_15429[(28)] = inst_15381);

return statearr_15429;
})();
var statearr_15430_15500 = state_15388__$1;
(statearr_15430_15500[(2)] = null);

(statearr_15430_15500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (6))){
var inst_15320 = (state_15388[(29)]);
var inst_15319 = cljs.core.deref.call(null,cs);
var inst_15320__$1 = cljs.core.keys.call(null,inst_15319);
var inst_15321 = cljs.core.count.call(null,inst_15320__$1);
var inst_15322 = cljs.core.reset_BANG_.call(null,dctr,inst_15321);
var inst_15327 = cljs.core.seq.call(null,inst_15320__$1);
var inst_15328 = inst_15327;
var inst_15329 = null;
var inst_15330 = (0);
var inst_15331 = (0);
var state_15388__$1 = (function (){var statearr_15431 = state_15388;
(statearr_15431[(20)] = inst_15330);

(statearr_15431[(29)] = inst_15320__$1);

(statearr_15431[(30)] = inst_15322);

(statearr_15431[(21)] = inst_15328);

(statearr_15431[(11)] = inst_15331);

(statearr_15431[(12)] = inst_15329);

return statearr_15431;
})();
var statearr_15432_15501 = state_15388__$1;
(statearr_15432_15501[(2)] = null);

(statearr_15432_15501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (28))){
var inst_15328 = (state_15388[(21)]);
var inst_15347 = (state_15388[(25)]);
var inst_15347__$1 = cljs.core.seq.call(null,inst_15328);
var state_15388__$1 = (function (){var statearr_15433 = state_15388;
(statearr_15433[(25)] = inst_15347__$1);

return statearr_15433;
})();
if(inst_15347__$1){
var statearr_15434_15502 = state_15388__$1;
(statearr_15434_15502[(1)] = (33));

} else {
var statearr_15435_15503 = state_15388__$1;
(statearr_15435_15503[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (25))){
var inst_15330 = (state_15388[(20)]);
var inst_15331 = (state_15388[(11)]);
var inst_15333 = (inst_15331 < inst_15330);
var inst_15334 = inst_15333;
var state_15388__$1 = state_15388;
if(cljs.core.truth_(inst_15334)){
var statearr_15436_15504 = state_15388__$1;
(statearr_15436_15504[(1)] = (27));

} else {
var statearr_15437_15505 = state_15388__$1;
(statearr_15437_15505[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (34))){
var state_15388__$1 = state_15388;
var statearr_15438_15506 = state_15388__$1;
(statearr_15438_15506[(2)] = null);

(statearr_15438_15506[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (17))){
var state_15388__$1 = state_15388;
var statearr_15439_15507 = state_15388__$1;
(statearr_15439_15507[(2)] = null);

(statearr_15439_15507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (3))){
var inst_15386 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15388__$1,inst_15386);
} else {
if((state_val_15389 === (12))){
var inst_15315 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15440_15508 = state_15388__$1;
(statearr_15440_15508[(2)] = inst_15315);

(statearr_15440_15508[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (2))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15388__$1,(4),ch);
} else {
if((state_val_15389 === (23))){
var state_15388__$1 = state_15388;
var statearr_15441_15509 = state_15388__$1;
(statearr_15441_15509[(2)] = null);

(statearr_15441_15509[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (35))){
var inst_15370 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15442_15510 = state_15388__$1;
(statearr_15442_15510[(2)] = inst_15370);

(statearr_15442_15510[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (19))){
var inst_15287 = (state_15388[(7)]);
var inst_15291 = cljs.core.chunk_first.call(null,inst_15287);
var inst_15292 = cljs.core.chunk_rest.call(null,inst_15287);
var inst_15293 = cljs.core.count.call(null,inst_15291);
var inst_15265 = inst_15292;
var inst_15266 = inst_15291;
var inst_15267 = inst_15293;
var inst_15268 = (0);
var state_15388__$1 = (function (){var statearr_15443 = state_15388;
(statearr_15443[(13)] = inst_15265);

(statearr_15443[(14)] = inst_15266);

(statearr_15443[(15)] = inst_15268);

(statearr_15443[(16)] = inst_15267);

return statearr_15443;
})();
var statearr_15444_15511 = state_15388__$1;
(statearr_15444_15511[(2)] = null);

(statearr_15444_15511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (11))){
var inst_15265 = (state_15388[(13)]);
var inst_15287 = (state_15388[(7)]);
var inst_15287__$1 = cljs.core.seq.call(null,inst_15265);
var state_15388__$1 = (function (){var statearr_15445 = state_15388;
(statearr_15445[(7)] = inst_15287__$1);

return statearr_15445;
})();
if(inst_15287__$1){
var statearr_15446_15512 = state_15388__$1;
(statearr_15446_15512[(1)] = (16));

} else {
var statearr_15447_15513 = state_15388__$1;
(statearr_15447_15513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (9))){
var inst_15317 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15448_15514 = state_15388__$1;
(statearr_15448_15514[(2)] = inst_15317);

(statearr_15448_15514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (5))){
var inst_15263 = cljs.core.deref.call(null,cs);
var inst_15264 = cljs.core.seq.call(null,inst_15263);
var inst_15265 = inst_15264;
var inst_15266 = null;
var inst_15267 = (0);
var inst_15268 = (0);
var state_15388__$1 = (function (){var statearr_15449 = state_15388;
(statearr_15449[(13)] = inst_15265);

(statearr_15449[(14)] = inst_15266);

(statearr_15449[(15)] = inst_15268);

(statearr_15449[(16)] = inst_15267);

return statearr_15449;
})();
var statearr_15450_15515 = state_15388__$1;
(statearr_15450_15515[(2)] = null);

(statearr_15450_15515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (14))){
var state_15388__$1 = state_15388;
var statearr_15451_15516 = state_15388__$1;
(statearr_15451_15516[(2)] = null);

(statearr_15451_15516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (45))){
var inst_15378 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15452_15517 = state_15388__$1;
(statearr_15452_15517[(2)] = inst_15378);

(statearr_15452_15517[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (26))){
var inst_15320 = (state_15388[(29)]);
var inst_15374 = (state_15388[(2)]);
var inst_15375 = cljs.core.seq.call(null,inst_15320);
var state_15388__$1 = (function (){var statearr_15453 = state_15388;
(statearr_15453[(31)] = inst_15374);

return statearr_15453;
})();
if(inst_15375){
var statearr_15454_15518 = state_15388__$1;
(statearr_15454_15518[(1)] = (42));

} else {
var statearr_15455_15519 = state_15388__$1;
(statearr_15455_15519[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (16))){
var inst_15287 = (state_15388[(7)]);
var inst_15289 = cljs.core.chunked_seq_QMARK_.call(null,inst_15287);
var state_15388__$1 = state_15388;
if(inst_15289){
var statearr_15456_15520 = state_15388__$1;
(statearr_15456_15520[(1)] = (19));

} else {
var statearr_15457_15521 = state_15388__$1;
(statearr_15457_15521[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (38))){
var inst_15367 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15458_15522 = state_15388__$1;
(statearr_15458_15522[(2)] = inst_15367);

(statearr_15458_15522[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (30))){
var state_15388__$1 = state_15388;
var statearr_15459_15523 = state_15388__$1;
(statearr_15459_15523[(2)] = null);

(statearr_15459_15523[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (10))){
var inst_15266 = (state_15388[(14)]);
var inst_15268 = (state_15388[(15)]);
var inst_15276 = cljs.core._nth.call(null,inst_15266,inst_15268);
var inst_15277 = cljs.core.nth.call(null,inst_15276,(0),null);
var inst_15278 = cljs.core.nth.call(null,inst_15276,(1),null);
var state_15388__$1 = (function (){var statearr_15460 = state_15388;
(statearr_15460[(26)] = inst_15277);

return statearr_15460;
})();
if(cljs.core.truth_(inst_15278)){
var statearr_15461_15524 = state_15388__$1;
(statearr_15461_15524[(1)] = (13));

} else {
var statearr_15462_15525 = state_15388__$1;
(statearr_15462_15525[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (18))){
var inst_15313 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15463_15526 = state_15388__$1;
(statearr_15463_15526[(2)] = inst_15313);

(statearr_15463_15526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (42))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15388__$1,(45),dchan);
} else {
if((state_val_15389 === (37))){
var inst_15256 = (state_15388[(9)]);
var inst_15356 = (state_15388[(23)]);
var inst_15347 = (state_15388[(25)]);
var inst_15356__$1 = cljs.core.first.call(null,inst_15347);
var inst_15357 = cljs.core.async.put_BANG_.call(null,inst_15356__$1,inst_15256,done);
var state_15388__$1 = (function (){var statearr_15464 = state_15388;
(statearr_15464[(23)] = inst_15356__$1);

return statearr_15464;
})();
if(cljs.core.truth_(inst_15357)){
var statearr_15465_15527 = state_15388__$1;
(statearr_15465_15527[(1)] = (39));

} else {
var statearr_15466_15528 = state_15388__$1;
(statearr_15466_15528[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (8))){
var inst_15268 = (state_15388[(15)]);
var inst_15267 = (state_15388[(16)]);
var inst_15270 = (inst_15268 < inst_15267);
var inst_15271 = inst_15270;
var state_15388__$1 = state_15388;
if(cljs.core.truth_(inst_15271)){
var statearr_15467_15529 = state_15388__$1;
(statearr_15467_15529[(1)] = (10));

} else {
var statearr_15468_15530 = state_15388__$1;
(statearr_15468_15530[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___15476,cs,m,dchan,dctr,done))
;
return ((function (switch__14088__auto__,c__14153__auto___15476,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__14089__auto__ = null;
var cljs$core$async$mult_$_state_machine__14089__auto____0 = (function (){
var statearr_15472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15472[(0)] = cljs$core$async$mult_$_state_machine__14089__auto__);

(statearr_15472[(1)] = (1));

return statearr_15472;
});
var cljs$core$async$mult_$_state_machine__14089__auto____1 = (function (state_15388){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_15388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e15473){if((e15473 instanceof Object)){
var ex__14092__auto__ = e15473;
var statearr_15474_15531 = state_15388;
(statearr_15474_15531[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15532 = state_15388;
state_15388 = G__15532;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14089__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14089__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14089__auto____0;
cljs$core$async$mult_$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14089__auto____1;
return cljs$core$async$mult_$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___15476,cs,m,dchan,dctr,done))
})();
var state__14155__auto__ = (function (){var statearr_15475 = f__14154__auto__.call(null);
(statearr_15475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___15476);

return statearr_15475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___15476,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15533 = [];
var len__7492__auto___15536 = arguments.length;
var i__7493__auto___15537 = (0);
while(true){
if((i__7493__auto___15537 < len__7492__auto___15536)){
args15533.push((arguments[i__7493__auto___15537]));

var G__15538 = (i__7493__auto___15537 + (1));
i__7493__auto___15537 = G__15538;
continue;
} else {
}
break;
}

var G__15535 = args15533.length;
switch (G__15535) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15533.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m,ch);
} else {
var m__7081__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m,ch);
} else {
var m__7081__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m);
} else {
var m__7081__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m,state_map);
} else {
var m__7081__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7080__auto__ = (((m == null))?null:m);
var m__7081__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,m,mode);
} else {
var m__7081__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15550 = arguments.length;
var i__7493__auto___15551 = (0);
while(true){
if((i__7493__auto___15551 < len__7492__auto___15550)){
args__7499__auto__.push((arguments[i__7493__auto___15551]));

var G__15552 = (i__7493__auto___15551 + (1));
i__7493__auto___15551 = G__15552;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((3) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7500__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15544){
var map__15545 = p__15544;
var map__15545__$1 = ((((!((map__15545 == null)))?((((map__15545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15545):map__15545);
var opts = map__15545__$1;
var statearr_15547_15553 = state;
(statearr_15547_15553[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__15545,map__15545__$1,opts){
return (function (val){
var statearr_15548_15554 = state;
(statearr_15548_15554[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15545,map__15545__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15549_15555 = state;
(statearr_15549_15555[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15540){
var G__15541 = cljs.core.first.call(null,seq15540);
var seq15540__$1 = cljs.core.next.call(null,seq15540);
var G__15542 = cljs.core.first.call(null,seq15540__$1);
var seq15540__$2 = cljs.core.next.call(null,seq15540__$1);
var G__15543 = cljs.core.first.call(null,seq15540__$2);
var seq15540__$3 = cljs.core.next.call(null,seq15540__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15541,G__15542,G__15543,seq15540__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15721 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15722){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15722 = meta15722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15723,meta15722__$1){
var self__ = this;
var _15723__$1 = this;
return (new cljs.core.async.t_cljs$core$async15721(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15722__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15723){
var self__ = this;
var _15723__$1 = this;
return self__.meta15722;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15722","meta15722",1002176132,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15721";

cljs.core.async.t_cljs$core$async15721.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async15721");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15721 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15721(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15722){
return (new cljs.core.async.t_cljs$core$async15721(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15722));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15721(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14153__auto___15886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___15886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___15886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15823){
var state_val_15824 = (state_15823[(1)]);
if((state_val_15824 === (7))){
var inst_15739 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15825_15887 = state_15823__$1;
(statearr_15825_15887[(2)] = inst_15739);

(statearr_15825_15887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (20))){
var inst_15751 = (state_15823[(7)]);
var state_15823__$1 = state_15823;
var statearr_15826_15888 = state_15823__$1;
(statearr_15826_15888[(2)] = inst_15751);

(statearr_15826_15888[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (27))){
var state_15823__$1 = state_15823;
var statearr_15827_15889 = state_15823__$1;
(statearr_15827_15889[(2)] = null);

(statearr_15827_15889[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (1))){
var inst_15727 = (state_15823[(8)]);
var inst_15727__$1 = calc_state.call(null);
var inst_15729 = (inst_15727__$1 == null);
var inst_15730 = cljs.core.not.call(null,inst_15729);
var state_15823__$1 = (function (){var statearr_15828 = state_15823;
(statearr_15828[(8)] = inst_15727__$1);

return statearr_15828;
})();
if(inst_15730){
var statearr_15829_15890 = state_15823__$1;
(statearr_15829_15890[(1)] = (2));

} else {
var statearr_15830_15891 = state_15823__$1;
(statearr_15830_15891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (24))){
var inst_15774 = (state_15823[(9)]);
var inst_15783 = (state_15823[(10)]);
var inst_15797 = (state_15823[(11)]);
var inst_15797__$1 = inst_15774.call(null,inst_15783);
var state_15823__$1 = (function (){var statearr_15831 = state_15823;
(statearr_15831[(11)] = inst_15797__$1);

return statearr_15831;
})();
if(cljs.core.truth_(inst_15797__$1)){
var statearr_15832_15892 = state_15823__$1;
(statearr_15832_15892[(1)] = (29));

} else {
var statearr_15833_15893 = state_15823__$1;
(statearr_15833_15893[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (4))){
var inst_15742 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15742)){
var statearr_15834_15894 = state_15823__$1;
(statearr_15834_15894[(1)] = (8));

} else {
var statearr_15835_15895 = state_15823__$1;
(statearr_15835_15895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (15))){
var inst_15768 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15768)){
var statearr_15836_15896 = state_15823__$1;
(statearr_15836_15896[(1)] = (19));

} else {
var statearr_15837_15897 = state_15823__$1;
(statearr_15837_15897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (21))){
var inst_15773 = (state_15823[(12)]);
var inst_15773__$1 = (state_15823[(2)]);
var inst_15774 = cljs.core.get.call(null,inst_15773__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15775 = cljs.core.get.call(null,inst_15773__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15776 = cljs.core.get.call(null,inst_15773__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15823__$1 = (function (){var statearr_15838 = state_15823;
(statearr_15838[(9)] = inst_15774);

(statearr_15838[(12)] = inst_15773__$1);

(statearr_15838[(13)] = inst_15775);

return statearr_15838;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15823__$1,(22),inst_15776);
} else {
if((state_val_15824 === (31))){
var inst_15805 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15805)){
var statearr_15839_15898 = state_15823__$1;
(statearr_15839_15898[(1)] = (32));

} else {
var statearr_15840_15899 = state_15823__$1;
(statearr_15840_15899[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (32))){
var inst_15782 = (state_15823[(14)]);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15823__$1,(35),out,inst_15782);
} else {
if((state_val_15824 === (33))){
var inst_15773 = (state_15823[(12)]);
var inst_15751 = inst_15773;
var state_15823__$1 = (function (){var statearr_15841 = state_15823;
(statearr_15841[(7)] = inst_15751);

return statearr_15841;
})();
var statearr_15842_15900 = state_15823__$1;
(statearr_15842_15900[(2)] = null);

(statearr_15842_15900[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (13))){
var inst_15751 = (state_15823[(7)]);
var inst_15758 = inst_15751.cljs$lang$protocol_mask$partition0$;
var inst_15759 = (inst_15758 & (64));
var inst_15760 = inst_15751.cljs$core$ISeq$;
var inst_15761 = (inst_15759) || (inst_15760);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15761)){
var statearr_15843_15901 = state_15823__$1;
(statearr_15843_15901[(1)] = (16));

} else {
var statearr_15844_15902 = state_15823__$1;
(statearr_15844_15902[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (22))){
var inst_15782 = (state_15823[(14)]);
var inst_15783 = (state_15823[(10)]);
var inst_15781 = (state_15823[(2)]);
var inst_15782__$1 = cljs.core.nth.call(null,inst_15781,(0),null);
var inst_15783__$1 = cljs.core.nth.call(null,inst_15781,(1),null);
var inst_15784 = (inst_15782__$1 == null);
var inst_15785 = cljs.core._EQ_.call(null,inst_15783__$1,change);
var inst_15786 = (inst_15784) || (inst_15785);
var state_15823__$1 = (function (){var statearr_15845 = state_15823;
(statearr_15845[(14)] = inst_15782__$1);

(statearr_15845[(10)] = inst_15783__$1);

return statearr_15845;
})();
if(cljs.core.truth_(inst_15786)){
var statearr_15846_15903 = state_15823__$1;
(statearr_15846_15903[(1)] = (23));

} else {
var statearr_15847_15904 = state_15823__$1;
(statearr_15847_15904[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (36))){
var inst_15773 = (state_15823[(12)]);
var inst_15751 = inst_15773;
var state_15823__$1 = (function (){var statearr_15848 = state_15823;
(statearr_15848[(7)] = inst_15751);

return statearr_15848;
})();
var statearr_15849_15905 = state_15823__$1;
(statearr_15849_15905[(2)] = null);

(statearr_15849_15905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (29))){
var inst_15797 = (state_15823[(11)]);
var state_15823__$1 = state_15823;
var statearr_15850_15906 = state_15823__$1;
(statearr_15850_15906[(2)] = inst_15797);

(statearr_15850_15906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (6))){
var state_15823__$1 = state_15823;
var statearr_15851_15907 = state_15823__$1;
(statearr_15851_15907[(2)] = false);

(statearr_15851_15907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (28))){
var inst_15793 = (state_15823[(2)]);
var inst_15794 = calc_state.call(null);
var inst_15751 = inst_15794;
var state_15823__$1 = (function (){var statearr_15852 = state_15823;
(statearr_15852[(7)] = inst_15751);

(statearr_15852[(15)] = inst_15793);

return statearr_15852;
})();
var statearr_15853_15908 = state_15823__$1;
(statearr_15853_15908[(2)] = null);

(statearr_15853_15908[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (25))){
var inst_15819 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15854_15909 = state_15823__$1;
(statearr_15854_15909[(2)] = inst_15819);

(statearr_15854_15909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (34))){
var inst_15817 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15855_15910 = state_15823__$1;
(statearr_15855_15910[(2)] = inst_15817);

(statearr_15855_15910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (17))){
var state_15823__$1 = state_15823;
var statearr_15856_15911 = state_15823__$1;
(statearr_15856_15911[(2)] = false);

(statearr_15856_15911[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (3))){
var state_15823__$1 = state_15823;
var statearr_15857_15912 = state_15823__$1;
(statearr_15857_15912[(2)] = false);

(statearr_15857_15912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (12))){
var inst_15821 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15823__$1,inst_15821);
} else {
if((state_val_15824 === (2))){
var inst_15727 = (state_15823[(8)]);
var inst_15732 = inst_15727.cljs$lang$protocol_mask$partition0$;
var inst_15733 = (inst_15732 & (64));
var inst_15734 = inst_15727.cljs$core$ISeq$;
var inst_15735 = (inst_15733) || (inst_15734);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15735)){
var statearr_15858_15913 = state_15823__$1;
(statearr_15858_15913[(1)] = (5));

} else {
var statearr_15859_15914 = state_15823__$1;
(statearr_15859_15914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (23))){
var inst_15782 = (state_15823[(14)]);
var inst_15788 = (inst_15782 == null);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15788)){
var statearr_15860_15915 = state_15823__$1;
(statearr_15860_15915[(1)] = (26));

} else {
var statearr_15861_15916 = state_15823__$1;
(statearr_15861_15916[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (35))){
var inst_15808 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
if(cljs.core.truth_(inst_15808)){
var statearr_15862_15917 = state_15823__$1;
(statearr_15862_15917[(1)] = (36));

} else {
var statearr_15863_15918 = state_15823__$1;
(statearr_15863_15918[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (19))){
var inst_15751 = (state_15823[(7)]);
var inst_15770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15751);
var state_15823__$1 = state_15823;
var statearr_15864_15919 = state_15823__$1;
(statearr_15864_15919[(2)] = inst_15770);

(statearr_15864_15919[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (11))){
var inst_15751 = (state_15823[(7)]);
var inst_15755 = (inst_15751 == null);
var inst_15756 = cljs.core.not.call(null,inst_15755);
var state_15823__$1 = state_15823;
if(inst_15756){
var statearr_15865_15920 = state_15823__$1;
(statearr_15865_15920[(1)] = (13));

} else {
var statearr_15866_15921 = state_15823__$1;
(statearr_15866_15921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (9))){
var inst_15727 = (state_15823[(8)]);
var state_15823__$1 = state_15823;
var statearr_15867_15922 = state_15823__$1;
(statearr_15867_15922[(2)] = inst_15727);

(statearr_15867_15922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (5))){
var state_15823__$1 = state_15823;
var statearr_15868_15923 = state_15823__$1;
(statearr_15868_15923[(2)] = true);

(statearr_15868_15923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (14))){
var state_15823__$1 = state_15823;
var statearr_15869_15924 = state_15823__$1;
(statearr_15869_15924[(2)] = false);

(statearr_15869_15924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (26))){
var inst_15783 = (state_15823[(10)]);
var inst_15790 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15783);
var state_15823__$1 = state_15823;
var statearr_15870_15925 = state_15823__$1;
(statearr_15870_15925[(2)] = inst_15790);

(statearr_15870_15925[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (16))){
var state_15823__$1 = state_15823;
var statearr_15871_15926 = state_15823__$1;
(statearr_15871_15926[(2)] = true);

(statearr_15871_15926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (38))){
var inst_15813 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15872_15927 = state_15823__$1;
(statearr_15872_15927[(2)] = inst_15813);

(statearr_15872_15927[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (30))){
var inst_15774 = (state_15823[(9)]);
var inst_15783 = (state_15823[(10)]);
var inst_15775 = (state_15823[(13)]);
var inst_15800 = cljs.core.empty_QMARK_.call(null,inst_15774);
var inst_15801 = inst_15775.call(null,inst_15783);
var inst_15802 = cljs.core.not.call(null,inst_15801);
var inst_15803 = (inst_15800) && (inst_15802);
var state_15823__$1 = state_15823;
var statearr_15873_15928 = state_15823__$1;
(statearr_15873_15928[(2)] = inst_15803);

(statearr_15873_15928[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (10))){
var inst_15727 = (state_15823[(8)]);
var inst_15747 = (state_15823[(2)]);
var inst_15748 = cljs.core.get.call(null,inst_15747,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15749 = cljs.core.get.call(null,inst_15747,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15750 = cljs.core.get.call(null,inst_15747,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15751 = inst_15727;
var state_15823__$1 = (function (){var statearr_15874 = state_15823;
(statearr_15874[(16)] = inst_15748);

(statearr_15874[(17)] = inst_15750);

(statearr_15874[(18)] = inst_15749);

(statearr_15874[(7)] = inst_15751);

return statearr_15874;
})();
var statearr_15875_15929 = state_15823__$1;
(statearr_15875_15929[(2)] = null);

(statearr_15875_15929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (18))){
var inst_15765 = (state_15823[(2)]);
var state_15823__$1 = state_15823;
var statearr_15876_15930 = state_15823__$1;
(statearr_15876_15930[(2)] = inst_15765);

(statearr_15876_15930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (37))){
var state_15823__$1 = state_15823;
var statearr_15877_15931 = state_15823__$1;
(statearr_15877_15931[(2)] = null);

(statearr_15877_15931[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15824 === (8))){
var inst_15727 = (state_15823[(8)]);
var inst_15744 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15727);
var state_15823__$1 = state_15823;
var statearr_15878_15932 = state_15823__$1;
(statearr_15878_15932[(2)] = inst_15744);

(statearr_15878_15932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___15886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__14088__auto__,c__14153__auto___15886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__14089__auto__ = null;
var cljs$core$async$mix_$_state_machine__14089__auto____0 = (function (){
var statearr_15882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15882[(0)] = cljs$core$async$mix_$_state_machine__14089__auto__);

(statearr_15882[(1)] = (1));

return statearr_15882;
});
var cljs$core$async$mix_$_state_machine__14089__auto____1 = (function (state_15823){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_15823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e15883){if((e15883 instanceof Object)){
var ex__14092__auto__ = e15883;
var statearr_15884_15933 = state_15823;
(statearr_15884_15933[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15934 = state_15823;
state_15823 = G__15934;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14089__auto__ = function(state_15823){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14089__auto____1.call(this,state_15823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14089__auto____0;
cljs$core$async$mix_$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14089__auto____1;
return cljs$core$async$mix_$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___15886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14155__auto__ = (function (){var statearr_15885 = f__14154__auto__.call(null);
(statearr_15885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___15886);

return statearr_15885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___15886,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7081__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,p,v,ch);
} else {
var m__7081__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15935 = [];
var len__7492__auto___15938 = arguments.length;
var i__7493__auto___15939 = (0);
while(true){
if((i__7493__auto___15939 < len__7492__auto___15938)){
args15935.push((arguments[i__7493__auto___15939]));

var G__15940 = (i__7493__auto___15939 + (1));
i__7493__auto___15939 = G__15940;
continue;
} else {
}
break;
}

var G__15937 = args15935.length;
switch (G__15937) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15935.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,p);
} else {
var m__7081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7080__auto__ = (((p == null))?null:p);
var m__7081__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,p,v);
} else {
var m__7081__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15943 = [];
var len__7492__auto___16068 = arguments.length;
var i__7493__auto___16069 = (0);
while(true){
if((i__7493__auto___16069 < len__7492__auto___16068)){
args15943.push((arguments[i__7493__auto___16069]));

var G__16070 = (i__7493__auto___16069 + (1));
i__7493__auto___16069 = G__16070;
continue;
} else {
}
break;
}

var G__15945 = args15943.length;
switch (G__15945) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15943.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6417__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6417__auto__,mults){
return (function (p1__15942_SHARP_){
if(cljs.core.truth_(p1__15942_SHARP_.call(null,topic))){
return p1__15942_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15942_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6417__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15946 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15947){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15947 = meta15947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15948,meta15947__$1){
var self__ = this;
var _15948__$1 = this;
return (new cljs.core.async.t_cljs$core$async15946(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15947__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15948){
var self__ = this;
var _15948__$1 = this;
return self__.meta15947;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15947","meta15947",1042873778,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15946";

cljs.core.async.t_cljs$core$async15946.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async15946");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15946 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15946(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15947){
return (new cljs.core.async.t_cljs$core$async15946(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15947));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15946(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14153__auto___16072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16072,mults,ensure_mult,p){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16072,mults,ensure_mult,p){
return (function (state_16020){
var state_val_16021 = (state_16020[(1)]);
if((state_val_16021 === (7))){
var inst_16016 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
var statearr_16022_16073 = state_16020__$1;
(statearr_16022_16073[(2)] = inst_16016);

(statearr_16022_16073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (20))){
var state_16020__$1 = state_16020;
var statearr_16023_16074 = state_16020__$1;
(statearr_16023_16074[(2)] = null);

(statearr_16023_16074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (1))){
var state_16020__$1 = state_16020;
var statearr_16024_16075 = state_16020__$1;
(statearr_16024_16075[(2)] = null);

(statearr_16024_16075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (24))){
var inst_15999 = (state_16020[(7)]);
var inst_16008 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15999);
var state_16020__$1 = state_16020;
var statearr_16025_16076 = state_16020__$1;
(statearr_16025_16076[(2)] = inst_16008);

(statearr_16025_16076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (4))){
var inst_15951 = (state_16020[(8)]);
var inst_15951__$1 = (state_16020[(2)]);
var inst_15952 = (inst_15951__$1 == null);
var state_16020__$1 = (function (){var statearr_16026 = state_16020;
(statearr_16026[(8)] = inst_15951__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15952)){
var statearr_16027_16077 = state_16020__$1;
(statearr_16027_16077[(1)] = (5));

} else {
var statearr_16028_16078 = state_16020__$1;
(statearr_16028_16078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (15))){
var inst_15993 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
var statearr_16029_16079 = state_16020__$1;
(statearr_16029_16079[(2)] = inst_15993);

(statearr_16029_16079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (21))){
var inst_16013 = (state_16020[(2)]);
var state_16020__$1 = (function (){var statearr_16030 = state_16020;
(statearr_16030[(9)] = inst_16013);

return statearr_16030;
})();
var statearr_16031_16080 = state_16020__$1;
(statearr_16031_16080[(2)] = null);

(statearr_16031_16080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (13))){
var inst_15975 = (state_16020[(10)]);
var inst_15977 = cljs.core.chunked_seq_QMARK_.call(null,inst_15975);
var state_16020__$1 = state_16020;
if(inst_15977){
var statearr_16032_16081 = state_16020__$1;
(statearr_16032_16081[(1)] = (16));

} else {
var statearr_16033_16082 = state_16020__$1;
(statearr_16033_16082[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (22))){
var inst_16005 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
if(cljs.core.truth_(inst_16005)){
var statearr_16034_16083 = state_16020__$1;
(statearr_16034_16083[(1)] = (23));

} else {
var statearr_16035_16084 = state_16020__$1;
(statearr_16035_16084[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (6))){
var inst_15999 = (state_16020[(7)]);
var inst_15951 = (state_16020[(8)]);
var inst_16001 = (state_16020[(11)]);
var inst_15999__$1 = topic_fn.call(null,inst_15951);
var inst_16000 = cljs.core.deref.call(null,mults);
var inst_16001__$1 = cljs.core.get.call(null,inst_16000,inst_15999__$1);
var state_16020__$1 = (function (){var statearr_16036 = state_16020;
(statearr_16036[(7)] = inst_15999__$1);

(statearr_16036[(11)] = inst_16001__$1);

return statearr_16036;
})();
if(cljs.core.truth_(inst_16001__$1)){
var statearr_16037_16085 = state_16020__$1;
(statearr_16037_16085[(1)] = (19));

} else {
var statearr_16038_16086 = state_16020__$1;
(statearr_16038_16086[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (25))){
var inst_16010 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
var statearr_16039_16087 = state_16020__$1;
(statearr_16039_16087[(2)] = inst_16010);

(statearr_16039_16087[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (17))){
var inst_15975 = (state_16020[(10)]);
var inst_15984 = cljs.core.first.call(null,inst_15975);
var inst_15985 = cljs.core.async.muxch_STAR_.call(null,inst_15984);
var inst_15986 = cljs.core.async.close_BANG_.call(null,inst_15985);
var inst_15987 = cljs.core.next.call(null,inst_15975);
var inst_15961 = inst_15987;
var inst_15962 = null;
var inst_15963 = (0);
var inst_15964 = (0);
var state_16020__$1 = (function (){var statearr_16040 = state_16020;
(statearr_16040[(12)] = inst_15963);

(statearr_16040[(13)] = inst_15962);

(statearr_16040[(14)] = inst_15964);

(statearr_16040[(15)] = inst_15986);

(statearr_16040[(16)] = inst_15961);

return statearr_16040;
})();
var statearr_16041_16088 = state_16020__$1;
(statearr_16041_16088[(2)] = null);

(statearr_16041_16088[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (3))){
var inst_16018 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16020__$1,inst_16018);
} else {
if((state_val_16021 === (12))){
var inst_15995 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
var statearr_16042_16089 = state_16020__$1;
(statearr_16042_16089[(2)] = inst_15995);

(statearr_16042_16089[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (2))){
var state_16020__$1 = state_16020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16020__$1,(4),ch);
} else {
if((state_val_16021 === (23))){
var state_16020__$1 = state_16020;
var statearr_16043_16090 = state_16020__$1;
(statearr_16043_16090[(2)] = null);

(statearr_16043_16090[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (19))){
var inst_15951 = (state_16020[(8)]);
var inst_16001 = (state_16020[(11)]);
var inst_16003 = cljs.core.async.muxch_STAR_.call(null,inst_16001);
var state_16020__$1 = state_16020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16020__$1,(22),inst_16003,inst_15951);
} else {
if((state_val_16021 === (11))){
var inst_15975 = (state_16020[(10)]);
var inst_15961 = (state_16020[(16)]);
var inst_15975__$1 = cljs.core.seq.call(null,inst_15961);
var state_16020__$1 = (function (){var statearr_16044 = state_16020;
(statearr_16044[(10)] = inst_15975__$1);

return statearr_16044;
})();
if(inst_15975__$1){
var statearr_16045_16091 = state_16020__$1;
(statearr_16045_16091[(1)] = (13));

} else {
var statearr_16046_16092 = state_16020__$1;
(statearr_16046_16092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (9))){
var inst_15997 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
var statearr_16047_16093 = state_16020__$1;
(statearr_16047_16093[(2)] = inst_15997);

(statearr_16047_16093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (5))){
var inst_15958 = cljs.core.deref.call(null,mults);
var inst_15959 = cljs.core.vals.call(null,inst_15958);
var inst_15960 = cljs.core.seq.call(null,inst_15959);
var inst_15961 = inst_15960;
var inst_15962 = null;
var inst_15963 = (0);
var inst_15964 = (0);
var state_16020__$1 = (function (){var statearr_16048 = state_16020;
(statearr_16048[(12)] = inst_15963);

(statearr_16048[(13)] = inst_15962);

(statearr_16048[(14)] = inst_15964);

(statearr_16048[(16)] = inst_15961);

return statearr_16048;
})();
var statearr_16049_16094 = state_16020__$1;
(statearr_16049_16094[(2)] = null);

(statearr_16049_16094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (14))){
var state_16020__$1 = state_16020;
var statearr_16053_16095 = state_16020__$1;
(statearr_16053_16095[(2)] = null);

(statearr_16053_16095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (16))){
var inst_15975 = (state_16020[(10)]);
var inst_15979 = cljs.core.chunk_first.call(null,inst_15975);
var inst_15980 = cljs.core.chunk_rest.call(null,inst_15975);
var inst_15981 = cljs.core.count.call(null,inst_15979);
var inst_15961 = inst_15980;
var inst_15962 = inst_15979;
var inst_15963 = inst_15981;
var inst_15964 = (0);
var state_16020__$1 = (function (){var statearr_16054 = state_16020;
(statearr_16054[(12)] = inst_15963);

(statearr_16054[(13)] = inst_15962);

(statearr_16054[(14)] = inst_15964);

(statearr_16054[(16)] = inst_15961);

return statearr_16054;
})();
var statearr_16055_16096 = state_16020__$1;
(statearr_16055_16096[(2)] = null);

(statearr_16055_16096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (10))){
var inst_15963 = (state_16020[(12)]);
var inst_15962 = (state_16020[(13)]);
var inst_15964 = (state_16020[(14)]);
var inst_15961 = (state_16020[(16)]);
var inst_15969 = cljs.core._nth.call(null,inst_15962,inst_15964);
var inst_15970 = cljs.core.async.muxch_STAR_.call(null,inst_15969);
var inst_15971 = cljs.core.async.close_BANG_.call(null,inst_15970);
var inst_15972 = (inst_15964 + (1));
var tmp16050 = inst_15963;
var tmp16051 = inst_15962;
var tmp16052 = inst_15961;
var inst_15961__$1 = tmp16052;
var inst_15962__$1 = tmp16051;
var inst_15963__$1 = tmp16050;
var inst_15964__$1 = inst_15972;
var state_16020__$1 = (function (){var statearr_16056 = state_16020;
(statearr_16056[(12)] = inst_15963__$1);

(statearr_16056[(13)] = inst_15962__$1);

(statearr_16056[(14)] = inst_15964__$1);

(statearr_16056[(17)] = inst_15971);

(statearr_16056[(16)] = inst_15961__$1);

return statearr_16056;
})();
var statearr_16057_16097 = state_16020__$1;
(statearr_16057_16097[(2)] = null);

(statearr_16057_16097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (18))){
var inst_15990 = (state_16020[(2)]);
var state_16020__$1 = state_16020;
var statearr_16058_16098 = state_16020__$1;
(statearr_16058_16098[(2)] = inst_15990);

(statearr_16058_16098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16021 === (8))){
var inst_15963 = (state_16020[(12)]);
var inst_15964 = (state_16020[(14)]);
var inst_15966 = (inst_15964 < inst_15963);
var inst_15967 = inst_15966;
var state_16020__$1 = state_16020;
if(cljs.core.truth_(inst_15967)){
var statearr_16059_16099 = state_16020__$1;
(statearr_16059_16099[(1)] = (10));

} else {
var statearr_16060_16100 = state_16020__$1;
(statearr_16060_16100[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16072,mults,ensure_mult,p))
;
return ((function (switch__14088__auto__,c__14153__auto___16072,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16064[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16064[(1)] = (1));

return statearr_16064;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16020){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16065){if((e16065 instanceof Object)){
var ex__14092__auto__ = e16065;
var statearr_16066_16101 = state_16020;
(statearr_16066_16101[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16102 = state_16020;
state_16020 = G__16102;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16072,mults,ensure_mult,p))
})();
var state__14155__auto__ = (function (){var statearr_16067 = f__14154__auto__.call(null);
(statearr_16067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16072);

return statearr_16067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16072,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16103 = [];
var len__7492__auto___16106 = arguments.length;
var i__7493__auto___16107 = (0);
while(true){
if((i__7493__auto___16107 < len__7492__auto___16106)){
args16103.push((arguments[i__7493__auto___16107]));

var G__16108 = (i__7493__auto___16107 + (1));
i__7493__auto___16107 = G__16108;
continue;
} else {
}
break;
}

var G__16105 = args16103.length;
switch (G__16105) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16103.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16110 = [];
var len__7492__auto___16113 = arguments.length;
var i__7493__auto___16114 = (0);
while(true){
if((i__7493__auto___16114 < len__7492__auto___16113)){
args16110.push((arguments[i__7493__auto___16114]));

var G__16115 = (i__7493__auto___16114 + (1));
i__7493__auto___16114 = G__16115;
continue;
} else {
}
break;
}

var G__16112 = args16110.length;
switch (G__16112) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16110.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16117 = [];
var len__7492__auto___16188 = arguments.length;
var i__7493__auto___16189 = (0);
while(true){
if((i__7493__auto___16189 < len__7492__auto___16188)){
args16117.push((arguments[i__7493__auto___16189]));

var G__16190 = (i__7493__auto___16189 + (1));
i__7493__auto___16189 = G__16190;
continue;
} else {
}
break;
}

var G__16119 = args16117.length;
switch (G__16119) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16117.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__14153__auto___16192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16158){
var state_val_16159 = (state_16158[(1)]);
if((state_val_16159 === (7))){
var state_16158__$1 = state_16158;
var statearr_16160_16193 = state_16158__$1;
(statearr_16160_16193[(2)] = null);

(statearr_16160_16193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (1))){
var state_16158__$1 = state_16158;
var statearr_16161_16194 = state_16158__$1;
(statearr_16161_16194[(2)] = null);

(statearr_16161_16194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (4))){
var inst_16122 = (state_16158[(7)]);
var inst_16124 = (inst_16122 < cnt);
var state_16158__$1 = state_16158;
if(cljs.core.truth_(inst_16124)){
var statearr_16162_16195 = state_16158__$1;
(statearr_16162_16195[(1)] = (6));

} else {
var statearr_16163_16196 = state_16158__$1;
(statearr_16163_16196[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (15))){
var inst_16154 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
var statearr_16164_16197 = state_16158__$1;
(statearr_16164_16197[(2)] = inst_16154);

(statearr_16164_16197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (13))){
var inst_16147 = cljs.core.async.close_BANG_.call(null,out);
var state_16158__$1 = state_16158;
var statearr_16165_16198 = state_16158__$1;
(statearr_16165_16198[(2)] = inst_16147);

(statearr_16165_16198[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (6))){
var state_16158__$1 = state_16158;
var statearr_16166_16199 = state_16158__$1;
(statearr_16166_16199[(2)] = null);

(statearr_16166_16199[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (3))){
var inst_16156 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16158__$1,inst_16156);
} else {
if((state_val_16159 === (12))){
var inst_16144 = (state_16158[(8)]);
var inst_16144__$1 = (state_16158[(2)]);
var inst_16145 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16144__$1);
var state_16158__$1 = (function (){var statearr_16167 = state_16158;
(statearr_16167[(8)] = inst_16144__$1);

return statearr_16167;
})();
if(cljs.core.truth_(inst_16145)){
var statearr_16168_16200 = state_16158__$1;
(statearr_16168_16200[(1)] = (13));

} else {
var statearr_16169_16201 = state_16158__$1;
(statearr_16169_16201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (2))){
var inst_16121 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16122 = (0);
var state_16158__$1 = (function (){var statearr_16170 = state_16158;
(statearr_16170[(7)] = inst_16122);

(statearr_16170[(9)] = inst_16121);

return statearr_16170;
})();
var statearr_16171_16202 = state_16158__$1;
(statearr_16171_16202[(2)] = null);

(statearr_16171_16202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (11))){
var inst_16122 = (state_16158[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16158,(10),Object,null,(9));
var inst_16131 = chs__$1.call(null,inst_16122);
var inst_16132 = done.call(null,inst_16122);
var inst_16133 = cljs.core.async.take_BANG_.call(null,inst_16131,inst_16132);
var state_16158__$1 = state_16158;
var statearr_16172_16203 = state_16158__$1;
(statearr_16172_16203[(2)] = inst_16133);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16158__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (9))){
var inst_16122 = (state_16158[(7)]);
var inst_16135 = (state_16158[(2)]);
var inst_16136 = (inst_16122 + (1));
var inst_16122__$1 = inst_16136;
var state_16158__$1 = (function (){var statearr_16173 = state_16158;
(statearr_16173[(7)] = inst_16122__$1);

(statearr_16173[(10)] = inst_16135);

return statearr_16173;
})();
var statearr_16174_16204 = state_16158__$1;
(statearr_16174_16204[(2)] = null);

(statearr_16174_16204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (5))){
var inst_16142 = (state_16158[(2)]);
var state_16158__$1 = (function (){var statearr_16175 = state_16158;
(statearr_16175[(11)] = inst_16142);

return statearr_16175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16158__$1,(12),dchan);
} else {
if((state_val_16159 === (14))){
var inst_16144 = (state_16158[(8)]);
var inst_16149 = cljs.core.apply.call(null,f,inst_16144);
var state_16158__$1 = state_16158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16158__$1,(16),out,inst_16149);
} else {
if((state_val_16159 === (16))){
var inst_16151 = (state_16158[(2)]);
var state_16158__$1 = (function (){var statearr_16176 = state_16158;
(statearr_16176[(12)] = inst_16151);

return statearr_16176;
})();
var statearr_16177_16205 = state_16158__$1;
(statearr_16177_16205[(2)] = null);

(statearr_16177_16205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (10))){
var inst_16126 = (state_16158[(2)]);
var inst_16127 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16158__$1 = (function (){var statearr_16178 = state_16158;
(statearr_16178[(13)] = inst_16126);

return statearr_16178;
})();
var statearr_16179_16206 = state_16158__$1;
(statearr_16179_16206[(2)] = inst_16127);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16158__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16159 === (8))){
var inst_16140 = (state_16158[(2)]);
var state_16158__$1 = state_16158;
var statearr_16180_16207 = state_16158__$1;
(statearr_16180_16207[(2)] = inst_16140);

(statearr_16180_16207[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16192,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__14088__auto__,c__14153__auto___16192,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16184[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16184[(1)] = (1));

return statearr_16184;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16158){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16185){if((e16185 instanceof Object)){
var ex__14092__auto__ = e16185;
var statearr_16186_16208 = state_16158;
(statearr_16186_16208[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16209 = state_16158;
state_16158 = G__16209;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16192,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14155__auto__ = (function (){var statearr_16187 = f__14154__auto__.call(null);
(statearr_16187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16192);

return statearr_16187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16192,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16211 = [];
var len__7492__auto___16269 = arguments.length;
var i__7493__auto___16270 = (0);
while(true){
if((i__7493__auto___16270 < len__7492__auto___16269)){
args16211.push((arguments[i__7493__auto___16270]));

var G__16271 = (i__7493__auto___16270 + (1));
i__7493__auto___16270 = G__16271;
continue;
} else {
}
break;
}

var G__16213 = args16211.length;
switch (G__16213) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16211.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14153__auto___16273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16273,out){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16273,out){
return (function (state_16245){
var state_val_16246 = (state_16245[(1)]);
if((state_val_16246 === (7))){
var inst_16225 = (state_16245[(7)]);
var inst_16224 = (state_16245[(8)]);
var inst_16224__$1 = (state_16245[(2)]);
var inst_16225__$1 = cljs.core.nth.call(null,inst_16224__$1,(0),null);
var inst_16226 = cljs.core.nth.call(null,inst_16224__$1,(1),null);
var inst_16227 = (inst_16225__$1 == null);
var state_16245__$1 = (function (){var statearr_16247 = state_16245;
(statearr_16247[(7)] = inst_16225__$1);

(statearr_16247[(8)] = inst_16224__$1);

(statearr_16247[(9)] = inst_16226);

return statearr_16247;
})();
if(cljs.core.truth_(inst_16227)){
var statearr_16248_16274 = state_16245__$1;
(statearr_16248_16274[(1)] = (8));

} else {
var statearr_16249_16275 = state_16245__$1;
(statearr_16249_16275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (1))){
var inst_16214 = cljs.core.vec.call(null,chs);
var inst_16215 = inst_16214;
var state_16245__$1 = (function (){var statearr_16250 = state_16245;
(statearr_16250[(10)] = inst_16215);

return statearr_16250;
})();
var statearr_16251_16276 = state_16245__$1;
(statearr_16251_16276[(2)] = null);

(statearr_16251_16276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (4))){
var inst_16215 = (state_16245[(10)]);
var state_16245__$1 = state_16245;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16245__$1,(7),inst_16215);
} else {
if((state_val_16246 === (6))){
var inst_16241 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16252_16277 = state_16245__$1;
(statearr_16252_16277[(2)] = inst_16241);

(statearr_16252_16277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (3))){
var inst_16243 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16245__$1,inst_16243);
} else {
if((state_val_16246 === (2))){
var inst_16215 = (state_16245[(10)]);
var inst_16217 = cljs.core.count.call(null,inst_16215);
var inst_16218 = (inst_16217 > (0));
var state_16245__$1 = state_16245;
if(cljs.core.truth_(inst_16218)){
var statearr_16254_16278 = state_16245__$1;
(statearr_16254_16278[(1)] = (4));

} else {
var statearr_16255_16279 = state_16245__$1;
(statearr_16255_16279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (11))){
var inst_16215 = (state_16245[(10)]);
var inst_16234 = (state_16245[(2)]);
var tmp16253 = inst_16215;
var inst_16215__$1 = tmp16253;
var state_16245__$1 = (function (){var statearr_16256 = state_16245;
(statearr_16256[(11)] = inst_16234);

(statearr_16256[(10)] = inst_16215__$1);

return statearr_16256;
})();
var statearr_16257_16280 = state_16245__$1;
(statearr_16257_16280[(2)] = null);

(statearr_16257_16280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (9))){
var inst_16225 = (state_16245[(7)]);
var state_16245__$1 = state_16245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16245__$1,(11),out,inst_16225);
} else {
if((state_val_16246 === (5))){
var inst_16239 = cljs.core.async.close_BANG_.call(null,out);
var state_16245__$1 = state_16245;
var statearr_16258_16281 = state_16245__$1;
(statearr_16258_16281[(2)] = inst_16239);

(statearr_16258_16281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (10))){
var inst_16237 = (state_16245[(2)]);
var state_16245__$1 = state_16245;
var statearr_16259_16282 = state_16245__$1;
(statearr_16259_16282[(2)] = inst_16237);

(statearr_16259_16282[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16246 === (8))){
var inst_16215 = (state_16245[(10)]);
var inst_16225 = (state_16245[(7)]);
var inst_16224 = (state_16245[(8)]);
var inst_16226 = (state_16245[(9)]);
var inst_16229 = (function (){var cs = inst_16215;
var vec__16220 = inst_16224;
var v = inst_16225;
var c = inst_16226;
return ((function (cs,vec__16220,v,c,inst_16215,inst_16225,inst_16224,inst_16226,state_val_16246,c__14153__auto___16273,out){
return (function (p1__16210_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16210_SHARP_);
});
;})(cs,vec__16220,v,c,inst_16215,inst_16225,inst_16224,inst_16226,state_val_16246,c__14153__auto___16273,out))
})();
var inst_16230 = cljs.core.filterv.call(null,inst_16229,inst_16215);
var inst_16215__$1 = inst_16230;
var state_16245__$1 = (function (){var statearr_16260 = state_16245;
(statearr_16260[(10)] = inst_16215__$1);

return statearr_16260;
})();
var statearr_16261_16283 = state_16245__$1;
(statearr_16261_16283[(2)] = null);

(statearr_16261_16283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16273,out))
;
return ((function (switch__14088__auto__,c__14153__auto___16273,out){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16265 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16265[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16265[(1)] = (1));

return statearr_16265;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16245){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16266){if((e16266 instanceof Object)){
var ex__14092__auto__ = e16266;
var statearr_16267_16284 = state_16245;
(statearr_16267_16284[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16285 = state_16245;
state_16245 = G__16285;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16273,out))
})();
var state__14155__auto__ = (function (){var statearr_16268 = f__14154__auto__.call(null);
(statearr_16268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16273);

return statearr_16268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16273,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16286 = [];
var len__7492__auto___16335 = arguments.length;
var i__7493__auto___16336 = (0);
while(true){
if((i__7493__auto___16336 < len__7492__auto___16335)){
args16286.push((arguments[i__7493__auto___16336]));

var G__16337 = (i__7493__auto___16336 + (1));
i__7493__auto___16336 = G__16337;
continue;
} else {
}
break;
}

var G__16288 = args16286.length;
switch (G__16288) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16286.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14153__auto___16339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16339,out){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16339,out){
return (function (state_16312){
var state_val_16313 = (state_16312[(1)]);
if((state_val_16313 === (7))){
var inst_16294 = (state_16312[(7)]);
var inst_16294__$1 = (state_16312[(2)]);
var inst_16295 = (inst_16294__$1 == null);
var inst_16296 = cljs.core.not.call(null,inst_16295);
var state_16312__$1 = (function (){var statearr_16314 = state_16312;
(statearr_16314[(7)] = inst_16294__$1);

return statearr_16314;
})();
if(inst_16296){
var statearr_16315_16340 = state_16312__$1;
(statearr_16315_16340[(1)] = (8));

} else {
var statearr_16316_16341 = state_16312__$1;
(statearr_16316_16341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (1))){
var inst_16289 = (0);
var state_16312__$1 = (function (){var statearr_16317 = state_16312;
(statearr_16317[(8)] = inst_16289);

return statearr_16317;
})();
var statearr_16318_16342 = state_16312__$1;
(statearr_16318_16342[(2)] = null);

(statearr_16318_16342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (4))){
var state_16312__$1 = state_16312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16312__$1,(7),ch);
} else {
if((state_val_16313 === (6))){
var inst_16307 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16319_16343 = state_16312__$1;
(statearr_16319_16343[(2)] = inst_16307);

(statearr_16319_16343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (3))){
var inst_16309 = (state_16312[(2)]);
var inst_16310 = cljs.core.async.close_BANG_.call(null,out);
var state_16312__$1 = (function (){var statearr_16320 = state_16312;
(statearr_16320[(9)] = inst_16309);

return statearr_16320;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16312__$1,inst_16310);
} else {
if((state_val_16313 === (2))){
var inst_16289 = (state_16312[(8)]);
var inst_16291 = (inst_16289 < n);
var state_16312__$1 = state_16312;
if(cljs.core.truth_(inst_16291)){
var statearr_16321_16344 = state_16312__$1;
(statearr_16321_16344[(1)] = (4));

} else {
var statearr_16322_16345 = state_16312__$1;
(statearr_16322_16345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (11))){
var inst_16289 = (state_16312[(8)]);
var inst_16299 = (state_16312[(2)]);
var inst_16300 = (inst_16289 + (1));
var inst_16289__$1 = inst_16300;
var state_16312__$1 = (function (){var statearr_16323 = state_16312;
(statearr_16323[(8)] = inst_16289__$1);

(statearr_16323[(10)] = inst_16299);

return statearr_16323;
})();
var statearr_16324_16346 = state_16312__$1;
(statearr_16324_16346[(2)] = null);

(statearr_16324_16346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (9))){
var state_16312__$1 = state_16312;
var statearr_16325_16347 = state_16312__$1;
(statearr_16325_16347[(2)] = null);

(statearr_16325_16347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (5))){
var state_16312__$1 = state_16312;
var statearr_16326_16348 = state_16312__$1;
(statearr_16326_16348[(2)] = null);

(statearr_16326_16348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (10))){
var inst_16304 = (state_16312[(2)]);
var state_16312__$1 = state_16312;
var statearr_16327_16349 = state_16312__$1;
(statearr_16327_16349[(2)] = inst_16304);

(statearr_16327_16349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16313 === (8))){
var inst_16294 = (state_16312[(7)]);
var state_16312__$1 = state_16312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16312__$1,(11),out,inst_16294);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16339,out))
;
return ((function (switch__14088__auto__,c__14153__auto___16339,out){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16331[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16331[(1)] = (1));

return statearr_16331;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16312){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16332){if((e16332 instanceof Object)){
var ex__14092__auto__ = e16332;
var statearr_16333_16350 = state_16312;
(statearr_16333_16350[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16351 = state_16312;
state_16312 = G__16351;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16339,out))
})();
var state__14155__auto__ = (function (){var statearr_16334 = f__14154__auto__.call(null);
(statearr_16334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16339);

return statearr_16334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16339,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16359 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16359 = (function (map_LT_,f,ch,meta16360){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16360 = meta16360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16361,meta16360__$1){
var self__ = this;
var _16361__$1 = this;
return (new cljs.core.async.t_cljs$core$async16359(self__.map_LT_,self__.f,self__.ch,meta16360__$1));
});

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16361){
var self__ = this;
var _16361__$1 = this;
return self__.meta16360;
});

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16362 = (function (map_LT_,f,ch,meta16360,_,fn1,meta16363){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16360 = meta16360;
this._ = _;
this.fn1 = fn1;
this.meta16363 = meta16363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16364,meta16363__$1){
var self__ = this;
var _16364__$1 = this;
return (new cljs.core.async.t_cljs$core$async16362(self__.map_LT_,self__.f,self__.ch,self__.meta16360,self__._,self__.fn1,meta16363__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16364){
var self__ = this;
var _16364__$1 = this;
return self__.meta16363;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16352_SHARP_){
return f1.call(null,(((p1__16352_SHARP_ == null))?null:self__.f.call(null,p1__16352_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16362.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16360","meta16360",838046320,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16359","cljs.core.async/t_cljs$core$async16359",-1616700900,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16363","meta16363",-505440043,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16362";

cljs.core.async.t_cljs$core$async16362.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async16362");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16362 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16362(map_LT___$1,f__$1,ch__$1,meta16360__$1,___$2,fn1__$1,meta16363){
return (new cljs.core.async.t_cljs$core$async16362(map_LT___$1,f__$1,ch__$1,meta16360__$1,___$2,fn1__$1,meta16363));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16362(self__.map_LT_,self__.f,self__.ch,self__.meta16360,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6405__auto__ = ret;
if(cljs.core.truth_(and__6405__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6405__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16360","meta16360",838046320,null)], null);
});

cljs.core.async.t_cljs$core$async16359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16359";

cljs.core.async.t_cljs$core$async16359.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async16359");
});

cljs.core.async.__GT_t_cljs$core$async16359 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16359(map_LT___$1,f__$1,ch__$1,meta16360){
return (new cljs.core.async.t_cljs$core$async16359(map_LT___$1,f__$1,ch__$1,meta16360));
});

}

return (new cljs.core.async.t_cljs$core$async16359(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16368 = (function (map_GT_,f,ch,meta16369){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16369 = meta16369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16370,meta16369__$1){
var self__ = this;
var _16370__$1 = this;
return (new cljs.core.async.t_cljs$core$async16368(self__.map_GT_,self__.f,self__.ch,meta16369__$1));
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16370){
var self__ = this;
var _16370__$1 = this;
return self__.meta16369;
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16369","meta16369",1326844851,null)], null);
});

cljs.core.async.t_cljs$core$async16368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16368";

cljs.core.async.t_cljs$core$async16368.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async16368");
});

cljs.core.async.__GT_t_cljs$core$async16368 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16368(map_GT___$1,f__$1,ch__$1,meta16369){
return (new cljs.core.async.t_cljs$core$async16368(map_GT___$1,f__$1,ch__$1,meta16369));
});

}

return (new cljs.core.async.t_cljs$core$async16368(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16374 = (function (filter_GT_,p,ch,meta16375){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16375 = meta16375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16376,meta16375__$1){
var self__ = this;
var _16376__$1 = this;
return (new cljs.core.async.t_cljs$core$async16374(self__.filter_GT_,self__.p,self__.ch,meta16375__$1));
});

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16376){
var self__ = this;
var _16376__$1 = this;
return self__.meta16375;
});

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16374.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16375","meta16375",-302232739,null)], null);
});

cljs.core.async.t_cljs$core$async16374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16374";

cljs.core.async.t_cljs$core$async16374.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cljs.core.async/t_cljs$core$async16374");
});

cljs.core.async.__GT_t_cljs$core$async16374 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16374(filter_GT___$1,p__$1,ch__$1,meta16375){
return (new cljs.core.async.t_cljs$core$async16374(filter_GT___$1,p__$1,ch__$1,meta16375));
});

}

return (new cljs.core.async.t_cljs$core$async16374(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16377 = [];
var len__7492__auto___16421 = arguments.length;
var i__7493__auto___16422 = (0);
while(true){
if((i__7493__auto___16422 < len__7492__auto___16421)){
args16377.push((arguments[i__7493__auto___16422]));

var G__16423 = (i__7493__auto___16422 + (1));
i__7493__auto___16422 = G__16423;
continue;
} else {
}
break;
}

var G__16379 = args16377.length;
switch (G__16379) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16377.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14153__auto___16425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16425,out){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16425,out){
return (function (state_16400){
var state_val_16401 = (state_16400[(1)]);
if((state_val_16401 === (7))){
var inst_16396 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16402_16426 = state_16400__$1;
(statearr_16402_16426[(2)] = inst_16396);

(statearr_16402_16426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (1))){
var state_16400__$1 = state_16400;
var statearr_16403_16427 = state_16400__$1;
(statearr_16403_16427[(2)] = null);

(statearr_16403_16427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (4))){
var inst_16382 = (state_16400[(7)]);
var inst_16382__$1 = (state_16400[(2)]);
var inst_16383 = (inst_16382__$1 == null);
var state_16400__$1 = (function (){var statearr_16404 = state_16400;
(statearr_16404[(7)] = inst_16382__$1);

return statearr_16404;
})();
if(cljs.core.truth_(inst_16383)){
var statearr_16405_16428 = state_16400__$1;
(statearr_16405_16428[(1)] = (5));

} else {
var statearr_16406_16429 = state_16400__$1;
(statearr_16406_16429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (6))){
var inst_16382 = (state_16400[(7)]);
var inst_16387 = p.call(null,inst_16382);
var state_16400__$1 = state_16400;
if(cljs.core.truth_(inst_16387)){
var statearr_16407_16430 = state_16400__$1;
(statearr_16407_16430[(1)] = (8));

} else {
var statearr_16408_16431 = state_16400__$1;
(statearr_16408_16431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (3))){
var inst_16398 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16400__$1,inst_16398);
} else {
if((state_val_16401 === (2))){
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16400__$1,(4),ch);
} else {
if((state_val_16401 === (11))){
var inst_16390 = (state_16400[(2)]);
var state_16400__$1 = state_16400;
var statearr_16409_16432 = state_16400__$1;
(statearr_16409_16432[(2)] = inst_16390);

(statearr_16409_16432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (9))){
var state_16400__$1 = state_16400;
var statearr_16410_16433 = state_16400__$1;
(statearr_16410_16433[(2)] = null);

(statearr_16410_16433[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (5))){
var inst_16385 = cljs.core.async.close_BANG_.call(null,out);
var state_16400__$1 = state_16400;
var statearr_16411_16434 = state_16400__$1;
(statearr_16411_16434[(2)] = inst_16385);

(statearr_16411_16434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (10))){
var inst_16393 = (state_16400[(2)]);
var state_16400__$1 = (function (){var statearr_16412 = state_16400;
(statearr_16412[(8)] = inst_16393);

return statearr_16412;
})();
var statearr_16413_16435 = state_16400__$1;
(statearr_16413_16435[(2)] = null);

(statearr_16413_16435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16401 === (8))){
var inst_16382 = (state_16400[(7)]);
var state_16400__$1 = state_16400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16400__$1,(11),out,inst_16382);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16425,out))
;
return ((function (switch__14088__auto__,c__14153__auto___16425,out){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16417 = [null,null,null,null,null,null,null,null,null];
(statearr_16417[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16417[(1)] = (1));

return statearr_16417;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16400){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16418){if((e16418 instanceof Object)){
var ex__14092__auto__ = e16418;
var statearr_16419_16436 = state_16400;
(statearr_16419_16436[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16437 = state_16400;
state_16400 = G__16437;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16400){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16425,out))
})();
var state__14155__auto__ = (function (){var statearr_16420 = f__14154__auto__.call(null);
(statearr_16420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16425);

return statearr_16420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16425,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16438 = [];
var len__7492__auto___16441 = arguments.length;
var i__7493__auto___16442 = (0);
while(true){
if((i__7493__auto___16442 < len__7492__auto___16441)){
args16438.push((arguments[i__7493__auto___16442]));

var G__16443 = (i__7493__auto___16442 + (1));
i__7493__auto___16442 = G__16443;
continue;
} else {
}
break;
}

var G__16440 = args16438.length;
switch (G__16440) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16438.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14153__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto__){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto__){
return (function (state_16610){
var state_val_16611 = (state_16610[(1)]);
if((state_val_16611 === (7))){
var inst_16606 = (state_16610[(2)]);
var state_16610__$1 = state_16610;
var statearr_16612_16653 = state_16610__$1;
(statearr_16612_16653[(2)] = inst_16606);

(statearr_16612_16653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (20))){
var inst_16576 = (state_16610[(7)]);
var inst_16587 = (state_16610[(2)]);
var inst_16588 = cljs.core.next.call(null,inst_16576);
var inst_16562 = inst_16588;
var inst_16563 = null;
var inst_16564 = (0);
var inst_16565 = (0);
var state_16610__$1 = (function (){var statearr_16613 = state_16610;
(statearr_16613[(8)] = inst_16562);

(statearr_16613[(9)] = inst_16564);

(statearr_16613[(10)] = inst_16565);

(statearr_16613[(11)] = inst_16587);

(statearr_16613[(12)] = inst_16563);

return statearr_16613;
})();
var statearr_16614_16654 = state_16610__$1;
(statearr_16614_16654[(2)] = null);

(statearr_16614_16654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (1))){
var state_16610__$1 = state_16610;
var statearr_16615_16655 = state_16610__$1;
(statearr_16615_16655[(2)] = null);

(statearr_16615_16655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (4))){
var inst_16551 = (state_16610[(13)]);
var inst_16551__$1 = (state_16610[(2)]);
var inst_16552 = (inst_16551__$1 == null);
var state_16610__$1 = (function (){var statearr_16616 = state_16610;
(statearr_16616[(13)] = inst_16551__$1);

return statearr_16616;
})();
if(cljs.core.truth_(inst_16552)){
var statearr_16617_16656 = state_16610__$1;
(statearr_16617_16656[(1)] = (5));

} else {
var statearr_16618_16657 = state_16610__$1;
(statearr_16618_16657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (15))){
var state_16610__$1 = state_16610;
var statearr_16622_16658 = state_16610__$1;
(statearr_16622_16658[(2)] = null);

(statearr_16622_16658[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (21))){
var state_16610__$1 = state_16610;
var statearr_16623_16659 = state_16610__$1;
(statearr_16623_16659[(2)] = null);

(statearr_16623_16659[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (13))){
var inst_16562 = (state_16610[(8)]);
var inst_16564 = (state_16610[(9)]);
var inst_16565 = (state_16610[(10)]);
var inst_16563 = (state_16610[(12)]);
var inst_16572 = (state_16610[(2)]);
var inst_16573 = (inst_16565 + (1));
var tmp16619 = inst_16562;
var tmp16620 = inst_16564;
var tmp16621 = inst_16563;
var inst_16562__$1 = tmp16619;
var inst_16563__$1 = tmp16621;
var inst_16564__$1 = tmp16620;
var inst_16565__$1 = inst_16573;
var state_16610__$1 = (function (){var statearr_16624 = state_16610;
(statearr_16624[(8)] = inst_16562__$1);

(statearr_16624[(9)] = inst_16564__$1);

(statearr_16624[(10)] = inst_16565__$1);

(statearr_16624[(12)] = inst_16563__$1);

(statearr_16624[(14)] = inst_16572);

return statearr_16624;
})();
var statearr_16625_16660 = state_16610__$1;
(statearr_16625_16660[(2)] = null);

(statearr_16625_16660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (22))){
var state_16610__$1 = state_16610;
var statearr_16626_16661 = state_16610__$1;
(statearr_16626_16661[(2)] = null);

(statearr_16626_16661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (6))){
var inst_16551 = (state_16610[(13)]);
var inst_16560 = f.call(null,inst_16551);
var inst_16561 = cljs.core.seq.call(null,inst_16560);
var inst_16562 = inst_16561;
var inst_16563 = null;
var inst_16564 = (0);
var inst_16565 = (0);
var state_16610__$1 = (function (){var statearr_16627 = state_16610;
(statearr_16627[(8)] = inst_16562);

(statearr_16627[(9)] = inst_16564);

(statearr_16627[(10)] = inst_16565);

(statearr_16627[(12)] = inst_16563);

return statearr_16627;
})();
var statearr_16628_16662 = state_16610__$1;
(statearr_16628_16662[(2)] = null);

(statearr_16628_16662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (17))){
var inst_16576 = (state_16610[(7)]);
var inst_16580 = cljs.core.chunk_first.call(null,inst_16576);
var inst_16581 = cljs.core.chunk_rest.call(null,inst_16576);
var inst_16582 = cljs.core.count.call(null,inst_16580);
var inst_16562 = inst_16581;
var inst_16563 = inst_16580;
var inst_16564 = inst_16582;
var inst_16565 = (0);
var state_16610__$1 = (function (){var statearr_16629 = state_16610;
(statearr_16629[(8)] = inst_16562);

(statearr_16629[(9)] = inst_16564);

(statearr_16629[(10)] = inst_16565);

(statearr_16629[(12)] = inst_16563);

return statearr_16629;
})();
var statearr_16630_16663 = state_16610__$1;
(statearr_16630_16663[(2)] = null);

(statearr_16630_16663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (3))){
var inst_16608 = (state_16610[(2)]);
var state_16610__$1 = state_16610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16610__$1,inst_16608);
} else {
if((state_val_16611 === (12))){
var inst_16596 = (state_16610[(2)]);
var state_16610__$1 = state_16610;
var statearr_16631_16664 = state_16610__$1;
(statearr_16631_16664[(2)] = inst_16596);

(statearr_16631_16664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (2))){
var state_16610__$1 = state_16610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16610__$1,(4),in$);
} else {
if((state_val_16611 === (23))){
var inst_16604 = (state_16610[(2)]);
var state_16610__$1 = state_16610;
var statearr_16632_16665 = state_16610__$1;
(statearr_16632_16665[(2)] = inst_16604);

(statearr_16632_16665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (19))){
var inst_16591 = (state_16610[(2)]);
var state_16610__$1 = state_16610;
var statearr_16633_16666 = state_16610__$1;
(statearr_16633_16666[(2)] = inst_16591);

(statearr_16633_16666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (11))){
var inst_16562 = (state_16610[(8)]);
var inst_16576 = (state_16610[(7)]);
var inst_16576__$1 = cljs.core.seq.call(null,inst_16562);
var state_16610__$1 = (function (){var statearr_16634 = state_16610;
(statearr_16634[(7)] = inst_16576__$1);

return statearr_16634;
})();
if(inst_16576__$1){
var statearr_16635_16667 = state_16610__$1;
(statearr_16635_16667[(1)] = (14));

} else {
var statearr_16636_16668 = state_16610__$1;
(statearr_16636_16668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (9))){
var inst_16598 = (state_16610[(2)]);
var inst_16599 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16610__$1 = (function (){var statearr_16637 = state_16610;
(statearr_16637[(15)] = inst_16598);

return statearr_16637;
})();
if(cljs.core.truth_(inst_16599)){
var statearr_16638_16669 = state_16610__$1;
(statearr_16638_16669[(1)] = (21));

} else {
var statearr_16639_16670 = state_16610__$1;
(statearr_16639_16670[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (5))){
var inst_16554 = cljs.core.async.close_BANG_.call(null,out);
var state_16610__$1 = state_16610;
var statearr_16640_16671 = state_16610__$1;
(statearr_16640_16671[(2)] = inst_16554);

(statearr_16640_16671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (14))){
var inst_16576 = (state_16610[(7)]);
var inst_16578 = cljs.core.chunked_seq_QMARK_.call(null,inst_16576);
var state_16610__$1 = state_16610;
if(inst_16578){
var statearr_16641_16672 = state_16610__$1;
(statearr_16641_16672[(1)] = (17));

} else {
var statearr_16642_16673 = state_16610__$1;
(statearr_16642_16673[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (16))){
var inst_16594 = (state_16610[(2)]);
var state_16610__$1 = state_16610;
var statearr_16643_16674 = state_16610__$1;
(statearr_16643_16674[(2)] = inst_16594);

(statearr_16643_16674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16611 === (10))){
var inst_16565 = (state_16610[(10)]);
var inst_16563 = (state_16610[(12)]);
var inst_16570 = cljs.core._nth.call(null,inst_16563,inst_16565);
var state_16610__$1 = state_16610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16610__$1,(13),out,inst_16570);
} else {
if((state_val_16611 === (18))){
var inst_16576 = (state_16610[(7)]);
var inst_16585 = cljs.core.first.call(null,inst_16576);
var state_16610__$1 = state_16610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16610__$1,(20),out,inst_16585);
} else {
if((state_val_16611 === (8))){
var inst_16564 = (state_16610[(9)]);
var inst_16565 = (state_16610[(10)]);
var inst_16567 = (inst_16565 < inst_16564);
var inst_16568 = inst_16567;
var state_16610__$1 = state_16610;
if(cljs.core.truth_(inst_16568)){
var statearr_16644_16675 = state_16610__$1;
(statearr_16644_16675[(1)] = (10));

} else {
var statearr_16645_16676 = state_16610__$1;
(statearr_16645_16676[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto__))
;
return ((function (switch__14088__auto__,c__14153__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14089__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14089__auto____0 = (function (){
var statearr_16649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16649[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14089__auto__);

(statearr_16649[(1)] = (1));

return statearr_16649;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14089__auto____1 = (function (state_16610){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16650){if((e16650 instanceof Object)){
var ex__14092__auto__ = e16650;
var statearr_16651_16677 = state_16610;
(statearr_16651_16677[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16678 = state_16610;
state_16610 = G__16678;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14089__auto__ = function(state_16610){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14089__auto____1.call(this,state_16610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14089__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14089__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto__))
})();
var state__14155__auto__ = (function (){var statearr_16652 = f__14154__auto__.call(null);
(statearr_16652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto__);

return statearr_16652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto__))
);

return c__14153__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16679 = [];
var len__7492__auto___16682 = arguments.length;
var i__7493__auto___16683 = (0);
while(true){
if((i__7493__auto___16683 < len__7492__auto___16682)){
args16679.push((arguments[i__7493__auto___16683]));

var G__16684 = (i__7493__auto___16683 + (1));
i__7493__auto___16683 = G__16684;
continue;
} else {
}
break;
}

var G__16681 = args16679.length;
switch (G__16681) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16679.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16686 = [];
var len__7492__auto___16689 = arguments.length;
var i__7493__auto___16690 = (0);
while(true){
if((i__7493__auto___16690 < len__7492__auto___16689)){
args16686.push((arguments[i__7493__auto___16690]));

var G__16691 = (i__7493__auto___16690 + (1));
i__7493__auto___16690 = G__16691;
continue;
} else {
}
break;
}

var G__16688 = args16686.length;
switch (G__16688) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16686.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16693 = [];
var len__7492__auto___16744 = arguments.length;
var i__7493__auto___16745 = (0);
while(true){
if((i__7493__auto___16745 < len__7492__auto___16744)){
args16693.push((arguments[i__7493__auto___16745]));

var G__16746 = (i__7493__auto___16745 + (1));
i__7493__auto___16745 = G__16746;
continue;
} else {
}
break;
}

var G__16695 = args16693.length;
switch (G__16695) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16693.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14153__auto___16748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16748,out){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16748,out){
return (function (state_16719){
var state_val_16720 = (state_16719[(1)]);
if((state_val_16720 === (7))){
var inst_16714 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16721_16749 = state_16719__$1;
(statearr_16721_16749[(2)] = inst_16714);

(statearr_16721_16749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (1))){
var inst_16696 = null;
var state_16719__$1 = (function (){var statearr_16722 = state_16719;
(statearr_16722[(7)] = inst_16696);

return statearr_16722;
})();
var statearr_16723_16750 = state_16719__$1;
(statearr_16723_16750[(2)] = null);

(statearr_16723_16750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (4))){
var inst_16699 = (state_16719[(8)]);
var inst_16699__$1 = (state_16719[(2)]);
var inst_16700 = (inst_16699__$1 == null);
var inst_16701 = cljs.core.not.call(null,inst_16700);
var state_16719__$1 = (function (){var statearr_16724 = state_16719;
(statearr_16724[(8)] = inst_16699__$1);

return statearr_16724;
})();
if(inst_16701){
var statearr_16725_16751 = state_16719__$1;
(statearr_16725_16751[(1)] = (5));

} else {
var statearr_16726_16752 = state_16719__$1;
(statearr_16726_16752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (6))){
var state_16719__$1 = state_16719;
var statearr_16727_16753 = state_16719__$1;
(statearr_16727_16753[(2)] = null);

(statearr_16727_16753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (3))){
var inst_16716 = (state_16719[(2)]);
var inst_16717 = cljs.core.async.close_BANG_.call(null,out);
var state_16719__$1 = (function (){var statearr_16728 = state_16719;
(statearr_16728[(9)] = inst_16716);

return statearr_16728;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16719__$1,inst_16717);
} else {
if((state_val_16720 === (2))){
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16719__$1,(4),ch);
} else {
if((state_val_16720 === (11))){
var inst_16699 = (state_16719[(8)]);
var inst_16708 = (state_16719[(2)]);
var inst_16696 = inst_16699;
var state_16719__$1 = (function (){var statearr_16729 = state_16719;
(statearr_16729[(7)] = inst_16696);

(statearr_16729[(10)] = inst_16708);

return statearr_16729;
})();
var statearr_16730_16754 = state_16719__$1;
(statearr_16730_16754[(2)] = null);

(statearr_16730_16754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (9))){
var inst_16699 = (state_16719[(8)]);
var state_16719__$1 = state_16719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16719__$1,(11),out,inst_16699);
} else {
if((state_val_16720 === (5))){
var inst_16696 = (state_16719[(7)]);
var inst_16699 = (state_16719[(8)]);
var inst_16703 = cljs.core._EQ_.call(null,inst_16699,inst_16696);
var state_16719__$1 = state_16719;
if(inst_16703){
var statearr_16732_16755 = state_16719__$1;
(statearr_16732_16755[(1)] = (8));

} else {
var statearr_16733_16756 = state_16719__$1;
(statearr_16733_16756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (10))){
var inst_16711 = (state_16719[(2)]);
var state_16719__$1 = state_16719;
var statearr_16734_16757 = state_16719__$1;
(statearr_16734_16757[(2)] = inst_16711);

(statearr_16734_16757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16720 === (8))){
var inst_16696 = (state_16719[(7)]);
var tmp16731 = inst_16696;
var inst_16696__$1 = tmp16731;
var state_16719__$1 = (function (){var statearr_16735 = state_16719;
(statearr_16735[(7)] = inst_16696__$1);

return statearr_16735;
})();
var statearr_16736_16758 = state_16719__$1;
(statearr_16736_16758[(2)] = null);

(statearr_16736_16758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16748,out))
;
return ((function (switch__14088__auto__,c__14153__auto___16748,out){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16740[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16740[(1)] = (1));

return statearr_16740;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16719){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16741){if((e16741 instanceof Object)){
var ex__14092__auto__ = e16741;
var statearr_16742_16759 = state_16719;
(statearr_16742_16759[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16760 = state_16719;
state_16719 = G__16760;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16748,out))
})();
var state__14155__auto__ = (function (){var statearr_16743 = f__14154__auto__.call(null);
(statearr_16743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16748);

return statearr_16743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16748,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16761 = [];
var len__7492__auto___16831 = arguments.length;
var i__7493__auto___16832 = (0);
while(true){
if((i__7493__auto___16832 < len__7492__auto___16831)){
args16761.push((arguments[i__7493__auto___16832]));

var G__16833 = (i__7493__auto___16832 + (1));
i__7493__auto___16832 = G__16833;
continue;
} else {
}
break;
}

var G__16763 = args16761.length;
switch (G__16763) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16761.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14153__auto___16835 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16835,out){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16835,out){
return (function (state_16801){
var state_val_16802 = (state_16801[(1)]);
if((state_val_16802 === (7))){
var inst_16797 = (state_16801[(2)]);
var state_16801__$1 = state_16801;
var statearr_16803_16836 = state_16801__$1;
(statearr_16803_16836[(2)] = inst_16797);

(statearr_16803_16836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (1))){
var inst_16764 = (new Array(n));
var inst_16765 = inst_16764;
var inst_16766 = (0);
var state_16801__$1 = (function (){var statearr_16804 = state_16801;
(statearr_16804[(7)] = inst_16765);

(statearr_16804[(8)] = inst_16766);

return statearr_16804;
})();
var statearr_16805_16837 = state_16801__$1;
(statearr_16805_16837[(2)] = null);

(statearr_16805_16837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (4))){
var inst_16769 = (state_16801[(9)]);
var inst_16769__$1 = (state_16801[(2)]);
var inst_16770 = (inst_16769__$1 == null);
var inst_16771 = cljs.core.not.call(null,inst_16770);
var state_16801__$1 = (function (){var statearr_16806 = state_16801;
(statearr_16806[(9)] = inst_16769__$1);

return statearr_16806;
})();
if(inst_16771){
var statearr_16807_16838 = state_16801__$1;
(statearr_16807_16838[(1)] = (5));

} else {
var statearr_16808_16839 = state_16801__$1;
(statearr_16808_16839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (15))){
var inst_16791 = (state_16801[(2)]);
var state_16801__$1 = state_16801;
var statearr_16809_16840 = state_16801__$1;
(statearr_16809_16840[(2)] = inst_16791);

(statearr_16809_16840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (13))){
var state_16801__$1 = state_16801;
var statearr_16810_16841 = state_16801__$1;
(statearr_16810_16841[(2)] = null);

(statearr_16810_16841[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (6))){
var inst_16766 = (state_16801[(8)]);
var inst_16787 = (inst_16766 > (0));
var state_16801__$1 = state_16801;
if(cljs.core.truth_(inst_16787)){
var statearr_16811_16842 = state_16801__$1;
(statearr_16811_16842[(1)] = (12));

} else {
var statearr_16812_16843 = state_16801__$1;
(statearr_16812_16843[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (3))){
var inst_16799 = (state_16801[(2)]);
var state_16801__$1 = state_16801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16801__$1,inst_16799);
} else {
if((state_val_16802 === (12))){
var inst_16765 = (state_16801[(7)]);
var inst_16789 = cljs.core.vec.call(null,inst_16765);
var state_16801__$1 = state_16801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16801__$1,(15),out,inst_16789);
} else {
if((state_val_16802 === (2))){
var state_16801__$1 = state_16801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16801__$1,(4),ch);
} else {
if((state_val_16802 === (11))){
var inst_16781 = (state_16801[(2)]);
var inst_16782 = (new Array(n));
var inst_16765 = inst_16782;
var inst_16766 = (0);
var state_16801__$1 = (function (){var statearr_16813 = state_16801;
(statearr_16813[(7)] = inst_16765);

(statearr_16813[(8)] = inst_16766);

(statearr_16813[(10)] = inst_16781);

return statearr_16813;
})();
var statearr_16814_16844 = state_16801__$1;
(statearr_16814_16844[(2)] = null);

(statearr_16814_16844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (9))){
var inst_16765 = (state_16801[(7)]);
var inst_16779 = cljs.core.vec.call(null,inst_16765);
var state_16801__$1 = state_16801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16801__$1,(11),out,inst_16779);
} else {
if((state_val_16802 === (5))){
var inst_16765 = (state_16801[(7)]);
var inst_16774 = (state_16801[(11)]);
var inst_16766 = (state_16801[(8)]);
var inst_16769 = (state_16801[(9)]);
var inst_16773 = (inst_16765[inst_16766] = inst_16769);
var inst_16774__$1 = (inst_16766 + (1));
var inst_16775 = (inst_16774__$1 < n);
var state_16801__$1 = (function (){var statearr_16815 = state_16801;
(statearr_16815[(12)] = inst_16773);

(statearr_16815[(11)] = inst_16774__$1);

return statearr_16815;
})();
if(cljs.core.truth_(inst_16775)){
var statearr_16816_16845 = state_16801__$1;
(statearr_16816_16845[(1)] = (8));

} else {
var statearr_16817_16846 = state_16801__$1;
(statearr_16817_16846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (14))){
var inst_16794 = (state_16801[(2)]);
var inst_16795 = cljs.core.async.close_BANG_.call(null,out);
var state_16801__$1 = (function (){var statearr_16819 = state_16801;
(statearr_16819[(13)] = inst_16794);

return statearr_16819;
})();
var statearr_16820_16847 = state_16801__$1;
(statearr_16820_16847[(2)] = inst_16795);

(statearr_16820_16847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (10))){
var inst_16785 = (state_16801[(2)]);
var state_16801__$1 = state_16801;
var statearr_16821_16848 = state_16801__$1;
(statearr_16821_16848[(2)] = inst_16785);

(statearr_16821_16848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16802 === (8))){
var inst_16765 = (state_16801[(7)]);
var inst_16774 = (state_16801[(11)]);
var tmp16818 = inst_16765;
var inst_16765__$1 = tmp16818;
var inst_16766 = inst_16774;
var state_16801__$1 = (function (){var statearr_16822 = state_16801;
(statearr_16822[(7)] = inst_16765__$1);

(statearr_16822[(8)] = inst_16766);

return statearr_16822;
})();
var statearr_16823_16849 = state_16801__$1;
(statearr_16823_16849[(2)] = null);

(statearr_16823_16849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16835,out))
;
return ((function (switch__14088__auto__,c__14153__auto___16835,out){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16827[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16827[(1)] = (1));

return statearr_16827;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16801){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16828){if((e16828 instanceof Object)){
var ex__14092__auto__ = e16828;
var statearr_16829_16850 = state_16801;
(statearr_16829_16850[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16851 = state_16801;
state_16801 = G__16851;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16835,out))
})();
var state__14155__auto__ = (function (){var statearr_16830 = f__14154__auto__.call(null);
(statearr_16830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16835);

return statearr_16830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16835,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16852 = [];
var len__7492__auto___16926 = arguments.length;
var i__7493__auto___16927 = (0);
while(true){
if((i__7493__auto___16927 < len__7492__auto___16926)){
args16852.push((arguments[i__7493__auto___16927]));

var G__16928 = (i__7493__auto___16927 + (1));
i__7493__auto___16927 = G__16928;
continue;
} else {
}
break;
}

var G__16854 = args16852.length;
switch (G__16854) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16852.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__14153__auto___16930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__14153__auto___16930,out){
return (function (){
var f__14154__auto__ = (function (){var switch__14088__auto__ = ((function (c__14153__auto___16930,out){
return (function (state_16896){
var state_val_16897 = (state_16896[(1)]);
if((state_val_16897 === (7))){
var inst_16892 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16898_16931 = state_16896__$1;
(statearr_16898_16931[(2)] = inst_16892);

(statearr_16898_16931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (1))){
var inst_16855 = [];
var inst_16856 = inst_16855;
var inst_16857 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16896__$1 = (function (){var statearr_16899 = state_16896;
(statearr_16899[(7)] = inst_16856);

(statearr_16899[(8)] = inst_16857);

return statearr_16899;
})();
var statearr_16900_16932 = state_16896__$1;
(statearr_16900_16932[(2)] = null);

(statearr_16900_16932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (4))){
var inst_16860 = (state_16896[(9)]);
var inst_16860__$1 = (state_16896[(2)]);
var inst_16861 = (inst_16860__$1 == null);
var inst_16862 = cljs.core.not.call(null,inst_16861);
var state_16896__$1 = (function (){var statearr_16901 = state_16896;
(statearr_16901[(9)] = inst_16860__$1);

return statearr_16901;
})();
if(inst_16862){
var statearr_16902_16933 = state_16896__$1;
(statearr_16902_16933[(1)] = (5));

} else {
var statearr_16903_16934 = state_16896__$1;
(statearr_16903_16934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (15))){
var inst_16886 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16904_16935 = state_16896__$1;
(statearr_16904_16935[(2)] = inst_16886);

(statearr_16904_16935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (13))){
var state_16896__$1 = state_16896;
var statearr_16905_16936 = state_16896__$1;
(statearr_16905_16936[(2)] = null);

(statearr_16905_16936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (6))){
var inst_16856 = (state_16896[(7)]);
var inst_16881 = inst_16856.length;
var inst_16882 = (inst_16881 > (0));
var state_16896__$1 = state_16896;
if(cljs.core.truth_(inst_16882)){
var statearr_16906_16937 = state_16896__$1;
(statearr_16906_16937[(1)] = (12));

} else {
var statearr_16907_16938 = state_16896__$1;
(statearr_16907_16938[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (3))){
var inst_16894 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16896__$1,inst_16894);
} else {
if((state_val_16897 === (12))){
var inst_16856 = (state_16896[(7)]);
var inst_16884 = cljs.core.vec.call(null,inst_16856);
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16896__$1,(15),out,inst_16884);
} else {
if((state_val_16897 === (2))){
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16896__$1,(4),ch);
} else {
if((state_val_16897 === (11))){
var inst_16860 = (state_16896[(9)]);
var inst_16864 = (state_16896[(10)]);
var inst_16874 = (state_16896[(2)]);
var inst_16875 = [];
var inst_16876 = inst_16875.push(inst_16860);
var inst_16856 = inst_16875;
var inst_16857 = inst_16864;
var state_16896__$1 = (function (){var statearr_16908 = state_16896;
(statearr_16908[(11)] = inst_16874);

(statearr_16908[(7)] = inst_16856);

(statearr_16908[(8)] = inst_16857);

(statearr_16908[(12)] = inst_16876);

return statearr_16908;
})();
var statearr_16909_16939 = state_16896__$1;
(statearr_16909_16939[(2)] = null);

(statearr_16909_16939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (9))){
var inst_16856 = (state_16896[(7)]);
var inst_16872 = cljs.core.vec.call(null,inst_16856);
var state_16896__$1 = state_16896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16896__$1,(11),out,inst_16872);
} else {
if((state_val_16897 === (5))){
var inst_16860 = (state_16896[(9)]);
var inst_16864 = (state_16896[(10)]);
var inst_16857 = (state_16896[(8)]);
var inst_16864__$1 = f.call(null,inst_16860);
var inst_16865 = cljs.core._EQ_.call(null,inst_16864__$1,inst_16857);
var inst_16866 = cljs.core.keyword_identical_QMARK_.call(null,inst_16857,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16867 = (inst_16865) || (inst_16866);
var state_16896__$1 = (function (){var statearr_16910 = state_16896;
(statearr_16910[(10)] = inst_16864__$1);

return statearr_16910;
})();
if(cljs.core.truth_(inst_16867)){
var statearr_16911_16940 = state_16896__$1;
(statearr_16911_16940[(1)] = (8));

} else {
var statearr_16912_16941 = state_16896__$1;
(statearr_16912_16941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (14))){
var inst_16889 = (state_16896[(2)]);
var inst_16890 = cljs.core.async.close_BANG_.call(null,out);
var state_16896__$1 = (function (){var statearr_16914 = state_16896;
(statearr_16914[(13)] = inst_16889);

return statearr_16914;
})();
var statearr_16915_16942 = state_16896__$1;
(statearr_16915_16942[(2)] = inst_16890);

(statearr_16915_16942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (10))){
var inst_16879 = (state_16896[(2)]);
var state_16896__$1 = state_16896;
var statearr_16916_16943 = state_16896__$1;
(statearr_16916_16943[(2)] = inst_16879);

(statearr_16916_16943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16897 === (8))){
var inst_16860 = (state_16896[(9)]);
var inst_16864 = (state_16896[(10)]);
var inst_16856 = (state_16896[(7)]);
var inst_16869 = inst_16856.push(inst_16860);
var tmp16913 = inst_16856;
var inst_16856__$1 = tmp16913;
var inst_16857 = inst_16864;
var state_16896__$1 = (function (){var statearr_16917 = state_16896;
(statearr_16917[(7)] = inst_16856__$1);

(statearr_16917[(8)] = inst_16857);

(statearr_16917[(14)] = inst_16869);

return statearr_16917;
})();
var statearr_16918_16944 = state_16896__$1;
(statearr_16918_16944[(2)] = null);

(statearr_16918_16944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__14153__auto___16930,out))
;
return ((function (switch__14088__auto__,c__14153__auto___16930,out){
return (function() {
var cljs$core$async$state_machine__14089__auto__ = null;
var cljs$core$async$state_machine__14089__auto____0 = (function (){
var statearr_16922 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16922[(0)] = cljs$core$async$state_machine__14089__auto__);

(statearr_16922[(1)] = (1));

return statearr_16922;
});
var cljs$core$async$state_machine__14089__auto____1 = (function (state_16896){
while(true){
var ret_value__14090__auto__ = (function (){try{while(true){
var result__14091__auto__ = switch__14088__auto__.call(null,state_16896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__14091__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14091__auto__;
}
break;
}
}catch (e16923){if((e16923 instanceof Object)){
var ex__14092__auto__ = e16923;
var statearr_16924_16945 = state_16896;
(statearr_16924_16945[(5)] = ex__14092__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__14090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16946 = state_16896;
state_16896 = G__16946;
continue;
} else {
return ret_value__14090__auto__;
}
break;
}
});
cljs$core$async$state_machine__14089__auto__ = function(state_16896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14089__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14089__auto____1.call(this,state_16896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14089__auto____0;
cljs$core$async$state_machine__14089__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14089__auto____1;
return cljs$core$async$state_machine__14089__auto__;
})()
;})(switch__14088__auto__,c__14153__auto___16930,out))
})();
var state__14155__auto__ = (function (){var statearr_16925 = f__14154__auto__.call(null);
(statearr_16925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14153__auto___16930);

return statearr_16925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__14155__auto__);
});})(c__14153__auto___16930,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

