goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.lo = goog.global['puts'];
/**
* @param {...*} var_args
*/
game.alertall = (function() { 
var alertall__delegate = function (args){
var G__1934__1935 = cljs.core.seq.call(null,args);

while(true){
if(cljs.core.truth_(G__1934__1935))
{var x__1936 = cljs.core.first.call(null,G__1934__1935);

goog.global['alert'].call(null,x__1936);
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
var alertall = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return alertall__delegate.call(this, args);
};
alertall.cljs$lang$maxFixedArity = 0;
alertall.cljs$lang$applyTo = (function (arglist__1938){
var args = cljs.core.seq( arglist__1938 );;
return alertall__delegate.call(this, args);
});
return alertall;
})()
;
game.init_web_app = (function init_web_app(){
game.lo.call(null,"some string","other string");
game.lo.call(null,goog.global['puts']);
return game.alertall.call(null,"hi");
});
game.jquery.call(null,game.init_web_app);
