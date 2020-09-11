class Gameover extends Phaser.Scene {
  constructor() {
    super("Gameover");
  }

  preload() {
    // loading button, video, and audio
    this.load.image("yellow button 2", "assets/images/yellow.png");
    this.load.video( "gameover","assets/images/gameover2.mp4","canplaythrough",true,true);
    this.load.audio("flickering light", "assets/images/light2.m4a");
  }

  create() {

    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    //============================================
    //music and video settings
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
    this.add.video(1500, 975, "gameover").play(videoSettings);
    this.lightSound1 = this.sound.add("flickering light");
    this.lightSound1.play(musicSettings);


    //============================================
    //button that takes us to main menu
    var flatButton = (new FlatButton({
      scene: this,
      key: "yellow button 2",
      text: "main menu",
      x: 850,
      y: 1830,
      event: "mainpage",
      params: "mainpage",
    }).setScale(2).scaleX = 2.5);

    var flatButton = new FlatButton({
      scene: this,
      key: "yellow button 2",
      text: "Try again!",
      x: 2160,
      y: 1830,
      event: "try again",
      params: "try again",
    }).setScale(2).scaleX=2.5
    //==============================================
    //event listner for when the button is pressed on
    emitter.on("mainpage", this.mainpage, this);
    emitter.on("try again", this.playgame, this);
    //============================================
  }

  //call back function ran by line 28
  mainpage() {
    this.lightSound1.stop();
    this.scene.start("MainScreen");
  }

  playgame() {
    this.lightSound1.stop();
   this.scene.start("playgame");
  }
  //============================================
  update() {}
}
