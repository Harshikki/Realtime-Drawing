noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX  = 0;

function setup(){
    canvas = createCanvas(350, 350);
    canvas.position(900, 150);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.position(200, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResults);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResults(results){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
}

function draw(){
    background('#969A97');
    document.getElementById("sqaure_side").innerHTML = "Width and height of the square will be: " +difference+ " px";
    fill('#fc0390');
    stroke('#fc0390');
    square(noseX, noseY, difference);

}