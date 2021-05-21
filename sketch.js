var bg,bg2,form,system,code,security;
var score=0;

function preload() {
 
  
  bg= loadImage("Background.jpg");
  bg2= loadImage("WinningImg.png");
  
}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();
  
  
  
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("RED");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("CORONA DEFEATED",250, 200);
  }

  drawSprites()
}