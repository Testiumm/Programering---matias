function setup() {
  createCanvas(120, 120);
  strokeWeight(30); //bestemmer tykkelsen af linjerne
}
function draw() {
  background(204);
  stroke(102); //bestemer farven
  line(40, 0, 70, height); //tegner en linje
  if (mouseIsPressed) {
    //hvor kommer denne variable fra? Dette er en bolean variable
    if (mouseButton == LEFT) {
      // og hvad med den? den tjekker om den mouse nutton som var trykket er den venstre, hvis den er ændre den farven til hvid
      stroke(255);
    } else {
      stroke(0); //hvid det ikke er venstre mousebottn som bliver trykket ændre den så farven  til sort
    }
    line(0, 70, width, 50); //tegner en linje
  }
}
