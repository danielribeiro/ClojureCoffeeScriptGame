goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
/**
* @param {...*} var_args
*/
game.puts = (function() { 
var puts__delegate = function (args){
return cljs.core.apply.call(null,puts,args);
};
var puts = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return puts__delegate.call(this, args);
};
puts.cljs$lang$maxFixedArity = 0;
puts.cljs$lang$applyTo = (function (arglist__1934){
var args = cljs.core.seq( arglist__1934 );;
return puts__delegate.call(this, args);
});
return puts;
})()
;
game.init_web_app = (function init_web_app(){
return game.puts.call(null,"some string","another string");
});
game.jquery.call(null,game.init_web_app);
