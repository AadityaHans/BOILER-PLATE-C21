var fix_rect ,move_rect
var ball1, ball2, ball3, ball4



function setup() {
  createCanvas(800,800);
  fix_rect=createSprite(400, 180, 50, 50);
  fix_rect.shapeColor="cyan"

  move_rect=createSprite(500, 400,50,50)
  move_rect.shapeColor="green"
  fix_rect.velocityX=2
  fix_rect.velocityY=2
  move_rect.velocityX=2
  move_rect.velocityY=2

  ball1=createSprite(100,50,10,20)
  ball2=createSprite(300,50,10,20)
  ball3=createSprite(500,50,10,20)
  ball4=createSprite(700,50,10,20)
  
  ball1.shapeColor='purple'
  ball2.shapeColor='purple'
  ball3.shapeColor='purple'
  ball4.shapeColor='purple'

  ball4.velocityX=-2
  ball4.velocityY=-2






}

function draw() {
  background(0,0,0);  
  move_rect.x=World.mouseX
  move_rect.y=World.mouseY

 if( isTouching(move_rect, ball2)){
  ball2.shapeColor="red"
  move_rect.shapeColor="red"


 }
 else{
  ball2.shapeColor="purple"
  move_rect.shapeColor="green"
 }
  
bounceOff(move_rect, ball4)



  drawSprites();
}

