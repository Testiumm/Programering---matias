function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220); /*farver baggrunden*/
  fill(255, 0, 0); /* udfylder de figure som blivver lavet */
  noStroke(); /* de fugure der bliver laver har ingen streg omkring sig */
  if (mouseX < width / 3) {
    rect(0, 0, width / 3, height);
    /*hvis min mus' x position er på den første 1/3 af canvaset danner den et rectangel der*/
  } else if (mouseX <= (width * 2) / 3) {
    rect(width / 3, 0, width / 3, height);
    /*hvis min mus' x position er imellem 1/3 og 3/3 af canvaset danner den et rectangel der*/
  } else {
    rect((width * 2) / 3, 0, width / 3, height);
    /*hvis min mus' x position er på den sidste 1/3 af canvaset danner den et rectangel der*/
  }
}
