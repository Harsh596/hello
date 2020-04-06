const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var engine, world;
var block,rBlock,bh;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var block_options={
    isStatic : true
  }

  block = Bodies.rectangle(200,130,200,20,block_options)
  World.add(world,block);

  var rBlock_options = {
  frictionAir:0.005,
  density : 10
  }
  rBlock  = Bodies.circle(220,200,20,rBlock_options);
  World.add(world,rBlock);
  
  // String of the pendulum
  var options = {
  bodyA : rBlock,
  bodyB : block,
  damping: 0.05,
  stiffness: 2.0,
  length : 130
  }
  var string = Constraint.create(options);
  World.add(world,string);

  fill("white");
}
function draw() {
  background(0); 
  Engine.update(engine);

  text("   1. PRESS & HOLD SPACE KEY TO SET THE PENDULUM POSITION. " , 0, 50);
  
  text("   2. RELEASE SPACE KEY TO SEE OSCILLATION.", 0,65);
  
  fill (195,245,150);
  rectMode(CENTER);
  rect(block.position.x,block.position.y,200,20);

  fill("green");
  ellipseMode(RADIUS);
  ellipse(rBlock.position.x,rBlock.position.y,20);

  strokeWeight(5);
  stroke(100,250,225);
  line(rBlock.position.x,rBlock.position.y,block.position.x,block.position.y)

  if(keyDown("space")){
    //Display the text direction "Set the Pendulum position by placing the mouse at desired set position and then press ctrl"
    rBlock.position.y = mouseY;
    rBlock.position.x = mouseX;
  }
}