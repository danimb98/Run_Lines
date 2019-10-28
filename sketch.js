var angle = 0;  //In this variable I initialize the line.
var c = 0;

function setup() {
  createCanvas(400, 400); //This creates a square of 400 x 400.
  angleMode(DEGREES); //This changes the line degrees.
  frameRate(10); //This modifies the speeds at which the lines are created.
  colorMode(HSB); //With this we set the colors. 
  c = random(0,360); //This sets the range of colors.
  print(c); //This shows the color code if we want a specific color.
}

function draw() {
  //background(200);
  if(angle>360){
    angle = 0;
 }
 else{
   angle = angle + 2; 
 }


 fill(random(c,c+50),250,250,0.3);
 noStroke();
 translate(random(0,width),random(0,height));
 rotate(random(-65,35));
 rect(0,0,50,10);
}

