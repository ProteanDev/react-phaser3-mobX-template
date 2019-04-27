/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Phaser from "phaser";

//import logo from './assets/logo.svg'
import config, { PARENT_DIV_TAG } from "../config/phaser.config";
import ExampleScene from "../scenes/ExampleScene";

class PhaserGame extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Game", new ExampleScene());
    this.scene.start("Game");
  }
}

class Game extends Component {
  componentDidMount() {
    const game = new PhaserGame();
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id={PARENT_DIV_TAG} />;
  }
}

export default Game;
