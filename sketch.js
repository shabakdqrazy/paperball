
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,800,20);
log1 = new Log (550,640,20,100);
log2 = new Log (700,640,20,100);
log3 = new Log (625,680,130,20);
paperBall = new Paper(100,640,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
  log1.display();
  log2.display();
  log3.display();
  paperBall.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:50,y:-85})

  }
}



