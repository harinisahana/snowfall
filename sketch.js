const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var women;
var snowfall = [];
var womenImg;
var engine, world;


function preload(){
  bg = loadImage("snow2.jpg");
  womenImg = loadImage("womenwalking.jpg");

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
 women =  createSprite(100, 320, 50, 50);
 women.addImage(womenImg);
 women.scale = 0.1;
 

}

function draw() {
  background(bg); 
  
  Engine.update(engine);
if(frameCount% 30 === 0){
  for( var j = 75 ; j<= width; j = j+50 ){
    snowfall.push(new Snow(random(10,width-10),10));

  }
}
for( var j = 0 ; j< snowfall.length; j++){
  snowfall[j].display();

}
  drawSprites();
}