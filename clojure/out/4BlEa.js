goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
/**
* @param {...*} var_args
*/
game.log = (function() { 
var log__delegate = function (args){
return goog.global['console']['log'].call(null,cljs.core.apply.call(null,cljs.core.pr_str,args));
};
var log = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return log__delegate.call(this, args);
};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__1934){
var args = cljs.core.seq( arglist__1934 );;
return log__delegate.call(this, args);
});
return log;
})()
;
game.init_web_app = (function init_web_app(){
return game.log.call(null,"some string","and some other");
});
game.jquery.call(null,game.init_web_app);
