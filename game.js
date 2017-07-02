var canvas = "";
var canvasContext = "";
var paddleY = 50;
var ballX = 50;
var ballSpeed = 5;

window.onload = function(){
var fps = 30;

// runs draw every x milliseconds
setInterval(draw, 1000/fps);
setInterval(move, 1000/fps);

draw();
move();

}


function move(){
ballX += ballSpeed;
    
    // Moves paddles 20px 
    paddleY += 20;
    console.log(paddleY);
    if(ballX >= 800){
        ballSpeed = -5;
    }
    else if(ballX <= 0){
        ballSpeed = 5;
    }
}

function draw(){

    // sets colour and size of canvas
    canvas = document.getElementById("gameCanvas");
    canvasContext =canvas.getContext("2d");
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0,0,canvas.width,canvas.height);

    // creates a block of specified size
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(1,paddleY,10,120);

    canvasContext.fillStyle = "red";
    canvasContext.fillRect(ballX,100,10,10);
        

}

function reverse(){
    ballX = ballX - 5;
}