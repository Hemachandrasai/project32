const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;

var  backgroundImg;
var blower;
 var isGameOver = false;



function preload(){
  backgroundImg = loadImage("background.jpg");
  airMouthBlower = loadImage("blower1.png") ;
  pipe= loadImage("blowe2.png");
}


function setup() {
 canvas= createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(370,200,40,40);
  blower = new Blowerpipe(220,450,200,20);
  mouthblower = new BlowerMouth(370,400,120,120)
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
fill("blue");
  button = createButton("CLICK TO BLOW")
  button.position(width/2-120,height-80);
  button.mousePressed(blow);

  ball.show();
  
 
  image(airMouthBlower,245,335,180,180);
  image(pipe,108,360,150,180);

 
  imageMode(CENTER);
  drawSprites();
}
function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:-0.10})
}
