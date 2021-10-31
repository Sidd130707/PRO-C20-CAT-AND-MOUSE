var background;
var backgroundimg;
var cat ,catimg;
var rat ,ratimg;

function preload() {
    //load the images here
    backgroundimg=loadImage("garden.png");
    catimg=loadAnimation("cat1.png,cat2.png,cat3.png,cat4.png");
     ratimg=loadAnimation("mouse2.png,mouse3.png,mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background=createSprite(200,300,1000,1000);
    background.addimage("background",backgoundimg);

    cat=createSprite(200,200,50,50);
     cat.addAnimation("catimg",running);
}

function draw() {
     background(255);
    //Write condition here to evalute if tom and jerry collide
   
    drawSprites();
}

function keyPressed(){ 
    if(keyCode===LEFT_ARROW){
     cat.velocityX = -5;
     cat.addAnimation("catRunning",catImg2);
     cat.changeAnimation("catRunning");
     Text(mouseX + ',' + mouseY,10,45);
    }
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
  //For moving and changing animation write code here

    }
}
