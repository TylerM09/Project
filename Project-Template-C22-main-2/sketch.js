const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1, ball2, ball3, ball4
var rope1, rope2, rope3, rope4
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={

		isStatic:false,
		restitution= .4,
		friction= .2,
		density= .8,
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(200, 100, 5, ball_options)

	World.add(world, ball1)

	ball2 = Bodies.circle(150, 100, 5, ball_options)

	World.add(world, ball2)
	
	ball3 = Bodies.circle(100, 100, 5, ball_options)

	World.add(world, ball3)

	ball4 = Bodies.circle(250, 100, 5, ball_options)

	World.add(world, ball4)

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

  ellispe(ball1.position.x, ball1.position.y, 40, 40)
  ellispe(ball2.position.x, ball2.position.y, 40, 40)
  ellispe(ball3.position.x, ball3.position.y, 40, 40)
  ellispe(ball4.position.x, ball4.position.y, 40, 40)

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
