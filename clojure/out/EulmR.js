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
/**
* @param {...*} var_args
*/
physicsGame.nativearray = (function() { 
var nativearray__delegate = function (args){
var ret__1934 = (new goog.global['Array']());

var G__1935__1936 = cljs.core.seq.call(null,args);

while(true){
if(cljs.core.truth_(G__1935__1936))
{var arg__1937 = cljs.core.first.call(null,G__1935__1936);

ret__1934.push(arg__1937);
{
var G__1938 = cljs.core.next.call(null,G__1935__1936);
G__1935__1936 = G__1938;
continue;
}
} else
{}
break;
}
return ret__1934;
};
var nativearray = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return nativearray__delegate.call(this, args);
};
nativearray.cljs$lang$maxFixedArity = 0;
nativearray.cljs$lang$applyTo = (function (arglist__1939){
var args = cljs.core.seq( arglist__1939 );;
return nativearray__delegate.call(this, args);
});
return nativearray;
})()
;
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
var js_set__1948 = (function() { 
var G__1950__delegate = function (jsobject,values){
var G__1941__1942 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

while(true){
if(cljs.core.truth_(G__1941__1942))
{var vec__1943__1944 = cljs.core.first.call(null,G__1941__1942);
var attr__1945 = cljs.core.nth.call(null,vec__1943__1944,0,null);
var value__1946 = cljs.core.nth.call(null,vec__1943__1944,1,null);

physicsGame.native_set_wrapper.call(null,jsobject,attr__1945,value__1946);
{
var G__1951 = cljs.core.next.call(null,G__1941__1942);
G__1941__1942 = G__1951;
continue;
}
} else
{}
break;
}
return jsobject;
};
var G__1950 = function (jsobject,var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__1950__delegate.call(this, jsobject, values);
};
G__1950.cljs$lang$maxFixedArity = 1;
G__1950.cljs$lang$applyTo = (function (arglist__1952){
var jsobject = cljs.core.first(arglist__1952);
var values = cljs.core.rest(arglist__1952);
return G__1950__delegate.call(this, jsobject, values);
});
return G__1950;
})()
;
var js_set__1947 = (function (jsobject,attr,value){
physicsGame.native_set_wrapper.call(null,jsobject,attr,value);
return jsobject;
});
js_set = function(jsobject,attr,var_args){
var value = var_args;
switch(arguments.length){
default:
return js_set__1948.apply(this,arguments);
case  3 :
return js_set__1947.call(this,jsobject,attr,value);
}
throw('Invalid arity: ' + arguments.length);
};
js_set.cljs$lang$maxFixedArity = 3;
js_set.cljs$lang$applyTo = js_set__1948.cljs$lang$applyTo;
return js_set;
})()
;
/**
* Helper function for setting an atom of a map
* @param {...*} var_args
*/
physicsGame.atom_set = (function() { 
var atom_set__delegate = function (atom,values){
cljs.core.swap_BANG_.call(null,atom,(function (p1__1940_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__1940_SHARP_,values);
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
atom_set.cljs$lang$applyTo = (function (arglist__1953){
var atom = cljs.core.first(arglist__1953);
var values = cljs.core.rest(arglist__1953);
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
var canvas__1954 = physicsGame.dom.call(null,"﷐'canvas");

physicsGame.W = canvas__1954.width();
physicsGame.H = canvas__1954.height();
return canvas__1954.get(0);
});
physicsGame.create_fixture = (function() {
var create_fixture = null;
var create_fixture__1956 = (function (){
return create_fixture.call(null,null);
});
var create_fixture__1955 = (function (shape){
return physicsGame.js_set.call(null,(new physicsGame.b2FixtureDef()),"﷐'density",3,"﷐'friction",0.3,"﷐'restitution",0.9,"﷐'shape",shape);
});
create_fixture = function(shape){
switch(arguments.length){
case  0 :
return create_fixture__1956.call(this);
case  1 :
return create_fixture__1955.call(this,shape);
}
throw('Invalid arity: ' + arguments.length);
};
return create_fixture;
})()
;
physicsGame.create_body = (function create_body(x,y){
var b__1958 = (new physicsGame.b2BodyDef());

physicsGame.js_set.call(null,b__1958,"﷐'type",physicsGame.b2Body.b2_dynamicBody);
b__1958.position.Set(x,y);
return b__1958;
});
physicsGame.create = (function create(game,body_def,fix_def){
var body__1959 = cljs.core.deref.call(null,game).call(null,"﷐'world").CreateBody(body_def);

body__1959.CreateFixture(fix_def);
return body__1959;
});
physicsGame.wall = (function() {
var wall = null;
var wall__1962 = (function (game,width,height,x,y){
return wall.call(null,game,width,height,x,y,null);
});
var wall__1963 = (function (game,width,height,x,y,user_data){
var fix_def__1960 = physicsGame.create_fixture.call(null,(new physicsGame.b2PolygonShape()));
var body_def__1961 = physicsGame.create_body.call(null,x,y);

fix_def__1960.shape.SetAsBox(width,height);
physicsGame.js_set.call(null,body_def__1961,"﷐'userData",user_data,"﷐'type",physicsGame.b2Body.b2_staticBody);
return physicsGame.create.call(null,game,body_def__1961,fix_def__1960);
});
wall = function(game,width,height,x,y,user_data){
switch(arguments.length){
case  5 :
return wall__1962.call(this,game,width,height,x,y);
case  6 :
return wall__1963.call(this,game,width,height,x,y,user_data);
}
throw('Invalid arity: ' + arguments.length);
};
return wall;
})()
;
physicsGame.build_walls = (function build_walls(game){
var w__1965 = cljs.core.deref.call(null,game).call(null,"﷐'center-x");
var h__1966 = cljs.core.deref.call(null,game).call(null,"﷐'center-y");
var dim__1967 = cljs.core._SLASH_.call(null,200,physicsGame.scale);

physicsGame.wall.call(null,game,w__1965,dim__1967,w__1965,cljs.core._.call(null,dim__1967),"﷐'ceiling");
physicsGame.wall.call(null,game,w__1965,dim__1967,w__1965,cljs.core._PLUS_.call(null,dim__1967,cljs.core._STAR_.call(null,2,h__1966)));
physicsGame.wall.call(null,game,dim__1967,h__1966,cljs.core._.call(null,dim__1967),h__1966);
return physicsGame.wall.call(null,game,dim__1967,h__1966,cljs.core._PLUS_.call(null,dim__1967,cljs.core._STAR_.call(null,2,w__1965)),h__1966);
});
physicsGame.random_body = (function random_body(x,y){
var b__1968 = physicsGame.create_body.call(null,x,y);
var vx__1969 = cljs.core._.call(null,cljs.core._STAR_.call(null,10,cljs.core.rand.call(null)),5);

return physicsGame.js_set.call(null,b__1968,"﷐'angle",cljs.core._STAR_.call(null,360,cljs.core.rand.call(null)),"﷐'linearVelocity",physicsGame.v.call(null,vx__1969,0),"﷐'angularVelocity",cljs.core._.call(null,cljs.core._STAR_.call(null,4,cljs.core.rand.call(null)),2));
});
physicsGame.create_circle = (function create_circle(game,x,y,size){
return physicsGame.create.call(null,game,physicsGame.random_body.call(null,x,y),physicsGame.create_fixture.call(null,(new physicsGame.b2CircleShape(size))));
});
physicsGame.create_square = (function create_square(game,x,y,size){
var fixture__1970 = physicsGame.create_fixture.call(null,(new physicsGame.b2PolygonShape()));

fixture__1970.shape.SetAsBox(size,size);
return physicsGame.create.call(null,game,physicsGame.random_body.call(null,x,y),fixture__1970);
});
physicsGame.create_triangle = (function create_triangle(game,x,y,size){
var fixture__1971 = physicsGame.create_fixture.call(null,(new physicsGame.b2PolygonShape()));
var vertices__1972 = physicsGame.nativearray.call(null,physicsGame.v.call(null,cljs.core._.call(null,size),0),physicsGame.v.call(null,size,0),physicsGame.v.call(null,0,cljs.core._STAR_.call(null,size,Math.sqrt.call(null,3))));

fixture__1971.shape.SetAsArray(vertices__1972);
return physicsGame.create.call(null,game,physicsGame.random_body.call(null,x,y),fixture__1971);
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
var randomY__1973 = cljs.core._SLASH_.call(null,cljs.core._STAR_.call(null,physicsGame.H,cljs.core._PLUS_.call(null,0.2,cljs.core._STAR_.call(null,0.4,cljs.core.rand.call(null)))),physicsGame.scale);
var randomX__1974 = cljs.core._SLASH_.call(null,cljs.core._PLUS_.call(null,25,cljs.core._STAR_.call(null,cljs.core.rand.call(null),cljs.core._.call(null,physicsGame.W,50))),physicsGame.scale);

return physicsGame.create_triangle.call(null,game,randomX__1974,randomY__1973,cljs.core.inc.call(null,cljs.core.rand.call(null)));
});
physicsGame.maybe_create_element = (function maybe_create_element(game){
var neg_probability__1975 = cljs.core._STAR_.call(null,0.97,Math.pow.call(null,0.95,cljs.core.deref.call(null,game).call(null,"﷐'speed")));

if(cljs.core.truth_(cljs.core._GT_.call(null,cljs.core.rand.call(null),neg_probability__1975)))
{return physicsGame.create_element.call(null,game);
} else
{return null;
}
});
physicsGame.update_speed = (function update_speed(game){
var domspeed__1976 = physicsGame.dom.call(null,"﷐'speedValue");

domspeed__1976.text(cljs.core.deref.call(null,game).call(null,"﷐'speed"));
return domspeed__1976.hide().slideDown();
});
physicsGame.update_score = (function update_score(game){
return physicsGame.dom.call(null,"﷐'scoreValue").text(cljs.core.deref.call(null,game).call(null,"﷐'score"));
});
physicsGame.increment_speed = (function increment_speed(game){
physicsGame.atom_set.call(null,game,"﷐'speed",cljs.core.inc.call(null,cljs.core.deref.call(null,game).call(null,"﷐'speed")));
return physicsGame.update_speed.call(null,game);
});
physicsGame.destroy_elements = (function destroy_elements(game){
var to_destroy__1977 = cljs.core.deref.call(null,game).call(null,"﷐'to-destroy");
var new_score__1978 = cljs.core._PLUS_.call(null,cljs.core.deref.call(null,game).call(null,"﷐'score"),cljs.core.count.call(null,to_destroy__1977));

var G__1979__1980 = cljs.core.seq.call(null,to_destroy__1977);

while(true){
if(cljs.core.truth_(G__1979__1980))
{var b__1981 = cljs.core.first.call(null,G__1979__1980);

cljs.core.deref.call(null,game).call(null,"﷐'world").DestroyBody(b__1981);
{
var G__1982 = cljs.core.next.call(null,G__1979__1980);
G__1979__1980 = G__1982;
continue;
}
} else
{}
break;
}
physicsGame.atom_set.call(null,game,"﷐'to-destroy",cljs.core.Vector.fromArray([]),"﷐'score",new_score__1978);
return physicsGame.update_score.call(null,game);
});
physicsGame.do_tick = (function do_tick(game){
var w__1983 = cljs.core.deref.call(null,game).call(null,"﷐'world");
var missing_ticks__1984 = cljs.core.deref.call(null,game).call(null,"﷐'ticks-to-speed");

if(cljs.core.truth_(cljs.core._EQ_.call(null,1,missing_ticks__1984)))
{physicsGame.atom_set.call(null,game,"﷐'ticks-to-speed",physicsGame.speed_rate);
physicsGame.increment_speed.call(null,game);
} else
{physicsGame.atom_set.call(null,game,"﷐'ticks-to-speed",cljs.core.dec.call(null,missing_ticks__1984));
}
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,game).call(null,"﷐'to-destroy")))))
{physicsGame.destroy_elements.call(null,game);
} else
{}
physicsGame.maybe_create_element.call(null,game);
w__1983.Step(cljs.core._SLASH_.call(null,1,30),10,10);
w__1983.DrawDebugData();
return w__1983.ClearForces();
});
physicsGame.tick = (function tick(game){
if(cljs.core.truth_((function (){var and__3574__auto____1985 = cljs.core.deref.call(null,game).call(null,"﷐'game-over");

if(cljs.core.truth_(and__3574__auto____1985))
{return physicsGame.not_paused_QMARK_.call(null,game);
} else
{return and__3574__auto____1985;
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
var debug_draw__1986 = (new physicsGame.b2DebugDraw());

var G__1987__1988 = debug_draw__1986;

G__1987__1988.SetSprite(cljs.core.deref.call(null,game).call(null,"﷐'canvas").getContext("2d"));
G__1987__1988.SetDrawScale(physicsGame.scale);
G__1987__1988.SetLineThickness(1.0);
G__1987__1988.SetFlags(physicsGame.b2DebugDraw.e_shapeBit);
G__1987__1988;
cljs.core.deref.call(null,game).call(null,"﷐'world").SetDebugDraw(debug_draw__1986);
return goog.global['setInterval'].call(null,(function (){
return physicsGame.tick.call(null,game);
}),cljs.core._SLASH_.call(null,1000,30));
});
physicsGame.add_methods = (function add_methods(game_ref){
return cljs.core.assoc.call(null,game_ref,"﷐'create-circle",physicsGame.create_circle,"﷐'create-square",physicsGame.create_square,"﷐'create-triangle",physicsGame.create_triangle);
});
physicsGame.init = (function init(game){
var n__204__auto____1990 = 5;

var ___1991 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,___1991,n__204__auto____1990)))
{physicsGame.create_element.call(null,game);
{
var G__1992 = cljs.core.inc.call(null,___1991);
___1991 = G__1992;
continue;
}
} else
{}
break;
}
return physicsGame.atom_set.call(null,game,"﷐'to-destroy",cljs.core.Vector.fromArray([]),"﷐'paused",false,"﷐'game-over",false,"﷐'score",0,"﷐'speed",0,"﷐'ticks-to-speed",physicsGame.speed_rate);
});
physicsGame.pre_solve = (function pre_solve(game,contact,manifold){
if(cljs.core.truth_(contact.IsTouching()))
{var data_x__1995 = contact.GetFixtureA().GetBody().GetUserData();
var data_y__1996 = contact.GetFixtureB().GetBody().GetUserData();

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1989_SHARP_){
return cljs.core._EQ_.call(null,p1__1989_SHARP_,"﷐'ceiling");
}),cljs.core.Vector.fromArray([data_x__1995,data_y__1996]))))
{return physicsGame.atom_set.call(null,game,"﷐'game-over",true);
} else
{return null;
}
} else
{return null;
}
});
physicsGame.contact_listener = (function contact_listener(game){
return physicsGame.js_set.call(null,(new goog.global['Object']()),"﷐'PostSolve",physicsGame.empty_fn,"﷐'BeginContact",physicsGame.empty_fn,"﷐'EndContact",physicsGame.empty_fn,"﷐'PreSolve",(function (p1__1993_SHARP_,p2__1994_SHARP_){
return physicsGame.pre_solve.call(null,game,p1__1993_SHARP_,p2__1994_SHARP_);
}));
});
physicsGame.set_contact_listener = (function set_contact_listener(game){
cljs.core.deref.call(null,game).call(null,"﷐'world").SetContactListener(physicsGame.contact_listener.call(null,game));
return game;
});
physicsGame.build_world = (function build_world(){
var gravity__1997 = physicsGame.v.call(null,0,10);
var doSleep__1998 = false;
var world__1999 = (new physicsGame.b2World(gravity__1997,doSleep__1998));

return world__1999;
});
physicsGame.create_game = (function create_game(canvas){
var twiceScale__2000 = cljs.core._STAR_.call(null,2,physicsGame.scale);

return physicsGame.init.call(null,physicsGame.set_contact_listener.call(null,cljs.core.atom.call(null,physicsGame.add_methods.call(null,cljs.core.ObjMap.fromObject(["﷐'center-x","﷐'center-y","﷐'world","﷐'canvas"],{"﷐'center-x":cljs.core._SLASH_.call(null,physicsGame.W,twiceScale__2000),"﷐'center-y":cljs.core._SLASH_.call(null,physicsGame.H,twiceScale__2000),"﷐'world":physicsGame.build_world.call(null),"﷐'canvas":canvas})))));
});
physicsGame.add_to_destroy = (function add_to_destroy(game,body){
return physicsGame.atom_set.call(null,game,"﷐'to-destroy",cljs.core.conj.call(null,cljs.core.deref.call(null,game).call(null,"﷐'to-destroy"),body));
});
physicsGame.static_body_QMARK_ = (function static_body_QMARK_(body){
return cljs.core._EQ_.call(null,body.GetType(),physicsGame.b2Body.b2_staticBody);
});
physicsGame.static_QMARK_ = (function static_QMARK_(fixture){
return physicsGame.static_body_QMARK_.call(null,fixture.GetBody());
});
physicsGame.not_has_point_QMARK_ = (function not_has_point_QMARK_(fixture,vec){
var shape__2001 = fixture.GetShape();
var transform__2002 = fixture.GetBody().GetTransform();

return cljs.core.not.call(null,shape__2001.TestPoint(transform__2002,vec));
});
physicsGame.delete_at = (function delete_at(game,x,y){
var mouse_vec__2003 = physicsGame.v.call(null,x,y);
var aabb__2004 = (new physicsGame.b2AABB());
var delta__2005 = 0.0010;
var callback__2007 = (function (f){
if(cljs.core.truth_((function (){var or__3576__auto____2006 = physicsGame.static_QMARK_.call(null,f);

if(cljs.core.truth_(or__3576__auto____2006))
{return or__3576__auto____2006;
} else
{return physicsGame.not_has_point_QMARK_.call(null,f,mouse_vec__2003);
}
})()))
{return true;
} else
{physicsGame.add_to_destroy.call(null,game,f.GetBody());
return false;
}
});

aabb__2004.lowerBound.Set(cljs.core._.call(null,x,delta__2005),cljs.core._.call(null,y,delta__2005));
aabb__2004.upperBound.Set(cljs.core._PLUS_.call(null,x,delta__2005),cljs.core._PLUS_.call(null,y,delta__2005));
return cljs.core.deref.call(null,game).call(null,"﷐'world").QueryAABB(callback__2007,aabb__2004);
});
physicsGame.on_click = (function on_click(game,x,y){
if(cljs.core.truth_(physicsGame.not_paused_QMARK_.call(null,game)))
{return physicsGame.delete_at.call(null,game,cljs.core._SLASH_.call(null,x,physicsGame.scale),cljs.core._SLASH_.call(null,y,physicsGame.scale));
} else
{return null;
}
});
physicsGame.update_pause_text = (function update_pause_text(game){
return physicsGame.dom.call(null,"﷐'pause").text((cljs.core.truth_(cljs.core.deref.call(null,game).call(null,"﷐'paused"))?"Unpause":"Pause"));
});
physicsGame.toggle_pause = (function toggle_pause(game){
if(cljs.core.truth_("﷐'game-over".call(null,cljs.core.deref.call(null,game))))
{return null;
} else
{physicsGame.set_paused.call(null,game,physicsGame.not_paused_QMARK_.call(null,game));
return physicsGame.update_pause_text.call(null,game);
}
});
physicsGame.iter_each_body = (function iter_each_body(body,func){
if(cljs.core.truth_(body))
{func.call(null,body);
return iter_each_body.call(null,body.GetNext(),func);
} else
{return null;
}
});
physicsGame.each_body = (function each_body(game,func){
return physicsGame.iter_each_body.call(null,cljs.core.deref.call(null,game).call(null,"﷐'world").GetBodyList(),func);
});
physicsGame.cleanup_world = (function cleanup_world(game){
return physicsGame.each_body.call(null,game,(function (p1__2008_SHARP_){
if(cljs.core.truth_(physicsGame.static_body_QMARK_.call(null,p1__2008_SHARP_)))
{return null;
} else
{return cljs.core.deref.call(null,game).call(null,"﷐'world").DestroyBody(p1__2008_SHARP_);
}
}));
});
physicsGame.restart = (function restart(game){
physicsGame.cleanup_world.call(null,game);
physicsGame.init.call(null,game);
physicsGame.dom.call(null,"﷐'gameOver").hide();
physicsGame.update_score.call(null,game);
physicsGame.update_speed.call(null,game);
return physicsGame.update_pause_text.call(null,game);
});
physicsGame.init_web_app = (function init_web_app(){
var game__2009 = physicsGame.create_game.call(null,physicsGame.get_canvas.call(null));

physicsGame.dom.call(null,"﷐'pause").click((function (){
return physicsGame.toggle_pause.call(null,game__2009);
}));
physicsGame.dom.call(null,"﷐'restart").click((function (){
return physicsGame.restart.call(null,game__2009);
}));
physicsGame.dom.call(null,"﷐'canvas").mousedown((function (e){
var o__2010 = physicsGame.dom.call(null,"﷐'canvas").offset();

physicsGame.on_click.call(null,game__2009,cljs.core._.call(null,e.pageX,o__2010.left),cljs.core._.call(null,e.pageY,o__2010.top));
return false;
}));
physicsGame.build_walls.call(null,game__2009);
return physicsGame.animate_world.call(null,game__2009);
});
physicsGame.jquery.call(null,physicsGame.init_web_app);
