class GameLoader extends Phaser.Scene {
    
    constructor() {
        super('gameLoader'); 
    }
    preload() {
        this.load.image("background", "../assets/image/farback.gif")
    }

    create() {
        this.scene.start("gameLoader");
    }

}