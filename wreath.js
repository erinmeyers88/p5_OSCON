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
  radius = (height - buffer - 100) / 2;
  angleMode(DEGREES);
}

function draw() {
  let r = random(255);
  let g = random(255);
  let b = random(255);

  background(0);
  noFill();


  if (frameCount % 10 === 0) {
    background(0);
  }

  if (frameCount % 7 === 0) {
    stroke(r, g, b);
    beginShape();
    for (let i = 0; i <= totalDegrees; i++) {
      let x = centerX + radius * cos(i) + random(100);
      let y = centerY + radius * sin(i) + random(100);
      curveVertex(x, y);
    }
    endShape();
  }

  stroke(150, 200, 50, 70);

  if (frameCount % 1 === 0) {
    beginShape();
    for (let i = 0; i <= totalDegrees; i++) {
      let x = centerX + radius * cos(i) + random(100);
      let y = centerY + radius * sin(i) + random(100);
      curveVertex(x, y);
    }
    endShape();
  }



}
