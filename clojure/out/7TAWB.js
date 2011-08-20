goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
/**
* @param {...*} var_args
*/
game.prime = (function() { 
var prime__delegate = function (arg){
return cljs.core.apply.call(null,puts,arg);
};
var prime = function (var_args){
var arg = null;
if (goog.isDef(var_args)) {
  arg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prime__delegate.call(this, arg);
};
prime.cljs$lang$maxFixedArity = 0;
prime.cljs$lang$applyTo = (function (arglist__1934){
var arg = cljs.core.seq( arglist__1934 );;
return prime__delegate.call(this, arg);
});
return prime;
})()
;
game.init_web_app = (function init_web_app(){
return game.prime.call(null,"some string");
});
game.jquery.call(null,game.init_web_app);
