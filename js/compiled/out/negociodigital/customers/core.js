// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.customers.core');
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
negociodigital.customers.core.config = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, ["ID","C\u00F3digo identificador"], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, ["Nome","Nome do funcion\u00E1rio(a)"], null),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.PersistentArrayMap(null, 1, ["Status","Status do Cliente"], null)], null),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [negociodigital.components.form.input_text.call(null,"name","Nome","Qual o nome do cliente/empresa?"),negociodigital.components.form.select.call(null,"status","Status",new cljs.core.PersistentArrayMap(null, 3, ["pago","Pago","entregue","Encomenda Entregue","cancelado","Cancelado"], null))], null)], null);
negociodigital.customers.core.main = rum.core.build_defcs.call(null,(function (){
var attrs27011 = negociodigital.components.data_table.data_table.call(null);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs27011))?sablono.interpreter.attributes.call(null,attrs27011):null),((cljs.core.map_QMARK_.call(null,attrs27011))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog.call(null,negociodigital.components.form.form,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(negociodigital.customers.core.config))),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog_fab.call(null,"Adicionar novo Cliente"))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs27011),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog.call(null,negociodigital.components.form.form,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(negociodigital.customers.core.config))),sablono.interpreter.interpret.call(null,negociodigital.components.dialog.dialog_fab.call(null,"Adicionar novo Cliente"))], null)));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
cljs.core.reset_BANG_.call(null,negociodigital.db.main_title,"Neg\u00F3cio.digital > Clientes");

cljs.core.reset_BANG_.call(null,negociodigital.db.current_collection,negociodigital.db.customers);

cljs.core.reset_BANG_.call(null,negociodigital.db.current_collection_config,negociodigital.customers.core.config);

return state;
})], null),rum.core.reactive], null),"main");

//# sourceMappingURL=core.js.map?rel=1472828979217