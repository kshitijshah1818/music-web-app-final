song1="";
song2="";
function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("song2.mp3.mp3");
}
function setup(){
    canvas=createCanvas(500,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,600);
}
function play(){
    song2.play();
}