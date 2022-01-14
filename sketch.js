function preload(){
   birdImage = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
   backgroundImage = loadImage("bg.png")
   smashImage =loadAnimation("smash1.png","smash2.png","smash3.png","smash4.png")
}
var ground
function setup() {
    createCanvas(1000, 600);
    ground = createSprite(300,300,600,10);
    ground.addImage("bg",backgroundImage);
    ground.velocityX = -4
    bird = createSprite(70,70,20,20);
    bird.addAnimation("flying",birdImage);
    bird.scale=0.5
   
   
}
  function draw() {
    background(50,50,50);
   


    if(ground.x<0){
        ground.x = ground.width/2;
    }
    if(keyDown(UP_ARROW)){
        bird.velocityY = -10
    }
    bird.velocityY+=0.5
  
    
    drawSprites();
}