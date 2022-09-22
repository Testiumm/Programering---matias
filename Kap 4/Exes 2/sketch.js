function setup() {
  createCanvas(400, 400);
  rectMode(CORNERS);
}

function draw() {
  background(220);

  if (mouseX < 200) {
    circle(200, 200, 100);
  } else {
    rect(100, 150, 300, 250);
  }
}
