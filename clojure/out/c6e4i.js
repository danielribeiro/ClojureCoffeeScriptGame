goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.init_web_app = (function init_web_app(){
alert.call(null,"a clojure string");
return alert.call(null,"﷐'keyword");
});
game.jquery.call(null,game.init_web_app);
