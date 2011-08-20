goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
/**
* @param {...*} var_args
*/
game.puts = (function() { 
var puts__delegate = function (arg){
var G__1934__1935 = cljs.core.seq.call(null,arg);

while(true){
if(cljs.core.truth_(G__1934__1935))
{var x__1936 = cljs.core.first.call(null,G__1934__1935);

puts.call(null,x__1936);
{
var G__1937 = cljs.core.next.call(null,G__1934__1935);
G__1934__1935 = G__1937;
continue;
}
} else
{return null;
}
break;
}
};
var puts = function (var_args){
var arg = null;
if (goog.isDef(var_args)) {
  arg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return puts__delegate.call(this, arg);
};
puts.cljs$lang$maxFixedArity = 0;
puts.cljs$lang$applyTo = (function (arglist__1938){
var arg = cljs.core.seq( arglist__1938 );;
return puts__delegate.call(this, arg);
});
return puts;
})()
;
game.init_web_app = (function init_web_app(){
return game.puts.call(null,"some string","something else","js* really should be dynamic");
});
game.jquery.call(null,game.init_web_app);
