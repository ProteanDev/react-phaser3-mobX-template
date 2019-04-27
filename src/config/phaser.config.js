import Phaser from "phaser";

export const PARENT_DIV_TAG = "phaser-game";

export default {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  parent: PARENT_DIV_TAG,
  scene: null,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
};
