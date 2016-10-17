class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const $squares = $('li');

    let enabled = true;

    $squares.on("click", event => {
      if (enabled) {
        const $square = $(event.currentTarget);
        this.makeMove($square);
        if (this.game.isOver()) {
          let $gameOver = $("<div>").addClass("message");
          if (this.game.winner()) {
            let winner = this.game.winner();
            $(`li`).addClass("loser");
            $(`li:contains(${winner})`).removeClass("loser").addClass("winner");
            $gameOver.append(`${winner} has won!`);
          } else {
            $(`li`).addClass("loser");
            $gameOver.append('NO ONE WINS!');
          }
          $('figure').after($gameOver);
          enabled = false;
        } else {

        }
      } else {

      }
    });

  }

  makeMove($square) {
    let text = this.game.currentPlayer;
    let pos = JSON.parse("["+$square.data('pos')+"]");
    try {
      this.game.playMove(pos);
      $square.addClass('clicked');
      $square.text(text);
    }
    catch(MoveError) {
      alert(MoveError.msg);
    }
  }

  setupBoard() {
    for(let i = 0; i < 3; i ++) {
      let $ul = $('<ul>').addClass("row");
      for (var j = 0; j < 3; j++) {
        let $square = $('<li>').addClass("square").attr("data-pos", [i, j]);
        $ul.append($square);

        $square.hover( ent => {
          const $square = $(ent.currentTarget);
          $square.addClass("hovered");
        }, out => {
          const $square = $(out.currentTarget);
          $square.removeClass("hovered");
        });
      }
      this.$el.append($ul);
    }
  }
}

module.exports = View;
