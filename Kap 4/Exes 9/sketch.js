function setup() {
  createCanvas(120, 120);
}
function draw() {
  background(204);
  if (keyIsPressed) {
    //hvad er denne variable mon for en type? Boolsk
    if (key == "v" || key == "V") {
      line(30, 60, 90, 60);
    } //den tegner en linje fra midten af de 2 linjer til hindanen og danner et "H"
    if (key == "a" || key == "A") {
      line(60, 20, 80, 100);
      line(60, 20, 40, 100);
    } //den tegner en linje der går fra den ene linjes top til den anden linjes bung og danner et "N"
  }
}
