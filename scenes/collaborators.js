class Collaborators extends Phaser.Scene {
  constructor() {
    super("Collaborators");
  }

  preload() {
    // loading button
    //this.load.image("test", "assets/images/222.jpg");
    //this.load.image("yellow button", "assets/images/yellow.png");
    this.load.video(
      "credits",
      "assets/video/credits.mp4",
      "canplaythrough",
      true,
      true
    );
  }

  create() {

    var videoSettings = {
      loop: true,
      delay: 0,
    };

    var musicSettings = {
      mute: false,
      volume: 1,
      rate: 1,
      loop: false,
      delay: 0,
    };
    // added video and music
    this.add.video(1500, 975, "credits").play(videoSettings);
    this.lightSound1 = this.sound.add("flickering light");
    this.lightSound1.play(musicSettings);
    //============================================
    //button that takes us to main menu
    var flatButton = (new FlatButton({
      scene: this,
      key: "yellow button 2",
      text: "main page",
      x: 2160,
      y: 1830,
      event: "mainpage",
      params: "mainpage",
    }).setScale(2).scaleX = 2.5);
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
