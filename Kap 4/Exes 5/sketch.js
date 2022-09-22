let x;
let xspeed = 3;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
}

function draw() {
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  /* xspeed bliver ændret afhængig af hvor henne på canvaset x er. 
  hvis x kommer helt ud i siderne vil det resultere i at xspeed bliver ganget med (-1) */
  //Move
  x += xspeed;
  /* variablen xspeed bliver konstant lagt oven i varablen x */
  circle(x, height / 2, 50);
  /* circlen bliver tegnet med variablen x som dens x værdi, og en halv højde som y værdi. */
}
