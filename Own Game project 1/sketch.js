var net;
var resources;
var ground;
var GameState = 0; 
var score;

function preload() {


}


function setup() {
  createCanvas(800,800);

  net = createSprite(mouseX,500, 50, 50);

}

function draw() {
  background("Images/Background image.jpg");  

  if (gameState == 0){

  }
  if (gameState == 1){

  }
  if (gameState == 2){
    
  }
  if (gameState == 3){
    
  }
  if (gameState == 4){
    
  }
  




  drawSprites();
}

function spawnResource(){
  if(frameCount%40===0){
    var resource=createSprite(400,800,20,20);
    resource.velocityY=-10
    resource.x=rand 
    rand=Math.round(random(25,775))
  }

}









/* Game Story:
Many space companys and orgnizations set out to claim resources 
through out the solor system. Your company joins the race, your job is to collect 
resources on the planet so you can reach the next planet and beat the competeters  

   Pc and NPC 
the character collecting the resources is the Pc, the other companys are the NPC's.*/
