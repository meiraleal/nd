// Compiled by ClojureScript 1.9.89 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.munging');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__22158__auto__ = (((value == null))?null:value);
var m__22159__auto__ = (devtools.format._header[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,value);
} else {
var m__22159__auto____$1 = (devtools.format._header["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__22158__auto__ = (((value == null))?null:value);
var m__22159__auto__ = (devtools.format._has_body[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,value);
} else {
var m__22159__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__22158__auto__ = (((value == null))?null:value);
var m__22159__auto__ = (devtools.format._body[goog.typeOf(x__22158__auto__)]);
if(!((m__22159__auto__ == null))){
return m__22159__auto__.call(null,value);
} else {
var m__22159__auto____$1 = (devtools.format._body["_"]);
if(!((m__22159__auto____$1 == null))){
return m__22159__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format._STAR_current_state_STAR_ = null;
devtools.format.get_current_state = (function devtools$format$get_current_state(){
return devtools.format._STAR_current_state_STAR_;
});
devtools.format.update_current_state_BANG_ = (function devtools$format$update_current_state_BANG_(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30806 = arguments.length;
var i__22629__auto___30807 = (0);
while(true){
if((i__22629__auto___30807 < len__22628__auto___30806)){
args__22635__auto__.push((arguments[i__22629__auto___30807]));

var G__30808 = (i__22629__auto___30807 + (1));
i__22629__auto___30807 = G__30808;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return devtools.format._STAR_current_state_STAR_ = cljs.core.apply.call(null,f,devtools.format._STAR_current_state_STAR_,args);
});

devtools.format.update_current_state_BANG_.cljs$lang$maxFixedArity = (1);

devtools.format.update_current_state_BANG_.cljs$lang$applyTo = (function (seq30804){
var G__30805 = cljs.core.first.call(null,seq30804);
var seq30804__$1 = cljs.core.next.call(null,seq30804);
return devtools.format.update_current_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30805,seq30804__$1);
});

devtools.format.push_object_to_current_history_BANG_ = (function devtools$format$push_object_to_current_history_BANG_(object){
return devtools.format.update_current_state_BANG_.call(null,cljs.core.update,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.conj,object);
});
devtools.format.get_current_history = (function devtools$format$get_current_history(){
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(devtools.format.get_current_state.call(null));
});
devtools.format.cljs_function_QMARK_ = (function devtools$format$cljs_function_QMARK_(value){
var and__21433__auto__ = cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"disable-cljs-fn-formatting","disable-cljs-fn-formatting",1903786837)));
if(and__21433__auto__){
var and__21433__auto____$1 = !(cljs.core.var_QMARK_.call(null,value));
if(and__21433__auto____$1){
return devtools.munging.cljs_fn_QMARK_.call(null,value);
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
});
devtools.format.cljs_value_QMARK_ = (function devtools$format$cljs_value_QMARK_(value){
var or__21445__auto__ = (cljs.core.truth_(goog.isObject(value))?(function (){var temp__6503__auto__ = goog.object.get(value,"constructor");
if(cljs.core.truth_(temp__6503__auto__)){
var o__30622__auto__ = temp__6503__auto__;
return goog.object.get(o__30622__auto__,"cljs$lang$type");
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return devtools.format.cljs_function_QMARK_.call(null,value);
}
});
devtools.format.prevent_recursion_QMARK_ = (function devtools$format$prevent_recursion_QMARK_(){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606).cljs$core$IFn$_invoke$arity$1(devtools.format.get_current_state.call(null)));
});
devtools.format.template = (function devtools$format$template(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30816 = arguments.length;
var i__22629__auto___30817 = (0);
while(true){
if((i__22629__auto___30817 < len__22628__auto___30816)){
args__22635__auto__.push((arguments[i__22629__auto___30817]));

var G__30818 = (i__22629__auto___30817 + (1));
i__22629__auto___30817 = G__30818;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((2) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((2)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22636__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var resolve_pref = (function (pref_or_val){
if((pref_or_val instanceof cljs.core.Keyword)){
return devtools.prefs.pref.call(null,pref_or_val);
} else {
return pref_or_val;
}
});
var tag__$1 = resolve_pref.call(null,tag);
var style__$1 = resolve_pref.call(null,style);
var js_array = [tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?{}:{"style": style__$1})];
var seq__30812_30819 = cljs.core.seq.call(null,children);
var chunk__30813_30820 = null;
var count__30814_30821 = (0);
var i__30815_30822 = (0);
while(true){
if((i__30815_30822 < count__30814_30821)){
var child_30823 = cljs.core._nth.call(null,chunk__30813_30820,i__30815_30822);
if(cljs.core.some_QMARK_.call(null,child_30823)){
if(cljs.core.coll_QMARK_.call(null,child_30823)){
(js_array["push"]).apply(js_array,cljs.core.into_array.call(null,child_30823));
} else {
js_array.push(resolve_pref.call(null,child_30823));
}
} else {
}

var G__30824 = seq__30812_30819;
var G__30825 = chunk__30813_30820;
var G__30826 = count__30814_30821;
var G__30827 = (i__30815_30822 + (1));
seq__30812_30819 = G__30824;
chunk__30813_30820 = G__30825;
count__30814_30821 = G__30826;
i__30815_30822 = G__30827;
continue;
} else {
var temp__6503__auto___30828 = cljs.core.seq.call(null,seq__30812_30819);
if(temp__6503__auto___30828){
var seq__30812_30829__$1 = temp__6503__auto___30828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30812_30829__$1)){
var c__22348__auto___30830 = cljs.core.chunk_first.call(null,seq__30812_30829__$1);
var G__30831 = cljs.core.chunk_rest.call(null,seq__30812_30829__$1);
var G__30832 = c__22348__auto___30830;
var G__30833 = cljs.core.count.call(null,c__22348__auto___30830);
var G__30834 = (0);
seq__30812_30819 = G__30831;
chunk__30813_30820 = G__30832;
count__30814_30821 = G__30833;
i__30815_30822 = G__30834;
continue;
} else {
var child_30835 = cljs.core.first.call(null,seq__30812_30829__$1);
if(cljs.core.some_QMARK_.call(null,child_30835)){
if(cljs.core.coll_QMARK_.call(null,child_30835)){
(js_array["push"]).apply(js_array,cljs.core.into_array.call(null,child_30835));
} else {
js_array.push(resolve_pref.call(null,child_30835));
}
} else {
}

var G__30836 = cljs.core.next.call(null,seq__30812_30829__$1);
var G__30837 = null;
var G__30838 = (0);
var G__30839 = (0);
seq__30812_30819 = G__30836;
chunk__30813_30820 = G__30837;
count__30814_30821 = G__30838;
i__30815_30822 = G__30839;
continue;
}
} else {
}
}
break;
}

return js_array;
});

devtools.format.template.cljs$lang$maxFixedArity = (2);

devtools.format.template.cljs$lang$applyTo = (function (seq30809){
var G__30810 = cljs.core.first.call(null,seq30809);
var seq30809__$1 = cljs.core.next.call(null,seq30809);
var G__30811 = cljs.core.first.call(null,seq30809__$1);
var seq30809__$2 = cljs.core.next.call(null,seq30809__$1);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(G__30810,G__30811,seq30809__$2);
});

devtools.format.concat_templates = (function devtools$format$concat_templates(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30842 = arguments.length;
var i__22629__auto___30843 = (0);
while(true){
if((i__22629__auto___30843 < len__22628__auto___30842)){
args__22635__auto__.push((arguments[i__22629__auto___30843]));

var G__30844 = (i__22629__auto___30843 + (1));
i__22629__auto___30843 = G__30844;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return devtools.format.concat_templates.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

devtools.format.concat_templates.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,templates)));
});

devtools.format.concat_templates.cljs$lang$maxFixedArity = (1);

devtools.format.concat_templates.cljs$lang$applyTo = (function (seq30840){
var G__30841 = cljs.core.first.call(null,seq30840);
var seq30840__$1 = cljs.core.next.call(null,seq30840);
return devtools.format.concat_templates.cljs$core$IFn$_invoke$arity$variadic(G__30841,seq30840__$1);
});

devtools.format.extend_template = (function devtools$format$extend_template(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30847 = arguments.length;
var i__22629__auto___30848 = (0);
while(true){
if((i__22629__auto___30848 < len__22628__auto___30847)){
args__22635__auto__.push((arguments[i__22629__auto___30848]));

var G__30849 = (i__22629__auto___30848 + (1));
i__22629__auto___30848 = G__30849;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return devtools.format.extend_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

devtools.format.extend_template.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.format.concat_templates.call(null,template,args);
});

devtools.format.extend_template.cljs$lang$maxFixedArity = (1);

devtools.format.extend_template.cljs$lang$applyTo = (function (seq30845){
var G__30846 = cljs.core.first.call(null,seq30845);
var seq30845__$1 = cljs.core.next.call(null,seq30845);
return devtools.format.extend_template.cljs$core$IFn$_invoke$arity$variadic(G__30846,seq30845__$1);
});

devtools.format.surrogate_QMARK_ = (function devtools$format$surrogate_QMARK_(value){
var and__21433__auto__ = !((value == null));
if(and__21433__auto__){
return (value[devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"surrogate-key","surrogate-key",391132006))]);
} else {
return and__21433__auto__;
}
});
devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args30850 = [];
var len__22628__auto___30856 = arguments.length;
var i__22629__auto___30857 = (0);
while(true){
if((i__22629__auto___30857 < len__22628__auto___30856)){
args30850.push((arguments[i__22629__auto___30857]));

var G__30858 = (i__22629__auto___30857 + (1));
i__22629__auto___30857 = G__30858;
continue;
} else {
}
break;
}

var G__30852 = args30850.length;
switch (G__30852) {
case 2:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30850.length)].join('')));

}
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.format.surrogate.call(null,object,header,true);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,has_body){
return devtools.format.surrogate.call(null,object,header,has_body,null);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,has_body,body_template){
var G__30853 = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"surrogate-key","surrogate-key",391132006));
var obj30855 = {"target":object,"header":header,"hasBody":has_body,"bodyTemplate":body_template};
(obj30855[G__30853] = true);

return obj30855;
});

devtools.format.surrogate.cljs$lang$maxFixedArity = 4;

devtools.format.get_target_object = (function devtools$format$get_target_object(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return goog.object.get(value,"target");
} else {
return value;
}
});
devtools.format.positions = (function devtools$format$positions(pred,coll){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(cljs.core.truth_(pred.call(null,x))){
return idx;
} else {
return null;
}
}),coll);
});
devtools.format.remove_positions = (function devtools$format$remove_positions(coll,indices){
return cljs.core.keep_indexed.call(null,(function (idx,x){
if(!(cljs.core.contains_QMARK_.call(null,indices,idx))){
return x;
} else {
return null;
}
}),coll);
});
devtools.format.is_circular_QMARK__BANG_ = (function devtools$format$is_circular_QMARK__BANG_(object){
var current_state = devtools.format.get_current_state.call(null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020).cljs$core$IFn$_invoke$arity$1(current_state))){
devtools.format.update_current_state_BANG_.call(null,cljs.core.dissoc,new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020));

return false;
} else {
var history = devtools.format.get_current_history.call(null);
return cljs.core.some.call(null,((function (history,current_state){
return (function (p1__30860_SHARP_){
return (p1__30860_SHARP_ === object);
});})(history,current_state))
,history);
}
});
devtools.format.circular_reference_template = (function devtools$format$circular_reference_template(content_group){
var base_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"circular-reference-wrapper-style","circular-reference-wrapper-style",-329208502),devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"circular-reference-symbol-style","circular-reference-symbol-style",276269693),new cljs.core.Keyword(null,"circular-reference-symbol","circular-reference-symbol",1686290571)));
return devtools.format.concat_templates.call(null,base_template,content_group);
});
devtools.format.reference = (function devtools$format$reference(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30867 = arguments.length;
var i__22629__auto___30868 = (0);
while(true){
if((i__22629__auto___30868 < len__22628__auto___30867)){
args__22635__auto__.push((arguments[i__22629__auto___30868]));

var G__30869 = (i__22629__auto___30868 + (1));
i__22629__auto___30868 = G__30869;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30863){
var vec__30864 = p__30863;
var state_override = cljs.core.nth.call(null,vec__30864,(0),null);
return ["object",{"object": object, "config": cljs.core.merge.call(null,devtools.format.get_current_state.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020),true], null),state_override)}];
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq30861){
var G__30862 = cljs.core.first.call(null,seq30861);
var seq30861__$1 = cljs.core.next.call(null,seq30861);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__30862,seq30861__$1);
});

devtools.format.native_reference = (function devtools$format$native_reference(object){
return devtools.format.reference.call(null,object,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prevent-recursion","prevent-recursion",-1498371606),true], null));
});
devtools.format.index_template = (function devtools$format$index_template(value){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"index-style","index-style",93813430),value,new cljs.core.Keyword(null,"line-index-separator","line-index-separator",-1735989246));
});
devtools.format.number_template = (function devtools$format$number_template(value){
if(cljs.core.integer_QMARK_.call(null,value)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"integer-style","integer-style",1568434578),value);
} else {
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"float-style","float-style",705926672),value);
}
});
devtools.format.meta_template = (function devtools$format$meta_template(value){
var header_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-style","meta-style",1528213407),"meta");
var body_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-body-style","meta-body-style",-1858094980),devtools.format.build_header.call(null,value));
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-reference-style","meta-reference-style",-1930118462),devtools.format.reference.call(null,devtools.format.surrogate.call(null,value,header_template,true,body_template)));
});
devtools.format.abbreviate_long_string = (function devtools$format$abbreviate_long_string(string){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)),string))),cljs.core.str(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-abbreviation-marker","string-abbreviation-marker",-347785112))),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)),string)))].join('');
});
devtools.format.string_template = (function devtools$format$string_template(source_string){
var dq = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dq","dq",-1690275860));
var re_nl = (new RegExp("\n","g"));
var inline_string = source_string.replace(re_nl,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206)));
var max_inline_string_size = (devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)) + devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
if((cljs.core.count.call(null,inline_string) <= max_inline_string_size)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"string-style","string-style",744195825),[cljs.core.str(dq),cljs.core.str(inline_string),cljs.core.str(dq)].join(''));
} else {
var abbreviated_string_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"string-style","string-style",744195825),[cljs.core.str(dq),cljs.core.str(devtools.format.abbreviate_long_string.call(null,inline_string)),cljs.core.str(dq)].join(''));
var string_with_nl_markers = source_string.replace(re_nl,[cljs.core.str(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206))),cljs.core.str("\n")].join(''));
var body_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"expanded-string-style","expanded-string-style",-543781397),string_with_nl_markers);
return devtools.format.reference.call(null,devtools.format.surrogate.call(null,source_string,abbreviated_string_template,true,body_template));
}
});
devtools.format.cljs_function_body_template = (function devtools$format$cljs_function_body_template(fn_obj,ns,_name,args,prefix_template){
var make_args_template = (function (args__$1){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"aligned-li-style","aligned-li-style",43721341),devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-multi-arity-args-indent-style","fn-multi-arity-args-indent-style",-1170401159),prefix_template),devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-args-style","fn-args-style",-2141623900),args__$1));
});
var args_lists_templates = (((cljs.core.count.call(null,args) > (1)))?cljs.core.map.call(null,make_args_template,args):null);
var ns_template = ((!(cljs.core.empty_QMARK_.call(null,ns)))?devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"aligned-li-style","aligned-li-style",43721341),devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-ns-symbol-style","fn-ns-symbol-style",1159201702),new cljs.core.Keyword(null,"fn-ns-symbol","fn-ns-symbol",1731967194)),devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-ns-name-style","fn-ns-name-style",-21387751),ns)):null);
var native_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"aligned-li-style","aligned-li-style",43721341),devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-native-symbol-style","fn-native-symbol-style",-409172783),new cljs.core.Keyword(null,"fn-native-symbol","fn-native-symbol",-1116952368)),devtools.format.native_reference.call(null,fn_obj));
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"body-style","body-style",1462943820),devtools.format.template.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-no-margin-style","standard-ol-no-margin-style",-1701969586),args_lists_templates,ns_template,native_template));
});
devtools.format.cljs_function_template = (function devtools$format$cljs_function_template(fn_obj){
var vec__30874 = devtools.munging.parse_fn_info.call(null,fn_obj);
var ns = cljs.core.nth.call(null,vec__30874,(0),null);
var name = cljs.core.nth.call(null,vec__30874,(1),null);
var args_open_symbol = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"args-open-symbol","args-open-symbol",-1336957557));
var args_close_symbol = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"args-close-symbol","args-close-symbol",777697973));
var multi_arity_symbol = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653));
var spacer_symbol = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"spacer","spacer",2067425139));
var rest_symbol = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"rest-symbol","rest-symbol",1021371174));
var args_strings = devtools.munging.extract_args_strings.call(null,fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var multi_arity_QMARK_ = (cljs.core.count.call(null,args_strings) > (1));
var args = cljs.core.map.call(null,((function (vec__30874,ns,name,args_open_symbol,args_close_symbol,multi_arity_symbol,spacer_symbol,rest_symbol,args_strings,multi_arity_QMARK_){
return (function (p1__30870_SHARP_){
return [cljs.core.str(args_open_symbol),cljs.core.str(p1__30870_SHARP_),cljs.core.str(args_close_symbol)].join('');
});})(vec__30874,ns,name,args_open_symbol,args_close_symbol,multi_arity_symbol,spacer_symbol,rest_symbol,args_strings,multi_arity_QMARK_))
,args_strings);
var multi_arity_marker = [cljs.core.str(args_open_symbol),cljs.core.str(multi_arity_symbol),cljs.core.str(args_close_symbol)].join('');
var args_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-args-style","fn-args-style",-2141623900),((multi_arity_QMARK_)?multi_arity_marker:cljs.core.first.call(null,args)));
var lambda_QMARK_ = cljs.core.empty_QMARK_.call(null,name);
var fn_name = ((!(lambda_QMARK_))?devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-name-style","fn-name-style",-573451611),name):null);
var symbol_template = ((lambda_QMARK_)?devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-lambda-symbol-style","fn-lambda-symbol-style",632180693),new cljs.core.Keyword(null,"fn-lambda-symbol","fn-lambda-symbol",-1232014673)):devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-symbol-style","fn-symbol-style",-338553703),new cljs.core.Keyword(null,"fn-symbol","fn-symbol",1764040739)));
var prefix_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-prefix-style","fn-prefix-style",991677739),symbol_template,fn_name);
var header_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"fn-header-style","fn-header-style",985447749),prefix_template,args_template);
var body_template = cljs.core.partial.call(null,devtools.format.cljs_function_body_template,fn_obj,ns,name,args,prefix_template);
return devtools.format.reference.call(null,devtools.format.surrogate.call(null,fn_obj,header_template,true,body_template));
});
devtools.format.bool_QMARK_ = (function devtools$format$bool_QMARK_(value){
return (value === true) || (value === false);
});
devtools.format.atomic_template = (function devtools$format$atomic_template(value){
if((value == null)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
if(cljs.core.truth_(devtools.format.bool_QMARK_.call(null,value))){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"bool-style","bool-style",-1275737743),value);
} else {
if(typeof value === 'string'){
return devtools.format.string_template.call(null,value);
} else {
if(typeof value === 'number'){
return devtools.format.number_template.call(null,value);
} else {
if((value instanceof cljs.core.Keyword)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"keyword-style","keyword-style",-780643937),[cljs.core.str(value)].join(''));
} else {
if((value instanceof cljs.core.Symbol)){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"symbol-style","symbol-style",1022654848),[cljs.core.str(value)].join(''));
} else {
if(cljs.core.truth_(devtools.format.cljs_function_QMARK_.call(null,value))){
return devtools.format.cljs_function_template.call(null,value);
} else {
return null;
}
}
}
}
}
}
}
});
devtools.format.abbreviated_QMARK_ = (function devtools$format$abbreviated_QMARK_(template){
return cljs.core.some.call(null,(function (p1__30877_SHARP_){
return cljs.core._EQ_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935)),p1__30877_SHARP_);
}),template);
});
devtools.format.seq_count_is_greater_or_equal_QMARK_ = (function devtools$format$seq_count_is_greater_or_equal_QMARK_(seq,limit){
var chunk = cljs.core.take.call(null,limit,seq);
return cljs.core._EQ_.call(null,cljs.core.count.call(null,chunk),limit);
});
devtools.format.expandable_QMARK_ = (function devtools$format$expandable_QMARK_(obj){
var and__21433__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"seqables-always-expandable","seqables-always-expandable",-1995087215));
if(cljs.core.truth_(and__21433__auto__)){
var and__21433__auto____$1 = cljs.core.seqable_QMARK_.call(null,obj);
if(and__21433__auto____$1){
return devtools.format.seq_count_is_greater_or_equal_QMARK_.call(null,obj,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"min-sequable-count-for-expansion","min-sequable-count-for-expansion",1409206097)));
} else {
return and__21433__auto____$1;
}
} else {
return and__21433__auto__;
}
});

/**
* @constructor
 * @implements {devtools.format.Object}
 * @implements {cljs.core.IWriter}
*/
devtools.format.TemplateWriter = (function (group){
this.group = group;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devtools.format.TemplateWriter.prototype.merge = (function (a){
var self__ = this;
var _ = this;
return self__.group.push.apply(self__.group,a);
});

devtools.format.TemplateWriter.prototype.get_group = (function (){
var self__ = this;
var _ = this;
return self__.group;
});

devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return self__.group.push(o);
});

devtools.format.TemplateWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

devtools.format.TemplateWriter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"group","group",-2071839637,null)], null);
});

devtools.format.TemplateWriter.cljs$lang$type = true;

devtools.format.TemplateWriter.cljs$lang$ctorStr = "devtools.format/TemplateWriter";

devtools.format.TemplateWriter.cljs$lang$ctorPrWriter = (function (this__22097__auto__,writer__22098__auto__,opt__22099__auto__){
return cljs.core._write.call(null,writer__22098__auto__,"devtools.format/TemplateWriter");
});

devtools.format.__GT_TemplateWriter = (function devtools$format$__GT_TemplateWriter(group){
return (new devtools.format.TemplateWriter(group));
});

devtools.format.make_template_writer = (function devtools$format$make_template_writer(){
return (new devtools.format.TemplateWriter([]));
});
devtools.format.wrap_group_in_reference_if_needed = (function devtools$format$wrap_group_in_reference_if_needed(group,obj){
if(cljs.core.truth_((function (){var or__21445__auto__ = devtools.format.expandable_QMARK_.call(null,obj);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return devtools.format.abbreviated_QMARK_.call(null,group);
}
})())){
return [devtools.format.reference.call(null,devtools.format.surrogate.call(null,obj,devtools.format.concat_templates.call(null,devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"header-style","header-style",-2122121341)),group)))];
} else {
return group;
}
});
devtools.format.wrap_group_in_circular_warning_if_needed = (function devtools$format$wrap_group_in_circular_warning_if_needed(group,circular_QMARK_){
if(cljs.core.truth_(circular_QMARK_)){
return [devtools.format.circular_reference_template.call(null,group)];
} else {
return group;
}
});
devtools.format.detect_edge_case_and_patch_it = (function devtools$format$detect_edge_case_and_patch_it(group,obj){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(5))) && (cljs.core._EQ_.call(null,(group[(0)]),"#object[")) && (cljs.core._EQ_.call(null,(group[(4)]),"\"]"))) || ((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(5))) && (cljs.core._EQ_.call(null,(group[(0)]),"#object[")) && (cljs.core._EQ_.call(null,(group[(4)]),"]"))) || ((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (cljs.core._EQ_.call(null,(group[(0)]),"#object[")) && (cljs.core._EQ_.call(null,(group[(2)]),"]")))){
return [devtools.format.native_reference.call(null,obj)];
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,group),(3))) && (cljs.core._EQ_.call(null,(group[(0)]),"#<")) && (cljs.core._EQ_.call(null,[cljs.core.str(obj)].join(''),(group[(1)]))) && (cljs.core._EQ_.call(null,(group[(2)]),">"))){
return [(group[(0)]),devtools.format.native_reference.call(null,obj),(group[(2)])];
} else {
return group;

}
}
});
devtools.format.alt_printer_impl = (function devtools$format$alt_printer_impl(obj,writer,opts){
var _STAR_current_state_STAR_30883 = devtools.format._STAR_current_state_STAR_;
devtools.format._STAR_current_state_STAR_ = devtools.format.get_current_state.call(null);

try{if(cljs.core.truth_((function (){var and__21433__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"entered-reference","entered-reference",2117851020).cljs$core$IFn$_invoke$arity$1(devtools.format._STAR_current_state_STAR_));
if(and__21433__auto__){
try{if(!((obj == null))){
if((false) || (obj.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,obj);
}
}catch (e30886){var e__30635__auto__ = e30886;
return false;
}} else {
return and__21433__auto__;
}
})())){
return cljs.core._write.call(null,writer,devtools.format.reference.call(null,obj));
} else {
var circular_QMARK_ = devtools.format.is_circular_QMARK__BANG_.call(null,obj);
devtools.format.push_object_to_current_history_BANG_.call(null,obj);

var temp__6501__auto__ = devtools.format.atomic_template.call(null,obj);
if(cljs.core.truth_(temp__6501__auto__)){
var tmpl = temp__6501__auto__;
return cljs.core._write.call(null,writer,tmpl);
} else {
var inner_writer = devtools.format.make_template_writer.call(null);
var default_impl = new cljs.core.Keyword(null,"fallback-impl","fallback-impl",-1501286995).cljs$core$IFn$_invoke$arity$1(opts);
var inner_opts = ((cljs.core._EQ_.call(null,cljs.core._STAR_print_level_STAR_,(1)))?cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"print-length","print-length",1931866356),(0)):opts);
default_impl.call(null,obj,inner_writer,inner_opts);

var final_group = devtools.format.wrap_group_in_circular_warning_if_needed.call(null,devtools.format.wrap_group_in_reference_if_needed.call(null,devtools.format.detect_edge_case_and_patch_it.call(null,inner_writer.get_group(),obj),obj),circular_QMARK_);
return writer.merge(final_group);
}
}
}finally {devtools.format._STAR_current_state_STAR_ = _STAR_current_state_STAR_30883;
}});
devtools.format.managed_pr_str = (function devtools$format$managed_pr_str(value,style,print_level){
var tmpl = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),style);
var writer = (new devtools.format.TemplateWriter(tmpl));
var _STAR_print_level_STAR_30889_30890 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = print_level;

try{cljs.core.pr_seq_writer.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null),writer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alt-impl","alt-impl",670969595),devtools.format.alt_printer_impl,new cljs.core.Keyword(null,"print-length","print-length",1931866356),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-header-elements","max-header-elements",713629864)),new cljs.core.Keyword(null,"more-marker","more-marker",-14717935),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"more-marker","more-marker",-14717935))], null));
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_30889_30890;
}
return tmpl;
});
devtools.format.build_header = (function devtools$format$build_header(value){
var value_template = devtools.format.managed_pr_str.call(null,value,new cljs.core.Keyword(null,"header-style","header-style",-2122121341),(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413)) + (1)));
var temp__6501__auto__ = (cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-meta-data","print-meta-data",1409048509)))?cljs.core.meta.call(null,value):null);
if(cljs.core.truth_(temp__6501__auto__)){
var meta_data = temp__6501__auto__;
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"meta-wrapper-style","meta-wrapper-style",-1627075237),value_template,devtools.format.meta_template.call(null,meta_data));
} else {
return value_template;
}
});
devtools.format.build_header_wrapped = (function devtools$format$build_header_wrapped(value){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"cljs-style","cljs-style",1984116061),devtools.format.build_header.call(null,value));
});
devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args30892 = [];
var len__22628__auto___30895 = arguments.length;
var i__22629__auto___30896 = (0);
while(true){
if((i__22629__auto___30896 < len__22628__auto___30895)){
args30892.push((arguments[i__22629__auto___30896]));

var G__30897 = (i__22629__auto___30896 + (1));
i__22629__auto___30896 = G__30897;
continue;
} else {
}
break;
}

var G__30894 = args30892.length;
switch (G__30894) {
case 1:
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30892.length)].join('')));

}
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$1 = (function (lines){
return devtools.format.standard_body_template.call(null,lines,true);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$2 = (function (lines,margin_QMARK_){
var ol_style = (cljs.core.truth_(margin_QMARK_)?new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615):new cljs.core.Keyword(null,"standard-ol-no-margin-style","standard-ol-no-margin-style",-1701969586));
var li_style = (cljs.core.truth_(margin_QMARK_)?new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955):new cljs.core.Keyword(null,"standard-li-no-margin-style","standard-li-no-margin-style",87138485));
return devtools.format.template.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),ol_style,cljs.core.map.call(null,((function (ol_style,li_style){
return (function (p1__30891_SHARP_){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),li_style,p1__30891_SHARP_);
});})(ol_style,li_style))
,lines));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = 2;

devtools.format.body_line_template = (function devtools$format$body_line_template(index,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.format.index_template.call(null,index),devtools.format.managed_pr_str.call(null,value,new cljs.core.Keyword(null,"item-style","item-style",-188747722),(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"body-line-max-print-level","body-line-max-print-level",571158623)) + (1)))], null);
});
devtools.format.prepare_body_lines = (function devtools$format$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,work)){
return lines;
} else {
var G__30899 = cljs.core.rest.call(null,work);
var G__30900 = (index + (1));
var G__30901 = cljs.core.conj.call(null,lines,devtools.format.body_line_template.call(null,index,cljs.core.first.call(null,work)));
work = G__30899;
index = G__30900;
lines = G__30901;
continue;
}
break;
}
});
devtools.format.body_lines_templates = (function devtools$format$body_lines_templates(value,starting_index){
var seq = cljs.core.seq.call(null,value);
var max_number_body_items = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624));
var chunk = cljs.core.take.call(null,max_number_body_items,seq);
var rest = cljs.core.drop.call(null,max_number_body_items,seq);
var lines = devtools.format.prepare_body_lines.call(null,chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.take.call(null,(1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_template = devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"body-items-more-label-style","body-items-more-label-style",-1440170470),devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"body-items-more-label","body-items-more-label",-1561152123)));
var surrogate_object = devtools.format.surrogate.call(null,rest,more_label_template);
(surrogate_object["startingIndex"] = (starting_index + max_number_body_items));

return cljs.core.conj.call(null,lines,devtools.format.reference.call(null,surrogate_object));
}
});
devtools.format.build_body = (function devtools$format$build_body(value,starting_index){
var is_body_QMARK_ = (starting_index === (0));
var result = devtools.format.standard_body_template.call(null,devtools.format.body_lines_templates.call(null,value,starting_index),is_body_QMARK_);
if(is_body_QMARK_){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"body-style","body-style",1462943820),result);
} else {
return result;
}
});
devtools.format.standard_reference = (function devtools$format$standard_reference(target){
return devtools.format.template.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.template.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.reference.call(null,target)));
});
devtools.format.build_surrogate_body = (function devtools$format$build_surrogate_body(value){
var temp__6501__auto__ = (value["bodyTemplate"]);
if(cljs.core.truth_(temp__6501__auto__)){
var body_template = temp__6501__auto__;
if(cljs.core.fn_QMARK_.call(null,body_template)){
return body_template.call(null);
} else {
return body_template;
}
} else {
var target = (value["target"]);
if(cljs.core.seqable_QMARK_.call(null,target)){
var starting_index = (function (){var or__21445__auto__ = (value["startingIndex"]);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return (0);
}
})();
return devtools.format.build_body.call(null,target,starting_index);
} else {
return devtools.format.standard_reference.call(null,target);
}
}
});
devtools.format.want_value_QMARK__STAR_ = (function devtools$format$want_value_QMARK__STAR_(value){
if(cljs.core.truth_(devtools.format.prevent_recursion_QMARK_.call(null))){
return false;
} else {
var or__21445__auto__ = devtools.format.cljs_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return devtools.format.surrogate_QMARK_.call(null,value);
}

}
});
devtools.format.header_STAR_ = (function devtools$format$header_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return (value["header"]);
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e30904){var e__30635__auto__ = e30904;
return false;
}})())){
return devtools.format._header.call(null,value);
} else {
return devtools.format.build_header_wrapped.call(null,value);

}
}
});
devtools.format.has_body_STAR_ = (function devtools$format$has_body_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return (value["hasBody"]);
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e30908){var e__30635__auto__ = e30908;
return false;
}})())){
return devtools.format._has_body.call(null,value);
} else {
return false;

}
}
});
devtools.format.body_STAR_ = (function devtools$format$body_STAR_(value){
if(cljs.core.truth_(devtools.format.surrogate_QMARK_.call(null,value))){
return devtools.format.build_surrogate_body.call(null,value);
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e30912){var e__30635__auto__ = e30912;
return false;
}})())){
return devtools.format._body.call(null,value);
} else {
return null;
}
}
});
devtools.format.config_wrapper = (function devtools$format$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR_30915 = devtools.format._STAR_current_state_STAR_;
devtools.format._STAR_current_state_STAR_ = (function (){var or__21445__auto__ = config;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return raw_fn.call(null,value);
}finally {devtools.format._STAR_current_state_STAR_ = _STAR_current_state_STAR_30915;
}});
});
devtools.format.want_value_QMARK_ = devtools.format.config_wrapper.call(null,devtools.format.want_value_QMARK__STAR_);
devtools.format.header = devtools.format.config_wrapper.call(null,devtools.format.header_STAR_);
devtools.format.has_body = devtools.format.config_wrapper.call(null,devtools.format.has_body_STAR_);
devtools.format.body = devtools.format.config_wrapper.call(null,devtools.format.body_STAR_);
devtools.format.wrap_with_exception_guard = (function devtools$format$wrap_with_exception_guard(f){
return (function() { 
var G__30918__delegate = function (args){
try{return cljs.core.apply.call(null,f,args);
}catch (e30917){var e = e30917;
console.error("CLJS DevTools internal error:",e);

return null;
}};
var G__30918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30919__i = 0, G__30919__a = new Array(arguments.length -  0);
while (G__30919__i < G__30919__a.length) {G__30919__a[G__30919__i] = arguments[G__30919__i + 0]; ++G__30919__i;}
  args = new cljs.core.IndexedSeq(G__30919__a,0);
} 
return G__30918__delegate.call(this,args);};
G__30918.cljs$lang$maxFixedArity = 0;
G__30918.cljs$lang$applyTo = (function (arglist__30920){
var args = cljs.core.seq(arglist__30920);
return G__30918__delegate(args);
});
G__30918.cljs$core$IFn$_invoke$arity$variadic = G__30918__delegate;
return G__30918;
})()
;
});
devtools.format.build_api_call = (function devtools$format$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__21445__auto__ = devtools.prefs.pref.call(null,pre_handler_key);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__21445__auto__ = devtools.prefs.pref.call(null,post_handler_key);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = pre_handler.call(null,value);
var result = (cljs.core.truth_(devtools.format.want_value_QMARK_.call(null,preprocessed_value,config))?raw_fn.call(null,preprocessed_value,config):null);
return post_handler.call(null,result);
});
return devtools.format.wrap_with_exception_guard.call(null,handler);
});
devtools.format.header_api_call = devtools.format.build_api_call.call(null,devtools.format.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.format.has_body_api_call = devtools.format.build_api_call.call(null,devtools.format.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.format.body_api_call = devtools.format.build_api_call.call(null,devtools.format.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

//# sourceMappingURL=format.js.map?rel=1471651299923