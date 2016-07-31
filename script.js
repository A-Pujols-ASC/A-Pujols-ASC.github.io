//Makes pic larger/smaller if mouse is on/off
function setup(){
  createCanvas(100, 100, WEBGL);
}

function draw(){
  background(200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(200, 200, 200);
}
//Enlarges pic the mouse is over
function enlarge(pic){
	pic.style.width="500px";  
	pic.style.height="500px";
}
function minimize(pic){
	pic.style.width="200px";
	pic.style.height="200px";
}
//Changes text size with click (changes back if clicked again)
var press = 0;

function changeSize(){
	var x = document.getElementById("coolbutton");
	if (press== 0) {
		x.style.fontSize = "60px";
		press = 1;
    } else {
    	x.style.fontSize = "38px";
    	press = 0;
    }

};
