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
game.p = goog.global['puts'];
game.scale = 30;
game.twiceScale = cljs.core._STAR_.call(null,2,game.scale);
game.get_canvas = (function get_canvas(){
var canvas__1934 = game.dom.call(null,"﷐'canvas");

game.W = canvas__1934.width();
game.H = canvas__1934.height();
return canvas__1934.get(0);
});
game.create_game = (function create_game(canvas){
var gravity__1935 = game.v.call(null,0,10);
var doSleep__1936 = false;

return cljs.core.ObjMap.fromObject(["﷐'center-x","﷐'center-y","﷐'world","﷐'canvas"],{"﷐'center-x":cljs.core._SLASH_.call(null,game.W,game.twiceScale),"﷐'center-y":cljs.core._SLASH_.call(null,game.H,game.twiceScale),"﷐'world":(new game.b2World(gravity__1935,doSleep__1936)),"﷐'canvas":canvas});
});
game.init_web_app = (function init_web_app(){
return game.p.call(null,game.create_game.call(null,game.get_canvas.call(null)));
});
game.jquery.call(null,game.init_web_app);
