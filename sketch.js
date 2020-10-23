
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
monkey = createSprite(80, 315, 20, 20);
monkey.addAnimation("moving", monkey_running)  
monkey.scale =0.1  
  
ground = createSprite(400, 350, 900, 10);
ground.velocityX = -4;
console.log(monkey.x);  

FoodGroup = createGroup;
obstacleGroup = createGroup;
}


function draw() {
background(255);
  if(ground.x<0){
    ground.x = ground.width/2;
}
  if(keyDown("space")){
   monkey.velocityY = -12
  }
  monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground);
  bananas();
  obstacles();
  drawSprites();
}
function bananas(){
  if(frameCount%60 === 0){
  banana = createSprite(400, Math.round(random(50,150), 20,20))
  banana.addImage(bananaImage);
  banana.velocityX = -4;
  banana.scale = 0.1;
  banana.lifetime = 400;  
  
}
}
function obstacles(){
 if(frameCount%100 === 0){
   obstacle = createSprite(400,330,20,20);
   obstacle.addImage(obstacleImage)
   obstacle.velocityX = -4;
   obstacle.scale = 0.1;
   obstacle.lifetime = 400;
 }
}



