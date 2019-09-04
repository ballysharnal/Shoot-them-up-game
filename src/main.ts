/** @type {import("../typings/phaser")} */

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game: Phaser.Game = new Phaser.Game(config)

function preload ()
{
}

function create ()
{
}

function update ()
{
}