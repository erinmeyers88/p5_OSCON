let centerX;
let centerY;
let radius;
let totalDegrees = 360;
let buffer = 200;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  centerX = (width - buffer) / 2;
  centerY = (height - buffer) / 2;
  radius = (height - buffer - 100) / 1.5;
  angleMode(DEGREES);
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);

  // background(0);
  noFill();





  stroke(150, 200, 50, 70);
  beginShape();
  for (let i = 0; i <= totalDegrees; i++) {
    let noiseFactor = noise(i / 40, frameCount / 250);
    let x = centerX + radius * cos(i) * noiseFactor;
    let y = centerY + radius * sin(i) * noiseFactor;
    curveVertex(x, y);
  }
  endShape();
  radius --;
  if (radius <= 0) {
    noLoop();
  }
}
