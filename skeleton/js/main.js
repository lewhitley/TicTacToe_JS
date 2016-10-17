const View = require("./ttt-view")// require appropriate file
const Game = require("./game")// require appropriate file

const game = new Game();

$( () => {
  // Your code here
  const view = new View(game, $("ttt"));
});
