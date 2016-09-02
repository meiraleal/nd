(ns negociodigital.recipes.core
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
             :name {"Nome" "Nome da receita"}}
    :fields [(f/input-text "name" "Nome" "Qual o nome da receita que você deseja cadastrar?")
              (f/text-field "description" "Descrição" "Um breve resumo sobre a receita")]})

(rum/defcs main < { :did-mount (fn [state]
                                 (reset! db/main-title "Negócio.digital > Receitas")
                                 (reset! db/current-collection db/recipes)
                                 (reset! db/current-collection-config config)
                                 state)}
  rum/reactive []
  [:div
    (dt/data-table)
    (dialog/dialog f/form (into [] (keys (:header config))))
    (dialog/dialog-fab "Adicionar nova Receita")])
