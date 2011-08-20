goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.console = console;
game.init_web_app = (function init_web_app(){
return goog.global['console']['log'].call(null,"some string");
});
game.jquery.call(null,game.init_web_app);
