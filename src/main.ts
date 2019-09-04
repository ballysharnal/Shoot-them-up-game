/** @type {import("../typings/phaser")} */

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
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
    this.load.image('background', '../assets/background.jpg')
}

function create ()
{
    this.add.image(0,60, "background");
}

function update ()
{
}