let canvas = document.getElementById("clockCanvas");
let context = canvas.getContext("2d");
let clockRadius = 95;
let clockOriginX = canvas.width / 2;
let clockOriginY = canvas.height / 2;
let hourMarkLength = 20;
let minuteMarkLength = hourMarkLength / 2;
document
  .getElementById("currentTimeBtn")
  .addEventListener("click", currentTime);
document.getElementById("hourInput").addEventListener("input", drawUserTime);
document.getElementById("minuteInput").addEventListener("input", drawUserTime);
currentTime();
function drawClock() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(clockOriginX, clockOriginY, clockRadius, 0, 2 * Math.PI);
  context.stroke();
  context.beginPath();
  context.arc(clockOriginX, clockOriginY, 2, 0, 2 * Math.PI);
  context.fill();
  context.stroke();
  let startingMarkerX = clockOriginX;
  let startingMarkerY = clockOriginY - clockRadius + 10;
  for (let i = 0; i < 60; i++) {
    context.save();
    context.translate(clockOriginX, clockOriginY);
    let calculateRotate = (Math.PI / 180) * (360 / 60) * i;
    context.rotate(calculateRotate);
    context.translate(-clockOriginX, -clockOriginY);
    context.beginPath();
    context.moveTo(clockOriginX, clockOriginY - clockRadius);
    let markLength;
    if (i % 5 === 0) {
      context.lineWidth = 2;
      markLength = clockOriginY - clockRadius + hourMarkLength;
    } else {
      context.lineWidth = 1;
      markLength = clockOriginY - clockRadius + minuteMarkLength;
    }
    context.lineTo(clockOriginX, markLength);
    context.stroke();
    context.restore();
  }
}
function drawHourHand(hour) {
  context.save();
  context.translate(clockOriginX, clockOriginY);
  let calculateRotate = (Math.PI / 180) * (360 / 12) * (hour % 12);
  context.rotate(calculateRotate);
  context.translate(-clockOriginX, -clockOriginY);
  context.beginPath();
  let lineColor = "blue";
  context.strokeStyle = lineColor;
  context.fillStyle = lineColor;
  context.lineWidth = 5;
  context.moveTo(clockOriginX, clockOriginY);
  context.lineTo(clockOriginX, clockOriginY - clockRadius / 2);
  context.stroke();
  context.beginPath();
  context.moveTo(clockOriginX - 5, clockOriginY - clockRadius / 2);
  context.lineTo(clockOriginX + 5, clockOriginY - clockRadius / 2);
  context.lineTo(clockOriginX, clockOriginY - clockRadius / 2 - 7);
  context.fill();
  context.closePath();
  context.stroke();
  context.restore();
}
function drawMinuteHand(minute) {
  context.save();
  context.translate(clockOriginX, clockOriginY);
  let calculateRotate = (Math.PI / 180) * (360 / 60) * (minute % 60);
  context.rotate(calculateRotate);
  context.translate(-clockOriginX, -clockOriginY);
  context.beginPath();
  let lineColor = "red";
  context.strokeStyle = lineColor;
  context.fillStyle = lineColor;
  context.lineWidth = 4;
  context.moveTo(clockOriginX, clockOriginY);
  context.lineTo(clockOriginX, clockOriginY - (clockRadius - 15));
  context.stroke();
  context.beginPath();
  context.moveTo(clockOriginX - 3, clockOriginY - (clockRadius - 20));
  context.lineTo(clockOriginX + 3, clockOriginY - (clockRadius - 20));
  context.lineTo(clockOriginX, clockOriginY - clockRadius + 10);
  context.fill();
  context.closePath();
  context.stroke();
  context.restore();
}
function currentTime() {
  let today = new Date();
  document.getElementById("hourInput").value = today.getHours() % 12;
  document.getElementById("minuteInput").value = today.getMinutes();
  drawUserTime();
}
function drawUserTime() {
  let hour = document.getElementById("hourInput").value;
  let minutes = document.getElementById("minuteInput").value;
  drawTime(hour, minutes);
}
function drawTime(hour, minutes) {
  let hourOffset = minutes / 60;
  drawClock();
  drawHourHand(Number(hour) + Number(hourOffset));
  drawMinuteHand(minutes);
}
