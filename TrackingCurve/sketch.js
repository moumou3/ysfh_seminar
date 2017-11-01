var drawItr;
var tmpItr;
var MAXITR;
var POLYNUM;
var canvaswidth;
var canvasheight;
var radius;
var points = [];  
var delta;



function setup() {
  canvaswidth= 1200;
  canvasheight = 800;
  POLYNUM = 20;
  createCanvas(canvaswidth, canvasheight); // initialize canvas for drawing
  MAXITR = 1000;
  radius = 100;
  delta = 0.1;

  drawStart();
  drawCurrent();
}

function getNewpoint(v1,v2) {
    var pnew = createVector(0,0);
    pnew.add(v2).sub(v1).mult(delta).add(v1);
    return pnew;
}
  

function draw() {
  var newpoints = [];

  for (var i = 0; i < POLYNUM; i++) {
    var v1 = points[i];
    var v2 = points[(i+1) % POLYNUM];
    var pnew = getNewpoint(v1,v2);
    line(points[i].x, points[i].y, pnew.x, pnew.y);
    newpoints.push(pnew);
  }
  arrayCopy(newpoints, points);
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
  background(250);
  var rad = radians(360 / POLYNUM);
  translate(canvaswidth/ 2, canvasheight/ 2); 
  for (var i = 0; i < POLYNUM; i++) {
    var p = createVector(0,radius).rotate(rad * i);
    points.push(p);
    point(p.x, p.y);
   
  }
}

function drawUpdate(){
}

function drawCurrent(){
}
