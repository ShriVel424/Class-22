//the 3 physics bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//the variables
var engine;
var world;
var ball;
var ball_options;
var ground;
var ground_options;

function setup() {
  createCanvas(800,400);
  //create engine
  engine = Engine.create();
  //force of ball bounce
  ball_options = {
    restitution: 2.0
  }
  //ground with no gravity is static
  ground_options = {
    isStatic: true
  }
  //create world
  world = engine.world;
  //put ball in Bodies group and add it to World group
  ball = Bodies.rectangle(400,200,30,30,ball_options);
  World.add(world,ball);
  //console
  console.log(ball);
  //put ground in Bodies group and add it to World group
  ground = Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);
}

function draw() {
  background("black"); 
  //engine
  Engine.update(engine); 
  //color
  fill ("red");
  //ball in center of canvas
  rectMode(CENTER);
  //ball dimensions
  rect(ball.position.x,ball.position.y,30,30);
  //ground in center of canvas
  rectMode(CENTER);
  //ground dimensions
  rect(ground.position.x,ground.position.y,800,20);
}