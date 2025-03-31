// pee.js

// Run this once the page has fully loaded
window.onload = function () {
  // Hide all elements except q1
  const elements = document.querySelectorAll('[id^="q"], [id^="r"]');
  elements.forEach((el) => {
    if (el.id !== "q1") {
      el.classList.add("hidden");
    }
  });
};

// Function to show a target ID and hide everything else
function show(targetId) {
  const elements = document.querySelectorAll('[id^="q"], [id^="r"]');
  elements.forEach((el) => {
    el.classList.add("hidden");
  });

  const target = document.getElementById(targetId);
  if (target) {
    target.classList.remove("hidden");
  }
}
