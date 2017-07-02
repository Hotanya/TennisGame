var canvas = "";
var canvasContext = "";
var paddleY = 50;
var ballX = 50;

window.onload = function(){
console.log("hello world");

// runs drawEverything every x milliseconds
setInterval(drawEverything, 50);

drawEverything();
drawEverything();
drawEverything();

}


function drawEverything(){

    ballX += 5;
    
    // Moves paddles 20px 
    paddleY += 20;
    console.log(paddleY);

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
    ballX -= 5;
}