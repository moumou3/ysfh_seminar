var canvaswidth;
var canvasheight;


function getCenters(points) {
  var p1 = createVector(0,0);
  var p2 = createVector(0,0);
  var p3 = createVector(0,0);

  var p1 = p5.Vector.add(points[0]).add(points[1]).mult(0.5);
  var p2 = p5.Vector.add(points[1]).add(points[2]).mult(0.5);
  var p3 = p5.Vector.add(points[2]).add(points[0]).mult(0.5);
  return [p1,p2,p3];

}

function drawTriangle(points) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);
}


function setup() {
  canvaswidth= 2400;
  canvasheight = 1600;
  createCanvas(canvaswidth, canvasheight); // initialize canvas for drawing

  background(0);
  noFill();
  stroke(255);
  translate(canvaswidth/ 2 - 200, canvasheight/ 2); 

  var initialpoints = [createVector(433,250), createVector(-433,250), createVector(0, -500)];
  var MAXITR = 10;
  drawTriangle(initialpoints);
  drawGasket(initialpoints, MAXITR);
}

function draw() {
}

function keyTyped() {
  switch (key) {
    case ' ':
      break;
  }
  return false;
}


function drawGasket(points, i){
  if (i == 0) 
    return;
  else 
    i--;
  var centers = getCenters(points);
  drawTriangle(centers);
  drawGasket([points[0], centers[0], centers[2]], i);
  drawGasket([centers[0], points[1], centers[1]], i);
  drawGasket([centers[2], centers[1], points[2]], i);

}


