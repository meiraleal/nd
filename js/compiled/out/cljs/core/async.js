// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args23954 = [];
var len__22628__auto___23960 = arguments.length;
var i__22629__auto___23961 = (0);
while(true){
if((i__22629__auto___23961 < len__22628__auto___23960)){
args23954.push((arguments[i__22629__auto___23961]));

var G__23962 = (i__22629__auto___23961 + (1));
i__22629__auto___23961 = G__23962;
continue;
} else {
}
break;
}

var G__23956 = args23954.length;
switch (G__23956) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23954.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async23957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23957 = (function (f,blockable,meta23958){
this.f = f;
this.blockable = blockable;
this.meta23958 = meta23958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23959,meta23958__$1){
var self__ = this;
var _23959__$1 = this;
return (new cljs.core.async.t_cljs$core$async23957(self__.f,self__.blockable,meta23958__$1));
});

cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23959){
var self__ = this;
var _23959__$1 = this;
return self__.meta23958;
});

cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23957.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23958","meta23958",253356558,null)], null);
});

cljs.core.async.t_cljs$core$async23957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23957";

cljs.core.async.t_cljs$core$async23957.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async23957");
});

cljs.core.async.__GT_t_cljs$core$async23957 = (function cljs$core$async$__GT_t_cljs$core$async23957(f__$1,blockable__$1,meta23958){
return (new cljs.core.async.t_cljs$core$async23957(f__$1,blockable__$1,meta23958));
});

}

return (new cljs.core.async.t_cljs$core$async23957(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args23966 = [];
var len__22628__auto___23969 = arguments.length;
var i__22629__auto___23970 = (0);
while(true){
if((i__22629__auto___23970 < len__22628__auto___23969)){
args23966.push((arguments[i__22629__auto___23970]));

var G__23971 = (i__22629__auto___23970 + (1));
i__22629__auto___23970 = G__23971;
continue;
} else {
}
break;
}

var G__23968 = args23966.length;
switch (G__23968) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23966.length)].join('')));

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
var args23973 = [];
var len__22628__auto___23976 = arguments.length;
var i__22629__auto___23977 = (0);
while(true){
if((i__22629__auto___23977 < len__22628__auto___23976)){
args23973.push((arguments[i__22629__auto___23977]));

var G__23978 = (i__22629__auto___23977 + (1));
i__22629__auto___23977 = G__23978;
continue;
} else {
}
break;
}

var G__23975 = args23973.length;
switch (G__23975) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23973.length)].join('')));

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
var args23980 = [];
var len__22628__auto___23983 = arguments.length;
var i__22629__auto___23984 = (0);
while(true){
if((i__22629__auto___23984 < len__22628__auto___23983)){
args23980.push((arguments[i__22629__auto___23984]));

var G__23985 = (i__22629__auto___23984 + (1));
i__22629__auto___23984 = G__23985;
continue;
} else {
}
break;
}

var G__23982 = args23980.length;
switch (G__23982) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23980.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23987 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23987);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23987,ret){
return (function (){
return fn1.call(null,val_23987);
});})(val_23987,ret))
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
var args23988 = [];
var len__22628__auto___23991 = arguments.length;
var i__22629__auto___23992 = (0);
while(true){
if((i__22629__auto___23992 < len__22628__auto___23991)){
args23988.push((arguments[i__22629__auto___23992]));

var G__23993 = (i__22629__auto___23992 + (1));
i__22629__auto___23992 = G__23993;
continue;
} else {
}
break;
}

var G__23990 = args23988.length;
switch (G__23990) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23988.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6501__auto__)){
var ret = temp__6501__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6501__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6501__auto__)){
var retb = temp__6501__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6501__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6501__auto__))
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
var n__22458__auto___23995 = n;
var x_23996 = (0);
while(true){
if((x_23996 < n__22458__auto___23995)){
(a[x_23996] = (0));

var G__23997 = (x_23996 + (1));
x_23996 = G__23997;
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

var G__23998 = (i + (1));
i = G__23998;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async24002 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24002 = (function (alt_flag,flag,meta24003){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta24003 = meta24003;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24004,meta24003__$1){
var self__ = this;
var _24004__$1 = this;
return (new cljs.core.async.t_cljs$core$async24002(self__.alt_flag,self__.flag,meta24003__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24002.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24004){
var self__ = this;
var _24004__$1 = this;
return self__.meta24003;
});})(flag))
;

cljs.core.async.t_cljs$core$async24002.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24002.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24002.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24002.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24002.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24003","meta24003",789990711,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24002.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24002.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24002";

cljs.core.async.t_cljs$core$async24002.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async24002");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async24002 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24002(alt_flag__$1,flag__$1,meta24003){
return (new cljs.core.async.t_cljs$core$async24002(alt_flag__$1,flag__$1,meta24003));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24002(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async24008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24008 = (function (alt_handler,flag,cb,meta24009){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta24009 = meta24009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24010,meta24009__$1){
var self__ = this;
var _24010__$1 = this;
return (new cljs.core.async.t_cljs$core$async24008(self__.alt_handler,self__.flag,self__.cb,meta24009__$1));
});

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24010){
var self__ = this;
var _24010__$1 = this;
return self__.meta24009;
});

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24008.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24009","meta24009",1775778160,null)], null);
});

cljs.core.async.t_cljs$core$async24008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24008";

cljs.core.async.t_cljs$core$async24008.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async24008");
});

cljs.core.async.__GT_t_cljs$core$async24008 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24008(alt_handler__$1,flag__$1,cb__$1,meta24009){
return (new cljs.core.async.t_cljs$core$async24008(alt_handler__$1,flag__$1,cb__$1,meta24009));
});

}

return (new cljs.core.async.t_cljs$core$async24008(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24011_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24011_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24012_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24012_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21445__auto__ = wport;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24013 = (i + (1));
i = G__24013;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21445__auto__ = ret;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6503__auto__ = (function (){var and__21433__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21433__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21433__auto__;
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var got = temp__6503__auto__;
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
var args__22635__auto__ = [];
var len__22628__auto___24019 = arguments.length;
var i__22629__auto___24020 = (0);
while(true){
if((i__22629__auto___24020 < len__22628__auto___24019)){
args__22635__auto__.push((arguments[i__22629__auto___24020]));

var G__24021 = (i__22629__auto___24020 + (1));
i__22629__auto___24020 = G__24021;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24016){
var map__24017 = p__24016;
var map__24017__$1 = ((((!((map__24017 == null)))?((((map__24017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24017):map__24017);
var opts = map__24017__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24014){
var G__24015 = cljs.core.first.call(null,seq24014);
var seq24014__$1 = cljs.core.next.call(null,seq24014);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24015,seq24014__$1);
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
var args24022 = [];
var len__22628__auto___24072 = arguments.length;
var i__22629__auto___24073 = (0);
while(true){
if((i__22629__auto___24073 < len__22628__auto___24072)){
args24022.push((arguments[i__22629__auto___24073]));

var G__24074 = (i__22629__auto___24073 + (1));
i__22629__auto___24073 = G__24074;
continue;
} else {
}
break;
}

var G__24024 = args24022.length;
switch (G__24024) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24022.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23895__auto___24076 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___24076){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___24076){
return (function (state_24048){
var state_val_24049 = (state_24048[(1)]);
if((state_val_24049 === (7))){
var inst_24044 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24050_24077 = state_24048__$1;
(statearr_24050_24077[(2)] = inst_24044);

(statearr_24050_24077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (1))){
var state_24048__$1 = state_24048;
var statearr_24051_24078 = state_24048__$1;
(statearr_24051_24078[(2)] = null);

(statearr_24051_24078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (4))){
var inst_24027 = (state_24048[(7)]);
var inst_24027__$1 = (state_24048[(2)]);
var inst_24028 = (inst_24027__$1 == null);
var state_24048__$1 = (function (){var statearr_24052 = state_24048;
(statearr_24052[(7)] = inst_24027__$1);

return statearr_24052;
})();
if(cljs.core.truth_(inst_24028)){
var statearr_24053_24079 = state_24048__$1;
(statearr_24053_24079[(1)] = (5));

} else {
var statearr_24054_24080 = state_24048__$1;
(statearr_24054_24080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (13))){
var state_24048__$1 = state_24048;
var statearr_24055_24081 = state_24048__$1;
(statearr_24055_24081[(2)] = null);

(statearr_24055_24081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (6))){
var inst_24027 = (state_24048[(7)]);
var state_24048__$1 = state_24048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24048__$1,(11),to,inst_24027);
} else {
if((state_val_24049 === (3))){
var inst_24046 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24048__$1,inst_24046);
} else {
if((state_val_24049 === (12))){
var state_24048__$1 = state_24048;
var statearr_24056_24082 = state_24048__$1;
(statearr_24056_24082[(2)] = null);

(statearr_24056_24082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (2))){
var state_24048__$1 = state_24048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24048__$1,(4),from);
} else {
if((state_val_24049 === (11))){
var inst_24037 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
if(cljs.core.truth_(inst_24037)){
var statearr_24057_24083 = state_24048__$1;
(statearr_24057_24083[(1)] = (12));

} else {
var statearr_24058_24084 = state_24048__$1;
(statearr_24058_24084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (9))){
var state_24048__$1 = state_24048;
var statearr_24059_24085 = state_24048__$1;
(statearr_24059_24085[(2)] = null);

(statearr_24059_24085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (5))){
var state_24048__$1 = state_24048;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24060_24086 = state_24048__$1;
(statearr_24060_24086[(1)] = (8));

} else {
var statearr_24061_24087 = state_24048__$1;
(statearr_24061_24087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (14))){
var inst_24042 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24062_24088 = state_24048__$1;
(statearr_24062_24088[(2)] = inst_24042);

(statearr_24062_24088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (10))){
var inst_24034 = (state_24048[(2)]);
var state_24048__$1 = state_24048;
var statearr_24063_24089 = state_24048__$1;
(statearr_24063_24089[(2)] = inst_24034);

(statearr_24063_24089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24049 === (8))){
var inst_24031 = cljs.core.async.close_BANG_.call(null,to);
var state_24048__$1 = state_24048;
var statearr_24064_24090 = state_24048__$1;
(statearr_24064_24090[(2)] = inst_24031);

(statearr_24064_24090[(1)] = (10));


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
});})(c__23895__auto___24076))
;
return ((function (switch__23872__auto__,c__23895__auto___24076){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_24068 = [null,null,null,null,null,null,null,null];
(statearr_24068[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_24068[(1)] = (1));

return statearr_24068;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_24048){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24069){if((e24069 instanceof Object)){
var ex__23876__auto__ = e24069;
var statearr_24070_24091 = state_24048;
(statearr_24070_24091[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24092 = state_24048;
state_24048 = G__24092;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_24048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_24048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___24076))
})();
var state__23897__auto__ = (function (){var statearr_24071 = f__23896__auto__.call(null);
(statearr_24071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___24076);

return statearr_24071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___24076))
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
return (function (p__24280){
var vec__24281 = p__24280;
var v = cljs.core.nth.call(null,vec__24281,(0),null);
var p = cljs.core.nth.call(null,vec__24281,(1),null);
var job = vec__24281;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23895__auto___24467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___24467,res,vec__24281,v,p,job,jobs,results){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___24467,res,vec__24281,v,p,job,jobs,results){
return (function (state_24288){
var state_val_24289 = (state_24288[(1)]);
if((state_val_24289 === (1))){
var state_24288__$1 = state_24288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24288__$1,(2),res,v);
} else {
if((state_val_24289 === (2))){
var inst_24285 = (state_24288[(2)]);
var inst_24286 = cljs.core.async.close_BANG_.call(null,res);
var state_24288__$1 = (function (){var statearr_24290 = state_24288;
(statearr_24290[(7)] = inst_24285);

return statearr_24290;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24288__$1,inst_24286);
} else {
return null;
}
}
});})(c__23895__auto___24467,res,vec__24281,v,p,job,jobs,results))
;
return ((function (switch__23872__auto__,c__23895__auto___24467,res,vec__24281,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0 = (function (){
var statearr_24294 = [null,null,null,null,null,null,null,null];
(statearr_24294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__);

(statearr_24294[(1)] = (1));

return statearr_24294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1 = (function (state_24288){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24295){if((e24295 instanceof Object)){
var ex__23876__auto__ = e24295;
var statearr_24296_24468 = state_24288;
(statearr_24296_24468[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24469 = state_24288;
state_24288 = G__24469;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = function(state_24288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1.call(this,state_24288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___24467,res,vec__24281,v,p,job,jobs,results))
})();
var state__23897__auto__ = (function (){var statearr_24297 = f__23896__auto__.call(null);
(statearr_24297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___24467);

return statearr_24297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___24467,res,vec__24281,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24298){
var vec__24299 = p__24298;
var v = cljs.core.nth.call(null,vec__24299,(0),null);
var p = cljs.core.nth.call(null,vec__24299,(1),null);
var job = vec__24299;
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
var n__22458__auto___24470 = n;
var __24471 = (0);
while(true){
if((__24471 < n__22458__auto___24470)){
var G__24302_24472 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24302_24472) {
case "compute":
var c__23895__auto___24474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24471,c__23895__auto___24474,G__24302_24472,n__22458__auto___24470,jobs,results,process,async){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (__24471,c__23895__auto___24474,G__24302_24472,n__22458__auto___24470,jobs,results,process,async){
return (function (state_24315){
var state_val_24316 = (state_24315[(1)]);
if((state_val_24316 === (1))){
var state_24315__$1 = state_24315;
var statearr_24317_24475 = state_24315__$1;
(statearr_24317_24475[(2)] = null);

(statearr_24317_24475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (2))){
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24315__$1,(4),jobs);
} else {
if((state_val_24316 === (3))){
var inst_24313 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24315__$1,inst_24313);
} else {
if((state_val_24316 === (4))){
var inst_24305 = (state_24315[(2)]);
var inst_24306 = process.call(null,inst_24305);
var state_24315__$1 = state_24315;
if(cljs.core.truth_(inst_24306)){
var statearr_24318_24476 = state_24315__$1;
(statearr_24318_24476[(1)] = (5));

} else {
var statearr_24319_24477 = state_24315__$1;
(statearr_24319_24477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (5))){
var state_24315__$1 = state_24315;
var statearr_24320_24478 = state_24315__$1;
(statearr_24320_24478[(2)] = null);

(statearr_24320_24478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (6))){
var state_24315__$1 = state_24315;
var statearr_24321_24479 = state_24315__$1;
(statearr_24321_24479[(2)] = null);

(statearr_24321_24479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24316 === (7))){
var inst_24311 = (state_24315[(2)]);
var state_24315__$1 = state_24315;
var statearr_24322_24480 = state_24315__$1;
(statearr_24322_24480[(2)] = inst_24311);

(statearr_24322_24480[(1)] = (3));


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
});})(__24471,c__23895__auto___24474,G__24302_24472,n__22458__auto___24470,jobs,results,process,async))
;
return ((function (__24471,switch__23872__auto__,c__23895__auto___24474,G__24302_24472,n__22458__auto___24470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0 = (function (){
var statearr_24326 = [null,null,null,null,null,null,null];
(statearr_24326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__);

(statearr_24326[(1)] = (1));

return statearr_24326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1 = (function (state_24315){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24327){if((e24327 instanceof Object)){
var ex__23876__auto__ = e24327;
var statearr_24328_24481 = state_24315;
(statearr_24328_24481[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24482 = state_24315;
state_24315 = G__24482;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = function(state_24315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1.call(this,state_24315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__;
})()
;})(__24471,switch__23872__auto__,c__23895__auto___24474,G__24302_24472,n__22458__auto___24470,jobs,results,process,async))
})();
var state__23897__auto__ = (function (){var statearr_24329 = f__23896__auto__.call(null);
(statearr_24329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___24474);

return statearr_24329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(__24471,c__23895__auto___24474,G__24302_24472,n__22458__auto___24470,jobs,results,process,async))
);


break;
case "async":
var c__23895__auto___24483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24471,c__23895__auto___24483,G__24302_24472,n__22458__auto___24470,jobs,results,process,async){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (__24471,c__23895__auto___24483,G__24302_24472,n__22458__auto___24470,jobs,results,process,async){
return (function (state_24342){
var state_val_24343 = (state_24342[(1)]);
if((state_val_24343 === (1))){
var state_24342__$1 = state_24342;
var statearr_24344_24484 = state_24342__$1;
(statearr_24344_24484[(2)] = null);

(statearr_24344_24484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (2))){
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24342__$1,(4),jobs);
} else {
if((state_val_24343 === (3))){
var inst_24340 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24342__$1,inst_24340);
} else {
if((state_val_24343 === (4))){
var inst_24332 = (state_24342[(2)]);
var inst_24333 = async.call(null,inst_24332);
var state_24342__$1 = state_24342;
if(cljs.core.truth_(inst_24333)){
var statearr_24345_24485 = state_24342__$1;
(statearr_24345_24485[(1)] = (5));

} else {
var statearr_24346_24486 = state_24342__$1;
(statearr_24346_24486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (5))){
var state_24342__$1 = state_24342;
var statearr_24347_24487 = state_24342__$1;
(statearr_24347_24487[(2)] = null);

(statearr_24347_24487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (6))){
var state_24342__$1 = state_24342;
var statearr_24348_24488 = state_24342__$1;
(statearr_24348_24488[(2)] = null);

(statearr_24348_24488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24343 === (7))){
var inst_24338 = (state_24342[(2)]);
var state_24342__$1 = state_24342;
var statearr_24349_24489 = state_24342__$1;
(statearr_24349_24489[(2)] = inst_24338);

(statearr_24349_24489[(1)] = (3));


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
});})(__24471,c__23895__auto___24483,G__24302_24472,n__22458__auto___24470,jobs,results,process,async))
;
return ((function (__24471,switch__23872__auto__,c__23895__auto___24483,G__24302_24472,n__22458__auto___24470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0 = (function (){
var statearr_24353 = [null,null,null,null,null,null,null];
(statearr_24353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__);

(statearr_24353[(1)] = (1));

return statearr_24353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1 = (function (state_24342){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24354){if((e24354 instanceof Object)){
var ex__23876__auto__ = e24354;
var statearr_24355_24490 = state_24342;
(statearr_24355_24490[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24491 = state_24342;
state_24342 = G__24491;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = function(state_24342){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1.call(this,state_24342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__;
})()
;})(__24471,switch__23872__auto__,c__23895__auto___24483,G__24302_24472,n__22458__auto___24470,jobs,results,process,async))
})();
var state__23897__auto__ = (function (){var statearr_24356 = f__23896__auto__.call(null);
(statearr_24356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___24483);

return statearr_24356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(__24471,c__23895__auto___24483,G__24302_24472,n__22458__auto___24470,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24492 = (__24471 + (1));
__24471 = G__24492;
continue;
} else {
}
break;
}

var c__23895__auto___24493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___24493,jobs,results,process,async){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___24493,jobs,results,process,async){
return (function (state_24378){
var state_val_24379 = (state_24378[(1)]);
if((state_val_24379 === (1))){
var state_24378__$1 = state_24378;
var statearr_24380_24494 = state_24378__$1;
(statearr_24380_24494[(2)] = null);

(statearr_24380_24494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24379 === (2))){
var state_24378__$1 = state_24378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24378__$1,(4),from);
} else {
if((state_val_24379 === (3))){
var inst_24376 = (state_24378[(2)]);
var state_24378__$1 = state_24378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24378__$1,inst_24376);
} else {
if((state_val_24379 === (4))){
var inst_24359 = (state_24378[(7)]);
var inst_24359__$1 = (state_24378[(2)]);
var inst_24360 = (inst_24359__$1 == null);
var state_24378__$1 = (function (){var statearr_24381 = state_24378;
(statearr_24381[(7)] = inst_24359__$1);

return statearr_24381;
})();
if(cljs.core.truth_(inst_24360)){
var statearr_24382_24495 = state_24378__$1;
(statearr_24382_24495[(1)] = (5));

} else {
var statearr_24383_24496 = state_24378__$1;
(statearr_24383_24496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24379 === (5))){
var inst_24362 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24378__$1 = state_24378;
var statearr_24384_24497 = state_24378__$1;
(statearr_24384_24497[(2)] = inst_24362);

(statearr_24384_24497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24379 === (6))){
var inst_24364 = (state_24378[(8)]);
var inst_24359 = (state_24378[(7)]);
var inst_24364__$1 = cljs.core.async.chan.call(null,(1));
var inst_24365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24366 = [inst_24359,inst_24364__$1];
var inst_24367 = (new cljs.core.PersistentVector(null,2,(5),inst_24365,inst_24366,null));
var state_24378__$1 = (function (){var statearr_24385 = state_24378;
(statearr_24385[(8)] = inst_24364__$1);

return statearr_24385;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24378__$1,(8),jobs,inst_24367);
} else {
if((state_val_24379 === (7))){
var inst_24374 = (state_24378[(2)]);
var state_24378__$1 = state_24378;
var statearr_24386_24498 = state_24378__$1;
(statearr_24386_24498[(2)] = inst_24374);

(statearr_24386_24498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24379 === (8))){
var inst_24364 = (state_24378[(8)]);
var inst_24369 = (state_24378[(2)]);
var state_24378__$1 = (function (){var statearr_24387 = state_24378;
(statearr_24387[(9)] = inst_24369);

return statearr_24387;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24378__$1,(9),results,inst_24364);
} else {
if((state_val_24379 === (9))){
var inst_24371 = (state_24378[(2)]);
var state_24378__$1 = (function (){var statearr_24388 = state_24378;
(statearr_24388[(10)] = inst_24371);

return statearr_24388;
})();
var statearr_24389_24499 = state_24378__$1;
(statearr_24389_24499[(2)] = null);

(statearr_24389_24499[(1)] = (2));


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
});})(c__23895__auto___24493,jobs,results,process,async))
;
return ((function (switch__23872__auto__,c__23895__auto___24493,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0 = (function (){
var statearr_24393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__);

(statearr_24393[(1)] = (1));

return statearr_24393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1 = (function (state_24378){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24394){if((e24394 instanceof Object)){
var ex__23876__auto__ = e24394;
var statearr_24395_24500 = state_24378;
(statearr_24395_24500[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24501 = state_24378;
state_24378 = G__24501;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = function(state_24378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1.call(this,state_24378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___24493,jobs,results,process,async))
})();
var state__23897__auto__ = (function (){var statearr_24396 = f__23896__auto__.call(null);
(statearr_24396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___24493);

return statearr_24396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___24493,jobs,results,process,async))
);


var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__,jobs,results,process,async){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__,jobs,results,process,async){
return (function (state_24434){
var state_val_24435 = (state_24434[(1)]);
if((state_val_24435 === (7))){
var inst_24430 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24436_24502 = state_24434__$1;
(statearr_24436_24502[(2)] = inst_24430);

(statearr_24436_24502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (20))){
var state_24434__$1 = state_24434;
var statearr_24437_24503 = state_24434__$1;
(statearr_24437_24503[(2)] = null);

(statearr_24437_24503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (1))){
var state_24434__$1 = state_24434;
var statearr_24438_24504 = state_24434__$1;
(statearr_24438_24504[(2)] = null);

(statearr_24438_24504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (4))){
var inst_24399 = (state_24434[(7)]);
var inst_24399__$1 = (state_24434[(2)]);
var inst_24400 = (inst_24399__$1 == null);
var state_24434__$1 = (function (){var statearr_24439 = state_24434;
(statearr_24439[(7)] = inst_24399__$1);

return statearr_24439;
})();
if(cljs.core.truth_(inst_24400)){
var statearr_24440_24505 = state_24434__$1;
(statearr_24440_24505[(1)] = (5));

} else {
var statearr_24441_24506 = state_24434__$1;
(statearr_24441_24506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (15))){
var inst_24412 = (state_24434[(8)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24434__$1,(18),to,inst_24412);
} else {
if((state_val_24435 === (21))){
var inst_24425 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24442_24507 = state_24434__$1;
(statearr_24442_24507[(2)] = inst_24425);

(statearr_24442_24507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (13))){
var inst_24427 = (state_24434[(2)]);
var state_24434__$1 = (function (){var statearr_24443 = state_24434;
(statearr_24443[(9)] = inst_24427);

return statearr_24443;
})();
var statearr_24444_24508 = state_24434__$1;
(statearr_24444_24508[(2)] = null);

(statearr_24444_24508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (6))){
var inst_24399 = (state_24434[(7)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24434__$1,(11),inst_24399);
} else {
if((state_val_24435 === (17))){
var inst_24420 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
if(cljs.core.truth_(inst_24420)){
var statearr_24445_24509 = state_24434__$1;
(statearr_24445_24509[(1)] = (19));

} else {
var statearr_24446_24510 = state_24434__$1;
(statearr_24446_24510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (3))){
var inst_24432 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24434__$1,inst_24432);
} else {
if((state_val_24435 === (12))){
var inst_24409 = (state_24434[(10)]);
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24434__$1,(14),inst_24409);
} else {
if((state_val_24435 === (2))){
var state_24434__$1 = state_24434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24434__$1,(4),results);
} else {
if((state_val_24435 === (19))){
var state_24434__$1 = state_24434;
var statearr_24447_24511 = state_24434__$1;
(statearr_24447_24511[(2)] = null);

(statearr_24447_24511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (11))){
var inst_24409 = (state_24434[(2)]);
var state_24434__$1 = (function (){var statearr_24448 = state_24434;
(statearr_24448[(10)] = inst_24409);

return statearr_24448;
})();
var statearr_24449_24512 = state_24434__$1;
(statearr_24449_24512[(2)] = null);

(statearr_24449_24512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (9))){
var state_24434__$1 = state_24434;
var statearr_24450_24513 = state_24434__$1;
(statearr_24450_24513[(2)] = null);

(statearr_24450_24513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (5))){
var state_24434__$1 = state_24434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24451_24514 = state_24434__$1;
(statearr_24451_24514[(1)] = (8));

} else {
var statearr_24452_24515 = state_24434__$1;
(statearr_24452_24515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (14))){
var inst_24414 = (state_24434[(11)]);
var inst_24412 = (state_24434[(8)]);
var inst_24412__$1 = (state_24434[(2)]);
var inst_24413 = (inst_24412__$1 == null);
var inst_24414__$1 = cljs.core.not.call(null,inst_24413);
var state_24434__$1 = (function (){var statearr_24453 = state_24434;
(statearr_24453[(11)] = inst_24414__$1);

(statearr_24453[(8)] = inst_24412__$1);

return statearr_24453;
})();
if(inst_24414__$1){
var statearr_24454_24516 = state_24434__$1;
(statearr_24454_24516[(1)] = (15));

} else {
var statearr_24455_24517 = state_24434__$1;
(statearr_24455_24517[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (16))){
var inst_24414 = (state_24434[(11)]);
var state_24434__$1 = state_24434;
var statearr_24456_24518 = state_24434__$1;
(statearr_24456_24518[(2)] = inst_24414);

(statearr_24456_24518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (10))){
var inst_24406 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24457_24519 = state_24434__$1;
(statearr_24457_24519[(2)] = inst_24406);

(statearr_24457_24519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (18))){
var inst_24417 = (state_24434[(2)]);
var state_24434__$1 = state_24434;
var statearr_24458_24520 = state_24434__$1;
(statearr_24458_24520[(2)] = inst_24417);

(statearr_24458_24520[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24435 === (8))){
var inst_24403 = cljs.core.async.close_BANG_.call(null,to);
var state_24434__$1 = state_24434;
var statearr_24459_24521 = state_24434__$1;
(statearr_24459_24521[(2)] = inst_24403);

(statearr_24459_24521[(1)] = (10));


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
});})(c__23895__auto__,jobs,results,process,async))
;
return ((function (switch__23872__auto__,c__23895__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0 = (function (){
var statearr_24463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__);

(statearr_24463[(1)] = (1));

return statearr_24463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1 = (function (state_24434){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24464){if((e24464 instanceof Object)){
var ex__23876__auto__ = e24464;
var statearr_24465_24522 = state_24434;
(statearr_24465_24522[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24523 = state_24434;
state_24434 = G__24523;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__ = function(state_24434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1.call(this,state_24434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23873__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__,jobs,results,process,async))
})();
var state__23897__auto__ = (function (){var statearr_24466 = f__23896__auto__.call(null);
(statearr_24466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_24466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__,jobs,results,process,async))
);

return c__23895__auto__;
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
var args24524 = [];
var len__22628__auto___24527 = arguments.length;
var i__22629__auto___24528 = (0);
while(true){
if((i__22629__auto___24528 < len__22628__auto___24527)){
args24524.push((arguments[i__22629__auto___24528]));

var G__24529 = (i__22629__auto___24528 + (1));
i__22629__auto___24528 = G__24529;
continue;
} else {
}
break;
}

var G__24526 = args24524.length;
switch (G__24526) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24524.length)].join('')));

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
var args24531 = [];
var len__22628__auto___24534 = arguments.length;
var i__22629__auto___24535 = (0);
while(true){
if((i__22629__auto___24535 < len__22628__auto___24534)){
args24531.push((arguments[i__22629__auto___24535]));

var G__24536 = (i__22629__auto___24535 + (1));
i__22629__auto___24535 = G__24536;
continue;
} else {
}
break;
}

var G__24533 = args24531.length;
switch (G__24533) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24531.length)].join('')));

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
var args24538 = [];
var len__22628__auto___24591 = arguments.length;
var i__22629__auto___24592 = (0);
while(true){
if((i__22629__auto___24592 < len__22628__auto___24591)){
args24538.push((arguments[i__22629__auto___24592]));

var G__24593 = (i__22629__auto___24592 + (1));
i__22629__auto___24592 = G__24593;
continue;
} else {
}
break;
}

var G__24540 = args24538.length;
switch (G__24540) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24538.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23895__auto___24595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___24595,tc,fc){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___24595,tc,fc){
return (function (state_24566){
var state_val_24567 = (state_24566[(1)]);
if((state_val_24567 === (7))){
var inst_24562 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24568_24596 = state_24566__$1;
(statearr_24568_24596[(2)] = inst_24562);

(statearr_24568_24596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (1))){
var state_24566__$1 = state_24566;
var statearr_24569_24597 = state_24566__$1;
(statearr_24569_24597[(2)] = null);

(statearr_24569_24597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (4))){
var inst_24543 = (state_24566[(7)]);
var inst_24543__$1 = (state_24566[(2)]);
var inst_24544 = (inst_24543__$1 == null);
var state_24566__$1 = (function (){var statearr_24570 = state_24566;
(statearr_24570[(7)] = inst_24543__$1);

return statearr_24570;
})();
if(cljs.core.truth_(inst_24544)){
var statearr_24571_24598 = state_24566__$1;
(statearr_24571_24598[(1)] = (5));

} else {
var statearr_24572_24599 = state_24566__$1;
(statearr_24572_24599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (13))){
var state_24566__$1 = state_24566;
var statearr_24573_24600 = state_24566__$1;
(statearr_24573_24600[(2)] = null);

(statearr_24573_24600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (6))){
var inst_24543 = (state_24566[(7)]);
var inst_24549 = p.call(null,inst_24543);
var state_24566__$1 = state_24566;
if(cljs.core.truth_(inst_24549)){
var statearr_24574_24601 = state_24566__$1;
(statearr_24574_24601[(1)] = (9));

} else {
var statearr_24575_24602 = state_24566__$1;
(statearr_24575_24602[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (3))){
var inst_24564 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24566__$1,inst_24564);
} else {
if((state_val_24567 === (12))){
var state_24566__$1 = state_24566;
var statearr_24576_24603 = state_24566__$1;
(statearr_24576_24603[(2)] = null);

(statearr_24576_24603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (2))){
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24566__$1,(4),ch);
} else {
if((state_val_24567 === (11))){
var inst_24543 = (state_24566[(7)]);
var inst_24553 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24566__$1,(8),inst_24553,inst_24543);
} else {
if((state_val_24567 === (9))){
var state_24566__$1 = state_24566;
var statearr_24577_24604 = state_24566__$1;
(statearr_24577_24604[(2)] = tc);

(statearr_24577_24604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (5))){
var inst_24546 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24547 = cljs.core.async.close_BANG_.call(null,fc);
var state_24566__$1 = (function (){var statearr_24578 = state_24566;
(statearr_24578[(8)] = inst_24546);

return statearr_24578;
})();
var statearr_24579_24605 = state_24566__$1;
(statearr_24579_24605[(2)] = inst_24547);

(statearr_24579_24605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (14))){
var inst_24560 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
var statearr_24580_24606 = state_24566__$1;
(statearr_24580_24606[(2)] = inst_24560);

(statearr_24580_24606[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (10))){
var state_24566__$1 = state_24566;
var statearr_24581_24607 = state_24566__$1;
(statearr_24581_24607[(2)] = fc);

(statearr_24581_24607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24567 === (8))){
var inst_24555 = (state_24566[(2)]);
var state_24566__$1 = state_24566;
if(cljs.core.truth_(inst_24555)){
var statearr_24582_24608 = state_24566__$1;
(statearr_24582_24608[(1)] = (12));

} else {
var statearr_24583_24609 = state_24566__$1;
(statearr_24583_24609[(1)] = (13));

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
});})(c__23895__auto___24595,tc,fc))
;
return ((function (switch__23872__auto__,c__23895__auto___24595,tc,fc){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_24587 = [null,null,null,null,null,null,null,null,null];
(statearr_24587[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_24587[(1)] = (1));

return statearr_24587;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_24566){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24588){if((e24588 instanceof Object)){
var ex__23876__auto__ = e24588;
var statearr_24589_24610 = state_24566;
(statearr_24589_24610[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24611 = state_24566;
state_24566 = G__24611;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_24566){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_24566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___24595,tc,fc))
})();
var state__23897__auto__ = (function (){var statearr_24590 = f__23896__auto__.call(null);
(statearr_24590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___24595);

return statearr_24590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___24595,tc,fc))
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
var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__){
return (function (state_24675){
var state_val_24676 = (state_24675[(1)]);
if((state_val_24676 === (7))){
var inst_24671 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24677_24698 = state_24675__$1;
(statearr_24677_24698[(2)] = inst_24671);

(statearr_24677_24698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (1))){
var inst_24655 = init;
var state_24675__$1 = (function (){var statearr_24678 = state_24675;
(statearr_24678[(7)] = inst_24655);

return statearr_24678;
})();
var statearr_24679_24699 = state_24675__$1;
(statearr_24679_24699[(2)] = null);

(statearr_24679_24699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (4))){
var inst_24658 = (state_24675[(8)]);
var inst_24658__$1 = (state_24675[(2)]);
var inst_24659 = (inst_24658__$1 == null);
var state_24675__$1 = (function (){var statearr_24680 = state_24675;
(statearr_24680[(8)] = inst_24658__$1);

return statearr_24680;
})();
if(cljs.core.truth_(inst_24659)){
var statearr_24681_24700 = state_24675__$1;
(statearr_24681_24700[(1)] = (5));

} else {
var statearr_24682_24701 = state_24675__$1;
(statearr_24682_24701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (6))){
var inst_24655 = (state_24675[(7)]);
var inst_24662 = (state_24675[(9)]);
var inst_24658 = (state_24675[(8)]);
var inst_24662__$1 = f.call(null,inst_24655,inst_24658);
var inst_24663 = cljs.core.reduced_QMARK_.call(null,inst_24662__$1);
var state_24675__$1 = (function (){var statearr_24683 = state_24675;
(statearr_24683[(9)] = inst_24662__$1);

return statearr_24683;
})();
if(inst_24663){
var statearr_24684_24702 = state_24675__$1;
(statearr_24684_24702[(1)] = (8));

} else {
var statearr_24685_24703 = state_24675__$1;
(statearr_24685_24703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (3))){
var inst_24673 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24675__$1,inst_24673);
} else {
if((state_val_24676 === (2))){
var state_24675__$1 = state_24675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24675__$1,(4),ch);
} else {
if((state_val_24676 === (9))){
var inst_24662 = (state_24675[(9)]);
var inst_24655 = inst_24662;
var state_24675__$1 = (function (){var statearr_24686 = state_24675;
(statearr_24686[(7)] = inst_24655);

return statearr_24686;
})();
var statearr_24687_24704 = state_24675__$1;
(statearr_24687_24704[(2)] = null);

(statearr_24687_24704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (5))){
var inst_24655 = (state_24675[(7)]);
var state_24675__$1 = state_24675;
var statearr_24688_24705 = state_24675__$1;
(statearr_24688_24705[(2)] = inst_24655);

(statearr_24688_24705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (10))){
var inst_24669 = (state_24675[(2)]);
var state_24675__$1 = state_24675;
var statearr_24689_24706 = state_24675__$1;
(statearr_24689_24706[(2)] = inst_24669);

(statearr_24689_24706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24676 === (8))){
var inst_24662 = (state_24675[(9)]);
var inst_24665 = cljs.core.deref.call(null,inst_24662);
var state_24675__$1 = state_24675;
var statearr_24690_24707 = state_24675__$1;
(statearr_24690_24707[(2)] = inst_24665);

(statearr_24690_24707[(1)] = (10));


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
});})(c__23895__auto__))
;
return ((function (switch__23872__auto__,c__23895__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23873__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23873__auto____0 = (function (){
var statearr_24694 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24694[(0)] = cljs$core$async$reduce_$_state_machine__23873__auto__);

(statearr_24694[(1)] = (1));

return statearr_24694;
});
var cljs$core$async$reduce_$_state_machine__23873__auto____1 = (function (state_24675){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24695){if((e24695 instanceof Object)){
var ex__23876__auto__ = e24695;
var statearr_24696_24708 = state_24675;
(statearr_24696_24708[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24709 = state_24675;
state_24675 = G__24709;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23873__auto__ = function(state_24675){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23873__auto____1.call(this,state_24675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23873__auto____0;
cljs$core$async$reduce_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23873__auto____1;
return cljs$core$async$reduce_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__))
})();
var state__23897__auto__ = (function (){var statearr_24697 = f__23896__auto__.call(null);
(statearr_24697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_24697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__))
);

return c__23895__auto__;
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
var args24710 = [];
var len__22628__auto___24762 = arguments.length;
var i__22629__auto___24763 = (0);
while(true){
if((i__22629__auto___24763 < len__22628__auto___24762)){
args24710.push((arguments[i__22629__auto___24763]));

var G__24764 = (i__22629__auto___24763 + (1));
i__22629__auto___24763 = G__24764;
continue;
} else {
}
break;
}

var G__24712 = args24710.length;
switch (G__24712) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24710.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__){
return (function (state_24737){
var state_val_24738 = (state_24737[(1)]);
if((state_val_24738 === (7))){
var inst_24719 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24739_24766 = state_24737__$1;
(statearr_24739_24766[(2)] = inst_24719);

(statearr_24739_24766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (1))){
var inst_24713 = cljs.core.seq.call(null,coll);
var inst_24714 = inst_24713;
var state_24737__$1 = (function (){var statearr_24740 = state_24737;
(statearr_24740[(7)] = inst_24714);

return statearr_24740;
})();
var statearr_24741_24767 = state_24737__$1;
(statearr_24741_24767[(2)] = null);

(statearr_24741_24767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (4))){
var inst_24714 = (state_24737[(7)]);
var inst_24717 = cljs.core.first.call(null,inst_24714);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24737__$1,(7),ch,inst_24717);
} else {
if((state_val_24738 === (13))){
var inst_24731 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24742_24768 = state_24737__$1;
(statearr_24742_24768[(2)] = inst_24731);

(statearr_24742_24768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (6))){
var inst_24722 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
if(cljs.core.truth_(inst_24722)){
var statearr_24743_24769 = state_24737__$1;
(statearr_24743_24769[(1)] = (8));

} else {
var statearr_24744_24770 = state_24737__$1;
(statearr_24744_24770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (3))){
var inst_24735 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24737__$1,inst_24735);
} else {
if((state_val_24738 === (12))){
var state_24737__$1 = state_24737;
var statearr_24745_24771 = state_24737__$1;
(statearr_24745_24771[(2)] = null);

(statearr_24745_24771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (2))){
var inst_24714 = (state_24737[(7)]);
var state_24737__$1 = state_24737;
if(cljs.core.truth_(inst_24714)){
var statearr_24746_24772 = state_24737__$1;
(statearr_24746_24772[(1)] = (4));

} else {
var statearr_24747_24773 = state_24737__$1;
(statearr_24747_24773[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (11))){
var inst_24728 = cljs.core.async.close_BANG_.call(null,ch);
var state_24737__$1 = state_24737;
var statearr_24748_24774 = state_24737__$1;
(statearr_24748_24774[(2)] = inst_24728);

(statearr_24748_24774[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (9))){
var state_24737__$1 = state_24737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24749_24775 = state_24737__$1;
(statearr_24749_24775[(1)] = (11));

} else {
var statearr_24750_24776 = state_24737__$1;
(statearr_24750_24776[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (5))){
var inst_24714 = (state_24737[(7)]);
var state_24737__$1 = state_24737;
var statearr_24751_24777 = state_24737__$1;
(statearr_24751_24777[(2)] = inst_24714);

(statearr_24751_24777[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (10))){
var inst_24733 = (state_24737[(2)]);
var state_24737__$1 = state_24737;
var statearr_24752_24778 = state_24737__$1;
(statearr_24752_24778[(2)] = inst_24733);

(statearr_24752_24778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24738 === (8))){
var inst_24714 = (state_24737[(7)]);
var inst_24724 = cljs.core.next.call(null,inst_24714);
var inst_24714__$1 = inst_24724;
var state_24737__$1 = (function (){var statearr_24753 = state_24737;
(statearr_24753[(7)] = inst_24714__$1);

return statearr_24753;
})();
var statearr_24754_24779 = state_24737__$1;
(statearr_24754_24779[(2)] = null);

(statearr_24754_24779[(1)] = (2));


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
});})(c__23895__auto__))
;
return ((function (switch__23872__auto__,c__23895__auto__){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_24758 = [null,null,null,null,null,null,null,null];
(statearr_24758[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_24758[(1)] = (1));

return statearr_24758;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_24737){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_24737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e24759){if((e24759 instanceof Object)){
var ex__23876__auto__ = e24759;
var statearr_24760_24780 = state_24737;
(statearr_24760_24780[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24781 = state_24737;
state_24737 = G__24781;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_24737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_24737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__))
})();
var state__23897__auto__ = (function (){var statearr_24761 = f__23896__auto__.call(null);
(statearr_24761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_24761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__))
);

return c__23895__auto__;
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
var x__22158__auto__ = (((_ == null))?null:_);
var m__22159__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,_);
} else {
var m__22159__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,_);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22159__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m);
} else {
var m__22159__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async25007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25007 = (function (mult,ch,cs,meta25008){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta25008 = meta25008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25009,meta25008__$1){
var self__ = this;
var _25009__$1 = this;
return (new cljs.core.async.t_cljs$core$async25007(self__.mult,self__.ch,self__.cs,meta25008__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25009){
var self__ = this;
var _25009__$1 = this;
return self__.meta25008;
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25008","meta25008",808194449,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25007";

cljs.core.async.t_cljs$core$async25007.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async25007");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async25007 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25007(mult__$1,ch__$1,cs__$1,meta25008){
return (new cljs.core.async.t_cljs$core$async25007(mult__$1,ch__$1,cs__$1,meta25008));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25007(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__23895__auto___25232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___25232,cs,m,dchan,dctr,done){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___25232,cs,m,dchan,dctr,done){
return (function (state_25144){
var state_val_25145 = (state_25144[(1)]);
if((state_val_25145 === (7))){
var inst_25140 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25146_25233 = state_25144__$1;
(statearr_25146_25233[(2)] = inst_25140);

(statearr_25146_25233[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (20))){
var inst_25043 = (state_25144[(7)]);
var inst_25055 = cljs.core.first.call(null,inst_25043);
var inst_25056 = cljs.core.nth.call(null,inst_25055,(0),null);
var inst_25057 = cljs.core.nth.call(null,inst_25055,(1),null);
var state_25144__$1 = (function (){var statearr_25147 = state_25144;
(statearr_25147[(8)] = inst_25056);

return statearr_25147;
})();
if(cljs.core.truth_(inst_25057)){
var statearr_25148_25234 = state_25144__$1;
(statearr_25148_25234[(1)] = (22));

} else {
var statearr_25149_25235 = state_25144__$1;
(statearr_25149_25235[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (27))){
var inst_25092 = (state_25144[(9)]);
var inst_25087 = (state_25144[(10)]);
var inst_25085 = (state_25144[(11)]);
var inst_25012 = (state_25144[(12)]);
var inst_25092__$1 = cljs.core._nth.call(null,inst_25085,inst_25087);
var inst_25093 = cljs.core.async.put_BANG_.call(null,inst_25092__$1,inst_25012,done);
var state_25144__$1 = (function (){var statearr_25150 = state_25144;
(statearr_25150[(9)] = inst_25092__$1);

return statearr_25150;
})();
if(cljs.core.truth_(inst_25093)){
var statearr_25151_25236 = state_25144__$1;
(statearr_25151_25236[(1)] = (30));

} else {
var statearr_25152_25237 = state_25144__$1;
(statearr_25152_25237[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (1))){
var state_25144__$1 = state_25144;
var statearr_25153_25238 = state_25144__$1;
(statearr_25153_25238[(2)] = null);

(statearr_25153_25238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (24))){
var inst_25043 = (state_25144[(7)]);
var inst_25062 = (state_25144[(2)]);
var inst_25063 = cljs.core.next.call(null,inst_25043);
var inst_25021 = inst_25063;
var inst_25022 = null;
var inst_25023 = (0);
var inst_25024 = (0);
var state_25144__$1 = (function (){var statearr_25154 = state_25144;
(statearr_25154[(13)] = inst_25022);

(statearr_25154[(14)] = inst_25024);

(statearr_25154[(15)] = inst_25023);

(statearr_25154[(16)] = inst_25062);

(statearr_25154[(17)] = inst_25021);

return statearr_25154;
})();
var statearr_25155_25239 = state_25144__$1;
(statearr_25155_25239[(2)] = null);

(statearr_25155_25239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (39))){
var state_25144__$1 = state_25144;
var statearr_25159_25240 = state_25144__$1;
(statearr_25159_25240[(2)] = null);

(statearr_25159_25240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (4))){
var inst_25012 = (state_25144[(12)]);
var inst_25012__$1 = (state_25144[(2)]);
var inst_25013 = (inst_25012__$1 == null);
var state_25144__$1 = (function (){var statearr_25160 = state_25144;
(statearr_25160[(12)] = inst_25012__$1);

return statearr_25160;
})();
if(cljs.core.truth_(inst_25013)){
var statearr_25161_25241 = state_25144__$1;
(statearr_25161_25241[(1)] = (5));

} else {
var statearr_25162_25242 = state_25144__$1;
(statearr_25162_25242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (15))){
var inst_25022 = (state_25144[(13)]);
var inst_25024 = (state_25144[(14)]);
var inst_25023 = (state_25144[(15)]);
var inst_25021 = (state_25144[(17)]);
var inst_25039 = (state_25144[(2)]);
var inst_25040 = (inst_25024 + (1));
var tmp25156 = inst_25022;
var tmp25157 = inst_25023;
var tmp25158 = inst_25021;
var inst_25021__$1 = tmp25158;
var inst_25022__$1 = tmp25156;
var inst_25023__$1 = tmp25157;
var inst_25024__$1 = inst_25040;
var state_25144__$1 = (function (){var statearr_25163 = state_25144;
(statearr_25163[(13)] = inst_25022__$1);

(statearr_25163[(14)] = inst_25024__$1);

(statearr_25163[(15)] = inst_25023__$1);

(statearr_25163[(17)] = inst_25021__$1);

(statearr_25163[(18)] = inst_25039);

return statearr_25163;
})();
var statearr_25164_25243 = state_25144__$1;
(statearr_25164_25243[(2)] = null);

(statearr_25164_25243[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (21))){
var inst_25066 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25168_25244 = state_25144__$1;
(statearr_25168_25244[(2)] = inst_25066);

(statearr_25168_25244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (31))){
var inst_25092 = (state_25144[(9)]);
var inst_25096 = done.call(null,null);
var inst_25097 = cljs.core.async.untap_STAR_.call(null,m,inst_25092);
var state_25144__$1 = (function (){var statearr_25169 = state_25144;
(statearr_25169[(19)] = inst_25096);

return statearr_25169;
})();
var statearr_25170_25245 = state_25144__$1;
(statearr_25170_25245[(2)] = inst_25097);

(statearr_25170_25245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (32))){
var inst_25087 = (state_25144[(10)]);
var inst_25084 = (state_25144[(20)]);
var inst_25085 = (state_25144[(11)]);
var inst_25086 = (state_25144[(21)]);
var inst_25099 = (state_25144[(2)]);
var inst_25100 = (inst_25087 + (1));
var tmp25165 = inst_25084;
var tmp25166 = inst_25085;
var tmp25167 = inst_25086;
var inst_25084__$1 = tmp25165;
var inst_25085__$1 = tmp25166;
var inst_25086__$1 = tmp25167;
var inst_25087__$1 = inst_25100;
var state_25144__$1 = (function (){var statearr_25171 = state_25144;
(statearr_25171[(10)] = inst_25087__$1);

(statearr_25171[(20)] = inst_25084__$1);

(statearr_25171[(11)] = inst_25085__$1);

(statearr_25171[(21)] = inst_25086__$1);

(statearr_25171[(22)] = inst_25099);

return statearr_25171;
})();
var statearr_25172_25246 = state_25144__$1;
(statearr_25172_25246[(2)] = null);

(statearr_25172_25246[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (40))){
var inst_25112 = (state_25144[(23)]);
var inst_25116 = done.call(null,null);
var inst_25117 = cljs.core.async.untap_STAR_.call(null,m,inst_25112);
var state_25144__$1 = (function (){var statearr_25173 = state_25144;
(statearr_25173[(24)] = inst_25116);

return statearr_25173;
})();
var statearr_25174_25247 = state_25144__$1;
(statearr_25174_25247[(2)] = inst_25117);

(statearr_25174_25247[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (33))){
var inst_25103 = (state_25144[(25)]);
var inst_25105 = cljs.core.chunked_seq_QMARK_.call(null,inst_25103);
var state_25144__$1 = state_25144;
if(inst_25105){
var statearr_25175_25248 = state_25144__$1;
(statearr_25175_25248[(1)] = (36));

} else {
var statearr_25176_25249 = state_25144__$1;
(statearr_25176_25249[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (13))){
var inst_25033 = (state_25144[(26)]);
var inst_25036 = cljs.core.async.close_BANG_.call(null,inst_25033);
var state_25144__$1 = state_25144;
var statearr_25177_25250 = state_25144__$1;
(statearr_25177_25250[(2)] = inst_25036);

(statearr_25177_25250[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (22))){
var inst_25056 = (state_25144[(8)]);
var inst_25059 = cljs.core.async.close_BANG_.call(null,inst_25056);
var state_25144__$1 = state_25144;
var statearr_25178_25251 = state_25144__$1;
(statearr_25178_25251[(2)] = inst_25059);

(statearr_25178_25251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (36))){
var inst_25103 = (state_25144[(25)]);
var inst_25107 = cljs.core.chunk_first.call(null,inst_25103);
var inst_25108 = cljs.core.chunk_rest.call(null,inst_25103);
var inst_25109 = cljs.core.count.call(null,inst_25107);
var inst_25084 = inst_25108;
var inst_25085 = inst_25107;
var inst_25086 = inst_25109;
var inst_25087 = (0);
var state_25144__$1 = (function (){var statearr_25179 = state_25144;
(statearr_25179[(10)] = inst_25087);

(statearr_25179[(20)] = inst_25084);

(statearr_25179[(11)] = inst_25085);

(statearr_25179[(21)] = inst_25086);

return statearr_25179;
})();
var statearr_25180_25252 = state_25144__$1;
(statearr_25180_25252[(2)] = null);

(statearr_25180_25252[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (41))){
var inst_25103 = (state_25144[(25)]);
var inst_25119 = (state_25144[(2)]);
var inst_25120 = cljs.core.next.call(null,inst_25103);
var inst_25084 = inst_25120;
var inst_25085 = null;
var inst_25086 = (0);
var inst_25087 = (0);
var state_25144__$1 = (function (){var statearr_25181 = state_25144;
(statearr_25181[(10)] = inst_25087);

(statearr_25181[(20)] = inst_25084);

(statearr_25181[(11)] = inst_25085);

(statearr_25181[(21)] = inst_25086);

(statearr_25181[(27)] = inst_25119);

return statearr_25181;
})();
var statearr_25182_25253 = state_25144__$1;
(statearr_25182_25253[(2)] = null);

(statearr_25182_25253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (43))){
var state_25144__$1 = state_25144;
var statearr_25183_25254 = state_25144__$1;
(statearr_25183_25254[(2)] = null);

(statearr_25183_25254[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (29))){
var inst_25128 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25184_25255 = state_25144__$1;
(statearr_25184_25255[(2)] = inst_25128);

(statearr_25184_25255[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (44))){
var inst_25137 = (state_25144[(2)]);
var state_25144__$1 = (function (){var statearr_25185 = state_25144;
(statearr_25185[(28)] = inst_25137);

return statearr_25185;
})();
var statearr_25186_25256 = state_25144__$1;
(statearr_25186_25256[(2)] = null);

(statearr_25186_25256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (6))){
var inst_25076 = (state_25144[(29)]);
var inst_25075 = cljs.core.deref.call(null,cs);
var inst_25076__$1 = cljs.core.keys.call(null,inst_25075);
var inst_25077 = cljs.core.count.call(null,inst_25076__$1);
var inst_25078 = cljs.core.reset_BANG_.call(null,dctr,inst_25077);
var inst_25083 = cljs.core.seq.call(null,inst_25076__$1);
var inst_25084 = inst_25083;
var inst_25085 = null;
var inst_25086 = (0);
var inst_25087 = (0);
var state_25144__$1 = (function (){var statearr_25187 = state_25144;
(statearr_25187[(10)] = inst_25087);

(statearr_25187[(20)] = inst_25084);

(statearr_25187[(29)] = inst_25076__$1);

(statearr_25187[(11)] = inst_25085);

(statearr_25187[(21)] = inst_25086);

(statearr_25187[(30)] = inst_25078);

return statearr_25187;
})();
var statearr_25188_25257 = state_25144__$1;
(statearr_25188_25257[(2)] = null);

(statearr_25188_25257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (28))){
var inst_25084 = (state_25144[(20)]);
var inst_25103 = (state_25144[(25)]);
var inst_25103__$1 = cljs.core.seq.call(null,inst_25084);
var state_25144__$1 = (function (){var statearr_25189 = state_25144;
(statearr_25189[(25)] = inst_25103__$1);

return statearr_25189;
})();
if(inst_25103__$1){
var statearr_25190_25258 = state_25144__$1;
(statearr_25190_25258[(1)] = (33));

} else {
var statearr_25191_25259 = state_25144__$1;
(statearr_25191_25259[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (25))){
var inst_25087 = (state_25144[(10)]);
var inst_25086 = (state_25144[(21)]);
var inst_25089 = (inst_25087 < inst_25086);
var inst_25090 = inst_25089;
var state_25144__$1 = state_25144;
if(cljs.core.truth_(inst_25090)){
var statearr_25192_25260 = state_25144__$1;
(statearr_25192_25260[(1)] = (27));

} else {
var statearr_25193_25261 = state_25144__$1;
(statearr_25193_25261[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (34))){
var state_25144__$1 = state_25144;
var statearr_25194_25262 = state_25144__$1;
(statearr_25194_25262[(2)] = null);

(statearr_25194_25262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (17))){
var state_25144__$1 = state_25144;
var statearr_25195_25263 = state_25144__$1;
(statearr_25195_25263[(2)] = null);

(statearr_25195_25263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (3))){
var inst_25142 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25144__$1,inst_25142);
} else {
if((state_val_25145 === (12))){
var inst_25071 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25196_25264 = state_25144__$1;
(statearr_25196_25264[(2)] = inst_25071);

(statearr_25196_25264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (2))){
var state_25144__$1 = state_25144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25144__$1,(4),ch);
} else {
if((state_val_25145 === (23))){
var state_25144__$1 = state_25144;
var statearr_25197_25265 = state_25144__$1;
(statearr_25197_25265[(2)] = null);

(statearr_25197_25265[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (35))){
var inst_25126 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25198_25266 = state_25144__$1;
(statearr_25198_25266[(2)] = inst_25126);

(statearr_25198_25266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (19))){
var inst_25043 = (state_25144[(7)]);
var inst_25047 = cljs.core.chunk_first.call(null,inst_25043);
var inst_25048 = cljs.core.chunk_rest.call(null,inst_25043);
var inst_25049 = cljs.core.count.call(null,inst_25047);
var inst_25021 = inst_25048;
var inst_25022 = inst_25047;
var inst_25023 = inst_25049;
var inst_25024 = (0);
var state_25144__$1 = (function (){var statearr_25199 = state_25144;
(statearr_25199[(13)] = inst_25022);

(statearr_25199[(14)] = inst_25024);

(statearr_25199[(15)] = inst_25023);

(statearr_25199[(17)] = inst_25021);

return statearr_25199;
})();
var statearr_25200_25267 = state_25144__$1;
(statearr_25200_25267[(2)] = null);

(statearr_25200_25267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (11))){
var inst_25043 = (state_25144[(7)]);
var inst_25021 = (state_25144[(17)]);
var inst_25043__$1 = cljs.core.seq.call(null,inst_25021);
var state_25144__$1 = (function (){var statearr_25201 = state_25144;
(statearr_25201[(7)] = inst_25043__$1);

return statearr_25201;
})();
if(inst_25043__$1){
var statearr_25202_25268 = state_25144__$1;
(statearr_25202_25268[(1)] = (16));

} else {
var statearr_25203_25269 = state_25144__$1;
(statearr_25203_25269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (9))){
var inst_25073 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25204_25270 = state_25144__$1;
(statearr_25204_25270[(2)] = inst_25073);

(statearr_25204_25270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (5))){
var inst_25019 = cljs.core.deref.call(null,cs);
var inst_25020 = cljs.core.seq.call(null,inst_25019);
var inst_25021 = inst_25020;
var inst_25022 = null;
var inst_25023 = (0);
var inst_25024 = (0);
var state_25144__$1 = (function (){var statearr_25205 = state_25144;
(statearr_25205[(13)] = inst_25022);

(statearr_25205[(14)] = inst_25024);

(statearr_25205[(15)] = inst_25023);

(statearr_25205[(17)] = inst_25021);

return statearr_25205;
})();
var statearr_25206_25271 = state_25144__$1;
(statearr_25206_25271[(2)] = null);

(statearr_25206_25271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (14))){
var state_25144__$1 = state_25144;
var statearr_25207_25272 = state_25144__$1;
(statearr_25207_25272[(2)] = null);

(statearr_25207_25272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (45))){
var inst_25134 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25208_25273 = state_25144__$1;
(statearr_25208_25273[(2)] = inst_25134);

(statearr_25208_25273[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (26))){
var inst_25076 = (state_25144[(29)]);
var inst_25130 = (state_25144[(2)]);
var inst_25131 = cljs.core.seq.call(null,inst_25076);
var state_25144__$1 = (function (){var statearr_25209 = state_25144;
(statearr_25209[(31)] = inst_25130);

return statearr_25209;
})();
if(inst_25131){
var statearr_25210_25274 = state_25144__$1;
(statearr_25210_25274[(1)] = (42));

} else {
var statearr_25211_25275 = state_25144__$1;
(statearr_25211_25275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (16))){
var inst_25043 = (state_25144[(7)]);
var inst_25045 = cljs.core.chunked_seq_QMARK_.call(null,inst_25043);
var state_25144__$1 = state_25144;
if(inst_25045){
var statearr_25212_25276 = state_25144__$1;
(statearr_25212_25276[(1)] = (19));

} else {
var statearr_25213_25277 = state_25144__$1;
(statearr_25213_25277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (38))){
var inst_25123 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25214_25278 = state_25144__$1;
(statearr_25214_25278[(2)] = inst_25123);

(statearr_25214_25278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (30))){
var state_25144__$1 = state_25144;
var statearr_25215_25279 = state_25144__$1;
(statearr_25215_25279[(2)] = null);

(statearr_25215_25279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (10))){
var inst_25022 = (state_25144[(13)]);
var inst_25024 = (state_25144[(14)]);
var inst_25032 = cljs.core._nth.call(null,inst_25022,inst_25024);
var inst_25033 = cljs.core.nth.call(null,inst_25032,(0),null);
var inst_25034 = cljs.core.nth.call(null,inst_25032,(1),null);
var state_25144__$1 = (function (){var statearr_25216 = state_25144;
(statearr_25216[(26)] = inst_25033);

return statearr_25216;
})();
if(cljs.core.truth_(inst_25034)){
var statearr_25217_25280 = state_25144__$1;
(statearr_25217_25280[(1)] = (13));

} else {
var statearr_25218_25281 = state_25144__$1;
(statearr_25218_25281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (18))){
var inst_25069 = (state_25144[(2)]);
var state_25144__$1 = state_25144;
var statearr_25219_25282 = state_25144__$1;
(statearr_25219_25282[(2)] = inst_25069);

(statearr_25219_25282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (42))){
var state_25144__$1 = state_25144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25144__$1,(45),dchan);
} else {
if((state_val_25145 === (37))){
var inst_25112 = (state_25144[(23)]);
var inst_25103 = (state_25144[(25)]);
var inst_25012 = (state_25144[(12)]);
var inst_25112__$1 = cljs.core.first.call(null,inst_25103);
var inst_25113 = cljs.core.async.put_BANG_.call(null,inst_25112__$1,inst_25012,done);
var state_25144__$1 = (function (){var statearr_25220 = state_25144;
(statearr_25220[(23)] = inst_25112__$1);

return statearr_25220;
})();
if(cljs.core.truth_(inst_25113)){
var statearr_25221_25283 = state_25144__$1;
(statearr_25221_25283[(1)] = (39));

} else {
var statearr_25222_25284 = state_25144__$1;
(statearr_25222_25284[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25145 === (8))){
var inst_25024 = (state_25144[(14)]);
var inst_25023 = (state_25144[(15)]);
var inst_25026 = (inst_25024 < inst_25023);
var inst_25027 = inst_25026;
var state_25144__$1 = state_25144;
if(cljs.core.truth_(inst_25027)){
var statearr_25223_25285 = state_25144__$1;
(statearr_25223_25285[(1)] = (10));

} else {
var statearr_25224_25286 = state_25144__$1;
(statearr_25224_25286[(1)] = (11));

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
});})(c__23895__auto___25232,cs,m,dchan,dctr,done))
;
return ((function (switch__23872__auto__,c__23895__auto___25232,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23873__auto__ = null;
var cljs$core$async$mult_$_state_machine__23873__auto____0 = (function (){
var statearr_25228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25228[(0)] = cljs$core$async$mult_$_state_machine__23873__auto__);

(statearr_25228[(1)] = (1));

return statearr_25228;
});
var cljs$core$async$mult_$_state_machine__23873__auto____1 = (function (state_25144){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_25144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e25229){if((e25229 instanceof Object)){
var ex__23876__auto__ = e25229;
var statearr_25230_25287 = state_25144;
(statearr_25230_25287[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25288 = state_25144;
state_25144 = G__25288;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23873__auto__ = function(state_25144){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23873__auto____1.call(this,state_25144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23873__auto____0;
cljs$core$async$mult_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23873__auto____1;
return cljs$core$async$mult_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___25232,cs,m,dchan,dctr,done))
})();
var state__23897__auto__ = (function (){var statearr_25231 = f__23896__auto__.call(null);
(statearr_25231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___25232);

return statearr_25231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___25232,cs,m,dchan,dctr,done))
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
var args25289 = [];
var len__22628__auto___25292 = arguments.length;
var i__22629__auto___25293 = (0);
while(true){
if((i__22629__auto___25293 < len__22628__auto___25292)){
args25289.push((arguments[i__22629__auto___25293]));

var G__25294 = (i__22629__auto___25293 + (1));
i__22629__auto___25293 = G__25294;
continue;
} else {
}
break;
}

var G__25291 = args25289.length;
switch (G__25291) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25289.length)].join('')));

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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,ch);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m);
} else {
var m__22159__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,state_map);
} else {
var m__22159__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,state_map);
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
var x__22158__auto__ = (((m == null))?null:m);
var m__22159__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,m,mode);
} else {
var m__22159__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22635__auto__ = [];
var len__22628__auto___25306 = arguments.length;
var i__22629__auto___25307 = (0);
while(true){
if((i__22629__auto___25307 < len__22628__auto___25306)){
args__22635__auto__.push((arguments[i__22629__auto___25307]));

var G__25308 = (i__22629__auto___25307 + (1));
i__22629__auto___25307 = G__25308;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((3) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22636__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__25300){
var map__25301 = p__25300;
var map__25301__$1 = ((((!((map__25301 == null)))?((((map__25301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25301):map__25301);
var opts = map__25301__$1;
var statearr_25303_25309 = state;
(statearr_25303_25309[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6503__auto__ = cljs.core.async.do_alts.call(null,((function (map__25301,map__25301__$1,opts){
return (function (val){
var statearr_25304_25310 = state;
(statearr_25304_25310[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25301,map__25301__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6503__auto__)){
var cb = temp__6503__auto__;
var statearr_25305_25311 = state;
(statearr_25305_25311[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq25296){
var G__25297 = cljs.core.first.call(null,seq25296);
var seq25296__$1 = cljs.core.next.call(null,seq25296);
var G__25298 = cljs.core.first.call(null,seq25296__$1);
var seq25296__$2 = cljs.core.next.call(null,seq25296__$1);
var G__25299 = cljs.core.first.call(null,seq25296__$2);
var seq25296__$3 = cljs.core.next.call(null,seq25296__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25297,G__25298,G__25299,seq25296__$3);
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
if(typeof cljs.core.async.t_cljs$core$async25477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25477 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25478){
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
this.meta25478 = meta25478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25479,meta25478__$1){
var self__ = this;
var _25479__$1 = this;
return (new cljs.core.async.t_cljs$core$async25477(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25478__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25479){
var self__ = this;
var _25479__$1 = this;
return self__.meta25478;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async25477.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta25478","meta25478",-1089630070,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async25477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25477";

cljs.core.async.t_cljs$core$async25477.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async25477");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async25477 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async25477(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25478){
return (new cljs.core.async.t_cljs$core$async25477(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25478));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async25477(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23895__auto___25642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___25642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___25642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25579){
var state_val_25580 = (state_25579[(1)]);
if((state_val_25580 === (7))){
var inst_25495 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25581_25643 = state_25579__$1;
(statearr_25581_25643[(2)] = inst_25495);

(statearr_25581_25643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (20))){
var inst_25507 = (state_25579[(7)]);
var state_25579__$1 = state_25579;
var statearr_25582_25644 = state_25579__$1;
(statearr_25582_25644[(2)] = inst_25507);

(statearr_25582_25644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (27))){
var state_25579__$1 = state_25579;
var statearr_25583_25645 = state_25579__$1;
(statearr_25583_25645[(2)] = null);

(statearr_25583_25645[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (1))){
var inst_25483 = (state_25579[(8)]);
var inst_25483__$1 = calc_state.call(null);
var inst_25485 = (inst_25483__$1 == null);
var inst_25486 = cljs.core.not.call(null,inst_25485);
var state_25579__$1 = (function (){var statearr_25584 = state_25579;
(statearr_25584[(8)] = inst_25483__$1);

return statearr_25584;
})();
if(inst_25486){
var statearr_25585_25646 = state_25579__$1;
(statearr_25585_25646[(1)] = (2));

} else {
var statearr_25586_25647 = state_25579__$1;
(statearr_25586_25647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (24))){
var inst_25530 = (state_25579[(9)]);
var inst_25539 = (state_25579[(10)]);
var inst_25553 = (state_25579[(11)]);
var inst_25553__$1 = inst_25530.call(null,inst_25539);
var state_25579__$1 = (function (){var statearr_25587 = state_25579;
(statearr_25587[(11)] = inst_25553__$1);

return statearr_25587;
})();
if(cljs.core.truth_(inst_25553__$1)){
var statearr_25588_25648 = state_25579__$1;
(statearr_25588_25648[(1)] = (29));

} else {
var statearr_25589_25649 = state_25579__$1;
(statearr_25589_25649[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (4))){
var inst_25498 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25498)){
var statearr_25590_25650 = state_25579__$1;
(statearr_25590_25650[(1)] = (8));

} else {
var statearr_25591_25651 = state_25579__$1;
(statearr_25591_25651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (15))){
var inst_25524 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25524)){
var statearr_25592_25652 = state_25579__$1;
(statearr_25592_25652[(1)] = (19));

} else {
var statearr_25593_25653 = state_25579__$1;
(statearr_25593_25653[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (21))){
var inst_25529 = (state_25579[(12)]);
var inst_25529__$1 = (state_25579[(2)]);
var inst_25530 = cljs.core.get.call(null,inst_25529__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25531 = cljs.core.get.call(null,inst_25529__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25532 = cljs.core.get.call(null,inst_25529__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25579__$1 = (function (){var statearr_25594 = state_25579;
(statearr_25594[(9)] = inst_25530);

(statearr_25594[(13)] = inst_25531);

(statearr_25594[(12)] = inst_25529__$1);

return statearr_25594;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25579__$1,(22),inst_25532);
} else {
if((state_val_25580 === (31))){
var inst_25561 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25561)){
var statearr_25595_25654 = state_25579__$1;
(statearr_25595_25654[(1)] = (32));

} else {
var statearr_25596_25655 = state_25579__$1;
(statearr_25596_25655[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (32))){
var inst_25538 = (state_25579[(14)]);
var state_25579__$1 = state_25579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25579__$1,(35),out,inst_25538);
} else {
if((state_val_25580 === (33))){
var inst_25529 = (state_25579[(12)]);
var inst_25507 = inst_25529;
var state_25579__$1 = (function (){var statearr_25597 = state_25579;
(statearr_25597[(7)] = inst_25507);

return statearr_25597;
})();
var statearr_25598_25656 = state_25579__$1;
(statearr_25598_25656[(2)] = null);

(statearr_25598_25656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (13))){
var inst_25507 = (state_25579[(7)]);
var inst_25514 = inst_25507.cljs$lang$protocol_mask$partition0$;
var inst_25515 = (inst_25514 & (64));
var inst_25516 = inst_25507.cljs$core$ISeq$;
var inst_25517 = (inst_25515) || (inst_25516);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25517)){
var statearr_25599_25657 = state_25579__$1;
(statearr_25599_25657[(1)] = (16));

} else {
var statearr_25600_25658 = state_25579__$1;
(statearr_25600_25658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (22))){
var inst_25539 = (state_25579[(10)]);
var inst_25538 = (state_25579[(14)]);
var inst_25537 = (state_25579[(2)]);
var inst_25538__$1 = cljs.core.nth.call(null,inst_25537,(0),null);
var inst_25539__$1 = cljs.core.nth.call(null,inst_25537,(1),null);
var inst_25540 = (inst_25538__$1 == null);
var inst_25541 = cljs.core._EQ_.call(null,inst_25539__$1,change);
var inst_25542 = (inst_25540) || (inst_25541);
var state_25579__$1 = (function (){var statearr_25601 = state_25579;
(statearr_25601[(10)] = inst_25539__$1);

(statearr_25601[(14)] = inst_25538__$1);

return statearr_25601;
})();
if(cljs.core.truth_(inst_25542)){
var statearr_25602_25659 = state_25579__$1;
(statearr_25602_25659[(1)] = (23));

} else {
var statearr_25603_25660 = state_25579__$1;
(statearr_25603_25660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (36))){
var inst_25529 = (state_25579[(12)]);
var inst_25507 = inst_25529;
var state_25579__$1 = (function (){var statearr_25604 = state_25579;
(statearr_25604[(7)] = inst_25507);

return statearr_25604;
})();
var statearr_25605_25661 = state_25579__$1;
(statearr_25605_25661[(2)] = null);

(statearr_25605_25661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (29))){
var inst_25553 = (state_25579[(11)]);
var state_25579__$1 = state_25579;
var statearr_25606_25662 = state_25579__$1;
(statearr_25606_25662[(2)] = inst_25553);

(statearr_25606_25662[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (6))){
var state_25579__$1 = state_25579;
var statearr_25607_25663 = state_25579__$1;
(statearr_25607_25663[(2)] = false);

(statearr_25607_25663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (28))){
var inst_25549 = (state_25579[(2)]);
var inst_25550 = calc_state.call(null);
var inst_25507 = inst_25550;
var state_25579__$1 = (function (){var statearr_25608 = state_25579;
(statearr_25608[(7)] = inst_25507);

(statearr_25608[(15)] = inst_25549);

return statearr_25608;
})();
var statearr_25609_25664 = state_25579__$1;
(statearr_25609_25664[(2)] = null);

(statearr_25609_25664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (25))){
var inst_25575 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25610_25665 = state_25579__$1;
(statearr_25610_25665[(2)] = inst_25575);

(statearr_25610_25665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (34))){
var inst_25573 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25611_25666 = state_25579__$1;
(statearr_25611_25666[(2)] = inst_25573);

(statearr_25611_25666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (17))){
var state_25579__$1 = state_25579;
var statearr_25612_25667 = state_25579__$1;
(statearr_25612_25667[(2)] = false);

(statearr_25612_25667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (3))){
var state_25579__$1 = state_25579;
var statearr_25613_25668 = state_25579__$1;
(statearr_25613_25668[(2)] = false);

(statearr_25613_25668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (12))){
var inst_25577 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25579__$1,inst_25577);
} else {
if((state_val_25580 === (2))){
var inst_25483 = (state_25579[(8)]);
var inst_25488 = inst_25483.cljs$lang$protocol_mask$partition0$;
var inst_25489 = (inst_25488 & (64));
var inst_25490 = inst_25483.cljs$core$ISeq$;
var inst_25491 = (inst_25489) || (inst_25490);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25491)){
var statearr_25614_25669 = state_25579__$1;
(statearr_25614_25669[(1)] = (5));

} else {
var statearr_25615_25670 = state_25579__$1;
(statearr_25615_25670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (23))){
var inst_25538 = (state_25579[(14)]);
var inst_25544 = (inst_25538 == null);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25544)){
var statearr_25616_25671 = state_25579__$1;
(statearr_25616_25671[(1)] = (26));

} else {
var statearr_25617_25672 = state_25579__$1;
(statearr_25617_25672[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (35))){
var inst_25564 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
if(cljs.core.truth_(inst_25564)){
var statearr_25618_25673 = state_25579__$1;
(statearr_25618_25673[(1)] = (36));

} else {
var statearr_25619_25674 = state_25579__$1;
(statearr_25619_25674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (19))){
var inst_25507 = (state_25579[(7)]);
var inst_25526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25507);
var state_25579__$1 = state_25579;
var statearr_25620_25675 = state_25579__$1;
(statearr_25620_25675[(2)] = inst_25526);

(statearr_25620_25675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (11))){
var inst_25507 = (state_25579[(7)]);
var inst_25511 = (inst_25507 == null);
var inst_25512 = cljs.core.not.call(null,inst_25511);
var state_25579__$1 = state_25579;
if(inst_25512){
var statearr_25621_25676 = state_25579__$1;
(statearr_25621_25676[(1)] = (13));

} else {
var statearr_25622_25677 = state_25579__$1;
(statearr_25622_25677[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (9))){
var inst_25483 = (state_25579[(8)]);
var state_25579__$1 = state_25579;
var statearr_25623_25678 = state_25579__$1;
(statearr_25623_25678[(2)] = inst_25483);

(statearr_25623_25678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (5))){
var state_25579__$1 = state_25579;
var statearr_25624_25679 = state_25579__$1;
(statearr_25624_25679[(2)] = true);

(statearr_25624_25679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (14))){
var state_25579__$1 = state_25579;
var statearr_25625_25680 = state_25579__$1;
(statearr_25625_25680[(2)] = false);

(statearr_25625_25680[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (26))){
var inst_25539 = (state_25579[(10)]);
var inst_25546 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25539);
var state_25579__$1 = state_25579;
var statearr_25626_25681 = state_25579__$1;
(statearr_25626_25681[(2)] = inst_25546);

(statearr_25626_25681[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (16))){
var state_25579__$1 = state_25579;
var statearr_25627_25682 = state_25579__$1;
(statearr_25627_25682[(2)] = true);

(statearr_25627_25682[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (38))){
var inst_25569 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25628_25683 = state_25579__$1;
(statearr_25628_25683[(2)] = inst_25569);

(statearr_25628_25683[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (30))){
var inst_25530 = (state_25579[(9)]);
var inst_25531 = (state_25579[(13)]);
var inst_25539 = (state_25579[(10)]);
var inst_25556 = cljs.core.empty_QMARK_.call(null,inst_25530);
var inst_25557 = inst_25531.call(null,inst_25539);
var inst_25558 = cljs.core.not.call(null,inst_25557);
var inst_25559 = (inst_25556) && (inst_25558);
var state_25579__$1 = state_25579;
var statearr_25629_25684 = state_25579__$1;
(statearr_25629_25684[(2)] = inst_25559);

(statearr_25629_25684[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (10))){
var inst_25483 = (state_25579[(8)]);
var inst_25503 = (state_25579[(2)]);
var inst_25504 = cljs.core.get.call(null,inst_25503,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25505 = cljs.core.get.call(null,inst_25503,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25506 = cljs.core.get.call(null,inst_25503,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25507 = inst_25483;
var state_25579__$1 = (function (){var statearr_25630 = state_25579;
(statearr_25630[(7)] = inst_25507);

(statearr_25630[(16)] = inst_25505);

(statearr_25630[(17)] = inst_25506);

(statearr_25630[(18)] = inst_25504);

return statearr_25630;
})();
var statearr_25631_25685 = state_25579__$1;
(statearr_25631_25685[(2)] = null);

(statearr_25631_25685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (18))){
var inst_25521 = (state_25579[(2)]);
var state_25579__$1 = state_25579;
var statearr_25632_25686 = state_25579__$1;
(statearr_25632_25686[(2)] = inst_25521);

(statearr_25632_25686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (37))){
var state_25579__$1 = state_25579;
var statearr_25633_25687 = state_25579__$1;
(statearr_25633_25687[(2)] = null);

(statearr_25633_25687[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25580 === (8))){
var inst_25483 = (state_25579[(8)]);
var inst_25500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25483);
var state_25579__$1 = state_25579;
var statearr_25634_25688 = state_25579__$1;
(statearr_25634_25688[(2)] = inst_25500);

(statearr_25634_25688[(1)] = (10));


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
});})(c__23895__auto___25642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23872__auto__,c__23895__auto___25642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23873__auto__ = null;
var cljs$core$async$mix_$_state_machine__23873__auto____0 = (function (){
var statearr_25638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25638[(0)] = cljs$core$async$mix_$_state_machine__23873__auto__);

(statearr_25638[(1)] = (1));

return statearr_25638;
});
var cljs$core$async$mix_$_state_machine__23873__auto____1 = (function (state_25579){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_25579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e25639){if((e25639 instanceof Object)){
var ex__23876__auto__ = e25639;
var statearr_25640_25689 = state_25579;
(statearr_25640_25689[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25690 = state_25579;
state_25579 = G__25690;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23873__auto__ = function(state_25579){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23873__auto____1.call(this,state_25579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23873__auto____0;
cljs$core$async$mix_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23873__auto____1;
return cljs$core$async$mix_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___25642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23897__auto__ = (function (){var statearr_25641 = f__23896__auto__.call(null);
(statearr_25641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___25642);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___25642,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22159__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p,v,ch);
} else {
var m__22159__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25691 = [];
var len__22628__auto___25694 = arguments.length;
var i__22629__auto___25695 = (0);
while(true){
if((i__22629__auto___25695 < len__22628__auto___25694)){
args25691.push((arguments[i__22629__auto___25695]));

var G__25696 = (i__22629__auto___25695 + (1));
i__22629__auto___25695 = G__25696;
continue;
} else {
}
break;
}

var G__25693 = args25691.length;
switch (G__25693) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25691.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p);
} else {
var m__22159__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p);
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
var x__22158__auto__ = (((p == null))?null:p);
var m__22159__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,p,v);
} else {
var m__22159__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,p,v);
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
var args25699 = [];
var len__22628__auto___25825 = arguments.length;
var i__22629__auto___25826 = (0);
while(true){
if((i__22629__auto___25826 < len__22628__auto___25825)){
args25699.push((arguments[i__22629__auto___25826]));

var G__25827 = (i__22629__auto___25826 + (1));
i__22629__auto___25826 = G__25827;
continue;
} else {
}
break;
}

var G__25701 = args25699.length;
switch (G__25701) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25699.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21445__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21445__auto__,mults){
return (function (p1__25698_SHARP_){
if(cljs.core.truth_(p1__25698_SHARP_.call(null,topic))){
return p1__25698_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25698_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21445__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25702 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25702 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25703){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25703 = meta25703;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25704,meta25703__$1){
var self__ = this;
var _25704__$1 = this;
return (new cljs.core.async.t_cljs$core$async25702(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25703__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25704){
var self__ = this;
var _25704__$1 = this;
return self__.meta25703;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6503__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6503__auto__)){
var m = temp__6503__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25703","meta25703",2105999256,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25702.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25702.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25702";

cljs.core.async.t_cljs$core$async25702.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async25702");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25702 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25703){
return (new cljs.core.async.t_cljs$core$async25702(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25703));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25702(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23895__auto___25829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___25829,mults,ensure_mult,p){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___25829,mults,ensure_mult,p){
return (function (state_25777){
var state_val_25778 = (state_25777[(1)]);
if((state_val_25778 === (7))){
var inst_25773 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25779_25830 = state_25777__$1;
(statearr_25779_25830[(2)] = inst_25773);

(statearr_25779_25830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (20))){
var state_25777__$1 = state_25777;
var statearr_25780_25831 = state_25777__$1;
(statearr_25780_25831[(2)] = null);

(statearr_25780_25831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (1))){
var state_25777__$1 = state_25777;
var statearr_25781_25832 = state_25777__$1;
(statearr_25781_25832[(2)] = null);

(statearr_25781_25832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (24))){
var inst_25756 = (state_25777[(7)]);
var inst_25765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25756);
var state_25777__$1 = state_25777;
var statearr_25782_25833 = state_25777__$1;
(statearr_25782_25833[(2)] = inst_25765);

(statearr_25782_25833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (4))){
var inst_25708 = (state_25777[(8)]);
var inst_25708__$1 = (state_25777[(2)]);
var inst_25709 = (inst_25708__$1 == null);
var state_25777__$1 = (function (){var statearr_25783 = state_25777;
(statearr_25783[(8)] = inst_25708__$1);

return statearr_25783;
})();
if(cljs.core.truth_(inst_25709)){
var statearr_25784_25834 = state_25777__$1;
(statearr_25784_25834[(1)] = (5));

} else {
var statearr_25785_25835 = state_25777__$1;
(statearr_25785_25835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (15))){
var inst_25750 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25786_25836 = state_25777__$1;
(statearr_25786_25836[(2)] = inst_25750);

(statearr_25786_25836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (21))){
var inst_25770 = (state_25777[(2)]);
var state_25777__$1 = (function (){var statearr_25787 = state_25777;
(statearr_25787[(9)] = inst_25770);

return statearr_25787;
})();
var statearr_25788_25837 = state_25777__$1;
(statearr_25788_25837[(2)] = null);

(statearr_25788_25837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (13))){
var inst_25732 = (state_25777[(10)]);
var inst_25734 = cljs.core.chunked_seq_QMARK_.call(null,inst_25732);
var state_25777__$1 = state_25777;
if(inst_25734){
var statearr_25789_25838 = state_25777__$1;
(statearr_25789_25838[(1)] = (16));

} else {
var statearr_25790_25839 = state_25777__$1;
(statearr_25790_25839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (22))){
var inst_25762 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
if(cljs.core.truth_(inst_25762)){
var statearr_25791_25840 = state_25777__$1;
(statearr_25791_25840[(1)] = (23));

} else {
var statearr_25792_25841 = state_25777__$1;
(statearr_25792_25841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (6))){
var inst_25756 = (state_25777[(7)]);
var inst_25758 = (state_25777[(11)]);
var inst_25708 = (state_25777[(8)]);
var inst_25756__$1 = topic_fn.call(null,inst_25708);
var inst_25757 = cljs.core.deref.call(null,mults);
var inst_25758__$1 = cljs.core.get.call(null,inst_25757,inst_25756__$1);
var state_25777__$1 = (function (){var statearr_25793 = state_25777;
(statearr_25793[(7)] = inst_25756__$1);

(statearr_25793[(11)] = inst_25758__$1);

return statearr_25793;
})();
if(cljs.core.truth_(inst_25758__$1)){
var statearr_25794_25842 = state_25777__$1;
(statearr_25794_25842[(1)] = (19));

} else {
var statearr_25795_25843 = state_25777__$1;
(statearr_25795_25843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (25))){
var inst_25767 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25796_25844 = state_25777__$1;
(statearr_25796_25844[(2)] = inst_25767);

(statearr_25796_25844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (17))){
var inst_25732 = (state_25777[(10)]);
var inst_25741 = cljs.core.first.call(null,inst_25732);
var inst_25742 = cljs.core.async.muxch_STAR_.call(null,inst_25741);
var inst_25743 = cljs.core.async.close_BANG_.call(null,inst_25742);
var inst_25744 = cljs.core.next.call(null,inst_25732);
var inst_25718 = inst_25744;
var inst_25719 = null;
var inst_25720 = (0);
var inst_25721 = (0);
var state_25777__$1 = (function (){var statearr_25797 = state_25777;
(statearr_25797[(12)] = inst_25743);

(statearr_25797[(13)] = inst_25720);

(statearr_25797[(14)] = inst_25718);

(statearr_25797[(15)] = inst_25719);

(statearr_25797[(16)] = inst_25721);

return statearr_25797;
})();
var statearr_25798_25845 = state_25777__$1;
(statearr_25798_25845[(2)] = null);

(statearr_25798_25845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (3))){
var inst_25775 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25777__$1,inst_25775);
} else {
if((state_val_25778 === (12))){
var inst_25752 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25799_25846 = state_25777__$1;
(statearr_25799_25846[(2)] = inst_25752);

(statearr_25799_25846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (2))){
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25777__$1,(4),ch);
} else {
if((state_val_25778 === (23))){
var state_25777__$1 = state_25777;
var statearr_25800_25847 = state_25777__$1;
(statearr_25800_25847[(2)] = null);

(statearr_25800_25847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (19))){
var inst_25758 = (state_25777[(11)]);
var inst_25708 = (state_25777[(8)]);
var inst_25760 = cljs.core.async.muxch_STAR_.call(null,inst_25758);
var state_25777__$1 = state_25777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25777__$1,(22),inst_25760,inst_25708);
} else {
if((state_val_25778 === (11))){
var inst_25718 = (state_25777[(14)]);
var inst_25732 = (state_25777[(10)]);
var inst_25732__$1 = cljs.core.seq.call(null,inst_25718);
var state_25777__$1 = (function (){var statearr_25801 = state_25777;
(statearr_25801[(10)] = inst_25732__$1);

return statearr_25801;
})();
if(inst_25732__$1){
var statearr_25802_25848 = state_25777__$1;
(statearr_25802_25848[(1)] = (13));

} else {
var statearr_25803_25849 = state_25777__$1;
(statearr_25803_25849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (9))){
var inst_25754 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25804_25850 = state_25777__$1;
(statearr_25804_25850[(2)] = inst_25754);

(statearr_25804_25850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (5))){
var inst_25715 = cljs.core.deref.call(null,mults);
var inst_25716 = cljs.core.vals.call(null,inst_25715);
var inst_25717 = cljs.core.seq.call(null,inst_25716);
var inst_25718 = inst_25717;
var inst_25719 = null;
var inst_25720 = (0);
var inst_25721 = (0);
var state_25777__$1 = (function (){var statearr_25805 = state_25777;
(statearr_25805[(13)] = inst_25720);

(statearr_25805[(14)] = inst_25718);

(statearr_25805[(15)] = inst_25719);

(statearr_25805[(16)] = inst_25721);

return statearr_25805;
})();
var statearr_25806_25851 = state_25777__$1;
(statearr_25806_25851[(2)] = null);

(statearr_25806_25851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (14))){
var state_25777__$1 = state_25777;
var statearr_25810_25852 = state_25777__$1;
(statearr_25810_25852[(2)] = null);

(statearr_25810_25852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (16))){
var inst_25732 = (state_25777[(10)]);
var inst_25736 = cljs.core.chunk_first.call(null,inst_25732);
var inst_25737 = cljs.core.chunk_rest.call(null,inst_25732);
var inst_25738 = cljs.core.count.call(null,inst_25736);
var inst_25718 = inst_25737;
var inst_25719 = inst_25736;
var inst_25720 = inst_25738;
var inst_25721 = (0);
var state_25777__$1 = (function (){var statearr_25811 = state_25777;
(statearr_25811[(13)] = inst_25720);

(statearr_25811[(14)] = inst_25718);

(statearr_25811[(15)] = inst_25719);

(statearr_25811[(16)] = inst_25721);

return statearr_25811;
})();
var statearr_25812_25853 = state_25777__$1;
(statearr_25812_25853[(2)] = null);

(statearr_25812_25853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (10))){
var inst_25720 = (state_25777[(13)]);
var inst_25718 = (state_25777[(14)]);
var inst_25719 = (state_25777[(15)]);
var inst_25721 = (state_25777[(16)]);
var inst_25726 = cljs.core._nth.call(null,inst_25719,inst_25721);
var inst_25727 = cljs.core.async.muxch_STAR_.call(null,inst_25726);
var inst_25728 = cljs.core.async.close_BANG_.call(null,inst_25727);
var inst_25729 = (inst_25721 + (1));
var tmp25807 = inst_25720;
var tmp25808 = inst_25718;
var tmp25809 = inst_25719;
var inst_25718__$1 = tmp25808;
var inst_25719__$1 = tmp25809;
var inst_25720__$1 = tmp25807;
var inst_25721__$1 = inst_25729;
var state_25777__$1 = (function (){var statearr_25813 = state_25777;
(statearr_25813[(17)] = inst_25728);

(statearr_25813[(13)] = inst_25720__$1);

(statearr_25813[(14)] = inst_25718__$1);

(statearr_25813[(15)] = inst_25719__$1);

(statearr_25813[(16)] = inst_25721__$1);

return statearr_25813;
})();
var statearr_25814_25854 = state_25777__$1;
(statearr_25814_25854[(2)] = null);

(statearr_25814_25854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (18))){
var inst_25747 = (state_25777[(2)]);
var state_25777__$1 = state_25777;
var statearr_25815_25855 = state_25777__$1;
(statearr_25815_25855[(2)] = inst_25747);

(statearr_25815_25855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25778 === (8))){
var inst_25720 = (state_25777[(13)]);
var inst_25721 = (state_25777[(16)]);
var inst_25723 = (inst_25721 < inst_25720);
var inst_25724 = inst_25723;
var state_25777__$1 = state_25777;
if(cljs.core.truth_(inst_25724)){
var statearr_25816_25856 = state_25777__$1;
(statearr_25816_25856[(1)] = (10));

} else {
var statearr_25817_25857 = state_25777__$1;
(statearr_25817_25857[(1)] = (11));

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
});})(c__23895__auto___25829,mults,ensure_mult,p))
;
return ((function (switch__23872__auto__,c__23895__auto___25829,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_25821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25821[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_25821[(1)] = (1));

return statearr_25821;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_25777){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_25777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e25822){if((e25822 instanceof Object)){
var ex__23876__auto__ = e25822;
var statearr_25823_25858 = state_25777;
(statearr_25823_25858[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25859 = state_25777;
state_25777 = G__25859;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_25777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_25777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___25829,mults,ensure_mult,p))
})();
var state__23897__auto__ = (function (){var statearr_25824 = f__23896__auto__.call(null);
(statearr_25824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___25829);

return statearr_25824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___25829,mults,ensure_mult,p))
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
var args25860 = [];
var len__22628__auto___25863 = arguments.length;
var i__22629__auto___25864 = (0);
while(true){
if((i__22629__auto___25864 < len__22628__auto___25863)){
args25860.push((arguments[i__22629__auto___25864]));

var G__25865 = (i__22629__auto___25864 + (1));
i__22629__auto___25864 = G__25865;
continue;
} else {
}
break;
}

var G__25862 = args25860.length;
switch (G__25862) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25860.length)].join('')));

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
var args25867 = [];
var len__22628__auto___25870 = arguments.length;
var i__22629__auto___25871 = (0);
while(true){
if((i__22629__auto___25871 < len__22628__auto___25870)){
args25867.push((arguments[i__22629__auto___25871]));

var G__25872 = (i__22629__auto___25871 + (1));
i__22629__auto___25871 = G__25872;
continue;
} else {
}
break;
}

var G__25869 = args25867.length;
switch (G__25869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25867.length)].join('')));

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
var args25874 = [];
var len__22628__auto___25945 = arguments.length;
var i__22629__auto___25946 = (0);
while(true){
if((i__22629__auto___25946 < len__22628__auto___25945)){
args25874.push((arguments[i__22629__auto___25946]));

var G__25947 = (i__22629__auto___25946 + (1));
i__22629__auto___25946 = G__25947;
continue;
} else {
}
break;
}

var G__25876 = args25874.length;
switch (G__25876) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25874.length)].join('')));

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
var c__23895__auto___25949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___25949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___25949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25915){
var state_val_25916 = (state_25915[(1)]);
if((state_val_25916 === (7))){
var state_25915__$1 = state_25915;
var statearr_25917_25950 = state_25915__$1;
(statearr_25917_25950[(2)] = null);

(statearr_25917_25950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (1))){
var state_25915__$1 = state_25915;
var statearr_25918_25951 = state_25915__$1;
(statearr_25918_25951[(2)] = null);

(statearr_25918_25951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (4))){
var inst_25879 = (state_25915[(7)]);
var inst_25881 = (inst_25879 < cnt);
var state_25915__$1 = state_25915;
if(cljs.core.truth_(inst_25881)){
var statearr_25919_25952 = state_25915__$1;
(statearr_25919_25952[(1)] = (6));

} else {
var statearr_25920_25953 = state_25915__$1;
(statearr_25920_25953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (15))){
var inst_25911 = (state_25915[(2)]);
var state_25915__$1 = state_25915;
var statearr_25921_25954 = state_25915__$1;
(statearr_25921_25954[(2)] = inst_25911);

(statearr_25921_25954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (13))){
var inst_25904 = cljs.core.async.close_BANG_.call(null,out);
var state_25915__$1 = state_25915;
var statearr_25922_25955 = state_25915__$1;
(statearr_25922_25955[(2)] = inst_25904);

(statearr_25922_25955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (6))){
var state_25915__$1 = state_25915;
var statearr_25923_25956 = state_25915__$1;
(statearr_25923_25956[(2)] = null);

(statearr_25923_25956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (3))){
var inst_25913 = (state_25915[(2)]);
var state_25915__$1 = state_25915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25915__$1,inst_25913);
} else {
if((state_val_25916 === (12))){
var inst_25901 = (state_25915[(8)]);
var inst_25901__$1 = (state_25915[(2)]);
var inst_25902 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25901__$1);
var state_25915__$1 = (function (){var statearr_25924 = state_25915;
(statearr_25924[(8)] = inst_25901__$1);

return statearr_25924;
})();
if(cljs.core.truth_(inst_25902)){
var statearr_25925_25957 = state_25915__$1;
(statearr_25925_25957[(1)] = (13));

} else {
var statearr_25926_25958 = state_25915__$1;
(statearr_25926_25958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (2))){
var inst_25878 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25879 = (0);
var state_25915__$1 = (function (){var statearr_25927 = state_25915;
(statearr_25927[(9)] = inst_25878);

(statearr_25927[(7)] = inst_25879);

return statearr_25927;
})();
var statearr_25928_25959 = state_25915__$1;
(statearr_25928_25959[(2)] = null);

(statearr_25928_25959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (11))){
var inst_25879 = (state_25915[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25915,(10),Object,null,(9));
var inst_25888 = chs__$1.call(null,inst_25879);
var inst_25889 = done.call(null,inst_25879);
var inst_25890 = cljs.core.async.take_BANG_.call(null,inst_25888,inst_25889);
var state_25915__$1 = state_25915;
var statearr_25929_25960 = state_25915__$1;
(statearr_25929_25960[(2)] = inst_25890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (9))){
var inst_25879 = (state_25915[(7)]);
var inst_25892 = (state_25915[(2)]);
var inst_25893 = (inst_25879 + (1));
var inst_25879__$1 = inst_25893;
var state_25915__$1 = (function (){var statearr_25930 = state_25915;
(statearr_25930[(10)] = inst_25892);

(statearr_25930[(7)] = inst_25879__$1);

return statearr_25930;
})();
var statearr_25931_25961 = state_25915__$1;
(statearr_25931_25961[(2)] = null);

(statearr_25931_25961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (5))){
var inst_25899 = (state_25915[(2)]);
var state_25915__$1 = (function (){var statearr_25932 = state_25915;
(statearr_25932[(11)] = inst_25899);

return statearr_25932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25915__$1,(12),dchan);
} else {
if((state_val_25916 === (14))){
var inst_25901 = (state_25915[(8)]);
var inst_25906 = cljs.core.apply.call(null,f,inst_25901);
var state_25915__$1 = state_25915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25915__$1,(16),out,inst_25906);
} else {
if((state_val_25916 === (16))){
var inst_25908 = (state_25915[(2)]);
var state_25915__$1 = (function (){var statearr_25933 = state_25915;
(statearr_25933[(12)] = inst_25908);

return statearr_25933;
})();
var statearr_25934_25962 = state_25915__$1;
(statearr_25934_25962[(2)] = null);

(statearr_25934_25962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (10))){
var inst_25883 = (state_25915[(2)]);
var inst_25884 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25915__$1 = (function (){var statearr_25935 = state_25915;
(statearr_25935[(13)] = inst_25883);

return statearr_25935;
})();
var statearr_25936_25963 = state_25915__$1;
(statearr_25936_25963[(2)] = inst_25884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25916 === (8))){
var inst_25897 = (state_25915[(2)]);
var state_25915__$1 = state_25915;
var statearr_25937_25964 = state_25915__$1;
(statearr_25937_25964[(2)] = inst_25897);

(statearr_25937_25964[(1)] = (5));


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
});})(c__23895__auto___25949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23872__auto__,c__23895__auto___25949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_25941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25941[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_25941[(1)] = (1));

return statearr_25941;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_25915){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_25915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e25942){if((e25942 instanceof Object)){
var ex__23876__auto__ = e25942;
var statearr_25943_25965 = state_25915;
(statearr_25943_25965[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25966 = state_25915;
state_25915 = G__25966;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_25915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_25915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___25949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23897__auto__ = (function (){var statearr_25944 = f__23896__auto__.call(null);
(statearr_25944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___25949);

return statearr_25944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___25949,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25968 = [];
var len__22628__auto___26026 = arguments.length;
var i__22629__auto___26027 = (0);
while(true){
if((i__22629__auto___26027 < len__22628__auto___26026)){
args25968.push((arguments[i__22629__auto___26027]));

var G__26028 = (i__22629__auto___26027 + (1));
i__22629__auto___26027 = G__26028;
continue;
} else {
}
break;
}

var G__25970 = args25968.length;
switch (G__25970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25968.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23895__auto___26030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___26030,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___26030,out){
return (function (state_26002){
var state_val_26003 = (state_26002[(1)]);
if((state_val_26003 === (7))){
var inst_25982 = (state_26002[(7)]);
var inst_25981 = (state_26002[(8)]);
var inst_25981__$1 = (state_26002[(2)]);
var inst_25982__$1 = cljs.core.nth.call(null,inst_25981__$1,(0),null);
var inst_25983 = cljs.core.nth.call(null,inst_25981__$1,(1),null);
var inst_25984 = (inst_25982__$1 == null);
var state_26002__$1 = (function (){var statearr_26004 = state_26002;
(statearr_26004[(7)] = inst_25982__$1);

(statearr_26004[(9)] = inst_25983);

(statearr_26004[(8)] = inst_25981__$1);

return statearr_26004;
})();
if(cljs.core.truth_(inst_25984)){
var statearr_26005_26031 = state_26002__$1;
(statearr_26005_26031[(1)] = (8));

} else {
var statearr_26006_26032 = state_26002__$1;
(statearr_26006_26032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (1))){
var inst_25971 = cljs.core.vec.call(null,chs);
var inst_25972 = inst_25971;
var state_26002__$1 = (function (){var statearr_26007 = state_26002;
(statearr_26007[(10)] = inst_25972);

return statearr_26007;
})();
var statearr_26008_26033 = state_26002__$1;
(statearr_26008_26033[(2)] = null);

(statearr_26008_26033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (4))){
var inst_25972 = (state_26002[(10)]);
var state_26002__$1 = state_26002;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26002__$1,(7),inst_25972);
} else {
if((state_val_26003 === (6))){
var inst_25998 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26009_26034 = state_26002__$1;
(statearr_26009_26034[(2)] = inst_25998);

(statearr_26009_26034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (3))){
var inst_26000 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26002__$1,inst_26000);
} else {
if((state_val_26003 === (2))){
var inst_25972 = (state_26002[(10)]);
var inst_25974 = cljs.core.count.call(null,inst_25972);
var inst_25975 = (inst_25974 > (0));
var state_26002__$1 = state_26002;
if(cljs.core.truth_(inst_25975)){
var statearr_26011_26035 = state_26002__$1;
(statearr_26011_26035[(1)] = (4));

} else {
var statearr_26012_26036 = state_26002__$1;
(statearr_26012_26036[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (11))){
var inst_25972 = (state_26002[(10)]);
var inst_25991 = (state_26002[(2)]);
var tmp26010 = inst_25972;
var inst_25972__$1 = tmp26010;
var state_26002__$1 = (function (){var statearr_26013 = state_26002;
(statearr_26013[(11)] = inst_25991);

(statearr_26013[(10)] = inst_25972__$1);

return statearr_26013;
})();
var statearr_26014_26037 = state_26002__$1;
(statearr_26014_26037[(2)] = null);

(statearr_26014_26037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (9))){
var inst_25982 = (state_26002[(7)]);
var state_26002__$1 = state_26002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26002__$1,(11),out,inst_25982);
} else {
if((state_val_26003 === (5))){
var inst_25996 = cljs.core.async.close_BANG_.call(null,out);
var state_26002__$1 = state_26002;
var statearr_26015_26038 = state_26002__$1;
(statearr_26015_26038[(2)] = inst_25996);

(statearr_26015_26038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (10))){
var inst_25994 = (state_26002[(2)]);
var state_26002__$1 = state_26002;
var statearr_26016_26039 = state_26002__$1;
(statearr_26016_26039[(2)] = inst_25994);

(statearr_26016_26039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26003 === (8))){
var inst_25982 = (state_26002[(7)]);
var inst_25983 = (state_26002[(9)]);
var inst_25972 = (state_26002[(10)]);
var inst_25981 = (state_26002[(8)]);
var inst_25986 = (function (){var cs = inst_25972;
var vec__25977 = inst_25981;
var v = inst_25982;
var c = inst_25983;
return ((function (cs,vec__25977,v,c,inst_25982,inst_25983,inst_25972,inst_25981,state_val_26003,c__23895__auto___26030,out){
return (function (p1__25967_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25967_SHARP_);
});
;})(cs,vec__25977,v,c,inst_25982,inst_25983,inst_25972,inst_25981,state_val_26003,c__23895__auto___26030,out))
})();
var inst_25987 = cljs.core.filterv.call(null,inst_25986,inst_25972);
var inst_25972__$1 = inst_25987;
var state_26002__$1 = (function (){var statearr_26017 = state_26002;
(statearr_26017[(10)] = inst_25972__$1);

return statearr_26017;
})();
var statearr_26018_26040 = state_26002__$1;
(statearr_26018_26040[(2)] = null);

(statearr_26018_26040[(1)] = (2));


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
});})(c__23895__auto___26030,out))
;
return ((function (switch__23872__auto__,c__23895__auto___26030,out){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_26022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26022[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_26022[(1)] = (1));

return statearr_26022;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_26002){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26023){if((e26023 instanceof Object)){
var ex__23876__auto__ = e26023;
var statearr_26024_26041 = state_26002;
(statearr_26024_26041[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26042 = state_26002;
state_26002 = G__26042;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_26002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_26002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___26030,out))
})();
var state__23897__auto__ = (function (){var statearr_26025 = f__23896__auto__.call(null);
(statearr_26025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___26030);

return statearr_26025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___26030,out))
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
var args26043 = [];
var len__22628__auto___26092 = arguments.length;
var i__22629__auto___26093 = (0);
while(true){
if((i__22629__auto___26093 < len__22628__auto___26092)){
args26043.push((arguments[i__22629__auto___26093]));

var G__26094 = (i__22629__auto___26093 + (1));
i__22629__auto___26093 = G__26094;
continue;
} else {
}
break;
}

var G__26045 = args26043.length;
switch (G__26045) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26043.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23895__auto___26096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___26096,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___26096,out){
return (function (state_26069){
var state_val_26070 = (state_26069[(1)]);
if((state_val_26070 === (7))){
var inst_26051 = (state_26069[(7)]);
var inst_26051__$1 = (state_26069[(2)]);
var inst_26052 = (inst_26051__$1 == null);
var inst_26053 = cljs.core.not.call(null,inst_26052);
var state_26069__$1 = (function (){var statearr_26071 = state_26069;
(statearr_26071[(7)] = inst_26051__$1);

return statearr_26071;
})();
if(inst_26053){
var statearr_26072_26097 = state_26069__$1;
(statearr_26072_26097[(1)] = (8));

} else {
var statearr_26073_26098 = state_26069__$1;
(statearr_26073_26098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (1))){
var inst_26046 = (0);
var state_26069__$1 = (function (){var statearr_26074 = state_26069;
(statearr_26074[(8)] = inst_26046);

return statearr_26074;
})();
var statearr_26075_26099 = state_26069__$1;
(statearr_26075_26099[(2)] = null);

(statearr_26075_26099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (4))){
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26069__$1,(7),ch);
} else {
if((state_val_26070 === (6))){
var inst_26064 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26076_26100 = state_26069__$1;
(statearr_26076_26100[(2)] = inst_26064);

(statearr_26076_26100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (3))){
var inst_26066 = (state_26069[(2)]);
var inst_26067 = cljs.core.async.close_BANG_.call(null,out);
var state_26069__$1 = (function (){var statearr_26077 = state_26069;
(statearr_26077[(9)] = inst_26066);

return statearr_26077;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26069__$1,inst_26067);
} else {
if((state_val_26070 === (2))){
var inst_26046 = (state_26069[(8)]);
var inst_26048 = (inst_26046 < n);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26048)){
var statearr_26078_26101 = state_26069__$1;
(statearr_26078_26101[(1)] = (4));

} else {
var statearr_26079_26102 = state_26069__$1;
(statearr_26079_26102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (11))){
var inst_26046 = (state_26069[(8)]);
var inst_26056 = (state_26069[(2)]);
var inst_26057 = (inst_26046 + (1));
var inst_26046__$1 = inst_26057;
var state_26069__$1 = (function (){var statearr_26080 = state_26069;
(statearr_26080[(10)] = inst_26056);

(statearr_26080[(8)] = inst_26046__$1);

return statearr_26080;
})();
var statearr_26081_26103 = state_26069__$1;
(statearr_26081_26103[(2)] = null);

(statearr_26081_26103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (9))){
var state_26069__$1 = state_26069;
var statearr_26082_26104 = state_26069__$1;
(statearr_26082_26104[(2)] = null);

(statearr_26082_26104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (5))){
var state_26069__$1 = state_26069;
var statearr_26083_26105 = state_26069__$1;
(statearr_26083_26105[(2)] = null);

(statearr_26083_26105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (10))){
var inst_26061 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26084_26106 = state_26069__$1;
(statearr_26084_26106[(2)] = inst_26061);

(statearr_26084_26106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (8))){
var inst_26051 = (state_26069[(7)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26069__$1,(11),out,inst_26051);
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
});})(c__23895__auto___26096,out))
;
return ((function (switch__23872__auto__,c__23895__auto___26096,out){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_26088 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26088[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_26088[(1)] = (1));

return statearr_26088;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_26069){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26089){if((e26089 instanceof Object)){
var ex__23876__auto__ = e26089;
var statearr_26090_26107 = state_26069;
(statearr_26090_26107[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26108 = state_26069;
state_26069 = G__26108;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_26069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_26069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___26096,out))
})();
var state__23897__auto__ = (function (){var statearr_26091 = f__23896__auto__.call(null);
(statearr_26091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___26096);

return statearr_26091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___26096,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26116 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26116 = (function (map_LT_,f,ch,meta26117){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26117 = meta26117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26118,meta26117__$1){
var self__ = this;
var _26118__$1 = this;
return (new cljs.core.async.t_cljs$core$async26116(self__.map_LT_,self__.f,self__.ch,meta26117__$1));
});

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26118){
var self__ = this;
var _26118__$1 = this;
return self__.meta26117;
});

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26119 = (function (map_LT_,f,ch,meta26117,_,fn1,meta26120){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26117 = meta26117;
this._ = _;
this.fn1 = fn1;
this.meta26120 = meta26120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26121,meta26120__$1){
var self__ = this;
var _26121__$1 = this;
return (new cljs.core.async.t_cljs$core$async26119(self__.map_LT_,self__.f,self__.ch,self__.meta26117,self__._,self__.fn1,meta26120__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26121){
var self__ = this;
var _26121__$1 = this;
return self__.meta26120;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26109_SHARP_){
return f1.call(null,(((p1__26109_SHARP_ == null))?null:self__.f.call(null,p1__26109_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26117","meta26117",-1815756510,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26116","cljs.core.async/t_cljs$core$async26116",836651957,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26120","meta26120",2138889341,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26119";

cljs.core.async.t_cljs$core$async26119.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async26119");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async26119 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26119(map_LT___$1,f__$1,ch__$1,meta26117__$1,___$2,fn1__$1,meta26120){
return (new cljs.core.async.t_cljs$core$async26119(map_LT___$1,f__$1,ch__$1,meta26117__$1,___$2,fn1__$1,meta26120));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26119(self__.map_LT_,self__.f,self__.ch,self__.meta26117,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21433__auto__ = ret;
if(cljs.core.truth_(and__21433__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21433__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26116.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26117","meta26117",-1815756510,null)], null);
});

cljs.core.async.t_cljs$core$async26116.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26116.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26116";

cljs.core.async.t_cljs$core$async26116.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async26116");
});

cljs.core.async.__GT_t_cljs$core$async26116 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26116(map_LT___$1,f__$1,ch__$1,meta26117){
return (new cljs.core.async.t_cljs$core$async26116(map_LT___$1,f__$1,ch__$1,meta26117));
});

}

return (new cljs.core.async.t_cljs$core$async26116(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26125 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26125 = (function (map_GT_,f,ch,meta26126){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta26126 = meta26126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26127,meta26126__$1){
var self__ = this;
var _26127__$1 = this;
return (new cljs.core.async.t_cljs$core$async26125(self__.map_GT_,self__.f,self__.ch,meta26126__$1));
});

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26127){
var self__ = this;
var _26127__$1 = this;
return self__.meta26126;
});

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26126","meta26126",-901561850,null)], null);
});

cljs.core.async.t_cljs$core$async26125.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26125";

cljs.core.async.t_cljs$core$async26125.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async26125");
});

cljs.core.async.__GT_t_cljs$core$async26125 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26125(map_GT___$1,f__$1,ch__$1,meta26126){
return (new cljs.core.async.t_cljs$core$async26125(map_GT___$1,f__$1,ch__$1,meta26126));
});

}

return (new cljs.core.async.t_cljs$core$async26125(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26131 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26131 = (function (filter_GT_,p,ch,meta26132){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta26132 = meta26132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26133,meta26132__$1){
var self__ = this;
var _26133__$1 = this;
return (new cljs.core.async.t_cljs$core$async26131(self__.filter_GT_,self__.p,self__.ch,meta26132__$1));
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26133){
var self__ = this;
var _26133__$1 = this;
return self__.meta26132;
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async26131.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26132","meta26132",-1870829994,null)], null);
});

cljs.core.async.t_cljs$core$async26131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26131";

cljs.core.async.t_cljs$core$async26131.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"cljs.core.async/t_cljs$core$async26131");
});

cljs.core.async.__GT_t_cljs$core$async26131 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26131(filter_GT___$1,p__$1,ch__$1,meta26132){
return (new cljs.core.async.t_cljs$core$async26131(filter_GT___$1,p__$1,ch__$1,meta26132));
});

}

return (new cljs.core.async.t_cljs$core$async26131(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args26134 = [];
var len__22628__auto___26178 = arguments.length;
var i__22629__auto___26179 = (0);
while(true){
if((i__22629__auto___26179 < len__22628__auto___26178)){
args26134.push((arguments[i__22629__auto___26179]));

var G__26180 = (i__22629__auto___26179 + (1));
i__22629__auto___26179 = G__26180;
continue;
} else {
}
break;
}

var G__26136 = args26134.length;
switch (G__26136) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26134.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23895__auto___26182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___26182,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___26182,out){
return (function (state_26157){
var state_val_26158 = (state_26157[(1)]);
if((state_val_26158 === (7))){
var inst_26153 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
var statearr_26159_26183 = state_26157__$1;
(statearr_26159_26183[(2)] = inst_26153);

(statearr_26159_26183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (1))){
var state_26157__$1 = state_26157;
var statearr_26160_26184 = state_26157__$1;
(statearr_26160_26184[(2)] = null);

(statearr_26160_26184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (4))){
var inst_26139 = (state_26157[(7)]);
var inst_26139__$1 = (state_26157[(2)]);
var inst_26140 = (inst_26139__$1 == null);
var state_26157__$1 = (function (){var statearr_26161 = state_26157;
(statearr_26161[(7)] = inst_26139__$1);

return statearr_26161;
})();
if(cljs.core.truth_(inst_26140)){
var statearr_26162_26185 = state_26157__$1;
(statearr_26162_26185[(1)] = (5));

} else {
var statearr_26163_26186 = state_26157__$1;
(statearr_26163_26186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (6))){
var inst_26139 = (state_26157[(7)]);
var inst_26144 = p.call(null,inst_26139);
var state_26157__$1 = state_26157;
if(cljs.core.truth_(inst_26144)){
var statearr_26164_26187 = state_26157__$1;
(statearr_26164_26187[(1)] = (8));

} else {
var statearr_26165_26188 = state_26157__$1;
(statearr_26165_26188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (3))){
var inst_26155 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26157__$1,inst_26155);
} else {
if((state_val_26158 === (2))){
var state_26157__$1 = state_26157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26157__$1,(4),ch);
} else {
if((state_val_26158 === (11))){
var inst_26147 = (state_26157[(2)]);
var state_26157__$1 = state_26157;
var statearr_26166_26189 = state_26157__$1;
(statearr_26166_26189[(2)] = inst_26147);

(statearr_26166_26189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (9))){
var state_26157__$1 = state_26157;
var statearr_26167_26190 = state_26157__$1;
(statearr_26167_26190[(2)] = null);

(statearr_26167_26190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (5))){
var inst_26142 = cljs.core.async.close_BANG_.call(null,out);
var state_26157__$1 = state_26157;
var statearr_26168_26191 = state_26157__$1;
(statearr_26168_26191[(2)] = inst_26142);

(statearr_26168_26191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (10))){
var inst_26150 = (state_26157[(2)]);
var state_26157__$1 = (function (){var statearr_26169 = state_26157;
(statearr_26169[(8)] = inst_26150);

return statearr_26169;
})();
var statearr_26170_26192 = state_26157__$1;
(statearr_26170_26192[(2)] = null);

(statearr_26170_26192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26158 === (8))){
var inst_26139 = (state_26157[(7)]);
var state_26157__$1 = state_26157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26157__$1,(11),out,inst_26139);
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
});})(c__23895__auto___26182,out))
;
return ((function (switch__23872__auto__,c__23895__auto___26182,out){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_26174 = [null,null,null,null,null,null,null,null,null];
(statearr_26174[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_26174[(1)] = (1));

return statearr_26174;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_26157){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26175){if((e26175 instanceof Object)){
var ex__23876__auto__ = e26175;
var statearr_26176_26193 = state_26157;
(statearr_26176_26193[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26194 = state_26157;
state_26157 = G__26194;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_26157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_26157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___26182,out))
})();
var state__23897__auto__ = (function (){var statearr_26177 = f__23896__auto__.call(null);
(statearr_26177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___26182);

return statearr_26177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___26182,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args26195 = [];
var len__22628__auto___26198 = arguments.length;
var i__22629__auto___26199 = (0);
while(true){
if((i__22629__auto___26199 < len__22628__auto___26198)){
args26195.push((arguments[i__22629__auto___26199]));

var G__26200 = (i__22629__auto___26199 + (1));
i__22629__auto___26199 = G__26200;
continue;
} else {
}
break;
}

var G__26197 = args26195.length;
switch (G__26197) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26195.length)].join('')));

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
var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__){
return (function (state_26367){
var state_val_26368 = (state_26367[(1)]);
if((state_val_26368 === (7))){
var inst_26363 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26369_26410 = state_26367__$1;
(statearr_26369_26410[(2)] = inst_26363);

(statearr_26369_26410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (20))){
var inst_26333 = (state_26367[(7)]);
var inst_26344 = (state_26367[(2)]);
var inst_26345 = cljs.core.next.call(null,inst_26333);
var inst_26319 = inst_26345;
var inst_26320 = null;
var inst_26321 = (0);
var inst_26322 = (0);
var state_26367__$1 = (function (){var statearr_26370 = state_26367;
(statearr_26370[(8)] = inst_26322);

(statearr_26370[(9)] = inst_26344);

(statearr_26370[(10)] = inst_26319);

(statearr_26370[(11)] = inst_26320);

(statearr_26370[(12)] = inst_26321);

return statearr_26370;
})();
var statearr_26371_26411 = state_26367__$1;
(statearr_26371_26411[(2)] = null);

(statearr_26371_26411[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (1))){
var state_26367__$1 = state_26367;
var statearr_26372_26412 = state_26367__$1;
(statearr_26372_26412[(2)] = null);

(statearr_26372_26412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (4))){
var inst_26308 = (state_26367[(13)]);
var inst_26308__$1 = (state_26367[(2)]);
var inst_26309 = (inst_26308__$1 == null);
var state_26367__$1 = (function (){var statearr_26373 = state_26367;
(statearr_26373[(13)] = inst_26308__$1);

return statearr_26373;
})();
if(cljs.core.truth_(inst_26309)){
var statearr_26374_26413 = state_26367__$1;
(statearr_26374_26413[(1)] = (5));

} else {
var statearr_26375_26414 = state_26367__$1;
(statearr_26375_26414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (15))){
var state_26367__$1 = state_26367;
var statearr_26379_26415 = state_26367__$1;
(statearr_26379_26415[(2)] = null);

(statearr_26379_26415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (21))){
var state_26367__$1 = state_26367;
var statearr_26380_26416 = state_26367__$1;
(statearr_26380_26416[(2)] = null);

(statearr_26380_26416[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (13))){
var inst_26322 = (state_26367[(8)]);
var inst_26319 = (state_26367[(10)]);
var inst_26320 = (state_26367[(11)]);
var inst_26321 = (state_26367[(12)]);
var inst_26329 = (state_26367[(2)]);
var inst_26330 = (inst_26322 + (1));
var tmp26376 = inst_26319;
var tmp26377 = inst_26320;
var tmp26378 = inst_26321;
var inst_26319__$1 = tmp26376;
var inst_26320__$1 = tmp26377;
var inst_26321__$1 = tmp26378;
var inst_26322__$1 = inst_26330;
var state_26367__$1 = (function (){var statearr_26381 = state_26367;
(statearr_26381[(8)] = inst_26322__$1);

(statearr_26381[(10)] = inst_26319__$1);

(statearr_26381[(11)] = inst_26320__$1);

(statearr_26381[(14)] = inst_26329);

(statearr_26381[(12)] = inst_26321__$1);

return statearr_26381;
})();
var statearr_26382_26417 = state_26367__$1;
(statearr_26382_26417[(2)] = null);

(statearr_26382_26417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (22))){
var state_26367__$1 = state_26367;
var statearr_26383_26418 = state_26367__$1;
(statearr_26383_26418[(2)] = null);

(statearr_26383_26418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (6))){
var inst_26308 = (state_26367[(13)]);
var inst_26317 = f.call(null,inst_26308);
var inst_26318 = cljs.core.seq.call(null,inst_26317);
var inst_26319 = inst_26318;
var inst_26320 = null;
var inst_26321 = (0);
var inst_26322 = (0);
var state_26367__$1 = (function (){var statearr_26384 = state_26367;
(statearr_26384[(8)] = inst_26322);

(statearr_26384[(10)] = inst_26319);

(statearr_26384[(11)] = inst_26320);

(statearr_26384[(12)] = inst_26321);

return statearr_26384;
})();
var statearr_26385_26419 = state_26367__$1;
(statearr_26385_26419[(2)] = null);

(statearr_26385_26419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (17))){
var inst_26333 = (state_26367[(7)]);
var inst_26337 = cljs.core.chunk_first.call(null,inst_26333);
var inst_26338 = cljs.core.chunk_rest.call(null,inst_26333);
var inst_26339 = cljs.core.count.call(null,inst_26337);
var inst_26319 = inst_26338;
var inst_26320 = inst_26337;
var inst_26321 = inst_26339;
var inst_26322 = (0);
var state_26367__$1 = (function (){var statearr_26386 = state_26367;
(statearr_26386[(8)] = inst_26322);

(statearr_26386[(10)] = inst_26319);

(statearr_26386[(11)] = inst_26320);

(statearr_26386[(12)] = inst_26321);

return statearr_26386;
})();
var statearr_26387_26420 = state_26367__$1;
(statearr_26387_26420[(2)] = null);

(statearr_26387_26420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (3))){
var inst_26365 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26367__$1,inst_26365);
} else {
if((state_val_26368 === (12))){
var inst_26353 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26388_26421 = state_26367__$1;
(statearr_26388_26421[(2)] = inst_26353);

(statearr_26388_26421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (2))){
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26367__$1,(4),in$);
} else {
if((state_val_26368 === (23))){
var inst_26361 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26389_26422 = state_26367__$1;
(statearr_26389_26422[(2)] = inst_26361);

(statearr_26389_26422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (19))){
var inst_26348 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26390_26423 = state_26367__$1;
(statearr_26390_26423[(2)] = inst_26348);

(statearr_26390_26423[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (11))){
var inst_26333 = (state_26367[(7)]);
var inst_26319 = (state_26367[(10)]);
var inst_26333__$1 = cljs.core.seq.call(null,inst_26319);
var state_26367__$1 = (function (){var statearr_26391 = state_26367;
(statearr_26391[(7)] = inst_26333__$1);

return statearr_26391;
})();
if(inst_26333__$1){
var statearr_26392_26424 = state_26367__$1;
(statearr_26392_26424[(1)] = (14));

} else {
var statearr_26393_26425 = state_26367__$1;
(statearr_26393_26425[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (9))){
var inst_26355 = (state_26367[(2)]);
var inst_26356 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26367__$1 = (function (){var statearr_26394 = state_26367;
(statearr_26394[(15)] = inst_26355);

return statearr_26394;
})();
if(cljs.core.truth_(inst_26356)){
var statearr_26395_26426 = state_26367__$1;
(statearr_26395_26426[(1)] = (21));

} else {
var statearr_26396_26427 = state_26367__$1;
(statearr_26396_26427[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (5))){
var inst_26311 = cljs.core.async.close_BANG_.call(null,out);
var state_26367__$1 = state_26367;
var statearr_26397_26428 = state_26367__$1;
(statearr_26397_26428[(2)] = inst_26311);

(statearr_26397_26428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (14))){
var inst_26333 = (state_26367[(7)]);
var inst_26335 = cljs.core.chunked_seq_QMARK_.call(null,inst_26333);
var state_26367__$1 = state_26367;
if(inst_26335){
var statearr_26398_26429 = state_26367__$1;
(statearr_26398_26429[(1)] = (17));

} else {
var statearr_26399_26430 = state_26367__$1;
(statearr_26399_26430[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (16))){
var inst_26351 = (state_26367[(2)]);
var state_26367__$1 = state_26367;
var statearr_26400_26431 = state_26367__$1;
(statearr_26400_26431[(2)] = inst_26351);

(statearr_26400_26431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26368 === (10))){
var inst_26322 = (state_26367[(8)]);
var inst_26320 = (state_26367[(11)]);
var inst_26327 = cljs.core._nth.call(null,inst_26320,inst_26322);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26367__$1,(13),out,inst_26327);
} else {
if((state_val_26368 === (18))){
var inst_26333 = (state_26367[(7)]);
var inst_26342 = cljs.core.first.call(null,inst_26333);
var state_26367__$1 = state_26367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26367__$1,(20),out,inst_26342);
} else {
if((state_val_26368 === (8))){
var inst_26322 = (state_26367[(8)]);
var inst_26321 = (state_26367[(12)]);
var inst_26324 = (inst_26322 < inst_26321);
var inst_26325 = inst_26324;
var state_26367__$1 = state_26367;
if(cljs.core.truth_(inst_26325)){
var statearr_26401_26432 = state_26367__$1;
(statearr_26401_26432[(1)] = (10));

} else {
var statearr_26402_26433 = state_26367__$1;
(statearr_26402_26433[(1)] = (11));

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
});})(c__23895__auto__))
;
return ((function (switch__23872__auto__,c__23895__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23873__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23873__auto____0 = (function (){
var statearr_26406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26406[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23873__auto__);

(statearr_26406[(1)] = (1));

return statearr_26406;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23873__auto____1 = (function (state_26367){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26407){if((e26407 instanceof Object)){
var ex__23876__auto__ = e26407;
var statearr_26408_26434 = state_26367;
(statearr_26408_26434[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26435 = state_26367;
state_26367 = G__26435;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23873__auto__ = function(state_26367){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23873__auto____1.call(this,state_26367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23873__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23873__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__))
})();
var state__23897__auto__ = (function (){var statearr_26409 = f__23896__auto__.call(null);
(statearr_26409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_26409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__))
);

return c__23895__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26436 = [];
var len__22628__auto___26439 = arguments.length;
var i__22629__auto___26440 = (0);
while(true){
if((i__22629__auto___26440 < len__22628__auto___26439)){
args26436.push((arguments[i__22629__auto___26440]));

var G__26441 = (i__22629__auto___26440 + (1));
i__22629__auto___26440 = G__26441;
continue;
} else {
}
break;
}

var G__26438 = args26436.length;
switch (G__26438) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26436.length)].join('')));

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
var args26443 = [];
var len__22628__auto___26446 = arguments.length;
var i__22629__auto___26447 = (0);
while(true){
if((i__22629__auto___26447 < len__22628__auto___26446)){
args26443.push((arguments[i__22629__auto___26447]));

var G__26448 = (i__22629__auto___26447 + (1));
i__22629__auto___26447 = G__26448;
continue;
} else {
}
break;
}

var G__26445 = args26443.length;
switch (G__26445) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26443.length)].join('')));

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
var args26450 = [];
var len__22628__auto___26501 = arguments.length;
var i__22629__auto___26502 = (0);
while(true){
if((i__22629__auto___26502 < len__22628__auto___26501)){
args26450.push((arguments[i__22629__auto___26502]));

var G__26503 = (i__22629__auto___26502 + (1));
i__22629__auto___26502 = G__26503;
continue;
} else {
}
break;
}

var G__26452 = args26450.length;
switch (G__26452) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26450.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23895__auto___26505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___26505,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___26505,out){
return (function (state_26476){
var state_val_26477 = (state_26476[(1)]);
if((state_val_26477 === (7))){
var inst_26471 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26478_26506 = state_26476__$1;
(statearr_26478_26506[(2)] = inst_26471);

(statearr_26478_26506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (1))){
var inst_26453 = null;
var state_26476__$1 = (function (){var statearr_26479 = state_26476;
(statearr_26479[(7)] = inst_26453);

return statearr_26479;
})();
var statearr_26480_26507 = state_26476__$1;
(statearr_26480_26507[(2)] = null);

(statearr_26480_26507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (4))){
var inst_26456 = (state_26476[(8)]);
var inst_26456__$1 = (state_26476[(2)]);
var inst_26457 = (inst_26456__$1 == null);
var inst_26458 = cljs.core.not.call(null,inst_26457);
var state_26476__$1 = (function (){var statearr_26481 = state_26476;
(statearr_26481[(8)] = inst_26456__$1);

return statearr_26481;
})();
if(inst_26458){
var statearr_26482_26508 = state_26476__$1;
(statearr_26482_26508[(1)] = (5));

} else {
var statearr_26483_26509 = state_26476__$1;
(statearr_26483_26509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (6))){
var state_26476__$1 = state_26476;
var statearr_26484_26510 = state_26476__$1;
(statearr_26484_26510[(2)] = null);

(statearr_26484_26510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (3))){
var inst_26473 = (state_26476[(2)]);
var inst_26474 = cljs.core.async.close_BANG_.call(null,out);
var state_26476__$1 = (function (){var statearr_26485 = state_26476;
(statearr_26485[(9)] = inst_26473);

return statearr_26485;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26476__$1,inst_26474);
} else {
if((state_val_26477 === (2))){
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26476__$1,(4),ch);
} else {
if((state_val_26477 === (11))){
var inst_26456 = (state_26476[(8)]);
var inst_26465 = (state_26476[(2)]);
var inst_26453 = inst_26456;
var state_26476__$1 = (function (){var statearr_26486 = state_26476;
(statearr_26486[(7)] = inst_26453);

(statearr_26486[(10)] = inst_26465);

return statearr_26486;
})();
var statearr_26487_26511 = state_26476__$1;
(statearr_26487_26511[(2)] = null);

(statearr_26487_26511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (9))){
var inst_26456 = (state_26476[(8)]);
var state_26476__$1 = state_26476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26476__$1,(11),out,inst_26456);
} else {
if((state_val_26477 === (5))){
var inst_26453 = (state_26476[(7)]);
var inst_26456 = (state_26476[(8)]);
var inst_26460 = cljs.core._EQ_.call(null,inst_26456,inst_26453);
var state_26476__$1 = state_26476;
if(inst_26460){
var statearr_26489_26512 = state_26476__$1;
(statearr_26489_26512[(1)] = (8));

} else {
var statearr_26490_26513 = state_26476__$1;
(statearr_26490_26513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (10))){
var inst_26468 = (state_26476[(2)]);
var state_26476__$1 = state_26476;
var statearr_26491_26514 = state_26476__$1;
(statearr_26491_26514[(2)] = inst_26468);

(statearr_26491_26514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26477 === (8))){
var inst_26453 = (state_26476[(7)]);
var tmp26488 = inst_26453;
var inst_26453__$1 = tmp26488;
var state_26476__$1 = (function (){var statearr_26492 = state_26476;
(statearr_26492[(7)] = inst_26453__$1);

return statearr_26492;
})();
var statearr_26493_26515 = state_26476__$1;
(statearr_26493_26515[(2)] = null);

(statearr_26493_26515[(1)] = (2));


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
});})(c__23895__auto___26505,out))
;
return ((function (switch__23872__auto__,c__23895__auto___26505,out){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_26497 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26497[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_26497[(1)] = (1));

return statearr_26497;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_26476){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26498){if((e26498 instanceof Object)){
var ex__23876__auto__ = e26498;
var statearr_26499_26516 = state_26476;
(statearr_26499_26516[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26517 = state_26476;
state_26476 = G__26517;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_26476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_26476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___26505,out))
})();
var state__23897__auto__ = (function (){var statearr_26500 = f__23896__auto__.call(null);
(statearr_26500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___26505);

return statearr_26500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___26505,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26518 = [];
var len__22628__auto___26588 = arguments.length;
var i__22629__auto___26589 = (0);
while(true){
if((i__22629__auto___26589 < len__22628__auto___26588)){
args26518.push((arguments[i__22629__auto___26589]));

var G__26590 = (i__22629__auto___26589 + (1));
i__22629__auto___26589 = G__26590;
continue;
} else {
}
break;
}

var G__26520 = args26518.length;
switch (G__26520) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26518.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23895__auto___26592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___26592,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___26592,out){
return (function (state_26558){
var state_val_26559 = (state_26558[(1)]);
if((state_val_26559 === (7))){
var inst_26554 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26560_26593 = state_26558__$1;
(statearr_26560_26593[(2)] = inst_26554);

(statearr_26560_26593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (1))){
var inst_26521 = (new Array(n));
var inst_26522 = inst_26521;
var inst_26523 = (0);
var state_26558__$1 = (function (){var statearr_26561 = state_26558;
(statearr_26561[(7)] = inst_26522);

(statearr_26561[(8)] = inst_26523);

return statearr_26561;
})();
var statearr_26562_26594 = state_26558__$1;
(statearr_26562_26594[(2)] = null);

(statearr_26562_26594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (4))){
var inst_26526 = (state_26558[(9)]);
var inst_26526__$1 = (state_26558[(2)]);
var inst_26527 = (inst_26526__$1 == null);
var inst_26528 = cljs.core.not.call(null,inst_26527);
var state_26558__$1 = (function (){var statearr_26563 = state_26558;
(statearr_26563[(9)] = inst_26526__$1);

return statearr_26563;
})();
if(inst_26528){
var statearr_26564_26595 = state_26558__$1;
(statearr_26564_26595[(1)] = (5));

} else {
var statearr_26565_26596 = state_26558__$1;
(statearr_26565_26596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (15))){
var inst_26548 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26566_26597 = state_26558__$1;
(statearr_26566_26597[(2)] = inst_26548);

(statearr_26566_26597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (13))){
var state_26558__$1 = state_26558;
var statearr_26567_26598 = state_26558__$1;
(statearr_26567_26598[(2)] = null);

(statearr_26567_26598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (6))){
var inst_26523 = (state_26558[(8)]);
var inst_26544 = (inst_26523 > (0));
var state_26558__$1 = state_26558;
if(cljs.core.truth_(inst_26544)){
var statearr_26568_26599 = state_26558__$1;
(statearr_26568_26599[(1)] = (12));

} else {
var statearr_26569_26600 = state_26558__$1;
(statearr_26569_26600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (3))){
var inst_26556 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26558__$1,inst_26556);
} else {
if((state_val_26559 === (12))){
var inst_26522 = (state_26558[(7)]);
var inst_26546 = cljs.core.vec.call(null,inst_26522);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26558__$1,(15),out,inst_26546);
} else {
if((state_val_26559 === (2))){
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26558__$1,(4),ch);
} else {
if((state_val_26559 === (11))){
var inst_26538 = (state_26558[(2)]);
var inst_26539 = (new Array(n));
var inst_26522 = inst_26539;
var inst_26523 = (0);
var state_26558__$1 = (function (){var statearr_26570 = state_26558;
(statearr_26570[(10)] = inst_26538);

(statearr_26570[(7)] = inst_26522);

(statearr_26570[(8)] = inst_26523);

return statearr_26570;
})();
var statearr_26571_26601 = state_26558__$1;
(statearr_26571_26601[(2)] = null);

(statearr_26571_26601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (9))){
var inst_26522 = (state_26558[(7)]);
var inst_26536 = cljs.core.vec.call(null,inst_26522);
var state_26558__$1 = state_26558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26558__$1,(11),out,inst_26536);
} else {
if((state_val_26559 === (5))){
var inst_26526 = (state_26558[(9)]);
var inst_26531 = (state_26558[(11)]);
var inst_26522 = (state_26558[(7)]);
var inst_26523 = (state_26558[(8)]);
var inst_26530 = (inst_26522[inst_26523] = inst_26526);
var inst_26531__$1 = (inst_26523 + (1));
var inst_26532 = (inst_26531__$1 < n);
var state_26558__$1 = (function (){var statearr_26572 = state_26558;
(statearr_26572[(11)] = inst_26531__$1);

(statearr_26572[(12)] = inst_26530);

return statearr_26572;
})();
if(cljs.core.truth_(inst_26532)){
var statearr_26573_26602 = state_26558__$1;
(statearr_26573_26602[(1)] = (8));

} else {
var statearr_26574_26603 = state_26558__$1;
(statearr_26574_26603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (14))){
var inst_26551 = (state_26558[(2)]);
var inst_26552 = cljs.core.async.close_BANG_.call(null,out);
var state_26558__$1 = (function (){var statearr_26576 = state_26558;
(statearr_26576[(13)] = inst_26551);

return statearr_26576;
})();
var statearr_26577_26604 = state_26558__$1;
(statearr_26577_26604[(2)] = inst_26552);

(statearr_26577_26604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (10))){
var inst_26542 = (state_26558[(2)]);
var state_26558__$1 = state_26558;
var statearr_26578_26605 = state_26558__$1;
(statearr_26578_26605[(2)] = inst_26542);

(statearr_26578_26605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26559 === (8))){
var inst_26531 = (state_26558[(11)]);
var inst_26522 = (state_26558[(7)]);
var tmp26575 = inst_26522;
var inst_26522__$1 = tmp26575;
var inst_26523 = inst_26531;
var state_26558__$1 = (function (){var statearr_26579 = state_26558;
(statearr_26579[(7)] = inst_26522__$1);

(statearr_26579[(8)] = inst_26523);

return statearr_26579;
})();
var statearr_26580_26606 = state_26558__$1;
(statearr_26580_26606[(2)] = null);

(statearr_26580_26606[(1)] = (2));


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
});})(c__23895__auto___26592,out))
;
return ((function (switch__23872__auto__,c__23895__auto___26592,out){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_26584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26584[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_26584[(1)] = (1));

return statearr_26584;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_26558){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26585){if((e26585 instanceof Object)){
var ex__23876__auto__ = e26585;
var statearr_26586_26607 = state_26558;
(statearr_26586_26607[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26608 = state_26558;
state_26558 = G__26608;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_26558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_26558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___26592,out))
})();
var state__23897__auto__ = (function (){var statearr_26587 = f__23896__auto__.call(null);
(statearr_26587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___26592);

return statearr_26587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___26592,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26609 = [];
var len__22628__auto___26683 = arguments.length;
var i__22629__auto___26684 = (0);
while(true){
if((i__22629__auto___26684 < len__22628__auto___26683)){
args26609.push((arguments[i__22629__auto___26684]));

var G__26685 = (i__22629__auto___26684 + (1));
i__22629__auto___26684 = G__26685;
continue;
} else {
}
break;
}

var G__26611 = args26609.length;
switch (G__26611) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26609.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23895__auto___26687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___26687,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___26687,out){
return (function (state_26653){
var state_val_26654 = (state_26653[(1)]);
if((state_val_26654 === (7))){
var inst_26649 = (state_26653[(2)]);
var state_26653__$1 = state_26653;
var statearr_26655_26688 = state_26653__$1;
(statearr_26655_26688[(2)] = inst_26649);

(statearr_26655_26688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (1))){
var inst_26612 = [];
var inst_26613 = inst_26612;
var inst_26614 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26653__$1 = (function (){var statearr_26656 = state_26653;
(statearr_26656[(7)] = inst_26614);

(statearr_26656[(8)] = inst_26613);

return statearr_26656;
})();
var statearr_26657_26689 = state_26653__$1;
(statearr_26657_26689[(2)] = null);

(statearr_26657_26689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (4))){
var inst_26617 = (state_26653[(9)]);
var inst_26617__$1 = (state_26653[(2)]);
var inst_26618 = (inst_26617__$1 == null);
var inst_26619 = cljs.core.not.call(null,inst_26618);
var state_26653__$1 = (function (){var statearr_26658 = state_26653;
(statearr_26658[(9)] = inst_26617__$1);

return statearr_26658;
})();
if(inst_26619){
var statearr_26659_26690 = state_26653__$1;
(statearr_26659_26690[(1)] = (5));

} else {
var statearr_26660_26691 = state_26653__$1;
(statearr_26660_26691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (15))){
var inst_26643 = (state_26653[(2)]);
var state_26653__$1 = state_26653;
var statearr_26661_26692 = state_26653__$1;
(statearr_26661_26692[(2)] = inst_26643);

(statearr_26661_26692[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (13))){
var state_26653__$1 = state_26653;
var statearr_26662_26693 = state_26653__$1;
(statearr_26662_26693[(2)] = null);

(statearr_26662_26693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (6))){
var inst_26613 = (state_26653[(8)]);
var inst_26638 = inst_26613.length;
var inst_26639 = (inst_26638 > (0));
var state_26653__$1 = state_26653;
if(cljs.core.truth_(inst_26639)){
var statearr_26663_26694 = state_26653__$1;
(statearr_26663_26694[(1)] = (12));

} else {
var statearr_26664_26695 = state_26653__$1;
(statearr_26664_26695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (3))){
var inst_26651 = (state_26653[(2)]);
var state_26653__$1 = state_26653;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26653__$1,inst_26651);
} else {
if((state_val_26654 === (12))){
var inst_26613 = (state_26653[(8)]);
var inst_26641 = cljs.core.vec.call(null,inst_26613);
var state_26653__$1 = state_26653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26653__$1,(15),out,inst_26641);
} else {
if((state_val_26654 === (2))){
var state_26653__$1 = state_26653;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26653__$1,(4),ch);
} else {
if((state_val_26654 === (11))){
var inst_26617 = (state_26653[(9)]);
var inst_26621 = (state_26653[(10)]);
var inst_26631 = (state_26653[(2)]);
var inst_26632 = [];
var inst_26633 = inst_26632.push(inst_26617);
var inst_26613 = inst_26632;
var inst_26614 = inst_26621;
var state_26653__$1 = (function (){var statearr_26665 = state_26653;
(statearr_26665[(11)] = inst_26633);

(statearr_26665[(7)] = inst_26614);

(statearr_26665[(8)] = inst_26613);

(statearr_26665[(12)] = inst_26631);

return statearr_26665;
})();
var statearr_26666_26696 = state_26653__$1;
(statearr_26666_26696[(2)] = null);

(statearr_26666_26696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (9))){
var inst_26613 = (state_26653[(8)]);
var inst_26629 = cljs.core.vec.call(null,inst_26613);
var state_26653__$1 = state_26653;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26653__$1,(11),out,inst_26629);
} else {
if((state_val_26654 === (5))){
var inst_26614 = (state_26653[(7)]);
var inst_26617 = (state_26653[(9)]);
var inst_26621 = (state_26653[(10)]);
var inst_26621__$1 = f.call(null,inst_26617);
var inst_26622 = cljs.core._EQ_.call(null,inst_26621__$1,inst_26614);
var inst_26623 = cljs.core.keyword_identical_QMARK_.call(null,inst_26614,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26624 = (inst_26622) || (inst_26623);
var state_26653__$1 = (function (){var statearr_26667 = state_26653;
(statearr_26667[(10)] = inst_26621__$1);

return statearr_26667;
})();
if(cljs.core.truth_(inst_26624)){
var statearr_26668_26697 = state_26653__$1;
(statearr_26668_26697[(1)] = (8));

} else {
var statearr_26669_26698 = state_26653__$1;
(statearr_26669_26698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (14))){
var inst_26646 = (state_26653[(2)]);
var inst_26647 = cljs.core.async.close_BANG_.call(null,out);
var state_26653__$1 = (function (){var statearr_26671 = state_26653;
(statearr_26671[(13)] = inst_26646);

return statearr_26671;
})();
var statearr_26672_26699 = state_26653__$1;
(statearr_26672_26699[(2)] = inst_26647);

(statearr_26672_26699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (10))){
var inst_26636 = (state_26653[(2)]);
var state_26653__$1 = state_26653;
var statearr_26673_26700 = state_26653__$1;
(statearr_26673_26700[(2)] = inst_26636);

(statearr_26673_26700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26654 === (8))){
var inst_26613 = (state_26653[(8)]);
var inst_26617 = (state_26653[(9)]);
var inst_26621 = (state_26653[(10)]);
var inst_26626 = inst_26613.push(inst_26617);
var tmp26670 = inst_26613;
var inst_26613__$1 = tmp26670;
var inst_26614 = inst_26621;
var state_26653__$1 = (function (){var statearr_26674 = state_26653;
(statearr_26674[(14)] = inst_26626);

(statearr_26674[(7)] = inst_26614);

(statearr_26674[(8)] = inst_26613__$1);

return statearr_26674;
})();
var statearr_26675_26701 = state_26653__$1;
(statearr_26675_26701[(2)] = null);

(statearr_26675_26701[(1)] = (2));


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
});})(c__23895__auto___26687,out))
;
return ((function (switch__23872__auto__,c__23895__auto___26687,out){
return (function() {
var cljs$core$async$state_machine__23873__auto__ = null;
var cljs$core$async$state_machine__23873__auto____0 = (function (){
var statearr_26679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26679[(0)] = cljs$core$async$state_machine__23873__auto__);

(statearr_26679[(1)] = (1));

return statearr_26679;
});
var cljs$core$async$state_machine__23873__auto____1 = (function (state_26653){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26653);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e26680){if((e26680 instanceof Object)){
var ex__23876__auto__ = e26680;
var statearr_26681_26702 = state_26653;
(statearr_26681_26702[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26653);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26703 = state_26653;
state_26653 = G__26703;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
cljs$core$async$state_machine__23873__auto__ = function(state_26653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23873__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23873__auto____1.call(this,state_26653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23873__auto____0;
cljs$core$async$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23873__auto____1;
return cljs$core$async$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___26687,out))
})();
var state__23897__auto__ = (function (){var statearr_26682 = f__23896__auto__.call(null);
(statearr_26682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___26687);

return statearr_26682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___26687,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1471651295962