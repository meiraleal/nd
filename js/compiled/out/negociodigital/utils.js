// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.utils');
goog.require('cljs.core');
negociodigital.utils.create_element = (function negociodigital$utils$create_element(var_args){
var args__22635__auto__ = [];
var len__22628__auto___25854 = arguments.length;
var i__22629__auto___25855 = (0);
while(true){
if((i__22629__auto___25855 < len__22628__auto___25854)){
args__22635__auto__.push((arguments[i__22629__auto___25855]));

var G__25856 = (i__22629__auto___25855 + (1));
i__22629__auto___25855 = G__25856;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((2) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((2)),(0),null)):null);
return negociodigital.utils.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22636__auto__);
});

negociodigital.utils.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (react_comp,opts,children){
return cljs.core.apply.call(null,React.createElement,react_comp,cljs.core.clj__GT_js.call(null,opts),children);
});

negociodigital.utils.create_element.cljs$lang$maxFixedArity = (2);

negociodigital.utils.create_element.cljs$lang$applyTo = (function (seq25851){
var G__25852 = cljs.core.first.call(null,seq25851);
var seq25851__$1 = cljs.core.next.call(null,seq25851);
var G__25853 = cljs.core.first.call(null,seq25851__$1);
var seq25851__$2 = cljs.core.next.call(null,seq25851__$1);
return negociodigital.utils.create_element.cljs$core$IFn$_invoke$arity$variadic(G__25852,G__25853,seq25851__$2);
});

negociodigital.utils.create_factory = (function negociodigital$utils$create_factory(react_comp){
return React.createFactory(react_comp);
});
/**
 * remove elem in coll
 */
negociodigital.utils.vec_remove = (function negociodigital$utils$vec_remove(coll,pos){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,coll,(0),pos),cljs.core.subvec.call(null,coll,(pos + (1)))));
});

//# sourceMappingURL=utils.js.map?rel=1472827450486