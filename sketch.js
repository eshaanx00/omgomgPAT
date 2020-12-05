//Create variables here
var Foodstock,dog,hdog,database,Food,dog1,foodS
function preload()
{
  //load images here
  dogimg=loadImage("images/dogImg.png")
  hdog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database()
  Foodstock=database.ref('food')
  Foodstock.on("value",readstock)
  dog1=createSprite(200,400)
  dog1.scale=0.3
  dog1.addImage(dogimg)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog1.addImage(hdog)
}
  drawSprites();
  
  //add styles here
  textSize(20)
  fill("black")
  text("FOOD LAFT "+foodS,120,220)
  text("Press Up arroe key to feed dog milk",120,180)

}
function readstock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}



