// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.main.core');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.rum');
goog.require('negociodigital.db');
goog.require('negociodigital.utils');
goog.require('negociodigital.components.drawer');
goog.require('rum.core');
goog.require('negociodigital.customers.core');
goog.require('cljs.pprint');
goog.require('cljs_react_material_ui.icons');
goog.require('cljs_react_material_ui.core');
negociodigital.main.core.main = rum.core.build_defcs.call(null,(function (state){
var children = ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["props"])["children"]);
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.mui_theme_provider.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,(MaterialUIStyles["DarkRawTheme"]))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),negociodigital.components.drawer.drawer.call(null),cljs_react_material_ui.rum.app_bar.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),rum.core.react.call(null,negociodigital.db.main_title),new cljs.core.Keyword(null,"on-left-icon-button-touch-tap","on-left-icon-button-touch-tap",660335467),((function (children){
return (function (_){
return cljs.core.swap_BANG_.call(null,negociodigital.db.drawer_open,cljs.core.not);
});})(children))
,new cljs.core.Keyword(null,"icon-element-right","icon-element-right",-2138850585),cljs_react_material_ui.rum.icon_button.call(null,cljs_react_material_ui.icons.action_account_circle.call(null))], null)),children], null)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"main");

//# sourceMappingURL=core.js.map?rel=1472828979236