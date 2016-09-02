(ns negociodigital.customers.core
  (:require
    [cljs-react-material-ui.core :as ui]
    [cljs-react-material-ui.icons :as ic]
    [cljs-react-material-ui.rum :as rui]
    [negociodigital.components.form :as f]
    [negociodigital.components.data-table :as dt]
    [negociodigital.components.drawer :as drawer]
    [negociodigital.components.dialog :as dialog]
    [negociodigital.db :as db]
    [rum.core :as rum]))

(def config
  {:header {:id {"ID" "Código identificador"}
             :name {"Nome" "Nome do funcionário(a)"}
             :status {"Status" "Status do Cliente"}}
    :fields [(f/input-text "name" "Nome" "Qual o nome do cliente/empresa?")
              (f/select "status" "Status" {"pago" "Pago" "entregue" "Encomenda Entregue" "cancelado" "Cancelado"})]})

(rum/defcs main < { :did-mount (fn [state]
                                 (reset! db/main-title "Negócio.digital > Clientes")
                                 (reset! db/current-collection db/customers)
                                 (reset! db/current-collection-config config)
                                 state)}
  rum/reactive []
  [:div
    (dt/data-table)
    (dialog/dialog f/form (:fields config))
    (dialog/dialog-fab "Adicionar novo Cliente")])
