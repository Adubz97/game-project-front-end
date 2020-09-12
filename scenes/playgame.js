var input;
var mouse;
var worldBounds;

let keyA;
let keyS;
let keyD;
let keyW;

class playgame extends Phaser.Scene {
  constructor() {
    super("playgame");
  }

  preload() {
    this.load.audio("zombieSound", "assets/sounds/zombie.mp3");

    this.load.image("map", "assets/images/Map.png");

    this.load.image("tile", "assets/images/0.png");

    this.load.image("topWall", "assets/images/9.png");

    this.load.image("bottomWall", "assets/images/9.png");

    this.load.image("leftWall", "assets/images/9.png");

    this.load.image("rightWall", "assets/images/10.png");

    this.load.image("slopedPiece", "assets/images/25.png");

    this.load.image("slantedPiece", "assets/images/24.png");

    this.load.image("middlePiece", "assets/images/15.png");

    this.load.image("bottomWall7", "assets/images/4.png");

    this.load.image("topWall7", "assets/images/3.png");

    this.load.image("player", "assets/images/player.png");

    this.load.image("reticle", "assets/images/Bullet.png");

    this.load.image("block", "assets/images/16.png");

    //this.load.image("reticle", "assets/images/red.png");

    this.load.spritesheet("fullscreen", "assets/spritesheets/fullscreen.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.image("black", "assets/images/black.png");

    this.load.image("zombie", "assets/images/zombie1_hold.png");

    this.load.image("zombiestun", "assets/images/zombie1_stand.png");

    this.load.image("zombieStunned", "assets/images/zombie1_stand.png");

    this.load.image("flashlight", "assets/images/flashlight.png");

    this.load.image("gem", "assets/images/gem.png");

    this.load.image("heart", "assets/images/heart_1.png");
    this.load.image("obstacles", "assets/images/20.png");
  }

  create() {
    //this creates the tiles for the game
    let tiles = this.add.tileSprite(
      0,
      0,
      config.width,
      config.height,

      "tile"
    );
    tiles.setOrigin(0, 0);
    //==========================================

    //here we create the walls and add them in a group
    const walls = this.physics.add.staticGroup();

    walls.create(0, -75, "topWall7").setOrigin(0, 0).refreshBody().y += 75;

    walls.create(1800, -75, "topWall7").setOrigin(0, 0).refreshBody().y += 75;

    walls.create(-75, 0, "leftWall").setOrigin(0, 0).refreshBody().x += 75;

    walls.create(0, 1815, "bottomWall7").setOrigin(0, 0).refreshBody().y -= 75;

    walls.create(3309, 0, "rightWall").setOrigin(0, 0).refreshBody().x -= 75;

    walls
      .create(1800, 1815, "bottomWall7")
      .setOrigin(0, 0)
      .refreshBody().y -= 75;

    this.add.image(1725, 1888, "block").flipY = true;
    let midBottom = (this.add.sprite(1725, 1888, "middlePiece").flipY = true);

    let slantBottom = (this.add.sprite(
      1570,
      1845,
      "slantedPiece"
    ).flipY = true);

    let slantBottom2 = this.add.sprite(1880, 1845, "slantedPiece");
    slantBottom2.flipY = true;
    slantBottom2.flipX = true;

    this.add.image(1725, 60, "block");
    let midTop = this.add.sprite(1725, 60, "middlePiece");

    let slantTop1 = this.add.sprite(1570, 105, "slantedPiece");

    let slantTop2 = this.add.sprite(1880, 105, "slantedPiece");
    slantTop2.flipX = true;
    //=====================================
    //obstacles
    this.obstacles = this.physics.add.staticGroup();
    for (var i = 0; i < 10; i++) {
      this.obstacles.create(378 + 300 * i, 370, "obstacles");
    }
    for (var i = 0; i < 10; i++) {
      this.obstacles.create(378 + 300 * i, 670, "obstacles");
    }
    for (var i = 0; i < 10; i++) {
      this.obstacles.create(378 + 300 * i, 970, "obstacles");
    }
    for (var i = 0; i < 10; i++) {
      this.obstacles.create(378 + 300 * i, 1270, "obstacles");
    }
    for (var i = 0; i < 10; i++) {
      this.obstacles.create(378 + 300 * i, 1570, "obstacles");
    }
    // this.obstacles.create(378, 370, "obstacles");
    // this.obstacles.create(678, 370, "obstacles");
    // this.obstacles.create(978, 370, "obstacles");
    // this.obstacles.create(1278, 370, "obstacles");
    // this.obstacles.create(1578, 370, "obstacles");
    // this.obstacles.create(1878, 370, "obstacles");

    //======================================================================
    //black tint for map
    let blackOverlay = this.add.image(0, 0, "black");
    blackOverlay.setOrigin(0, 0);
    blackOverlay.setAlpha(0.7);
    //======================================================================
    this.gems = this.add.group();
    for (var i = 0; i < 5; i++) {
      var xx = Phaser.Math.Between(150, config.width - 150);
      var yy = Phaser.Math.Between(150, config.height - 150);
      this.gem = this.physics.add.sprite(xx, yy, "gem");
      this.gem.setScale(1 / 6);
      this.gem.refreshBody();
      // this.zombie.setScale(3);
      // this.zombie.setCollideWorldBounds(true);
      this.gems.add(this.gem);
    }
    //======================================================================
    this.extralives = this.add.group();
    for (var i = 0; i < 2; i++) {
      var xx = Phaser.Math.Between(150, config.width - 150);
      var yy = Phaser.Math.Between(150, config.height - 150);
      this.extralife = this.physics.add.sprite(xx, yy, "heart");
      this.extralife.setScale(1 / 2);
      this.extralife.refreshBody();
      // this.zombie.setScale(3);
      // this.zombie.setCollideWorldBounds(true);
      this.extralives.add(this.extralife);
    }
    //======================================================================
    //flashlight
    this.flashlight = this.physics.add.sprite(490, 490, "flashlight");
    this.flashlight.setOrigin(0.13, 0.44);
    this.flashlight.refreshBody();
    this.physics.world.enable(this.flashlight);
    this.flashlight.body.setAllowGravity(false); // so that your image is not affected by gravity
    //======================================================================
    //player
    this.player = this.physics.add.sprite(500, 500, "player");
    this.player.setScale(3);
    this.player.body.setSize(30, 30);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, walls);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    //======================================================================
    this.circ = this.add.circle(this.input.x, this.input.y, 220, 0x6666ff, 0);
    this.physics.world.enable(this.circ);
    this.circ.body.setCircle(220, 0, 0);
    //======================================================================
    // zombie group

    this.zombieGroup = this.add.group();
    this.physics.add.collider(this.zombieGroup, walls);
    this.physics.add.collider(this.zombieGroup, this.zombieGroup);

    this.physics.add.collider(this.obstacles, this.player);
    this.physics.add.collider(this.obstacles, this.gems);
    this.physics.add.collider(this.obstacles, this.extralives);

    for (var i = 0; i < 6; i++) {
      var xx = Phaser.Math.Between(1000, config.width - 150);
      var yy = Phaser.Math.Between(1000, config.height - 150);
      this.zombie = this.physics.add.sprite(xx, yy, "zombie");
      this.zombie.setScale(3);
      this.zombie.body.setSize(30, 30);
      this.zombie.setCollideWorldBounds(true);
      this.zombie.name = "bilbo";
      this.zombieGroup.add(this.zombie);
    }
    //======================================================================
    this.life = this.add.group();
    this.liveCount = 3;
    this.updateHearts();
    //======================================================================
    //reticle aka pointer design w/e
    // this.reticle = this.physics.add.sprite(650, 500, "reticle");
    // this.reticle.setCollideWorldBounds(true);
    this.input.setDefaultCursor("url(assets/images/blue.cur), pointer");
    //.setOrigin(1, 1);
    // pointer.setOrigin(0, 0);
    //======================================================================

    //======================================================================
    //reminder move reticle with player
    // this.input.on("pointermove", function (pointer) {
    //   this.reticle.x += pointer.movementX;
    //   this.reticle.y += pointer.movementY;
    // });
    // this.cameras.main.zoom = 0.5;
    //======================================================================
    //for mouse click event
    //mouse = this.input.mousePointer;
    //======================================================================
    //for mouse position
    input = this.input;
    //======================================================================
    //set game bounds
    // let angle = Phaser.Math.Angle.Between(
    //   this.player.x,
    //   this.player.y,
    //   this.reticle.x,
    //   this.reticle.y
    // );
    worldBounds = this.physics.world.bounds;
    //======================================================================
    this.physics.add.overlap(
      this.player,
      this.zombieGroup,
      this.hurtPlayer,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.gems,
      this.pickupGem,
      null,
      this
    );

    this.physics.add.overlap(
      this.player,
      this.extralives,
      this.pickupHeart,
      null,
      this
    );

    this.physics.add.collider(
      this.obstacles,
      this.zombieGroup,
      this.pathfind,
      null,
      this
    );

    this.physics.add.overlap(
      this.zombieGroup,
      this.circ,
      this.stunZombie,
      null,
      this
    );

    //keyboard keys
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    //==================================================================

    // Fullscreen implementation
    var button = this.add
      .image(3420, 10, "fullscreen", 0)
      .setOrigin(1, 0)
      .setInteractive();

    button.on(
      "pointerup",
      function () {
        if (this.scale.isFullscreen) {
          button.setFrame(0);

          this.scale.stopFullscreen();
        } else {
          button.setFrame(1);

          this.scale.startFullscreen();
        }
      },
      this
    );
    //=============================================

    // SCOREBOX
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();

    this.sb = new ScoreBox({ scene: this });
    this.sb.x = 130;
    this.sb.y = 40;
    //============================================
    // let musicSettings = {
    //   mute: false,
    //   volume: 1,
    //   rate: 1,
    //   loop: true,
    //   delay: 5000,
    // };
    // added zombie sound
    this.zombieSound = this.sound.add("zombieSound");
    this.zombieSound.play();
  }

  update() {
    if (this.player.y < 150) {
      this.player.y = config.height - 150;
    }
    if (this.player.y > config.height - 150) {
      this.player.y = 150;
    }
    //player movement
    this.movePlayerManager();
    //reticle follows mouse
    this.circ.x = input.x;
    this.circ.y = input.y;

    //angle between reticle and player
    let angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      // this.reticle.x,
      // this.reticle.y
      input.x,
      input.y
    );
    //rotation player
    this.player.setRotation(angle);
    //angle between player and zombie
    this.zombieGroup.children.iterate(function (enemy) {
      let zombieAngle = Phaser.Math.Angle.Between(
        enemy.x,
        enemy.y,
        this.player.x,
        this.player.y
      );
      enemy.setRotation(zombieAngle);
    }, this);
    //zombie follow player
    this.zombieGroup.children.iterate(function (enemy) {
      // if (enemy.x < this.player.x) {
      //   enemy.x += 6;
      // } else {
      //   enemy.x -= 6;
      // }
      // if (enemy.y < this.player.y) {
      //   enemy.y += 6;
      // } else {
      //   enemy.y -= 6;
      // }
      this.physics.moveToObject(enemy, this.player, 400);
    }, this);
    //======================================================================
    //flashlight aligned with player
    this.flashlight.x = this.player.x;
    this.flashlight.y = this.player.y;
    this.flashlight.setRotation(angle);
    // this.flashlight.body.setRotation(angle);

    //======================================================================
    //trying to figure out the ooverlap >:(
  }

  pathfind(zombie, obstacle) {
    if (zombie.x > obstacle.x) {
      zombie.x += 1;
    } else {
      zombie.x -= 1;
    }
    if (zombie.y > obstacle.y) {
      zombie.y += 1;
    } else {
      zombie.y -= 1;
    }
  }

  pickupGem(player, gem) {
    gem.disableBody(true, true);
    model.score += 100;
    this.sb.scoreUpdated();
    // this.pickupSound.play();
    if (this.gems.countActive(true) === 0) {
      this.gems.children.iterate(function (child) {
        child.enableBody(
          true,
          Phaser.Math.Between(150, config.width - 150),
          Phaser.Math.Between(150, config.height - 150),
          true,
          true
        );
      });
      this.extralives.children.iterate(function (child) {
        child.enableBody(
          true,
          Phaser.Math.Between(150, config.width - 150),
          Phaser.Math.Between(150, config.height - 150),
          true,
          true
        );
      });
      for (var i = 0; i < 2; i++) {
        var xx = Phaser.Math.Between(150, config.width - 150);
        var yy = Phaser.Math.Between(150, config.height - 150);
        this.zombie = this.physics.add.sprite(xx, yy, "zombie");
        this.zombie.setScale(3);
        this.zombie.setCollideWorldBounds(true);
        this.zombie.name = "bilbo";
        this.zombieGroup.add(this.zombie);
      }
      // var x =
      //   this.player.x < config.width / 2
      //     ? Phaser.Math.Between(config.width / 2, config.width - 150)
      //     : Phaser.Math.Between(150, config.width / 2);

      // this.zombie = this.zombieGroup.create(x, 800, "zombie");
      // this.zombie.setScale(3);
      // zomb.setCollideWorldBounds(true);
    }
  }
  pickupHeart(player, heart) {
    if (this.liveCount < 4) {
      heart.disableBody(true, true);
      this.liveCount += 1;
      this.updateHearts();
    }
  }

  updateHearts() {
    this.life.clear(true, true);
    for (var i = 0; i < this.liveCount; i++) {
      this.life.create(50 + 75 * i, 100, "heart").setScale(0.5);
    }
  }

  hurtPlayer(player, enemy) {
    if (this.liveCount > 1) {
      if (this.player.alpha < 1) {
        return;
      }
      player.disableBody(true, true);
      this.flashlight.disableBody(true, true);

      // this.resetPlayer();
      this.time.addEvent({
        delay: 1000,
        callback: this.resetPlayer,
        callbackScope: this,
        loop: false,
      });
      this.liveCount -= 1;
      this.updateHearts();
    } else {
      this.liveCount -= 1;
      this.updateHearts();
      this.gameover();
    }
    // if (this.liveCount == 0) {
    //   this.gameover();
    // }
  }

  gameover() {
    this.physics.pause();
    this.zombieSound.stop();
    this.player.setTint(0xff0000);

    fetch("http://localhost:3000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        number: model.score,
        user_id: document.getElementById("utext").value
      }),
    });

    setTimeout(() => {
      this.scene.start("Gameover");
    }, 2000);
  }
  resetPlayer() {
    var x = -100;
    var y = 500;
    this.player.enableBody(true, x, y, true, true);
    this.flashlight.enableBody(true, x, y, true, true);

    this.player.alpha = 0.5;
    // this.flashlight.alpha = 0.2;
    this.physics.pause();
    var tween = this.tweens.add({
      targets: this.player,
      x: 500,
      ease: "power1",
      duration: 1500,
      repeat: 0,
      onComplete: function () {
        this.player.alpha = 1;
        this.physics.resume();
        // this.flashlight.alpha = 1;
      },
      callbackScope: this,
    });
  }

  stunZombie(enemy) {
    // this.physics.moveToObject(enemy, this.player, -600);
    if (enemy.x < this.player.x) {
      enemy.x -= 5;
    } else {
      enemy.x += 5;
    }
    if (enemy.y < this.player.y) {
      enemy.y -= 5;
    } else {
      enemy.y += 5;
    }
  }

  movePlayerManager() {
    //moving using wasd and arrow keys :DD

    //left and right
    if (keyA.isDown || this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (keyD.isDown || this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
    //up and down
    if (keyW.isDown || this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (keyS.isDown || this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }
  }
}
