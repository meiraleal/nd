// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.components.data_table');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.rum');
goog.require('negociodigital.db');
goog.require('negociodigital.utils');
goog.require('rum.core');
goog.require('cljs_react_material_ui.icons');
goog.require('cljs_react_material_ui.core');
negociodigital.components.data_table.edit_row = (function negociodigital$components$data_table$edit_row(index){
var item = negociodigital.db.get_item.call(null,cljs.core.deref.call(null,negociodigital.db.current_collection),index);
cljs.core.reset_BANG_.call(null,negociodigital.db.current_item,item);

cljs.core.reset_BANG_.call(null,negociodigital.db.dialog_title,"Editando registro");

return cljs.core.swap_BANG_.call(null,negociodigital.db.dialog_open,cljs.core.not);
});
negociodigital.components.data_table.remove_row = (function negociodigital$components$data_table$remove_row(index){
return cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,negociodigital.db.current_collection),negociodigital.utils.vec_remove.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,negociodigital.db.current_collection)),index));
});
negociodigital.components.data_table.generate_header = (function negociodigital$components$data_table$generate_header(header){
return cljs.core.map.call(null,(function (p__26916){
var vec__26917 = p__26916;
var k = cljs.core.nth.call(null,vec__26917,(0),null);
var v = cljs.core.nth.call(null,vec__26917,(1),null);
return cljs_react_material_ui.rum.table_header_column.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),cljs.core.last.call(null,cljs.core.first.call(null,v))], null),cljs.core.first.call(null,cljs.core.first.call(null,v)));
}),header);
});
negociodigital.components.data_table.data_table = rum.core.build_defc.call(null,(function (){
var reactive_collection = rum.core.react.call(null,cljs.core.deref.call(null,negociodigital.db.current_collection));
var config = cljs.core.deref.call(null,negociodigital.db.current_collection_config);
var header = cljs.core.merge.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),new cljs.core.PersistentArrayMap(null, 1, ["A\u00E7\u00F5es","o que pode ser feito com esse registro: deletar, editar"], null)], null));
var columns = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(config)));
return React.createElement("div",{"style": {"padding": "32px"}},sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.table.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,(MaterialUIStyles["DarkRawTheme"])),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fixed-header","fixed-header",1093824000),true,new cljs.core.Keyword(null,"selectable","selectable",370587038),true,new cljs.core.Keyword(null,"multi-selectable","multi-selectable",328837921),true], null)], null),cljs_react_material_ui.rum.table_header.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-select-all","display-select-all",-1148445289),true,new cljs.core.Keyword(null,"adjust-for-checkbox","adjust-for-checkbox",-849822919),true,new cljs.core.Keyword(null,"enable-select-all","enable-select-all",1214232802),true], null),cljs_react_material_ui.rum.table_row.call(null,negociodigital.components.data_table.generate_header.call(null,header))),cljs_react_material_ui.rum.table_body.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),true,new cljs.core.Keyword(null,"show-row-hover","show-row-hover",166120392),true], null),cljs.core.map_indexed.call(null,((function (reactive_collection,config,header,columns){
return (function (index,row){
return cljs_react_material_ui.rum.table_row.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], null),cljs.core.map.call(null,((function (reactive_collection,config,header,columns){
return (function (k){
return cljs_react_material_ui.rum.table_row_column.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),k.call(null,row));
});})(reactive_collection,config,header,columns))
,columns),cljs_react_material_ui.rum.table_row_column.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"actions"], null),cljs_react_material_ui.rum.icon_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (reactive_collection,config,header,columns){
return (function (_){
return negociodigital.components.data_table.edit_row.call(null,index);
});})(reactive_collection,config,header,columns))
], null),cljs_react_material_ui.icons.image_edit.call(null)),cljs_react_material_ui.rum.icon_button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),((function (reactive_collection,config,header,columns){
return (function (_){
return negociodigital.components.data_table.remove_row.call(null,index);
});})(reactive_collection,config,header,columns))
], null),cljs_react_material_ui.icons.content_remove_circle.call(null))));
});})(reactive_collection,config,header,columns))
,reactive_collection)))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.core.reactive], null),"data-table");

//# sourceMappingURL=data_table.js.map?rel=1472828770656