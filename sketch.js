// P5 STUFF
var socket;
var myFillR, myFillG, myFillB;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	myFillR = floor(random(0,255));
	myFillG = floor(random(0,255));
	myFillB = floor(random(0,255));

	socket.on('ellipse', newEllipse);
	

}

function draw() {


}

function newEllipse(data){
	fill(data.b, data.g, data.r);
	ellipse(data.x, data.y, 40, 40);
	return false;
}

function touchStarted(){
	fill(170);
	ellipse(mouseX, mouseY, 40, 40);
	return false;

}

function touchMoved(){

	console.log('Sending: ' + mouseX + ',' + mouseY)
	var data = {
		x: mouseX, 
		y: mouseY,
		r: myFillR,
		g: myFillG,
		b: myFillB
	}
	socket.emit('ellipse', data);

	fill(myFillB, myFillG, myFillR);
	ellipse(mouseX, mouseY, 40, 40);
	return false;
}


function touchEnded(){
	fill(255);
	ellipse(mouseX, mouseY, 60, 60);
	return false;
}

// function sendEllipse(message){
// 	socket.emit('ellipse', message);
// 	console.log(message);

// }



