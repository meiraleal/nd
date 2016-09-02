// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32828){
var map__32853 = p__32828;
var map__32853__$1 = ((((!((map__32853 == null)))?((((map__32853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32853):map__32853);
var m = map__32853__$1;
var n = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6503__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6503__auto__)){
var ns = temp__6503__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32855_32877 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32856_32878 = null;
var count__32857_32879 = (0);
var i__32858_32880 = (0);
while(true){
if((i__32858_32880 < count__32857_32879)){
var f_32881 = cljs.core._nth.call(null,chunk__32856_32878,i__32858_32880);
cljs.core.println.call(null,"  ",f_32881);

var G__32882 = seq__32855_32877;
var G__32883 = chunk__32856_32878;
var G__32884 = count__32857_32879;
var G__32885 = (i__32858_32880 + (1));
seq__32855_32877 = G__32882;
chunk__32856_32878 = G__32883;
count__32857_32879 = G__32884;
i__32858_32880 = G__32885;
continue;
} else {
var temp__6503__auto___32886 = cljs.core.seq.call(null,seq__32855_32877);
if(temp__6503__auto___32886){
var seq__32855_32887__$1 = temp__6503__auto___32886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32855_32887__$1)){
var c__22348__auto___32888 = cljs.core.chunk_first.call(null,seq__32855_32887__$1);
var G__32889 = cljs.core.chunk_rest.call(null,seq__32855_32887__$1);
var G__32890 = c__22348__auto___32888;
var G__32891 = cljs.core.count.call(null,c__22348__auto___32888);
var G__32892 = (0);
seq__32855_32877 = G__32889;
chunk__32856_32878 = G__32890;
count__32857_32879 = G__32891;
i__32858_32880 = G__32892;
continue;
} else {
var f_32893 = cljs.core.first.call(null,seq__32855_32887__$1);
cljs.core.println.call(null,"  ",f_32893);

var G__32894 = cljs.core.next.call(null,seq__32855_32887__$1);
var G__32895 = null;
var G__32896 = (0);
var G__32897 = (0);
seq__32855_32877 = G__32894;
chunk__32856_32878 = G__32895;
count__32857_32879 = G__32896;
i__32858_32880 = G__32897;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32898 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21445__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32898);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32898)))?cljs.core.second.call(null,arglists_32898):arglists_32898));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32859_32899 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32860_32900 = null;
var count__32861_32901 = (0);
var i__32862_32902 = (0);
while(true){
if((i__32862_32902 < count__32861_32901)){
var vec__32863_32903 = cljs.core._nth.call(null,chunk__32860_32900,i__32862_32902);
var name_32904 = cljs.core.nth.call(null,vec__32863_32903,(0),null);
var map__32866_32905 = cljs.core.nth.call(null,vec__32863_32903,(1),null);
var map__32866_32906__$1 = ((((!((map__32866_32905 == null)))?((((map__32866_32905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32866_32905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32866_32905):map__32866_32905);
var doc_32907 = cljs.core.get.call(null,map__32866_32906__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32908 = cljs.core.get.call(null,map__32866_32906__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32904);

cljs.core.println.call(null," ",arglists_32908);

if(cljs.core.truth_(doc_32907)){
cljs.core.println.call(null," ",doc_32907);
} else {
}

var G__32909 = seq__32859_32899;
var G__32910 = chunk__32860_32900;
var G__32911 = count__32861_32901;
var G__32912 = (i__32862_32902 + (1));
seq__32859_32899 = G__32909;
chunk__32860_32900 = G__32910;
count__32861_32901 = G__32911;
i__32862_32902 = G__32912;
continue;
} else {
var temp__6503__auto___32913 = cljs.core.seq.call(null,seq__32859_32899);
if(temp__6503__auto___32913){
var seq__32859_32914__$1 = temp__6503__auto___32913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32859_32914__$1)){
var c__22348__auto___32915 = cljs.core.chunk_first.call(null,seq__32859_32914__$1);
var G__32916 = cljs.core.chunk_rest.call(null,seq__32859_32914__$1);
var G__32917 = c__22348__auto___32915;
var G__32918 = cljs.core.count.call(null,c__22348__auto___32915);
var G__32919 = (0);
seq__32859_32899 = G__32916;
chunk__32860_32900 = G__32917;
count__32861_32901 = G__32918;
i__32862_32902 = G__32919;
continue;
} else {
var vec__32868_32920 = cljs.core.first.call(null,seq__32859_32914__$1);
var name_32921 = cljs.core.nth.call(null,vec__32868_32920,(0),null);
var map__32871_32922 = cljs.core.nth.call(null,vec__32868_32920,(1),null);
var map__32871_32923__$1 = ((((!((map__32871_32922 == null)))?((((map__32871_32922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32871_32922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32871_32922):map__32871_32922);
var doc_32924 = cljs.core.get.call(null,map__32871_32923__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32925 = cljs.core.get.call(null,map__32871_32923__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32921);

cljs.core.println.call(null," ",arglists_32925);

if(cljs.core.truth_(doc_32924)){
cljs.core.println.call(null," ",doc_32924);
} else {
}

var G__32926 = cljs.core.next.call(null,seq__32859_32914__$1);
var G__32927 = null;
var G__32928 = (0);
var G__32929 = (0);
seq__32859_32899 = G__32926;
chunk__32860_32900 = G__32927;
count__32861_32901 = G__32928;
i__32862_32902 = G__32929;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6503__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6503__auto__)){
var fnspec = temp__6503__auto__;
cljs.core.print.call(null,"Spec");

var seq__32873 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32874 = null;
var count__32875 = (0);
var i__32876 = (0);
while(true){
if((i__32876 < count__32875)){
var role = cljs.core._nth.call(null,chunk__32874,i__32876);
var temp__6503__auto___32930__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___32930__$1)){
var spec_32931 = temp__6503__auto___32930__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32931));
} else {
}

var G__32932 = seq__32873;
var G__32933 = chunk__32874;
var G__32934 = count__32875;
var G__32935 = (i__32876 + (1));
seq__32873 = G__32932;
chunk__32874 = G__32933;
count__32875 = G__32934;
i__32876 = G__32935;
continue;
} else {
var temp__6503__auto____$1 = cljs.core.seq.call(null,seq__32873);
if(temp__6503__auto____$1){
var seq__32873__$1 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32873__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__32873__$1);
var G__32936 = cljs.core.chunk_rest.call(null,seq__32873__$1);
var G__32937 = c__22348__auto__;
var G__32938 = cljs.core.count.call(null,c__22348__auto__);
var G__32939 = (0);
seq__32873 = G__32936;
chunk__32874 = G__32937;
count__32875 = G__32938;
i__32876 = G__32939;
continue;
} else {
var role = cljs.core.first.call(null,seq__32873__$1);
var temp__6503__auto___32940__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6503__auto___32940__$2)){
var spec_32941 = temp__6503__auto___32940__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32941));
} else {
}

var G__32942 = cljs.core.next.call(null,seq__32873__$1);
var G__32943 = null;
var G__32944 = (0);
var G__32945 = (0);
seq__32873 = G__32942;
chunk__32874 = G__32943;
count__32875 = G__32944;
i__32876 = G__32945;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1471651226905