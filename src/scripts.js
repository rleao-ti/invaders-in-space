import Player from "./classes/player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.imageSmoothingEnabled = false;

const player = new Player(canvas.width, canvas.height);

const keys = {
    left: false,
    right: false
};

const gameLoop = () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(keys.left && player.position.x >= 0) {
        player.moveLeft();
    }

    if(keys.right && player.position.x <= canvas.width - player.width) {
        player.moveRight();
    }

    player.draw(ctx);

    requestAnimationFrame(gameLoop);
};

    addEventListener("keydown", (event) => {
        const key = event.key.toLowerCase();

        if (key ==="a") keys.left = true;
        if (key ==="d") keys.right = true;
    }); 

    addEventListener("keyup", (event) => {
        const key = event.key.toLowerCase();

        if (key ==="a")  keys.left = false;
        if (key ==="d")  keys.right = false;
    }); 

    gameLoop();
