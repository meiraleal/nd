// Compiled by ClojureScript 1.9.89 {}
goog.provide('devtools.munging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devtools.util');
devtools.munging.dollar_replacement = "~\uFE69~";
devtools.munging.max_fixed_arity_to_scan = (64);
devtools.munging.get_fn_source_safely = (function devtools$munging$get_fn_source_safely(f){
try{var o__30610__auto__ = f;
return goog.object.get(o__30610__auto__,"toString").call(o__30610__auto__);
}catch (e30690){var _ = e30690;
return "";
}});
devtools.munging.get_fn_fixed_arity = (function devtools$munging$get_fn_fixed_arity(f,n){
return goog.object.get(f,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
});
devtools.munging.get_fn_variadic_arity = (function devtools$munging$get_fn_variadic_arity(f){
return goog.object.get(f,[cljs.core.str("cljs$core$IFn$_invoke$arity$variadic")].join(''));
});
devtools.munging.get_fn_max_fixed_arity = (function devtools$munging$get_fn_max_fixed_arity(f){
return goog.object.get(f,"cljs$lang$maxFixedArity");
});
/**
 * Given a character with a single digit converts it into a subscript character.
 *   Zero chracter maps to unicode 'SUBSCRIPT ZERO' (U+2080).
 */
devtools.munging.char_to_subscript = (function devtools$munging$char_to_subscript(char$){
if(typeof char$ === 'string'){
} else {
throw (new Error("Assert failed: (string? char)"));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,char$),(1))){
} else {
throw (new Error("Assert failed: (= (count char) 1)"));
}

var char_code = (function (){var o__30610__auto__ = (new String(char$));
return goog.object.get(o__30610__auto__,"charCodeAt").call(o__30610__auto__,(0));
})();
var num_code = (char_code - (48));
var subscript_code = ((8320) + num_code);
var o__30610__auto__ = String;
return goog.object.get(o__30610__auto__,"fromCharCode").call(o__30610__auto__,subscript_code);
});
/**
 * Given a subscript number converts it into a string representation consisting of unicode subscript characters (digits).
 */
devtools.munging.make_subscript = (function devtools$munging$make_subscript(subscript){
if(typeof subscript === 'number'){
} else {
throw (new Error("Assert failed: (number? subscript)"));
}

return clojure.string.join.call(null,cljs.core.map.call(null,devtools.munging.char_to_subscript,[cljs.core.str(subscript)].join('')));
});
/**
 * Given a character with a single digit converts it into a superscript character.
 *   Zero chracter maps to unicode 'SUPERSCRIPT ZERO' (U+2070).
 */
devtools.munging.char_to_superscript = (function devtools$munging$char_to_superscript(char$){
if(typeof char$ === 'string'){
} else {
throw (new Error("Assert failed: (string? char)"));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,char$),(1))){
} else {
throw (new Error("Assert failed: (= (count char) 1)"));
}

var char_code = (function (){var o__30610__auto__ = (new String(char$));
return goog.object.get(o__30610__auto__,"charCodeAt").call(o__30610__auto__,(0));
})();
var num_code = (char_code - (48));
var superscript_code = (function (){var G__30692 = num_code;
switch (G__30692) {
case (1):
return (185);

break;
case (2):
return (178);

break;
case (3):
return (179);

break;
default:
return ((8304) + num_code);

}
})();
var o__30610__auto__ = String;
return goog.object.get(o__30610__auto__,"fromCharCode").call(o__30610__auto__,superscript_code);
});
/**
 * Given a superscript number converts it into a string representation consisting of unicode superscript characters (digits).
 */
devtools.munging.make_superscript = (function devtools$munging$make_superscript(superscript){
if(typeof superscript === 'number'){
} else {
throw (new Error("Assert failed: (number? superscript)"));
}

return clojure.string.join.call(null,cljs.core.map.call(null,devtools.munging.char_to_superscript,[cljs.core.str(superscript)].join('')));
});
/**
 * Given a Javascript name answers if the name was likely generated by ClojureScript.
 *   We use a simple heuristic here:
 *  The name must contain at least two separate dollars because we assume two-segment namespaces.
 */
devtools.munging.cljs_fn_name_QMARK_ = (function devtools$munging$cljs_fn_name_QMARK_(munged_name){
if(typeof munged_name === 'string'){
return cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,/^[^$]*\$[^$]+\$.*$/,munged_name));
} else {
return null;
}
});
/**
 * Given a function source code parses out [name args]. Note that both strings are still munged.
 *   Suitable for further processing.
 * 
 *   For exampe for input below the function will return ["devtools_sample$core$hello" "name, unused_param"]:
 * 
 *   function devtools_sample$core$hello(name, unused_param){
 *  return [cljs.core.str("hello, "),cljs.core.str(name),cljs.core.str("!")].join('');
 *   }
 *   
 */
devtools.munging.parse_fn_source = (function devtools$munging$parse_fn_source(fn_source){
var temp__6501__auto__ = cljs.core.second.call(null,cljs.core.re_find.call(null,/function\s(.*?)\{/,fn_source));
if(cljs.core.truth_(temp__6501__auto__)){
var meat = temp__6501__auto__;
var temp__6501__auto____$1 = cljs.core.re_find.call(null,/(.*?)\((.*)\)/,meat);
if(cljs.core.truth_(temp__6501__auto____$1)){
var match = temp__6501__auto____$1;
return cljs.core.rest.call(null,match);
} else {
return null;
}
} else {
return null;
}
});
devtools.munging.trivial_fn_source_QMARK_ = (function devtools$munging$trivial_fn_source_QMARK_(fn_source){
if(typeof fn_source === 'string'){
} else {
throw (new Error("Assert failed: (string? fn-source)"));
}

return (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,/function\s*\(\s*\)\s*\{\s*\}\s*/,fn_source))) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,/function.*\(\)\s*\{\s*\[native code\]\s*\}\s*/,fn_source)));
});
/**
 * Given a Javascript function object returns true if the function looks like a ClojureScript function.
 * 
 *   Uses various heuristics:
 *  1. must be fn? (is javascript function or satisfies Fn and IFn protocols)
 *  2. and name must be cljs-fn-name? (name can come from f.name or parsed out of function source)
 *  3. or if anonymous function, must be non-trivial
 */
devtools.munging.cljs_fn_QMARK_ = (function devtools$munging$cljs_fn_QMARK_(f){
if(cljs.core.truth_((function (){try{return cljs.core.fn_QMARK_.call(null,f);
}catch (e30698){var e__30635__auto__ = e30698;
return false;
}})())){
var name = goog.object.get(f,cljs.core.name);
if(!(cljs.core.empty_QMARK_.call(null,name))){
return devtools.munging.cljs_fn_name_QMARK_.call(null,name);
} else {
var fn_source = devtools.munging.get_fn_source_safely.call(null,f);
var vec__30699 = devtools.munging.parse_fn_source.call(null,fn_source);
var name__$1 = cljs.core.nth.call(null,vec__30699,(0),null);
if(!(cljs.core.empty_QMARK_.call(null,name__$1))){
return devtools.munging.cljs_fn_name_QMARK_.call(null,name__$1);
} else {
return cljs.core.not.call(null,devtools.munging.trivial_fn_source_QMARK_.call(null,fn_source));
}
}
} else {
return null;
}
});
/**
 * Standard cljs.core/demunge is too agresive in replacing dollars.
 *   This wrapper function works around it by leaving dollars intact.
 */
devtools.munging.dollar_preserving_demunge = (function devtools$munging$dollar_preserving_demunge(munged_name){
return clojure.string.replace.call(null,cljs.core.demunge.call(null,clojure.string.replace.call(null,munged_name,"$",devtools.munging.dollar_replacement)),devtools.munging.dollar_replacement,"$");
});
devtools.munging.demunge_ns = (function devtools$munging$demunge_ns(munged_name){
return clojure.string.replace.call(null,devtools.munging.dollar_preserving_demunge.call(null,munged_name),"$",".");
});
devtools.munging.ns_exists_QMARK_ = (function devtools$munging$ns_exists_QMARK_(ns_module_name){
if(typeof ns_module_name === 'string'){
} else {
throw (new Error("Assert failed: (string? ns-module-name)"));
}

var temp__6501__auto__ = (function (){var temp__6503__auto__ = goog.object.get(window,"goog");
if(cljs.core.truth_(temp__6503__auto__)){
var o__30623__auto__ = temp__6503__auto__;
var temp__6503__auto____$1 = goog.object.get(o__30623__auto__,"dependencies_");
if(cljs.core.truth_(temp__6503__auto____$1)){
var o__30622__auto__ = temp__6503__auto____$1;
return goog.object.get(o__30622__auto__,"nameToPath");
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__6501__auto__)){
var goog_namespaces = temp__6501__auto__;
return cljs.core.some_QMARK_.call(null,goog.object.get(goog_namespaces,ns_module_name));
} else {
return null;
}
});
/**
 * Given a name broken into namespace parts returns [detected-ns remaining-parts],
 *   where detected-ns is a string representing longest detected existing namespace and
 *   remaining-parts is a vector of remaing input parts not included in the detected-ns concatenation.
 * 
 *   For given input ["cljs" "core" "first"] returns ["cljs.core" ["first"]] (asumming cljs.core exists)
 */
devtools.munging.detect_namespace_prefix = (function devtools$munging$detect_namespace_prefix(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30708 = arguments.length;
var i__22629__auto___30709 = (0);
while(true){
if((i__22629__auto___30709 < len__22628__auto___30708)){
args__22635__auto__.push((arguments[i__22629__auto___30709]));

var G__30710 = (i__22629__auto___30709 + (1));
i__22629__auto___30709 = G__30710;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,p__30704){
var vec__30705 = p__30704;
var ns_detector = cljs.core.nth.call(null,vec__30705,(0),null);
var effective_detector = (function (){var or__21445__auto__ = ns_detector;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return devtools.munging.ns_exists_QMARK_;
}
})();
var name_tokens = cljs.core.PersistentVector.EMPTY;
var remaining_tokens = tokens;
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining_tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",name_tokens], null);
} else {
var ns_name = clojure.string.join.call(null,".",remaining_tokens);
if(cljs.core.truth_(effective_detector.call(null,ns_name))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_name,name_tokens], null);
} else {
var G__30711 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,remaining_tokens)], null),name_tokens);
var G__30712 = cljs.core.butlast.call(null,remaining_tokens);
name_tokens = G__30711;
remaining_tokens = G__30712;
continue;
}
}
break;
}
});

devtools.munging.detect_namespace_prefix.cljs$lang$maxFixedArity = (1);

devtools.munging.detect_namespace_prefix.cljs$lang$applyTo = (function (seq30702){
var G__30703 = cljs.core.first.call(null,seq30702);
var seq30702__$1 = cljs.core.next.call(null,seq30702);
return devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic(G__30703,seq30702__$1);
});

devtools.munging.normalize_arity = (function devtools$munging$normalize_arity(arity_tokens){
if(!(cljs.core.empty_QMARK_.call(null,arity_tokens))){
var arity = cljs.core.first.call(null,arity_tokens);
var G__30714 = arity;
switch (G__30714) {
case "variadic":
return arity;

break;
default:
var o__30610__auto__ = window;
return goog.object.get(o__30610__auto__,"parseInt").call(o__30610__auto__,arity,(10));

}
} else {
return null;
}
});
devtools.munging.strip_arity = (function devtools$munging$strip_arity(tokens){
var vec__30720 = cljs.core.split_with.call(null,(function (p1__30716_SHARP_){
return cljs.core.not_EQ_.call(null,p1__30716_SHARP_,"arity");
}),tokens);
var prefix_tokens = cljs.core.nth.call(null,vec__30720,(0),null);
var arity_tokens = cljs.core.nth.call(null,vec__30720,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix_tokens,devtools.munging.normalize_arity.call(null,cljs.core.rest.call(null,arity_tokens))], null);
});
devtools.munging.parse_protocol = (function devtools$munging$parse_protocol(tokens,detector){
var remaining_tokens = tokens;
var name_tokens = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,remaining_tokens)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_tokens], null);
} else {
var vec__30726 = devtools.munging.detect_namespace_prefix.call(null,remaining_tokens,detector);
var protocol_ns = cljs.core.nth.call(null,vec__30726,(0),null);
var name_and_method_tokens = cljs.core.nth.call(null,vec__30726,(1),null);
if(cljs.core.empty_QMARK_.call(null,protocol_ns)){
var G__30729 = cljs.core.rest.call(null,remaining_tokens);
var G__30730 = cljs.core.conj.call(null,name_tokens,cljs.core.first.call(null,remaining_tokens));
remaining_tokens = G__30729;
name_tokens = G__30730;
continue;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [name_tokens,protocol_ns,cljs.core.first.call(null,name_and_method_tokens),cljs.core.rest.call(null,name_and_method_tokens)], null);
}
}
break;
}
});
/**
 * Given a munged-name from Javascript lands attempts to break it into:
 *   [fn-ns fn-name protocol-ns protocol-name protocol-method arity].
 * 
 *   Protocol and arity elements are optional. Function elements are always present or "".
 * 
 *   examples for input:
 *  cljs$core$rest => ['cljs.core', 'rest']
 *  cljs.core.reduce$cljs$core$IFn$_invoke$arity$3 => ['cljs.core' 'reduce' 'cljs.core' 'IFn' '_invoke' 3]
 */
devtools.munging.break_munged_name = (function devtools$munging$break_munged_name(var_args){
var args30731 = [];
var len__22628__auto___30743 = arguments.length;
var i__22629__auto___30744 = (0);
while(true){
if((i__22629__auto___30744 < len__22628__auto___30743)){
args30731.push((arguments[i__22629__auto___30744]));

var G__30745 = (i__22629__auto___30744 + (1));
i__22629__auto___30744 = G__30745;
continue;
} else {
}
break;
}

var G__30733 = args30731.length;
switch (G__30733) {
case 1:
return devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30731.length)].join('')));

}
});

devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$1 = (function (munged_name){
return devtools.munging.break_munged_name.call(null,munged_name,null);
});

devtools.munging.break_munged_name.cljs$core$IFn$_invoke$arity$2 = (function (munged_name,ns_detector){
if(cljs.core.empty_QMARK_.call(null,munged_name)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
} else {
var effective_detector = (function (){var or__21445__auto__ = ns_detector;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return devtools.munging.ns_exists_QMARK_;
}
})();
var tokens = cljs.core.vec.call(null,munged_name.split(/[$.]/));
var vec__30734 = devtools.munging.strip_arity.call(null,tokens);
var tokens__$1 = cljs.core.nth.call(null,vec__30734,(0),null);
var arity = cljs.core.nth.call(null,vec__30734,(1),null);
var vec__30737 = devtools.munging.detect_namespace_prefix.call(null,tokens__$1,effective_detector);
var fn_ns = cljs.core.nth.call(null,vec__30737,(0),null);
var tokens__$2 = cljs.core.nth.call(null,vec__30737,(1),null);
var vec__30740 = devtools.munging.parse_protocol.call(null,tokens__$2,effective_detector);
var fn_name_tokens = cljs.core.nth.call(null,vec__30740,(0),null);
var protocol_ns = cljs.core.nth.call(null,vec__30740,(1),null);
var protocol_name = cljs.core.nth.call(null,vec__30740,(2),null);
var protocol_method_tokens = cljs.core.nth.call(null,vec__30740,(3),null);
var fn_name = clojure.string.join.call(null,"$",fn_name_tokens);
var protocol_method = (cljs.core.truth_(protocol_method_tokens)?clojure.string.join.call(null,"$",protocol_method_tokens):null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_ns,fn_name,protocol_ns,protocol_name,protocol_method,arity], null);
}
});

devtools.munging.break_munged_name.cljs$lang$maxFixedArity = 2;

/**
 * Given a munged-name from Javascript lands attempts to break it into a namespace part and remaining short name.
 *   Then applies appropriate demunging on them and returns ClojureScript versions of the names.
 */
devtools.munging.break_and_demunge_name = (function devtools$munging$break_and_demunge_name(var_args){
var args30747 = [];
var len__22628__auto___30753 = arguments.length;
var i__22629__auto___30754 = (0);
while(true){
if((i__22629__auto___30754 < len__22628__auto___30753)){
args30747.push((arguments[i__22629__auto___30754]));

var G__30755 = (i__22629__auto___30754 + (1));
i__22629__auto___30754 = G__30755;
continue;
} else {
}
break;
}

var G__30749 = args30747.length;
switch (G__30749) {
case 1:
return devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30747.length)].join('')));

}
});

devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$1 = (function (munged_name){
return devtools.munging.break_and_demunge_name.call(null,munged_name,null);
});

devtools.munging.break_and_demunge_name.cljs$core$IFn$_invoke$arity$2 = (function (munged_name,ns_detector){
var result = devtools.munging.break_munged_name.call(null,munged_name,ns_detector);
var vec__30750 = result;
var munged_ns = cljs.core.nth.call(null,vec__30750,(0),null);
var munged_name__$1 = cljs.core.nth.call(null,vec__30750,(1),null);
var munged_protocol_ns = cljs.core.nth.call(null,vec__30750,(2),null);
var munged_protocol_name = cljs.core.nth.call(null,vec__30750,(3),null);
var munged_protocol_method = cljs.core.nth.call(null,vec__30750,(4),null);
var arity = cljs.core.nth.call(null,vec__30750,(5),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.munging.demunge_ns.call(null,munged_ns),devtools.munging.dollar_preserving_demunge.call(null,munged_name__$1),(cljs.core.truth_(munged_protocol_ns)?devtools.munging.demunge_ns.call(null,munged_protocol_ns):null),(cljs.core.truth_(munged_protocol_name)?cljs.core.demunge.call(null,munged_protocol_name):null),(cljs.core.truth_(munged_protocol_method)?devtools.munging.dollar_preserving_demunge.call(null,munged_protocol_method):null),arity], null);
});

devtools.munging.break_and_demunge_name.cljs$lang$maxFixedArity = 2;

/**
 * Given function source code tries to retrieve [ns name & args] on best effort basis, where
 *   ns is demunged namespace part of the function name (or "" if namespace cannot be detected)
 *   name is demunged short name (or "" if function is anonymous or name cannot be retrieved)
 *   args is optional number of demunged argument names.
 * 
 *   Please note that this function always returns a vector with something. In worst cases ["" ""].
 *   
 */
devtools.munging.parse_fn_source_info = (function devtools$munging$parse_fn_source_info(fn_source){
var temp__6501__auto__ = devtools.munging.parse_fn_source.call(null,fn_source);
if(cljs.core.truth_(temp__6501__auto__)){
var vec__30763 = temp__6501__auto__;
var munged_name = cljs.core.nth.call(null,vec__30763,(0),null);
var args = cljs.core.nth.call(null,vec__30763,(1),null);
var vec__30766 = devtools.munging.break_and_demunge_name.call(null,munged_name);
var ns = cljs.core.nth.call(null,vec__30766,(0),null);
var name = cljs.core.nth.call(null,vec__30766,(1),null);
var demunged_args = cljs.core.map.call(null,cljs.core.comp.call(null,devtools.munging.dollar_preserving_demunge,clojure.string.trim),clojure.string.split.call(null,args,/,/));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,name], null),demunged_args);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",""], null);
}
});
/**
 * Given Javascript function object tries to retrieve [ns name & args] as in parse-fn-source-info (on best effort basis).
 */
devtools.munging.parse_fn_info = (function devtools$munging$parse_fn_info(f){
var fn_source = devtools.munging.get_fn_source_safely.call(null,f);
return devtools.munging.parse_fn_source_info.call(null,fn_source);
});
/**
 * Given Javascript function object tries to retrieve [ns name & args] as in parse-fn-info (on best effort basis).
 * 
 *   The difference from parse-fn-info is that this function prefers to read args from arities if available.
 *   It recurses arbitrary deep following IFn protocol leads.
 * 
 *   If we hit multi-arity situation in leaf, we don't attempt to list arguments and return ::multi-arity placeholder instead.
 * 
 *   The reason for reading arities is that it gives more accurate parameter names in some cases.
 *   We observed that variadic functions don't always contain original parameter names, but individual IFn arity functions do.
 */
devtools.munging.parse_fn_info_deep = (function devtools$munging$parse_fn_info_deep(f){
var fn_info = devtools.munging.parse_fn_info.call(null,f);
var arities = devtools.munging.collect_fn_arities.call(null,f);
if(cljs.core.some_QMARK_.call(null,arities)){
if((cljs.core.count.call(null,arities) > (1))){
return cljs.core.concat.call(null,cljs.core.take.call(null,(2),fn_info),new cljs.core.Keyword("devtools.munging","multi-arity","devtools.munging/multi-arity",-2011705837));
} else {
return cljs.core.concat.call(null,cljs.core.take.call(null,(2),fn_info),cljs.core.drop.call(null,(2),devtools$munging$parse_fn_info_deep.call(null,cljs.core.second.call(null,cljs.core.first.call(null,arities)))));
}
} else {
return fn_info;
}
});
/**
 * Given a demunged ClojureScript parameter name. Tries to detect human readable part and returns the index where it ends.
 *   Returns nil if no prefix can be detected.
 * 
 *   The idea is to convert macro-generated parameters and other generated names to more friendly names.
 *   We observed that param names generated by gensym have prefix followed by big numbers.
 *   Other generated names contain two dashes after prefix (originally probably using underscores).
 */
devtools.munging.find_index_of_human_prefix = (function devtools$munging$find_index_of_human_prefix(name){
var sep_start = name.indexOf("--");
var num_prefix = cljs.core.count.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/(.*?)\d{2,}/,name)));
var finds = cljs.core.filter.call(null,cljs.core.pos_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sep_start,num_prefix], null));
if(!(cljs.core.empty_QMARK_.call(null,finds))){
return cljs.core.apply.call(null,cljs.core.min,finds);
} else {
return null;
}
});
/**
 * Given a name and intermediate state. Convert name to a human readable version by keeping human readable prefix with
 *   optional subscribt postfix and store it in ::result. Subscript number is picked based on state. State keeps track of
 *   previously assigned subscripts. Returns a new state.
 */
devtools.munging.humanize_name = (function devtools$munging$humanize_name(state,name){
var index = devtools.munging.find_index_of_human_prefix.call(null,name);
var prefix = (((index > (0)))?name.substring((0),index):name);
var temp__6501__auto__ = cljs.core.get.call(null,state,prefix);
if(cljs.core.truth_(temp__6501__auto__)){
var subscript = temp__6501__auto__;
return cljs.core.update.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword("devtools.munging","result","devtools.munging/result",1642759166),cljs.core.conj,[cljs.core.str(prefix),cljs.core.str(devtools.munging.make_subscript.call(null,subscript))].join('')),prefix,cljs.core.inc);
} else {
return cljs.core.assoc.call(null,cljs.core.update.call(null,state,new cljs.core.Keyword("devtools.munging","result","devtools.munging/result",1642759166),cljs.core.conj,prefix),prefix,(2));
}
});
/**
 * Given a list of names, returns a list of human-readable versions of those names.
 *   It detects human-readable prefix using a simple heuristics. When names repeat it assigns simple subscripts starting with 2.
 *   Subscripts are assigned left-to-right.
 * 
 *   Given ["p--a" "p--b" "x" "p--c"] returns ["p" "p₂" "x" "p₃"]
 */
devtools.munging.humanize_names = (function devtools$munging$humanize_names(names){
return cljs.core.with_meta.call(null,new cljs.core.Keyword("devtools.munging","result","devtools.munging/result",1642759166).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,devtools.munging.humanize_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("devtools.munging","result","devtools.munging/result",1642759166),cljs.core.PersistentVector.EMPTY], null),names)),cljs.core.meta.call(null,names));
});
devtools.munging.collect_fn_fixed_arities = (function devtools$munging$collect_fn_fixed_arities(f,max_arity){
var arity = (0);
var collection = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((arity > max_arity)){
return collection;
} else {
var G__30769 = (arity + (1));
var G__30770 = (function (){var temp__6501__auto__ = devtools.munging.get_fn_fixed_arity.call(null,f,arity);
if(cljs.core.truth_(temp__6501__auto__)){
var arity_fn = temp__6501__auto__;
return cljs.core.assoc.call(null,collection,arity,arity_fn);
} else {
return collection;
}
})();
arity = G__30769;
collection = G__30770;
continue;
}
break;
}
});
devtools.munging.collect_fn_variadic_arities = (function devtools$munging$collect_fn_variadic_arities(f){
var temp__6501__auto__ = devtools.munging.get_fn_variadic_arity.call(null,f);
if(cljs.core.truth_(temp__6501__auto__)){
var variadic_arity = temp__6501__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908),variadic_arity], null);
} else {
return null;
}
});
devtools.munging.review_arity = (function devtools$munging$review_arity(p__30771){
var vec__30775 = p__30771;
var arity = cljs.core.nth.call(null,vec__30775,(0),null);
var arity_fn = cljs.core.nth.call(null,vec__30775,(1),null);
var sub_arities = devtools.munging.collect_fn_arities.call(null,arity_fn);
if(cljs.core.truth_(new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908).cljs$core$IFn$_invoke$arity$1(sub_arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908),arity_fn], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arity,arity_fn], null);
}
});
/**
 * Some arities can be marked as fixed arity but in fact point to a variadic-arity function. We want to detect this case
 *   and turn such improperly categorized arities to ::variadic.
 */
devtools.munging.review_arities = (function devtools$munging$review_arities(arities){
if(cljs.core.truth_(new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908).cljs$core$IFn$_invoke$arity$1(arities))){
return arities;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,devtools.munging.review_arity,arities));
}
});
/**
 * Given a Javascript function object, tries to inspect known arity properties generated by ClojureScript compiler and
 *   collects all available arity functions into a map. Arities are keyed by arity count and variadic arity gets ::variadic key.
 */
devtools.munging.collect_fn_arities = (function devtools$munging$collect_fn_arities(f){
var max_fixed_arity = devtools.munging.get_fn_max_fixed_arity.call(null,f);
var fixed_arities = devtools.munging.collect_fn_fixed_arities.call(null,f,(function (){var or__21445__auto__ = max_fixed_arity;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return devtools.munging.max_fixed_arity_to_scan;
}
})());
var variadic_arities = devtools.munging.collect_fn_variadic_arities.call(null,f);
var arities = devtools.munging.review_arities.call(null,cljs.core.merge.call(null,fixed_arities,variadic_arities));
if(!(cljs.core.empty_QMARK_.call(null,arities))){
return arities;
} else {
return null;
}
});
/**
 * ::variadic goes last, other keywords compare by name.
 */
devtools.munging.arity_keywords_comparator = (function devtools$munging$arity_keywords_comparator(x,y){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908),x)){
return (1);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908),y)){
return (-1);
} else {
return cljs.core.compare.call(null,cljs.core.name.call(null,x),cljs.core.name.call(null,y));

}
}
});
/**
 * numbers go first (ordered), then keywords (ordered by name), and then ::variadic sticks last
 */
devtools.munging.arities_key_comparator = (function devtools$munging$arities_key_comparator(x,y){
var kx_QMARK_ = (x instanceof cljs.core.Keyword);
var ky_QMARK_ = (y instanceof cljs.core.Keyword);
if((kx_QMARK_) && (ky_QMARK_)){
return devtools.munging.arity_keywords_comparator.call(null,x,y);
} else {
if(kx_QMARK_){
return (1);
} else {
if(ky_QMARK_){
return (-1);
} else {
return cljs.core.compare.call(null,x,y);

}
}
}
});
devtools.munging.arities_to_args_lists_STAR_ = (function devtools$munging$arities_to_args_lists_STAR_(arities){
var sorted_keys = cljs.core.sort.call(null,devtools.munging.arities_key_comparator,cljs.core.keys.call(null,arities));
var sorted_fns = cljs.core.map.call(null,((function (sorted_keys){
return (function (p1__30778_SHARP_){
return cljs.core.get.call(null,arities,p1__30778_SHARP_);
});})(sorted_keys))
,sorted_keys);
var sorted_infos = cljs.core.map.call(null,devtools.munging.parse_fn_info_deep,sorted_fns);
var sorted_args_lists = cljs.core.map.call(null,((function (sorted_keys,sorted_fns,sorted_infos){
return (function (p1__30779_SHARP_){
return cljs.core.drop.call(null,(2),p1__30779_SHARP_);
});})(sorted_keys,sorted_fns,sorted_infos))
,sorted_infos);
if(cljs.core._EQ_.call(null,cljs.core.last.call(null,sorted_keys),new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908))){
return cljs.core.concat.call(null,cljs.core.butlast.call(null,sorted_args_lists),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,cljs.core.last.call(null,sorted_args_lists),cljs.core.assoc,new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908),true)], null));
} else {
return sorted_args_lists;
}
});
/**
 * Given a map of arity functions. Tries to parse individual functions and prepare an arguments list for each arity.
 *   Returned list of arguments list is sorted by arity count, variadic arity goes last if available.
 * 
 *   The function also optionally humanizes argument names in each arguments list if requested.
 */
devtools.munging.arities_to_args_lists = (function devtools$munging$arities_to_args_lists(var_args){
var args__22635__auto__ = [];
var len__22628__auto___30786 = arguments.length;
var i__22629__auto___30787 = (0);
while(true){
if((i__22629__auto___30787 < len__22628__auto___30786)){
args__22635__auto__.push((arguments[i__22629__auto___30787]));

var G__30788 = (i__22629__auto___30787 + (1));
i__22629__auto___30787 = G__30788;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((1) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((1)),(0),null)):null);
return devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22636__auto__);
});

devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic = (function (arities,p__30782){
var vec__30783 = p__30782;
var humanize_QMARK_ = cljs.core.nth.call(null,vec__30783,(0),null);
var args_lists = devtools.munging.arities_to_args_lists_STAR_.call(null,arities);
if(cljs.core.truth_(humanize_QMARK_)){
return cljs.core.map.call(null,devtools.munging.humanize_names,args_lists);
} else {
return args_lists;
}
});

devtools.munging.arities_to_args_lists.cljs$lang$maxFixedArity = (1);

devtools.munging.arities_to_args_lists.cljs$lang$applyTo = (function (seq30780){
var G__30781 = cljs.core.first.call(null,seq30780);
var seq30780__$1 = cljs.core.next.call(null,seq30780);
return devtools.munging.arities_to_args_lists.cljs$core$IFn$_invoke$arity$variadic(G__30781,seq30780__$1);
});

/**
 * Converts a list of arguments lists into a list of strings suitable for UI presentation.
 */
devtools.munging.args_lists_to_strings = (function devtools$munging$args_lists_to_strings(args_lists,spacer_symbol,multi_arity_symbol,rest_symbol){
var string_mapper = (function (arg){
var G__30790 = (((arg instanceof cljs.core.Keyword))?arg.fqn:null);
switch (G__30790) {
case "devtools.munging/multi-arity":
return multi_arity_symbol;

break;
default:
return arg;

}
});
var printer = ((function (string_mapper){
return (function (args_list){
var variadic_QMARK_ = new cljs.core.Keyword("devtools.munging","variadic","devtools.munging/variadic",1596047908).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,args_list));
var args_strings = cljs.core.map.call(null,string_mapper,args_list);
return [cljs.core.str(clojure.string.join.call(null,spacer_symbol,cljs.core.butlast.call(null,args_strings))),cljs.core.str((cljs.core.truth_(variadic_QMARK_)?rest_symbol:spacer_symbol)),cljs.core.str(cljs.core.last.call(null,args_strings))].join('');
});})(string_mapper))
;
return cljs.core.map.call(null,clojure.string.trim,cljs.core.map.call(null,printer,args_lists));
});
devtools.munging.extract_args_strings = (function devtools$munging$extract_args_strings(f,humanize_QMARK_,spacer_symbol,multi_arity_symbol,rest_symbol){
return devtools.munging.args_lists_to_strings.call(null,devtools.munging.arities_to_args_lists.call(null,(function (){var or__21445__auto__ = devtools.munging.collect_fn_arities.call(null,f);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"naked","naked",373474222),f], null);
}
})(),humanize_QMARK_),spacer_symbol,multi_arity_symbol,rest_symbol);
});
devtools.munging.common_protocol_QMARK_ = (function devtools$munging$common_protocol_QMARK_(protocol_ns,protocol_name){
return (cljs.core._EQ_.call(null,protocol_ns,"cljs.core")) && (cljs.core._EQ_.call(null,protocol_name,"IFn"));
});
devtools.munging.present_fn_part = (function devtools$munging$present_fn_part(fn_ns,fn_name,include_ns_QMARK_){
return [cljs.core.str((cljs.core.truth_((function (){var and__21433__auto__ = include_ns_QMARK_;
if(cljs.core.truth_(and__21433__auto__)){
return !(cljs.core.empty_QMARK_.call(null,fn_ns));
} else {
return and__21433__auto__;
}
})())?[cljs.core.str(fn_ns),cljs.core.str("/")].join(''):null)),cljs.core.str(fn_name)].join('');
});
devtools.munging.present_protocol_part = (function devtools$munging$present_protocol_part(protocol_ns,protocol_name,protocol_method,include_protocol_ns_QMARK_){
return [cljs.core.str((cljs.core.truth_(include_protocol_ns_QMARK_)?protocol_ns:null)),cljs.core.str(((!(cljs.core.empty_QMARK_.call(null,protocol_name)))?[cljs.core.str((cljs.core.truth_(include_protocol_ns_QMARK_)?".":null)),cljs.core.str(protocol_name)].join(''):null)),cljs.core.str(((!(cljs.core.empty_QMARK_.call(null,protocol_method)))?[cljs.core.str((cljs.core.truth_((function (){var or__21445__auto__ = include_protocol_ns_QMARK_;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return !(cljs.core.empty_QMARK_.call(null,protocol_name));
}
})())?":":null)),cljs.core.str(protocol_method)].join(''):null))].join('');
});
/**
 * Given javascript function name tries to present it as plain string for display in UI on best effort basis.
 */
devtools.munging.present_function_name = (function devtools$munging$present_function_name(munged_name,options){
var map__30797 = options;
var map__30797__$1 = ((((!((map__30797 == null)))?((((map__30797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30797):map__30797);
var include_ns_QMARK_ = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"include-ns?","include-ns?",-341372810));
var include_protocol_ns_QMARK_ = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"include-protocol-ns?","include-protocol-ns?",989250951));
var silence_common_protocols_QMARK_ = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"silence-common-protocols?","silence-common-protocols?",2012431893));
var ns_detector = cljs.core.get.call(null,map__30797__$1,new cljs.core.Keyword(null,"ns-detector","ns-detector",-2041592760));
var vec__30798 = devtools.munging.break_and_demunge_name.call(null,munged_name,ns_detector);
var fn_ns = cljs.core.nth.call(null,vec__30798,(0),null);
var fn_name = cljs.core.nth.call(null,vec__30798,(1),null);
var protocol_ns = cljs.core.nth.call(null,vec__30798,(2),null);
var protocol_name = cljs.core.nth.call(null,vec__30798,(3),null);
var protocol_method = cljs.core.nth.call(null,vec__30798,(4),null);
var arity = cljs.core.nth.call(null,vec__30798,(5),null);
var arity_str = ((cljs.core.some_QMARK_.call(null,arity))?((cljs.core._EQ_.call(null,arity,"variadic"))?"\u207F":devtools.munging.make_superscript.call(null,arity)):null);
if(cljs.core.empty_QMARK_.call(null,fn_name)){
return munged_name;
} else {
var fn_part = devtools.munging.present_fn_part.call(null,fn_ns,fn_name,include_ns_QMARK_);
var protocol_part = (cljs.core.truth_((function (){var and__21433__auto__ = protocol_ns;
if(cljs.core.truth_(and__21433__auto__)){
return cljs.core.not.call(null,(function (){var and__21433__auto____$1 = silence_common_protocols_QMARK_;
if(cljs.core.truth_(and__21433__auto____$1)){
return devtools.munging.common_protocol_QMARK_.call(null,protocol_ns,protocol_name);
} else {
return and__21433__auto____$1;
}
})());
} else {
return and__21433__auto__;
}
})())?devtools.munging.present_protocol_part.call(null,protocol_ns,protocol_name,protocol_method,include_protocol_ns_QMARK_):null);
return [cljs.core.str((function (){var or__21445__auto__ = protocol_part;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return fn_part;
}
})()),cljs.core.str(arity_str),cljs.core.str((cljs.core.truth_(protocol_part)?[cljs.core.str(" ("),cljs.core.str(fn_part),cljs.core.str(")")].join(''):null))].join('');
}
});

//# sourceMappingURL=munging.js.map?rel=1471651299525