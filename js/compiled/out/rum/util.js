// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__22635__auto__ = [];
var len__22628__auto___23791 = arguments.length;
var i__22629__auto___23792 = (0);
while(true){
if((i__22629__auto___23792 < len__22628__auto___23791)){
args__22635__auto__.push((arguments[i__22629__auto___23792]));

var G__23793 = (i__22629__auto___23792 + (1));
i__22629__auto___23792 = G__23793;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((2) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22636__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

rum.util.call_all.cljs$lang$applyTo = (function (seq23788){
var G__23789 = cljs.core.first.call(null,seq23788);
var seq23788__$1 = cljs.core.next.call(null,seq23788);
var G__23790 = cljs.core.first.call(null,seq23788__$1);
var seq23788__$2 = cljs.core.next.call(null,seq23788__$1);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic(G__23789,G__23790,seq23788__$2);
});

rum.util.filter_vals = (function rum$util$filter_vals(pred,m){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.assoc.call(null,m__$1,k,v);
} else {
return m__$1;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

//# sourceMappingURL=util.js.map?rel=1471651205573