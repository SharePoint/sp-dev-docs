<!DOCTYPE html>
<html>
<head>
  <title>Mini Driving Game</title>
  <style>
    body {
      margin: 0;
      overflow: hidden;
      background: #333;
    }
    canvas {
      display: block;
      margin: auto;
      background: #555;
    }
  </style>
</head>
<body>

<canvas id="gameCanvas" width="400" height="600"></canvas>

<script>
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Car properties
let car = {
  x: 180,
  y: 500,
  width: 40,
  height: 80,
  speed: 0,
  maxSpeed: 5,
  color: "red"
};

// Road lines
let lines = [];
for (let i = 0; i < 10; i++) {
  lines.push({ x: 195, y: i * 80 });
}

// Controls
let keys = {};
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// Game loop
function update() {
  // Acceleration
  if (keys["ArrowUp"]) {
    car.speed += 0.2;
  } else {
    car.speed -= 0.1;
  }

  // Brake
  if (keys["ArrowDown"]) {
    car.speed -= 0.3;
  }

  // Limit speed
  if (car.speed > car.maxSpeed) car.speed = car.maxSpeed;
  if (car.speed < 0) car.speed = 0;

  // Steering
  if (keys["ArrowLeft"]) {
    car.x -= 4;
  }
  if (keys["ArrowRight"]) {
    car.x += 4;
  }

  // Move road lines
  lines.forEach(line => {
    line.y += car.speed * 5;
    if (line.y > canvas.height) {
      line.y = -80;
    }
  });
}

// Draw everything
function draw() {
  // Clear canvas
  ctx.fillStyle = "#444";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw road
  ctx.fillStyle = "#222";
  ctx.fillRect(100, 0, 200, canvas.height);

  // Draw lane lines
  ctx.fillStyle = "white";
  lines.forEach(line => {
    ctx.fillRect(line.x, line.y, 10, 40);
  });

  // Draw car
  ctx.fillStyle = car.color;
  ctx.fillRect(car.x, car.y, car.width, car.height);
}

// Main loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
</script>

</body>
</html>
