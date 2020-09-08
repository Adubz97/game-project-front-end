class scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    // Tiles
    this.tile = this.add.tileSprite(
      150,
      150,
      config.width - 300,
      config.height - 300,

      "tile"
    );
    // this.tile.setTileScale(1/3)
    this.tile.setOrigin(0, 0);

    // Top wall
    this.topWall = this.add.sprite(0, 210, "topWall");
    this.topWall.setOrigin(0, 0);
    this.topWall.angle = -90;
    this.topWall.flipX = true;

    this.topWall7 = this.add.sprite(1350, 0, "topWall7");
    this.topWall7.setOrigin(0, 0);

    //Left wall
    this.leftWall = this.add.sprite(0, 0, "leftWall");
    this.leftWall.setOrigin(0, 0);

    this.bottomWall = this.add.sprite(0, 1950, "bottomWall");
    this.bottomWall.setOrigin(0, 0);
    this.bottomWall.angle = 270;

    this.rightWall = this.add.sprite(2784, 0, "rightWall");
    this.rightWall.setOrigin(0, 0);

    this.bottomWall7 = this.add.sprite(1350, 1740, "bottomWall7");
    this.bottomWall7.setOrigin(0, 0);

    this.midBottom = this.add.sprite(1500, 1845, "middlePiece");
    this.midBottom.flipY = true;

    this.slantBottom1 = this.add.sprite(1350, 1845, "slantedPiece");
    this.slantBottom1.flipY = true;

    this.slantBottom2 = this.add.sprite(1650, 1845, "slantedPiece");
    this.slantBottom2.flipY = true;
    this.slantBottom2.flipX = true;

    this.midTop = this.add.sprite(1500, 105, "middlePiece");

    this.slantTop1 = this.add.sprite(1350, 105, "slantedPiece");

    this.slantTop2 = this.add.sprite(1650, 105, "slantedPiece");
    this.slantTop2.flipX = true;

    this.player = this.physics.add.sprite(500, 500, "player");
    this.player.setOrigin(0, 0);
    this.player.setScale(3);

    this.reticle = this.physics.add.sprite(1000, 1000, "reticle");
    this.reticle.setCollideWorldBounds(true);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);

    // this.input.on("pointermove", function (pointer) {
    //   this.reticle.x += pointer.movementX;
    //   this.reticle.y += pointer.movementY;
    // });
    // this.cameras.main.zoom = 0.5;

    // Creates object for input with WASD kets
    let moveKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });

    // Enables movement of player with WASD keys
    this.input.keyboard.on("keydown_W", function (event) {
      this.player.setVelocityY(-800);
    });
    this.input.keyboard.on("keydown_S", function (event) {
      this.player.setVelocityY(800);
    });
    this.input.keyboard.on("keydown_A", function (event) {
      this.player.setVelocityX(-800);
    });
    this.input.keyboard.on("keydown_D", function (event) {
      this.player.setVelocityX(800);
    });
  }
  update() {
    this.movePlayerManager();
  }

  movePlayerManager() {
    if (this.cursorKeys.left.isDown) {
      this.player.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.player.setVelocityX(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }

    if (this.cursorKeys.up.isDown) {
      this.player.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.player.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.player.setVelocityY(0);
    }
  }
}
