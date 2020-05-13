const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    mickey = new Mickey(700,320,30,30);
    minnie = new Minnie(400,200,30,30);
}


    function draw(){
        background(255,255,255);
        Engine.update(engine);
        mickey.display();
        minnie.display();
    }