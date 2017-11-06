var drawItr;
var tmpItr;
var MAXITR;
var INF;
var canvaswidth;
var canvasheight;


function isMandelblot (c, maxitr, inf) {
  var zn = createVector(0,0);
  var result;

  for (var i = 0; i < maxitr; i++) {
    zn = createVector(sq(zn.x) - sq(zn.y) + c.x, 2 * zn.x * zn.y + c.y);
    if (mag(zn.x, zn.y) > inf) {
      return false;
    }
  }
  return true;
}

function setup() {
  canvaswidth= 2400;
  canvasheight = 1600;
  createCanvas(canvaswidth, canvasheight); // initialize canvas for drawing
  MAXITR = 1000;
  INF = 10;
}

function draw() {
  textSize(60);
  fill(0, 0, 0);
  if (frameCount <  10) 
  text("calculating...", 100 * frameCount, 100 * frameCount);
  else if (frameCount == 10)
    drawStart();
}

function keyTyped() {
  switch (key) {
    case ' ':
      drawUpdate();
      drawCurrent();
      break;
  }
  return false;
}

function drawStart(){
  background(0);
  stroke(255);
  translate(canvaswidth/ 2, canvasheight/ 2); 
  var diff = 0.003;
  for (var x = -2; x < 1; x+=diff) {
    for (var y = -1; y < 1; y+=diff) {
      if (isMandelblot(createVector(x,y), MAXITR, INF)) {
        point(canvaswidth * x / 4, canvasheight / 4 * y);
      }
    }
  }

}

function drawUpdate(){
}

function drawCurrent(){
}
