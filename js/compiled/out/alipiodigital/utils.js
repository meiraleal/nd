// Compiled by ClojureScript 1.9.89 {}
goog.provide('alipiodigital.utils');
goog.require('cljs.core');
alipiodigital.utils.create_element = (function alipiodigital$utils$create_element(var_args){
var args__22635__auto__ = [];
var len__22628__auto___25433 = arguments.length;
var i__22629__auto___25434 = (0);
while(true){
if((i__22629__auto___25434 < len__22628__auto___25433)){
args__22635__auto__.push((arguments[i__22629__auto___25434]));

var G__25435 = (i__22629__auto___25434 + (1));
i__22629__auto___25434 = G__25435;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((2) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((2)),(0),null)):null);
return alipiodigital.utils.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22636__auto__);
});

alipiodigital.utils.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (rn_comp,opts,children){
return cljs.core.apply.call(null,React.createElement,rn_comp,cljs.core.clj__GT_js.call(null,opts),children);
});

alipiodigital.utils.create_element.cljs$lang$maxFixedArity = (2);

alipiodigital.utils.create_element.cljs$lang$applyTo = (function (seq25430){
var G__25431 = cljs.core.first.call(null,seq25430);
var seq25430__$1 = cljs.core.next.call(null,seq25430);
var G__25432 = cljs.core.first.call(null,seq25430__$1);
var seq25430__$2 = cljs.core.next.call(null,seq25430__$1);
return alipiodigital.utils.create_element.cljs$core$IFn$_invoke$arity$variadic(G__25431,G__25432,seq25430__$2);
});


//# sourceMappingURL=utils.js.map?rel=1472075090207