var game;
var config;
var model;
var emitter;
var G;
var controller;
window.onload = function () {
  config = {
    width: 3000,
    height: 1950,
    backgroundColor: 0x0f1c40,
    scene: [MainScreen, Leaderboard, playgame, Gameover, Collaborators],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: true,
      },
    },
  };
  G = new Constants();
  model = new Model();
  var game = new Phaser.Game(config);
};

var gameSettings = {
  playerSpeed: 600,
};
