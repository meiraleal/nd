(ns negociodigital.main.core
  (:require
    [cljs-react-material-ui.core :as ui]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as rui]
    [negociodigital.components.drawer :as drawer]
    [negociodigital.customers.core :as c]
    [negociodigital.db :as db]
    [negociodigital.utils :as u]
    [cljs.pprint :as pp]
    [rum.core :as rum]))

(rum/defcs main < rum/reactive [state]
  (let [children (aget (aget (:rum/react-component state) "props") "children")]
    (rui/mui-theme-provider
      {:mui-theme (ui/get-mui-theme (aget js/MaterialUIStyles "DarkRawTheme"))}
      [:div
        (drawer/drawer)
        (rui/app-bar {:title (rum/react db/main-title)
                       :on-left-icon-button-touch-tap (fn [_] (swap! db/drawer-open not))
                       :icon-element-right (rui/icon-button (ic/action-account-circle))})
        children])))
