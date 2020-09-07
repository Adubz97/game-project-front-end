var config = {
  width: innerWidth,
  height: innerHeight,
  backgroundColor: 0x000000,
  scene: [scene1, scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};
// var widthRatio = window.screen.width / 3440;
// var heightRatio = window.screen.height / 1440;
//var screenRatio = window.screen.height*window.screen.width/(3440*1440)
var screenRatio = window.devicePixelRatio / 3;
// var globalWidth = window.screen.width
// var globalheight =window.screen.height * window.devicePixelRatio

var gameSettings = {
  playerSpeed: 200,
};

window.onload = function () {
  var game = new Phaser.Game(config);
};
