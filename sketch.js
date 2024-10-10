var x;
let width = 600;
let height = 600;
let diameter = 60;
function setup() {
  createCanvas(width, height);
  background("aqua");
  x = diameter;
  speed = 3;
}

function draw() {
  background("aqua");
  x = x + speed;
  if (x > width - (diameter / 2)){
    speed *= -1;
  }
  if (x == diameter / 2){
    speed *= -1;
  }
  circle(x, height/2, diameter);
}
