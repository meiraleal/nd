(ns negociodigital.employees.core
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
             :status {"Status" "Status do Funcionário"}}
    :fields [(f/input-text "name" "Nome" "Qual o nome completo do funcionário(a)?")
              (f/select "status" "Vínculo" {"freelancer" "Freelancer" "fixo" "Fixo" "temporario" "Temporário"})]})

(rum/defcs main < { :did-mount (fn [state]
                                 (reset! db/main-title "Negócio.digital > Equipe")
                                 (reset! db/current-collection db/employees)
                                 (reset! db/current-collection-config config)
                                 state)}
  rum/reactive []
  [:div
    (dt/data-table)
    (dialog/dialog f/form (:fields config))
    (dialog/dialog-fab "Adicionar novo Funcionário(a)")])
