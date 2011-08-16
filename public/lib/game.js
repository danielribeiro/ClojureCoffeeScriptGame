var Game, b2AABB, b2Body, b2BodyDef, b2CircleShape, b2DebugDraw, b2Fixture, b2FixtureDef, b2MassData, b2PolygonShape, b2Vec2, b2World, createBody, createFixture, getCanvas, global, init_web_app, v, _ref, _ref2;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
global = window;
b2Vec2 = Box2D.Common.Math.b2Vec2;
b2AABB = Box2D.Collision.b2AABB;
_ref = Box2D.Dynamics, b2BodyDef = _ref.b2BodyDef, b2Body = _ref.b2Body, b2FixtureDef = _ref.b2FixtureDef, b2Fixture = _ref.b2Fixture, b2World = _ref.b2World, b2DebugDraw = _ref.b2DebugDraw;
_ref2 = Box2D.Collision.Shapes, b2MassData = _ref2.b2MassData, b2PolygonShape = _ref2.b2PolygonShape, b2CircleShape = _ref2.b2CircleShape;
getCanvas = function() {
  var c;
  c = $('#canvas');
  global.W = c.width();
  global.H = c.height();
  return c[0];
};
v = function(x, y) {
  return new b2Vec2(x, y);
};
createFixture = function(shape) {
  var f;
  f = new b2FixtureDef;
  f.density = 3.0;
  f.friction = .3;
  f.restitution = .7;
  if (shape != null) {
    f.shape = shape;
  }
  f.filter.groupIndex = 1;
  return f;
};
createBody = function(x, y) {
  var b;
  b = new b2BodyDef;
  b.linearDamping = 0.05;
  b.angularDamping = 0.1;
  if ((x != null) && (y != null)) {
    b.position.Set(x, y);
  }
  b.type = b2Body.b2_dynamicBody;
  return b;
};
Game = (function() {
  Game.prototype.scale = 30.0;
  function Game(canvas) {
    this.canvas = canvas;
    this.centerX = global.W / (2 * this.scale);
    this.centerY = global.H / (2 * this.scale);
    this.toDestroy = [];
    this.world = null;
  }
  Game.prototype.destroyElements = function() {
    var b, data, _i, _len, _ref3;
    _ref3 = this.toDestroy;
    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
      b = _ref3[_i];
      data = b.GetUserData();
      this.world.DestroyBody(b);
    }
    return this.toDestroy = [];
  };
  Game.prototype.animateWorld = function() {
    var debugDraw;
    this.buildWorld();
    debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(this.canvas.getContext("2d"));
    debugDraw.SetDrawScale(this.scale);
    debugDraw.SetFillAlpha(.7);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    this.world.SetDebugDraw(debugDraw);
    return setInterval((__bind(function() {
      return this.tick();
    }, this)), 1000 / 30);
  };
  Game.prototype.tick = function() {
    this.destroyElements();
    this.maybeCreateElement();
    this.world.Step(1 / 30, 10, 10);
    this.world.DrawDebugData();
    return this.world.ClearForces();
  };
  Game.prototype.maybeCreateElement = function() {
    var randomY;
    if (!(Math.random() <= .05)) {
      return;
    }
    randomY = (0.2 + 0.4 * Math.random()) * H / this.scale;
    return this.createCircle(Math.random() * W / this.scale, randomY);
  };
  Game.prototype.createCircle = function(x, y) {
    var b, f;
    f = createFixture(new b2CircleShape(0.5));
    b = createBody(x, y);
    return this.create(b, f);
  };
  Game.prototype.buildWorld = function() {
    var doSleep, gravity;
    gravity = v(0, 10);
    doSleep = false;
    this.world = new b2World(gravity, doSleep);
    this.buildWalls();
    this.boxAt([2, 2], [3, 3]);
    this.boxAt([.5, .5], [6, 6]);
    this.triangleAt([15, 5]);
  };
  Game.prototype.buildWalls = function() {
    var dim, h, w;
    w = W / (2 * this.scale);
    h = H / (2 * this.scale);
    dim = 200 / this.scale;
    this.wall([w, dim], [w, -dim]);
    this.wall([w, dim], [w, 2 * h + dim]);
    this.wall([dim, h], [-dim, h]);
    return this.wall([dim, h], [2 * w + dim, h]);
  };
  Game.prototype.create = function(body, fixture) {
    body = this.world.CreateBody(body);
    body.CreateFixture(fixture);
    return body;
  };
  Game.prototype.triangleAt = function(position) {
    var bodyDef, fixDef;
    fixDef = createFixture(new b2PolygonShape());
    fixDef.shape.SetAsArray([v(-1, 0), v(1, 0), v(0, 2.0)]);
    bodyDef = createBody.apply(null, position);
    return this.create(bodyDef, fixDef);
  };
  Game.prototype.boxAt = function(dimensions, position) {
    var bodyDef, fixDef, _ref3;
    fixDef = createFixture(new b2PolygonShape());
    bodyDef = createBody.apply(null, position);
    (_ref3 = fixDef.shape).SetAsBox.apply(_ref3, dimensions);
    return this.create(bodyDef, fixDef);
  };
  Game.prototype.wall = function(dimensions, position) {
    var bodyDef, fixDef, _ref3;
    fixDef = createFixture(new b2PolygonShape());
    (_ref3 = fixDef.shape).SetAsBox.apply(_ref3, dimensions);
    bodyDef = createBody.apply(null, position);
    bodyDef.type = b2Body.b2_staticBody;
    return this.create(bodyDef, fixDef);
  };
  Game.prototype.getBodyAt = function(x, y) {
    var aabb, callback, mousePVec, selectedBody;
    mousePVec = v(x, y);
    aabb = new b2AABB();
    aabb.lowerBound.Set(x - 0.001, y - 0.001);
    aabb.upperBound.Set(x + 0.001, y + 0.001);
    selectedBody = null;
    callback = function(f) {
      if (f.GetBody().GetType() === b2Body.b2_staticBody) {
        return true;
      }
      if (!f.GetShape().TestPoint(f.GetBody().GetTransform(), mousePVec)) {
        return true;
      }
      selectedBody = f.GetBody();
      return false;
    };
    this.world.QueryAABB(callback, aabb);
    return selectedBody;
  };
  Game.prototype.deleteAt = function(x, y) {
    var body;
    body = this.getBodyAt(x, y);
    if (body == null) {
      return;
    }
    return this.toDestroy.push(body);
  };
  Game.prototype.onClick = function(x, y) {
    return this.deleteAt(x / this.scale, y / this.scale);
  };
  return Game;
})();
init_web_app = function() {
  var canvas, game;
  canvas = getCanvas();
  game = new Game(canvas);
  $('#canvas').click(function(e) {
    var o;
    o = $(this).offset();
    return game.onClick(e.pageX - o.left, e.pageY - o.top);
  });
  return game.animateWorld();
};