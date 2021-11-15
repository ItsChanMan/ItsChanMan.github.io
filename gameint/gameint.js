var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;


var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var img1;
var img2;
var img3;
var img4;
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup

function preload (){
  img1 = loadImage('forest.jpeg');
  img2 = loadImage('fly.png');
  img3 = loadImage('desert.jpeg');
  img4 = loadImage('house.jpeg');
  
}
  

function draw() {
  background(img1);

  text(("Score: " + score), width/2, 40);
  
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
   
  
 text(("Score: " + score), width/2, 40);
  

}

  if (gameState == 'end'){
    ending();
  }
}
// end draw


function levelOne(){
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>9){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
 // ellipse(ballx, bally, ballSize, ballSize);
 image(img2, ballx , bally, ballSize, ballSize);
  line(ballx+ballSize/2, bally+ballSize/2, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(img3);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>29){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
 //ellipse(ballx, bally, ballSize, ballSize);
 image(img2, ballx , bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(img4);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>65)
    gameState = 'end';
  {


  }
  
//  line(ballx, bally, mouseX, mouseY);
 // ellipse(ballx, bally, ballSize, ballSize);
 image(img2, ballx , bally, ballSize, ballSize);
} // end level thre

function ending(){
   text("You Win", width/2, height/2);

}
