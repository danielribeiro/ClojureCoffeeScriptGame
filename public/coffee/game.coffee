global = window
b2Vec2 = Box2D.Common.Math.b2Vec2
b2AABB = Box2D.Collision.b2AABB
{b2BodyDef, b2Body, b2FixtureDef, b2Fixture, b2World, b2DebugDraw} = Box2D.Dynamics
{b2MassData, b2PolygonShape, b2CircleShape} = Box2D.Collision.Shapes

getCanvas = ->
    c = $('#canvas')
    global.W = c.width()
    global.H = c.height()
    return c[0]

v = (x, y) -> new b2Vec2(x, y)

createFixture = (shape) ->
    f = new b2FixtureDef
    f.density = 3.0
    f.friction = .3
    f.restitution = 1.1 # FIXME: do not use this, use .7
    f.shape = shape if shape?
    f.filter.groupIndex = 1
    return f

createBody = (x, y) ->
    b = new b2BodyDef
    b.position.Set x, y if x? and y?
    b.type = b2Body.b2_dynamicBody
    return b

ContactListenerHandler =
    PreSolve: (contact, manifold) ->
        return unless contact.IsTouching()
        x = contact.GetFixtureA().GetBody()
        y = contact.GetFixtureB().GetBody()
        if "ceiling" in [x.GetUserData(), y.GetUserData()]
            @gameOver = true

    PostSolve: -> return
    BeginContact: -> return
    EndContact: -> return

class Game
    mixin @, ContactListenerHandler
    scale: 30.0

    constructor: (@canvas) ->
        @centerX = global.W / (2 * @scale)
        @centerY = global.H / (2 * @scale)
        @world = null
        @init()

    init: ->
        @toDestroy = []
        @paused = false
        @gameOver = false
        @score = 0

    restart: ->
        @init()
        @cleanUpWorld()
        @_updateScore()
        @_updatePauseText()

    cleanUpWorld: ->
        @each (b) =>
            @world.DestroyBody b if b.GetType() isnt b2Body.b2_staticBody

    each: (f) ->
        body = @world.GetBodyList()
        while body
            f body
            body = body.GetNext()
        return


    incrementScore: ->
        @score++
        @_updateScore()

    _updateScore: -> $('#scoreValue').text(@score)

    destroyElements: ->
        for b in @toDestroy
            data = b.GetUserData()
            @incrementScore()
            @world.DestroyBody b
        @toDestroy = []

    animateWorld: ->
        @buildWorld()
        debugDraw = new b2DebugDraw()
        debugDraw.SetSprite(@canvas.getContext("2d"))
        debugDraw.SetDrawScale @scale
        debugDraw.SetFillAlpha(.7)
        debugDraw.SetLineThickness(1.0)
        debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit)
        @world.SetDebugDraw(debugDraw)
        setInterval((=> @tick()), 1000 / 30)

    tick: ->
        if @gameOver and not @paused
            @paused = true
            alert "Game is over..."
        return if @paused
        @destroyElements()
        @incrementScore() # FIXME: use sensible defaults
        @maybeCreateElement()
        @world.Step(1 / 30, 10, 10)
        @world.DrawDebugData()
        @world.ClearForces()

    maybeCreateElement: ->
        return unless Math.random() <= .05
        randomY = (0.2 + 0.4 * Math.random())*  H / @scale
        @createCircle(Math.random() * W / @scale, randomY)

    createCircle: (x, y) ->
        f = createFixture(new b2CircleShape(0.5))
        b = createBody(x, y)
        @create b, f

    buildWorld: ->
        gravity = v(0, 10)
        doSleep = off
        @world = new b2World gravity, doSleep
        @buildWalls()
        @boxAt [2, 2], [3, 3]
        @boxAt [.5, .5], [6, 6]
        @triangleAt [15, 5]
        @world.SetContactListener @
        return

    buildWalls: ->
        w = W / (2 * @scale)
        h = H / (2 * @scale)
        dim = 200 / @scale
        @wall [w, dim], [w, -dim], 'ceiling'
        @wall [w, dim], [w, 2 * h + dim]
        @wall [dim, h], [-dim, h]
        @wall [dim, h], [2 * w + dim, h]

    create: (body, fixture) ->
        body = @world.CreateBody(body)
        body.CreateFixture(fixture)
        return body

    triangleAt: (position) ->
        fixDef = createFixture(new b2PolygonShape())
        fixDef.shape.SetAsArray([v(-1, 0), v(1, 0), v(0, 2.0)])
        bodyDef = createBody position...
        @create bodyDef, fixDef


    boxAt: (dimensions, position) ->
        fixDef = createFixture(new b2PolygonShape())
        bodyDef = createBody(position...)
        fixDef.shape.SetAsBox dimensions...
        @create bodyDef, fixDef


    wall: (dimensions, position, userData) ->
        fixDef = createFixture(new b2PolygonShape())
        fixDef.shape.SetAsBox dimensions...
        bodyDef = createBody(position...)
        bodyDef.userData = userData
        bodyDef.type = b2Body.b2_staticBody
        @create bodyDef, fixDef


    getBodyAt: (x, y)->
        mousePVec = v(x, y)
        aabb = new b2AABB()
        aabb.lowerBound.Set(x - 0.001, y - 0.001)
        aabb.upperBound.Set(x + 0.001, y + 0.001)
        selectedBody = null
        callback = (f) ->
            return true if f.GetBody().GetType() == b2Body.b2_staticBody
            return true unless f.GetShape().TestPoint(f.GetBody().GetTransform(), mousePVec)
            selectedBody = f.GetBody()
            return false
        @world.QueryAABB callback, aabb
        return selectedBody


    deleteAt: (x, y) ->
        body = @getBodyAt(x, y)
        return unless body?
        @toDestroy.push body

    onClick: (x, y) ->
        @deleteAt x / @scale, y / @scale


    togglePause: ->
        @paused = not @paused
        @_updatePauseText()

    _updatePauseText: -> $('#pause').text(if @paused then "Unpause" else "Pause")



init_web_app = ->
    canvas = getCanvas()
    game = new Game(canvas)
    $('#pause').click -> game.togglePause()
    $('#restart').click -> game.restart()
    $('#canvas').mousedown (e) ->
        o = $(@).offset()
        game.onClick(e.pageX - o.left, e.pageY - o.top)
        return false
    game.animateWorld()

