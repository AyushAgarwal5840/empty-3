const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2,ground3;
var divider;

function setup() {
  createCanvas(600,650);
  engine = Engine.create();
  world = engine.world;
//bottom ground
ground = new Ground(300,646,700,10)

//left ground
ground1 = new Ground(3,400,10,800);

//right ground
ground2 = new Ground(597,400,10,800);

//top ground
ground3 = new Ground(200,3,800,10);

//white ground
divider = new Division(300,638,700,10);
  

}
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;


function draw() {
  background("black");  
  Engine.update(engine);

//white ground
  divider.display();

//ground
  ground.display();
  ground1.display();
  ground2.display();
  ground3.display();
  
}