const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,a
var ground





function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var b={
    restitution:0.5
  }
  a=Bodies.circle(100,100,40,b);
  World.add(world,a);
  var b={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,10,b);
  
  World.add(world,ground);
}

function draw() {
  background('cyan');  
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(a.position.x,a.position.y,40,40);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)
  drawSprites();
}