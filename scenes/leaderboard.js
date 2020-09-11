class Leaderboard extends Phaser.Scene {
  constructor() {
    super("Leaderboard");
  }

  preload() {
    // loading button
    this.load.image("test", "assets/images/222.jpg");
    this.load.image("yellow button", "assets/images/yellow.png");
  }

  create() {
    // test image
    this.add.sprite(600, 600, "test");
    //============================================
    //button that takes us to main menu
    var flatButton = new FlatButton({
      scene: this,
      key: "yellow button 2",
      text: "main page",
      x: 1500,
      y: 1500,
      event: "mainpage",
      params: "mainpage",
    }).setScale(2);
    //==============================================
    //event listner for when the button is pressed on
    emitter.on("mainpage", this.mainpage, this);
    //============================================
  }

  //call back function ran by line 28
  mainpage() {
    this.scene.start("MainScreen");
  }
  //============================================
  update() {}
}
