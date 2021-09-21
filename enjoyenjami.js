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
var scoreright=0;
var scoreleft=0;
var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;
function gotposes(results){
if(results.length>0){
console.log(results);
rightwristx=results[0].poses.rightWrist.x;
rightwristy=results[0].poses.rightWrist.y;
lefttwristx=results[0].poses.leftWrist.x;
leftwristy=results[0].poses.rightWrist.y;
}
}