Overview
==============

Simple click and kill game implemented in both [ClojureScript](https://github.com/clojure/clojurescript/wiki) and [Coffeescript](http://jashkenas.github.com/coffee-script/).

Demo can be played [here](http://danielribeiro.github.com/ClojureCoffeeScriptGame/)

![](http://metaphysicaldeveloper.files.wordpress.com/2011/08/game.png?w=455&h=396)


CoffeeScript Version
----
It can be found on coffee folder, and it requires CoffeeScript 1.12. Compiling all coffee files can be done with:

       $ coffee -wcbo jslib/ src/

Or you can run it with [compile.sh](https://github.com/danielribeiro/ClojureCoffeeScriptGame/blob/master/coffee/compile.sh).

The included [coffee/physicsGame.html](https://github.com/danielribeiro/ClojureCoffeeScriptGame/blob/master/coffee/physicsGame.html) can be run directly, and imports everything using relative paths.


ClojureScript Version
----
It is located on clojure folder, and it requires the latest version of ClojureScript (it is still unversioned, so using the one from [2011-08-11](https://github.com/clojure/clojurescript/commits/master) should be fine). Compiling all coffee files can be done with:

      $ cljsc game.clj '{:pretty-print true}' > game.js

This script is included in [compile.sh](https://github.com/danielribeiro/ClojureCoffeeScriptGame/blob/master/clojure/compile.sh). Unlike CoffeeScript's version, this won't watch the clojure files for changes.

The included [clojure/physicsGame.html](https://github.com/danielribeiro/ClojureCoffeeScriptGame/blob/master/clojure/physicsGame.html) can be opened directly, and imports everything using relative paths. Unlike CoffeeScript version, you need to compile it before running. This is because ClojureScript's out folder is filled with files whose names are randomly changed after each compilation, which make them quite messy to track using a SCM.

*Note:* does not work on latest version of ClojureScript (mostly due to the change in access to variables), as this was writen a few weeks after ClojureScript was released.

Meta
----

Created by [Daniel Ribeiro](http://metaphysicaldeveloper.wordpress.com/about-me)

Released under the MIT License: http://www.opensource.org/licenses/mit-license.php

http://github.com/danielribeiro/ClojureCoffeeScriptGame
