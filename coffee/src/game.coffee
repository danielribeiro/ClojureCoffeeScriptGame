global = window
b2Vec2 = Box2D.Common.Math.b2Vec2
b2AABB = Box2D.Collision.b2AABB
{b2BodyDef, b2Body, b2FixtureDef, b2Fixture, b2World, b2DebugDraw} = Box2D.Dynamics
{b2PolygonShape, b2CircleShape} = Box2D.Collision.Shapes

getCanvas = ->
    c = $('#canvas')
    global.W = c.width()
    global.H = c.height()
    return c[0]

v = (x, y) -> new b2Vec2(x, y)

randomInt = (a) -> Math.floor Math.random() * a

createFixture = (shape) ->
    f = new b2FixtureDef
    f.density = 3.0
    f.friction = .3
    f.restitution = .9
    f.shape = shape if shape?
    return f

createBody = (x, y) ->
    b = new b2BodyDef
    b.position.Set x, y
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
    speedRate: 300
    objectList: ['Circle', 'Square', 'Triangle']

    constructor: (@canvas) ->
        @centerX = global.W / (2 * @scale)
        @centerY = global.H / (2 * @scale)
        @world = null
        @buildWorld()
        @init()

    init: ->
        for i in [1..5]
            @createElement()
        @toDestroy = []
        @paused = false
        @gameOver = false
        @score = 0
        @speed = 0
        @ticksToSpeed = @speedRate
        return

    restart: ->
        @cleanUpWorld()
        @init()
        $('#gameOver').hide()
        @_updateScore()
        @_updateSpeed()
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

    incrementSpeed: ->
        @speed++
        @_updateSpeed()

    _updateScore: -> $('#scoreValue').text(@score)
    _updateSpeed: -> $('#speedValue').text(@speed).hide().slideDown()

    destroyElements: ->
        for b in @toDestroy
            data = b.GetUserData()
            @incrementScore()
            @world.DestroyBody b
        @toDestroy = []

    animateWorld: ->
        debugDraw = new b2DebugDraw()
        debugDraw.SetSprite @canvas.getContext "2d"
        debugDraw.SetDrawScale @scale
        debugDraw.SetLineThickness 1.0
        debugDraw.SetFlags b2DebugDraw.e_shapeBit
        @world.SetDebugDraw(debugDraw)
        setInterval((=> @tick()), 1000 / 30)

    tick: ->
        if @gameOver and not @paused
            @paused = true
            $('#gameOver').fadeIn()
        return if @paused
        @ticksToSpeed--
        if @ticksToSpeed == 0
            @ticksToSpeed = @speedRate
            @incrementSpeed()
        @destroyElements()
        @maybeCreateElement()
        @world.Step(1 / 30, 10, 10)
        @world.DrawDebugData()
        @world.ClearForces()

    maybeCreateElement: ->
        negProbability = 0.97 * Math.pow(0.95, @speed)
        return unless Math.random() > negProbability
        @createElement()

    createElement: ->
        randomY = (0.2 + 0.4 * Math.random())*  H / @scale
        randomX = (Math.random() * (W - 50) + 25) / @scale
        type = @objectList[randomInt(@objectList.length)]
        @["create#{type}"] randomX, randomY, Math.random() + 1

    randomBody: (x, y) ->
        b = createBody x, y
        b.angle = Math.random() * 360
        vx = Math.random() * 10 - 5
        b.linearVelocity = v vx, 0
        b.angularVelocity = Math.random() * 4 - 2
        return b

    createTriangle: (x, y, size) ->
        fixDef = createFixture(new b2PolygonShape())
        vertices = [v(-size, 0), v(size, 0), v(0, Math.sqrt(3) * size)]
        fixDef.shape.SetAsArray vertices
        bodyDef = @randomBody x, y
        @create bodyDef, fixDef

    createSquare: (x, y, size) ->
        fixDef = createFixture new b2PolygonShape()
        bodyDef = @randomBody x, y
        fixDef.shape.SetAsBox size, size
        @create bodyDef, fixDef

    createCircle: (x, y, size) ->
        f = createFixture new b2CircleShape(size)
        b = @randomBody x, y
        @create b, f

    buildWorld: ->
        gravity = v(0, 10)
        doSleep = off
        @world = new b2World gravity, doSleep
        @buildWalls()
        @world.SetContactListener @
        return

    buildWalls: ->
        w = @centerX
        h = @centerY
        dim = 200 / @scale
        @wall [w, dim], [w, -dim], 'ceiling'
        @wall [w, dim], [w, 2 * h + dim]
        @wall [dim, h], [-dim, h]
        @wall [dim, h], [2 * w + dim, h]

    create: (body, fixture) ->
        body = @world.CreateBody(body)
        body.CreateFixture(fixture)
        return body

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
        return if @paused
        @deleteAt x / @scale, y / @scale


    togglePause: ->
        return if @gameOver
        @paused = not @paused
        @_updatePauseText()

    _updatePauseText: -> $('#pause').text(if @paused then "Unpause" else "Pause")

init_web_app = ->
    game = new Game getCanvas()
    $('#pause').click -> game.togglePause()
    $('#restart').click -> game.restart()
    $('#canvas').mousedown (e) ->
        o = $(@).offset()
        game.onClick(e.pageX - o.left, e.pageY - o.top)
        return false
    puts game.world
    game.animateWorld()
