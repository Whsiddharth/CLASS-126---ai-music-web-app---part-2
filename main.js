song1="";
song2="";
function preload(){
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}
function draw(){
    image(video,0,0,600,350);
}
function setup(){
    canvas=createCanvas(600,330);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

