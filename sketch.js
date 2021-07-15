var box

function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,80,80)
}

function draw()
 
{
  background(30);
if(keyDown("RIGHT_ARROW")){
box.position.x=box.posistion.x+0.0000000001

}
if(keyDown("LEFT_ARROW")){
box.position.x=box.position.x-0.000000001
}

drawSprites()
}




