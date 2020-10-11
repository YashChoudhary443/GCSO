var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(windowWidth,windowHeight);

  car = createSprite(width-5000, height/2, 50, 50);
  car.shapeColor = "white";

  wall = createSprite(width-100,height/2,60,height/2);
  wall.shapeColor = "black";

  speed = random(55,90);
  weight = random(400,1300);

  deformation = 0.5 * weight * speed * speed / 22500;

}

function draw() {
  background(43, 44, 112);  
  drawSprites();

  car.velocityX = speed;

  console.log(deformation);

  
  fill("cyan");
  textSize(30);
  text("WALL" , wall.x - 30 , wall.y + 220);

  fill("cyan");
  textSize(30);
  text("CAR",car.x - 40,car.y + 70);

  if(wall.x - car.x < (wall.width + car.width)/2){
    car.velocityX = 0;

   if(deformation > 160){
     car.shapeColor = rgb(255, 0, 0);

     fill("red");
     textSize(20);
     text("Oops!! that was LETHAL .This must have killed the passenger.",width/2 - 250,height/2);
    }

   if((deformation < 160) && (deformation > 80)){
     car.shapeColor = rgb(245, 245, 0);

     fill("green");
     textSize(20);
     text("Okay...that was AVERAGE .The passenger must have got some minor injuries.",width/2 - 300,height/2);
    }
    
   if(deformation < 80){
     car.shapeColor = rgb(37, 245, 0);

     fill(rgb(37, 245, 0));
     textSize(20);
     text("That was fine .The passenger is 100% safe.",width/2 - 200,height/2);
   }

  }


}