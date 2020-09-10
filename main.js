var game;
var config;
window.onload = function () {
  config = {
    width: 3000,
    height: 1950,
    backgroundColor: 0x000000,
    scene: [MainScreen, playgame],
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
      },
    },
  };
  var game = new Phaser.Game(config);
};

var gameSettings = {
  playerSpeed: 600,
};
