goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.p = goog.global['puts'];
game.init_web_app = (function init_web_app(){
return game.p.call(null,"some string","other string");
});
game.jquery.call(null,game.init_web_app);
