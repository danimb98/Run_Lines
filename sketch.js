var angle = 0;
var c = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  frameRate(10);
  colorMode(HSB);
  c = random(0,360);
  print(c);
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

