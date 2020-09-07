class scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("tile", "assets/images/0.png");

    this.load.image("topWall1", "assets/images/3.png");

    this.load.image("topWall2", "assets/images/3.png");

    this.load.image("bottomWall", "assets/images/4.png");

    this.load.image("leftWall", "assets/images/5.png");

    this.load.image("rightWall", "assets/images/6.png");
  }
  create() {
    this.add.text(20, 20, "Loading...");
    this.scene.start("playGame");
  }
}
