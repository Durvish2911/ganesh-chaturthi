var tts_sqaud="";
function preload() {
    durvish=loadSound("VentilatorMovieyareyaSong.mp3")
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
     var status=song1.isPLaying();
    if(scoreleft>0.2){
       fill("blue")
       stroke("red")
       circle(leftwristx,leftwristy,40);
       song2.stop();
       if(status==false){
           song1.play();
       }
       var status1=song2.isPLaying();
       if(scoreright>0.2){}
        song1.stop();
        if(status1==false){
            song2.play();
        }
    }
}
function as(){
    tts_sqaud.play();
    durvish.setVolume(1);
    durvish.rate(1);
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
scoreleft=results[0].pose.keypoints[9].score;
scoreright=results[0].pose.keypoints[10].score;
rightwristx=results[0].poses.rightWrist.x;
rightwristy=results[0].poses.rightWrist.y;
lefttwristx=results[0].poses.leftWrist.x;
leftwristy=results[0].poses.rightWrist.y;
}
}