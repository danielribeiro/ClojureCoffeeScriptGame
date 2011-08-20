goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.p = goog.global['puts'];
game.init_web_app = (function init_web_app(){
return game.p.call(null,goog.global['Box2D']['Common']['Math']['b2Vec2']);
});
game.jquery.call(null,game.init_web_app);
