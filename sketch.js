var bullet,wall;
var speed,weight,thick;

var deform = 0;


function setup() {

  thick = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  createCanvas(1280,620);
  bullet = createSprite(50,275,40,20);
  bullet.shapeColor = "white";
  wall = createSprite(1200,275,thick,height/2);
  bullet.velocityX = speed;
  wall.shapeColor = (rgb = 80,80,80);
}

function draw() {
  background("#333333");  
  drawSprites();
  if(wall.x - bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX = 0;
    deform = 0.5*weight*speed*speed/(thick*thick*thick);
    bullet.x = 50;
    
    if(deform < 10){
      wall.shapeColor = "green";
    }else if(deform > 10){
      wall.shapeColor = "red";
    }


  }
}