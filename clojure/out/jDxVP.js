goog.provide('physicsGame');
goog.require('cljs.core');
physicsGame.jquery = $;
physicsGame.b2AABB = goog.global['Box2D']['Collision']['b2AABB'];
physicsGame.b2BodyDef = goog.global['Box2D']['Dynamics']['b2BodyDef'];
physicsGame.b2Body = goog.global['Box2D']['Dynamics']['b2Body'];
physicsGame.b2FixtureDef = goog.global['Box2D']['Dynamics']['b2FixtureDef'];
physicsGame.b2Fixture = goog.global['Box2D']['Dynamics']['b2Fixture'];
physicsGame.b2World = goog.global['Box2D']['Dynamics']['b2World'];
physicsGame.b2DebugDraw = goog.global['Box2D']['Dynamics']['b2DebugDraw'];
physicsGame.b2PolygonShape = goog.global['Box2D']['Collision']['Shapes']['b2PolygonShape'];
physicsGame.b2CircleShape = goog.global['Box2D']['Collision']['Shapes']['b2CircleShape'];
physicsGame.v = (function v(x,y){
return (new goog.global['Box2D']['Common']['Math']['b2Vec2'](x,y));
});
physicsGame.dom = (function dom(s){
return physicsGame.jquery.call(null,cljs.core.str.call(null,"#",cljs.core.name.call(null,s)));
});
physicsGame.nativejsset = function (o, key ,val) {
   o[key] = val;
};
physicsGame.native_set_wrapper = (function native_set_wrapper(jsobject,attr,value){
return physicsGame.nativejsset.call(null,jsobject,cljs.core.name.call(null,attr),value);
});
/**
* Sets an attribute name to a value on a javascript object
* Returns the original object
* @param {...*} var_args
*/
physicsGame.js_set = (function() {
var js_set = null;
var js_set__1941 = (function() { 
var G__1943__delegate = function (jsobject,values){
var G__1934__1935 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

while(true){
if(cljs.core.truth_(G__1934__1935))
{var vec__1936__1937 = cljs.core.first.call(null,G__1934__1935);
var attr__1938 = cljs.core.nth.call(null,vec__1936__1937,0,null);
var value__1939 = cljs.core.nth.call(null,vec__1936__1937,1,null);

physicsGame.native_set_wrapper.call(null,jsobject,attr__1938,value__1939);
{
var G__1944 = cljs.core.next.call(null,G__1934__1935);
G__1934__1935 = G__1944;
continue;
}
} else
{}
break;
}
return jsobject;
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
physicsGame.native_set_wrapper.call(null,jsobject,attr,value);
return jsobject;
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
physicsGame.p = goog.global['puts'];
physicsGame.scale = 30;
physicsGame.get_canvas = (function get_canvas(){
var canvas__1946 = physicsGame.dom.call(null,"﷐'canvas");

physicsGame.W = canvas__1946.width();
physicsGame.H = canvas__1946.height();
return canvas__1946.get(0);
});
physicsGame.create_game = (function create_game(canvas){
var gravity__1947 = physicsGame.v.call(null,0,10);
var doSleep__1948 = false;
var twiceScale__1949 = cljs.core._STAR_.call(null,2,physicsGame.scale);

return cljs.core.ObjMap.fromObject(["﷐'center-x","﷐'center-y","﷐'world","﷐'canvas"],{"﷐'center-x":cljs.core._SLASH_.call(null,physicsGame.W,twiceScale__1949),"﷐'center-y":cljs.core._SLASH_.call(null,physicsGame.H,twiceScale__1949),"﷐'world":(new physicsGame.b2World(gravity__1947,doSleep__1948)),"﷐'canvas":canvas});
});
physicsGame.create_fixture = (function() {
var create_fixture = null;
var create_fixture__1951 = (function (){
return create_fixture.call(null,null);
});
var create_fixture__1950 = (function (shape){
return physicsGame.js_set.call(null,(new physicsGame.b2FixtureDef()),"﷐'density",3,"﷐'friction",0.3,"﷐'restitution",0.9,"﷐'shape",shape);
});
create_fixture = function(shape){
switch(arguments.length){
case  0 :
return create_fixture__1951.call(this);
case  1 :
return create_fixture__1950.call(this,shape);
}
throw('Invalid arity: ' + arguments.length);
};
return create_fixture;
})()
;
physicsGame.create_body = (function create_body(x,y){
var b__1953 = (new physicsGame.b2BodyDef());

physicsGame.js_set.call(null,"﷐'type",physicsGame.b2Body.b2_dynamicBody);
b__1953.position.Set(x,y);
return b__1953;
});
physicsGame.create = (function create(game,body_def,fix_def){
var body__1954 = "﷐'world".call(null,game).CreateBody(body_def);

body__1954.CreateFixture(fix_def);
return body__1954;
});
physicsGame.wall = (function() {
var wall = null;
var wall__1957 = (function (game,width,height,x,y){
return wall.call(null,game,width,height,x,y,null);
});
var wall__1958 = (function (game,width,height,x,y,user_data){
var fix_def__1955 = physicsGame.create_fixture.call(null,(new physicsGame.b2PolygonShape()));
var body_def__1956 = physicsGame.create_body.call(null,x,y);

fix_def__1955.shape.SetAsBox(width,height);
physicsGame.js_set.call(null,body_def__1956,"﷐'userData",cljs.core.name.call(null,user_data),"﷐'type",physicsGame.b2Body.b2_staticBody);
return physicsGame.create.call(null,game,body_def__1956,fix_def__1955);
});
wall = function(game,width,height,x,y,user_data){
switch(arguments.length){
case  5 :
return wall__1957.call(this,game,width,height,x,y);
case  6 :
return wall__1958.call(this,game,width,height,x,y,user_data);
}
throw('Invalid arity: ' + arguments.length);
};
return wall;
})()
;
physicsGame.build_walls = (function build_walls(game){
var w__1960 = "﷐'center-x".call(null,game);
var h__1961 = "﷐'center-y".call(null,game);
var dim__1962 = cljs.core._SLASH_.call(null,200,physicsGame.scale);

physicsGame.wall.call(null,game,w__1960,dim__1962,w__1960,cljs.core._.call(null,dim__1962),"﷐'ceiling");
physicsGame.p.call(null,game,w__1960,dim__1962,w__1960,cljs.core._.call(null,dim__1962),"﷐'ceiling");
return game;
});
physicsGame.init_web_app = (function init_web_app(){
var game__1963 = physicsGame.create_game.call(null,physicsGame.get_canvas.call(null));

return physicsGame.build_walls.call(null,game__1963);
});
physicsGame.jquery.call(null,physicsGame.init_web_app);
