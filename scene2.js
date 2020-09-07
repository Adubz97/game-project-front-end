class scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create() {
    this.tile = this.add.tileSprite(
      150, //* screenRatio,
      150, //* screenRatio,
      (window.innerWidth * window.devicePixelRatio) -300,
      (window.innerHeight * window.devicePixelRatio)-278,
      //window.innerWidth - (300 * screenRatio),
      //window.innerHeight - (300 * screenRatio),
      // 150,
      // 150,
      // window.innerWidth - 300,
      // window.innerHeight - 300,
      "tile"
    );
    // this.tile.setTileScale(screenRatio, screenRatio);

    // this.background.setScale(4);
    this.tile.setOrigin(0, 0);

    this.topWall1 = this.add.image(0, 0, "topWall1");
    // this.topWall1.setScale(screenRatio);
    this.topWall1.setOrigin(0, 0);

    this.topWall2 = this.add.image(window.innerWidth - 1640, 0, "topWall2");
    // this.topWall2.setScale(screenRatio);
    this.topWall2.setOrigin(0, 0);
  }
}
