var x = 0, y = 0, z = 0;
var THETAX=0,THETAY=0;
let landObj=Array(1000).fill({
    hadness:5,
    x:0,
    y:0,
    z:0
});

function setup() {
    createCanvas(document.body.clientWidth, document.body.clientHeight, WEBGL);
}

function draw() {
    move();
    Ground();
    object();
}

function object() {
    rotateX(THETAX);
    rotateY(THETAY)
    translate(x, y, z);
    land();
    translate(-x, -y, -z);
    rotateY(-THETAY)
    rotateX(-THETAX);
}

function Ground() {
    background(200);
}

function keyTyped() {
}

function move() {
    if (keyIsPressed) {
        if (key == 'w') {
            z=z+5;
        }
        if (key == 's') {
            z=z-5;
        }
        if (key == 'd') {
            x=x-5;
        }
        if (key == 'a') {
            x=x+5;
        }
        if(keyCode==UP_ARROW){
            THETAX+=0.02;
        }
        if(keyCode==DOWN_ARROW){
            THETAX-=0.02;
        }
        if(keyCode==LEFT_ARROW){
            THETAY+=0.02;
        }
        if(keyCode==RIGHT_ARROW){
            THETAY-=0.02;
        }
    }
}

function land(){
    box(100);
}