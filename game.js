var canvas = "";
var canvasContext = "";
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 4;
var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;
var p1Score = 0;
var p2Score = 0;

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

function reset(){
    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}

function paddle2Movement(){
    var paddle2YCenter = paddle2Y + (PADDLE_HEIGHT/2);
    if(paddle2YCenter < ballY-35){
        paddle2Y += 10;
    }
    else if(paddle2YCenter > ballY+35){
        paddle2Y -= 10;
    }
}

// function which handles all the movement stuff
function move(){ // bounces ball off the sides
    
paddle2Movement(); 

ballX += ballSpeedX;
    
    if(ballX <= 0){
        if(ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT){ 
        ballSpeedX = -ballSpeedX; //deflects the ball off the paddle           
        }
        else{
            reset();
            p2Score += 1;
        }
    }

    else if(ballX >= canvas.width){
        if(ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT){ 
        ballSpeedX = -ballSpeedX;//deflects the ball off the paddle            
        }
        else{
            reset();
            p1Score += 1;
        }
    }
ballY += ballSpeedY;
    if(ballY >= canvas.height){
        ballSpeedY = -ballSpeedY;
    }
    else if(ballY <= 0){
        ballSpeedY = -ballSpeedY;
    }    

}

function draw(){
    
    // sets colour and size of canvas
    drawRect(0,0,canvas.width,canvas.height, "black");

    // creates the paddle of specified size and colour
    drawRect(1,paddle1Y ,PADDLE_THICKNESS,PADDLE_HEIGHT,"white");

    // creates the paddle of specified size and colour
    drawRect(canvas.width-11,paddle2Y ,PADDLE_THICKNESS,PADDLE_HEIGHT,"white");

    // creates the ball of specified size and colour
    drawBall(ballX,ballY,10,0,Math.PI*2,"white",true);// pi*2 makes full circle

    canvasContext.fillText(p1Score,100,100);
    canvasContext.fillText(p2Score,200,100);
    
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
