goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.v = (function v(x,y){
return (new goog.global['Box2D']['Common']['Math']['b2Vec2'](x,y));
});
game.p = goog.global['puts'];
game.init_web_app = (function init_web_app(){
return game.p.call(null,game.v.call(null,1,2));
});
game.jquery.call(null,game.init_web_app);
