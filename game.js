const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let player = {
    x: 80,
    y: 400,
    width: 40,
    height: 40,
    color: "#ff66b2",
    speed: 5
};

let keys = {};

document.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

function update() {
    if (keys["ArrowLeft"]) player.x -= player.speed;
    if (keys["ArrowRight"]) player.x += player.speed;

    if (player.x < 0) player.x = 0;
    if (player.x > canvas.width - player.width) {
        player.x = canvas.width - player.width;
    }
}

function draw() {
    // Cielo
    ctx.fillStyle = "#bde7ff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Suelo
    ctx.fillStyle = "#ffb6d9";
    ctx.fillRect(0, 450, canvas.width, 50);

    // Personaje (temporal)
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Título
    ctx.fillStyle = "#ff4fa3";
    ctx.font = "24px Arial";
    ctx.fillText("🌸 MILATUN 🌸", 320, 40);
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
