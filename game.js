var canvas = "";
var canvasContext = "";

window.onload = function(){
console.log("hello world");

// sets colour and size of canvas
canvas = document.getElementById("gameCanvas");
canvasContext =canvas.getContext("2d");
canvasContext.fillStyle = "black";
canvasContext.fillRect(0,0,canvas.width,canvas.height);

// creates a block of specified size
canvasContext.fillStyle = "white";
canvasContext.fillRect(1,220,10,120);
}

