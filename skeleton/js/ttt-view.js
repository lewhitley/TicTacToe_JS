class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    for(let i = 0; i < 3; i ++) {
      let $ul = $('<ul>').addClass("row");
      for (var j = 0; j < 3; j++) {
        let $square = $('<li>').addClass("square");
        $ul.append($square);
        $square.mouseenter( (ent) => {
          const $square = $(ent.currentTarget);
          $square.css("background-color", "yellow");
        }).mouseleave( (out) => {
          const $square = $(out.currentTarget);
          $square.css("background-color", "gray");
        });
      }
      $("h1").after($ul);
    }
  }
}

module.exports = View;
