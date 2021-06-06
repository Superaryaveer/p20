var mouse;
var cat;
var bgImg;
function preload() {
 catimg1 = loadAnimation("cat1.png");
 bgImg = loadAnimation("garden.png");
 mouse1 = loadAnimation("mouse1.png");
 catimg2 = loadAnimation("cat2.png,cat3.png");
 mouseimg2 = loadAnimation("mouse2.png,mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here




}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouseWidth)/2){
      cat.addAnimation("catRunning",catimg2);
      cat.changeAnimation("catRunning");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;
  }


}
