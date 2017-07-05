var canvas = "";
var canvasContext = "";
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
var paddle1Y = 250;
const PADDLE_HEIGHT = 100;

function mousePosition(event){
    var canvasRect = canvas.getBoundingClientRect(); 
    var outside = document.documentElement;

    var mouseX = event.clientX - canvasRect.left - outside.scrollLeft;
    var mouseY = event.clientY - canvasRect.top - outside.scrollTop;
    
    return {
        x:mouseX,
        y:mouseY
    };
}

window.onload = function(){
        // used to reference the gamCanvas element in the html code
    canvas = document.getElementById("gameCanvas"); //these two lines need to be to be in the onload for it to work
    canvasContext =canvas.getContext("2d");
    
        var fps = 30;
        // runs draw every x milliseconds
            setInterval(function(){
                move();
                draw();
            }, 1000/fps);

    canvas.addEventListener("mousemove",
            function(event){
                    var mousePos = mousePosition(event);
                    paddle1Y = mousePos.y;
            });
}
function draw(){
    
    // sets colour and size of canvas
    drawRect(0,0,canvas.width,canvas.height, "black");

    // creates the paddle of specified size and colour
    drawRect(1,paddle1Y ,10,120,"white");

    // creates the ball of specified size and colour
    drawBall(ballX,ballY,10,0,Math.PI*2,"white",true);// pi*2 makes full circle
}

function drawBall(centerX,centerY,radius,startAngle,endAngle,colour,bool){
    canvasContext.beginPath(); //needs to be before .arc
    canvasContext.arc(centerX,centerY,radius,startAngle,endAngle,colour,bool);
    canvasContext.fillStyle = colour;
    canvasContext.fill();


}
function drawRect(leftX,topY, width,height, colour){
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(leftX,topY, width,height);
    
}

// function which handles all the movement stuff
function move(){
// bounces ball off the sides
ballX += ballSpeedX;
    if(ballX >= canvas.width){
        ballSpeedX = -ballSpeedX;
    }
    else if(ballX <= 0){
        ballSpeedX = -ballSpeedX;
    }

ballY += ballSpeedY;
    if(ballY >= canvas.height){
        ballSpeedY = -ballSpeedY;
    }
    else if(ballY <= 0){
        ballSpeedY = -ballSpeedY;
    }    

}