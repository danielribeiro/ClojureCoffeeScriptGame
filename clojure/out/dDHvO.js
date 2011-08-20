goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.puts = (function puts(arg){
return puts.call(null,arg);
});
game.init_web_app = (function init_web_app(){
return game.puts.call(null,"some string");
});
game.jquery.call(null,game.init_web_app);
