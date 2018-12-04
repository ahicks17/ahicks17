function setup() {
createCanvas(800,800);
}

function draw() {
if(mouseIsPressed) {
  fill(0);
}else {
  fill(205);
}
ellipse(mouseX,mouseY,80,80);
}