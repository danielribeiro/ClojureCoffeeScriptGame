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
var js_set__1942 = (function() { 
var G__1944__delegate = function (jsobject,values){
var G__1935__1936 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

while(true){
if(cljs.core.truth_(G__1935__1936))
{var vec__1937__1938 = cljs.core.first.call(null,G__1935__1936);
var attr__1939 = cljs.core.nth.call(null,vec__1937__1938,0,null);
var value__1940 = cljs.core.nth.call(null,vec__1937__1938,1,null);

physicsGame.native_set_wrapper.call(null,jsobject,attr__1939,value__1940);
{
var G__1945 = cljs.core.next.call(null,G__1935__1936);
G__1935__1936 = G__1945;
continue;
}
} else
{}
break;
}
return jsobject;
};
var G__1944 = function (jsobject,var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__1944__delegate.call(this, jsobject, values);
};
G__1944.cljs$lang$maxFixedArity = 1;
G__1944.cljs$lang$applyTo = (function (arglist__1946){
var jsobject = cljs.core.first(arglist__1946);
var values = cljs.core.rest(arglist__1946);
return G__1944__delegate.call(this, jsobject, values);
});
return G__1944;
})()
;
var js_set__1941 = (function (jsobject,attr,value){
physicsGame.native_set_wrapper.call(null,jsobject,attr,value);
return jsobject;
});
js_set = function(jsobject,attr,var_args){
var value = var_args;
switch(arguments.length){
default:
return js_set__1942.apply(this,arguments);
case  3 :
return js_set__1941.call(this,jsobject,attr,value);
}
throw('Invalid arity: ' + arguments.length);
};
js_set.cljs$lang$maxFixedArity = 3;
js_set.cljs$lang$applyTo = js_set__1942.cljs$lang$applyTo;
return js_set;
})()
;
/**
* Helper function for setting an atom of a map
* @param {...*} var_args
*/
physicsGame.atom_set = (function() { 
var atom_set__delegate = function (atom,values){
cljs.core.swap_BANG_.call(null,atom,(function (p1__1934_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__1934_SHARP_,values);
}));
return atom;
};
var atom_set = function (atom,var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return atom_set__delegate.call(this, atom, values);
};
atom_set.cljs$lang$maxFixedArity = 1;
atom_set.cljs$lang$applyTo = (function (arglist__1947){
var atom = cljs.core.first(arglist__1947);
var values = cljs.core.rest(arglist__1947);
return atom_set__delegate.call(this, atom, values);
});
return atom_set;
})()
;
physicsGame.p = goog.global['puts'];
physicsGame.scale = 30;
physicsGame.speed_rate = 300;
physicsGame.empty_fn = cljs.core.constantly.call(null,null);
physicsGame.get_canvas = (function get_canvas(){
var canvas__1948 = physicsGame.dom.call(null,"﷐'canvas");

physicsGame.W = canvas__1948.width();
physicsGame.H = canvas__1948.height();
return canvas__1948.get(0);
});
physicsGame.create_fixture = (function() {
var create_fixture = null;
var create_fixture__1950 = (function (){
return create_fixture.call(null,null);
});
var create_fixture__1949 = (function (shape){
return physicsGame.js_set.call(null,(new physicsGame.b2FixtureDef()),"﷐'density",3,"﷐'friction",0.3,"﷐'restitution",1.9,"﷐'shape",shape);
});
create_fixture = function(shape){
switch(arguments.length){
case  0 :
return create_fixture__1950.call(this);
case  1 :
return create_fixture__1949.call(this,shape);
}
throw('Invalid arity: ' + arguments.length);
};
return create_fixture;
})()
;
physicsGame.create_body = (function create_body(x,y){
var b__1952 = (new physicsGame.b2BodyDef());

physicsGame.js_set.call(null,b__1952,"﷐'type",physicsGame.b2Body.b2_dynamicBody);
b__1952.position.Set(x,y);
return b__1952;
});
physicsGame.create = (function create(game,body_def,fix_def){
var body__1953 = cljs.core.deref.call(null,game).call(null,"﷐'world").CreateBody(body_def);

body__1953.CreateFixture(fix_def);
return body__1953;
});
physicsGame.wall = (function() {
var wall = null;
var wall__1956 = (function (game,width,height,x,y){
return wall.call(null,game,width,height,x,y,null);
});
var wall__1957 = (function (game,width,height,x,y,user_data){
var fix_def__1954 = physicsGame.create_fixture.call(null,(new physicsGame.b2PolygonShape()));
var body_def__1955 = physicsGame.create_body.call(null,x,y);

fix_def__1954.shape.SetAsBox(width,height);
physicsGame.js_set.call(null,body_def__1955,"﷐'userData",user_data,"﷐'type",physicsGame.b2Body.b2_staticBody);
return physicsGame.create.call(null,game,body_def__1955,fix_def__1954);
});
wall = function(game,width,height,x,y,user_data){
switch(arguments.length){
case  5 :
return wall__1956.call(this,game,width,height,x,y);
case  6 :
return wall__1957.call(this,game,width,height,x,y,user_data);
}
throw('Invalid arity: ' + arguments.length);
};
return wall;
})()
;
physicsGame.build_walls = (function build_walls(game){
var w__1959 = cljs.core.deref.call(null,game).call(null,"﷐'center-x");
var h__1960 = cljs.core.deref.call(null,game).call(null,"﷐'center-y");
var dim__1961 = cljs.core._SLASH_.call(null,200,physicsGame.scale);

physicsGame.wall.call(null,game,w__1959,dim__1961,w__1959,cljs.core._.call(null,dim__1961),"﷐'ceiling");
physicsGame.wall.call(null,game,w__1959,dim__1961,w__1959,cljs.core._PLUS_.call(null,dim__1961,cljs.core._STAR_.call(null,2,h__1960)));
physicsGame.wall.call(null,game,dim__1961,h__1960,cljs.core._.call(null,dim__1961),h__1960);
return physicsGame.wall.call(null,game,dim__1961,h__1960,cljs.core._PLUS_.call(null,dim__1961,cljs.core._STAR_.call(null,2,w__1959)),h__1960);
});
physicsGame.random_body = (function random_body(x,y){
var b__1962 = physicsGame.create_body.call(null,x,y);
var vx__1963 = cljs.core._.call(null,cljs.core._STAR_.call(null,10,cljs.core.rand.call(null)),5);

return physicsGame.js_set.call(null,b__1962,"﷐'angle",cljs.core._STAR_.call(null,360,cljs.core.rand.call(null)),"﷐'linearVelocity",physicsGame.v.call(null,vx__1963,0),"﷐'angularVelocity",cljs.core._.call(null,cljs.core._STAR_.call(null,4,cljs.core.rand.call(null)),2));
});
physicsGame.create_circle = (function create_circle(game,x,y,size){
return physicsGame.create.call(null,game,physicsGame.random_body.call(null,x,y),physicsGame.create_fixture.call(null,(new physicsGame.b2CircleShape(size))));
});
physicsGame.paused_QMARK_ = (function paused_QMARK_(game){
return cljs.core.deref.call(null,game).call(null,"﷐'paused");
});
physicsGame.not_paused_QMARK_ = (function not_paused_QMARK_(game){
return cljs.core.not.call(null,physicsGame.paused_QMARK_.call(null,game));
});
physicsGame.set_paused = (function set_paused(game,val){
return physicsGame.atom_set.call(null,game,"﷐'paused",val);
});
physicsGame.create_element = (function create_element(game){
var randomY__1964 = cljs.core._SLASH_.call(null,cljs.core._STAR_.call(null,physicsGame.H,cljs.core._PLUS_.call(null,0.2,cljs.core._STAR_.call(null,0.4,cljs.core.rand.call(null)))),physicsGame.scale);
var randomX__1965 = cljs.core._SLASH_.call(null,cljs.core._PLUS_.call(null,25,cljs.core._STAR_.call(null,cljs.core.rand.call(null),cljs.core._.call(null,physicsGame.W,50))),physicsGame.scale);

return physicsGame.create_circle.call(null,game,randomX__1965,randomY__1964,cljs.core.inc.call(null,cljs.core.rand.call(null)));
});
physicsGame.maybe_create_element = (function maybe_create_element(game){
var neg_probability__1966 = cljs.core._STAR_.call(null,0.97,Math.pow.call(null,0.95,cljs.core.deref.call(null,game).call(null,"﷐'speed")));

if(cljs.core.truth_(cljs.core._GT_.call(null,cljs.core.rand.call(null),neg_probability__1966)))
{return physicsGame.create_element.call(null,game);
} else
{return null;
}
});
physicsGame.do_tick = (function do_tick(game){
var w__1967 = cljs.core.deref.call(null,game).call(null,"﷐'world");

physicsGame.maybe_create_element.call(null,game);
w__1967.Step(cljs.core._SLASH_.call(null,1,30),10,10);
w__1967.DrawDebugData();
return w__1967.ClearForces();
});
physicsGame.tick = (function tick(game){
if(cljs.core.truth_((function (){var and__3574__auto____1968 = cljs.core.deref.call(null,game).call(null,"﷐'game-over");

if(cljs.core.truth_(and__3574__auto____1968))
{return physicsGame.not_paused_QMARK_.call(null,game);
} else
{return and__3574__auto____1968;
}
})()))
{physicsGame.set_paused.call(null,game,true);
return physicsGame.dom.call(null,"﷐'gameOver").fadeIn();
} else
{if(cljs.core.truth_(physicsGame.not_paused_QMARK_.call(null,game)))
{return physicsGame.do_tick.call(null,game);
} else
{return null;
}
}
});
physicsGame.animate_world = (function animate_world(game){
var debug_draw__1969 = (new physicsGame.b2DebugDraw());

var G__1970__1971 = debug_draw__1969;

G__1970__1971.SetSprite(cljs.core.deref.call(null,game).call(null,"﷐'canvas").getContext("2d"));
G__1970__1971.SetDrawScale(physicsGame.scale);
G__1970__1971.SetLineThickness(1.0);
G__1970__1971.SetFlags(physicsGame.b2DebugDraw.e_shapeBit);
G__1970__1971;
cljs.core.deref.call(null,game).call(null,"﷐'world").SetDebugDraw(debug_draw__1969);
return goog.global['setInterval'].call(null,(function (){
return physicsGame.tick.call(null,game);
}),cljs.core._SLASH_.call(null,1000,30));
});
physicsGame.add_methods = (function add_methods(game_ref){
return cljs.core.assoc.call(null,game_ref,"﷐'create-circle",physicsGame.create_circle);
});
physicsGame.init = (function init(game){
return physicsGame.atom_set.call(null,game,"﷐'to-destroy",cljs.core.Vector.fromArray([]),"﷐'paused",false,"﷐'game-over",false,"﷐'score",0,"﷐'speed",0,"﷐'ticks-to-speed",physicsGame.speed_rate);
});
physicsGame.pre_solve = (function pre_solve(game,contact,manifold){
if(cljs.core.truth_(contact.IsTouching()))
{var data_x__1975 = contact.GetFixtureA().GetBody().GetUserData();
var data_y__1976 = contact.GetFixtureB().GetBody().GetUserData();

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1972_SHARP_){
return cljs.core._EQ_.call(null,p1__1972_SHARP_,"﷐'ceiling");
}),cljs.core.Vector.fromArray([data_x__1975,data_y__1976]))))
{return physicsGame.atom_set.call(null,game,"﷐'game-over",true);
} else
{return null;
}
} else
{return null;
}
});
physicsGame.contact_listener = (function contact_listener(game){
return physicsGame.js_set.call(null,(new goog.global['Object']()),"﷐'PostSolve",physicsGame.empty_fn,"﷐'BeginContact",physicsGame.empty_fn,"﷐'EndContact",physicsGame.empty_fn,"﷐'PreSolve",(function (p1__1973_SHARP_,p2__1974_SHARP_){
return physicsGame.pre_solve.call(null,game,p1__1973_SHARP_,p2__1974_SHARP_);
}));
});
physicsGame.set_contact_listener = (function set_contact_listener(game){
cljs.core.deref.call(null,game).call(null,"﷐'world").SetContactListener(physicsGame.contact_listener.call(null,game));
return game;
});
physicsGame.build_world = (function build_world(){
var gravity__1977 = physicsGame.v.call(null,0,10);
var doSleep__1978 = false;
var world__1979 = (new physicsGame.b2World(gravity__1977,doSleep__1978));

return world__1979;
});
physicsGame.create_game = (function create_game(canvas){
var twiceScale__1980 = cljs.core._STAR_.call(null,2,physicsGame.scale);

return physicsGame.init.call(null,physicsGame.set_contact_listener.call(null,cljs.core.atom.call(null,physicsGame.add_methods.call(null,cljs.core.ObjMap.fromObject(["﷐'center-x","﷐'center-y","﷐'world","﷐'canvas"],{"﷐'center-x":cljs.core._SLASH_.call(null,physicsGame.W,twiceScale__1980),"﷐'center-y":cljs.core._SLASH_.call(null,physicsGame.H,twiceScale__1980),"﷐'world":physicsGame.build_world.call(null),"﷐'canvas":canvas})))));
});
physicsGame.update_pause_text = (function update_pause_text(game){
return physicsGame.dom.call(null,"﷐'pause").text((cljs.core.truth_(cljs.core.deref.call(null,game).call(null,"﷐'paused"))?"Unpause":"Pause"));
});
physicsGame.toggle_pause = (function toggle_pause(game){
if(cljs.core.truth_(cljs.core.not.call(null,"﷐'game-over".call(null,cljs.core.deref.call(null,game)),(function (){physicsGame.set_paused.call(null,game,physicsGame.not_paused_QMARK_.call(null,game));
return physicsGame.update_pause_text.call(null,game);
})())))
{return null;
} else
{return null;
}
});
physicsGame.init_web_app = (function init_web_app(){
var game__1981 = physicsGame.create_game.call(null,physicsGame.get_canvas.call(null));

physicsGame.dom.call(null,"﷐'pause").click((function (){
return physicsGame.toggle_pause.call(null,game__1981);
}));
physicsGame.build_walls.call(null,game__1981);
return physicsGame.animate_world.call(null,game__1981);
});
physicsGame.jquery.call(null,physicsGame.init_web_app);
