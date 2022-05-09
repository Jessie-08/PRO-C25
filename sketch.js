
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
//var paper, ground,bin;


function preload()
{
	bg = loadImage("bg.png");
}

function setup() {
	var canvas = createCanvas(1365, 653);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(90,120,70);
 
  ground = new Ground(683,603,1365,20);

	bin = new Dustbin(1000,620);
	
 Engine.run(engine);
 }


function draw() {

  background(bg);
  Engine.update(engine);
  
  paper.display();
  ground.display();
  bin.display();

drawSprites();

 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:128,y:-128});
  }
}



