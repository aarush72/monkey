var monkey, ground
var monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime = 0;
function preload()
{   
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() 
{
  createCanvas(550,450)

  monkey = createSprite(100,410,10,20);
  monkey.addAnimation("runnes",monkey_running);
  monkey.scale=0.1
  
  
  ground = createSprite(5,450,1099,20);
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
}

function draw() 
{
background("cyan");
  bananas();
  obstacles();
  
  edges = createEdgeSprites();

  monkey.collide(ground);
  monkey.collide(edges);
  
  if(keyDown("space"))
    {
      monkey.velocityY = monkey.velocityY-5;
    }
  monkey.velocityY = monkey.velocityY+2;
  
stroke("black")
textSize(20)
fill("black")
survivaltime=Math.ceil(frameCount/frameRate())
text("Survival Time: " +survivaltime,150,50)
  
  drawSprites();
}

function obstacles()
{
  if(World.frameCount%300===0)
    {
   obstacle = createSprite(500,404,10,20);
  obstacle.addImage("block",obstacleImage);
  obstacle.scale=0.2
  obstacle.velocityX=-4;
  obstacle.lifetime=120;
      
     obstacleGroup.add(obstacle);
    } 
}

function bananas()
{
  if(World.frameCount%80===0)
    {
      banana = createSprite(480,30,50,60)
      banana.addImage("food",bananaImage);
      banana.scale=0.1
      banana.y=Math.round(random(120,200));
      banana.velocityX=-4;
      banana.lifetime=120;
      
      FoodGroup.add(banana);
    }
}









