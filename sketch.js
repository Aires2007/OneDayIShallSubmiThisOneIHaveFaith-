var cat;
var catAnimation;
var catImg1;
var catImg2;
var mouse;
var mouseImg1;
var mouseImg2;
var mouseAnimation;
var bckImg; 

function preload() {


bckImg = loadImage("images/garden.png")
catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
mouseAnimation = loadAnimation("images/mouse2.png", "images/mouse2.png");
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);


    cat = createSprite(800,700,20,20);
    cat.addAnimation("Catchilling", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200,700,20,20);
    mouse.addAnimation("mouseChilling", mouseImg1);
    mouse.scale = 0.2;

}

function draw() {

    background(bckImg);


    if(cat.x - mouse.x < mouse.width/2 + cat.width/2 ){
        cat.addAnimation("final cat",catImg2)
        cat.changeAnimation("final cat");
        mouse.addAnimation("final mouse",mouseImg2);
        mouse.changeAnimation("final mouse");
        cat.velocityX = 0
         }


  
    drawSprites();
}

function keyPressed(){

 if (keyCode === LEFT_ARROW) {
     mouse.addAnimation("mouseTaunting", mouseAnimation);
     mouse.changeAnimation("mouseTaunting")
     cat.addAnimation("catRunning", catAnimation);
     cat.changeAnimation("catRunning")
     cat.velocityX = -8
 }  
}