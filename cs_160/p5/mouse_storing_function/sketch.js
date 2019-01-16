var num = 60;
var mx = [];
var my = [];

function setup() {
  createCanvas(1000, 500);
  noStroke();
  fill(50, 55, 100);
  for (var i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}
function draw() {
background(0, 0, 255);

var which = frameCount % num;
mx[which] = mouseX;
my[which] = mouseY;

for (var i = 0; i < num; i++) {
  var index = (which+4 + i) % num;
  ellipse(mx[index], my[index], i, i);
}
}