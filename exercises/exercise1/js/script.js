/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// background
let bg = {
  r:0,
  g:0,
  b:0

};

// shapes
let circle = {
  x:50,
  y:250,
  size: 100,
  fill: 50
};

let rectangle = {
  x: 300,
  y: 250,
  width: 50,
  height: 100,
  fill: 50

};

let square = {
  x: 100,
  y: 250,
  size: 60,
  fill : 50

};




// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
  noStroke();
}

// draw()
//
// Description of draw() goes here.
function draw() {

  // background
  background(bg.r,bg.g,bg.b);



  // circle
  fill(circle.fill);
  ellipse(circle.x,circle.y,circle.size);


  // rectangle
  fill(rectangle.fill);
  rect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);

  // square
  fill(square.fill);
  rect(square.x,square.y,square.size);

}
