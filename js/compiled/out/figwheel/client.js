// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.4-7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args28501 = [];
var len__22628__auto___28504 = arguments.length;
var i__22629__auto___28505 = (0);
while(true){
if((i__22629__auto___28505 < len__22628__auto___28504)){
args28501.push((arguments[i__22629__auto___28505]));

var G__28506 = (i__22629__auto___28505 + (1));
i__22629__auto___28505 = G__28506;
continue;
} else {
}
break;
}

var G__28503 = args28501.length;
switch (G__28503) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28501.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__22635__auto__ = [];
var len__22628__auto___28509 = arguments.length;
var i__22629__auto___28510 = (0);
while(true){
if((i__22629__auto___28510 < len__22628__auto___28509)){
args__22635__auto__.push((arguments[i__22629__auto___28510]));

var G__28511 = (i__22629__auto___28510 + (1));
i__22629__auto___28510 = G__28511;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq28508){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28508));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__22635__auto__ = [];
var len__22628__auto___28513 = arguments.length;
var i__22629__auto___28514 = (0);
while(true){
if((i__22629__auto___28514 < len__22628__auto___28513)){
args__22635__auto__.push((arguments[i__22629__auto___28514]));

var G__28515 = (i__22629__auto___28514 + (1));
i__22629__auto___28514 = G__28515;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq28512){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28512));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28516 = cljs.core._EQ_;
var expr__28517 = (function (){var or__21445__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28520){if((e28520 instanceof Error)){
var e = e28520;
return false;
} else {
throw e28520;

}
}})();
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28516.call(null,"true",expr__28517))){
return true;
} else {
if(cljs.core.truth_(pred__28516.call(null,"false",expr__28517))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28517)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28522){if((e28522 instanceof Error)){
var e = e28522;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28522;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28523){
var map__28526 = p__28523;
var map__28526__$1 = ((((!((map__28526 == null)))?((((map__28526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28526):map__28526);
var message = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__21445__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__21433__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__21433__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__21433__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23895__auto___28688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___28688,ch){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___28688,ch){
return (function (state_28657){
var state_val_28658 = (state_28657[(1)]);
if((state_val_28658 === (7))){
var inst_28653 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28659_28689 = state_28657__$1;
(statearr_28659_28689[(2)] = inst_28653);

(statearr_28659_28689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (1))){
var state_28657__$1 = state_28657;
var statearr_28660_28690 = state_28657__$1;
(statearr_28660_28690[(2)] = null);

(statearr_28660_28690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (4))){
var inst_28610 = (state_28657[(7)]);
var inst_28610__$1 = (state_28657[(2)]);
var state_28657__$1 = (function (){var statearr_28661 = state_28657;
(statearr_28661[(7)] = inst_28610__$1);

return statearr_28661;
})();
if(cljs.core.truth_(inst_28610__$1)){
var statearr_28662_28691 = state_28657__$1;
(statearr_28662_28691[(1)] = (5));

} else {
var statearr_28663_28692 = state_28657__$1;
(statearr_28663_28692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (15))){
var inst_28617 = (state_28657[(8)]);
var inst_28632 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28617);
var inst_28633 = cljs.core.first.call(null,inst_28632);
var inst_28634 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28633);
var inst_28635 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28634)].join('');
var inst_28636 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28635);
var state_28657__$1 = state_28657;
var statearr_28664_28693 = state_28657__$1;
(statearr_28664_28693[(2)] = inst_28636);

(statearr_28664_28693[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (13))){
var inst_28641 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28665_28694 = state_28657__$1;
(statearr_28665_28694[(2)] = inst_28641);

(statearr_28665_28694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (6))){
var state_28657__$1 = state_28657;
var statearr_28666_28695 = state_28657__$1;
(statearr_28666_28695[(2)] = null);

(statearr_28666_28695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (17))){
var inst_28639 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28667_28696 = state_28657__$1;
(statearr_28667_28696[(2)] = inst_28639);

(statearr_28667_28696[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (3))){
var inst_28655 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28657__$1,inst_28655);
} else {
if((state_val_28658 === (12))){
var inst_28616 = (state_28657[(9)]);
var inst_28630 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28616,opts);
var state_28657__$1 = state_28657;
if(cljs.core.truth_(inst_28630)){
var statearr_28668_28697 = state_28657__$1;
(statearr_28668_28697[(1)] = (15));

} else {
var statearr_28669_28698 = state_28657__$1;
(statearr_28669_28698[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (2))){
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28657__$1,(4),ch);
} else {
if((state_val_28658 === (11))){
var inst_28617 = (state_28657[(8)]);
var inst_28622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28623 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28617);
var inst_28624 = cljs.core.async.timeout.call(null,(1000));
var inst_28625 = [inst_28623,inst_28624];
var inst_28626 = (new cljs.core.PersistentVector(null,2,(5),inst_28622,inst_28625,null));
var state_28657__$1 = state_28657;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28657__$1,(14),inst_28626);
} else {
if((state_val_28658 === (9))){
var inst_28617 = (state_28657[(8)]);
var inst_28643 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28644 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28617);
var inst_28645 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28644);
var inst_28646 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28645)].join('');
var inst_28647 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28646);
var state_28657__$1 = (function (){var statearr_28670 = state_28657;
(statearr_28670[(10)] = inst_28643);

return statearr_28670;
})();
var statearr_28671_28699 = state_28657__$1;
(statearr_28671_28699[(2)] = inst_28647);

(statearr_28671_28699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (5))){
var inst_28610 = (state_28657[(7)]);
var inst_28612 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28613 = (new cljs.core.PersistentArrayMap(null,2,inst_28612,null));
var inst_28614 = (new cljs.core.PersistentHashSet(null,inst_28613,null));
var inst_28615 = figwheel.client.focus_msgs.call(null,inst_28614,inst_28610);
var inst_28616 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28615);
var inst_28617 = cljs.core.first.call(null,inst_28615);
var inst_28618 = figwheel.client.autoload_QMARK_.call(null);
var state_28657__$1 = (function (){var statearr_28672 = state_28657;
(statearr_28672[(9)] = inst_28616);

(statearr_28672[(8)] = inst_28617);

return statearr_28672;
})();
if(cljs.core.truth_(inst_28618)){
var statearr_28673_28700 = state_28657__$1;
(statearr_28673_28700[(1)] = (8));

} else {
var statearr_28674_28701 = state_28657__$1;
(statearr_28674_28701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (14))){
var inst_28628 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28675_28702 = state_28657__$1;
(statearr_28675_28702[(2)] = inst_28628);

(statearr_28675_28702[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (16))){
var state_28657__$1 = state_28657;
var statearr_28676_28703 = state_28657__$1;
(statearr_28676_28703[(2)] = null);

(statearr_28676_28703[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (10))){
var inst_28649 = (state_28657[(2)]);
var state_28657__$1 = (function (){var statearr_28677 = state_28657;
(statearr_28677[(11)] = inst_28649);

return statearr_28677;
})();
var statearr_28678_28704 = state_28657__$1;
(statearr_28678_28704[(2)] = null);

(statearr_28678_28704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (8))){
var inst_28616 = (state_28657[(9)]);
var inst_28620 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28616,opts);
var state_28657__$1 = state_28657;
if(cljs.core.truth_(inst_28620)){
var statearr_28679_28705 = state_28657__$1;
(statearr_28679_28705[(1)] = (11));

} else {
var statearr_28680_28706 = state_28657__$1;
(statearr_28680_28706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23895__auto___28688,ch))
;
return ((function (switch__23872__auto__,c__23895__auto___28688,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23873__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23873__auto____0 = (function (){
var statearr_28684 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28684[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23873__auto__);

(statearr_28684[(1)] = (1));

return statearr_28684;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23873__auto____1 = (function (state_28657){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_28657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e28685){if((e28685 instanceof Object)){
var ex__23876__auto__ = e28685;
var statearr_28686_28707 = state_28657;
(statearr_28686_28707[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28708 = state_28657;
state_28657 = G__28708;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23873__auto__ = function(state_28657){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23873__auto____1.call(this,state_28657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23873__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23873__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___28688,ch))
})();
var state__23897__auto__ = (function (){var statearr_28687 = f__23896__auto__.call(null);
(statearr_28687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___28688);

return statearr_28687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___28688,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28709_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28709_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28712 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28712){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e28711){if((e28711 instanceof Error)){
var e = e28711;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28712], null));
} else {
var e = e28711;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_28712))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28713){
var map__28722 = p__28713;
var map__28722__$1 = ((((!((map__28722 == null)))?((((map__28722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28722):map__28722);
var opts = map__28722__$1;
var build_id = cljs.core.get.call(null,map__28722__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28722,map__28722__$1,opts,build_id){
return (function (p__28724){
var vec__28725 = p__28724;
var seq__28726 = cljs.core.seq.call(null,vec__28725);
var first__28727 = cljs.core.first.call(null,seq__28726);
var seq__28726__$1 = cljs.core.next.call(null,seq__28726);
var map__28728 = first__28727;
var map__28728__$1 = ((((!((map__28728 == null)))?((((map__28728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28728):map__28728);
var msg = map__28728__$1;
var msg_name = cljs.core.get.call(null,map__28728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28726__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28725,seq__28726,first__28727,seq__28726__$1,map__28728,map__28728__$1,msg,msg_name,_,map__28722,map__28722__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28725,seq__28726,first__28727,seq__28726__$1,map__28728,map__28728__$1,msg,msg_name,_,map__28722,map__28722__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28722,map__28722__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28736){
var vec__28737 = p__28736;
var seq__28738 = cljs.core.seq.call(null,vec__28737);
var first__28739 = cljs.core.first.call(null,seq__28738);
var seq__28738__$1 = cljs.core.next.call(null,seq__28738);
var map__28740 = first__28739;
var map__28740__$1 = ((((!((map__28740 == null)))?((((map__28740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28740):map__28740);
var msg = map__28740__$1;
var msg_name = cljs.core.get.call(null,map__28740__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28738__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28742){
var map__28754 = p__28742;
var map__28754__$1 = ((((!((map__28754 == null)))?((((map__28754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28754):map__28754);
var on_compile_warning = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28754__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28754,map__28754__$1,on_compile_warning,on_compile_fail){
return (function (p__28756){
var vec__28757 = p__28756;
var seq__28758 = cljs.core.seq.call(null,vec__28757);
var first__28759 = cljs.core.first.call(null,seq__28758);
var seq__28758__$1 = cljs.core.next.call(null,seq__28758);
var map__28760 = first__28759;
var map__28760__$1 = ((((!((map__28760 == null)))?((((map__28760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28760):map__28760);
var msg = map__28760__$1;
var msg_name = cljs.core.get.call(null,map__28760__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__28758__$1;
var pred__28762 = cljs.core._EQ_;
var expr__28763 = msg_name;
if(cljs.core.truth_(pred__28762.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28763))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28762.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28763))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28754,map__28754__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__,msg_hist,msg_names,msg){
return (function (state_28971){
var state_val_28972 = (state_28971[(1)]);
if((state_val_28972 === (7))){
var inst_28899 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28899)){
var statearr_28973_29019 = state_28971__$1;
(statearr_28973_29019[(1)] = (8));

} else {
var statearr_28974_29020 = state_28971__$1;
(statearr_28974_29020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (20))){
var inst_28965 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28975_29021 = state_28971__$1;
(statearr_28975_29021[(2)] = inst_28965);

(statearr_28975_29021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (27))){
var inst_28961 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28976_29022 = state_28971__$1;
(statearr_28976_29022[(2)] = inst_28961);

(statearr_28976_29022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (1))){
var inst_28892 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28892)){
var statearr_28977_29023 = state_28971__$1;
(statearr_28977_29023[(1)] = (2));

} else {
var statearr_28978_29024 = state_28971__$1;
(statearr_28978_29024[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (24))){
var inst_28963 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28979_29025 = state_28971__$1;
(statearr_28979_29025[(2)] = inst_28963);

(statearr_28979_29025[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (4))){
var inst_28969 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28971__$1,inst_28969);
} else {
if((state_val_28972 === (15))){
var inst_28967 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28980_29026 = state_28971__$1;
(statearr_28980_29026[(2)] = inst_28967);

(statearr_28980_29026[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (21))){
var inst_28926 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28981_29027 = state_28971__$1;
(statearr_28981_29027[(2)] = inst_28926);

(statearr_28981_29027[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (31))){
var inst_28950 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28950)){
var statearr_28982_29028 = state_28971__$1;
(statearr_28982_29028[(1)] = (34));

} else {
var statearr_28983_29029 = state_28971__$1;
(statearr_28983_29029[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (32))){
var inst_28959 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28984_29030 = state_28971__$1;
(statearr_28984_29030[(2)] = inst_28959);

(statearr_28984_29030[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (33))){
var inst_28948 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28985_29031 = state_28971__$1;
(statearr_28985_29031[(2)] = inst_28948);

(statearr_28985_29031[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (13))){
var inst_28913 = figwheel.client.heads_up.clear.call(null);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(16),inst_28913);
} else {
if((state_val_28972 === (22))){
var inst_28930 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28931 = figwheel.client.heads_up.append_warning_message.call(null,inst_28930);
var state_28971__$1 = state_28971;
var statearr_28986_29032 = state_28971__$1;
(statearr_28986_29032[(2)] = inst_28931);

(statearr_28986_29032[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (36))){
var inst_28957 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28987_29033 = state_28971__$1;
(statearr_28987_29033[(2)] = inst_28957);

(statearr_28987_29033[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (29))){
var inst_28941 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28988_29034 = state_28971__$1;
(statearr_28988_29034[(2)] = inst_28941);

(statearr_28988_29034[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (6))){
var inst_28894 = (state_28971[(7)]);
var state_28971__$1 = state_28971;
var statearr_28989_29035 = state_28971__$1;
(statearr_28989_29035[(2)] = inst_28894);

(statearr_28989_29035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (28))){
var inst_28937 = (state_28971[(2)]);
var inst_28938 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28939 = figwheel.client.heads_up.display_warning.call(null,inst_28938);
var state_28971__$1 = (function (){var statearr_28990 = state_28971;
(statearr_28990[(8)] = inst_28937);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(29),inst_28939);
} else {
if((state_val_28972 === (25))){
var inst_28935 = figwheel.client.heads_up.clear.call(null);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(28),inst_28935);
} else {
if((state_val_28972 === (34))){
var inst_28952 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(37),inst_28952);
} else {
if((state_val_28972 === (17))){
var inst_28919 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28991_29036 = state_28971__$1;
(statearr_28991_29036[(2)] = inst_28919);

(statearr_28991_29036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (3))){
var inst_28911 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28911)){
var statearr_28992_29037 = state_28971__$1;
(statearr_28992_29037[(1)] = (13));

} else {
var statearr_28993_29038 = state_28971__$1;
(statearr_28993_29038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (12))){
var inst_28907 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_28994_29039 = state_28971__$1;
(statearr_28994_29039[(2)] = inst_28907);

(statearr_28994_29039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (2))){
var inst_28894 = (state_28971[(7)]);
var inst_28894__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28971__$1 = (function (){var statearr_28995 = state_28971;
(statearr_28995[(7)] = inst_28894__$1);

return statearr_28995;
})();
if(cljs.core.truth_(inst_28894__$1)){
var statearr_28996_29040 = state_28971__$1;
(statearr_28996_29040[(1)] = (5));

} else {
var statearr_28997_29041 = state_28971__$1;
(statearr_28997_29041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (23))){
var inst_28933 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28933)){
var statearr_28998_29042 = state_28971__$1;
(statearr_28998_29042[(1)] = (25));

} else {
var statearr_28999_29043 = state_28971__$1;
(statearr_28999_29043[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (35))){
var state_28971__$1 = state_28971;
var statearr_29000_29044 = state_28971__$1;
(statearr_29000_29044[(2)] = null);

(statearr_29000_29044[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (19))){
var inst_28928 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28928)){
var statearr_29001_29045 = state_28971__$1;
(statearr_29001_29045[(1)] = (22));

} else {
var statearr_29002_29046 = state_28971__$1;
(statearr_29002_29046[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (11))){
var inst_28903 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_29003_29047 = state_28971__$1;
(statearr_29003_29047[(2)] = inst_28903);

(statearr_29003_29047[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (9))){
var inst_28905 = figwheel.client.heads_up.clear.call(null);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(12),inst_28905);
} else {
if((state_val_28972 === (5))){
var inst_28896 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28971__$1 = state_28971;
var statearr_29004_29048 = state_28971__$1;
(statearr_29004_29048[(2)] = inst_28896);

(statearr_29004_29048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (14))){
var inst_28921 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28921)){
var statearr_29005_29049 = state_28971__$1;
(statearr_29005_29049[(1)] = (18));

} else {
var statearr_29006_29050 = state_28971__$1;
(statearr_29006_29050[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (26))){
var inst_28943 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28971__$1 = state_28971;
if(cljs.core.truth_(inst_28943)){
var statearr_29007_29051 = state_28971__$1;
(statearr_29007_29051[(1)] = (30));

} else {
var statearr_29008_29052 = state_28971__$1;
(statearr_29008_29052[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (16))){
var inst_28915 = (state_28971[(2)]);
var inst_28916 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28917 = figwheel.client.heads_up.display_exception.call(null,inst_28916);
var state_28971__$1 = (function (){var statearr_29009 = state_28971;
(statearr_29009[(9)] = inst_28915);

return statearr_29009;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(17),inst_28917);
} else {
if((state_val_28972 === (30))){
var inst_28945 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28946 = figwheel.client.heads_up.display_warning.call(null,inst_28945);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(33),inst_28946);
} else {
if((state_val_28972 === (10))){
var inst_28909 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_29010_29053 = state_28971__$1;
(statearr_29010_29053[(2)] = inst_28909);

(statearr_29010_29053[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (18))){
var inst_28923 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28924 = figwheel.client.heads_up.display_exception.call(null,inst_28923);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(21),inst_28924);
} else {
if((state_val_28972 === (37))){
var inst_28954 = (state_28971[(2)]);
var state_28971__$1 = state_28971;
var statearr_29011_29054 = state_28971__$1;
(statearr_29011_29054[(2)] = inst_28954);

(statearr_29011_29054[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28972 === (8))){
var inst_28901 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(11),inst_28901);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23895__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23872__auto__,c__23895__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto____0 = (function (){
var statearr_29015 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29015[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto__);

(statearr_29015[(1)] = (1));

return statearr_29015;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto____1 = (function (state_28971){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_28971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e29016){if((e29016 instanceof Object)){
var ex__23876__auto__ = e29016;
var statearr_29017_29055 = state_28971;
(statearr_29017_29055[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29056 = state_28971;
state_28971 = G__29056;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto__ = function(state_28971){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto____1.call(this,state_28971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__,msg_hist,msg_names,msg))
})();
var state__23897__auto__ = (function (){var statearr_29018 = f__23896__auto__.call(null);
(statearr_29018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_29018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__,msg_hist,msg_names,msg))
);

return c__23895__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23895__auto___29119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___29119,ch){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___29119,ch){
return (function (state_29102){
var state_val_29103 = (state_29102[(1)]);
if((state_val_29103 === (1))){
var state_29102__$1 = state_29102;
var statearr_29104_29120 = state_29102__$1;
(statearr_29104_29120[(2)] = null);

(statearr_29104_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (2))){
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(4),ch);
} else {
if((state_val_29103 === (3))){
var inst_29100 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29102__$1,inst_29100);
} else {
if((state_val_29103 === (4))){
var inst_29090 = (state_29102[(7)]);
var inst_29090__$1 = (state_29102[(2)]);
var state_29102__$1 = (function (){var statearr_29105 = state_29102;
(statearr_29105[(7)] = inst_29090__$1);

return statearr_29105;
})();
if(cljs.core.truth_(inst_29090__$1)){
var statearr_29106_29121 = state_29102__$1;
(statearr_29106_29121[(1)] = (5));

} else {
var statearr_29107_29122 = state_29102__$1;
(statearr_29107_29122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (5))){
var inst_29090 = (state_29102[(7)]);
var inst_29092 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29090);
var state_29102__$1 = state_29102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29102__$1,(8),inst_29092);
} else {
if((state_val_29103 === (6))){
var state_29102__$1 = state_29102;
var statearr_29108_29123 = state_29102__$1;
(statearr_29108_29123[(2)] = null);

(statearr_29108_29123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (7))){
var inst_29098 = (state_29102[(2)]);
var state_29102__$1 = state_29102;
var statearr_29109_29124 = state_29102__$1;
(statearr_29109_29124[(2)] = inst_29098);

(statearr_29109_29124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29103 === (8))){
var inst_29094 = (state_29102[(2)]);
var state_29102__$1 = (function (){var statearr_29110 = state_29102;
(statearr_29110[(8)] = inst_29094);

return statearr_29110;
})();
var statearr_29111_29125 = state_29102__$1;
(statearr_29111_29125[(2)] = null);

(statearr_29111_29125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__23895__auto___29119,ch))
;
return ((function (switch__23872__auto__,c__23895__auto___29119,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23873__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23873__auto____0 = (function (){
var statearr_29115 = [null,null,null,null,null,null,null,null,null];
(statearr_29115[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23873__auto__);

(statearr_29115[(1)] = (1));

return statearr_29115;
});
var figwheel$client$heads_up_plugin_$_state_machine__23873__auto____1 = (function (state_29102){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_29102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e29116){if((e29116 instanceof Object)){
var ex__23876__auto__ = e29116;
var statearr_29117_29126 = state_29102;
(statearr_29117_29126[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29127 = state_29102;
state_29102 = G__29127;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23873__auto__ = function(state_29102){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23873__auto____1.call(this,state_29102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23873__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23873__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___29119,ch))
})();
var state__23897__auto__ = (function (){var statearr_29118 = f__23896__auto__.call(null);
(statearr_29118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___29119);

return statearr_29118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___29119,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__){
return (function (state_29148){
var state_val_29149 = (state_29148[(1)]);
if((state_val_29149 === (1))){
var inst_29143 = cljs.core.async.timeout.call(null,(3000));
var state_29148__$1 = state_29148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29148__$1,(2),inst_29143);
} else {
if((state_val_29149 === (2))){
var inst_29145 = (state_29148[(2)]);
var inst_29146 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29148__$1 = (function (){var statearr_29150 = state_29148;
(statearr_29150[(7)] = inst_29145);

return statearr_29150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29148__$1,inst_29146);
} else {
return null;
}
}
});})(c__23895__auto__))
;
return ((function (switch__23872__auto__,c__23895__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23873__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23873__auto____0 = (function (){
var statearr_29154 = [null,null,null,null,null,null,null,null];
(statearr_29154[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23873__auto__);

(statearr_29154[(1)] = (1));

return statearr_29154;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23873__auto____1 = (function (state_29148){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_29148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e29155){if((e29155 instanceof Object)){
var ex__23876__auto__ = e29155;
var statearr_29156_29158 = state_29148;
(statearr_29156_29158[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29159 = state_29148;
state_29148 = G__29159;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23873__auto__ = function(state_29148){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23873__auto____1.call(this,state_29148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23873__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23873__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__))
})();
var state__23897__auto__ = (function (){var statearr_29157 = f__23896__auto__.call(null);
(statearr_29157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_29157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__))
);

return c__23895__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6503__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6503__auto__)){
var figwheel_version = temp__6503__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__,figwheel_version,temp__6503__auto__){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__,figwheel_version,temp__6503__auto__){
return (function (state_29182){
var state_val_29183 = (state_29182[(1)]);
if((state_val_29183 === (1))){
var inst_29176 = cljs.core.async.timeout.call(null,(2000));
var state_29182__$1 = state_29182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29182__$1,(2),inst_29176);
} else {
if((state_val_29183 === (2))){
var inst_29178 = (state_29182[(2)]);
var inst_29179 = [cljs.core.str("Figwheel Client Version \""),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("\" is not equal to "),cljs.core.str("Figwheel Sidecar Version \""),cljs.core.str(figwheel_version),cljs.core.str("\""),cljs.core.str(".  Shutting down Websocket Connection!")].join('');
var inst_29180 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29179);
var state_29182__$1 = (function (){var statearr_29184 = state_29182;
(statearr_29184[(7)] = inst_29178);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29182__$1,inst_29180);
} else {
return null;
}
}
});})(c__23895__auto__,figwheel_version,temp__6503__auto__))
;
return ((function (switch__23872__auto__,c__23895__auto__,figwheel_version,temp__6503__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto____0 = (function (){
var statearr_29188 = [null,null,null,null,null,null,null,null];
(statearr_29188[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto__);

(statearr_29188[(1)] = (1));

return statearr_29188;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto____1 = (function (state_29182){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_29182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e29189){if((e29189 instanceof Object)){
var ex__23876__auto__ = e29189;
var statearr_29190_29192 = state_29182;
(statearr_29190_29192[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29193 = state_29182;
state_29182 = G__29193;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto__ = function(state_29182){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto____1.call(this,state_29182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__,figwheel_version,temp__6503__auto__))
})();
var state__23897__auto__ = (function (){var statearr_29191 = f__23896__auto__.call(null);
(statearr_29191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_29191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__,figwheel_version,temp__6503__auto__))
);

return c__23895__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29194){
var map__29198 = p__29194;
var map__29198__$1 = ((((!((map__29198 == null)))?((((map__29198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29198):map__29198);
var file = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29198__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29200 = "";
var G__29200__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__29200),cljs.core.str("file "),cljs.core.str(file)].join(''):G__29200);
var G__29200__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__29200__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__29200__$1);
if(cljs.core.truth_((function (){var and__21433__auto__ = line;
if(cljs.core.truth_(and__21433__auto__)){
return column;
} else {
return and__21433__auto__;
}
})())){
return [cljs.core.str(G__29200__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__29200__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29201){
var map__29208 = p__29201;
var map__29208__$1 = ((((!((map__29208 == null)))?((((map__29208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var ed = map__29208__$1;
var formatted_exception = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29210_29214 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29211_29215 = null;
var count__29212_29216 = (0);
var i__29213_29217 = (0);
while(true){
if((i__29213_29217 < count__29212_29216)){
var msg_29218 = cljs.core._nth.call(null,chunk__29211_29215,i__29213_29217);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29218);

var G__29219 = seq__29210_29214;
var G__29220 = chunk__29211_29215;
var G__29221 = count__29212_29216;
var G__29222 = (i__29213_29217 + (1));
seq__29210_29214 = G__29219;
chunk__29211_29215 = G__29220;
count__29212_29216 = G__29221;
i__29213_29217 = G__29222;
continue;
} else {
var temp__6503__auto___29223 = cljs.core.seq.call(null,seq__29210_29214);
if(temp__6503__auto___29223){
var seq__29210_29224__$1 = temp__6503__auto___29223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29210_29224__$1)){
var c__22348__auto___29225 = cljs.core.chunk_first.call(null,seq__29210_29224__$1);
var G__29226 = cljs.core.chunk_rest.call(null,seq__29210_29224__$1);
var G__29227 = c__22348__auto___29225;
var G__29228 = cljs.core.count.call(null,c__22348__auto___29225);
var G__29229 = (0);
seq__29210_29214 = G__29226;
chunk__29211_29215 = G__29227;
count__29212_29216 = G__29228;
i__29213_29217 = G__29229;
continue;
} else {
var msg_29230 = cljs.core.first.call(null,seq__29210_29224__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29230);

var G__29231 = cljs.core.next.call(null,seq__29210_29224__$1);
var G__29232 = null;
var G__29233 = (0);
var G__29234 = (0);
seq__29210_29214 = G__29231;
chunk__29211_29215 = G__29232;
count__29212_29216 = G__29233;
i__29213_29217 = G__29234;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29235){
var map__29238 = p__29235;
var map__29238__$1 = ((((!((map__29238 == null)))?((((map__29238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29238):map__29238);
var w = map__29238__$1;
var message = cljs.core.get.call(null,map__29238__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,323,323,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,315,315,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__21433__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__21433__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__21433__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29250 = cljs.core.seq.call(null,plugins);
var chunk__29251 = null;
var count__29252 = (0);
var i__29253 = (0);
while(true){
if((i__29253 < count__29252)){
var vec__29254 = cljs.core._nth.call(null,chunk__29251,i__29253);
var k = cljs.core.nth.call(null,vec__29254,(0),null);
var plugin = cljs.core.nth.call(null,vec__29254,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29260 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29250,chunk__29251,count__29252,i__29253,pl_29260,vec__29254,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29260.call(null,msg_hist);
});})(seq__29250,chunk__29251,count__29252,i__29253,pl_29260,vec__29254,k,plugin))
);
} else {
}

var G__29261 = seq__29250;
var G__29262 = chunk__29251;
var G__29263 = count__29252;
var G__29264 = (i__29253 + (1));
seq__29250 = G__29261;
chunk__29251 = G__29262;
count__29252 = G__29263;
i__29253 = G__29264;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__29250);
if(temp__6503__auto__){
var seq__29250__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29250__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__29250__$1);
var G__29265 = cljs.core.chunk_rest.call(null,seq__29250__$1);
var G__29266 = c__22348__auto__;
var G__29267 = cljs.core.count.call(null,c__22348__auto__);
var G__29268 = (0);
seq__29250 = G__29265;
chunk__29251 = G__29266;
count__29252 = G__29267;
i__29253 = G__29268;
continue;
} else {
var vec__29257 = cljs.core.first.call(null,seq__29250__$1);
var k = cljs.core.nth.call(null,vec__29257,(0),null);
var plugin = cljs.core.nth.call(null,vec__29257,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29269 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29250,chunk__29251,count__29252,i__29253,pl_29269,vec__29257,k,plugin,seq__29250__$1,temp__6503__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29269.call(null,msg_hist);
});})(seq__29250,chunk__29251,count__29252,i__29253,pl_29269,vec__29257,k,plugin,seq__29250__$1,temp__6503__auto__))
);
} else {
}

var G__29270 = cljs.core.next.call(null,seq__29250__$1);
var G__29271 = null;
var G__29272 = (0);
var G__29273 = (0);
seq__29250 = G__29270;
chunk__29251 = G__29271;
count__29252 = G__29272;
i__29253 = G__29273;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29274 = [];
var len__22628__auto___29281 = arguments.length;
var i__22629__auto___29282 = (0);
while(true){
if((i__22629__auto___29282 < len__22628__auto___29281)){
args29274.push((arguments[i__22629__auto___29282]));

var G__29283 = (i__22629__auto___29282 + (1));
i__22629__auto___29282 = G__29283;
continue;
} else {
}
break;
}

var G__29276 = args29274.length;
switch (G__29276) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29274.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__29277_29285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__29278_29286 = null;
var count__29279_29287 = (0);
var i__29280_29288 = (0);
while(true){
if((i__29280_29288 < count__29279_29287)){
var msg_29289 = cljs.core._nth.call(null,chunk__29278_29286,i__29280_29288);
figwheel.client.socket.handle_incoming_message.call(null,msg_29289);

var G__29290 = seq__29277_29285;
var G__29291 = chunk__29278_29286;
var G__29292 = count__29279_29287;
var G__29293 = (i__29280_29288 + (1));
seq__29277_29285 = G__29290;
chunk__29278_29286 = G__29291;
count__29279_29287 = G__29292;
i__29280_29288 = G__29293;
continue;
} else {
var temp__6503__auto___29294 = cljs.core.seq.call(null,seq__29277_29285);
if(temp__6503__auto___29294){
var seq__29277_29295__$1 = temp__6503__auto___29294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29277_29295__$1)){
var c__22348__auto___29296 = cljs.core.chunk_first.call(null,seq__29277_29295__$1);
var G__29297 = cljs.core.chunk_rest.call(null,seq__29277_29295__$1);
var G__29298 = c__22348__auto___29296;
var G__29299 = cljs.core.count.call(null,c__22348__auto___29296);
var G__29300 = (0);
seq__29277_29285 = G__29297;
chunk__29278_29286 = G__29298;
count__29279_29287 = G__29299;
i__29280_29288 = G__29300;
continue;
} else {
var msg_29301 = cljs.core.first.call(null,seq__29277_29295__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_29301);

var G__29302 = cljs.core.next.call(null,seq__29277_29295__$1);
var G__29303 = null;
var G__29304 = (0);
var G__29305 = (0);
seq__29277_29285 = G__29302;
chunk__29278_29286 = G__29303;
count__29279_29287 = G__29304;
i__29280_29288 = G__29305;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__22635__auto__ = [];
var len__22628__auto___29310 = arguments.length;
var i__22629__auto___29311 = (0);
while(true){
if((i__22629__auto___29311 < len__22628__auto___29310)){
args__22635__auto__.push((arguments[i__22629__auto___29311]));

var G__29312 = (i__22629__auto___29311 + (1));
i__22629__auto___29311 = G__29312;
continue;
} else {
}
break;
}

var argseq__22636__auto__ = ((((0) < args__22635__auto__.length))?(new cljs.core.IndexedSeq(args__22635__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__22636__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29307){
var map__29308 = p__29307;
var map__29308__$1 = ((((!((map__29308 == null)))?((((map__29308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29308):map__29308);
var opts = map__29308__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29306){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29306));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e29314){if((e29314 instanceof Error)){
var e = e29314;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e29314;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__29318){
var map__29319 = p__29318;
var map__29319__$1 = ((((!((map__29319 == null)))?((((map__29319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29319):map__29319);
var msg_name = cljs.core.get.call(null,map__29319__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1471651297967