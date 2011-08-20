(defn exportToJs [s package]
  (doseq [x (.split s ", ")]
    (println (str "(def " x " js/" package "." x ")"))
    )
  )

;(exportToJs "b2BodyDef, b2Body, b2FixtureDef, b2Fixture, b2World, b2DebugDraw"
;  'Box2D.Dynamics)
;(exportToJs "b2PolygonShape, b2CircleShape"
;  'Box2D.Collision.Shapes)

(defn p [& more] (apply println more))
(def W)
(def H)


(defn init-web-app []
  (do
    (def W 50)
    (p W)
  ))


(init-web-app)
(p W)
