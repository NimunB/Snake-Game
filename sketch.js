// Nimun Bajwa
// January 31st, 2019
// Guidance from: https://youtu.be/AaGK-fj-BAM
//Snake Game

var s; //s means snake
var scl = 20; //scl means scale

var food; 


function setup() {
  // put setup code here
    createCanvas(600, 600);
    s = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

/*
function mousePressed() {
    s.total++;
}
*/

function draw() {
  // put drawing code here
  background(51);
    
    if (s.eat(food)){
      pickLocation();
  }
    
  s.death();
  s.update();
  s.show();
    

  fill (255, 0, 178) //food color
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	}
	else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	}
	else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	}
	else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	}
}

