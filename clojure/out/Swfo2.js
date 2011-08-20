goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.init_web_app = (function init_web_app(){
return cljs.core.prn.call(null,"some string","something else","js* really should be dynamic");
});
game.jquery.call(null,game.init_web_app);
