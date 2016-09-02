// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.userAgent.product');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj33961 = {"detail":data};
return obj33961;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__21433__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__21433__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args33966 = [];
var len__22628__auto___33972 = arguments.length;
var i__22629__auto___33973 = (0);
while(true){
if((i__22629__auto___33973 < len__22628__auto___33972)){
args33966.push((arguments[i__22629__auto___33973]));

var G__33974 = (i__22629__auto___33973 + (1));
i__22629__auto___33973 = G__33974;
continue;
} else {
}
break;
}

var G__33968 = args33966.length;
switch (G__33968) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33966.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__33969 = cljs.core._EQ_;
var expr__33970 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__33969.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__33970))){
return ((function (pred__33969,expr__33970){
return (function (p1__33962_SHARP_){
return console.warn(p1__33962_SHARP_);
});
;})(pred__33969,expr__33970))
} else {
if(cljs.core.truth_(pred__33969.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__33970))){
return ((function (pred__33969,expr__33970){
return (function (p1__33963_SHARP_){
return console.debug(p1__33963_SHARP_);
});
;})(pred__33969,expr__33970))
} else {
if(cljs.core.truth_(pred__33969.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__33970))){
return ((function (pred__33969,expr__33970){
return (function (p1__33964_SHARP_){
return console.error(p1__33964_SHARP_);
});
;})(pred__33969,expr__33970))
} else {
return ((function (pred__33969,expr__33970){
return (function (p1__33965_SHARP_){
return console.log(p1__33965_SHARP_);
});
;})(pred__33969,expr__33970))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__33976){
var map__33979 = p__33976;
var map__33979__$1 = ((((!((map__33979 == null)))?((((map__33979.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33979.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33979):map__33979);
var opts = map__33979__$1;
var eval_fn = cljs.core.get.call(null,map__33979__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1471651246129