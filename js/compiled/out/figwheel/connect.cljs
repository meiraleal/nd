(ns figwheel.connect (:require [negociodigital.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/negociodigital.core.on-js-reload (apply js/negociodigital.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'negociodigital.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

