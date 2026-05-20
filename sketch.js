// let CanvasWidth = innerWidth;
// let CanvasHeight = innerHeight;
// let TotalSegments = 6;
// let SegmentAngle = 360 / TotalSegments;

// function setup() {
//   createCanvas(CanvasWidth, CanvasHeight);
//   angleMode(DEGREES); //calculating angle in degrees
//   noLoop();
// }
// function draw() {
//   background("aqua");
//   for (i = 0; i < TotalSegments; i++) {
//     let StartAngle = i * SegmentAngle;
//     let StopAngle = (i + 1) * SegmentAngle;
//     arc(
//       CanvasWidth / 2, // x-coordinate of the center
//       CanvasHeight / 2, // y-coordinate of the center
//       400, //diameter of the arc
//       400,//diameter of the arc
//       StartAngle, // starting angle of the arc
//       StopAngle,// stopping angle of the arc
//       PIE,
//     );
//     fill("white"); //color of the arc
//   }
// }
let CanvasWidth;
let CanvasHeight;
let TotalSegments = 6; //segments in the circle
let SegmentAngle = 360 / TotalSegments;
let diameter = 400;
// Spin state
let currentAngle = 0;
let spinSpeed = 0;
let targetSpeed = 0;
let isSpinning = false;
const MAX_SPEED = 20; // degrees per frame at full speed
const ACCEL = 0.25; // how fast it accelerates
const DECEL = 0.01; // how fast it decelerates when stopping
// Alternating colors for visual effect
const segmentColors = ["#FFFFFF", "#6BCB77"];
function setup() {
  CanvasWidth = windowWidth;
  CanvasHeight = windowHeight;
  createCanvas(CanvasWidth, CanvasHeight);
  angleMode(DEGREES);
}
function draw() {
  background("aqua");
  if (isSpinning) {
    spinSpeed += (targetSpeed - spinSpeed) * ACCEL; //increasing spinning speed
  } else {
    spinSpeed *= 1 - DECEL; // decreasing spin speed;
    if (abs(spinSpeed) < 0.05) spinSpeed = 0;
  }
  currentAngle += spinSpeed;
  translate(CanvasWidth / 2, CanvasHeight / 2);
  rotate(currentAngle);
  for (let i = 0; i < TotalSegments; i++) {
    let startAngle = i * SegmentAngle;
    let stopAngle = (i + 1) * SegmentAngle;
    fill(segmentColors[i % segmentColors.length]);
    stroke(80);
    strokeWeight(2);
    arc(0, 0, diameter, diameter, startAngle, stopAngle, PIE);
  }
  fill("#222");
  noStroke();
  circle(0, 0, 24);
  resetMatrix();
  translate(CanvasWidth / 2, CanvasHeight / 2);
fill("#ffffff");
  stroke(80);
  strokeWeight(2);
  arc(0, -1 * ((diameter / 2)-20), 100, 100, 250, 290, PIE);
  // Center hub
}

function mousePressed() {
  let d = dist(mouseX, mouseY, CanvasWidth / 2, CanvasHeight / 2);
  if (d < diameter / 2 + 10) {
    if (!isSpinning) {
      isSpinning = true;
      targetSpeed = MAX_SPEED;
    } else {
      isSpinning = false;
    }
  }
}
function windowResized() {
  CanvasWidth = windowWidth;
  CanvasHeight = windowHeight;
  resizeCanvas(CanvasWidth, CanvasHeight);
}
