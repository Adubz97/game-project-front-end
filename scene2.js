var input;
var mouse;
var worldBounds;
class scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }

  create() {
    // Tiles
    let tiles = this.add.tileSprite(
      150,
      150,
      config.width - 300,
      config.height - 300,

      "tile"
    );
    // this.tile.setTileScale(1/3)
    tiles.setOrigin(0, 0);

    const walls = this.physics.add.staticGroup();
    // Top wall
    walls.create(0, -75, "topWall7").setOrigin(0, 0).refreshBody().y += 75;
    // this.topWall.flipX = true;

    walls.create(1350, -75, "topWall7").setOrigin(0, 0).refreshBody().y += 75;

    //Left wall
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

    let blackOverlay = this.add.image(0, 0, "black");
    blackOverlay.setOrigin(0, 0);
    blackOverlay.setAlpha(0.7);

    this.player = this.physics.add.sprite(500, 500, "player");
    this.player.setScale(3);

    this.zombie = this.physics.add.sprite(1000, 1000, "zombie");
    this.zombie.setCollideWorldBounds(true);
    this.zombie.setScale(3);

    this.reticle = this.physics.add.sprite(650, 500, "reticle");
    this.reticle.setCollideWorldBounds(true);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, walls);

    // this.input.on("pointermove", function (pointer) {
    //   this.reticle.x += pointer.movementX;
    //   this.reticle.y += pointer.movementY;
    // });
    // this.cameras.main.zoom = 0.5;

    //for mouse click event
    mouse = this.input.mousePointer;

    //for mouse position
    input = this.input;

    //set game bounds
    let angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      this.reticle.x,
      this.reticle.y
    );
    worldBounds = this.physics.world.bounds;
  }
  update() {
    this.movePlayerManager();
    this.reticle.x = input.x;
    this.reticle.y = input.y;

    let angle = Phaser.Math.Angle.Between(
      this.player.x,
      this.player.y,
      this.reticle.x,
      this.reticle.y
    );

    let zombieAngle = Phaser.Math.Angle.Between(
      this.zombie.x,
      this.zombie.y,
      this.player.x,
      this.player.y
    );
    this.zombie.setRotation(zombieAngle);
    this.physics.moveToObject(this.zombie, this.player, 600);

    //rotation player with PI/2
    this.player.setRotation(angle); // + Math.PI / 2);

    //  Note the 'true' at the end, this tells it to draw anticlockwise
    var graphics = this.add.graphics();

    graphics.fillStyle(0xffffff, 0.3);

    graphics.slice(
      this.player.x,
      this.player.y,
      1000,
      angle + Math.PI / 9,
      angle - Math.PI / 9,
      true
    );

    graphics.fillPath();
    setTimeout(function () {
      graphics.clear();
    }, 10);

    function stunZombie() {
      this.zombie.setVelocityX(0);
      this.zombie.setVelocityY(0);
      debugger;
    }

    this.physics.add.overlap(graphics, this.zombie, stunZombie);
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

  // handlePointerMove() {
  //   const x = this.player.x;
  //   //this.cover.x + this.cover.width * 0.5;
  //   const y = this.player.y;
  //   //this.cover.y + this.cover.height * 0.5;

  //   this.renderTexture.clear();
  //   this.renderTexture.draw(this.light, x, y);
  // }
}
