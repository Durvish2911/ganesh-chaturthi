var tts_sqaud="";
function preload() {
    durvish=loadSound("music.mp3.icloud")
}
function setup() {
    canvas=createCanvas(550,550);
    canvas.position(400,250);
    video=createCapture(VIDEO);
    video.hide();
    hp=ml5.poseNet(video,optimus);
    hp.one("pose",gotposes);
}
function optimus(){
    console.log("model is loaded");
}
function draw(){
    image(video,0,0,550,550);
}
function as(){
    tts_sqaud.play();
}