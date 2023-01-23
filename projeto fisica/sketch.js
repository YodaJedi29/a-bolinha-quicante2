
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pula;
var angle = 90;




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.015
  }

  var ball2_options = {
    restitution: 0.00,
    frictionAir:0.015
  }
  

  
  
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ground2 = Bodies.rectangle(200,200,100,20,ground_options);
  World.add(world,ground2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ball2 = Bodies.circle(50,10,20,ball2_options);
  World.add(world,ball2);
  
  pula = createImg("up.png")
  pula.position(350,30);
  pula.size(50,50);
  pula.mouseClicked(empurrar);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine); 

  
  
 

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,10);
  rect(ground.position.x,ground.position.y,500,20);

  
Matter.Body.rotate(ground2,angle)
push()
translate(ground2.position.X,ground2.position.y);
rotate(angle);
rect(0,0,200,20);
pop()

angle += 0.1;

console.log(ground.position.y);

  
  
}

function empurrar()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}