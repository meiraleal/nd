// Compiled by ClojureScript 1.9.89 {}
goog.provide('negociodigital.components.form');
goog.require('cljs.core');
goog.require('cljs_react_material_ui.rum');
goog.require('negociodigital.db');
goog.require('rum.core');
goog.require('cljs_react_material_ui.icons');
goog.require('formsy_material_ui.core');
goog.require('cljs_react_material_ui.core');
goog.require('formsy.core');
negociodigital.components.form.process_form = (function negociodigital$components$form$process_form(data){
var coll = cljs.core.deref.call(null,negociodigital.db.current_collection);
if(cljs.core._EQ_.call(null,null,cljs.core.deref.call(null,cljs.core.deref.call(null,negociodigital.db.current_item)))){
cljs.core.swap_BANG_.call(null,coll,cljs.core.conj,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),negociodigital.db.next_id.call(null,cljs.core.deref.call(null,coll))], null),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
} else {
cljs.core.reset_BANG_.call(null,cljs.core.deref.call(null,negociodigital.db.current_item),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,negociodigital.db.current_item)))], null),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
}

return cljs.core.swap_BANG_.call(null,negociodigital.db.dialog_open,cljs.core.not);
});
negociodigital.components.form.input_text = rum.core.build_defc.call(null,(function (name,label,hint){
var item = cljs.core.deref.call(null,cljs.core.deref.call(null,negociodigital.db.current_item));
return sablono.interpreter.interpret.call(null,formsy_material_ui.core.formsy_text.call(null,{"name": name, "key": name, "value": cljs.core.keyword.call(null,name).call(null,item), "validations": "isWords", "hintText": hint, "floatingLabelText": label}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (name,_,___$1){
return name;
})], null)], null),"input-text");
negociodigital.components.form.text_field = rum.core.build_defc.call(null,(function (name,label,hint){
var item = cljs.core.deref.call(null,cljs.core.deref.call(null,negociodigital.db.current_item));
return sablono.interpreter.interpret.call(null,formsy_material_ui.core.formsy_text.call(null,{"name": name, "key": name, "value": cljs.core.keyword.call(null,name).call(null,item), "validations": "isWords", "hintText": hint, "floatingLabelText": label}));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (name,_,___$1){
return name;
})], null)], null),"text-field");
negociodigital.components.form.select = rum.core.build_defc.call(null,(function (name,label,options){
var item = cljs.core.deref.call(null,cljs.core.deref.call(null,negociodigital.db.current_item));
return sablono.interpreter.interpret.call(null,formsy_material_ui.core.formsy_select.call(null,{"name": name, "key": name, "value": cljs.core.keyword.call(null,name).call(null,item), "floatingLabelText": label},cljs.core.map.call(null,((function (item){
return (function (p__25786){
var vec__25787 = p__25786;
var v = cljs.core.nth.call(null,vec__25787,(0),null);
var k = cljs.core.nth.call(null,vec__25787,(1),null);
return cljs_react_material_ui.rum.menu_item.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"primary-text","primary-text",146474209),k], null));
});})(item))
,options)));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),(function (name,_,___$1){
return name;
})], null)], null),"select");
negociodigital.components.form.cancel_button = rum.core.build_defc.call(null,(function (){
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.flat_button.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Cancelar",new cljs.core.Keyword(null,"key","key",-1516042587),"cancelar",new cljs.core.Keyword(null,"on-touch-tap","on-touch-tap",274941039),(function (_){
return cljs.core.swap_BANG_.call(null,negociodigital.db.dialog_open,cljs.core.not);
})], null)));
}),null,"cancel-button");
negociodigital.components.form.submit_button = rum.core.build_defc.call(null,(function (){
return sablono.interpreter.interpret.call(null,cljs_react_material_ui.rum.raised_button.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"label","label",1718410804),"Enviar",new cljs.core.Keyword(null,"key","key",-1516042587),"enviar",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null)));
}),null,"submit-button");
negociodigital.components.form.form = rum.core.build_defc.call(null,(function (fields){
return sablono.interpreter.interpret.call(null,formsy.core.formsy_form.call(null,{"onSubmit": negociodigital.components.form.process_form},fields,negociodigital.components.form.cancel_button.call(null),negociodigital.components.form.submit_button.call(null)));
}),null,"form");

//# sourceMappingURL=form.js.map?rel=1472827188570