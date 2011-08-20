goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.lo = goog.global['puts'];
game.alertall = (function alertall(arg){
return goog.global['alert'].call(null,arg);
});
game.init_web_app = (function init_web_app(){
game.lo.call(null,"some string","other string");
game.lo.call(null,goog.global['puts']);
return game.alertall.call(null,"hi");
});
game.jquery.call(null,game.init_web_app);
