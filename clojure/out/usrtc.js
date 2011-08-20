goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.init_web_app = (function init_web_app(){
alert.call(null,"a clojure string");
return puts.call(null,"some string");
});
game.jquery.call(null,game.init_web_app);
