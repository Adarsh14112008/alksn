
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  bob1,bob2,bob3,bob4,bob5,stand1,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1=new stand(400,200,500,30)
    bob1=new bob(400,500)
	bob2=new bob(300,500)
	bob3=new bob(200,500)
	bob4=new bob(500,500)
	bob5=new bob(600,500)
  rope1=new rope(bob1.body,stand1.body)
  rope2=new rope(bob2.body,stand1.body,-this.bobDiameter*2,0)
  rope3=new rope(bob3.body,stand1.body,-this.bobDiameter*2,0)
  rope4=new rope(bob4.body,stand1.body,-this.bobDiameter*2,0)
  rope5=new rope(bob5.body,stand1.body,-this.bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  stand1.display();
  bob1 .display();
  bob2 .display();
  bob3 .display();
  bob4 .display();
  bob5 .display();
  
  
  drawSprites();
 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-10,y:10})
	
  }
}