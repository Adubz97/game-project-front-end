class scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload() {
    this.load.image("tile", "assets/images/0.png");

    this.load.image("topWall", "assets/images/9.png");

    this.load.image("bottomWall", "assets/images/9.png");

    this.load.image("leftWall", "assets/images/9.png");

    this.load.image("rightWall", "assets/images/10.png");

    this.load.image("slopedPiece", "assets/images/25.png");

    this.load.image("slantedPiece", "assets/images/24.png");

    this.load.image("middlePiece", "assets/images/23.png");

    this.load.image("bottomWall7", "assets/images/4.png");

    this.load.image("topWall7", "assets/images/3.png");

    this.load.image("player", "assets/images/player.png");

    this.load.image("reticle", "assets/images/Bullet.png")

    this.load.image("zombie", "assets/images/zombie_hold.png")

    this.load.image("zombieStunned", "assets/images/zombie.png")
  }
  create() {
    this.add.text(20, 20, "Loading...");
    this.scene.start("playGame");
  }
}
