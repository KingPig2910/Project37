var jimmy, jimmyLeft, jimmyRight;
var smallPile1, smallPile2, smallPile3, smallImage;
var bigPile1, bigPile2, bigPile3, megaPile1, bigImage;
var back, snowBackground;
var gameState = 0;
var score = 0;



function preload(){
  jimmyLeft = loadAnimation("boyShovelLeft.png");
  jimmyRight = loadAnimation("boyShovelRight.png");
  
  
  smallImage = loadImage("smallSnowPile.png");
  bigImage = loadImage("bigSnowPile.png");
  
  snowBackground = loadImage("snowBackground.png");
  
}

function setup() {
  createCanvas(2500, 500);
  
  
  back = createSprite(0,50,5,5);
  back.addImage("snow", snowBackground);
  
  
  jimmy = createSprite(100,400,20,20);
  jimmy.addAnimation("jimmyLeft", jimmyLeft);
  jimmy.addAnimation("jimmyRight", jimmyRight);
  jimmy.scale = 0.2;
  
  smallPile1 = createSprite(300,450,20,20);
  smallPile1.addImage("smallSnowPile.png", smallImage);
  smallPile1.scale = 0.2;
  
  smallPile2 = createSprite(550,450,20,20);
  smallPile2.addImage("smallSnowPile.png", smallImage);
  smallPile2.scale = 0.2;
  
  smallPile3 = createSprite(800,450,20,20);
  smallPile3.addImage("smallSnowPile.png", smallImage);
  smallPile3.scale = 0.2;
  
  bigPile1 = createSprite(1150,450,20,20);
  bigPile1.addImage("bigSnowPile.png", bigImage);
  bigPile1.scale = 0.3;
  
  bigPile2 = createSprite(1500,450,20,20);
  bigPile2.addImage("bigSnowPile.png", bigImage);
  bigPile2.scale = 0.3;
  
  bigPile3 = createSprite(1850,450,20,20);
  bigPile3.addImage("bigSnowPile.png", bigImage);
  bigPile3.scale = 0.3;
  
  megaPile1 = createSprite(2250,450,20,20);
  megaPile1.addImage("bigSnowPile.png", bigImage);
  megaPile1.scale = 0.7;
  
  
  
}

function draw() {
background("white");
  if(keyDown("s")){
  if(jimmy.isTouching(smallPile1)){
    score = score + 1;
    smallPile1.destroy();
  }
  if(jimmy.isTouching(smallPile2)){
    score = score + 1;
    smallPile2.destroy();
  }
  if(jimmy.isTouching(smallPile3)){
    score = score + 1;
    smallPile3.destroy();
  }
  
    if(jimmy.isTouching(bigPile1)){
    score = score + 3;
    bigPile1.destroy();
  }
  if(jimmy.isTouching(bigPile2)){
    score = score + 3;
    bigPile2.destroy();
  }
  if(jimmy.isTouching(bigPile3)){
    score = score + 3;
    bigPile3.destroy();
  }
  
  if(jimmy.isTouching(megaPile1)){
    score = score + 10;
    megaPile1.destroy();
  }
}

if(gameState === 0){
  
back.velocityX = -1.5;
  if(back.x < 0){
    back.x = 500;
  }
  back.scale = 4;
  if(keyDown("a")){
    jimmy.x = jimmy.x -3;
    jimmy.changeAnimation("jimmyLeft", jimmyLeft);
  }
  if(keyDown("d")){
    jimmy.x = jimmy.x + 20;
    jimmy.changeAnimation("jimmyRight", jimmyRight);
  }  
drawSprites();   
  }
if(score === 22){
  gameState = 1;
}
   
if(gameState === 1){
  textSize(20);
  text("Press R to Shovel Snow Again",2000,250)
  if(keyDown("r")){
    jimmy.x = 100;
    jimmy.y = 400;
    score = 0;
    drawSprites(); 
    gameState = 0;
  }
}
textSize(20);
text("Score : "+ score,270,30);

textSize(20);
text("Score : "+ score,870,30);
  
textSize(20);
text("Score : "+ score,1470,30);
  
textSize(20);
text("Score : "+ score,2070,30);
}
function smallPiles(){
  
}