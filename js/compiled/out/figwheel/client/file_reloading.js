// Compiled by ClojureScript 1.9.89 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21445__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21445__auto__){
return or__21445__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21445__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26740_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26740_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__26745 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26746 = null;
var count__26747 = (0);
var i__26748 = (0);
while(true){
if((i__26748 < count__26747)){
var n = cljs.core._nth.call(null,chunk__26746,i__26748);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26749 = seq__26745;
var G__26750 = chunk__26746;
var G__26751 = count__26747;
var G__26752 = (i__26748 + (1));
seq__26745 = G__26749;
chunk__26746 = G__26750;
count__26747 = G__26751;
i__26748 = G__26752;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__26745);
if(temp__6503__auto__){
var seq__26745__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26745__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__26745__$1);
var G__26753 = cljs.core.chunk_rest.call(null,seq__26745__$1);
var G__26754 = c__22348__auto__;
var G__26755 = cljs.core.count.call(null,c__22348__auto__);
var G__26756 = (0);
seq__26745 = G__26753;
chunk__26746 = G__26754;
count__26747 = G__26755;
i__26748 = G__26756;
continue;
} else {
var n = cljs.core.first.call(null,seq__26745__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26757 = cljs.core.next.call(null,seq__26745__$1);
var G__26758 = null;
var G__26759 = (0);
var G__26760 = (0);
seq__26745 = G__26757;
chunk__26746 = G__26758;
count__26747 = G__26759;
i__26748 = G__26760;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__26811_26822 = cljs.core.seq.call(null,deps);
var chunk__26812_26823 = null;
var count__26813_26824 = (0);
var i__26814_26825 = (0);
while(true){
if((i__26814_26825 < count__26813_26824)){
var dep_26826 = cljs.core._nth.call(null,chunk__26812_26823,i__26814_26825);
topo_sort_helper_STAR_.call(null,dep_26826,(depth + (1)),state);

var G__26827 = seq__26811_26822;
var G__26828 = chunk__26812_26823;
var G__26829 = count__26813_26824;
var G__26830 = (i__26814_26825 + (1));
seq__26811_26822 = G__26827;
chunk__26812_26823 = G__26828;
count__26813_26824 = G__26829;
i__26814_26825 = G__26830;
continue;
} else {
var temp__6503__auto___26831 = cljs.core.seq.call(null,seq__26811_26822);
if(temp__6503__auto___26831){
var seq__26811_26832__$1 = temp__6503__auto___26831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26811_26832__$1)){
var c__22348__auto___26833 = cljs.core.chunk_first.call(null,seq__26811_26832__$1);
var G__26834 = cljs.core.chunk_rest.call(null,seq__26811_26832__$1);
var G__26835 = c__22348__auto___26833;
var G__26836 = cljs.core.count.call(null,c__22348__auto___26833);
var G__26837 = (0);
seq__26811_26822 = G__26834;
chunk__26812_26823 = G__26835;
count__26813_26824 = G__26836;
i__26814_26825 = G__26837;
continue;
} else {
var dep_26838 = cljs.core.first.call(null,seq__26811_26832__$1);
topo_sort_helper_STAR_.call(null,dep_26838,(depth + (1)),state);

var G__26839 = cljs.core.next.call(null,seq__26811_26832__$1);
var G__26840 = null;
var G__26841 = (0);
var G__26842 = (0);
seq__26811_26822 = G__26839;
chunk__26812_26823 = G__26840;
count__26813_26824 = G__26841;
i__26814_26825 = G__26842;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26815){
var vec__26819 = p__26815;
var seq__26820 = cljs.core.seq.call(null,vec__26819);
var first__26821 = cljs.core.first.call(null,seq__26820);
var seq__26820__$1 = cljs.core.next.call(null,seq__26820);
var x = first__26821;
var xs = seq__26820__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26819,seq__26820,first__26821,seq__26820__$1,x,xs,get_deps__$1){
return (function (p1__26761_SHARP_){
return clojure.set.difference.call(null,p1__26761_SHARP_,x);
});})(vec__26819,seq__26820,first__26821,seq__26820__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26855 = cljs.core.seq.call(null,provides);
var chunk__26856 = null;
var count__26857 = (0);
var i__26858 = (0);
while(true){
if((i__26858 < count__26857)){
var prov = cljs.core._nth.call(null,chunk__26856,i__26858);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26859_26867 = cljs.core.seq.call(null,requires);
var chunk__26860_26868 = null;
var count__26861_26869 = (0);
var i__26862_26870 = (0);
while(true){
if((i__26862_26870 < count__26861_26869)){
var req_26871 = cljs.core._nth.call(null,chunk__26860_26868,i__26862_26870);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26871,prov);

var G__26872 = seq__26859_26867;
var G__26873 = chunk__26860_26868;
var G__26874 = count__26861_26869;
var G__26875 = (i__26862_26870 + (1));
seq__26859_26867 = G__26872;
chunk__26860_26868 = G__26873;
count__26861_26869 = G__26874;
i__26862_26870 = G__26875;
continue;
} else {
var temp__6503__auto___26876 = cljs.core.seq.call(null,seq__26859_26867);
if(temp__6503__auto___26876){
var seq__26859_26877__$1 = temp__6503__auto___26876;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26859_26877__$1)){
var c__22348__auto___26878 = cljs.core.chunk_first.call(null,seq__26859_26877__$1);
var G__26879 = cljs.core.chunk_rest.call(null,seq__26859_26877__$1);
var G__26880 = c__22348__auto___26878;
var G__26881 = cljs.core.count.call(null,c__22348__auto___26878);
var G__26882 = (0);
seq__26859_26867 = G__26879;
chunk__26860_26868 = G__26880;
count__26861_26869 = G__26881;
i__26862_26870 = G__26882;
continue;
} else {
var req_26883 = cljs.core.first.call(null,seq__26859_26877__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26883,prov);

var G__26884 = cljs.core.next.call(null,seq__26859_26877__$1);
var G__26885 = null;
var G__26886 = (0);
var G__26887 = (0);
seq__26859_26867 = G__26884;
chunk__26860_26868 = G__26885;
count__26861_26869 = G__26886;
i__26862_26870 = G__26887;
continue;
}
} else {
}
}
break;
}

var G__26888 = seq__26855;
var G__26889 = chunk__26856;
var G__26890 = count__26857;
var G__26891 = (i__26858 + (1));
seq__26855 = G__26888;
chunk__26856 = G__26889;
count__26857 = G__26890;
i__26858 = G__26891;
continue;
} else {
var temp__6503__auto__ = cljs.core.seq.call(null,seq__26855);
if(temp__6503__auto__){
var seq__26855__$1 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26855__$1)){
var c__22348__auto__ = cljs.core.chunk_first.call(null,seq__26855__$1);
var G__26892 = cljs.core.chunk_rest.call(null,seq__26855__$1);
var G__26893 = c__22348__auto__;
var G__26894 = cljs.core.count.call(null,c__22348__auto__);
var G__26895 = (0);
seq__26855 = G__26892;
chunk__26856 = G__26893;
count__26857 = G__26894;
i__26858 = G__26895;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26855__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26863_26896 = cljs.core.seq.call(null,requires);
var chunk__26864_26897 = null;
var count__26865_26898 = (0);
var i__26866_26899 = (0);
while(true){
if((i__26866_26899 < count__26865_26898)){
var req_26900 = cljs.core._nth.call(null,chunk__26864_26897,i__26866_26899);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26900,prov);

var G__26901 = seq__26863_26896;
var G__26902 = chunk__26864_26897;
var G__26903 = count__26865_26898;
var G__26904 = (i__26866_26899 + (1));
seq__26863_26896 = G__26901;
chunk__26864_26897 = G__26902;
count__26865_26898 = G__26903;
i__26866_26899 = G__26904;
continue;
} else {
var temp__6503__auto___26905__$1 = cljs.core.seq.call(null,seq__26863_26896);
if(temp__6503__auto___26905__$1){
var seq__26863_26906__$1 = temp__6503__auto___26905__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26863_26906__$1)){
var c__22348__auto___26907 = cljs.core.chunk_first.call(null,seq__26863_26906__$1);
var G__26908 = cljs.core.chunk_rest.call(null,seq__26863_26906__$1);
var G__26909 = c__22348__auto___26907;
var G__26910 = cljs.core.count.call(null,c__22348__auto___26907);
var G__26911 = (0);
seq__26863_26896 = G__26908;
chunk__26864_26897 = G__26909;
count__26865_26898 = G__26910;
i__26866_26899 = G__26911;
continue;
} else {
var req_26912 = cljs.core.first.call(null,seq__26863_26906__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26912,prov);

var G__26913 = cljs.core.next.call(null,seq__26863_26906__$1);
var G__26914 = null;
var G__26915 = (0);
var G__26916 = (0);
seq__26863_26896 = G__26913;
chunk__26864_26897 = G__26914;
count__26865_26898 = G__26915;
i__26866_26899 = G__26916;
continue;
}
} else {
}
}
break;
}

var G__26917 = cljs.core.next.call(null,seq__26855__$1);
var G__26918 = null;
var G__26919 = (0);
var G__26920 = (0);
seq__26855 = G__26917;
chunk__26856 = G__26918;
count__26857 = G__26919;
i__26858 = G__26920;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26925_26929 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26926_26930 = null;
var count__26927_26931 = (0);
var i__26928_26932 = (0);
while(true){
if((i__26928_26932 < count__26927_26931)){
var ns_26933 = cljs.core._nth.call(null,chunk__26926_26930,i__26928_26932);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26933);

var G__26934 = seq__26925_26929;
var G__26935 = chunk__26926_26930;
var G__26936 = count__26927_26931;
var G__26937 = (i__26928_26932 + (1));
seq__26925_26929 = G__26934;
chunk__26926_26930 = G__26935;
count__26927_26931 = G__26936;
i__26928_26932 = G__26937;
continue;
} else {
var temp__6503__auto___26938 = cljs.core.seq.call(null,seq__26925_26929);
if(temp__6503__auto___26938){
var seq__26925_26939__$1 = temp__6503__auto___26938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26925_26939__$1)){
var c__22348__auto___26940 = cljs.core.chunk_first.call(null,seq__26925_26939__$1);
var G__26941 = cljs.core.chunk_rest.call(null,seq__26925_26939__$1);
var G__26942 = c__22348__auto___26940;
var G__26943 = cljs.core.count.call(null,c__22348__auto___26940);
var G__26944 = (0);
seq__26925_26929 = G__26941;
chunk__26926_26930 = G__26942;
count__26927_26931 = G__26943;
i__26928_26932 = G__26944;
continue;
} else {
var ns_26945 = cljs.core.first.call(null,seq__26925_26939__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26945);

var G__26946 = cljs.core.next.call(null,seq__26925_26939__$1);
var G__26947 = null;
var G__26948 = (0);
var G__26949 = (0);
seq__26925_26929 = G__26946;
chunk__26926_26930 = G__26947;
count__26927_26931 = G__26948;
i__26928_26932 = G__26949;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21445__auto__ = goog.require__;
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26950__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26951__i = 0, G__26951__a = new Array(arguments.length -  0);
while (G__26951__i < G__26951__a.length) {G__26951__a[G__26951__i] = arguments[G__26951__i + 0]; ++G__26951__i;}
  args = new cljs.core.IndexedSeq(G__26951__a,0);
} 
return G__26950__delegate.call(this,args);};
G__26950.cljs$lang$maxFixedArity = 0;
G__26950.cljs$lang$applyTo = (function (arglist__26952){
var args = cljs.core.seq(arglist__26952);
return G__26950__delegate(args);
});
G__26950.cljs$core$IFn$_invoke$arity$variadic = G__26950__delegate;
return G__26950;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26954 = cljs.core._EQ_;
var expr__26955 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26954.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26955))){
var path_parts = ((function (pred__26954,expr__26955){
return (function (p1__26953_SHARP_){
return clojure.string.split.call(null,p1__26953_SHARP_,/[\/\\]/);
});})(pred__26954,expr__26955))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26954,expr__26955){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26957){if((e26957 instanceof Error)){
var e = e26957;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26957;

}
}})());
});
;})(path_parts,sep,root,pred__26954,expr__26955))
} else {
if(cljs.core.truth_(pred__26954.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26955))){
return ((function (pred__26954,expr__26955){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26954,expr__26955){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26954,expr__26955))
);

return deferred.addErrback(((function (deferred,pred__26954,expr__26955){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26954,expr__26955))
);
});
;})(pred__26954,expr__26955))
} else {
return ((function (pred__26954,expr__26955){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26954,expr__26955))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26958,callback){
var map__26961 = p__26958;
var map__26961__$1 = ((((!((map__26961 == null)))?((((map__26961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26961):map__26961);
var file_msg = map__26961__$1;
var request_url = cljs.core.get.call(null,map__26961__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26961,map__26961__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26961,map__26961__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__){
return (function (state_26985){
var state_val_26986 = (state_26985[(1)]);
if((state_val_26986 === (7))){
var inst_26981 = (state_26985[(2)]);
var state_26985__$1 = state_26985;
var statearr_26987_27007 = state_26985__$1;
(statearr_26987_27007[(2)] = inst_26981);

(statearr_26987_27007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (1))){
var state_26985__$1 = state_26985;
var statearr_26988_27008 = state_26985__$1;
(statearr_26988_27008[(2)] = null);

(statearr_26988_27008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (4))){
var inst_26965 = (state_26985[(7)]);
var inst_26965__$1 = (state_26985[(2)]);
var state_26985__$1 = (function (){var statearr_26989 = state_26985;
(statearr_26989[(7)] = inst_26965__$1);

return statearr_26989;
})();
if(cljs.core.truth_(inst_26965__$1)){
var statearr_26990_27009 = state_26985__$1;
(statearr_26990_27009[(1)] = (5));

} else {
var statearr_26991_27010 = state_26985__$1;
(statearr_26991_27010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (6))){
var state_26985__$1 = state_26985;
var statearr_26992_27011 = state_26985__$1;
(statearr_26992_27011[(2)] = null);

(statearr_26992_27011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (3))){
var inst_26983 = (state_26985[(2)]);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26985__$1,inst_26983);
} else {
if((state_val_26986 === (2))){
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26985__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26986 === (11))){
var inst_26977 = (state_26985[(2)]);
var state_26985__$1 = (function (){var statearr_26993 = state_26985;
(statearr_26993[(8)] = inst_26977);

return statearr_26993;
})();
var statearr_26994_27012 = state_26985__$1;
(statearr_26994_27012[(2)] = null);

(statearr_26994_27012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (9))){
var inst_26971 = (state_26985[(9)]);
var inst_26969 = (state_26985[(10)]);
var inst_26973 = inst_26971.call(null,inst_26969);
var state_26985__$1 = state_26985;
var statearr_26995_27013 = state_26985__$1;
(statearr_26995_27013[(2)] = inst_26973);

(statearr_26995_27013[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (5))){
var inst_26965 = (state_26985[(7)]);
var inst_26967 = figwheel.client.file_reloading.blocking_load.call(null,inst_26965);
var state_26985__$1 = state_26985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26985__$1,(8),inst_26967);
} else {
if((state_val_26986 === (10))){
var inst_26969 = (state_26985[(10)]);
var inst_26975 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26969);
var state_26985__$1 = state_26985;
var statearr_26996_27014 = state_26985__$1;
(statearr_26996_27014[(2)] = inst_26975);

(statearr_26996_27014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26986 === (8))){
var inst_26965 = (state_26985[(7)]);
var inst_26971 = (state_26985[(9)]);
var inst_26969 = (state_26985[(2)]);
var inst_26970 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26971__$1 = cljs.core.get.call(null,inst_26970,inst_26965);
var state_26985__$1 = (function (){var statearr_26997 = state_26985;
(statearr_26997[(9)] = inst_26971__$1);

(statearr_26997[(10)] = inst_26969);

return statearr_26997;
})();
if(cljs.core.truth_(inst_26971__$1)){
var statearr_26998_27015 = state_26985__$1;
(statearr_26998_27015[(1)] = (9));

} else {
var statearr_26999_27016 = state_26985__$1;
(statearr_26999_27016[(1)] = (10));

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
});})(c__23895__auto__))
;
return ((function (switch__23872__auto__,c__23895__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23873__auto__ = null;
var figwheel$client$file_reloading$state_machine__23873__auto____0 = (function (){
var statearr_27003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27003[(0)] = figwheel$client$file_reloading$state_machine__23873__auto__);

(statearr_27003[(1)] = (1));

return statearr_27003;
});
var figwheel$client$file_reloading$state_machine__23873__auto____1 = (function (state_26985){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_26985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e27004){if((e27004 instanceof Object)){
var ex__23876__auto__ = e27004;
var statearr_27005_27017 = state_26985;
(statearr_27005_27017[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27018 = state_26985;
state_26985 = G__27018;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23873__auto__ = function(state_26985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23873__auto____1.call(this,state_26985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23873__auto____0;
figwheel$client$file_reloading$state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23873__auto____1;
return figwheel$client$file_reloading$state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__))
})();
var state__23897__auto__ = (function (){var statearr_27006 = f__23896__auto__.call(null);
(statearr_27006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_27006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__))
);

return c__23895__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27019,callback){
var map__27022 = p__27019;
var map__27022__$1 = ((((!((map__27022 == null)))?((((map__27022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27022):map__27022);
var file_msg = map__27022__$1;
var namespace = cljs.core.get.call(null,map__27022__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27022,map__27022__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27022,map__27022__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27024){
var map__27027 = p__27024;
var map__27027__$1 = ((((!((map__27027 == null)))?((((map__27027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27027):map__27027);
var file_msg = map__27027__$1;
var namespace = cljs.core.get.call(null,map__27027__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21433__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21433__auto__){
var or__21445__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21445__auto__)){
return or__21445__auto__;
} else {
var or__21445__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21445__auto____$1)){
return or__21445__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21433__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27029,callback){
var map__27032 = p__27029;
var map__27032__$1 = ((((!((map__27032 == null)))?((((map__27032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27032):map__27032);
var file_msg = map__27032__$1;
var request_url = cljs.core.get.call(null,map__27032__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23895__auto___27136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto___27136,out){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto___27136,out){
return (function (state_27118){
var state_val_27119 = (state_27118[(1)]);
if((state_val_27119 === (1))){
var inst_27092 = cljs.core.seq.call(null,files);
var inst_27093 = cljs.core.first.call(null,inst_27092);
var inst_27094 = cljs.core.next.call(null,inst_27092);
var inst_27095 = files;
var state_27118__$1 = (function (){var statearr_27120 = state_27118;
(statearr_27120[(7)] = inst_27095);

(statearr_27120[(8)] = inst_27094);

(statearr_27120[(9)] = inst_27093);

return statearr_27120;
})();
var statearr_27121_27137 = state_27118__$1;
(statearr_27121_27137[(2)] = null);

(statearr_27121_27137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (2))){
var inst_27095 = (state_27118[(7)]);
var inst_27101 = (state_27118[(10)]);
var inst_27100 = cljs.core.seq.call(null,inst_27095);
var inst_27101__$1 = cljs.core.first.call(null,inst_27100);
var inst_27102 = cljs.core.next.call(null,inst_27100);
var inst_27103 = (inst_27101__$1 == null);
var inst_27104 = cljs.core.not.call(null,inst_27103);
var state_27118__$1 = (function (){var statearr_27122 = state_27118;
(statearr_27122[(11)] = inst_27102);

(statearr_27122[(10)] = inst_27101__$1);

return statearr_27122;
})();
if(inst_27104){
var statearr_27123_27138 = state_27118__$1;
(statearr_27123_27138[(1)] = (4));

} else {
var statearr_27124_27139 = state_27118__$1;
(statearr_27124_27139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (3))){
var inst_27116 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27118__$1,inst_27116);
} else {
if((state_val_27119 === (4))){
var inst_27101 = (state_27118[(10)]);
var inst_27106 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27101);
var state_27118__$1 = state_27118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27118__$1,(7),inst_27106);
} else {
if((state_val_27119 === (5))){
var inst_27112 = cljs.core.async.close_BANG_.call(null,out);
var state_27118__$1 = state_27118;
var statearr_27125_27140 = state_27118__$1;
(statearr_27125_27140[(2)] = inst_27112);

(statearr_27125_27140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (6))){
var inst_27114 = (state_27118[(2)]);
var state_27118__$1 = state_27118;
var statearr_27126_27141 = state_27118__$1;
(statearr_27126_27141[(2)] = inst_27114);

(statearr_27126_27141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27119 === (7))){
var inst_27102 = (state_27118[(11)]);
var inst_27108 = (state_27118[(2)]);
var inst_27109 = cljs.core.async.put_BANG_.call(null,out,inst_27108);
var inst_27095 = inst_27102;
var state_27118__$1 = (function (){var statearr_27127 = state_27118;
(statearr_27127[(7)] = inst_27095);

(statearr_27127[(12)] = inst_27109);

return statearr_27127;
})();
var statearr_27128_27142 = state_27118__$1;
(statearr_27128_27142[(2)] = null);

(statearr_27128_27142[(1)] = (2));


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
});})(c__23895__auto___27136,out))
;
return ((function (switch__23872__auto__,c__23895__auto___27136,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto____0 = (function (){
var statearr_27132 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27132[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto__);

(statearr_27132[(1)] = (1));

return statearr_27132;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto____1 = (function (state_27118){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_27118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e27133){if((e27133 instanceof Object)){
var ex__23876__auto__ = e27133;
var statearr_27134_27143 = state_27118;
(statearr_27134_27143[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27144 = state_27118;
state_27118 = G__27144;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto__ = function(state_27118){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto____1.call(this,state_27118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto___27136,out))
})();
var state__23897__auto__ = (function (){var statearr_27135 = f__23896__auto__.call(null);
(statearr_27135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto___27136);

return statearr_27135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto___27136,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27145,opts){
var map__27149 = p__27145;
var map__27149__$1 = ((((!((map__27149 == null)))?((((map__27149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27149):map__27149);
var eval_body__$1 = cljs.core.get.call(null,map__27149__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21433__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21433__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21433__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27151){var e = e27151;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6501__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27152_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27152_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6501__auto__)){
var file_msg = temp__6501__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27162){
var vec__27163 = p__27162;
var k = cljs.core.nth.call(null,vec__27163,(0),null);
var v = cljs.core.nth.call(null,vec__27163,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27166){
var vec__27167 = p__27166;
var k = cljs.core.nth.call(null,vec__27167,(0),null);
var v = cljs.core.nth.call(null,vec__27167,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27173,p__27174){
var map__27421 = p__27173;
var map__27421__$1 = ((((!((map__27421 == null)))?((((map__27421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27421):map__27421);
var opts = map__27421__$1;
var before_jsload = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27422 = p__27174;
var map__27422__$1 = ((((!((map__27422 == null)))?((((map__27422.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27422.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27422):map__27422);
var msg = map__27422__$1;
var files = cljs.core.get.call(null,map__27422__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27422__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27422__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__23895__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__23896__auto__ = (function (){var switch__23872__auto__ = ((function (c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27575){
var state_val_27576 = (state_27575[(1)]);
if((state_val_27576 === (7))){
var inst_27437 = (state_27575[(7)]);
var inst_27436 = (state_27575[(8)]);
var inst_27438 = (state_27575[(9)]);
var inst_27439 = (state_27575[(10)]);
var inst_27444 = cljs.core._nth.call(null,inst_27437,inst_27439);
var inst_27445 = figwheel.client.file_reloading.eval_body.call(null,inst_27444,opts);
var inst_27446 = (inst_27439 + (1));
var tmp27577 = inst_27437;
var tmp27578 = inst_27436;
var tmp27579 = inst_27438;
var inst_27436__$1 = tmp27578;
var inst_27437__$1 = tmp27577;
var inst_27438__$1 = tmp27579;
var inst_27439__$1 = inst_27446;
var state_27575__$1 = (function (){var statearr_27580 = state_27575;
(statearr_27580[(7)] = inst_27437__$1);

(statearr_27580[(11)] = inst_27445);

(statearr_27580[(8)] = inst_27436__$1);

(statearr_27580[(9)] = inst_27438__$1);

(statearr_27580[(10)] = inst_27439__$1);

return statearr_27580;
})();
var statearr_27581_27667 = state_27575__$1;
(statearr_27581_27667[(2)] = null);

(statearr_27581_27667[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (20))){
var inst_27479 = (state_27575[(12)]);
var inst_27487 = figwheel.client.file_reloading.sort_files.call(null,inst_27479);
var state_27575__$1 = state_27575;
var statearr_27582_27668 = state_27575__$1;
(statearr_27582_27668[(2)] = inst_27487);

(statearr_27582_27668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (27))){
var state_27575__$1 = state_27575;
var statearr_27583_27669 = state_27575__$1;
(statearr_27583_27669[(2)] = null);

(statearr_27583_27669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (1))){
var inst_27428 = (state_27575[(13)]);
var inst_27425 = before_jsload.call(null,files);
var inst_27426 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27427 = (function (){return ((function (inst_27428,inst_27425,inst_27426,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27170_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27170_SHARP_);
});
;})(inst_27428,inst_27425,inst_27426,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27428__$1 = cljs.core.filter.call(null,inst_27427,files);
var inst_27429 = cljs.core.not_empty.call(null,inst_27428__$1);
var state_27575__$1 = (function (){var statearr_27584 = state_27575;
(statearr_27584[(13)] = inst_27428__$1);

(statearr_27584[(14)] = inst_27426);

(statearr_27584[(15)] = inst_27425);

return statearr_27584;
})();
if(cljs.core.truth_(inst_27429)){
var statearr_27585_27670 = state_27575__$1;
(statearr_27585_27670[(1)] = (2));

} else {
var statearr_27586_27671 = state_27575__$1;
(statearr_27586_27671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (24))){
var state_27575__$1 = state_27575;
var statearr_27587_27672 = state_27575__$1;
(statearr_27587_27672[(2)] = null);

(statearr_27587_27672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (39))){
var inst_27529 = (state_27575[(16)]);
var state_27575__$1 = state_27575;
var statearr_27588_27673 = state_27575__$1;
(statearr_27588_27673[(2)] = inst_27529);

(statearr_27588_27673[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (46))){
var inst_27570 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
var statearr_27589_27674 = state_27575__$1;
(statearr_27589_27674[(2)] = inst_27570);

(statearr_27589_27674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (4))){
var inst_27473 = (state_27575[(2)]);
var inst_27474 = cljs.core.List.EMPTY;
var inst_27475 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27474);
var inst_27476 = (function (){return ((function (inst_27473,inst_27474,inst_27475,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27171_SHARP_){
var and__21433__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27171_SHARP_);
if(cljs.core.truth_(and__21433__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27171_SHARP_));
} else {
return and__21433__auto__;
}
});
;})(inst_27473,inst_27474,inst_27475,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27477 = cljs.core.filter.call(null,inst_27476,files);
var inst_27478 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27479 = cljs.core.concat.call(null,inst_27477,inst_27478);
var state_27575__$1 = (function (){var statearr_27590 = state_27575;
(statearr_27590[(17)] = inst_27475);

(statearr_27590[(18)] = inst_27473);

(statearr_27590[(12)] = inst_27479);

return statearr_27590;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27591_27675 = state_27575__$1;
(statearr_27591_27675[(1)] = (16));

} else {
var statearr_27592_27676 = state_27575__$1;
(statearr_27592_27676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (15))){
var inst_27463 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
var statearr_27593_27677 = state_27575__$1;
(statearr_27593_27677[(2)] = inst_27463);

(statearr_27593_27677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (21))){
var inst_27489 = (state_27575[(19)]);
var inst_27489__$1 = (state_27575[(2)]);
var inst_27490 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27489__$1);
var state_27575__$1 = (function (){var statearr_27594 = state_27575;
(statearr_27594[(19)] = inst_27489__$1);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27575__$1,(22),inst_27490);
} else {
if((state_val_27576 === (31))){
var inst_27573 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27575__$1,inst_27573);
} else {
if((state_val_27576 === (32))){
var inst_27529 = (state_27575[(16)]);
var inst_27534 = inst_27529.cljs$lang$protocol_mask$partition0$;
var inst_27535 = (inst_27534 & (64));
var inst_27536 = inst_27529.cljs$core$ISeq$;
var inst_27537 = (inst_27535) || (inst_27536);
var state_27575__$1 = state_27575;
if(cljs.core.truth_(inst_27537)){
var statearr_27595_27678 = state_27575__$1;
(statearr_27595_27678[(1)] = (35));

} else {
var statearr_27596_27679 = state_27575__$1;
(statearr_27596_27679[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (40))){
var inst_27550 = (state_27575[(20)]);
var inst_27549 = (state_27575[(2)]);
var inst_27550__$1 = cljs.core.get.call(null,inst_27549,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27551 = cljs.core.get.call(null,inst_27549,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27552 = cljs.core.not_empty.call(null,inst_27550__$1);
var state_27575__$1 = (function (){var statearr_27597 = state_27575;
(statearr_27597[(21)] = inst_27551);

(statearr_27597[(20)] = inst_27550__$1);

return statearr_27597;
})();
if(cljs.core.truth_(inst_27552)){
var statearr_27598_27680 = state_27575__$1;
(statearr_27598_27680[(1)] = (41));

} else {
var statearr_27599_27681 = state_27575__$1;
(statearr_27599_27681[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (33))){
var state_27575__$1 = state_27575;
var statearr_27600_27682 = state_27575__$1;
(statearr_27600_27682[(2)] = false);

(statearr_27600_27682[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (13))){
var inst_27449 = (state_27575[(22)]);
var inst_27453 = cljs.core.chunk_first.call(null,inst_27449);
var inst_27454 = cljs.core.chunk_rest.call(null,inst_27449);
var inst_27455 = cljs.core.count.call(null,inst_27453);
var inst_27436 = inst_27454;
var inst_27437 = inst_27453;
var inst_27438 = inst_27455;
var inst_27439 = (0);
var state_27575__$1 = (function (){var statearr_27601 = state_27575;
(statearr_27601[(7)] = inst_27437);

(statearr_27601[(8)] = inst_27436);

(statearr_27601[(9)] = inst_27438);

(statearr_27601[(10)] = inst_27439);

return statearr_27601;
})();
var statearr_27602_27683 = state_27575__$1;
(statearr_27602_27683[(2)] = null);

(statearr_27602_27683[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (22))){
var inst_27497 = (state_27575[(23)]);
var inst_27492 = (state_27575[(24)]);
var inst_27493 = (state_27575[(25)]);
var inst_27489 = (state_27575[(19)]);
var inst_27492__$1 = (state_27575[(2)]);
var inst_27493__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27492__$1);
var inst_27494 = (function (){var all_files = inst_27489;
var res_SINGLEQUOTE_ = inst_27492__$1;
var res = inst_27493__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27497,inst_27492,inst_27493,inst_27489,inst_27492__$1,inst_27493__$1,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27172_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27172_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27497,inst_27492,inst_27493,inst_27489,inst_27492__$1,inst_27493__$1,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27495 = cljs.core.filter.call(null,inst_27494,inst_27492__$1);
var inst_27496 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27497__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27496);
var inst_27498 = cljs.core.not_empty.call(null,inst_27497__$1);
var state_27575__$1 = (function (){var statearr_27603 = state_27575;
(statearr_27603[(23)] = inst_27497__$1);

(statearr_27603[(24)] = inst_27492__$1);

(statearr_27603[(25)] = inst_27493__$1);

(statearr_27603[(26)] = inst_27495);

return statearr_27603;
})();
if(cljs.core.truth_(inst_27498)){
var statearr_27604_27684 = state_27575__$1;
(statearr_27604_27684[(1)] = (23));

} else {
var statearr_27605_27685 = state_27575__$1;
(statearr_27605_27685[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (36))){
var state_27575__$1 = state_27575;
var statearr_27606_27686 = state_27575__$1;
(statearr_27606_27686[(2)] = false);

(statearr_27606_27686[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (41))){
var inst_27550 = (state_27575[(20)]);
var inst_27554 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27555 = cljs.core.map.call(null,inst_27554,inst_27550);
var inst_27556 = cljs.core.pr_str.call(null,inst_27555);
var inst_27557 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27556)].join('');
var inst_27558 = figwheel.client.utils.log.call(null,inst_27557);
var state_27575__$1 = state_27575;
var statearr_27607_27687 = state_27575__$1;
(statearr_27607_27687[(2)] = inst_27558);

(statearr_27607_27687[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (43))){
var inst_27551 = (state_27575[(21)]);
var inst_27561 = (state_27575[(2)]);
var inst_27562 = cljs.core.not_empty.call(null,inst_27551);
var state_27575__$1 = (function (){var statearr_27608 = state_27575;
(statearr_27608[(27)] = inst_27561);

return statearr_27608;
})();
if(cljs.core.truth_(inst_27562)){
var statearr_27609_27688 = state_27575__$1;
(statearr_27609_27688[(1)] = (44));

} else {
var statearr_27610_27689 = state_27575__$1;
(statearr_27610_27689[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (29))){
var inst_27529 = (state_27575[(16)]);
var inst_27497 = (state_27575[(23)]);
var inst_27492 = (state_27575[(24)]);
var inst_27493 = (state_27575[(25)]);
var inst_27489 = (state_27575[(19)]);
var inst_27495 = (state_27575[(26)]);
var inst_27525 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27528 = (function (){var all_files = inst_27489;
var res_SINGLEQUOTE_ = inst_27492;
var res = inst_27493;
var files_not_loaded = inst_27495;
var dependencies_that_loaded = inst_27497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27525,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27527){
var map__27611 = p__27527;
var map__27611__$1 = ((((!((map__27611 == null)))?((((map__27611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27611):map__27611);
var namespace = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27529,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27525,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27529__$1 = cljs.core.group_by.call(null,inst_27528,inst_27495);
var inst_27531 = (inst_27529__$1 == null);
var inst_27532 = cljs.core.not.call(null,inst_27531);
var state_27575__$1 = (function (){var statearr_27613 = state_27575;
(statearr_27613[(16)] = inst_27529__$1);

(statearr_27613[(28)] = inst_27525);

return statearr_27613;
})();
if(inst_27532){
var statearr_27614_27690 = state_27575__$1;
(statearr_27614_27690[(1)] = (32));

} else {
var statearr_27615_27691 = state_27575__$1;
(statearr_27615_27691[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (44))){
var inst_27551 = (state_27575[(21)]);
var inst_27564 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27551);
var inst_27565 = cljs.core.pr_str.call(null,inst_27564);
var inst_27566 = [cljs.core.str("not required: "),cljs.core.str(inst_27565)].join('');
var inst_27567 = figwheel.client.utils.log.call(null,inst_27566);
var state_27575__$1 = state_27575;
var statearr_27616_27692 = state_27575__$1;
(statearr_27616_27692[(2)] = inst_27567);

(statearr_27616_27692[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (6))){
var inst_27470 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
var statearr_27617_27693 = state_27575__$1;
(statearr_27617_27693[(2)] = inst_27470);

(statearr_27617_27693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (28))){
var inst_27495 = (state_27575[(26)]);
var inst_27522 = (state_27575[(2)]);
var inst_27523 = cljs.core.not_empty.call(null,inst_27495);
var state_27575__$1 = (function (){var statearr_27618 = state_27575;
(statearr_27618[(29)] = inst_27522);

return statearr_27618;
})();
if(cljs.core.truth_(inst_27523)){
var statearr_27619_27694 = state_27575__$1;
(statearr_27619_27694[(1)] = (29));

} else {
var statearr_27620_27695 = state_27575__$1;
(statearr_27620_27695[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (25))){
var inst_27493 = (state_27575[(25)]);
var inst_27509 = (state_27575[(2)]);
var inst_27510 = cljs.core.not_empty.call(null,inst_27493);
var state_27575__$1 = (function (){var statearr_27621 = state_27575;
(statearr_27621[(30)] = inst_27509);

return statearr_27621;
})();
if(cljs.core.truth_(inst_27510)){
var statearr_27622_27696 = state_27575__$1;
(statearr_27622_27696[(1)] = (26));

} else {
var statearr_27623_27697 = state_27575__$1;
(statearr_27623_27697[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (34))){
var inst_27544 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
if(cljs.core.truth_(inst_27544)){
var statearr_27624_27698 = state_27575__$1;
(statearr_27624_27698[(1)] = (38));

} else {
var statearr_27625_27699 = state_27575__$1;
(statearr_27625_27699[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (17))){
var state_27575__$1 = state_27575;
var statearr_27626_27700 = state_27575__$1;
(statearr_27626_27700[(2)] = recompile_dependents);

(statearr_27626_27700[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (3))){
var state_27575__$1 = state_27575;
var statearr_27627_27701 = state_27575__$1;
(statearr_27627_27701[(2)] = null);

(statearr_27627_27701[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (12))){
var inst_27466 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
var statearr_27628_27702 = state_27575__$1;
(statearr_27628_27702[(2)] = inst_27466);

(statearr_27628_27702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (2))){
var inst_27428 = (state_27575[(13)]);
var inst_27435 = cljs.core.seq.call(null,inst_27428);
var inst_27436 = inst_27435;
var inst_27437 = null;
var inst_27438 = (0);
var inst_27439 = (0);
var state_27575__$1 = (function (){var statearr_27629 = state_27575;
(statearr_27629[(7)] = inst_27437);

(statearr_27629[(8)] = inst_27436);

(statearr_27629[(9)] = inst_27438);

(statearr_27629[(10)] = inst_27439);

return statearr_27629;
})();
var statearr_27630_27703 = state_27575__$1;
(statearr_27630_27703[(2)] = null);

(statearr_27630_27703[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (23))){
var inst_27497 = (state_27575[(23)]);
var inst_27492 = (state_27575[(24)]);
var inst_27493 = (state_27575[(25)]);
var inst_27489 = (state_27575[(19)]);
var inst_27495 = (state_27575[(26)]);
var inst_27500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27502 = (function (){var all_files = inst_27489;
var res_SINGLEQUOTE_ = inst_27492;
var res = inst_27493;
var files_not_loaded = inst_27495;
var dependencies_that_loaded = inst_27497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27500,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27501){
var map__27631 = p__27501;
var map__27631__$1 = ((((!((map__27631 == null)))?((((map__27631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27631):map__27631);
var request_url = cljs.core.get.call(null,map__27631__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27500,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27503 = cljs.core.reverse.call(null,inst_27497);
var inst_27504 = cljs.core.map.call(null,inst_27502,inst_27503);
var inst_27505 = cljs.core.pr_str.call(null,inst_27504);
var inst_27506 = figwheel.client.utils.log.call(null,inst_27505);
var state_27575__$1 = (function (){var statearr_27633 = state_27575;
(statearr_27633[(31)] = inst_27500);

return statearr_27633;
})();
var statearr_27634_27704 = state_27575__$1;
(statearr_27634_27704[(2)] = inst_27506);

(statearr_27634_27704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (35))){
var state_27575__$1 = state_27575;
var statearr_27635_27705 = state_27575__$1;
(statearr_27635_27705[(2)] = true);

(statearr_27635_27705[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (19))){
var inst_27479 = (state_27575[(12)]);
var inst_27485 = figwheel.client.file_reloading.expand_files.call(null,inst_27479);
var state_27575__$1 = state_27575;
var statearr_27636_27706 = state_27575__$1;
(statearr_27636_27706[(2)] = inst_27485);

(statearr_27636_27706[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (11))){
var state_27575__$1 = state_27575;
var statearr_27637_27707 = state_27575__$1;
(statearr_27637_27707[(2)] = null);

(statearr_27637_27707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (9))){
var inst_27468 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
var statearr_27638_27708 = state_27575__$1;
(statearr_27638_27708[(2)] = inst_27468);

(statearr_27638_27708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (5))){
var inst_27438 = (state_27575[(9)]);
var inst_27439 = (state_27575[(10)]);
var inst_27441 = (inst_27439 < inst_27438);
var inst_27442 = inst_27441;
var state_27575__$1 = state_27575;
if(cljs.core.truth_(inst_27442)){
var statearr_27639_27709 = state_27575__$1;
(statearr_27639_27709[(1)] = (7));

} else {
var statearr_27640_27710 = state_27575__$1;
(statearr_27640_27710[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (14))){
var inst_27449 = (state_27575[(22)]);
var inst_27458 = cljs.core.first.call(null,inst_27449);
var inst_27459 = figwheel.client.file_reloading.eval_body.call(null,inst_27458,opts);
var inst_27460 = cljs.core.next.call(null,inst_27449);
var inst_27436 = inst_27460;
var inst_27437 = null;
var inst_27438 = (0);
var inst_27439 = (0);
var state_27575__$1 = (function (){var statearr_27641 = state_27575;
(statearr_27641[(7)] = inst_27437);

(statearr_27641[(8)] = inst_27436);

(statearr_27641[(32)] = inst_27459);

(statearr_27641[(9)] = inst_27438);

(statearr_27641[(10)] = inst_27439);

return statearr_27641;
})();
var statearr_27642_27711 = state_27575__$1;
(statearr_27642_27711[(2)] = null);

(statearr_27642_27711[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (45))){
var state_27575__$1 = state_27575;
var statearr_27643_27712 = state_27575__$1;
(statearr_27643_27712[(2)] = null);

(statearr_27643_27712[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (26))){
var inst_27497 = (state_27575[(23)]);
var inst_27492 = (state_27575[(24)]);
var inst_27493 = (state_27575[(25)]);
var inst_27489 = (state_27575[(19)]);
var inst_27495 = (state_27575[(26)]);
var inst_27512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27514 = (function (){var all_files = inst_27489;
var res_SINGLEQUOTE_ = inst_27492;
var res = inst_27493;
var files_not_loaded = inst_27495;
var dependencies_that_loaded = inst_27497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27512,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27513){
var map__27644 = p__27513;
var map__27644__$1 = ((((!((map__27644 == null)))?((((map__27644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27644):map__27644);
var namespace = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27644__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27512,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27515 = cljs.core.map.call(null,inst_27514,inst_27493);
var inst_27516 = cljs.core.pr_str.call(null,inst_27515);
var inst_27517 = figwheel.client.utils.log.call(null,inst_27516);
var inst_27518 = (function (){var all_files = inst_27489;
var res_SINGLEQUOTE_ = inst_27492;
var res = inst_27493;
var files_not_loaded = inst_27495;
var dependencies_that_loaded = inst_27497;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27512,inst_27514,inst_27515,inst_27516,inst_27517,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27497,inst_27492,inst_27493,inst_27489,inst_27495,inst_27512,inst_27514,inst_27515,inst_27516,inst_27517,state_val_27576,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27519 = setTimeout(inst_27518,(10));
var state_27575__$1 = (function (){var statearr_27646 = state_27575;
(statearr_27646[(33)] = inst_27517);

(statearr_27646[(34)] = inst_27512);

return statearr_27646;
})();
var statearr_27647_27713 = state_27575__$1;
(statearr_27647_27713[(2)] = inst_27519);

(statearr_27647_27713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (16))){
var state_27575__$1 = state_27575;
var statearr_27648_27714 = state_27575__$1;
(statearr_27648_27714[(2)] = reload_dependents);

(statearr_27648_27714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (38))){
var inst_27529 = (state_27575[(16)]);
var inst_27546 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27529);
var state_27575__$1 = state_27575;
var statearr_27649_27715 = state_27575__$1;
(statearr_27649_27715[(2)] = inst_27546);

(statearr_27649_27715[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (30))){
var state_27575__$1 = state_27575;
var statearr_27650_27716 = state_27575__$1;
(statearr_27650_27716[(2)] = null);

(statearr_27650_27716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (10))){
var inst_27449 = (state_27575[(22)]);
var inst_27451 = cljs.core.chunked_seq_QMARK_.call(null,inst_27449);
var state_27575__$1 = state_27575;
if(inst_27451){
var statearr_27651_27717 = state_27575__$1;
(statearr_27651_27717[(1)] = (13));

} else {
var statearr_27652_27718 = state_27575__$1;
(statearr_27652_27718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (18))){
var inst_27483 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
if(cljs.core.truth_(inst_27483)){
var statearr_27653_27719 = state_27575__$1;
(statearr_27653_27719[(1)] = (19));

} else {
var statearr_27654_27720 = state_27575__$1;
(statearr_27654_27720[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (42))){
var state_27575__$1 = state_27575;
var statearr_27655_27721 = state_27575__$1;
(statearr_27655_27721[(2)] = null);

(statearr_27655_27721[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (37))){
var inst_27541 = (state_27575[(2)]);
var state_27575__$1 = state_27575;
var statearr_27656_27722 = state_27575__$1;
(statearr_27656_27722[(2)] = inst_27541);

(statearr_27656_27722[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27576 === (8))){
var inst_27449 = (state_27575[(22)]);
var inst_27436 = (state_27575[(8)]);
var inst_27449__$1 = cljs.core.seq.call(null,inst_27436);
var state_27575__$1 = (function (){var statearr_27657 = state_27575;
(statearr_27657[(22)] = inst_27449__$1);

return statearr_27657;
})();
if(inst_27449__$1){
var statearr_27658_27723 = state_27575__$1;
(statearr_27658_27723[(1)] = (10));

} else {
var statearr_27659_27724 = state_27575__$1;
(statearr_27659_27724[(1)] = (11));

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
});})(c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23872__auto__,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto____0 = (function (){
var statearr_27663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27663[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto__);

(statearr_27663[(1)] = (1));

return statearr_27663;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto____1 = (function (state_27575){
while(true){
var ret_value__23874__auto__ = (function (){try{while(true){
var result__23875__auto__ = switch__23872__auto__.call(null,state_27575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23875__auto__;
}
break;
}
}catch (e27664){if((e27664 instanceof Object)){
var ex__23876__auto__ = e27664;
var statearr_27665_27725 = state_27575;
(statearr_27665_27725[(5)] = ex__23876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27726 = state_27575;
state_27575 = G__27726;
continue;
} else {
return ret_value__23874__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto__ = function(state_27575){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto____1.call(this,state_27575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23873__auto__;
})()
;})(switch__23872__auto__,c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__23897__auto__ = (function (){var statearr_27666 = f__23896__auto__.call(null);
(statearr_27666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23895__auto__);

return statearr_27666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23897__auto__);
});})(c__23895__auto__,map__27421,map__27421__$1,opts,before_jsload,on_jsload,reload_dependents,map__27422,map__27422__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__23895__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27729,link){
var map__27732 = p__27729;
var map__27732__$1 = ((((!((map__27732 == null)))?((((map__27732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27732):map__27732);
var file = cljs.core.get.call(null,map__27732__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = link.href;
if(cljs.core.truth_(temp__6503__auto__)){
var link_href = temp__6503__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6503__auto__,map__27732,map__27732__$1,file){
return (function (p1__27727_SHARP_,p2__27728_SHARP_){
if(cljs.core._EQ_.call(null,p1__27727_SHARP_,p2__27728_SHARP_)){
return p1__27727_SHARP_;
} else {
return false;
}
});})(link_href,temp__6503__auto__,map__27732,map__27732__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6503__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27738){
var map__27739 = p__27738;
var map__27739__$1 = ((((!((map__27739 == null)))?((((map__27739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27739):map__27739);
var match_length = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27739__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27734_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27734_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6503__auto__)){
var res = temp__6503__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args27741 = [];
var len__22628__auto___27744 = arguments.length;
var i__22629__auto___27745 = (0);
while(true){
if((i__22629__auto___27745 < len__22628__auto___27744)){
args27741.push((arguments[i__22629__auto___27745]));

var G__27746 = (i__22629__auto___27745 + (1));
i__22629__auto___27745 = G__27746;
continue;
} else {
}
break;
}

var G__27743 = args27741.length;
switch (G__27743) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27741.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27748_SHARP_,p2__27749_SHARP_){
return cljs.core.assoc.call(null,p1__27748_SHARP_,cljs.core.get.call(null,p2__27749_SHARP_,key),p2__27749_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27750){
var map__27753 = p__27750;
var map__27753__$1 = ((((!((map__27753 == null)))?((((map__27753.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27753.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27753):map__27753);
var f_data = map__27753__$1;
var file = cljs.core.get.call(null,map__27753__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6503__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6503__auto__)){
var link = temp__6503__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27755,files_msg){
var map__27762 = p__27755;
var map__27762__$1 = ((((!((map__27762 == null)))?((((map__27762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27762):map__27762);
var opts = map__27762__$1;
var on_cssload = cljs.core.get.call(null,map__27762__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27764_27768 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27765_27769 = null;
var count__27766_27770 = (0);
var i__27767_27771 = (0);
while(true){
if((i__27767_27771 < count__27766_27770)){
var f_27772 = cljs.core._nth.call(null,chunk__27765_27769,i__27767_27771);
figwheel.client.file_reloading.reload_css_file.call(null,f_27772);

var G__27773 = seq__27764_27768;
var G__27774 = chunk__27765_27769;
var G__27775 = count__27766_27770;
var G__27776 = (i__27767_27771 + (1));
seq__27764_27768 = G__27773;
chunk__27765_27769 = G__27774;
count__27766_27770 = G__27775;
i__27767_27771 = G__27776;
continue;
} else {
var temp__6503__auto___27777 = cljs.core.seq.call(null,seq__27764_27768);
if(temp__6503__auto___27777){
var seq__27764_27778__$1 = temp__6503__auto___27777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27764_27778__$1)){
var c__22348__auto___27779 = cljs.core.chunk_first.call(null,seq__27764_27778__$1);
var G__27780 = cljs.core.chunk_rest.call(null,seq__27764_27778__$1);
var G__27781 = c__22348__auto___27779;
var G__27782 = cljs.core.count.call(null,c__22348__auto___27779);
var G__27783 = (0);
seq__27764_27768 = G__27780;
chunk__27765_27769 = G__27781;
count__27766_27770 = G__27782;
i__27767_27771 = G__27783;
continue;
} else {
var f_27784 = cljs.core.first.call(null,seq__27764_27778__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27784);

var G__27785 = cljs.core.next.call(null,seq__27764_27778__$1);
var G__27786 = null;
var G__27787 = (0);
var G__27788 = (0);
seq__27764_27768 = G__27785;
chunk__27765_27769 = G__27786;
count__27766_27770 = G__27787;
i__27767_27771 = G__27788;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27762,map__27762__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27762,map__27762__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471651296913