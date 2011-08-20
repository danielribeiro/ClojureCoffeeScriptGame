goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.b2AABB = goog.global['Box2D']['Collision']['b2AABB'];
game.b2BodyDef = goog.global['Box2D']['Dynamics']['b2BodyDef'];
game.b2Body = goog.global['Box2D']['Dynamics']['b2Body'];
game.b2FixtureDef = goog.global['Box2D']['Dynamics']['b2FixtureDef'];
game.b2Fixture = goog.global['Box2D']['Dynamics']['b2Fixture'];
game.b2World = goog.global['Box2D']['Dynamics']['b2World'];
game.b2DebugDraw = goog.global['Box2D']['Dynamics']['b2DebugDraw'];
game.b2PolygonShape = goog.global['Box2D']['Collision']['Shapes']['b2PolygonShape'];
game.b2CircleShape = goog.global['Box2D']['Collision']['Shapes']['b2CircleShape'];
game.v = (function v(x,y){
return (new goog.global['Box2D']['Common']['Math']['b2Vec2'](x,y));
});
game.dom = (function dom(s){
return game.jquery.call(null,cljs.core.str.call(null,"#",cljs.core.name.call(null,s)));
});
game.nativejsset = function (o, key ,val) {
   o[key] = val;
   return o;
};
/**
* Sets an attribute name to a value on a javascript object
* @param {...*} var_args
*/
game.js_set = (function() {
var js_set = null;
var js_set__1941 = (function() { 
var G__1943__delegate = function (jsobject,values){
var G__1934__1935 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

while(true){
if(cljs.core.truth_(G__1934__1935))
{var vec__1936__1937 = cljs.core.first.call(null,G__1934__1935);
var key__1938 = cljs.core.nth.call(null,vec__1936__1937,0,null);
var value__1939 = cljs.core.nth.call(null,vec__1936__1937,1,null);

js_set.call(null,jsobject,key__1938,value__1939);
{
var G__1944 = cljs.core.next.call(null,G__1934__1935);
G__1934__1935 = G__1944;
continue;
}
} else
{return null;
}
break;
}
};
var G__1943 = function (jsobject,var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__1943__delegate.call(this, jsobject, values);
};
G__1943.cljs$lang$maxFixedArity = 1;
G__1943.cljs$lang$applyTo = (function (arglist__1945){
var jsobject = cljs.core.first(arglist__1945);
var values = cljs.core.rest(arglist__1945);
return G__1943__delegate.call(this, jsobject, values);
});
return G__1943;
})()
;
var js_set__1940 = (function (jsobject,attr,value){
return game.nativejsset.call(null,jsobject,cljs.core.name.call(null,attr),value);
});
js_set = function(jsobject,attr,var_args){
var value = var_args;
switch(arguments.length){
default:
return js_set__1941.apply(this,arguments);
case  3 :
return js_set__1940.call(this,jsobject,attr,value);
}
throw('Invalid arity: ' + arguments.length);
};
js_set.cljs$lang$maxFixedArity = 3;
js_set.cljs$lang$applyTo = js_set__1941.cljs$lang$applyTo;
return js_set;
})()
;
game.p = goog.global['puts'];
game.scale = 30;
game.get_canvas = (function get_canvas(){
var canvas__1946 = game.dom.call(null,"﷐'canvas");

game.W = canvas__1946.width();
game.H = canvas__1946.height();
return canvas__1946.get(0);
});
game.create_game = (function create_game(canvas){
var gravity__1947 = game.v.call(null,0,10);
var doSleep__1948 = false;
var twiceScale__1949 = cljs.core._STAR_.call(null,2,game.scale);

return cljs.core.ObjMap.fromObject(["﷐'center-x","﷐'center-y","﷐'world","﷐'canvas"],{"﷐'center-x":cljs.core._SLASH_.call(null,game.W,twiceScale__1949),"﷐'center-y":cljs.core._SLASH_.call(null,game.H,twiceScale__1949),"﷐'world":(new game.b2World(gravity__1947,doSleep__1948)),"﷐'canvas":canvas});
});
game.createFixture = (function createFixture(){
var f__1950 = (new game.b2Fixture());

return game.js_set.call(null,f__1950,"﷐'density",3);
});
game.init_web_app = (function init_web_app(){
game.p.call(null,game.create_game.call(null,game.get_canvas.call(null)));
game.p.call(null,cljs.core.ObjMap.fromObject(["﷐'um","﷐'dois"],{"﷐'um":1,"﷐'dois":2}));
return game.p.call(null,game.js_set.call(null,game.createFixture.call(null),"﷐'friction",.3,"﷐'restitution",.9));
});
game.jquery.call(null,game.init_web_app);
