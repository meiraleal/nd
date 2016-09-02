(ns negociodigital.db
  (:require
    [rum.core :as rum]))

(defonce app-state (atom {:main {:nil nil
                                  :drawer-open false
                                  :dialog-open false
                                  :title "Negócio.digital"
                                  :dialog-title nil
                                  :current-item nil
                                  :current-item-config nil
                                  :current-collection nil
                                  :current-collection-config nil}
                           :employees [{:id 1 :name "Alan Leal" :status "fixo"}
                                        {:id 2 :name "Alan Meira" :status "freelancer"}
                                        {:id 3 :name "Tia Ana" :status "temporario"}
                                        {:id 4 :name "Sebastiana" :status "freelancer"}
                                        {:id 5 :name "Luciana" :status "freelancer"}]
                           :customers [{:id 1 :name "Cliente 1" :status "entregue"}
                                        {:id 2 :name "Cliente 2" :status "cancelado"}
                                        {:id 3 :name "Cliente 3" :status "pago"}]
                           :recipes [{:id 1 :name "Pudim de leite condensado" :description "melhor receita que tem"}]
                           :orders [{:id 1 :client 2 :status "Entregue"}]
                           :products [{:id 1 :name "Leite Condensado"}
                           {:id 2 :name "Leite Integral"}]
                           :supplies [{:id 1 :item 1 :quantity 4}
                                       {:id 2 :item 2 :quantity 4}]}))

;;; Main - UI Variables
(def drawer-open (rum/cursor-in app-state [:main :drawer-open]))
(def dialog-open (rum/cursor-in app-state [:main :dialog-open]))
(def dialog-title (rum/cursor-in app-state [:main :dialog-title]))
(def main-title (rum/cursor-in app-state [:main :title]))
(def current-collection (rum/cursor-in app-state [:main :current-collection]))
(def current-collection-config (rum/cursor-in app-state [:main :current-collection-config]))
(def current-item (rum/cursor-in app-state [:main :current-item]))
(def current-item-config (rum/cursor-in app-state [:main :current-item-config]))
(def nil-cursor (rum/cursor-in app-state [:main :nil]))

;;; Collections
(def employees (rum/cursor-in app-state [:employees]))
(def recipes (rum/cursor-in app-state [:recipes]))
(def customers (rum/cursor-in app-state [:customers]))
(def orders (rum/cursor-in app-state [:orders]))
(def products (rum/cursor-in app-state [:products]))
(def supplies (rum/cursor-in app-state [:supplies]))

(reset! current-collection employees)
(reset! current-item nil-cursor)

(defn next-id [coll]
  (inc (apply max (map (fn [m] (:id m)) coll))))

(defn get-item [coll index]
  (rum/cursor-in coll [index]))

(defn collection-lookup-table [coll]
  (map (fn [row] (select-keys row [:id :name])) coll))
