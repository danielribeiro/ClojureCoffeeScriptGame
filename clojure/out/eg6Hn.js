goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.init_web_app = (function init_web_app(){
return game.console.log("some string");
});
game.jquery.call(null,game.init_web_app);
