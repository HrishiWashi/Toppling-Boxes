const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;


function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    box2 = new Box(220,400,50,50);
    box1 = new Box(200,300,70,70);
    ground = new Ground(400,560,800,15)
}

function draw(){
    background(0);
    Engine.update(engine);
    box2.display();
    box1.display();
    ground.display();
   
}