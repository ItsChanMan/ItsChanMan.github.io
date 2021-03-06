var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var initials ='cc'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background


function preload() {
//preload() runs once, it may make you wait
 img = loadImage('concert.jpeg');  // cat.jpg needs to be next to this .js file
 img2 = loadImage('rapper.png');
 img3 = loadImage('thecrowd.png');
 img4 = loadImage('strobelights.png');
 img5 = loadImage('smoke.png');
 img6 = loadImage('flame.png');
 img7 = loadImage('cactus.png');
 img8 = loadImage('gate.png');
// you can link to an image on your github account
//img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == 'l' ) {  // first tool
   
    stroke(01);
   line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'm') { // second tool

    stroke(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'p') { // third tool

    stroke(300, 100, 0, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'o') {

//    stroke(0, 0, 255);
 //   line(mouseX, mouseY, pmouseX, pmouseY);
//  } else if (key == '5') { // this tool calls a function
//    stroke(0, 0, 255);
 //   testbox(20, 20, 200);
 //   testbox(200, 20, 20);
    
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == '1') { // g places the image we pre-loaded
    image(img, mouseX-400, mouseY-200, 700, 400);
    
  }
  else if (toolChoice == 'g' || toolChoice == '2') { // g places the image we pre-loaded
    image(img2, mouseX-50, mouseY-50, 100, 100);
    
  }
    else if (toolChoice == 'g' || toolChoice == '3') { // g places the image we pre-loaded
    image(img3, mouseX-50, mouseY-50, 400, 200);
    
  }
     else if (toolChoice == 'g' || toolChoice == '4') { // g places the image we pre-loaded
    image(img4, mouseX-200, mouseY-0, 400, 200);
    
  }
  else if (toolChoice == 'g' || toolChoice == '5') { // g places the image we pre-loaded
    image(img5, mouseX-200, mouseY-0, 100, 200);
    
  }
   else if (toolChoice == 'g' || toolChoice == '6') { // g places the image we pre-loaded
    image(img6, mouseX-20, mouseY-200, 100, 200);
    
  }
   else if (toolChoice == 'g' || toolChoice == '7') { // g places the image we pre-loaded
    image(img7, mouseX-0, mouseY-0, 200, 200);
    
  }
     else if (toolChoice == 'g' || toolChoice == '8') { // g places the image we pre-loaded
    image(img8, mouseX-0, mouseY-0, 200, 100);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
