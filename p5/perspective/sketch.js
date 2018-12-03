var pg;
function setup() {
  createCanvas(400, 400, WEBGL);
  var fov = 60 / 180 * PI;
  var cameraZ = height / 2.0 / tan(fov / 2.0);
  perspective(60 / 180 * PI, width / height, cameraZ * 0.1, cameraZ * 10);
  pg = createGraphics(80,40);
  pg.textSize(100);
}
function draw() {
  background(255, 204, 0);
  orbitControl();
  for (var i = -1; i < 2; i++) {
    for (var j = -2; j < 3; j++) {
      push();
      translate(i * 200, 0, j * 200);
      
      box(80, 40, 40);
      pop();
    }
  }
}