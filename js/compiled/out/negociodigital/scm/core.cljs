(ns negociodigital.scm.core
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

(def orders-config
  {:header {:id {"ID" "Código identificador"}
             :client {"Cliente" "Nome do cliente que pediu a ordem"}
             :status {"Status" "Status da encomenda"}}
    :fields [(f/input-text "name" "Nome" "Qual o nome completo do funcionário(a)?")
              (f/select "status" "Etapa" {"aguardando" "Aguardando" "producacao" "Em produção" "finalizada" "Finalizada" "entregue" "Entregue"})]})

(rum/defcs orders < { :did-mount (fn [state]
                                   (reset! db/main-title "Negócio.digital > Encomendas")
                                   (reset! db/current-collection db/orders)
                                   (reset! db/current-collection-config orders-config)
                                   state)}
  rum/reactive []
  [:div
    (dt/data-table)
    (dialog/dialog f/form (:fields orders-config))
    (dialog/dialog-fab "Criar nova Encomenda")])

(def supplies-config
  {:header {:id {"ID" "Código identificador"}
             :item {"Item" "Nome do item que consta no estoque"}
             :quantity {"Quantidade" "Quantidade disponível no estoque atualmente"}}
    :fields [(f/select "item" "Item" (db/collection-lookup-table @db/products))
              (f/input-text "quantity" "Quantidade" "Quantos deste item em estoque?")]})

(rum/defcs supplies < { :did-mount (fn [state]
                                   (reset! db/main-title "Negócio.digital > Estoque")
                                   (reset! db/current-collection db/supplies)
                                   (reset! db/current-collection-config supplies-config)
                                   state)}
  rum/reactive []
  [:div
    (dt/data-table)
    (dialog/dialog f/form (:fields supplies-config))
    (dialog/dialog-fab "Adicionar item ao estoque")])
