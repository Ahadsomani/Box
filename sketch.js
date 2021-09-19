var box 
function setup() {
  createCanvas(400,400);
  box=createSprite (150,250,13,30)
  box.shapeColor="red"
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x= box.position.x+5}
  if(keyIsDown(LEFT_ARROW)){
    box.position.x-=5}
    if(keyIsDown(UP_ARROW)){
      box.position.y-=5}
      if(keyIsDown(DOWN_ARROW)){
        box.position.y+=5}

drawSprites()
}




