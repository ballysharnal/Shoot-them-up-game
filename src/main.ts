import "phaser";
import { GameScene } from "./gameScene";

const config: Phaser.Types.Core.GameConfig = {
  title: "Shmup",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#18216D", 
  scene: [GameScene]
};
export class ShmupGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}
window.onload = () => {
  var game = new ShmupGame(config);
};
