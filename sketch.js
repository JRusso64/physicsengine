var x;
function setup() {
  createCanvas(600, 120);
  background("aqua");
  x = 0;
  speed = 3;
}

function draw() {
  background("aqua");
  x = x + speed;
  if (x > width){
    speed *= -1;
  }
  if (x == 0){
    speed *= -1;
  }
  circle(x, 60, 60, 20, 20);
}
