var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edge1, edge2, edge3, edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(95,580,190,40);
    surface1.shapeColor = "red";

    surface2 = createSprite(300,580,190,40);
    surface2.shapeColor = "green";

    surface3 = createSprite(505,580,190,40);
    surface3.shapeColor = "blue";

    surface4 = createSprite(710,580,190,40);
    surface4.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(random(50,750),200,50,50);
    box.shapeColor = "white";
    box.velocityX = 8;
    box.velocityY = 8;

    
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
    edge1 = createSprite(0,300,1,600);
    edge1.visible = false;

    edge2 = createSprite(800,300,1,600);
    edge2.visible = false;

    edge3 = createSprite(400,0,800,1);
    edge3.visible = false;

    edge4 = createSprite(400,600,800,1);
    edge4.visible = false;

    box.bounceOff(edge1);
    box.bounceOff(edge2);
    box.bounceOff(edge3);
    box.bounceOff(edge4);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)) {
        box.shapeColor = "green";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)) {
        box.shapeColor = "blue";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)) {
        box.shapeColor = "yellow";
    }

    drawSprites();
}
