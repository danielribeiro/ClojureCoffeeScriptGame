goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.init_web_app = (function init_web_app(){
return game.jquery.call(null,"div.meat").html("This is a test.").append("<div>Look here!</div>");
});
game.jquery.call(null,game.init_web_app);
