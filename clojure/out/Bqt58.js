goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.b2AABB = goog.global['Box2D']['Collision']['b2AABB'];
game.b2BodyDef = goog.global['Box2D']['Dynamics']['b2BodyDef'];
game.b2Body = goog.global['Box2D']['Dynamics']['b2Body'];
game.b2FixtureDef = goog.global['Box2D']['Dynamics']['b2FixtureDef'];
game.b2Fixture = goog.global['Box2D']['Dynamics']['b2Fixture'];
game.b2World = goog.global['Box2D']['Dynamics']['b2World'];
game.b2DebugDraw = goog.global['Box2D']['Dynamics']['b2DebugDraw'];
game.b2PolygonShape = goog.global['Box2D']['Collision']['Shapes']['b2PolygonShape'];
game.b2CircleShape = goog.global['Box2D']['Collision']['Shapes']['b2CircleShape'];
game.v = (function v(x,y){
return (new goog.global['Box2D']['Common']['Math']['b2Vec2'](x,y));
});
game.p = goog.global['puts'];
game.W = cljs.core.atom.call(null,0);
game.H = cljs.core.atom.call(null,0);
game.init_web_app = (function init_web_app(){
game.p.call(null,game.v.call(null,1,2));
cljs.core.swap_BANG_.call(null,game.W,50);
return game.p.call(null,cljs.core.deref.call(null,game.W));
});
game.jquery.call(null,game.init_web_app);
