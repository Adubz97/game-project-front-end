//import Phaser from "phaser";

const KEY_PHASER_LOGO = "phaser-logo";

class scene3 extends Phaser.Scene {
  constructor() {
    super("reveal-light");
  }

  preload() {
    this.load.image("map", "assets/images/Map.png");
    //this.load.image(KEY_PHASER_LOGO, "assets/images/pic.png");
  }

  create() {

    const reveal = this.add.image(x, y, "map")
    this.cover = this.add.image(x, y, "map")
    this.cover.setTint(0x001c39);
    this.cover.setOrigin(0, 0);

    reveal.setOrigin(0, 0);
    const x = 400;
    const y = 300;

    const width = 6000;
    const height = 4000;
    // debugger;
    const rt = this.make.renderTexture({
      width,
      height,
      add: false,
    });

    const maskImage = this.make.image({
      x,
      y,
      key: rt.texture.key,
      add: false,
    });

    this.cover.mask = new Phaser.Display.Masks.BitmapMask(this, maskImage);
    this.cover.mask.invertAlpha = true;

    reveal.mask = new Phaser.Display.Masks.BitmapMask(this, maskImage);
    // this.light = this.add.arc(0, 0, 200, 0, 60, false, 0x000000, 1);
    // graphics.beginFill(0x000000)
    // graphics.
    // graphics.endFill();
    // this.light = this.add.graphics
    // this.light.visible = false;

    // this.light = this.add.graphics()
    // this.light.linestyle(4, 0xff00ff, 1);

    // this.line.beginPath();

    // this.light = this.light.add.arc(400, 400, 200, Phaser.Math.DegToRad(90), Phaser.Math.DegToRad(180), true);

    // this.light.strokePath();

    this.light = this.add.graphics();
    //debugger;
    this.light.fillStyle(0xffff00, 1);
    this.light.slice(0, 0, 1000, Math.PI / 6, -Math.PI / 6, true);
    this.light.fillPath();
    // setTimeout(function () {
    //   graphics.clear();
    // }, 10);
    this.light.visible = false;

    this.input.on(
      Phaser.Input.Events.POINTER_MOVE,
      this.handlePointerMove,
      this
    );

    this.renderTexture = rt;
  }

  handlePointerMove(pointer) {
    const x = pointer.x + 1600;
    //this.cover.x + this.cover.width * 0.5;
    const y = pointer.y + 1710;
    //this.cover.y + this.cover.height * 0.5;

    this.renderTexture.clear();
    this.renderTexture.draw(this.light, x, y);
  }
}
