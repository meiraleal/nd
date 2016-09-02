// Compiled by ClojureScript 1.9.89 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23502__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23499 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23500 = cljs.core.seq.call(null,vec__23499);
var first__23501 = cljs.core.first.call(null,seq__23500);
var seq__23500__$1 = cljs.core.next.call(null,seq__23500);
var tag = first__23501;
var body = seq__23500__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23503__i = 0, G__23503__a = new Array(arguments.length -  0);
while (G__23503__i < G__23503__a.length) {G__23503__a[G__23503__i] = arguments[G__23503__i + 0]; ++G__23503__i;}
  args = new cljs.core.IndexedSeq(G__23503__a,0);
} 
return G__23502__delegate.call(this,args);};
G__23502.cljs$lang$maxFixedArity = 0;
G__23502.cljs$lang$applyTo = (function (arglist__23504){
var args = cljs.core.seq(arglist__23504);
return G__23502__delegate(args);
});
G__23502.cljs$core$IFn$_invoke$arity$variadic = G__23502__delegate;
return G__23502;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__22299__auto__ = (function sablono$core$update_arglists_$_iter__23509(s__23510){
return (new cljs.core.LazySeq(null,(function (){
var s__23510__$1 = s__23510;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__23510__$1);
if(temp__6503__auto__){
var s__23510__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23510__$2)){
var c__22297__auto__ = cljs.core.chunk_first.call(null,s__23510__$2);
var size__22298__auto__ = cljs.core.count.call(null,c__22297__auto__);
var b__23512 = cljs.core.chunk_buffer.call(null,size__22298__auto__);
if((function (){var i__23511 = (0);
while(true){
if((i__23511 < size__22298__auto__)){
var args = cljs.core._nth.call(null,c__22297__auto__,i__23511);
cljs.core.chunk_append.call(null,b__23512,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23513 = (i__23511 + (1));
i__23511 = G__23513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23512),sablono$core$update_arglists_$_iter__23509.call(null,cljs.core.chunk_rest.call(null,s__23510__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23512),null);
}
} else {
var args = cljs.core.first.call(null,s__23510__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23509.call(null,cljs.core.rest.call(null,s__23510__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22299__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__22635__auto__ = [];
var len__22628__auto___23519 = arguments.length;
var i__22629__auto___23520 = (0);
while(true){
if((i__22629__auto___23520 < len__22628__auto___23519)){
args__22635__auto__.push((arguments[i__22629__auto___23520]));

var G__23521 = (i__22629__auto___23520 + (1));
i__22629__auto___23520 = G__23521;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__22299__auto__ = (function sablono$core$iter__23515(s__23516){
return (new cljs.core.LazySeq(null,(function (){
var s__23516__$1 = s__23516;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__23516__$1);
if(temp__6503__auto__){
var s__23516__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23516__$2)){
var c__22297__auto__ = cljs.core.chunk_first.call(null,s__23516__$2);
var size__22298__auto__ = cljs.core.count.call(null,c__22297__auto__);
var b__23518 = cljs.core.chunk_buffer.call(null,size__22298__auto__);
if((function (){var i__23517 = (0);
while(true){
if((i__23517 < size__22298__auto__)){
var style = cljs.core._nth.call(null,c__22297__auto__,i__23517);
cljs.core.chunk_append.call(null,b__23518,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23522 = (i__23517 + (1));
i__23517 = G__23522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23518),sablono$core$iter__23515.call(null,cljs.core.chunk_rest.call(null,s__23516__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23518),null);
}
} else {
var style = cljs.core.first.call(null,s__23516__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23515.call(null,cljs.core.rest.call(null,s__23516__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22299__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq23514){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23514));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23523 = (function sablono$core$link_to23523(var_args){
var args__22635__auto__ = [];
var len__22628__auto___23526 = arguments.length;
var i__22629__auto___23527 = (0);
while(true){
if((i__22629__auto___23527 < len__22628__auto___23526)){
args__22635__auto__.push((arguments[i__22629__auto___23527]));

var G__23528 = (i__22629__auto___23527 + (1));
i__22629__auto___23527 = G__23528;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23523.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

sablono.core.link_to23523.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23523.cljs$lang$maxFixedArity = (1);

sablono.core.link_to23523.cljs$lang$applyTo = (function (seq23524){
var G__23525 = cljs.core.first.call(null,seq23524);
var seq23524__$1 = cljs.core.next.call(null,seq23524);
return sablono.core.link_to23523.cljs$core$IFn$_invoke$arity$variadic(G__23525,seq23524__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23523);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23529 = (function sablono$core$mail_to23529(var_args){
var args__22635__auto__ = [];
var len__22628__auto___23536 = arguments.length;
var i__22629__auto___23537 = (0);
while(true){
if((i__22629__auto___23537 < len__22628__auto___23536)){
args__22635__auto__.push((arguments[i__22629__auto___23537]));

var G__23538 = (i__22629__auto___23537 + (1));
i__22629__auto___23537 = G__23538;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23529.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

sablono.core.mail_to23529.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23532){
var vec__23533 = p__23532;
var content = cljs.core.nth.call(null,vec__23533,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__21445__auto__ = content;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23529.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to23529.cljs$lang$applyTo = (function (seq23530){
var G__23531 = cljs.core.first.call(null,seq23530);
var seq23530__$1 = cljs.core.next.call(null,seq23530);
return sablono.core.mail_to23529.cljs$core$IFn$_invoke$arity$variadic(G__23531,seq23530__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23529);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23539 = (function sablono$core$unordered_list23539(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__22299__auto__ = (function sablono$core$unordered_list23539_$_iter__23544(s__23545){
return (new cljs.core.LazySeq(null,(function (){
var s__23545__$1 = s__23545;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__23545__$1);
if(temp__6503__auto__){
var s__23545__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23545__$2)){
var c__22297__auto__ = cljs.core.chunk_first.call(null,s__23545__$2);
var size__22298__auto__ = cljs.core.count.call(null,c__22297__auto__);
var b__23547 = cljs.core.chunk_buffer.call(null,size__22298__auto__);
if((function (){var i__23546 = (0);
while(true){
if((i__23546 < size__22298__auto__)){
var x = cljs.core._nth.call(null,c__22297__auto__,i__23546);
cljs.core.chunk_append.call(null,b__23547,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23548 = (i__23546 + (1));
i__23546 = G__23548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23547),sablono$core$unordered_list23539_$_iter__23544.call(null,cljs.core.chunk_rest.call(null,s__23545__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23547),null);
}
} else {
var x = cljs.core.first.call(null,s__23545__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23539_$_iter__23544.call(null,cljs.core.rest.call(null,s__23545__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22299__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23539);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23549 = (function sablono$core$ordered_list23549(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__22299__auto__ = (function sablono$core$ordered_list23549_$_iter__23554(s__23555){
return (new cljs.core.LazySeq(null,(function (){
var s__23555__$1 = s__23555;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__23555__$1);
if(temp__6503__auto__){
var s__23555__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23555__$2)){
var c__22297__auto__ = cljs.core.chunk_first.call(null,s__23555__$2);
var size__22298__auto__ = cljs.core.count.call(null,c__22297__auto__);
var b__23557 = cljs.core.chunk_buffer.call(null,size__22298__auto__);
if((function (){var i__23556 = (0);
while(true){
if((i__23556 < size__22298__auto__)){
var x = cljs.core._nth.call(null,c__22297__auto__,i__23556);
cljs.core.chunk_append.call(null,b__23557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23558 = (i__23556 + (1));
i__23556 = G__23558;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23557),sablono$core$ordered_list23549_$_iter__23554.call(null,cljs.core.chunk_rest.call(null,s__23555__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23557),null);
}
} else {
var x = cljs.core.first.call(null,s__23555__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23549_$_iter__23554.call(null,cljs.core.rest.call(null,s__23555__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22299__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23549);
/**
 * Create an image element.
 */
sablono.core.image23559 = (function sablono$core$image23559(var_args){
var args23560 = [];
var len__22628__auto___23563 = arguments.length;
var i__22629__auto___23564 = (0);
while(true){
if((i__22629__auto___23564 < len__22628__auto___23563)){
args23560.push((arguments[i__22629__auto___23564]));

var G__23565 = (i__22629__auto___23564 + (1));
i__22629__auto___23564 = G__23565;
continue;
} else {
}
break;
}

var G__23562 = args23560.length;
switch (G__23562) {
case 1:
return sablono.core.image23559.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23559.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23560.length)].join('')));

}
});

sablono.core.image23559.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23559.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23559.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23559);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23567_SHARP_,p2__23568_SHARP_){
return [cljs.core.str(p1__23567_SHARP_),cljs.core.str("["),cljs.core.str(p2__23568_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23569_SHARP_,p2__23570_SHARP_){
return [cljs.core.str(p1__23569_SHARP_),cljs.core.str("-"),cljs.core.str(p2__23570_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__21445__auto__ = value;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field23571 = (function sablono$core$color_field23571(var_args){
var args23572 = [];
var len__22628__auto___23639 = arguments.length;
var i__22629__auto___23640 = (0);
while(true){
if((i__22629__auto___23640 < len__22628__auto___23639)){
args23572.push((arguments[i__22629__auto___23640]));

var G__23641 = (i__22629__auto___23640 + (1));
i__22629__auto___23640 = G__23641;
continue;
} else {
}
break;
}

var G__23574 = args23572.length;
switch (G__23574) {
case 1:
return sablono.core.color_field23571.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23571.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23572.length)].join('')));

}
});

sablono.core.color_field23571.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.color_field23571.call(null,name__23486__auto__,null);
});

sablono.core.color_field23571.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.color_field23571.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23571);

/**
 * Creates a date input field.
 */
sablono.core.date_field23575 = (function sablono$core$date_field23575(var_args){
var args23576 = [];
var len__22628__auto___23643 = arguments.length;
var i__22629__auto___23644 = (0);
while(true){
if((i__22629__auto___23644 < len__22628__auto___23643)){
args23576.push((arguments[i__22629__auto___23644]));

var G__23645 = (i__22629__auto___23644 + (1));
i__22629__auto___23644 = G__23645;
continue;
} else {
}
break;
}

var G__23578 = args23576.length;
switch (G__23578) {
case 1:
return sablono.core.date_field23575.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23575.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23576.length)].join('')));

}
});

sablono.core.date_field23575.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.date_field23575.call(null,name__23486__auto__,null);
});

sablono.core.date_field23575.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.date_field23575.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23575);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23579 = (function sablono$core$datetime_field23579(var_args){
var args23580 = [];
var len__22628__auto___23647 = arguments.length;
var i__22629__auto___23648 = (0);
while(true){
if((i__22629__auto___23648 < len__22628__auto___23647)){
args23580.push((arguments[i__22629__auto___23648]));

var G__23649 = (i__22629__auto___23648 + (1));
i__22629__auto___23648 = G__23649;
continue;
} else {
}
break;
}

var G__23582 = args23580.length;
switch (G__23582) {
case 1:
return sablono.core.datetime_field23579.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23579.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23580.length)].join('')));

}
});

sablono.core.datetime_field23579.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.datetime_field23579.call(null,name__23486__auto__,null);
});

sablono.core.datetime_field23579.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.datetime_field23579.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23579);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23583 = (function sablono$core$datetime_local_field23583(var_args){
var args23584 = [];
var len__22628__auto___23651 = arguments.length;
var i__22629__auto___23652 = (0);
while(true){
if((i__22629__auto___23652 < len__22628__auto___23651)){
args23584.push((arguments[i__22629__auto___23652]));

var G__23653 = (i__22629__auto___23652 + (1));
i__22629__auto___23652 = G__23653;
continue;
} else {
}
break;
}

var G__23586 = args23584.length;
switch (G__23586) {
case 1:
return sablono.core.datetime_local_field23583.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23583.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23584.length)].join('')));

}
});

sablono.core.datetime_local_field23583.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.datetime_local_field23583.call(null,name__23486__auto__,null);
});

sablono.core.datetime_local_field23583.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.datetime_local_field23583.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23583);

/**
 * Creates a email input field.
 */
sablono.core.email_field23587 = (function sablono$core$email_field23587(var_args){
var args23588 = [];
var len__22628__auto___23655 = arguments.length;
var i__22629__auto___23656 = (0);
while(true){
if((i__22629__auto___23656 < len__22628__auto___23655)){
args23588.push((arguments[i__22629__auto___23656]));

var G__23657 = (i__22629__auto___23656 + (1));
i__22629__auto___23656 = G__23657;
continue;
} else {
}
break;
}

var G__23590 = args23588.length;
switch (G__23590) {
case 1:
return sablono.core.email_field23587.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23587.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23588.length)].join('')));

}
});

sablono.core.email_field23587.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.email_field23587.call(null,name__23486__auto__,null);
});

sablono.core.email_field23587.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.email_field23587.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23587);

/**
 * Creates a file input field.
 */
sablono.core.file_field23591 = (function sablono$core$file_field23591(var_args){
var args23592 = [];
var len__22628__auto___23659 = arguments.length;
var i__22629__auto___23660 = (0);
while(true){
if((i__22629__auto___23660 < len__22628__auto___23659)){
args23592.push((arguments[i__22629__auto___23660]));

var G__23661 = (i__22629__auto___23660 + (1));
i__22629__auto___23660 = G__23661;
continue;
} else {
}
break;
}

var G__23594 = args23592.length;
switch (G__23594) {
case 1:
return sablono.core.file_field23591.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23591.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23592.length)].join('')));

}
});

sablono.core.file_field23591.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.file_field23591.call(null,name__23486__auto__,null);
});

sablono.core.file_field23591.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.file_field23591.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23591);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23595 = (function sablono$core$hidden_field23595(var_args){
var args23596 = [];
var len__22628__auto___23663 = arguments.length;
var i__22629__auto___23664 = (0);
while(true){
if((i__22629__auto___23664 < len__22628__auto___23663)){
args23596.push((arguments[i__22629__auto___23664]));

var G__23665 = (i__22629__auto___23664 + (1));
i__22629__auto___23664 = G__23665;
continue;
} else {
}
break;
}

var G__23598 = args23596.length;
switch (G__23598) {
case 1:
return sablono.core.hidden_field23595.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23595.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23596.length)].join('')));

}
});

sablono.core.hidden_field23595.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.hidden_field23595.call(null,name__23486__auto__,null);
});

sablono.core.hidden_field23595.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.hidden_field23595.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23595);

/**
 * Creates a month input field.
 */
sablono.core.month_field23599 = (function sablono$core$month_field23599(var_args){
var args23600 = [];
var len__22628__auto___23667 = arguments.length;
var i__22629__auto___23668 = (0);
while(true){
if((i__22629__auto___23668 < len__22628__auto___23667)){
args23600.push((arguments[i__22629__auto___23668]));

var G__23669 = (i__22629__auto___23668 + (1));
i__22629__auto___23668 = G__23669;
continue;
} else {
}
break;
}

var G__23602 = args23600.length;
switch (G__23602) {
case 1:
return sablono.core.month_field23599.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23599.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23600.length)].join('')));

}
});

sablono.core.month_field23599.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.month_field23599.call(null,name__23486__auto__,null);
});

sablono.core.month_field23599.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.month_field23599.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23599);

/**
 * Creates a number input field.
 */
sablono.core.number_field23603 = (function sablono$core$number_field23603(var_args){
var args23604 = [];
var len__22628__auto___23671 = arguments.length;
var i__22629__auto___23672 = (0);
while(true){
if((i__22629__auto___23672 < len__22628__auto___23671)){
args23604.push((arguments[i__22629__auto___23672]));

var G__23673 = (i__22629__auto___23672 + (1));
i__22629__auto___23672 = G__23673;
continue;
} else {
}
break;
}

var G__23606 = args23604.length;
switch (G__23606) {
case 1:
return sablono.core.number_field23603.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23603.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23604.length)].join('')));

}
});

sablono.core.number_field23603.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.number_field23603.call(null,name__23486__auto__,null);
});

sablono.core.number_field23603.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.number_field23603.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23603);

/**
 * Creates a password input field.
 */
sablono.core.password_field23607 = (function sablono$core$password_field23607(var_args){
var args23608 = [];
var len__22628__auto___23675 = arguments.length;
var i__22629__auto___23676 = (0);
while(true){
if((i__22629__auto___23676 < len__22628__auto___23675)){
args23608.push((arguments[i__22629__auto___23676]));

var G__23677 = (i__22629__auto___23676 + (1));
i__22629__auto___23676 = G__23677;
continue;
} else {
}
break;
}

var G__23610 = args23608.length;
switch (G__23610) {
case 1:
return sablono.core.password_field23607.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23607.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23608.length)].join('')));

}
});

sablono.core.password_field23607.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.password_field23607.call(null,name__23486__auto__,null);
});

sablono.core.password_field23607.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.password_field23607.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23607);

/**
 * Creates a range input field.
 */
sablono.core.range_field23611 = (function sablono$core$range_field23611(var_args){
var args23612 = [];
var len__22628__auto___23679 = arguments.length;
var i__22629__auto___23680 = (0);
while(true){
if((i__22629__auto___23680 < len__22628__auto___23679)){
args23612.push((arguments[i__22629__auto___23680]));

var G__23681 = (i__22629__auto___23680 + (1));
i__22629__auto___23680 = G__23681;
continue;
} else {
}
break;
}

var G__23614 = args23612.length;
switch (G__23614) {
case 1:
return sablono.core.range_field23611.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23611.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23612.length)].join('')));

}
});

sablono.core.range_field23611.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.range_field23611.call(null,name__23486__auto__,null);
});

sablono.core.range_field23611.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.range_field23611.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23611);

/**
 * Creates a search input field.
 */
sablono.core.search_field23615 = (function sablono$core$search_field23615(var_args){
var args23616 = [];
var len__22628__auto___23683 = arguments.length;
var i__22629__auto___23684 = (0);
while(true){
if((i__22629__auto___23684 < len__22628__auto___23683)){
args23616.push((arguments[i__22629__auto___23684]));

var G__23685 = (i__22629__auto___23684 + (1));
i__22629__auto___23684 = G__23685;
continue;
} else {
}
break;
}

var G__23618 = args23616.length;
switch (G__23618) {
case 1:
return sablono.core.search_field23615.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23615.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23616.length)].join('')));

}
});

sablono.core.search_field23615.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.search_field23615.call(null,name__23486__auto__,null);
});

sablono.core.search_field23615.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.search_field23615.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23615);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23619 = (function sablono$core$tel_field23619(var_args){
var args23620 = [];
var len__22628__auto___23687 = arguments.length;
var i__22629__auto___23688 = (0);
while(true){
if((i__22629__auto___23688 < len__22628__auto___23687)){
args23620.push((arguments[i__22629__auto___23688]));

var G__23689 = (i__22629__auto___23688 + (1));
i__22629__auto___23688 = G__23689;
continue;
} else {
}
break;
}

var G__23622 = args23620.length;
switch (G__23622) {
case 1:
return sablono.core.tel_field23619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23620.length)].join('')));

}
});

sablono.core.tel_field23619.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.tel_field23619.call(null,name__23486__auto__,null);
});

sablono.core.tel_field23619.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.tel_field23619.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23619);

/**
 * Creates a text input field.
 */
sablono.core.text_field23623 = (function sablono$core$text_field23623(var_args){
var args23624 = [];
var len__22628__auto___23691 = arguments.length;
var i__22629__auto___23692 = (0);
while(true){
if((i__22629__auto___23692 < len__22628__auto___23691)){
args23624.push((arguments[i__22629__auto___23692]));

var G__23693 = (i__22629__auto___23692 + (1));
i__22629__auto___23692 = G__23693;
continue;
} else {
}
break;
}

var G__23626 = args23624.length;
switch (G__23626) {
case 1:
return sablono.core.text_field23623.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23623.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23624.length)].join('')));

}
});

sablono.core.text_field23623.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.text_field23623.call(null,name__23486__auto__,null);
});

sablono.core.text_field23623.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.text_field23623.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23623);

/**
 * Creates a time input field.
 */
sablono.core.time_field23627 = (function sablono$core$time_field23627(var_args){
var args23628 = [];
var len__22628__auto___23695 = arguments.length;
var i__22629__auto___23696 = (0);
while(true){
if((i__22629__auto___23696 < len__22628__auto___23695)){
args23628.push((arguments[i__22629__auto___23696]));

var G__23697 = (i__22629__auto___23696 + (1));
i__22629__auto___23696 = G__23697;
continue;
} else {
}
break;
}

var G__23630 = args23628.length;
switch (G__23630) {
case 1:
return sablono.core.time_field23627.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23627.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23628.length)].join('')));

}
});

sablono.core.time_field23627.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.time_field23627.call(null,name__23486__auto__,null);
});

sablono.core.time_field23627.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.time_field23627.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23627);

/**
 * Creates a url input field.
 */
sablono.core.url_field23631 = (function sablono$core$url_field23631(var_args){
var args23632 = [];
var len__22628__auto___23699 = arguments.length;
var i__22629__auto___23700 = (0);
while(true){
if((i__22629__auto___23700 < len__22628__auto___23699)){
args23632.push((arguments[i__22629__auto___23700]));

var G__23701 = (i__22629__auto___23700 + (1));
i__22629__auto___23700 = G__23701;
continue;
} else {
}
break;
}

var G__23634 = args23632.length;
switch (G__23634) {
case 1:
return sablono.core.url_field23631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23632.length)].join('')));

}
});

sablono.core.url_field23631.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.url_field23631.call(null,name__23486__auto__,null);
});

sablono.core.url_field23631.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.url_field23631.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23631);

/**
 * Creates a week input field.
 */
sablono.core.week_field23635 = (function sablono$core$week_field23635(var_args){
var args23636 = [];
var len__22628__auto___23703 = arguments.length;
var i__22629__auto___23704 = (0);
while(true){
if((i__22629__auto___23704 < len__22628__auto___23703)){
args23636.push((arguments[i__22629__auto___23704]));

var G__23705 = (i__22629__auto___23704 + (1));
i__22629__auto___23704 = G__23705;
continue;
} else {
}
break;
}

var G__23638 = args23636.length;
switch (G__23638) {
case 1:
return sablono.core.week_field23635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23636.length)].join('')));

}
});

sablono.core.week_field23635.cljs$core$IFn$_invoke$arity$1 = (function (name__23486__auto__){
return sablono.core.week_field23635.call(null,name__23486__auto__,null);
});

sablono.core.week_field23635.cljs$core$IFn$_invoke$arity$2 = (function (name__23486__auto__,value__23487__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__23486__auto__,value__23487__auto__);
});

sablono.core.week_field23635.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23635);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23707 = (function sablono$core$check_box23707(var_args){
var args23708 = [];
var len__22628__auto___23711 = arguments.length;
var i__22629__auto___23712 = (0);
while(true){
if((i__22629__auto___23712 < len__22628__auto___23711)){
args23708.push((arguments[i__22629__auto___23712]));

var G__23713 = (i__22629__auto___23712 + (1));
i__22629__auto___23712 = G__23713;
continue;
} else {
}
break;
}

var G__23710 = args23708.length;
switch (G__23710) {
case 1:
return sablono.core.check_box23707.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23707.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23707.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23708.length)].join('')));

}
});

sablono.core.check_box23707.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box23707.call(null,name,null);
});

sablono.core.check_box23707.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box23707.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box23707.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__21445__auto__ = value;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23707.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23707);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23715 = (function sablono$core$radio_button23715(var_args){
var args23716 = [];
var len__22628__auto___23719 = arguments.length;
var i__22629__auto___23720 = (0);
while(true){
if((i__22629__auto___23720 < len__22628__auto___23719)){
args23716.push((arguments[i__22629__auto___23720]));

var G__23721 = (i__22629__auto___23720 + (1));
i__22629__auto___23720 = G__23721;
continue;
} else {
}
break;
}

var G__23718 = args23716.length;
switch (G__23718) {
case 1:
return sablono.core.radio_button23715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23715.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23716.length)].join('')));

}
});

sablono.core.radio_button23715.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button23715.call(null,group,null);
});

sablono.core.radio_button23715.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button23715.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button23715.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__21445__auto__ = value;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23715.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23715);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23723 = (function sablono$core$select_options23723(coll){
var iter__22299__auto__ = (function sablono$core$select_options23723_$_iter__23740(s__23741){
return (new cljs.core.LazySeq(null,(function (){
var s__23741__$1 = s__23741;
while(true){
var temp__6503__auto__ = cljs.core.seq.call(null,s__23741__$1);
if(temp__6503__auto__){
var s__23741__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23741__$2)){
var c__22297__auto__ = cljs.core.chunk_first.call(null,s__23741__$2);
var size__22298__auto__ = cljs.core.count.call(null,c__22297__auto__);
var b__23743 = cljs.core.chunk_buffer.call(null,size__22298__auto__);
if((function (){var i__23742 = (0);
while(true){
if((i__23742 < size__22298__auto__)){
var x = cljs.core._nth.call(null,c__22297__auto__,i__23742);
cljs.core.chunk_append.call(null,b__23743,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23750 = x;
var text = cljs.core.nth.call(null,vec__23750,(0),null);
var val = cljs.core.nth.call(null,vec__23750,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23750,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23723.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23756 = (i__23742 + (1));
i__23742 = G__23756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23743),sablono$core$select_options23723_$_iter__23740.call(null,cljs.core.chunk_rest.call(null,s__23741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23743),null);
}
} else {
var x = cljs.core.first.call(null,s__23741__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23753 = x;
var text = cljs.core.nth.call(null,vec__23753,(0),null);
var val = cljs.core.nth.call(null,vec__23753,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23753,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options23723.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23723_$_iter__23740.call(null,cljs.core.rest.call(null,s__23741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22299__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23723);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23757 = (function sablono$core$drop_down23757(var_args){
var args23758 = [];
var len__22628__auto___23761 = arguments.length;
var i__22629__auto___23762 = (0);
while(true){
if((i__22629__auto___23762 < len__22628__auto___23761)){
args23758.push((arguments[i__22629__auto___23762]));

var G__23763 = (i__22629__auto___23762 + (1));
i__22629__auto___23762 = G__23763;
continue;
} else {
}
break;
}

var G__23760 = args23758.length;
switch (G__23760) {
case 2:
return sablono.core.drop_down23757.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23757.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23758.length)].join('')));

}
});

sablono.core.drop_down23757.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23757.call(null,name,options,null);
});

sablono.core.drop_down23757.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23757.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23757);
/**
 * Creates a text area element.
 */
sablono.core.text_area23765 = (function sablono$core$text_area23765(var_args){
var args23766 = [];
var len__22628__auto___23769 = arguments.length;
var i__22629__auto___23770 = (0);
while(true){
if((i__22629__auto___23770 < len__22628__auto___23769)){
args23766.push((arguments[i__22629__auto___23770]));

var G__23771 = (i__22629__auto___23770 + (1));
i__22629__auto___23770 = G__23771;
continue;
} else {
}
break;
}

var G__23768 = args23766.length;
switch (G__23768) {
case 1:
return sablono.core.text_area23765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23766.length)].join('')));

}
});

sablono.core.text_area23765.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area23765.call(null,name,null);
});

sablono.core.text_area23765.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__21445__auto__ = value;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23765.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23765);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23773 = (function sablono$core$label23773(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23773);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23774 = (function sablono$core$submit_button23774(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23774);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23775 = (function sablono$core$reset_button23775(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23775);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23776 = (function sablono$core$form_to23776(var_args){
var args__22635__auto__ = [];
var len__22628__auto___23783 = arguments.length;
var i__22629__auto___23784 = (0);
while(true){
if((i__22629__auto___23784 < len__22628__auto___23783)){
args__22635__auto__.push((arguments[i__22629__auto___23784]));

var G__23785 = (i__22629__auto___23784 + (1));
i__22629__auto___23784 = G__23785;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23776.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

sablono.core.form_to23776.cljs$core$IFn$_invoke$arity$variadic = (function (p__23779,body){
var vec__23780 = p__23779;
var method = cljs.core.nth.call(null,vec__23780,(0),null);
var action = cljs.core.nth.call(null,vec__23780,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23776.cljs$lang$maxFixedArity = (1);

sablono.core.form_to23776.cljs$lang$applyTo = (function (seq23777){
var G__23778 = cljs.core.first.call(null,seq23777);
var seq23777__$1 = cljs.core.next.call(null,seq23777);
return sablono.core.form_to23776.cljs$core$IFn$_invoke$arity$variadic(G__23778,seq23777__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23776);

//# sourceMappingURL=core.js.map?rel=1471651205507