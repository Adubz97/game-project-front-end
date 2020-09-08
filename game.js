var config = {
  width: 3000,
  height: 1950,
  backgroundColor: 0x000000,
  scene: [scene1,scene2],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.BOTH_CENTER,
  },
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

var gameSettings = {
  playerSpeed: 200,
};

window.onload = function () {
  var game = new Phaser.Game(config);
};

