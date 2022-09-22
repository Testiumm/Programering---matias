function setup() {
  createCanvas(120, 120);
}
function draw() {
  background(204);
  if (keyIsPressed) {
    //hvad er denne variable mon for en type? Boolsk
    if (key == "h" || key == "H") {
      line(30, 60, 90, 60);
    } //den tegner en linje fra midten af de 2 linjer til hindanen og danner et "H"
    if (key == "n" || key == "N") {
      line(30, 20, 90, 100);
    } //den tegner en linje der går fra den ene linjes top til den anden linjes bung og danner et "N"
  }
  line(30, 20, 30, 100);
  line(90, 20, 90, 100);
}
