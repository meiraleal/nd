// Compiled by ClojureScript 1.9.89 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args22688 = [];
var len__22628__auto___22708 = arguments.length;
var i__22629__auto___22709 = (0);
while(true){
if((i__22629__auto___22709 < len__22628__auto___22708)){
args22688.push((arguments[i__22629__auto___22709]));

var G__22710 = (i__22629__auto___22709 + (1));
i__22629__auto___22709 = G__22710;
continue;
} else {
}
break;
}

var G__22690 = args22688.length;
switch (G__22690) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22688.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__22691 = opts;
var map__22691__$1 = ((((!((map__22691 == null)))?((((map__22691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22691):map__22691);
var ref = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__22691__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__22693 = cljs.core.count.call(null,refs);
switch (G__22693) {
case (1):
var vec__22694 = refs;
var a = cljs.core.nth.call(null,vec__22694,(0),null);
return ((function (vec__22694,a,G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__22694,a,G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__22697 = refs;
var a = cljs.core.nth.call(null,vec__22697,(0),null);
var b = cljs.core.nth.call(null,vec__22697,(1),null);
return ((function (vec__22697,a,b,G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__22697,a,b,G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__22700 = refs;
var a = cljs.core.nth.call(null,vec__22700,(0),null);
var b = cljs.core.nth.call(null,vec__22700,(1),null);
var c = cljs.core.nth.call(null,vec__22700,(2),null);
return ((function (vec__22700,a,b,c,G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__22700,a,b,c,G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__22693,map__22691,map__22691__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__22703 = ref;
cljs.core.reset_BANG_.call(null,G__22703,recalc.call(null));

return G__22703;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__22691,map__22691__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__22691,map__22691__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__22691,map__22691__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__22691,map__22691__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__22704_22713 = cljs.core.seq.call(null,refs);
var chunk__22705_22714 = null;
var count__22706_22715 = (0);
var i__22707_22716 = (0);
while(true){
if((i__22707_22716 < count__22706_22715)){
var ref_22717__$1 = cljs.core._nth.call(null,chunk__22705_22714,i__22707_22716);
cljs.core.add_watch.call(null,ref_22717__$1,key,watch);

var G__22718 = seq__22704_22713;
var G__22719 = chunk__22705_22714;
var G__22720 = count__22706_22715;
var G__22721 = (i__22707_22716 + (1));
seq__22704_22713 = G__22718;
chunk__22705_22714 = G__22719;
count__22706_22715 = G__22720;
i__22707_22716 = G__22721;
continue;
} else {
var temp__6503__auto___22722 = cljs.core.seq.call(null,seq__22704_22713);
if(temp__6503__auto___22722){
var seq__22704_22723__$1 = temp__6503__auto___22722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22704_22723__$1)){
var c__22348__auto___22724 = cljs.core.chunk_first.call(null,seq__22704_22723__$1);
var G__22725 = cljs.core.chunk_rest.call(null,seq__22704_22723__$1);
var G__22726 = c__22348__auto___22724;
var G__22727 = cljs.core.count.call(null,c__22348__auto___22724);
var G__22728 = (0);
seq__22704_22713 = G__22725;
chunk__22705_22714 = G__22726;
count__22706_22715 = G__22727;
i__22707_22716 = G__22728;
continue;
} else {
var ref_22729__$1 = cljs.core.first.call(null,seq__22704_22723__$1);
cljs.core.add_watch.call(null,ref_22729__$1,key,watch);

var G__22730 = cljs.core.next.call(null,seq__22704_22723__$1);
var G__22731 = null;
var G__22732 = (0);
var G__22733 = (0);
seq__22704_22713 = G__22730;
chunk__22705_22714 = G__22731;
count__22706_22715 = G__22732;
i__22707_22716 = G__22733;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1471651204018