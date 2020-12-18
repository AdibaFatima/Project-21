var bullet , wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1200, 200, thickness, height/2);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83)

  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall.shapeColor = color(80, 80, 80);

}

function draw() {
  background("black");

  if(isCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var d = 0.5 * weight * speed *speed/(thickness * thickness * thickness);
    if(d>10) {
      wall.shapeColor = "red";
    }
    if(d<10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}

function isCollided(b, w) {
  bulletRightEdge = b.x + b.width;
  wallLeftEdge = w.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true;
  }
  return false;
}