/**
This is a prototype of my game.
Whenever we click the option selected, the item will appear on the screen.
**/


function setup() {

  createCanvas(1000,500);

}

function draw() {

  background(255, 209, 220);
  ellipse(300,80,55,55);
  rect(100, 50, 55, 55);

  // temporary coordinates to determine where to display the shapes
  //coordinates();


  mouseClick();


}

function mousePressed() {

  // display the circle when we click the circle
  if(mouseX > 272 && mouseX < 327) {
    if(mouseY > 50 && mouseY < 108)
    displayCircle();
  }
  else if (mouseX > 100 && mouseX < 156) {
    if(mouseY > 50 && mouseY < 108)
    displaySquare();
  }


}


function displayCircle() {
  ellipse(200,200,55,55);
}

function displaySquare() {
  rect(200,200,55,55);
}

function coordinates() {
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
}
