var canvas = "";
var canvasContext = "";
var paddleY = 50;
var ballX = 50;
var ballSpeed = 10;
var paddleSpeed = 20;

window.onload = function(){
var fps = 30;

// runs draw every x milliseconds
setInterval(draw, 1000/fps);
setInterval(move, 1000/fps);

draw();
move();
}
function draw(){
    // used to reference the gamCanvas element in the html code
    canvas = document.getElementById("gameCanvas");
    canvasContext =canvas.getContext("2d");
    
    // sets colour and size of canvas
    drawRect(0,0,canvas.width,canvas.height, "black");

    // creates the paddle of specified size and colour
    drawRect(1,paddleY,10,120,"white");

    // creates the ball of specified size and colour
    drawRect(ballX,100,10,10,"red");
}

function drawRect(leftX,topY, width,height, colour){
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(leftX,topY, width,height);
    
}

// function which handles all the movement stuff
function move(){

// bounces ball off the sides
ballX += ballSpeed;
    if(ballX >= canvas.width){
        ballSpeed = -ballSpeed;
    }
    else if(ballX <= 0){
        ballSpeed = -ballSpeed;
    }

// bounces paddle off the sides     
paddleY += paddleSpeed;
if(paddleY >= (canvas.height)-120){ //minusing the height of the paddle
        paddleSpeed = -paddleSpeed;
    }
    else if(paddleY <= 0){
        paddleSpeed = -paddleSpeed;
    }
}