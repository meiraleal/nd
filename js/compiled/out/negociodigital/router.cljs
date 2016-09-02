(ns negociodigital.router
  (:require [react-router.core :as rr]
    [negociodigital.main.core :as m]
    [negociodigital.employees.core :as e]
    [negociodigital.scm.core :as scm]
    [negociodigital.recipes.core :as r]
    [negociodigital.customers.core :as c]
    ))

(def routes
  (rr/router #js {:history rr/hash-history}
    (rr/route #js {:path "/", :component (:rum/class (meta m/main))}
      (rr/index-route #js {:component (:rum/class (meta e/main))})
      (rr/route #js {:path "employees", :component (:rum/class (meta e/main))})
      (rr/route #js {:path "customers", :component (:rum/class (meta c/main))})
      (rr/route #js {:path "recipes", :component (:rum/class (meta r/main))})
      (rr/route #js {:path "scm/orders", :component (:rum/class (meta scm/orders))})
      (rr/route #js {:path "scm/supplies", :component (:rum/class (meta scm/supplies))})
      (rr/route #js {:path "*", :component (:rum/class (meta e/main))}))
    ))
