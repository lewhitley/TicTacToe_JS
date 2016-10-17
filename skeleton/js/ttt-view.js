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
      let $ul = $(`<ul></ul>`).addClass("row");
      for (var j = 0; j < 3; j++) {
        $ul.append($(`<li>c${j}</li>`).addClass("square"));
      }
      $("h1").after($ul);
    }
  }
}

module.exports = View;
