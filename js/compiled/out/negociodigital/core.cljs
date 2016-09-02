(ns negociodigital.core
  (:require
    [negociodigital.router :as r]
    [rum.core :as rum]))

(enable-console-print!)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [x:__figwheel_counter] inc)
  )

;(r/define-routes!)
(rum/mount r/routes js/document.body)
