var wall, thickness;
var bullet, speed, wieght;
var bullet, damage;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
  bullet = createSprite(50, 200, 20, 50);
  wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255);  
  bullet.velocityX = speed;
  


  if (wall.x - bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    dagame = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if (damage > 10){
      bullet.shapeColor = color(255,0,0);
    }

    if (damage < 10){
      bullet.shapeColor = color(0,250,0);
    }
  }

  drawSprites();
}