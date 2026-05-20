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
let radius = diameter / 2;
// Spin state
let currentAngle = 0;
let spinSpeed = 0;
let targetSpeed = 0;
let isSpinning = false;
let result = "";
const MAX_SPEED = 20; // degrees per frame at full speed
const ACCEL = 0.25; // how fast it accelerates
const DECEL = 0.02; // how fast it decelerates when stopping
// Alternating colors for visual effect
const segmentColors = ["#FFFFFF", "#6BCB77"];
const segmentPoints = [
  "100 points",
  "200 points",
  "Free Spin",
  "400 points",
  "500 points",
  "Try Again",
];
function setup() {
  CanvasWidth = windowWidth;
  CanvasHeight = windowHeight;
  createCanvas(CanvasWidth, CanvasHeight);
  angleMode(DEGREES);
}
function draw() {
  background("aqua");
  if (isSpinning) {
    spinSpeed *= 1 - 0.01;
    if (spinSpeed < 0.02) {
      isSpinning = false;
      spinSpeed = 0;
      getPoints();
      triggerCornfetti();
    }
  }
  currentAngle += spinSpeed;
  translate(CanvasWidth / 2, CanvasHeight / 2); // relocating origin to the center of canvas
  push();
  rotate(currentAngle);
  for (let i = 0; i < TotalSegments; i++) {
    let startAngle = i * SegmentAngle;
    let stopAngle = (i + 1) * SegmentAngle;
    fill(segmentColors[i % segmentColors.length]);
    stroke(80);
    strokeWeight(2);
    arc(0, 0, diameter, diameter, startAngle, stopAngle, PIE); // creating the parts
    fill(0);
    textSize(diameter * (5 / 100));
    textAlign(CENTER, CENTER);
    let bisector = (startAngle + stopAngle) / 2;
    let textX = cos(bisector) * (radius / 2 + radius * (10 / 100));
    let textY = sin(bisector) * (radius / 2 + radius * (10 / 100));
    text(segmentPoints[i], textX, textY); // displaying the points in the wheel
  }
  pop();
  fill(255, 0, 0);
  stroke(80);
  strokeWeight(2);
  arc(0, -1 * (radius - 20), 100, 100, 250, 290, PIE); // pointer
  fill("#222");
  noStroke();
  circle(0, 0, diameter * (7 / 100)); // smaller circle in the middle
  if (result != "") {
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    // textStyle(BOLD);
    text(result, radius + 100, 0); //result shown
  }
  resetMatrix();
  translate(CanvasWidth / 2, CanvasHeight / 2);
  fill("#000000");
  stroke(80);
  strokeWeight(2);
  rectMode(CENTER);
  rect(0, radius + 50, 100, 50, 25, 25, 25, 25);
  fill("#ffffff");
  textSize(28);
  textAlign(CENTER, CENTER);
  text("SPIN",0,radius+50)
}

function getPoints() {
  let newAngle = (((270 - currentAngle) % 360) + 360) % 360; // getting the angle where the pin is one
  let newSegment = floor(newAngle / SegmentAngle); // checking where the angle we got is between which segment
  if (newSegment == TotalSegments) newSegment = 0;
  result = segmentPoints[newSegment];
}
function mousePressed() {
  let d = dist(
    mouseX,
    mouseY,
    CanvasWidth / 2,
    CanvasHeight / 2 + (radius + 50),
  ); // checking if mouse is in the wheel
  if (d < 50 && !isSpinning) {
    spinSpeed = random(15, 25); // random speed of the wheel
    isSpinning = true;
  }
}

function windowResized() {
  CanvasWidth = windowWidth;
  CanvasHeight = windowHeight;
  resizeCanvas(CanvasWidth, CanvasHeight);
}
//cornfetti
const count = 200,
  defaults = { origin: { y: 0.7 } };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    }),
  );
}
function triggerCornfetti() {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, { spread: 60 });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}
