function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
}

function draw() {
  if (frameCount % 150 === 0) {
    background(250);
    // background(random(255), random(255), random(255));
  }
  beginShape();
  for (let i = 0; i <= window.innerWidth / 50; i++) {

    let rand = random(window.innerWidth/50 ).toFixed();
    console.log('rand', rand);

    if (i % rand === 0) {
      console.log('draw');
      fill(0);
      rect(i * 50, window.innerHeight, 50, -random(window.innerHeight / 4, window.innerHeight - 50))
    }
  }
  endShape();
}
