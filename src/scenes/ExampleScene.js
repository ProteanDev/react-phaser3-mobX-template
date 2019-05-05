
import Phaser from "phaser"
import config from "./ExampleScene.config"

class ExampleScene extends Phaser.Scene {
  constructor() {
    super(config)
  }

  create() {
    const text = this.add.text(250, 250, "PHASER UI", {
      backgroundColor: "white",
      color: "blue",
      fontSize: 48
    })

    text.setInteractive({ useHandCursor: true })

    text.on("pointerup", () => {
      // console.log("Phaser Text Button Clicked")
    })
  }
}

export default ExampleScene
