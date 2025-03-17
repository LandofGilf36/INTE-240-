var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) greeting = "Good evening";
else if (hourNow > 12) greeting = "Good afternoon";
else if (hourNow > 0) greeting = "Good morning";
else greeting = "Welcome";
document.write(greeting);
document.write("<br>");
// Get the current time
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
// Format the time as HH:MM:SS
var currentTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
// Display the current time
document.write("Current time: " + currentTime);

//# sourceMappingURL=hello.7e048d94.js.map
