/**
 You always need a setup function in p5.js.
 This gets applied just once upon the initial
 load of your sketch.
 **/

let yCoord = 0;
let rectW = 50;

function setup() {
  createCanvas(800, 600);
  background(150); //RGBA or Gray/Opacity
}

/**
 You always need a draw function in p5.js.
 Right after setup(), gets executed, this gets called continuously
 in the background. You can think of this function as
 your primary animation loop––each "frame" of your sketch.
 **/
function draw() {
  //Cascading colors
  for (let i = 0; i <= width / rectW; i++) {
    rect(i * (rectW + rectW), yCoord, rectW, rectW);
  }

  yCoord += 10;
  if (yCoord === height) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);
    yCoord = 0;
  }
}

