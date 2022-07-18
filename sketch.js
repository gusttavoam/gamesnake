let s;
let scl = 20;

let food;

function setup() {
  createCanvas(900, 600);
  frameRate(10);
  s = new Snake()

  pickLockation()
  
}

function pickLockation(){
  let cols = floor(width/scl);
  let rows = floor(height/scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl)
}

function draw() {
  background(2)

  if(s.eat(food)){
    pickLockation();
  }
  s.death();
  s.update();
  s.show();

  fill(0, 100, 0);
  rect(food.x, food.y, scl, scl)
  
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    s.dir(0, 1)
   }else if(keyCode === RIGHT_ARROW){
    s.dir(1, 0)
  } else if(keyCode === LEFT_ARROW){
    s.dir(-1, 0)
  }
}
