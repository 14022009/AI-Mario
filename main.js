function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump = loadSound("jump.wav");
	mariodie = loadSound("mariodie.wav");
	kick = loadSound("kick.wav");
	gameover = loadSound("gameover.wav");
	mariocoin = loadSound("coin.wav");
}

function setup() {
	canvas = createCanvas(1240, 330);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('canvas');
	pose = ml5.poseNet(video, modelloaded);
	pose.on('pose', gotPoses);
}

function draw() {
	game();
}

function modelloaded() {
	console.log("Model has Loaded");
}

function gotPoses(result) {
	if (result.length > 0) {
		noseX = result[0].pose.nose.x;
		noseY = result[0].pose.nose.y;
		console.log(noseX);
		console.log(noseY);
	}
}