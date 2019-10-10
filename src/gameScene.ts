import "phaser";
export class GameScene extends Phaser.Scene {

    background: Phaser.GameObjects.Image;
    backgroundLoop: Phaser.GameObjects.Image;
    
    constructor() {
        super({
            key: "GameScene"
        });
    }

    preload(): void {
        this.load.image('background', '../assets/background.jpg');
    }
  
    create(): void {
        this.background = this.add.image(0,0, "background").setOrigin(0,0);
        this.backgroundLoop = this.add.image(800, 0, "background").setOrigin(0,0);
    }
    update(): void {
        this.scrollScreen();
    }

    scrollScreen() {
        this.background.x -= 4;
        this.backgroundLoop.x -= 4;
        if (this.background.x <= -800) {
            this.background.x = 800
        }
        if (this.backgroundLoop.x <= -800) {
            this.backgroundLoop.x = 800
        }
    }
};