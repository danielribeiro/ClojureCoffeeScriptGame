goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.console = console;
game.init_web_app = (function init_web_app(){
return goog.global['puts'].call(null,"some string");
});
game.jquery.call(null,game.init_web_app);
