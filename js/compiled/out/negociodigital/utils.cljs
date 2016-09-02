(ns negociodigital.utils)

(defn create-element [react-comp opts & children]
  (apply js/React.createElement react-comp (clj->js opts) children))

(defn create-factory [react-comp]
  (js/React.createFactory react-comp))

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))
