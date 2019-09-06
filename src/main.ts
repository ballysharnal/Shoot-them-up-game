/** @type {import("../typings/phaser")} */

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: 0xD22C84,
    scene: {
        preload: preload,
        create: create,
        update: update
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

let game = new Phaser.Game(config)

function preload ()
{
    this.phaser.game.load.crossOrigin = "anonymous";
    this.add.tileSprite('background', '../assets/background.jpg')
}

function create ()
{
    this.add.image(100,100, "background");
}

function update ()
{
}