
// let randonNumber;

function setup(){
    createCanvas(windowWidth, windowHeight);
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
  }



function draw() {
    //background(0);
    noFill();
    stroke(0);
    strokeWeight(4);
    circle(width/2,height/2,random(800));
    

}

