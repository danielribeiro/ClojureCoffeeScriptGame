var ContactListenerHandler, Game, b2AABB, b2Body, b2BodyDef, b2CircleShape, b2DebugDraw, b2Fixture, b2FixtureDef, b2PolygonShape, b2Vec2, b2World, createBody, createFixture, getCanvas, global, init_web_app, randomInt, v, _ref, _ref2;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
global = window;
b2Vec2 = Box2D.Common.Math.b2Vec2;
b2AABB = Box2D.Collision.b2AABB;
_ref = Box2D.Dynamics, b2BodyDef = _ref.b2BodyDef, b2Body = _ref.b2Body, b2FixtureDef = _ref.b2FixtureDef, b2Fixture = _ref.b2Fixture, b2World = _ref.b2World, b2DebugDraw = _ref.b2DebugDraw;
_ref2 = Box2D.Collision.Shapes, b2PolygonShape = _ref2.b2PolygonShape, b2CircleShape = _ref2.b2CircleShape;
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
randomInt = function(a) {
  return Math.floor(Math.random() * a);
};
createFixture = function(shape) {
  var f;
  f = new b2FixtureDef;
  f.density = 3.0;
  f.friction = .3;
  f.restitution = .9;
  if (shape != null) {
    f.shape = shape;
  }
  return f;
};
createBody = function(x, y) {
  var b;
  b = new b2BodyDef;
  b.position.Set(x, y);
  b.type = b2Body.b2_dynamicBody;
  return b;
};
ContactListenerHandler = {
  PreSolve: function(contact, manifold) {
    var x, y;
    if (!contact.IsTouching()) {
      return;
    }
    x = contact.GetFixtureA().GetBody();
    y = contact.GetFixtureB().GetBody();
    if ("ceiling" === x.GetUserData() || "ceiling" === y.GetUserData()) {
      return this.gameOver = true;
    }
  },
  PostSolve: function() {},
  BeginContact: function() {},
  EndContact: function() {}
};
Game = (function() {
  mixin(Game, ContactListenerHandler);
  Game.prototype.scale = 30.0;
  Game.prototype.speedRate = 300;
  Game.prototype.objectList = ['Circle', 'Square', 'Triangle'];
  function Game(canvas) {
    this.canvas = canvas;
    this.centerX = global.W / (2 * this.scale);
    this.centerY = global.H / (2 * this.scale);
    this.world = null;
    this.buildWorld();
    this.init();
  }
  Game.prototype.init = function() {
    var i;
    for (i = 1; i <= 5; i++) {
      this.createElement();
    }
    this.toDestroy = [];
    this.paused = false;
    this.gameOver = false;
    this.score = 0;
    this.speed = 0;
    this.ticksToSpeed = this.speedRate;
  };
  Game.prototype.restart = function() {
    this.cleanUpWorld();
    this.init();
    $('#gameOver').hide();
    this._updateScore();
    this._updateSpeed();
    return this._updatePauseText();
  };
  Game.prototype.cleanUpWorld = function() {
    return this.each(__bind(function(b) {
      if (b.GetType() !== b2Body.b2_staticBody) {
        return this.world.DestroyBody(b);
      }
    }, this));
  };
  Game.prototype.each = function(f) {
    var body;
    body = this.world.GetBodyList();
    while (body) {
      f(body);
      body = body.GetNext();
    }
  };
  Game.prototype.incrementSpeed = function() {
    this.speed++;
    return this._updateSpeed();
  };
  Game.prototype._updateScore = function() {
    return $('#scoreValue').text(this.score);
  };
  Game.prototype._updateSpeed = function() {
    return $('#speedValue').text(this.speed).hide().slideDown();
  };
  Game.prototype.destroyElements = function() {
    var b, data, _i, _len, _ref3;
    _ref3 = this.toDestroy;
    for (_i = 0, _len = _ref3.length; _i < _len; _i++) {
      b = _ref3[_i];
      data = b.GetUserData();
      this.world.DestroyBody(b);
    }
    this.score += this.toDestroy.length;
    this._updateScore();
    return this.toDestroy = [];
  };
  Game.prototype.animateWorld = function() {
    var debugDraw;
    debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(this.canvas.getContext("2d"));
    debugDraw.SetDrawScale(this.scale);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit);
    this.world.SetDebugDraw(debugDraw);
    return setInterval((__bind(function() {
      return this.tick();
    }, this)), 1000 / 30);
  };
  Game.prototype.tick = function() {
    if (this.gameOver && !this.paused) {
      this.paused = true;
      $('#gameOver').fadeIn();
    }
    if (this.paused) {
      return;
    }
    this.ticksToSpeed--;
    if (this.ticksToSpeed === 0) {
      this.ticksToSpeed = this.speedRate;
      this.incrementSpeed();
    }
    this.destroyElements();
    this.maybeCreateElement();
    this.world.Step(1 / 30, 10, 10);
    this.world.DrawDebugData();
    return this.world.ClearForces();
  };
  Game.prototype.maybeCreateElement = function() {
    var negProbability;
    negProbability = 0.97 * Math.pow(0.95, this.speed);
    if (!(Math.random() > negProbability)) {
      return;
    }
    return this.createElement();
  };
  Game.prototype.createElement = function() {
    var randomX, randomY, type;
    randomY = (0.2 + 0.4 * Math.random()) * H / this.scale;
    randomX = (Math.random() * (W - 50) + 25) / this.scale;
    type = this.objectList[randomInt(this.objectList.length)];
    return this["create" + type](randomX, randomY, Math.random() + 1);
  };
  Game.prototype.randomBody = function(x, y) {
    var b, vx;
    b = createBody(x, y);
    b.angle = Math.random() * 360;
    vx = Math.random() * 10 - 5;
    b.linearVelocity = v(vx, 0);
    b.angularVelocity = Math.random() * 4 - 2;
    return b;
  };
  Game.prototype.createTriangle = function(x, y, size) {
    var bodyDef, fixDef, vertices;
    fixDef = createFixture(new b2PolygonShape());
    vertices = [v(-size, 0), v(size, 0), v(0, Math.sqrt(3) * size)];
    fixDef.shape.SetAsArray(vertices);
    bodyDef = this.randomBody(x, y);
    return this.create(bodyDef, fixDef);
  };
  Game.prototype.createSquare = function(x, y, size) {
    var bodyDef, fixDef;
    fixDef = createFixture(new b2PolygonShape());
    bodyDef = this.randomBody(x, y);
    fixDef.shape.SetAsBox(size, size);
    return this.create(bodyDef, fixDef);
  };
  Game.prototype.createCircle = function(x, y, size) {
    var b, f;
    f = createFixture(new b2CircleShape(size));
    b = this.randomBody(x, y);
    return this.create(b, f);
  };
  Game.prototype.buildWorld = function() {
    var doSleep, gravity;
    gravity = v(0, 10);
    doSleep = false;
    this.world = new b2World(gravity, doSleep);
    this.buildWalls();
    this.world.SetContactListener(this);
  };
  Game.prototype.buildWalls = function() {
    var dim, h, w;
    w = this.centerX;
    h = this.centerY;
    dim = 200 / this.scale;
    this.wall([w, dim], [w, -dim], 'ceiling');
    this.wall([w, dim], [w, 2 * h + dim]);
    this.wall([dim, h], [-dim, h]);
    return this.wall([dim, h], [2 * w + dim, h]);
  };
  Game.prototype.create = function(body, fixture) {
    body = this.world.CreateBody(body);
    body.CreateFixture(fixture);
    return body;
  };
  Game.prototype.wall = function(dimensions, position, userData) {
    var bodyDef, fixDef, _ref3;
    fixDef = createFixture(new b2PolygonShape());
    (_ref3 = fixDef.shape).SetAsBox.apply(_ref3, dimensions);
    bodyDef = createBody.apply(null, position);
    bodyDef.userData = userData;
    bodyDef.type = b2Body.b2_staticBody;
    return this.create(bodyDef, fixDef);
  };
  Game.prototype.getBodyAt = function(x, y) {
    var aabb, callback, delta, mousePVec, selectedBody;
    mousePVec = v(x, y);
    aabb = new b2AABB();
    delta = 0.001;
    aabb.lowerBound.Set(x - delta, y - delta);
    aabb.upperBound.Set(x + delta, y + delta);
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
    if (this.paused) {
      return;
    }
    return this.deleteAt(x / this.scale, y / this.scale);
  };
  Game.prototype.togglePause = function() {
    if (this.gameOver) {
      return;
    }
    this.paused = !this.paused;
    return this._updatePauseText();
  };
  Game.prototype._updatePauseText = function() {
    return $('#pause').text(this.paused ? "Unpause" : "Pause");
  };
  return Game;
})();
init_web_app = function() {
  var game;
  game = new Game(getCanvas());
  $('#pause').click(function() {
    return game.togglePause();
  });
  $('#restart').click(function() {
    return game.restart();
  });
  $('#canvas').mousedown(function(e) {
    var o;
    o = $(this).offset();
    game.onClick(e.pageX - o.left, e.pageY - o.top);
    return false;
  });
  puts(game.world);
  return game.animateWorld();
};