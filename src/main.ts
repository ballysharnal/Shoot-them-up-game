/** @type {import("../typings/phaser")} */



class SimpleGame {
    
    config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: this.preload,
            create: this.create,
            update: this.update
        },
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
    };

    constructor() {
        this.game = new Phaser.Game(this.config);
    }

    game: Phaser.Game;

    preload ()
    {   
        this.game.load.image("background", "../assets/image/farback.gif")
    }
    
    create ()
    {
        this.game.add.image(100,100, "background");
    }
    
    update ()
    {
    }
}



window.onload = () => {
    let game = new SimpleGame()
}

// ============================

// class SimpleGame {

    // constructor() {
    //     this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    // }

//     game: Phaser.Game;

//     preload() {
//         this.game.load.image('logo', 'phaser2.png');
//     }

//     create() {
//         var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
//         logo.anchor.setTo(0.5, 0.5);
//     }

// }

// window.onload = () => {

//     var game = new SimpleGame();

// };