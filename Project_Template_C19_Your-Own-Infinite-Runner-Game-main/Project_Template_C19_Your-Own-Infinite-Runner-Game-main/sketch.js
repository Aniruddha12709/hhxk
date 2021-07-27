  var coin,car,road,sword,doublecoin,
  var  coins = 0;

  //Game States
  var PLAY=1;
  var END =0;
  var gameState=1;

    function preload(){
    wayImg = loadImage("Road.png");
    carImg =loadImage("car.png");
    coinimg = loadImage("coin.png");
    swordimg = loadImage("sword.png");
    doublecoin = loadImage("doublecoin.png");
}

function setup() {

    createCanvas(400,600);
    //Moving background
    way = createSprite(200,200);
    way.addImage(wayImg);
    way.velocityY = 4;

    // create car
    car = createSprite(70,580,20,20);
    car.addAnimation("CarRunning",carImg);
    car.scale =0.09;

    coinG=new Group();
    swordsGroup=new Group();
    doublecoinsG = new Group();

}



function draw() {
    if(gameState ===PLAY){
        background(0);
        car.x = World.mouseX;

        edges= createEdgeSprites();
        car.collide(edges);

        //code to reset the background
        if(Path.y > 400){
            Path.y = height/2;
        
        }

     createCoin();
     createDoublecoins();
     createSword();

     if (CoinG.isTouching(car)){
         coinG.destroyEach();
         coinCollection=coinCollection+50;

     if(doublecoinG.isTouching(car)){
         doublecoinG.destroyEach();
         doublecoinCollection=doublecoinCollection+500;


         if(swordsGroup.isTouching(car)){
             gameState = END;

             car.addImage("CarRunning",endImg);
             car.x=200;
             car.y=300;
             car.scale= 0.09;

         coinG.destroyEach();
         doublecoinsG.destroyEach();
         swordsGroup.destroyEach();
        
         coinG.setVelocityYEach(0);
         doublecoinsG.setVelocityYEach(0);
         swordsGroup.setVelocityYEach(0);
         }
         }
         else if (coinsG.isTouching(car)){
             coinsG.destroyEach();


         }else if(doublecoinsG.isTouching(car)) {
             doublecoinsG.destroyEach();






         }
         drawSprites();
         textSize(20);
         fill(255);
         text("Coins:"+ coinsCollection,200,50);
     }

    }
    function createCoin() {
        if (World.frameCount % 200 == 0) {
        var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
        coin.addImage(coinImg);
        coin.scale=0.13;
        coin.velocityY = 3;
        coin.lifetime = 150;
        coinG.add(coin);
        }
      }
      
      function createDoublecoins() {
        if (World.frameCount % 320 == 0) {
        var doublecoins = createSprite(Math.round(random(50, 350),40, 10, 10));
        doublecoins.addImage(doublecoinsImg);
        doublecoins.scale=0.03;
        doublecoins.velocityY = 3;
        doublecoins.lifetime = 150;
        doublecoinsG.add(doublecoinss);
      }

      }
      
      
      function createSword(){
        if (World.frameCount % 530 == 0) {
        var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
        sword.addImage(swordImg);
        sword.scale=0.1;
        sword.velocityY = 3;
        sword.lifetime = 150;
        swordGroup.add(sword);
        }
      }
}