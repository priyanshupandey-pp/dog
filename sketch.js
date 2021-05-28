
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj,groundObject	
var world ,paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	paper = new Paper(200,640,34)
	Engine.run(engine);
	Slingshot = new SlingShot(paper.body,{x:1300, y:250}); 
}


function draw() {
  rectMode(CENTER);
  text(mouseX+","+mouseY,30,45)
  background("red");
 

 
  paper.display();
  groundObject.display();
  dustbinObj.display();
  Slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}


