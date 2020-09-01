
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime,ground;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  background(120);
  
  
  survivalTime=0; 
  monkey=createSprite(50,200,20,20)
monkey.addAnimation("running",monkey_running);
 monkey.scale=0.125;
  
  ground=createSprite(200,350,400,10);
  ground.shapeColor="white";
  ground.velocityX=-4
   ground.x=ground.width/2;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
}


function draw() {
  background(200);
   text("Survival Time:"+ survivalTime, 100,50);
   ground.x = ground.width /2;
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if (keyDown("space")&&monkey.y>300){
    monkey.velocityY=-20
  }
  
  
  spawnbanana();
  spawnobstacles();
  
  if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
       bananaGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        bananaGroup.setLifetimeEach(-1);
    }
  survivalTime=survivalTime+(Math.round(frameCount/100));
drawSprites();
}
function spawnbanana(){
if (frameCount%80===0){
banana=createSprite(200,325,20,20);
  banana.y=Math.round(random(120,200));
  
  banana.addImage(bananaImage);
 banana.scale=0.05;
  
  banana.velocityX=-5
  banana.lifetime=150;
  
  bananaGroup.add(banana);
}
}
function spawnobstacles(){
  if (frameCount%300===0){
obstacle=createSprite(600,325,20,20);
   obstacle.x=Math.round(random(120,300));
    
   obstacle.scale=0.125;
   obstacle.velocityX=-5
    
  obstacle.addImage(obstacleImage);
    obstacleGroup.add(obstacle);
  }
}