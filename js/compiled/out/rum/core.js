// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__24195_SHARP_,p2__24194_SHARP_){
return p2__24194_SHARP_.call(null,p1__24195_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__24197_SHARP_,p2__24196_SHARP_){
return p2__24196_SHARP_.call(null,old_state,p1__24197_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__21445__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__24198_SHARP_){
return p1__24198_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__24203 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__24203,(0),null);
var next_state = cljs.core.nth.call(null,vec__24203,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__24199_SHARP_){
return p1__24199_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((cljs.core.some_QMARK_.call(null,key_fn))?((function (class$,key_fn){
return (function() { 
var G__24206__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)};
return React.createElement(class$,props);
};
var G__24206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24207__i = 0, G__24207__a = new Array(arguments.length -  0);
while (G__24207__i < G__24207__a.length) {G__24207__a[G__24207__i] = arguments[G__24207__i + 0]; ++G__24207__i;}
  args = new cljs.core.IndexedSeq(G__24207__a,0);
} 
return G__24206__delegate.call(this,args);};
G__24206.cljs$lang$maxFixedArity = 0;
G__24206.cljs$lang$applyTo = (function (arglist__24208){
var args = cljs.core.seq(arglist__24208);
return G__24206__delegate(args);
});
G__24206.cljs$core$IFn$_invoke$arity$variadic = G__24206__delegate;
return G__24206;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__24209__delegate = function (args){
var props = {":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)};
return React.createElement(class$,props);
};
var G__24209 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24210__i = 0, G__24210__a = new Array(arguments.length -  0);
while (G__24210__i < G__24210__a.length) {G__24210__a[G__24210__i] = arguments[G__24210__i + 0]; ++G__24210__i;}
  args = new cljs.core.IndexedSeq(G__24210__a,0);
} 
return G__24209__delegate.call(this,args);};
G__24209.cljs$lang$maxFixedArity = 0;
G__24209.cljs$lang$applyTo = (function (arglist__24211){
var args = cljs.core.seq(arglist__24211);
return G__24209__delegate(args);
});
G__24209.cljs$core$IFn$_invoke$arity$variadic = G__24209__delegate;
return G__24209;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__24212__delegate = function (args){
return React.createElement(class$,{":rum/args": args});
};
var G__24212 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24213__i = 0, G__24213__a = new Array(arguments.length -  0);
while (G__24213__i < G__24213__a.length) {G__24213__a[G__24213__i] = arguments[G__24213__i + 0]; ++G__24213__i;}
  args = new cljs.core.IndexedSeq(G__24213__a,0);
} 
return G__24212__delegate.call(this,args);};
G__24212.cljs$lang$maxFixedArity = 0;
G__24212.cljs$lang$applyTo = (function (arglist__24214){
var args = cljs.core.seq(arglist__24214);
return G__24212__delegate(args);
});
G__24212.cljs$core$IFn$_invoke$arity$variadic = G__24212__delegate;
return G__24212;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__21445__auto__ = (function (){var and__21433__auto__ = typeof window !== 'undefined';
if(and__21433__auto__){
var or__21445__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
var or__21445__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__21445__auto____$1)){
return or__21445__auto____$1;
} else {
var or__21445__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__21445__auto____$2)){
return or__21445__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__21433__auto__;
}
})();
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return ((function (or__21445__auto__){
return (function (p1__24215_SHARP_){
return setTimeout(p1__24215_SHARP_,(16));
});
;})(or__21445__auto__))
}
})();
rum.core.batch = (function (){var or__21445__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
var or__21445__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__21445__auto____$1)){
return or__21445__auto____$1;
} else {
return ((function (or__21445__auto____$1,or__21445__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__21445__auto____$1,or__21445__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__24222 = cljs.core.seq.call(null,queue);
var chunk__24224 = null;
var count__24225 = (0);
var i__24226 = (0);
while(true){
if((i__24226 < count__24225)){
var comp = cljs.core._nth.call(null,chunk__24224,i__24226);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24228 = seq__24222;
var G__24229 = chunk__24224;
var G__24230 = count__24225;
var G__24231 = (i__24226 + (1));
seq__24222 = G__24228;
chunk__24224 = G__24229;
count__24225 = G__24230;
i__24226 = G__24231;
continue;
} else {
var G__24232 = seq__24222;
var G__24233 = chunk__24224;
var G__24234 = count__24225;
var G__24235 = (i__24226 + (1));
seq__24222 = G__24232;
chunk__24224 = G__24233;
count__24225 = G__24234;
i__24226 = G__24235;
continue;
}
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__24222);
if(temp__6503__auto__){
var seq__24222__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24222__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__24222__$1);
var G__24236 = cljs.core.chunk_rest.call(null,seq__24222__$1);
var G__24237 = c__22348__auto__;
var G__24238 = cljs.core.count.call(null,c__22348__auto__);
var G__24239 = (0);
seq__24222 = G__24236;
chunk__24224 = G__24237;
count__24225 = G__24238;
i__24226 = G__24239;
continue;
} else {
var comp = cljs.core.first.call(null,seq__24222__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__24240 = cljs.core.next.call(null,seq__24222__$1);
var G__24241 = null;
var G__24242 = (0);
var G__24243 = (0);
seq__24222 = G__24240;
chunk__24224 = G__24241;
count__24225 = G__24242;
i__24226 = G__24243;
continue;
} else {
var G__24244 = cljs.core.next.call(null,seq__24222__$1);
var G__24245 = null;
var G__24246 = (0);
var G__24247 = (0);
seq__24222 = G__24244;
chunk__24224 = G__24245;
count__24225 = G__24246;
i__24226 = G__24247;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,{"key": key},null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,{"ref": ref},null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args24248 = [];
var len__22628__auto___24251 = arguments.length;
var i__22629__auto___24252 = (0);
while(true){
if((i__22629__auto___24252 < len__22628__auto___24251)){
args24248.push((arguments[i__22629__auto___24252]));

var G__24253 = (i__22629__auto___24252 + (1));
i__22629__auto___24252 = G__24253;
continue;
} else {
}
break;
}

var G__24250 = args24248.length;
switch (G__24250) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24248.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_24255 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__24256 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__24256,(0),null);
var next_state = cljs.core.nth.call(null,vec__24256,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24259_24271 = cljs.core.seq.call(null,old_reactions);
var chunk__24260_24272 = null;
var count__24261_24273 = (0);
var i__24262_24274 = (0);
while(true){
if((i__24262_24274 < count__24261_24273)){
var ref_24275 = cljs.core._nth.call(null,chunk__24260_24272,i__24262_24274);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24275)){
} else {
cljs.core.remove_watch.call(null,ref_24275,key);
}

var G__24276 = seq__24259_24271;
var G__24277 = chunk__24260_24272;
var G__24278 = count__24261_24273;
var G__24279 = (i__24262_24274 + (1));
seq__24259_24271 = G__24276;
chunk__24260_24272 = G__24277;
count__24261_24273 = G__24278;
i__24262_24274 = G__24279;
continue;
} else {
var temp__6503__auto___24280 = cljs.core.seq.call(null,seq__24259_24271);
if(temp__6503__auto___24280){
var seq__24259_24281__$1 = temp__6503__auto___24280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24259_24281__$1)){
var c__22348__auto___24282 = cljs.core.chunk_first.call(null,seq__24259_24281__$1);
var G__24283 = cljs.core.chunk_rest.call(null,seq__24259_24281__$1);
var G__24284 = c__22348__auto___24282;
var G__24285 = cljs.core.count.call(null,c__22348__auto___24282);
var G__24286 = (0);
seq__24259_24271 = G__24283;
chunk__24260_24272 = G__24284;
count__24261_24273 = G__24285;
i__24262_24274 = G__24286;
continue;
} else {
var ref_24287 = cljs.core.first.call(null,seq__24259_24281__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_24287)){
} else {
cljs.core.remove_watch.call(null,ref_24287,key);
}

var G__24288 = cljs.core.next.call(null,seq__24259_24281__$1);
var G__24289 = null;
var G__24290 = (0);
var G__24291 = (0);
seq__24259_24271 = G__24288;
chunk__24260_24272 = G__24289;
count__24261_24273 = G__24290;
i__24262_24274 = G__24291;
continue;
}
} else {
}
}
break;
}

var seq__24263_24292 = cljs.core.seq.call(null,new_reactions);
var chunk__24264_24293 = null;
var count__24265_24294 = (0);
var i__24266_24295 = (0);
while(true){
if((i__24266_24295 < count__24265_24294)){
var ref_24296 = cljs.core._nth.call(null,chunk__24264_24293,i__24266_24295);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24296)){
} else {
cljs.core.add_watch.call(null,ref_24296,key,((function (seq__24263_24292,chunk__24264_24293,count__24265_24294,i__24266_24295,ref_24296,comp,old_reactions,vec__24256,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24255){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24263_24292,chunk__24264_24293,count__24265_24294,i__24266_24295,ref_24296,comp,old_reactions,vec__24256,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24255))
);
}

var G__24297 = seq__24263_24292;
var G__24298 = chunk__24264_24293;
var G__24299 = count__24265_24294;
var G__24300 = (i__24266_24295 + (1));
seq__24263_24292 = G__24297;
chunk__24264_24293 = G__24298;
count__24265_24294 = G__24299;
i__24266_24295 = G__24300;
continue;
} else {
var temp__6503__auto___24301 = cljs.core.seq.call(null,seq__24263_24292);
if(temp__6503__auto___24301){
var seq__24263_24302__$1 = temp__6503__auto___24301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24263_24302__$1)){
var c__22348__auto___24303 = cljs.core.chunk_first.call(null,seq__24263_24302__$1);
var G__24304 = cljs.core.chunk_rest.call(null,seq__24263_24302__$1);
var G__24305 = c__22348__auto___24303;
var G__24306 = cljs.core.count.call(null,c__22348__auto___24303);
var G__24307 = (0);
seq__24263_24292 = G__24304;
chunk__24264_24293 = G__24305;
count__24265_24294 = G__24306;
i__24266_24295 = G__24307;
continue;
} else {
var ref_24308 = cljs.core.first.call(null,seq__24263_24302__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_24308)){
} else {
cljs.core.add_watch.call(null,ref_24308,key,((function (seq__24263_24292,chunk__24264_24293,count__24265_24294,i__24266_24295,ref_24308,seq__24263_24302__$1,temp__6503__auto___24301,comp,old_reactions,vec__24256,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24255){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__24263_24292,chunk__24264_24293,count__24265_24294,i__24266_24295,ref_24308,seq__24263_24302__$1,temp__6503__auto___24301,comp,old_reactions,vec__24256,dom,next_state,new_reactions,key,_STAR_reactions_STAR_24255))
);
}

var G__24309 = cljs.core.next.call(null,seq__24263_24302__$1);
var G__24310 = null;
var G__24311 = (0);
var G__24312 = (0);
seq__24263_24292 = G__24309;
chunk__24264_24293 = G__24310;
count__24265_24294 = G__24311;
i__24266_24295 = G__24312;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_24255;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_24313 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__24267_24314 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__24268_24315 = null;
var count__24269_24316 = (0);
var i__24270_24317 = (0);
while(true){
if((i__24270_24317 < count__24269_24316)){
var ref_24318 = cljs.core._nth.call(null,chunk__24268_24315,i__24270_24317);
cljs.core.remove_watch.call(null,ref_24318,key_24313);

var G__24319 = seq__24267_24314;
var G__24320 = chunk__24268_24315;
var G__24321 = count__24269_24316;
var G__24322 = (i__24270_24317 + (1));
seq__24267_24314 = G__24319;
chunk__24268_24315 = G__24320;
count__24269_24316 = G__24321;
i__24270_24317 = G__24322;
continue;
} else {
var temp__6503__auto___24323 = cljs.core.seq.call(null,seq__24267_24314);
if(temp__6503__auto___24323){
var seq__24267_24324__$1 = temp__6503__auto___24323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24267_24324__$1)){
var c__22348__auto___24325 = cljs.core.chunk_first.call(null,seq__24267_24324__$1);
var G__24326 = cljs.core.chunk_rest.call(null,seq__24267_24324__$1);
var G__24327 = c__22348__auto___24325;
var G__24328 = cljs.core.count.call(null,c__22348__auto___24325);
var G__24329 = (0);
seq__24267_24314 = G__24326;
chunk__24268_24315 = G__24327;
count__24269_24316 = G__24328;
i__24270_24317 = G__24329;
continue;
} else {
var ref_24330 = cljs.core.first.call(null,seq__24267_24324__$1);
cljs.core.remove_watch.call(null,ref_24330,key_24313);

var G__24331 = cljs.core.next.call(null,seq__24267_24324__$1);
var G__24332 = null;
var G__24333 = (0);
var G__24334 = (0);
seq__24267_24314 = G__24331;
chunk__24268_24315 = G__24332;
count__24269_24316 = G__24333;
i__24270_24317 = G__24334;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str("\n"),cljs.core.str("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24341 = arguments.length;
var i__22629__auto___24342 = (0);
while(true){
if((i__22629__auto___24342 < len__22628__auto___24341)){
args__22635__auto__.push((arguments[i__22629__auto___24342]));

var G__24343 = (i__22629__auto___24342 + (1));
i__22629__auto___24342 = G__24343;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((2) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22636__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__24338){
var map__24339 = p__24338;
var map__24339__$1 = ((((!((map__24339 == null)))?((((map__24339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24339):map__24339);
var options = map__24339__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq24335){
var G__24336 = cljs.core.first.call(null,seq24335);
var seq24335__$1 = cljs.core.next.call(null,seq24335);
var G__24337 = cljs.core.first.call(null,seq24335__$1);
var seq24335__$2 = cljs.core.next.call(null,seq24335__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__24336,G__24337,seq24335__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24347 = arguments.length;
var i__22629__auto___24348 = (0);
while(true){
if((i__22629__auto___24348 < len__22628__auto___24347)){
args__22635__auto__.push((arguments[i__22629__auto___24348]));

var G__24349 = (i__22629__auto___24348 + (1));
i__22629__auto___24348 = G__24349;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((2) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22636__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq24344){
var G__24345 = cljs.core.first.call(null,seq24344);
var seq24344__$1 = cljs.core.next.call(null,seq24344);
var G__24346 = cljs.core.first.call(null,seq24344__$1);
var seq24344__$2 = cljs.core.next.call(null,seq24344__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__24345,G__24346,seq24344__$2);
});


//# sourceMappingURL=core.js.map?rel=1471651205918