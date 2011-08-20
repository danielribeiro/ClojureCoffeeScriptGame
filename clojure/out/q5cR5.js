goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.init_web_app = (function init_web_app(){
return game.jquery.call(null,"#gameOver").hide(cljs.core.List.EMPTY);
});
game.jquery.call(null,game.init_web_app);
