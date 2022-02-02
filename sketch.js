var groundImg , ground ;

function preload(){

  groundImg = loadImage("background.png") ; 


}

function setup() {
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImg);
 
  ground.velocityX = -1 ; 
}

function draw() {
 
    if(ground.x > 900){
        ground.x = 800
      }

drawSprites () ;

}