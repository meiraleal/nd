(ns negociodigital.components.dialog
  (:require
    [cljs-react-material-ui.core :as ui]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as rui]
    [negociodigital.db :as db]
    [rum.core :as rum]))

(rum/defc dialog  < rum/reactive [form fields]
  (let [reactive-dialog-open (rum/react db/dialog-open)]
    (rui/dialog
      {:title @db/dialog-title
        :modal true
        :open reactive-dialog-open}
      (rui/paper {:style {:width 300
                           :margin "auto"
                           :padding 20}} (form fields)))))

(rum/defc dialog-fab [dialog-title]
  (rui/floating-action-button {:secondary true
                                :style {:position "absolute"
                                         :bottom 50
                                         :right 50}
                                :on-touch-tap (fn [_] (swap! db/dialog-open not)
                                                (reset! db/current-item db/nil-cursor)
                                                (reset! db/dialog-title dialog-title))}
    (ic/content-add)))
