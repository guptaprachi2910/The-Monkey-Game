var b, bImage
var monkey , monkey_running
var banana ,bananaImage 
var obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime
var ground , invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 bImage=loadImage("forest.jpg")
  
}

function setup() {
  createCanvas(400,400)
  
  
  b= createSprite(200,175,400,400)
  b.addImage(bImage)
  b.scale= 2.5
  
   monkey=createSprite(80,315,10,10) 
  monkey.addAnimation("moving",monkey_running)
  monkey.scale= 0.15
  
  
  ground= createSprite(400,360,900,10)
  ground.velocityX=-4
  
  invisibleGround = createSprite(200,380,400,10);
  invisibleGround.visible = false; 
  
  FoodGroup = new Group();
  
  survivalTime=0
}


function draw() {
 

  stroke("black");
   textSize(78);
  fill("black")
  text("Survival Time "+ survivalTime, 200,50);
    survivalTime = survivalTime + Math.round(getFrameRate()/60)
  
 ground.x=ground.width/2
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
  
   
  
 //survivalTime=Math.ceil(frameCount/frameRate()) 
 //text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites()
  
  
  food()
  obstacles()
  
  
}

function food(){
 
  if(frameCount%80===0){
   
   banana= createSprite(350,50,20,20)
   banana.y=random(120,200)
  
   banana.addImage(bananaImage)
   banana.scale=0.1
   
   banana.lifetime=100
   banana.velocityX= -4
   
   monkey.depth=banana.depth
   monkey.depth=banana.depth+1
  FoodGroup.add(banana);
 }  
}

function obstacles(){
  
  if(frameCount%300===0){
  
  obstacle= createSprite(370,330,20,20)
  
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.15
    
  obstacle.lifetime=200
  obstacle.velocityX = -3
  
    }
  
}


