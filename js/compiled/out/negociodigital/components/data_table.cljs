(ns negociodigital.components.data-table
  (:require
    [cljs-react-material-ui.core :as ui]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as rui]
    [negociodigital.db :as db]
    [negociodigital.utils :as u]
    [rum.core :as rum]))

(defn edit-row [index]
  (let [item (db/get-item @db/current-collection index)]
  (reset! db/current-item item)
  (reset! db/dialog-title "Editando registro")
  (swap! db/dialog-open not)))

(defn remove-row [index]
  (reset! @db/current-collection (u/vec-remove @@db/current-collection index)))

(defn generate-header [header]
  (map (fn [[k v]]
         (rui/table-header-column {:key k :tooltip (last (first v))} (first (first v)))) header))

(rum/defc data-table < rum/reactive []
  (let [reactive-collection (rum/react @db/current-collection)
         config @db/current-collection-config
         header (merge (:header config) {:actions {"Ações" "o que pode ser feito com esse registro: deletar, editar"}})
         columns (into [] (keys (:header config)))
         ]
  [:div {:style {:padding "32px"}}
    (rui/table {:mui-theme (ui/get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))
                 :style {:fixed-header true
                          :selectable true
                          :multi-selectable true}}
      (rui/table-header
        {:display-select-all true
          :adjust-for-checkbox true
          :enable-select-all true}
        (rui/table-row
          (generate-header header)))

      (rui/table-body
        {:display-row-checkbox true
          :show-row-hover true}
        (map-indexed
          (fn
            [index row]
            (rui/table-row
              {:key (:id row)}
              (map (fn [k] (rui/table-row-column {:key k} (k row))) columns)
              (rui/table-row-column {:key "actions"}
                (rui/icon-button {:on-touch-tap (fn [_] (edit-row index))} (ic/image-edit))
                (rui/icon-button {:on-touch-tap (fn [_] (remove-row index))} (ic/content-remove-circle))))
            )
          reactive-collection)))]))
