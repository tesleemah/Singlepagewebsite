// Function to show an alert
function showMessage() {
  alert("Hi there! 👋 Thanks for visiting my website!");
}

// Function to change background color randomly
function changeBackground() {
  const colors = ["#f5f7fa", "#e3f2fd", "#fff3e0", "#fce4ec", "#e8f5e9"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to display live time
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  clock.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000); // update every second
updateClock(); // initial call
