     

let gif; // Variable to store the loaded GIF

function preload() {
   
    gif = loadImage('heather.gif');
}


function setup() {

    createCanvas(windowWidth, windowHeight);
}
function draw() {



  image(gif, 0, 0, width, height);
 
 
}
