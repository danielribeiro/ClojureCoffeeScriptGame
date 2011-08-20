goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.b2AABB = goog.global['Box2D']['Collision']['b2AABB'];
game.v = (function v(x,y){
return (new goog.global['Box2D']['Common']['Math']['b2Vec2'](x,y));
});
game.p = goog.global['puts'];
game.init_web_app = (function init_web_app(){
game.p.call(null,game.v.call(null,1,2));
return game.p.call(null,"what, het".split(","));
});
game.jquery.call(null,game.init_web_app);
