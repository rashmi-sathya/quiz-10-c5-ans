var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(400, 400);
  
  //create a trex sprite
  trex = createSprite(50,380,20,50);
  trex.addAnimation("running", trex_running);
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //create ground sprite
  ground = createSprite(200,380,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
}

function draw() {
  background(220);
  

  //jumping the trex on space key press
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  //add infinite ground velocity here
  ground.velocityX = -2;
  
  if (ground.x<0){
    ground.x = ground.width/2;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
 
 //stop trex from falling down 
  trex.collide(ground);
  drawSprites();
}