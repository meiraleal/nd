// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('negociodigital.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27044__delegate = function (x){
if(cljs.core.truth_(negociodigital.core.on_js_reload)){
return cljs.core.apply.call(null,negociodigital.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'negociodigital.core/on-js-reload' is missing");
}
};
var G__27044 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27045__i = 0, G__27045__a = new Array(arguments.length -  0);
while (G__27045__i < G__27045__a.length) {G__27045__a[G__27045__i] = arguments[G__27045__i + 0]; ++G__27045__i;}
  x = new cljs.core.IndexedSeq(G__27045__a,0);
} 
return G__27044__delegate.call(this,x);};
G__27044.cljs$lang$maxFixedArity = 0;
G__27044.cljs$lang$applyTo = (function (arglist__27046){
var x = cljs.core.seq(arglist__27046);
return G__27044__delegate(x);
});
G__27044.cljs$core$IFn$_invoke$arity$variadic = G__27044__delegate;
return G__27044;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1472829004107