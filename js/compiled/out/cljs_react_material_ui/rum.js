// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs_react_material_ui.rum');
goog.require('cljs.core');
goog.require('rum.core');
goog.require('cljs_react_material_ui.core');
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.app_bar = (function() { 
var cljs_react_material_ui$rum$app_bar__delegate = function (args__24393__auto__){
var vec__24701 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24701,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24701,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.AppBar24697 = rum.core.build_defc.call(null,((function (vec__24701,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24701,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"AppBar24697").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"AppBar",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$app_bar = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24704__i = 0, G__24704__a = new Array(arguments.length -  0);
while (G__24704__i < G__24704__a.length) {G__24704__a[G__24704__i] = arguments[G__24704__i + 0]; ++G__24704__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24704__a,0);
} 
return cljs_react_material_ui$rum$app_bar__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$app_bar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$app_bar.cljs$lang$applyTo = (function (arglist__24705){
var args__24393__auto__ = cljs.core.seq(arglist__24705);
return cljs_react_material_ui$rum$app_bar__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$app_bar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$app_bar__delegate;
return cljs_react_material_ui$rum$app_bar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.auto_complete = (function() { 
var cljs_react_material_ui$rum$auto_complete__delegate = function (args__24393__auto__){
var vec__24710 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24710,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24710,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.AutoComplete24706 = rum.core.build_defc.call(null,((function (vec__24710,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24710,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"AutoComplete24706").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"AutoComplete",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$auto_complete = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24713__i = 0, G__24713__a = new Array(arguments.length -  0);
while (G__24713__i < G__24713__a.length) {G__24713__a[G__24713__i] = arguments[G__24713__i + 0]; ++G__24713__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24713__a,0);
} 
return cljs_react_material_ui$rum$auto_complete__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$auto_complete.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$auto_complete.cljs$lang$applyTo = (function (arglist__24714){
var args__24393__auto__ = cljs.core.seq(arglist__24714);
return cljs_react_material_ui$rum$auto_complete__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$auto_complete.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$auto_complete__delegate;
return cljs_react_material_ui$rum$auto_complete;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.avatar = (function() { 
var cljs_react_material_ui$rum$avatar__delegate = function (args__24393__auto__){
var vec__24719 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24719,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24719,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Avatar24715 = rum.core.build_defc.call(null,((function (vec__24719,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24719,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Avatar24715").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Avatar",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$avatar = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24722__i = 0, G__24722__a = new Array(arguments.length -  0);
while (G__24722__i < G__24722__a.length) {G__24722__a[G__24722__i] = arguments[G__24722__i + 0]; ++G__24722__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24722__a,0);
} 
return cljs_react_material_ui$rum$avatar__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$avatar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$avatar.cljs$lang$applyTo = (function (arglist__24723){
var args__24393__auto__ = cljs.core.seq(arglist__24723);
return cljs_react_material_ui$rum$avatar__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$avatar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$avatar__delegate;
return cljs_react_material_ui$rum$avatar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.badge = (function() { 
var cljs_react_material_ui$rum$badge__delegate = function (args__24393__auto__){
var vec__24728 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24728,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24728,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Badge24724 = rum.core.build_defc.call(null,((function (vec__24728,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24728,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Badge24724").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Badge",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$badge = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24731__i = 0, G__24731__a = new Array(arguments.length -  0);
while (G__24731__i < G__24731__a.length) {G__24731__a[G__24731__i] = arguments[G__24731__i + 0]; ++G__24731__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24731__a,0);
} 
return cljs_react_material_ui$rum$badge__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$badge.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$badge.cljs$lang$applyTo = (function (arglist__24732){
var args__24393__auto__ = cljs.core.seq(arglist__24732);
return cljs_react_material_ui$rum$badge__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$badge.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$badge__delegate;
return cljs_react_material_ui$rum$badge;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card = (function() { 
var cljs_react_material_ui$rum$card__delegate = function (args__24393__auto__){
var vec__24737 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24737,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24737,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Card24733 = rum.core.build_defc.call(null,((function (vec__24737,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24737,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Card24733").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Card",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$card = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24740__i = 0, G__24740__a = new Array(arguments.length -  0);
while (G__24740__i < G__24740__a.length) {G__24740__a[G__24740__i] = arguments[G__24740__i + 0]; ++G__24740__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24740__a,0);
} 
return cljs_react_material_ui$rum$card__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$card.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card.cljs$lang$applyTo = (function (arglist__24741){
var args__24393__auto__ = cljs.core.seq(arglist__24741);
return cljs_react_material_ui$rum$card__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$card.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card__delegate;
return cljs_react_material_ui$rum$card;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_actions = (function() { 
var cljs_react_material_ui$rum$card_actions__delegate = function (args__24393__auto__){
var vec__24746 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24746,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24746,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.CardActions24742 = rum.core.build_defc.call(null,((function (vec__24746,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24746,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"CardActions24742").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"CardActions",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$card_actions = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24749__i = 0, G__24749__a = new Array(arguments.length -  0);
while (G__24749__i < G__24749__a.length) {G__24749__a[G__24749__i] = arguments[G__24749__i + 0]; ++G__24749__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24749__a,0);
} 
return cljs_react_material_ui$rum$card_actions__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$card_actions.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_actions.cljs$lang$applyTo = (function (arglist__24750){
var args__24393__auto__ = cljs.core.seq(arglist__24750);
return cljs_react_material_ui$rum$card_actions__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$card_actions.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_actions__delegate;
return cljs_react_material_ui$rum$card_actions;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_header = (function() { 
var cljs_react_material_ui$rum$card_header__delegate = function (args__24393__auto__){
var vec__24755 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24755,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24755,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.CardHeader24751 = rum.core.build_defc.call(null,((function (vec__24755,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24755,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"CardHeader24751").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"CardHeader",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$card_header = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24758__i = 0, G__24758__a = new Array(arguments.length -  0);
while (G__24758__i < G__24758__a.length) {G__24758__a[G__24758__i] = arguments[G__24758__i + 0]; ++G__24758__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24758__a,0);
} 
return cljs_react_material_ui$rum$card_header__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$card_header.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_header.cljs$lang$applyTo = (function (arglist__24759){
var args__24393__auto__ = cljs.core.seq(arglist__24759);
return cljs_react_material_ui$rum$card_header__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$card_header.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_header__delegate;
return cljs_react_material_ui$rum$card_header;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_media = (function() { 
var cljs_react_material_ui$rum$card_media__delegate = function (args__24393__auto__){
var vec__24764 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24764,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24764,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.CardMedia24760 = rum.core.build_defc.call(null,((function (vec__24764,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24764,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"CardMedia24760").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"CardMedia",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$card_media = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24767__i = 0, G__24767__a = new Array(arguments.length -  0);
while (G__24767__i < G__24767__a.length) {G__24767__a[G__24767__i] = arguments[G__24767__i + 0]; ++G__24767__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24767__a,0);
} 
return cljs_react_material_ui$rum$card_media__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$card_media.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_media.cljs$lang$applyTo = (function (arglist__24768){
var args__24393__auto__ = cljs.core.seq(arglist__24768);
return cljs_react_material_ui$rum$card_media__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$card_media.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_media__delegate;
return cljs_react_material_ui$rum$card_media;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_title = (function() { 
var cljs_react_material_ui$rum$card_title__delegate = function (args__24393__auto__){
var vec__24773 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24773,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24773,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.CardTitle24769 = rum.core.build_defc.call(null,((function (vec__24773,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24773,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"CardTitle24769").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"CardTitle",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$card_title = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24776__i = 0, G__24776__a = new Array(arguments.length -  0);
while (G__24776__i < G__24776__a.length) {G__24776__a[G__24776__i] = arguments[G__24776__i + 0]; ++G__24776__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24776__a,0);
} 
return cljs_react_material_ui$rum$card_title__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$card_title.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_title.cljs$lang$applyTo = (function (arglist__24777){
var args__24393__auto__ = cljs.core.seq(arglist__24777);
return cljs_react_material_ui$rum$card_title__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$card_title.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_title__delegate;
return cljs_react_material_ui$rum$card_title;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.card_text = (function() { 
var cljs_react_material_ui$rum$card_text__delegate = function (args__24393__auto__){
var vec__24782 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24782,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24782,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.CardText24778 = rum.core.build_defc.call(null,((function (vec__24782,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24782,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"CardText24778").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"CardText",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$card_text = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24785__i = 0, G__24785__a = new Array(arguments.length -  0);
while (G__24785__i < G__24785__a.length) {G__24785__a[G__24785__i] = arguments[G__24785__i + 0]; ++G__24785__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24785__a,0);
} 
return cljs_react_material_ui$rum$card_text__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$card_text.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$card_text.cljs$lang$applyTo = (function (arglist__24786){
var args__24393__auto__ = cljs.core.seq(arglist__24786);
return cljs_react_material_ui$rum$card_text__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$card_text.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$card_text__delegate;
return cljs_react_material_ui$rum$card_text;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.checkbox = (function() { 
var cljs_react_material_ui$rum$checkbox__delegate = function (args__24393__auto__){
var vec__24791 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24791,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24791,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Checkbox24787 = rum.core.build_defc.call(null,((function (vec__24791,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24791,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Checkbox24787").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Checkbox",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$checkbox = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24794__i = 0, G__24794__a = new Array(arguments.length -  0);
while (G__24794__i < G__24794__a.length) {G__24794__a[G__24794__i] = arguments[G__24794__i + 0]; ++G__24794__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24794__a,0);
} 
return cljs_react_material_ui$rum$checkbox__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$checkbox.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$checkbox.cljs$lang$applyTo = (function (arglist__24795){
var args__24393__auto__ = cljs.core.seq(arglist__24795);
return cljs_react_material_ui$rum$checkbox__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$checkbox.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$checkbox__delegate;
return cljs_react_material_ui$rum$checkbox;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.chip = (function() { 
var cljs_react_material_ui$rum$chip__delegate = function (args__24393__auto__){
var vec__24800 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24800,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24800,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Chip24796 = rum.core.build_defc.call(null,((function (vec__24800,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24800,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Chip24796").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Chip",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$chip = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24803__i = 0, G__24803__a = new Array(arguments.length -  0);
while (G__24803__i < G__24803__a.length) {G__24803__a[G__24803__i] = arguments[G__24803__i + 0]; ++G__24803__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24803__a,0);
} 
return cljs_react_material_ui$rum$chip__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$chip.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$chip.cljs$lang$applyTo = (function (arglist__24804){
var args__24393__auto__ = cljs.core.seq(arglist__24804);
return cljs_react_material_ui$rum$chip__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$chip.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$chip__delegate;
return cljs_react_material_ui$rum$chip;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.circular_progress = (function() { 
var cljs_react_material_ui$rum$circular_progress__delegate = function (args__24393__auto__){
var vec__24809 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24809,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24809,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.CircularProgress24805 = rum.core.build_defc.call(null,((function (vec__24809,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24809,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"CircularProgress24805").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"CircularProgress",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$circular_progress = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24812__i = 0, G__24812__a = new Array(arguments.length -  0);
while (G__24812__i < G__24812__a.length) {G__24812__a[G__24812__i] = arguments[G__24812__i + 0]; ++G__24812__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24812__a,0);
} 
return cljs_react_material_ui$rum$circular_progress__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$circular_progress.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$circular_progress.cljs$lang$applyTo = (function (arglist__24813){
var args__24393__auto__ = cljs.core.seq(arglist__24813);
return cljs_react_material_ui$rum$circular_progress__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$circular_progress.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$circular_progress__delegate;
return cljs_react_material_ui$rum$circular_progress;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.date_picker = (function() { 
var cljs_react_material_ui$rum$date_picker__delegate = function (args__24393__auto__){
var vec__24818 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24818,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24818,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.DatePicker24814 = rum.core.build_defc.call(null,((function (vec__24818,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24818,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"DatePicker24814").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"DatePicker",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$date_picker = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24821__i = 0, G__24821__a = new Array(arguments.length -  0);
while (G__24821__i < G__24821__a.length) {G__24821__a[G__24821__i] = arguments[G__24821__i + 0]; ++G__24821__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24821__a,0);
} 
return cljs_react_material_ui$rum$date_picker__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$date_picker.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$date_picker.cljs$lang$applyTo = (function (arglist__24822){
var args__24393__auto__ = cljs.core.seq(arglist__24822);
return cljs_react_material_ui$rum$date_picker__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$date_picker.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$date_picker__delegate;
return cljs_react_material_ui$rum$date_picker;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.dialog = (function() { 
var cljs_react_material_ui$rum$dialog__delegate = function (args__24393__auto__){
var vec__24827 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24827,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24827,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Dialog24823 = rum.core.build_defc.call(null,((function (vec__24827,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24827,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Dialog24823").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Dialog",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$dialog = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24830__i = 0, G__24830__a = new Array(arguments.length -  0);
while (G__24830__i < G__24830__a.length) {G__24830__a[G__24830__i] = arguments[G__24830__i + 0]; ++G__24830__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24830__a,0);
} 
return cljs_react_material_ui$rum$dialog__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$dialog.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$dialog.cljs$lang$applyTo = (function (arglist__24831){
var args__24393__auto__ = cljs.core.seq(arglist__24831);
return cljs_react_material_ui$rum$dialog__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$dialog.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$dialog__delegate;
return cljs_react_material_ui$rum$dialog;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.divider = (function() { 
var cljs_react_material_ui$rum$divider__delegate = function (args__24393__auto__){
var vec__24836 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24836,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24836,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Divider24832 = rum.core.build_defc.call(null,((function (vec__24836,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24836,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Divider24832").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Divider",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$divider = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24839__i = 0, G__24839__a = new Array(arguments.length -  0);
while (G__24839__i < G__24839__a.length) {G__24839__a[G__24839__i] = arguments[G__24839__i + 0]; ++G__24839__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24839__a,0);
} 
return cljs_react_material_ui$rum$divider__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$divider.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$divider.cljs$lang$applyTo = (function (arglist__24840){
var args__24393__auto__ = cljs.core.seq(arglist__24840);
return cljs_react_material_ui$rum$divider__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$divider.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$divider__delegate;
return cljs_react_material_ui$rum$divider;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.drawer = (function() { 
var cljs_react_material_ui$rum$drawer__delegate = function (args__24393__auto__){
var vec__24845 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24845,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24845,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Drawer24841 = rum.core.build_defc.call(null,((function (vec__24845,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24845,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Drawer24841").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Drawer",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$drawer = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24848__i = 0, G__24848__a = new Array(arguments.length -  0);
while (G__24848__i < G__24848__a.length) {G__24848__a[G__24848__i] = arguments[G__24848__i + 0]; ++G__24848__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24848__a,0);
} 
return cljs_react_material_ui$rum$drawer__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$drawer.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$drawer.cljs$lang$applyTo = (function (arglist__24849){
var args__24393__auto__ = cljs.core.seq(arglist__24849);
return cljs_react_material_ui$rum$drawer__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$drawer.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$drawer__delegate;
return cljs_react_material_ui$rum$drawer;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.drop_down_menu = (function() { 
var cljs_react_material_ui$rum$drop_down_menu__delegate = function (args__24393__auto__){
var vec__24854 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24854,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24854,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.DropDownMenu24850 = rum.core.build_defc.call(null,((function (vec__24854,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24854,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"DropDownMenu24850").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"DropDownMenu",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$drop_down_menu = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24857__i = 0, G__24857__a = new Array(arguments.length -  0);
while (G__24857__i < G__24857__a.length) {G__24857__a[G__24857__i] = arguments[G__24857__i + 0]; ++G__24857__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24857__a,0);
} 
return cljs_react_material_ui$rum$drop_down_menu__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$drop_down_menu.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$drop_down_menu.cljs$lang$applyTo = (function (arglist__24858){
var args__24393__auto__ = cljs.core.seq(arglist__24858);
return cljs_react_material_ui$rum$drop_down_menu__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$drop_down_menu__delegate;
return cljs_react_material_ui$rum$drop_down_menu;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.flat_button = (function() { 
var cljs_react_material_ui$rum$flat_button__delegate = function (args__24393__auto__){
var vec__24863 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24863,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24863,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.FlatButton24859 = rum.core.build_defc.call(null,((function (vec__24863,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24863,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"FlatButton24859").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"FlatButton",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$flat_button = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24866__i = 0, G__24866__a = new Array(arguments.length -  0);
while (G__24866__i < G__24866__a.length) {G__24866__a[G__24866__i] = arguments[G__24866__i + 0]; ++G__24866__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24866__a,0);
} 
return cljs_react_material_ui$rum$flat_button__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$flat_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$flat_button.cljs$lang$applyTo = (function (arglist__24867){
var args__24393__auto__ = cljs.core.seq(arglist__24867);
return cljs_react_material_ui$rum$flat_button__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$flat_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$flat_button__delegate;
return cljs_react_material_ui$rum$flat_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.floating_action_button = (function() { 
var cljs_react_material_ui$rum$floating_action_button__delegate = function (args__24393__auto__){
var vec__24872 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24872,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24872,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.FloatingActionButton24868 = rum.core.build_defc.call(null,((function (vec__24872,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24872,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"FloatingActionButton24868").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"FloatingActionButton",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$floating_action_button = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24875__i = 0, G__24875__a = new Array(arguments.length -  0);
while (G__24875__i < G__24875__a.length) {G__24875__a[G__24875__i] = arguments[G__24875__i + 0]; ++G__24875__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24875__a,0);
} 
return cljs_react_material_ui$rum$floating_action_button__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$floating_action_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$floating_action_button.cljs$lang$applyTo = (function (arglist__24876){
var args__24393__auto__ = cljs.core.seq(arglist__24876);
return cljs_react_material_ui$rum$floating_action_button__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$floating_action_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$floating_action_button__delegate;
return cljs_react_material_ui$rum$floating_action_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.font_icon = (function() { 
var cljs_react_material_ui$rum$font_icon__delegate = function (args__24393__auto__){
var vec__24881 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24881,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24881,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.FontIcon24877 = rum.core.build_defc.call(null,((function (vec__24881,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24881,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"FontIcon24877").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"FontIcon",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$font_icon = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24884__i = 0, G__24884__a = new Array(arguments.length -  0);
while (G__24884__i < G__24884__a.length) {G__24884__a[G__24884__i] = arguments[G__24884__i + 0]; ++G__24884__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24884__a,0);
} 
return cljs_react_material_ui$rum$font_icon__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$font_icon.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$font_icon.cljs$lang$applyTo = (function (arglist__24885){
var args__24393__auto__ = cljs.core.seq(arglist__24885);
return cljs_react_material_ui$rum$font_icon__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$font_icon.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$font_icon__delegate;
return cljs_react_material_ui$rum$font_icon;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.grid_list = (function() { 
var cljs_react_material_ui$rum$grid_list__delegate = function (args__24393__auto__){
var vec__24890 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24890,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24890,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.GridList24886 = rum.core.build_defc.call(null,((function (vec__24890,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24890,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"GridList24886").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"GridList",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$grid_list = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24893__i = 0, G__24893__a = new Array(arguments.length -  0);
while (G__24893__i < G__24893__a.length) {G__24893__a[G__24893__i] = arguments[G__24893__i + 0]; ++G__24893__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24893__a,0);
} 
return cljs_react_material_ui$rum$grid_list__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$grid_list.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$grid_list.cljs$lang$applyTo = (function (arglist__24894){
var args__24393__auto__ = cljs.core.seq(arglist__24894);
return cljs_react_material_ui$rum$grid_list__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$grid_list.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$grid_list__delegate;
return cljs_react_material_ui$rum$grid_list;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.grid_tile = (function() { 
var cljs_react_material_ui$rum$grid_tile__delegate = function (args__24393__auto__){
var vec__24899 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24899,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24899,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.GridTile24895 = rum.core.build_defc.call(null,((function (vec__24899,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24899,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"GridTile24895").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"GridTile",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$grid_tile = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24902__i = 0, G__24902__a = new Array(arguments.length -  0);
while (G__24902__i < G__24902__a.length) {G__24902__a[G__24902__i] = arguments[G__24902__i + 0]; ++G__24902__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24902__a,0);
} 
return cljs_react_material_ui$rum$grid_tile__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$grid_tile.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$grid_tile.cljs$lang$applyTo = (function (arglist__24903){
var args__24393__auto__ = cljs.core.seq(arglist__24903);
return cljs_react_material_ui$rum$grid_tile__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$grid_tile.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$grid_tile__delegate;
return cljs_react_material_ui$rum$grid_tile;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.icon_button = (function() { 
var cljs_react_material_ui$rum$icon_button__delegate = function (args__24393__auto__){
var vec__24908 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24908,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24908,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.IconButton24904 = rum.core.build_defc.call(null,((function (vec__24908,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24908,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"IconButton24904").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"IconButton",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$icon_button = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24911__i = 0, G__24911__a = new Array(arguments.length -  0);
while (G__24911__i < G__24911__a.length) {G__24911__a[G__24911__i] = arguments[G__24911__i + 0]; ++G__24911__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24911__a,0);
} 
return cljs_react_material_ui$rum$icon_button__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$icon_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$icon_button.cljs$lang$applyTo = (function (arglist__24912){
var args__24393__auto__ = cljs.core.seq(arglist__24912);
return cljs_react_material_ui$rum$icon_button__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$icon_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$icon_button__delegate;
return cljs_react_material_ui$rum$icon_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.icon_menu = (function() { 
var cljs_react_material_ui$rum$icon_menu__delegate = function (args__24393__auto__){
var vec__24917 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24917,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24917,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.IconMenu24913 = rum.core.build_defc.call(null,((function (vec__24917,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24917,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"IconMenu24913").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"IconMenu",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$icon_menu = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24920__i = 0, G__24920__a = new Array(arguments.length -  0);
while (G__24920__i < G__24920__a.length) {G__24920__a[G__24920__i] = arguments[G__24920__i + 0]; ++G__24920__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24920__a,0);
} 
return cljs_react_material_ui$rum$icon_menu__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$icon_menu.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$icon_menu.cljs$lang$applyTo = (function (arglist__24921){
var args__24393__auto__ = cljs.core.seq(arglist__24921);
return cljs_react_material_ui$rum$icon_menu__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$icon_menu.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$icon_menu__delegate;
return cljs_react_material_ui$rum$icon_menu;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.linear_progress = (function() { 
var cljs_react_material_ui$rum$linear_progress__delegate = function (args__24393__auto__){
var vec__24926 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24926,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24926,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.LinearProgress24922 = rum.core.build_defc.call(null,((function (vec__24926,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24926,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"LinearProgress24922").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"LinearProgress",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$linear_progress = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24929__i = 0, G__24929__a = new Array(arguments.length -  0);
while (G__24929__i < G__24929__a.length) {G__24929__a[G__24929__i] = arguments[G__24929__i + 0]; ++G__24929__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24929__a,0);
} 
return cljs_react_material_ui$rum$linear_progress__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$linear_progress.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$linear_progress.cljs$lang$applyTo = (function (arglist__24930){
var args__24393__auto__ = cljs.core.seq(arglist__24930);
return cljs_react_material_ui$rum$linear_progress__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$linear_progress.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$linear_progress__delegate;
return cljs_react_material_ui$rum$linear_progress;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.list = (function() { 
var cljs_react_material_ui$rum$list__delegate = function (args__24393__auto__){
var vec__24935 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24935,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24935,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.List24931 = rum.core.build_defc.call(null,((function (vec__24935,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24935,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"List24931").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"List",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$list = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24938__i = 0, G__24938__a = new Array(arguments.length -  0);
while (G__24938__i < G__24938__a.length) {G__24938__a[G__24938__i] = arguments[G__24938__i + 0]; ++G__24938__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24938__a,0);
} 
return cljs_react_material_ui$rum$list__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$list.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$list.cljs$lang$applyTo = (function (arglist__24939){
var args__24393__auto__ = cljs.core.seq(arglist__24939);
return cljs_react_material_ui$rum$list__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$list.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$list__delegate;
return cljs_react_material_ui$rum$list;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.list_item = (function() { 
var cljs_react_material_ui$rum$list_item__delegate = function (args__24393__auto__){
var vec__24944 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24944,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24944,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.ListItem24940 = rum.core.build_defc.call(null,((function (vec__24944,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24944,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"ListItem24940").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"ListItem",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$list_item = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24947__i = 0, G__24947__a = new Array(arguments.length -  0);
while (G__24947__i < G__24947__a.length) {G__24947__a[G__24947__i] = arguments[G__24947__i + 0]; ++G__24947__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24947__a,0);
} 
return cljs_react_material_ui$rum$list_item__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$list_item.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$list_item.cljs$lang$applyTo = (function (arglist__24948){
var args__24393__auto__ = cljs.core.seq(arglist__24948);
return cljs_react_material_ui$rum$list_item__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$list_item.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$list_item__delegate;
return cljs_react_material_ui$rum$list_item;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.make_selectable = (function() { 
var cljs_react_material_ui$rum$make_selectable__delegate = function (args__24393__auto__){
var vec__24953 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24953,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24953,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.MakeSelectable24949 = rum.core.build_defc.call(null,((function (vec__24953,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24953,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"MakeSelectable24949").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"MakeSelectable",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$make_selectable = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24956__i = 0, G__24956__a = new Array(arguments.length -  0);
while (G__24956__i < G__24956__a.length) {G__24956__a[G__24956__i] = arguments[G__24956__i + 0]; ++G__24956__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24956__a,0);
} 
return cljs_react_material_ui$rum$make_selectable__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$make_selectable.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$make_selectable.cljs$lang$applyTo = (function (arglist__24957){
var args__24393__auto__ = cljs.core.seq(arglist__24957);
return cljs_react_material_ui$rum$make_selectable__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$make_selectable.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$make_selectable__delegate;
return cljs_react_material_ui$rum$make_selectable;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.menu = (function() { 
var cljs_react_material_ui$rum$menu__delegate = function (args__24393__auto__){
var vec__24962 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24962,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24962,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Menu24958 = rum.core.build_defc.call(null,((function (vec__24962,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24962,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Menu24958").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Menu",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$menu = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24965__i = 0, G__24965__a = new Array(arguments.length -  0);
while (G__24965__i < G__24965__a.length) {G__24965__a[G__24965__i] = arguments[G__24965__i + 0]; ++G__24965__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24965__a,0);
} 
return cljs_react_material_ui$rum$menu__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$menu.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$menu.cljs$lang$applyTo = (function (arglist__24966){
var args__24393__auto__ = cljs.core.seq(arglist__24966);
return cljs_react_material_ui$rum$menu__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$menu.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$menu__delegate;
return cljs_react_material_ui$rum$menu;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.menu_item = (function() { 
var cljs_react_material_ui$rum$menu_item__delegate = function (args__24393__auto__){
var vec__24971 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24971,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24971,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.MenuItem24967 = rum.core.build_defc.call(null,((function (vec__24971,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24971,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"MenuItem24967").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"MenuItem",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$menu_item = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24974__i = 0, G__24974__a = new Array(arguments.length -  0);
while (G__24974__i < G__24974__a.length) {G__24974__a[G__24974__i] = arguments[G__24974__i + 0]; ++G__24974__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24974__a,0);
} 
return cljs_react_material_ui$rum$menu_item__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$menu_item.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$menu_item.cljs$lang$applyTo = (function (arglist__24975){
var args__24393__auto__ = cljs.core.seq(arglist__24975);
return cljs_react_material_ui$rum$menu_item__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$menu_item.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$menu_item__delegate;
return cljs_react_material_ui$rum$menu_item;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.mui_theme_provider = (function() { 
var cljs_react_material_ui$rum$mui_theme_provider__delegate = function (args__24393__auto__){
var vec__24980 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24980,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24980,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.MuiThemeProvider24976 = rum.core.build_defc.call(null,((function (vec__24980,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24980,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"MuiThemeProvider24976").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"MuiThemeProvider",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$mui_theme_provider = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24983__i = 0, G__24983__a = new Array(arguments.length -  0);
while (G__24983__i < G__24983__a.length) {G__24983__a[G__24983__i] = arguments[G__24983__i + 0]; ++G__24983__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24983__a,0);
} 
return cljs_react_material_ui$rum$mui_theme_provider__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$mui_theme_provider.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$mui_theme_provider.cljs$lang$applyTo = (function (arglist__24984){
var args__24393__auto__ = cljs.core.seq(arglist__24984);
return cljs_react_material_ui$rum$mui_theme_provider__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$mui_theme_provider__delegate;
return cljs_react_material_ui$rum$mui_theme_provider;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.paper = (function() { 
var cljs_react_material_ui$rum$paper__delegate = function (args__24393__auto__){
var vec__24989 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24989,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24989,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Paper24985 = rum.core.build_defc.call(null,((function (vec__24989,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24989,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Paper24985").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Paper",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$paper = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__24992__i = 0, G__24992__a = new Array(arguments.length -  0);
while (G__24992__i < G__24992__a.length) {G__24992__a[G__24992__i] = arguments[G__24992__i + 0]; ++G__24992__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__24992__a,0);
} 
return cljs_react_material_ui$rum$paper__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$paper.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$paper.cljs$lang$applyTo = (function (arglist__24993){
var args__24393__auto__ = cljs.core.seq(arglist__24993);
return cljs_react_material_ui$rum$paper__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$paper.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$paper__delegate;
return cljs_react_material_ui$rum$paper;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.popover = (function() { 
var cljs_react_material_ui$rum$popover__delegate = function (args__24393__auto__){
var vec__24998 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__24998,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__24998,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Popover24994 = rum.core.build_defc.call(null,((function (vec__24998,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__24998,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Popover24994").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Popover",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$popover = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25001__i = 0, G__25001__a = new Array(arguments.length -  0);
while (G__25001__i < G__25001__a.length) {G__25001__a[G__25001__i] = arguments[G__25001__i + 0]; ++G__25001__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25001__a,0);
} 
return cljs_react_material_ui$rum$popover__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$popover.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$popover.cljs$lang$applyTo = (function (arglist__25002){
var args__24393__auto__ = cljs.core.seq(arglist__25002);
return cljs_react_material_ui$rum$popover__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$popover.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$popover__delegate;
return cljs_react_material_ui$rum$popover;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.radio_button = (function() { 
var cljs_react_material_ui$rum$radio_button__delegate = function (args__24393__auto__){
var vec__25007 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25007,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25007,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.RadioButton25003 = rum.core.build_defc.call(null,((function (vec__25007,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25007,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"RadioButton25003").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"RadioButton",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$radio_button = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25010__i = 0, G__25010__a = new Array(arguments.length -  0);
while (G__25010__i < G__25010__a.length) {G__25010__a[G__25010__i] = arguments[G__25010__i + 0]; ++G__25010__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25010__a,0);
} 
return cljs_react_material_ui$rum$radio_button__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$radio_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$radio_button.cljs$lang$applyTo = (function (arglist__25011){
var args__24393__auto__ = cljs.core.seq(arglist__25011);
return cljs_react_material_ui$rum$radio_button__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$radio_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$radio_button__delegate;
return cljs_react_material_ui$rum$radio_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.radio_button_group = (function() { 
var cljs_react_material_ui$rum$radio_button_group__delegate = function (args__24393__auto__){
var vec__25016 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25016,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25016,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.RadioButtonGroup25012 = rum.core.build_defc.call(null,((function (vec__25016,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25016,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"RadioButtonGroup25012").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"RadioButtonGroup",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$radio_button_group = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25019__i = 0, G__25019__a = new Array(arguments.length -  0);
while (G__25019__i < G__25019__a.length) {G__25019__a[G__25019__i] = arguments[G__25019__i + 0]; ++G__25019__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25019__a,0);
} 
return cljs_react_material_ui$rum$radio_button_group__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$radio_button_group.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$radio_button_group.cljs$lang$applyTo = (function (arglist__25020){
var args__24393__auto__ = cljs.core.seq(arglist__25020);
return cljs_react_material_ui$rum$radio_button_group__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$radio_button_group.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$radio_button_group__delegate;
return cljs_react_material_ui$rum$radio_button_group;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.raised_button = (function() { 
var cljs_react_material_ui$rum$raised_button__delegate = function (args__24393__auto__){
var vec__25025 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25025,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25025,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.RaisedButton25021 = rum.core.build_defc.call(null,((function (vec__25025,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25025,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"RaisedButton25021").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"RaisedButton",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$raised_button = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25028__i = 0, G__25028__a = new Array(arguments.length -  0);
while (G__25028__i < G__25028__a.length) {G__25028__a[G__25028__i] = arguments[G__25028__i + 0]; ++G__25028__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25028__a,0);
} 
return cljs_react_material_ui$rum$raised_button__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$raised_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$raised_button.cljs$lang$applyTo = (function (arglist__25029){
var args__24393__auto__ = cljs.core.seq(arglist__25029);
return cljs_react_material_ui$rum$raised_button__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$raised_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$raised_button__delegate;
return cljs_react_material_ui$rum$raised_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.refresh_indicator = (function() { 
var cljs_react_material_ui$rum$refresh_indicator__delegate = function (args__24393__auto__){
var vec__25034 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25034,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25034,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.RefreshIndicator25030 = rum.core.build_defc.call(null,((function (vec__25034,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25034,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"RefreshIndicator25030").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"RefreshIndicator",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$refresh_indicator = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25037__i = 0, G__25037__a = new Array(arguments.length -  0);
while (G__25037__i < G__25037__a.length) {G__25037__a[G__25037__i] = arguments[G__25037__i + 0]; ++G__25037__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25037__a,0);
} 
return cljs_react_material_ui$rum$refresh_indicator__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$refresh_indicator.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$refresh_indicator.cljs$lang$applyTo = (function (arglist__25038){
var args__24393__auto__ = cljs.core.seq(arglist__25038);
return cljs_react_material_ui$rum$refresh_indicator__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$refresh_indicator__delegate;
return cljs_react_material_ui$rum$refresh_indicator;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.select_field = (function() { 
var cljs_react_material_ui$rum$select_field__delegate = function (args__24393__auto__){
var vec__25043 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25043,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25043,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.SelectField25039 = rum.core.build_defc.call(null,((function (vec__25043,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25043,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"SelectField25039").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"SelectField",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$select_field = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25046__i = 0, G__25046__a = new Array(arguments.length -  0);
while (G__25046__i < G__25046__a.length) {G__25046__a[G__25046__i] = arguments[G__25046__i + 0]; ++G__25046__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25046__a,0);
} 
return cljs_react_material_ui$rum$select_field__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$select_field.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$select_field.cljs$lang$applyTo = (function (arglist__25047){
var args__24393__auto__ = cljs.core.seq(arglist__25047);
return cljs_react_material_ui$rum$select_field__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$select_field.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$select_field__delegate;
return cljs_react_material_ui$rum$select_field;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.slider = (function() { 
var cljs_react_material_ui$rum$slider__delegate = function (args__24393__auto__){
var vec__25052 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25052,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25052,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Slider25048 = rum.core.build_defc.call(null,((function (vec__25052,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25052,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Slider25048").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Slider",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$slider = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25055__i = 0, G__25055__a = new Array(arguments.length -  0);
while (G__25055__i < G__25055__a.length) {G__25055__a[G__25055__i] = arguments[G__25055__i + 0]; ++G__25055__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25055__a,0);
} 
return cljs_react_material_ui$rum$slider__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$slider.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$slider.cljs$lang$applyTo = (function (arglist__25056){
var args__24393__auto__ = cljs.core.seq(arglist__25056);
return cljs_react_material_ui$rum$slider__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$slider.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$slider__delegate;
return cljs_react_material_ui$rum$slider;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.subheader = (function() { 
var cljs_react_material_ui$rum$subheader__delegate = function (args__24393__auto__){
var vec__25061 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25061,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25061,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Subheader25057 = rum.core.build_defc.call(null,((function (vec__25061,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25061,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Subheader25057").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Subheader",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$subheader = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25064__i = 0, G__25064__a = new Array(arguments.length -  0);
while (G__25064__i < G__25064__a.length) {G__25064__a[G__25064__i] = arguments[G__25064__i + 0]; ++G__25064__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25064__a,0);
} 
return cljs_react_material_ui$rum$subheader__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$subheader.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$subheader.cljs$lang$applyTo = (function (arglist__25065){
var args__24393__auto__ = cljs.core.seq(arglist__25065);
return cljs_react_material_ui$rum$subheader__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$subheader.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$subheader__delegate;
return cljs_react_material_ui$rum$subheader;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.svg_icon = (function() { 
var cljs_react_material_ui$rum$svg_icon__delegate = function (args__24393__auto__){
var vec__25070 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25070,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25070,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.SvgIcon25066 = rum.core.build_defc.call(null,((function (vec__25070,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25070,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"SvgIcon25066").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"SvgIcon",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$svg_icon = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25073__i = 0, G__25073__a = new Array(arguments.length -  0);
while (G__25073__i < G__25073__a.length) {G__25073__a[G__25073__i] = arguments[G__25073__i + 0]; ++G__25073__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25073__a,0);
} 
return cljs_react_material_ui$rum$svg_icon__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$svg_icon.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$svg_icon.cljs$lang$applyTo = (function (arglist__25074){
var args__24393__auto__ = cljs.core.seq(arglist__25074);
return cljs_react_material_ui$rum$svg_icon__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$svg_icon.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$svg_icon__delegate;
return cljs_react_material_ui$rum$svg_icon;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step = (function() { 
var cljs_react_material_ui$rum$step__delegate = function (args__24393__auto__){
var vec__25079 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25079,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25079,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Step25075 = rum.core.build_defc.call(null,((function (vec__25079,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25079,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Step25075").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Step",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$step = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25082__i = 0, G__25082__a = new Array(arguments.length -  0);
while (G__25082__i < G__25082__a.length) {G__25082__a[G__25082__i] = arguments[G__25082__i + 0]; ++G__25082__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25082__a,0);
} 
return cljs_react_material_ui$rum$step__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$step.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step.cljs$lang$applyTo = (function (arglist__25083){
var args__24393__auto__ = cljs.core.seq(arglist__25083);
return cljs_react_material_ui$rum$step__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$step.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step__delegate;
return cljs_react_material_ui$rum$step;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step_button = (function() { 
var cljs_react_material_ui$rum$step_button__delegate = function (args__24393__auto__){
var vec__25088 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25088,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25088,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.StepButton25084 = rum.core.build_defc.call(null,((function (vec__25088,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25088,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"StepButton25084").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"StepButton",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$step_button = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25091__i = 0, G__25091__a = new Array(arguments.length -  0);
while (G__25091__i < G__25091__a.length) {G__25091__a[G__25091__i] = arguments[G__25091__i + 0]; ++G__25091__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25091__a,0);
} 
return cljs_react_material_ui$rum$step_button__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$step_button.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step_button.cljs$lang$applyTo = (function (arglist__25092){
var args__24393__auto__ = cljs.core.seq(arglist__25092);
return cljs_react_material_ui$rum$step_button__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$step_button.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step_button__delegate;
return cljs_react_material_ui$rum$step_button;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step_content = (function() { 
var cljs_react_material_ui$rum$step_content__delegate = function (args__24393__auto__){
var vec__25097 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25097,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25097,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.StepContent25093 = rum.core.build_defc.call(null,((function (vec__25097,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25097,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"StepContent25093").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"StepContent",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$step_content = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25100__i = 0, G__25100__a = new Array(arguments.length -  0);
while (G__25100__i < G__25100__a.length) {G__25100__a[G__25100__i] = arguments[G__25100__i + 0]; ++G__25100__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25100__a,0);
} 
return cljs_react_material_ui$rum$step_content__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$step_content.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step_content.cljs$lang$applyTo = (function (arglist__25101){
var args__24393__auto__ = cljs.core.seq(arglist__25101);
return cljs_react_material_ui$rum$step_content__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$step_content.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step_content__delegate;
return cljs_react_material_ui$rum$step_content;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.step_label = (function() { 
var cljs_react_material_ui$rum$step_label__delegate = function (args__24393__auto__){
var vec__25106 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25106,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25106,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.StepLabel25102 = rum.core.build_defc.call(null,((function (vec__25106,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25106,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"StepLabel25102").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"StepLabel",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$step_label = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25109__i = 0, G__25109__a = new Array(arguments.length -  0);
while (G__25109__i < G__25109__a.length) {G__25109__a[G__25109__i] = arguments[G__25109__i + 0]; ++G__25109__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25109__a,0);
} 
return cljs_react_material_ui$rum$step_label__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$step_label.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$step_label.cljs$lang$applyTo = (function (arglist__25110){
var args__24393__auto__ = cljs.core.seq(arglist__25110);
return cljs_react_material_ui$rum$step_label__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$step_label.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$step_label__delegate;
return cljs_react_material_ui$rum$step_label;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.stepper = (function() { 
var cljs_react_material_ui$rum$stepper__delegate = function (args__24393__auto__){
var vec__25115 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25115,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25115,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Stepper25111 = rum.core.build_defc.call(null,((function (vec__25115,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25115,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Stepper25111").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Stepper",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$stepper = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25118__i = 0, G__25118__a = new Array(arguments.length -  0);
while (G__25118__i < G__25118__a.length) {G__25118__a[G__25118__i] = arguments[G__25118__i + 0]; ++G__25118__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25118__a,0);
} 
return cljs_react_material_ui$rum$stepper__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$stepper.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$stepper.cljs$lang$applyTo = (function (arglist__25119){
var args__24393__auto__ = cljs.core.seq(arglist__25119);
return cljs_react_material_ui$rum$stepper__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$stepper.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$stepper__delegate;
return cljs_react_material_ui$rum$stepper;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.snackbar = (function() { 
var cljs_react_material_ui$rum$snackbar__delegate = function (args__24393__auto__){
var vec__25124 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25124,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25124,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Snackbar25120 = rum.core.build_defc.call(null,((function (vec__25124,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25124,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Snackbar25120").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Snackbar",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$snackbar = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25127__i = 0, G__25127__a = new Array(arguments.length -  0);
while (G__25127__i < G__25127__a.length) {G__25127__a[G__25127__i] = arguments[G__25127__i + 0]; ++G__25127__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25127__a,0);
} 
return cljs_react_material_ui$rum$snackbar__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$snackbar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$snackbar.cljs$lang$applyTo = (function (arglist__25128){
var args__24393__auto__ = cljs.core.seq(arglist__25128);
return cljs_react_material_ui$rum$snackbar__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$snackbar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$snackbar__delegate;
return cljs_react_material_ui$rum$snackbar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.tabs = (function() { 
var cljs_react_material_ui$rum$tabs__delegate = function (args__24393__auto__){
var vec__25133 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25133,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25133,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Tabs25129 = rum.core.build_defc.call(null,((function (vec__25133,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25133,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Tabs25129").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Tabs",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$tabs = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25136__i = 0, G__25136__a = new Array(arguments.length -  0);
while (G__25136__i < G__25136__a.length) {G__25136__a[G__25136__i] = arguments[G__25136__i + 0]; ++G__25136__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25136__a,0);
} 
return cljs_react_material_ui$rum$tabs__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$tabs.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$tabs.cljs$lang$applyTo = (function (arglist__25137){
var args__24393__auto__ = cljs.core.seq(arglist__25137);
return cljs_react_material_ui$rum$tabs__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$tabs.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$tabs__delegate;
return cljs_react_material_ui$rum$tabs;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.tab = (function() { 
var cljs_react_material_ui$rum$tab__delegate = function (args__24393__auto__){
var vec__25142 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25142,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25142,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Tab25138 = rum.core.build_defc.call(null,((function (vec__25142,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25142,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Tab25138").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Tab",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$tab = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25145__i = 0, G__25145__a = new Array(arguments.length -  0);
while (G__25145__i < G__25145__a.length) {G__25145__a[G__25145__i] = arguments[G__25145__i + 0]; ++G__25145__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25145__a,0);
} 
return cljs_react_material_ui$rum$tab__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$tab.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$tab.cljs$lang$applyTo = (function (arglist__25146){
var args__24393__auto__ = cljs.core.seq(arglist__25146);
return cljs_react_material_ui$rum$tab__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$tab.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$tab__delegate;
return cljs_react_material_ui$rum$tab;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table = (function() { 
var cljs_react_material_ui$rum$table__delegate = function (args__24393__auto__){
var vec__25151 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25151,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25151,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Table25147 = rum.core.build_defc.call(null,((function (vec__25151,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25151,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Table25147").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Table",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25154__i = 0, G__25154__a = new Array(arguments.length -  0);
while (G__25154__i < G__25154__a.length) {G__25154__a[G__25154__i] = arguments[G__25154__i + 0]; ++G__25154__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25154__a,0);
} 
return cljs_react_material_ui$rum$table__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table.cljs$lang$applyTo = (function (arglist__25155){
var args__24393__auto__ = cljs.core.seq(arglist__25155);
return cljs_react_material_ui$rum$table__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table__delegate;
return cljs_react_material_ui$rum$table;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_body = (function() { 
var cljs_react_material_ui$rum$table_body__delegate = function (args__24393__auto__){
var vec__25160 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25160,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25160,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TableBody25156 = rum.core.build_defc.call(null,((function (vec__25160,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25160,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TableBody25156").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TableBody",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table_body = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25163__i = 0, G__25163__a = new Array(arguments.length -  0);
while (G__25163__i < G__25163__a.length) {G__25163__a[G__25163__i] = arguments[G__25163__i + 0]; ++G__25163__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25163__a,0);
} 
return cljs_react_material_ui$rum$table_body__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table_body.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_body.cljs$lang$applyTo = (function (arglist__25164){
var args__24393__auto__ = cljs.core.seq(arglist__25164);
return cljs_react_material_ui$rum$table_body__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table_body.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_body__delegate;
return cljs_react_material_ui$rum$table_body;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_footer = (function() { 
var cljs_react_material_ui$rum$table_footer__delegate = function (args__24393__auto__){
var vec__25169 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25169,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25169,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TableFooter25165 = rum.core.build_defc.call(null,((function (vec__25169,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25169,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TableFooter25165").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TableFooter",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table_footer = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25172__i = 0, G__25172__a = new Array(arguments.length -  0);
while (G__25172__i < G__25172__a.length) {G__25172__a[G__25172__i] = arguments[G__25172__i + 0]; ++G__25172__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25172__a,0);
} 
return cljs_react_material_ui$rum$table_footer__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table_footer.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_footer.cljs$lang$applyTo = (function (arglist__25173){
var args__24393__auto__ = cljs.core.seq(arglist__25173);
return cljs_react_material_ui$rum$table_footer__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table_footer.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_footer__delegate;
return cljs_react_material_ui$rum$table_footer;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_header = (function() { 
var cljs_react_material_ui$rum$table_header__delegate = function (args__24393__auto__){
var vec__25178 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25178,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25178,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TableHeader25174 = rum.core.build_defc.call(null,((function (vec__25178,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25178,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TableHeader25174").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TableHeader",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table_header = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25181__i = 0, G__25181__a = new Array(arguments.length -  0);
while (G__25181__i < G__25181__a.length) {G__25181__a[G__25181__i] = arguments[G__25181__i + 0]; ++G__25181__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25181__a,0);
} 
return cljs_react_material_ui$rum$table_header__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table_header.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_header.cljs$lang$applyTo = (function (arglist__25182){
var args__24393__auto__ = cljs.core.seq(arglist__25182);
return cljs_react_material_ui$rum$table_header__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table_header.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_header__delegate;
return cljs_react_material_ui$rum$table_header;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_header_column = (function() { 
var cljs_react_material_ui$rum$table_header_column__delegate = function (args__24393__auto__){
var vec__25187 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25187,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25187,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TableHeaderColumn25183 = rum.core.build_defc.call(null,((function (vec__25187,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25187,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TableHeaderColumn25183").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TableHeaderColumn",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table_header_column = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25190__i = 0, G__25190__a = new Array(arguments.length -  0);
while (G__25190__i < G__25190__a.length) {G__25190__a[G__25190__i] = arguments[G__25190__i + 0]; ++G__25190__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25190__a,0);
} 
return cljs_react_material_ui$rum$table_header_column__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table_header_column.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_header_column.cljs$lang$applyTo = (function (arglist__25191){
var args__24393__auto__ = cljs.core.seq(arglist__25191);
return cljs_react_material_ui$rum$table_header_column__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table_header_column.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_header_column__delegate;
return cljs_react_material_ui$rum$table_header_column;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_row = (function() { 
var cljs_react_material_ui$rum$table_row__delegate = function (args__24393__auto__){
var vec__25196 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25196,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25196,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TableRow25192 = rum.core.build_defc.call(null,((function (vec__25196,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25196,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TableRow25192").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TableRow",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table_row = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25199__i = 0, G__25199__a = new Array(arguments.length -  0);
while (G__25199__i < G__25199__a.length) {G__25199__a[G__25199__i] = arguments[G__25199__i + 0]; ++G__25199__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25199__a,0);
} 
return cljs_react_material_ui$rum$table_row__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table_row.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_row.cljs$lang$applyTo = (function (arglist__25200){
var args__24393__auto__ = cljs.core.seq(arglist__25200);
return cljs_react_material_ui$rum$table_row__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table_row.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_row__delegate;
return cljs_react_material_ui$rum$table_row;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.table_row_column = (function() { 
var cljs_react_material_ui$rum$table_row_column__delegate = function (args__24393__auto__){
var vec__25205 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25205,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25205,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TableRowColumn25201 = rum.core.build_defc.call(null,((function (vec__25205,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25205,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TableRowColumn25201").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TableRowColumn",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$table_row_column = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25208__i = 0, G__25208__a = new Array(arguments.length -  0);
while (G__25208__i < G__25208__a.length) {G__25208__a[G__25208__i] = arguments[G__25208__i + 0]; ++G__25208__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25208__a,0);
} 
return cljs_react_material_ui$rum$table_row_column__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$table_row_column.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$table_row_column.cljs$lang$applyTo = (function (arglist__25209){
var args__24393__auto__ = cljs.core.seq(arglist__25209);
return cljs_react_material_ui$rum$table_row_column__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$table_row_column.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$table_row_column__delegate;
return cljs_react_material_ui$rum$table_row_column;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.text_field = (function() { 
var cljs_react_material_ui$rum$text_field__delegate = function (args__24393__auto__){
var vec__25214 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25214,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25214,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TextField25210 = rum.core.build_defc.call(null,((function (vec__25214,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25214,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TextField25210").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TextField",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$text_field = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25217__i = 0, G__25217__a = new Array(arguments.length -  0);
while (G__25217__i < G__25217__a.length) {G__25217__a[G__25217__i] = arguments[G__25217__i + 0]; ++G__25217__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25217__a,0);
} 
return cljs_react_material_ui$rum$text_field__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$text_field.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$text_field.cljs$lang$applyTo = (function (arglist__25218){
var args__24393__auto__ = cljs.core.seq(arglist__25218);
return cljs_react_material_ui$rum$text_field__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$text_field.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$text_field__delegate;
return cljs_react_material_ui$rum$text_field;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.time_picker = (function() { 
var cljs_react_material_ui$rum$time_picker__delegate = function (args__24393__auto__){
var vec__25223 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25223,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25223,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.TimePicker25219 = rum.core.build_defc.call(null,((function (vec__25223,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25223,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"TimePicker25219").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"TimePicker",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$time_picker = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25226__i = 0, G__25226__a = new Array(arguments.length -  0);
while (G__25226__i < G__25226__a.length) {G__25226__a[G__25226__i] = arguments[G__25226__i + 0]; ++G__25226__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25226__a,0);
} 
return cljs_react_material_ui$rum$time_picker__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$time_picker.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$time_picker.cljs$lang$applyTo = (function (arglist__25227){
var args__24393__auto__ = cljs.core.seq(arglist__25227);
return cljs_react_material_ui$rum$time_picker__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$time_picker.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$time_picker__delegate;
return cljs_react_material_ui$rum$time_picker;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toggle = (function() { 
var cljs_react_material_ui$rum$toggle__delegate = function (args__24393__auto__){
var vec__25232 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25232,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25232,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Toggle25228 = rum.core.build_defc.call(null,((function (vec__25232,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25232,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Toggle25228").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Toggle",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$toggle = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25235__i = 0, G__25235__a = new Array(arguments.length -  0);
while (G__25235__i < G__25235__a.length) {G__25235__a[G__25235__i] = arguments[G__25235__i + 0]; ++G__25235__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25235__a,0);
} 
return cljs_react_material_ui$rum$toggle__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$toggle.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toggle.cljs$lang$applyTo = (function (arglist__25236){
var args__24393__auto__ = cljs.core.seq(arglist__25236);
return cljs_react_material_ui$rum$toggle__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$toggle.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toggle__delegate;
return cljs_react_material_ui$rum$toggle;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar = (function() { 
var cljs_react_material_ui$rum$toolbar__delegate = function (args__24393__auto__){
var vec__25241 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25241,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25241,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.Toolbar25237 = rum.core.build_defc.call(null,((function (vec__25241,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25241,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"Toolbar25237").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"Toolbar",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$toolbar = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25244__i = 0, G__25244__a = new Array(arguments.length -  0);
while (G__25244__i < G__25244__a.length) {G__25244__a[G__25244__i] = arguments[G__25244__i + 0]; ++G__25244__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25244__a,0);
} 
return cljs_react_material_ui$rum$toolbar__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$toolbar.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar.cljs$lang$applyTo = (function (arglist__25245){
var args__24393__auto__ = cljs.core.seq(arglist__25245);
return cljs_react_material_ui$rum$toolbar__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$toolbar.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar__delegate;
return cljs_react_material_ui$rum$toolbar;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar_group = (function() { 
var cljs_react_material_ui$rum$toolbar_group__delegate = function (args__24393__auto__){
var vec__25250 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25250,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25250,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.ToolbarGroup25246 = rum.core.build_defc.call(null,((function (vec__25250,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25250,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"ToolbarGroup25246").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"ToolbarGroup",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$toolbar_group = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25253__i = 0, G__25253__a = new Array(arguments.length -  0);
while (G__25253__i < G__25253__a.length) {G__25253__a[G__25253__i] = arguments[G__25253__i + 0]; ++G__25253__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25253__a,0);
} 
return cljs_react_material_ui$rum$toolbar_group__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$toolbar_group.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar_group.cljs$lang$applyTo = (function (arglist__25254){
var args__24393__auto__ = cljs.core.seq(arglist__25254);
return cljs_react_material_ui$rum$toolbar_group__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$toolbar_group.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar_group__delegate;
return cljs_react_material_ui$rum$toolbar_group;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar_separator = (function() { 
var cljs_react_material_ui$rum$toolbar_separator__delegate = function (args__24393__auto__){
var vec__25259 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25259,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25259,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.ToolbarSeparator25255 = rum.core.build_defc.call(null,((function (vec__25259,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25259,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"ToolbarSeparator25255").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"ToolbarSeparator",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$toolbar_separator = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25262__i = 0, G__25262__a = new Array(arguments.length -  0);
while (G__25262__i < G__25262__a.length) {G__25262__a[G__25262__i] = arguments[G__25262__i + 0]; ++G__25262__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25262__a,0);
} 
return cljs_react_material_ui$rum$toolbar_separator__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$toolbar_separator.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar_separator.cljs$lang$applyTo = (function (arglist__25263){
var args__24393__auto__ = cljs.core.seq(arglist__25263);
return cljs_react_material_ui$rum$toolbar_separator__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar_separator__delegate;
return cljs_react_material_ui$rum$toolbar_separator;
})()
;
/**
 * @param {...*} var_args
 */
cljs_react_material_ui.rum.toolbar_title = (function() { 
var cljs_react_material_ui$rum$toolbar_title__delegate = function (args__24393__auto__){
var vec__25268 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args__24393__auto__)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,args__24393__auto__),cljs.core.rest.call(null,args__24393__auto__)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__24393__auto__], null));
var opts__24394__auto__ = cljs.core.nth.call(null,vec__25268,(0),null);
var children__24395__auto__ = cljs.core.nth.call(null,vec__25268,(1),null);
var type__24396__auto__ = cljs.core.first.call(null,children__24395__auto__);
var new_children__24397__auto__ = ((cljs.core.vector_QMARK_.call(null,type__24396__auto__))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.rum.ToolbarTitle25264 = rum.core.build_defc.call(null,((function (vec__25268,opts__24394__auto__,children__24395__auto__,type__24396__auto__){
return (function (){
return sablono.interpreter.interpret.call(null,cljs.core.last.call(null,children__24395__auto__));
});})(vec__25268,opts__24394__auto__,children__24395__auto__,type__24396__auto__))
,null,"ToolbarTitle25264").call(null)], null):children__24395__auto__);
return cljs_react_material_ui.core.create_mui_cmp.call(null,MaterialUI,"ToolbarTitle",cljs.core.cons.call(null,opts__24394__auto__,new_children__24397__auto__));
};
var cljs_react_material_ui$rum$toolbar_title = function (var_args){
var args__24393__auto__ = null;
if (arguments.length > 0) {
var G__25271__i = 0, G__25271__a = new Array(arguments.length -  0);
while (G__25271__i < G__25271__a.length) {G__25271__a[G__25271__i] = arguments[G__25271__i + 0]; ++G__25271__i;}
  args__24393__auto__ = new cljs.core.IndexedSeq(G__25271__a,0);
} 
return cljs_react_material_ui$rum$toolbar_title__delegate.call(this,args__24393__auto__);};
cljs_react_material_ui$rum$toolbar_title.cljs$lang$maxFixedArity = 0;
cljs_react_material_ui$rum$toolbar_title.cljs$lang$applyTo = (function (arglist__25272){
var args__24393__auto__ = cljs.core.seq(arglist__25272);
return cljs_react_material_ui$rum$toolbar_title__delegate(args__24393__auto__);
});
cljs_react_material_ui$rum$toolbar_title.cljs$core$IFn$_invoke$arity$variadic = cljs_react_material_ui$rum$toolbar_title__delegate;
return cljs_react_material_ui$rum$toolbar_title;
})()
;

//# sourceMappingURL=rum.js.map?rel=1471651206995