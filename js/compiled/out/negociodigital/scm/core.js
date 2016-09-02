// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.scm.core');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.rum');
goog.require('negociodigital.db');
goog.require('negociodigital.components.drawer');
goog.require('rum.core');
goog.require('negociodigital.components.data_table');
goog.require('cljs_react_material_ui.icons');
goog.require('negociodigital.components.form');
goog.require('negociodigital.components.dialog');
goog.require('cljs_react_material_ui.core');
negociodigital.scm.core.orders_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, ["ID","C\u00F3digo identificador"], null),new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.PersistentArrayMap(null, 1, ["Cliente","Nome do cliente que pediu a ordem"], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentArrayMap(null, 1, ["Status","Status da encomenda"], null)], null),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [negociodigital.components.form.input_text.call(null,"name","Nome","Qual o nome completo do funcion\u00E1rio(a)?"),negociodigital.components.form.select.call(null,"status","Etapa",new cljs.core.PersistentArrayMap(null, 4, ["aguardando","Aguardando","producacao","Em produ\u00E7\u00E3o","finalizada","Finalizada","entregue","Entregue"], null))], null)], null);
negociodigital.scm.core.orders = rum.core.build_defcs.call(null,(function (){
var attrs26998 = negociodigital.components.data_table.data_table.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26998))?sablono.interpreter.attributes.call(null,attrs26998):null),((cljs.core.map_QMARK_.call(null,attrs26998))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog.call(null,negociodigital.components.form.form,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(negociodigital.scm.core.orders_config))),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog_fab.call(null,"Criar nova Encomenda"))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26998),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog.call(null,negociodigital.components.form.form,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(negociodigital.scm.core.orders_config))),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog_fab.call(null,"Criar nova Encomenda"))], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
cljs.core.reset_BANG_.call(null,negociodigital.db.main_title,"Neg\u00F3cio.digital > Encomendas");

cljs.core.reset_BANG_.call(null,negociodigital.db.current_collection,negociodigital.db.orders);

cljs.core.reset_BANG_.call(null,negociodigital.db.current_collection_config,negociodigital.scm.core.orders_config);

return state;
})], null),rum.core.reactive], null),"orders");
negociodigital.scm.core.supplies_config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, ["ID","C\u00F3digo identificador"], null),new cljs.core.Keyword(null,"item","item",249373802),new cljs.core.PersistentArrayMap(null, 1, ["Item","Nome do item que consta no estoque"], null),new cljs.core.Keyword(null,"quantity","quantity",-1929050694),new cljs.core.PersistentArrayMap(null, 1, ["Quantidade","Quantidade dispon\u00EDvel no estoque atualmente"], null)], null),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [negociodigital.components.form.select.call(null,"item","Item",negociodigital.db.collection_lookup_table.call(null,cljs.core.deref.call(null,negociodigital.db.products))),negociodigital.components.form.input_text.call(null,"quantity","Quantidade","Quantos deste item em estoque?")], null)], null);
negociodigital.scm.core.supplies = rum.core.build_defcs.call(null,(function (){
var attrs26999 = negociodigital.components.data_table.data_table.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26999))?sablono.interpreter.attributes.call(null,attrs26999):null),((cljs.core.map_QMARK_.call(null,attrs26999))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog.call(null,negociodigital.components.form.form,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(negociodigital.scm.core.supplies_config))),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog_fab.call(null,"Adicionar item ao estoque"))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26999),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog.call(null,negociodigital.components.form.form,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(negociodigital.scm.core.supplies_config))),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog_fab.call(null,"Adicionar item ao estoque"))], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
cljs.core.reset_BANG_.call(null,negociodigital.db.main_title,"Neg\u00F3cio.digital > Estoque");

cljs.core.reset_BANG_.call(null,negociodigital.db.current_collection,negociodigital.db.supplies);

cljs.core.reset_BANG_.call(null,negociodigital.db.current_collection_config,negociodigital.scm.core.supplies_config);

return state;
})], null),rum.core.reactive], null),"supplies");

//# sourceMappingURL=core.js.map?rel=1472828951568