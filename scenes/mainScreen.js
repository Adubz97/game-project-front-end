class MainScreen extends Phaser.Scene {
  constructor() {
    super("MainScreen");
  }

  preload() {
    //loading main menu graphic and the buttons
    this.load.video(
      "main3",
      "assets/video/main3.mp4",
      "canplaythrough",
      true,
      true
    );
    this.load.image("yellow button", "assets/images/yellow.png");
    this.load.image("yellow button 2", "assets/images/yellow.png");
    this.load.audio("flickering light", "assets/sounds/light2.m4a");
  }

  create() {
    this.input.setDefaultCursor("url(assets/images/blue.cur), pointer");
    //even listener
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    //============================================
    //music
    let videoSettings = {
      loop: true,
      delay: 0,
    };

    let musicSettings = {
      mute: false,
      volume: 1,
      rate: 1,
      loop: true,
      delay: 0,
    };
    // added video and music
    this.add.video(1725, 1155, "main3").play(videoSettings);
    this.lightSound = this.sound.add("flickering light");
    this.lightSound.play(musicSettings);
    // music.sound.on('decoded', 'flickering light');
    // music.play();
    //====================================================
    //start game button
    var flatButton = new FlatButton({
      scene: this,
      key: "yellow button",
      text: "Start game!",
      x: 1725,
      y: 1550,
      event: "start_game",
      params: "start_game",
    }).setScale(2);
    //====================================================
    // leaderboard button
    var flatButton2 = new FlatButton({
      scene: this,
      key: "yellow button 2",
      text: "Leaderboard",
      x: 1725,
      y: 1700,
      event: "leaderboard",
      params: "leaderboard",
    }).setScale(2);

    var flatButton3 = new FlatButton({
      scene: this,
      key: "yellow button 2",
      text: "Collaborators",
      x: 1725,
      y: 1850,
      event: "collaborators",
      params: "collaborators",
    }).setScale(2);
    //====================================================
    //event listner for when the button is pressed on
    emitter.on("start_game", this.startGame, this);
    emitter.on("leaderboard", this.leaderboard, this);
    emitter.on("collaborators", this.collaborators, this);
    //====================================================
  }

  //switch scene to the game
  startGame() {
    this.lightSound.stop();
    this.scene.start("playgame");
  }
  //==============================
  //switch scene to leaderboard
  leaderboard() {
    this.lightSound.stop();
    this.scene.start("Leaderboard");
  }

  collaborators() {
    this.lightSound.stop();
    this.scene.start("Collaborators");
  }
  //==============================
  update() {}
}
