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
let TotalSegments = 6;
let SegmentAngle = 360 / TotalSegments;

// Spin state
let currentAngle = 0;
let spinSpeed = 2 ;
let targetSpeed = 0;
let isSpinning = false;
const MAX_SPEED = 20; // degrees per frame at full speed
const ACCEL = 0.25; // how fast it accelerates
const DECEL = 0.05; // how fast it decelerates when stopping
// Alternating colors for visual effect
const segmentColors = [
  "#FFFFFF",
  "#6BCB77",
];
currentAngle+=spinSpeed;
function setup() {
  CanvasWidth = windowWidth;
  CanvasHeight = windowHeight;
  createCanvas(CanvasWidth, CanvasHeight);
  angleMode(DEGREES);
}
function draw() {
  background("aqua");
  let centerX=CanvasWidth/2;
  let centerY=CanvasHeight/2;
  translate(centerX,centerY)
  for (let i = 0; i < TotalSegments; i++) {
    let startAngle = i * SegmentAngle;
    let stopAngle = (i + 1) * SegmentAngle;
    fill(segmentColors[i % segmentColors.length]);
    stroke(80);
    strokeWeight(2);
    arc(0, 0, 400, 400, startAngle, stopAngle, PIE);
  } 
  // Center hub
  fill("#222");
  noStroke();
  circle(0,0, 24);
}
// function mousePressed(){
//   let d=dist(mouseX,mouseY,centerX,centerY)
//   if(d<200){

//   }
// }
function windowResized() {
  CanvasWidth = windowWidth;
  CanvasHeight = windowHeight;
  resizeCanvas(CanvasWidth, CanvasHeight);
}
