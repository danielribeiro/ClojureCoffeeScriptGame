goog.provide('game');
goog.require('cljs.core');
game.jquery = $;
game.jquery.call(null,(function (){
return game.jquery.call(null,"div.meat").html("This is a test.").append("<div>Look here!</div>");
}));
