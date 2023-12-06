noseX = 0;
noseY = 0;
function preload() {
narizDePalhaço = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}
function setup() {
    canvas = createCanvas(300, 300);
    //canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('modeloiniciado');
    window.alert("modelo nao carregado😭😑");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 15;
        noseY = results[0].pose.nose.y - 15;
        
        console.log("nariz x" + noseX);
        console.log("nariz y" + noseY);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);

//fill("red");
//stroke("red");
//circle(noseX, noseY, 20);
image(narizDePalhaço, noseX, noseY, 30, 30);
}

function tirarFoto() {
    save('minhaFoto.png');
}