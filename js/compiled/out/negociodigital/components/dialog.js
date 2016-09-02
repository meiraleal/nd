// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.components.dialog');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.rum');
goog.require('negociodigital.db');
goog.require('rum.core');
goog.require('cljs_react_material_ui.icons');
goog.require('cljs_react_material_ui.core');
negociodigital.components.dialog.dialog = rum.core.build_defc.call(null,(function (form,fields){
var reactive_dialog_open = rum.core.react.call(null,negociodigital.db.dialog_open);
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.dialog.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,negociodigital.db.dialog_title),new cljs.core.Keyword(null,"modal","modal",-1031880850),true,new cljs.core.Keyword(null,"open","open",-1763596448),reactive_dialog_open], null),cljs_react_material_ui.rum.paper.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),(20)], null)], null),form.call(null,fields))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"dialog");
negociodigital.components.dialog.dialog_fab = rum.core.build_defc.call(null,(function (dialog_title){
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.floating_action_button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"secondary","secondary",-669381460),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(50),new cljs.core.Keyword(null,"right","right",-452581833),(50)], null),new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),(function (_){
cljs.core.swap_BANG_.call(null,negociodigital.db.dialog_open,cljs.core.not);

cljs.core.reset_BANG_.call(null,negociodigital.db.current_item,negociodigital.db.nil_cursor);

return cljs.core.reset_BANG_.call(null,negociodigital.db.dialog_title,dialog_title);
})], null),cljs_react_material_ui.icons.content_add.call(null)));
}),null,"dialog-fab");

//# sourceMappingURL=dialog.js.map?rel=1472827188586