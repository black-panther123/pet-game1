//Create variables here
var happyDog;
var dog,dogHappy,dog_Img,dog_Img1;
var database;
var foodS;
var foodStock;
var score=20;
function preload()
{
 
  //load images here
 // dog_Img=loadImage("images/dogImg.png")
 // dog_Img1=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
//dog=addImage("dog",dog_Img);

dogHappy=createSprite(250,250,10,10);
//dogHappy=addImage(dog_Img1);

   foodStock=database.ref('Food');
   foodStock.on("value",readStock);

   

}


function draw() {  
background(46,139,86)



if(keyWentDown(UP_ARROW)){

writeStock(foodS)
dog.addImage(dogHappy)

}
 
  //add styles here

  textSize(15);
  fill("white");
  text("Food Remaining:"+score,200,100);




drawSprites();


textSize(15);
  fill("white");
  text("Food Remaining:"+score,200,100);
}

function readStock(data){
  foodS=data.val();

}


function writeStock(x){



if(x<=0){

x=0;

}
else{


  x=x-1
}




database.ref('/').update({
  Food:x
  
 } )

}













