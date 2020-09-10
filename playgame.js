var input;
var mouse;
var worldBounds;
class playgame extends Phaser.Scene {
  constructor() {
    super("playgame");
  }

  preload() {
    this.load.image("map", "assets/images/Map.png");

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

    this.load.image("reticle", "assets/images/Bullet.png");

    this.load.image("black", "assets/images/black.png");

    this.load.image("zombie", "assets/images/zombie1_hold.png");

    this.load.image("zombieStunned", "assets/images/zombie1_stand.png");

    this.load.image("flashlight", "assets/images/flashlight.png");
  }

  create() {
    //this creates the tiles for the game
    let tiles = this.add.tileSprite(
      150,
      150,
      config.width - 300,
      config.height - 300,

      "tile"
    );
    tiles.setOrigin(0, 0);
    //==========================================

    //here we create the walls and add them in a group
    const walls = this.physics.add.staticGroup();

    walls.create(0, -75, "topWall7").setOrigin(0, 0).refreshBody().y += 75;

    walls.create(1350, -75, "topWall7").setOrigin(0, 0).refreshBody().y += 75;

    walls.create(-75, 0, "leftWall").setOrigin(0, 0).refreshBody().x += 75;

    walls.create(0, 1815, "bottomWall7").setOrigin(0, 0).refreshBody().y -= 75;

    walls.create(2859, 0, "rightWall").setOrigin(0, 0).refreshBody().x -= 75;

    walls
      .create(1350, 1815, "bottomWall7")
      .setOrigin(0, 0)
      .refreshBody().y -= 75;

    let midBottom = (this.add.sprite(1500, 1845, "middlePiece").flipY = true);

    let slantBottom = (this.add.sprite(
      1350,
      1845,
      "slantedPiece"
    ).flipY = true);

    let slantBottom2 = this.add.sprite(1650, 1845, "slantedPiece");
    slantBottom2.flipY = true;
    slantBottom2.flipX = true;

    let midTop = this.add.sprite(1500, 105, "middlePiece");

    let slantTop1 = this.add.sprite(1350, 105, "slantedPiece");

    let slantTop2 = this.add.sprite(1650, 105, "slantedPiece");
    slantTop2.flipX = true;
    //======================================================================
    //black tint for map
    let blackOverlay = this.add.image(0, 0, "black");
    blackOverlay.setOrigin(0, 0);
    blackOverlay.setAlpha(0.7);
    //======================================================================
    //flashlight
    this.flashlight = this.physics.add.sprite(490, 490, "flashlight");
    this.flashlight.setOrigin(0.13, 0.44);
    this.flashlight.refreshBody();
    //======================================================================
    //player
    this.player = this.physics.add.sprite(500, 500, "player");
    this.player.setScale(3);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, walls);
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    //======================================================================
    // zombie group #soon

    this.zombieGroup = this.add.group();
    this.physics.add.collider(this.zombieGroup, walls);

    for (var i = 0; i < 5; i++) {
      var xx = Phaser.Math.Between(400, 2800);
      var yy = Phaser.Math.Between(400, 1700);
      this.zombie = this.physics.add.sprite(xx, yy, "zombie");
      this.zombie.setScale(3);
      this.zombie.setCollideWorldBounds(true);
      this.zombieGroup.add(this.zombie);
    }
    //======================================================================
    //reticle aka pointer design w/e
    this.reticle = this.physics.add.sprite(650, 500, "reticle");
    this.reticle.setCollideWorldBounds(true);
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
    let angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      this.reticle.x,
      this.reticle.y
    );
    worldBounds = this.physics.world.bounds;
    //======================================================================
  }

  update() {
    //player movement
    this.movePlayerManager();
    //reticle follows mouse
    this.reticle.x = input.x;
    this.reticle.y = input.y;

    //angle between reticle and player
    let angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      this.reticle.x,
      this.reticle.y
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
      this.physics.moveToObject(enemy, this.player, 400);
    }, this);
    //======================================================================
    //flashlight aligned with player
    this.flashlight.x = this.player.x;
    this.flashlight.y = this.player.y;
    this.flashlight.setRotation(angle);
    //======================================================================
    //trying to figure out the ooverlap >:(
    this.physics.add.overlap(
      this.flashlight,
      this.zombieGroup,
      this.stunZombie(this.flashlight, this.zombie),
      null,
      this
    );
  }

  stunZombie(a, zombie) {
    this.zombieGroup.children.iterate(function (enemy) {
      // enemy.setVelocityX= -5;
      //console.log("zombo");
    }, this);
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
