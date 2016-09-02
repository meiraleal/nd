(ns negociodigital.components.drawer
  (:require
    [cljs-react-material-ui.core :as ui]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as rui]
    [formsy.core :as formsy]
    [negociodigital.db :as db]
    [react-router.core :as rr]
    [formsy-material-ui.core :as formsy-material-ui]
    [rum.core :as rum]))

(rum/defc drawer < rum/reactive []
  (let [open db/drawer-open]
    (rui/drawer {:open (rum/react open)
                  :docked false
                  :on-request-change (fn [_] (swap! open not))}
      (rui/paper
        {:style {:display "inline-block"
                  :float "left"
                  :margin "16px 32px 16px 0"}}
        (rui/menu
          (rui/menu-item {:on-touch-tap (fn [_] (swap! open not))
                           :primary-text "Departamento Pessoal"
                           :link-button true
                           :container-element (rr/link #js {:to "/employees"})
                           :left-icon (ic/action-supervisor-account)})
          (rui/menu-item {:on-touch-tap (fn [_] (swap! open not))
                           :primary-text "Clientes"
                           :link-button true
                           :container-element (rr/link #js {:to "/customers"})
                           :left-icon (ic/action-favorite)})
          (rui/menu-item {:on-touch-tap (fn [_] (swap! open not))
                           :primary-text "Estoque"
                           :link-button true
                           :container-element (rr/link #js {:to "/scm/supplies"})
                           :left-icon (ic/action-shopping-cart)})
          (rui/menu-item {:on-touch-tap (fn [_] (swap! open not))
                           :link-button true
                           :container-element (rr/link #js {:to "/scm/orders"})
                           :primary-text "Encomendas / Produção"
                           :left-icon (ic/action-trending-up)})
          (rui/menu-item {:on-touch-tap (fn [_] (swap! open not))
                           :primary-text "Receitas"
                           :link-button true
                           :container-element (rr/link #js {:to "/recipes"})
                           :left-icon (ic/av-av-timer)}))))))
