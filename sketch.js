var mRect1, fRect2;

function setup() {
  createCanvas(800,800);
  mRect1 = createSprite(400, 200, 50, 50);
  mRect1.shapeColor = 'green';
  fRect2 = createSprite(200, 200, 80, 80);
  fRect2.shapeColor = 'red';
}

function draw() {
  background('blue'); 
  mRect1.x = World.mouseX;
  mRect1.y = World.mouseY;

  console.log(mRect1.x - fRect2.x);
  if(mRect1.x - fRect2.x <= (mRect1.width/2 + fRect2.width/2) 
  && fRect2.x - mRect1.x <= (mRect1.width/2 + fRect2.width/2)
  && mRect1.y - fRect2.y <= (mRect1.height/2 + fRect2.height/2) 
  && fRect2.y - mRect1.y <= (mRect1.height/2 + fRect2.height/2)){
    mRect1.shapeColor = 'yellow';
    fRect2.shapeColor = 'yellow';
  } 
  else {
    mRect1.shapeColor = 'green';
    fRect2.shapeColor = 'red';
  }
  drawSprites();
}