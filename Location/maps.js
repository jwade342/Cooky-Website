//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
document.getElementById("game").appendChild(canvas);
var timer = 0;
var caught = false;
var fps = 10;

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = "images/background.png";

// xlx image
var xlxReady = false;
var xlxImage = new Image();
xlxImage.onload = function () {
  xlxReady = true;
};
xlxImage.src = "images/xlx.png";




// Game objects
var xlx = {
  x: 200,
  y: -500
};
var xlxCaught = 0;

// Reset the game when the player catches a monster
var reset = function () {
  xlx.x = 50 + Math.random() * (canvas.width - 64);
  xlx.y = 50 + Math.random() * (canvas.height - 64);
};

window.addEventListener("mousedown", onMouseDown, false);

function onMouseDown(e) {

  if (e.button != 0) return;

  mouseXinCanvas = e.clientX;
  mouseYinCanvas = e.clientY;

  if (xlxBody(xlx, mouseXinCanvas, mouseYinCanvas)) {
    caught = true;
    clearInterval(timer);
    timer = setInterval(reset, 20000 / fps);
    reset();
  }
  if (ResetScore(mouseXinCanvas, mouseYinCanvas)) {
    location.reload();
  }
  if (ResetSpeed(mouseXinCanvas, mouseYinCanvas)) {
    clearInterval(timer);
    timer = setInterval(reset, 20000 / fps);
    reset();
    render();
  }
};

//nar's body define
function xlxBody(xlx, x, y) {

  if (x <= (xlx.x + 80)
    && xlx.x <= (x + 80)
    && y <= (xlx.y + 80)
    && xlx.y <= (y + 80)
  ) {
    fps = fps + 5;
    xlxCaught++;
    return true;
  }
  return false;
};

//Reset Score box
function ResetScore(x, y) {

  if (x > (305)
    && x < (545)
    && y > (15)
    && y < (85)
  ) {
    return true;
  }
  return false;
};

//Reset speed box
function ResetSpeed(x, y) {
  if (x > (605)
    && x < (845)
    && y > (15)
    && y < (85)
  ) {
    fps = 10;
    return true;
  }
  return false;
};

// Draw everything
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (xlxReady) {
    ctx.drawImage(xlxImage, xlx.x, xlx.y);
  }

  // Score
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";


  ctx.fillStyle = "rgb(30, 168, 99)";
  ctx.fillRect(250, 10, 190, 60);
  ctx.fillRect(520, 10, 190, 60);

  ctx.fillStyle = "rgb(255, 255, 255)";
  ctx.font = "28px Arial";
  ctx.fillText("Reset Score", 275, 30);
  ctx.fillText("Reset Speed", 545, 30);

  ctx.fillText("Bug Smashed: " + xlxCaught, 32, 32);
};

// The main game loop
var main = function () {
  render();
  requestAnimationFrame(main);
};



// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

reset();
main();
