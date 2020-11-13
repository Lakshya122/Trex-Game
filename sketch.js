var trex, trex_running, trex_collided;
var ground, invisibleGround, ground_img;

function preload () {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  ground_img = loadImage ("ground2.png");
}

function setup () {
  createCanvas (400,400);
  
  trex = createSprite(200,380,40,10);
  trex.addAnimation("running", trex_running);
  ground = createSprite(200,380,400,20);
  ground.addImage ("ground", ground_img);
  ground.x = ground.width/2;
}

function draw () {
  background ("Black");
  console.log(trex.y);
  if(keyDown("space")&& trex.y>=327) {
    trex.velocityY = -6;
  }
  trex.velocityY = trex.velocityY + 0.2;
  trex.collide(ground);
  ground.velocityX = -6
  
if(ground.x<0) {
  ground.x = ground.width/2;
}
  drawSprites();
}