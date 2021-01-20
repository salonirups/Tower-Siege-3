const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var sling;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22;
var base1;
var polygon;
var backgroundImg;
var polygon_img;
var ground;
var base2;
var score=0;
function preload()
{
	polygon_img=loadImage("polygon.png");
	getTime()
}


function setup() {
	
	createCanvas(900,400);

	
	engine = Engine.create();
	world = engine.world;
	
	base1=new Ground(450,300,250,10)
	ground=new Ground(450,395,900,10)
	
	
	box1=new Box(352,290,30,40)
	box2=new Box(382,290,30,40)
	box3=new Box(412,290,30,40)
	box4=new Box(442,290,30,40)
	box5=new Box(472,290,30,40)
	box6=new Box(502,290,30,40)
	box7=new Box(532,290,30,40)
	
	
	box8=new Box(382,260,30,40)
	box9=new Box(412,260,30,40)
	box10=new Box(442,260,30,40)
	box11=new Box(472,260,30,40)
	box12=new Box(502,260,30,40)
	
	box13=new Box(412,220,30,40)
	box14=new Box(442,220,30,40)
	box15=new Box(472,220,30,40)
	
	box16=new Box(442,180,30,40)

	box17=new Box(630,195,30,40)
	box18=new Box(660,195,30,40)
	box19=new Box(690,195,30,40)

	base2=new Ground(750,200,100,10)
	
	box20=new Box(615,235,30,40)
	box21=new Box(645,235,30,40)

	box22=new Box(630,275,30,40)

	polygon=Bodies.circle(50,200,20)
	World.add(world,polygon);

	sling=new Slingshot(this.polygon,{x:150,y:180})

	var bg="yellow bg.png"

	Engine.run(engine)

	

}


function draw() {
	if (backgroundImg){
		background(backgroundImg)
	}
	Engine.update(engine)
	text("SCORE : "+score,750,40)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
 
  sling.display();
  base1.display();
  base2.display();
  ground.display();

  box1.score();
	box2.score();
	box3.score();
	box4.score();
	box5.score();
	box6.score();
	box7.score();
	box8.score();
	box9.score();
	box10.score();
	box11.score();
	box12.score();
	box13.score();
	box14.score();
	box15.score();
	box16.score();
	box17.score();
	box18.score();
	box19.score();
	box20.score();
	box21.score();
	box22.score();
  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  
 

}




function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling.attach(polygon);
    }
}

async function getTime(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson=await response.json();
	console.log(responsejson)
	var datetime = responsejson.datetime; 
	var hour = datetime.slice(11,13);
	
	if(hour>=0600 && hour<=1800){
        bg = "yellow bg.jpg";
    }
    else{
        bg = "black bg.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}