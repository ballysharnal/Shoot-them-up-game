import "phaser";
export class GameScene extends Phaser.Scene {
constructor() {
    super({
        key: "GameScene"
    });
}

    preload(): void {
        this.load.image('background', '../assets/background.jpg');
    }
  
    create(): void {
        this.add.image(0,0, "background").setOrigin(0,0);
    }
    update(): void {
        // TODO
    }
};