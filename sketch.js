let rotationSpeed = 10000;
let zTranslation;
let starSphereSize;
let moonSize;

var orbitRadius = 300;
var orbitRadius2 = 100;
var angle = 0;
var angle2 = 0;
var speed = 0.001;
var speed2 = 0.03;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  stars = loadImage('assets/nasastar.jpg');
  moon = loadImage('assets/moon.jpg');
  earth = loadImage('assets/earth.jpg');
  sun = loadImage('assets/sun.jpg');
  zTranslation = 100;
}

function draw() {
  starSphereSize = width > height ? width : height
  moonSize = width < height ? width : height;
  background(255);
  orbitControl(1, 1, 0);

  // create the starfield sphere
  push()
  noStroke();
  texture(stars);
  translate(0, 0, zTranslation);
  rotateY(millis() / rotationSpeed);
  sphere(starSphereSize);
  pop();

  // earth position
  let x = orbitRadius * cos(angle);
  let y = orbitRadius * sin(angle);
  // moon position
  let x2 = x + orbitRadius2 * cos(angle2);
  let y2 = y + orbitRadius2 * sin(angle2);

  angle += speed;
  angle2 += speed2;

  // create the sun sphere
  push();
  noStroke();
  translate(0, 0, zTranslation);
  rotateZ(millis() / rotationSpeed * 3);
  texture(sun);
  sphere(moonSize / 10, 24, 24);
  pop();

  pointLight(255, 255, 255, 0, 0, 0);

  // create the earth sphere
  push();
  pointLight(255, 255, 255, 0, 0, 0);
  fill(0);
  noStroke();
  translate(x, y, zTranslation);
  var pi = Math.PI;
  rotateZ(23.44 * pi / 180);
  rotateY(millis() / rotationSpeed);
  texture(earth);
  sphere(moonSize / 30, 24, 24);
  pop();

  // create the moon sphere
  push();
  pointLight(255, 255, 255, 0, 0, 0);
  fill(0);
  noStroke();
  translate(x2, y2, zTranslation);
  rotateY(millis() / rotationSpeed);
  texture(moon);
  sphere(moonSize / 50.9, 24, 24);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}