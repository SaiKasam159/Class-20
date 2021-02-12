

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  moving_rect = createSprite(400, 200, 80, 30)
  moving_rect.shapeColor = 'green'
  fixed_rect = createSprite(200, 200, 50, 80)
  fixed_rect.shapeColor = 'lightblue'

  fixed_rect.debug = true

  moving_rect.debug = true

}


function draw() {
  background(0,0,0);  
  
  moving_rect.x = World.mouseX
  moving_rect.y = World.mouseY
  
  //console.log(moving_rect.x - fixed_rect.x) 
  //console.log(moving_rect.y - fixed_rect.y) 
  
  if(moving_rect.x - fixed_rect.x <= fixed_rect.width/2 + moving_rect.width/2
     && moving_rect.y - fixed_rect.y <= fixed_rect.height/2 + moving_rect.height/2
     && fixed_rect.x - moving_rect.x <= fixed_rect.height/2 + moving_rect.height/2
     && fixed_rect.y - moving_rect.y <= fixed_rect.height/2 + moving_rect.height/2){
      console.log('collided')
      fixed_rect.shapeColor = 'red'
      moving_rect.shapeColor = 'red'  

  }
  else{
    
    fixed_rect.shapeColor = 'green'
    moving_rect.shapeColor = 'green'  

  }


  drawSprites();
}

