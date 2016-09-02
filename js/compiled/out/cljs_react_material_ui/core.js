// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljsjs.material_ui');
cljs_react_material_ui.core.kebab__GT_camel = (function cljs_react_material_ui$core$kebab__GT_camel(kw){
return cljs.core.keyword.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,kw),/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second)));
});
cljs_react_material_ui.core.walk_map_keys = (function cljs_react_material_ui$core$walk_map_keys(f,props){
var f_SINGLEQUOTE_ = (function (p__24428){
var vec__24429 = p__24428;
var k = cljs.core.nth.call(null,vec__24429,(0),null);
var v = cljs.core.nth.call(null,vec__24429,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,((function (f_SINGLEQUOTE_){
return (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,f_SINGLEQUOTE_,x));
} else {
return x;
}
});})(f_SINGLEQUOTE_))
,props);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,cljs.core.partial.call(null,cljs_react_material_ui.core.walk_map_keys,cljs_react_material_ui.core.kebab__GT_camel));
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(root_obj,type,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,(root_obj[type]),cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});
cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args24432 = [];
var len__22628__auto___24435 = arguments.length;
var i__22629__auto___24436 = (0);
while(true){
if((i__22629__auto___24436 < len__22628__auto___24435)){
args24432.push((arguments[i__22629__auto___24436]));

var G__24437 = (i__22629__auto___24436 + (1));
i__22629__auto___24436 = G__24437;
continue;
} else {
}
break;
}

var G__24434 = args24432.length;
switch (G__24434) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24432.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,raw_theme));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name.call(null,cljs_react_material_ui.core.kebab__GT_camel.call(null,color_key))]);
});
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24440 = arguments.length;
var i__22629__auto___24441 = (0);
while(true){
if((i__22629__auto___24441 < len__22628__auto___24440)){
args__22635__auto__.push((arguments[i__22629__auto___24441]));

var G__24442 = (i__22629__auto___24441 + (1));
i__22629__auto___24441 = G__24442;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq24439){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24439));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24444 = arguments.length;
var i__22629__auto___24445 = (0);
while(true){
if((i__22629__auto___24445 < len__22628__auto___24444)){
args__22635__auto__.push((arguments[i__22629__auto___24445]));

var G__24446 = (i__22629__auto___24445 + (1));
i__22629__auto___24445 = G__24446;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq24443){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24443));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24448 = arguments.length;
var i__22629__auto___24449 = (0);
while(true){
if((i__22629__auto___24449 < len__22628__auto___24448)){
args__22635__auto__.push((arguments[i__22629__auto___24449]));

var G__24450 = (i__22629__auto___24449 + (1));
i__22629__auto___24449 = G__24450;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq24447){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24447));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24452 = arguments.length;
var i__22629__auto___24453 = (0);
while(true){
if((i__22629__auto___24453 < len__22628__auto___24452)){
args__22635__auto__.push((arguments[i__22629__auto___24453]));

var G__24454 = (i__22629__auto___24453 + (1));
i__22629__auto___24453 = G__24454;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq24451){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24451));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24456 = arguments.length;
var i__22629__auto___24457 = (0);
while(true){
if((i__22629__auto___24457 < len__22628__auto___24456)){
args__22635__auto__.push((arguments[i__22629__auto___24457]));

var G__24458 = (i__22629__auto___24457 + (1));
i__22629__auto___24457 = G__24458;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq24455){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24455));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24460 = arguments.length;
var i__22629__auto___24461 = (0);
while(true){
if((i__22629__auto___24461 < len__22628__auto___24460)){
args__22635__auto__.push((arguments[i__22629__auto___24461]));

var G__24462 = (i__22629__auto___24461 + (1));
i__22629__auto___24461 = G__24462;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq24459){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24459));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24464 = arguments.length;
var i__22629__auto___24465 = (0);
while(true){
if((i__22629__auto___24465 < len__22628__auto___24464)){
args__22635__auto__.push((arguments[i__22629__auto___24465]));

var G__24466 = (i__22629__auto___24465 + (1));
i__22629__auto___24465 = G__24466;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq24463){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24463));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24468 = arguments.length;
var i__22629__auto___24469 = (0);
while(true){
if((i__22629__auto___24469 < len__22628__auto___24468)){
args__22635__auto__.push((arguments[i__22629__auto___24469]));

var G__24470 = (i__22629__auto___24469 + (1));
i__22629__auto___24469 = G__24470;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq24467){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24467));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24472 = arguments.length;
var i__22629__auto___24473 = (0);
while(true){
if((i__22629__auto___24473 < len__22628__auto___24472)){
args__22635__auto__.push((arguments[i__22629__auto___24473]));

var G__24474 = (i__22629__auto___24473 + (1));
i__22629__auto___24473 = G__24474;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq24471){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24471));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24476 = arguments.length;
var i__22629__auto___24477 = (0);
while(true){
if((i__22629__auto___24477 < len__22628__auto___24476)){
args__22635__auto__.push((arguments[i__22629__auto___24477]));

var G__24478 = (i__22629__auto___24477 + (1));
i__22629__auto___24477 = G__24478;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq24475){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24475));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24480 = arguments.length;
var i__22629__auto___24481 = (0);
while(true){
if((i__22629__auto___24481 < len__22628__auto___24480)){
args__22635__auto__.push((arguments[i__22629__auto___24481]));

var G__24482 = (i__22629__auto___24481 + (1));
i__22629__auto___24481 = G__24482;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq24479){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24479));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24484 = arguments.length;
var i__22629__auto___24485 = (0);
while(true){
if((i__22629__auto___24485 < len__22628__auto___24484)){
args__22635__auto__.push((arguments[i__22629__auto___24485]));

var G__24486 = (i__22629__auto___24485 + (1));
i__22629__auto___24485 = G__24486;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq24483){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24483));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24488 = arguments.length;
var i__22629__auto___24489 = (0);
while(true){
if((i__22629__auto___24489 < len__22628__auto___24488)){
args__22635__auto__.push((arguments[i__22629__auto___24489]));

var G__24490 = (i__22629__auto___24489 + (1));
i__22629__auto___24489 = G__24490;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq24487){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24487));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24492 = arguments.length;
var i__22629__auto___24493 = (0);
while(true){
if((i__22629__auto___24493 < len__22628__auto___24492)){
args__22635__auto__.push((arguments[i__22629__auto___24493]));

var G__24494 = (i__22629__auto___24493 + (1));
i__22629__auto___24493 = G__24494;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq24491){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24491));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24496 = arguments.length;
var i__22629__auto___24497 = (0);
while(true){
if((i__22629__auto___24497 < len__22628__auto___24496)){
args__22635__auto__.push((arguments[i__22629__auto___24497]));

var G__24498 = (i__22629__auto___24497 + (1));
i__22629__auto___24497 = G__24498;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq24495){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24495));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24500 = arguments.length;
var i__22629__auto___24501 = (0);
while(true){
if((i__22629__auto___24501 < len__22628__auto___24500)){
args__22635__auto__.push((arguments[i__22629__auto___24501]));

var G__24502 = (i__22629__auto___24501 + (1));
i__22629__auto___24501 = G__24502;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq24499){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24499));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24504 = arguments.length;
var i__22629__auto___24505 = (0);
while(true){
if((i__22629__auto___24505 < len__22628__auto___24504)){
args__22635__auto__.push((arguments[i__22629__auto___24505]));

var G__24506 = (i__22629__auto___24505 + (1));
i__22629__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq24503){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24503));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24508 = arguments.length;
var i__22629__auto___24509 = (0);
while(true){
if((i__22629__auto___24509 < len__22628__auto___24508)){
args__22635__auto__.push((arguments[i__22629__auto___24509]));

var G__24510 = (i__22629__auto___24509 + (1));
i__22629__auto___24509 = G__24510;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq24507){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24507));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24512 = arguments.length;
var i__22629__auto___24513 = (0);
while(true){
if((i__22629__auto___24513 < len__22628__auto___24512)){
args__22635__auto__.push((arguments[i__22629__auto___24513]));

var G__24514 = (i__22629__auto___24513 + (1));
i__22629__auto___24513 = G__24514;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq24511){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24511));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24516 = arguments.length;
var i__22629__auto___24517 = (0);
while(true){
if((i__22629__auto___24517 < len__22628__auto___24516)){
args__22635__auto__.push((arguments[i__22629__auto___24517]));

var G__24518 = (i__22629__auto___24517 + (1));
i__22629__auto___24517 = G__24518;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq24515){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24515));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24520 = arguments.length;
var i__22629__auto___24521 = (0);
while(true){
if((i__22629__auto___24521 < len__22628__auto___24520)){
args__22635__auto__.push((arguments[i__22629__auto___24521]));

var G__24522 = (i__22629__auto___24521 + (1));
i__22629__auto___24521 = G__24522;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq24519){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24519));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24524 = arguments.length;
var i__22629__auto___24525 = (0);
while(true){
if((i__22629__auto___24525 < len__22628__auto___24524)){
args__22635__auto__.push((arguments[i__22629__auto___24525]));

var G__24526 = (i__22629__auto___24525 + (1));
i__22629__auto___24525 = G__24526;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq24523){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24523));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24528 = arguments.length;
var i__22629__auto___24529 = (0);
while(true){
if((i__22629__auto___24529 < len__22628__auto___24528)){
args__22635__auto__.push((arguments[i__22629__auto___24529]));

var G__24530 = (i__22629__auto___24529 + (1));
i__22629__auto___24529 = G__24530;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq24527){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24527));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24532 = arguments.length;
var i__22629__auto___24533 = (0);
while(true){
if((i__22629__auto___24533 < len__22628__auto___24532)){
args__22635__auto__.push((arguments[i__22629__auto___24533]));

var G__24534 = (i__22629__auto___24533 + (1));
i__22629__auto___24533 = G__24534;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq24531){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24531));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24536 = arguments.length;
var i__22629__auto___24537 = (0);
while(true){
if((i__22629__auto___24537 < len__22628__auto___24536)){
args__22635__auto__.push((arguments[i__22629__auto___24537]));

var G__24538 = (i__22629__auto___24537 + (1));
i__22629__auto___24537 = G__24538;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq24535){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24535));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24540 = arguments.length;
var i__22629__auto___24541 = (0);
while(true){
if((i__22629__auto___24541 < len__22628__auto___24540)){
args__22635__auto__.push((arguments[i__22629__auto___24541]));

var G__24542 = (i__22629__auto___24541 + (1));
i__22629__auto___24541 = G__24542;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq24539){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24539));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24544 = arguments.length;
var i__22629__auto___24545 = (0);
while(true){
if((i__22629__auto___24545 < len__22628__auto___24544)){
args__22635__auto__.push((arguments[i__22629__auto___24545]));

var G__24546 = (i__22629__auto___24545 + (1));
i__22629__auto___24545 = G__24546;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq24543){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24543));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24548 = arguments.length;
var i__22629__auto___24549 = (0);
while(true){
if((i__22629__auto___24549 < len__22628__auto___24548)){
args__22635__auto__.push((arguments[i__22629__auto___24549]));

var G__24550 = (i__22629__auto___24549 + (1));
i__22629__auto___24549 = G__24550;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq24547){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24547));
});

cljs_react_material_ui.core.make_selectable = (function cljs_react_material_ui$core$make_selectable(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24552 = arguments.length;
var i__22629__auto___24553 = (0);
while(true){
if((i__22629__auto___24553 < len__22628__auto___24552)){
args__22635__auto__.push((arguments[i__22629__auto___24553]));

var G__24554 = (i__22629__auto___24553 + (1));
i__22629__auto___24553 = G__24554;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MakeSelectable",args);
});

cljs_react_material_ui.core.make_selectable.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.make_selectable.cljs$lang$applyTo = (function (seq24551){
return cljs_react_material_ui.core.make_selectable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24551));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24556 = arguments.length;
var i__22629__auto___24557 = (0);
while(true){
if((i__22629__auto___24557 < len__22628__auto___24556)){
args__22635__auto__.push((arguments[i__22629__auto___24557]));

var G__24558 = (i__22629__auto___24557 + (1));
i__22629__auto___24557 = G__24558;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq24555){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24555));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24560 = arguments.length;
var i__22629__auto___24561 = (0);
while(true){
if((i__22629__auto___24561 < len__22628__auto___24560)){
args__22635__auto__.push((arguments[i__22629__auto___24561]));

var G__24562 = (i__22629__auto___24561 + (1));
i__22629__auto___24561 = G__24562;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq24559){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24559));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24564 = arguments.length;
var i__22629__auto___24565 = (0);
while(true){
if((i__22629__auto___24565 < len__22628__auto___24564)){
args__22635__auto__.push((arguments[i__22629__auto___24565]));

var G__24566 = (i__22629__auto___24565 + (1));
i__22629__auto___24565 = G__24566;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq24563){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24563));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24568 = arguments.length;
var i__22629__auto___24569 = (0);
while(true){
if((i__22629__auto___24569 < len__22628__auto___24568)){
args__22635__auto__.push((arguments[i__22629__auto___24569]));

var G__24570 = (i__22629__auto___24569 + (1));
i__22629__auto___24569 = G__24570;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq24567){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24567));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24572 = arguments.length;
var i__22629__auto___24573 = (0);
while(true){
if((i__22629__auto___24573 < len__22628__auto___24572)){
args__22635__auto__.push((arguments[i__22629__auto___24573]));

var G__24574 = (i__22629__auto___24573 + (1));
i__22629__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq24571){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24571));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24576 = arguments.length;
var i__22629__auto___24577 = (0);
while(true){
if((i__22629__auto___24577 < len__22628__auto___24576)){
args__22635__auto__.push((arguments[i__22629__auto___24577]));

var G__24578 = (i__22629__auto___24577 + (1));
i__22629__auto___24577 = G__24578;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq24575){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24575));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24580 = arguments.length;
var i__22629__auto___24581 = (0);
while(true){
if((i__22629__auto___24581 < len__22628__auto___24580)){
args__22635__auto__.push((arguments[i__22629__auto___24581]));

var G__24582 = (i__22629__auto___24581 + (1));
i__22629__auto___24581 = G__24582;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq24579){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24579));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24584 = arguments.length;
var i__22629__auto___24585 = (0);
while(true){
if((i__22629__auto___24585 < len__22628__auto___24584)){
args__22635__auto__.push((arguments[i__22629__auto___24585]));

var G__24586 = (i__22629__auto___24585 + (1));
i__22629__auto___24585 = G__24586;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq24583){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24583));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24588 = arguments.length;
var i__22629__auto___24589 = (0);
while(true){
if((i__22629__auto___24589 < len__22628__auto___24588)){
args__22635__auto__.push((arguments[i__22629__auto___24589]));

var G__24590 = (i__22629__auto___24589 + (1));
i__22629__auto___24589 = G__24590;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq24587){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24587));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24592 = arguments.length;
var i__22629__auto___24593 = (0);
while(true){
if((i__22629__auto___24593 < len__22628__auto___24592)){
args__22635__auto__.push((arguments[i__22629__auto___24593]));

var G__24594 = (i__22629__auto___24593 + (1));
i__22629__auto___24593 = G__24594;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq24591){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24591));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24596 = arguments.length;
var i__22629__auto___24597 = (0);
while(true){
if((i__22629__auto___24597 < len__22628__auto___24596)){
args__22635__auto__.push((arguments[i__22629__auto___24597]));

var G__24598 = (i__22629__auto___24597 + (1));
i__22629__auto___24597 = G__24598;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq24595){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24595));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24600 = arguments.length;
var i__22629__auto___24601 = (0);
while(true){
if((i__22629__auto___24601 < len__22628__auto___24600)){
args__22635__auto__.push((arguments[i__22629__auto___24601]));

var G__24602 = (i__22629__auto___24601 + (1));
i__22629__auto___24601 = G__24602;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq24599){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24599));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24604 = arguments.length;
var i__22629__auto___24605 = (0);
while(true){
if((i__22629__auto___24605 < len__22628__auto___24604)){
args__22635__auto__.push((arguments[i__22629__auto___24605]));

var G__24606 = (i__22629__auto___24605 + (1));
i__22629__auto___24605 = G__24606;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq24603){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24603));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24608 = arguments.length;
var i__22629__auto___24609 = (0);
while(true){
if((i__22629__auto___24609 < len__22628__auto___24608)){
args__22635__auto__.push((arguments[i__22629__auto___24609]));

var G__24610 = (i__22629__auto___24609 + (1));
i__22629__auto___24609 = G__24610;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq24607){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24607));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24612 = arguments.length;
var i__22629__auto___24613 = (0);
while(true){
if((i__22629__auto___24613 < len__22628__auto___24612)){
args__22635__auto__.push((arguments[i__22629__auto___24613]));

var G__24614 = (i__22629__auto___24613 + (1));
i__22629__auto___24613 = G__24614;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq24611){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24611));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24616 = arguments.length;
var i__22629__auto___24617 = (0);
while(true){
if((i__22629__auto___24617 < len__22628__auto___24616)){
args__22635__auto__.push((arguments[i__22629__auto___24617]));

var G__24618 = (i__22629__auto___24617 + (1));
i__22629__auto___24617 = G__24618;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq24615){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24615));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24620 = arguments.length;
var i__22629__auto___24621 = (0);
while(true){
if((i__22629__auto___24621 < len__22628__auto___24620)){
args__22635__auto__.push((arguments[i__22629__auto___24621]));

var G__24622 = (i__22629__auto___24621 + (1));
i__22629__auto___24621 = G__24622;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq24619){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24619));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24624 = arguments.length;
var i__22629__auto___24625 = (0);
while(true){
if((i__22629__auto___24625 < len__22628__auto___24624)){
args__22635__auto__.push((arguments[i__22629__auto___24625]));

var G__24626 = (i__22629__auto___24625 + (1));
i__22629__auto___24625 = G__24626;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq24623){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24623));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24628 = arguments.length;
var i__22629__auto___24629 = (0);
while(true){
if((i__22629__auto___24629 < len__22628__auto___24628)){
args__22635__auto__.push((arguments[i__22629__auto___24629]));

var G__24630 = (i__22629__auto___24629 + (1));
i__22629__auto___24629 = G__24630;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq24627){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24627));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24632 = arguments.length;
var i__22629__auto___24633 = (0);
while(true){
if((i__22629__auto___24633 < len__22628__auto___24632)){
args__22635__auto__.push((arguments[i__22629__auto___24633]));

var G__24634 = (i__22629__auto___24633 + (1));
i__22629__auto___24633 = G__24634;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq24631){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24631));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24636 = arguments.length;
var i__22629__auto___24637 = (0);
while(true){
if((i__22629__auto___24637 < len__22628__auto___24636)){
args__22635__auto__.push((arguments[i__22629__auto___24637]));

var G__24638 = (i__22629__auto___24637 + (1));
i__22629__auto___24637 = G__24638;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq24635){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24635));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24640 = arguments.length;
var i__22629__auto___24641 = (0);
while(true){
if((i__22629__auto___24641 < len__22628__auto___24640)){
args__22635__auto__.push((arguments[i__22629__auto___24641]));

var G__24642 = (i__22629__auto___24641 + (1));
i__22629__auto___24641 = G__24642;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq24639){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24639));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24644 = arguments.length;
var i__22629__auto___24645 = (0);
while(true){
if((i__22629__auto___24645 < len__22628__auto___24644)){
args__22635__auto__.push((arguments[i__22629__auto___24645]));

var G__24646 = (i__22629__auto___24645 + (1));
i__22629__auto___24645 = G__24646;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq24643){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24643));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24648 = arguments.length;
var i__22629__auto___24649 = (0);
while(true){
if((i__22629__auto___24649 < len__22628__auto___24648)){
args__22635__auto__.push((arguments[i__22629__auto___24649]));

var G__24650 = (i__22629__auto___24649 + (1));
i__22629__auto___24649 = G__24650;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq24647){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24647));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24652 = arguments.length;
var i__22629__auto___24653 = (0);
while(true){
if((i__22629__auto___24653 < len__22628__auto___24652)){
args__22635__auto__.push((arguments[i__22629__auto___24653]));

var G__24654 = (i__22629__auto___24653 + (1));
i__22629__auto___24653 = G__24654;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq24651){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24651));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24656 = arguments.length;
var i__22629__auto___24657 = (0);
while(true){
if((i__22629__auto___24657 < len__22628__auto___24656)){
args__22635__auto__.push((arguments[i__22629__auto___24657]));

var G__24658 = (i__22629__auto___24657 + (1));
i__22629__auto___24657 = G__24658;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq24655){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24655));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24660 = arguments.length;
var i__22629__auto___24661 = (0);
while(true){
if((i__22629__auto___24661 < len__22628__auto___24660)){
args__22635__auto__.push((arguments[i__22629__auto___24661]));

var G__24662 = (i__22629__auto___24661 + (1));
i__22629__auto___24661 = G__24662;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq24659){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24659));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24664 = arguments.length;
var i__22629__auto___24665 = (0);
while(true){
if((i__22629__auto___24665 < len__22628__auto___24664)){
args__22635__auto__.push((arguments[i__22629__auto___24665]));

var G__24666 = (i__22629__auto___24665 + (1));
i__22629__auto___24665 = G__24666;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq24663){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24663));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24668 = arguments.length;
var i__22629__auto___24669 = (0);
while(true){
if((i__22629__auto___24669 < len__22628__auto___24668)){
args__22635__auto__.push((arguments[i__22629__auto___24669]));

var G__24670 = (i__22629__auto___24669 + (1));
i__22629__auto___24669 = G__24670;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq24667){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24667));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24672 = arguments.length;
var i__22629__auto___24673 = (0);
while(true){
if((i__22629__auto___24673 < len__22628__auto___24672)){
args__22635__auto__.push((arguments[i__22629__auto___24673]));

var G__24674 = (i__22629__auto___24673 + (1));
i__22629__auto___24673 = G__24674;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq24671){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24671));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24676 = arguments.length;
var i__22629__auto___24677 = (0);
while(true){
if((i__22629__auto___24677 < len__22628__auto___24676)){
args__22635__auto__.push((arguments[i__22629__auto___24677]));

var G__24678 = (i__22629__auto___24677 + (1));
i__22629__auto___24677 = G__24678;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq24675){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24675));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24680 = arguments.length;
var i__22629__auto___24681 = (0);
while(true){
if((i__22629__auto___24681 < len__22628__auto___24680)){
args__22635__auto__.push((arguments[i__22629__auto___24681]));

var G__24682 = (i__22629__auto___24681 + (1));
i__22629__auto___24681 = G__24682;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq24679){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24679));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24684 = arguments.length;
var i__22629__auto___24685 = (0);
while(true){
if((i__22629__auto___24685 < len__22628__auto___24684)){
args__22635__auto__.push((arguments[i__22629__auto___24685]));

var G__24686 = (i__22629__auto___24685 + (1));
i__22629__auto___24685 = G__24686;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq24683){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24683));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24688 = arguments.length;
var i__22629__auto___24689 = (0);
while(true){
if((i__22629__auto___24689 < len__22628__auto___24688)){
args__22635__auto__.push((arguments[i__22629__auto___24689]));

var G__24690 = (i__22629__auto___24689 + (1));
i__22629__auto___24689 = G__24690;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq24687){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24687));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__22635__auto__ = [];
var len__22628__auto___24692 = arguments.length;
var i__22629__auto___24693 = (0);
while(true){
if((i__22629__auto___24693 < len__22628__auto___24692)){
args__22635__auto__.push((arguments[i__22629__auto___24693]));

var G__24694 = (i__22629__auto___24693 + (1));
i__22629__auto___24693 = G__24694;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq24691){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24691));
});


//# sourceMappingURL=core.js.map?rel=1471651206441