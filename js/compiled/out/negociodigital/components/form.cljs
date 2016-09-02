(ns negociodigital.components.form
  (:require
    [cljs-react-material-ui.core :as ui]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as rui]
    [formsy.core :as formsy]
    [negociodigital.db :as db]
    [formsy-material-ui.core :as fui]
    [rum.core :as rum]))

(defn process-form [data]
  (let [coll @db/current-collection]
    (if (= nil @@db/current-item)
      (swap! coll conj (merge {:id (db/next-id @coll)} (js->clj data :keywordize-keys true)))
      (reset! @db/current-item (merge {:id (:id @@db/current-item)} (js->clj data :keywordize-keys true)))
      )
  (swap! db/dialog-open not)))

(rum/defc input-text  < { :key-fn (fn [name _ _]
                                    name) }
  [name label hint]
  (let [item @@db/current-item]
    (fui/formsy-text
      #js {:name name
            :key name
            :value ((keyword name) item)
            :validations "isWords"
            :hintText hint
            :floatingLabelText label})))

(rum/defc text-field  < { :key-fn (fn [name _ _]
                                    name) }
  [name label hint]
  (let [item @@db/current-item]
    (fui/formsy-text
      #js {:name name
            :key name
            :value ((keyword name) item)
            :validations "isWords"
            :hintText hint
            :floatingLabelText label})))

(rum/defc select  < { :key-fn (fn [name _ _]
                                name) }
 [name label options]
  (let [item @@db/current-item]
  (fui/formsy-select
    #js {:name name
          :key name
          :value ((keyword name) item)
          :floatingLabelText label}
    (map (fn [[v k]] (rui/menu-item {:key k :value v :primary-text k})) options))))

(rum/defc cancel-button []
  (rui/flat-button
    { :label "Cancelar"
      :key "cancelar"
      :on-touch-tap (fn [_] (swap! db/dialog-open not))}))

(rum/defc submit-button []
  (rui/raised-button
    { :type "submit"
      :label "Enviar"
      :key "enviar"
      :disabled false}))

(rum/defc form [fields]
  (formsy/formsy-form
    #js {:onSubmit process-form}
    fields
    (cancel-button)
    (submit-button)))
