const lineThickness = 8;
var colors;

const colorProb = 1/3.0; // Proportion of colored rectangles
const maxIter = 2; // How deep to recursively subdivide rectangles
const rectMaxProportion = 0.8; // The maximum createCanvas of a rect division


function setup() {


  purple = color(101, 81, 147)
  bluish = color(109, 128, 172)
  reddish = color(252, 71, 51)
  greenish = color(131, 153, 97)
  brown = color(181, 98, 69)

	createCanvas(800, 800);
  strokeWeight(lineThickness);
  stroke(0);
  noLoop();


	 colors = [purple, bluish, greenish];
}

function draw() {
  drawRectangles(0+lineThickness/2, 0+lineThickness/2, width-lineThickness, height-lineThickness, 0);
  //saveFrame(timestamp() + ".png");
}

function drawRectangles(startPointX, startPointY, w, h, iter) {
  if (iter < maxIter) {
    var w1 = random(1-rectMaxProportion, rectMaxProportion);
    var w2 = 1 - w1;
    var h1 = random(1-rectMaxProportion, rectMaxProportion);
    var h2 = 1 - h1;
    
    // Top left
    if (iter == maxIter-1) {
      fill(DecideColor());
      rect(startPointX, startPointY, w1*w, h1*h);
    }
    drawRectangles(startPointX, startPointY, w1*w, h1*h, iter+1);
    
    // Top right
    if (iter == maxIter-1) {
      fill(DecideColor());
      rect(startPointX + w1*w, startPointY, w2*w, h1*h);
    }
    drawRectangles(startPointX + w1*w, startPointY, w2*w, h1*h, iter+1);
    
    // Bottom left
    if (iter == maxIter-1) {
      fill(DecideColor());
      rect(startPointX, startPointY + h1*h, w1*w, h2*h);
    }
    drawRectangles(startPointX, startPointY + h1*h, w1*w, h2*h, iter+1);
    
    // Bottom right
    if (iter == maxIter-1) {
      fill(DecideColor());
      rect(startPointX + w1*w, startPointY + h1*h, w2*w, h2*h);
    }
    drawRectangles(startPointX + w1*w, startPointY + h1*h, w2*w, h2*h, iter+1);
  }
}

function DecideColor() {
  if (random(1) < colorProb) {
    // Color
    return colors[int(random(colors.length))];
  } else {
    // White
    return color(255);
  }
}

function timestamp() {
  var  t = day() + "-" + month() + "-" + year() + " " + hour() + "." + minute() + "." + second();
  return t;
}