class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const $squares = $('li');

    $squares.on("click", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    });
  }

  makeMove($square) {
    $square.text(this.game.currentPlayer);
    let pos = JSON.parse("["+$square.data('pos')+"]");
    this.game.playMove(pos);
  }

  setupBoard() {
    for(let i = 0; i < 3; i ++) {
      let $ul = $('<ul>').addClass("row");
      for (var j = 0; j < 3; j++) {
        let $square = $('<li>').addClass("square").attr("data-pos", [i, j]);
        $ul.append($square);
        $square.hover( ent => {
          const $square = $(ent.currentTarget);
          $square.css("background-color", "yellow");
        }, out => {
          const $square = $(out.currentTarget);
          $square.css("background-color", "gray");
        });
      }
      $("h1").after($ul);
    }
  }
}

module.exports = View;
