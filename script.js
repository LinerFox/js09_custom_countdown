const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countDownEl = document.getElementById("countdown");
const countDownTitleEl = document.getElementById("countdown-title");
const countDownButton = document.getElementById("countdown-button");
const timeElements = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeElInfo = document.getElementById("complete-info");
const completeButton = document.getElementById("complete-button");

let countTitle = "";
let countDownDate = "";
let countDownValue = Date;
let countDownActive;
// Simple time Constructs
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Minimum
const Today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", Today);
// Populate Countdown/ Complete UI
function updateDOM() {
  countDownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownValue - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    //   Hide Input
    inputContainer.hidden = true;

    // if Countdown has ended show complete
    if (distance < 0) {
      countDownEl.hidden = true;
      clearInterval(countDownActive);
      completeElInfo.textContent = `${countDownTitleEl} finshed on ${countDownDate}`;
      completeEl.hidden = false;
    } else {
      // Show countdown in progress
      countDownTitleEl.textContent = `${countTitle}`;
      timeElements[1].textContent = `${hours}`;
      timeElements[0].textContent = `${days}`;
      timeElements[2].textContent = `${minutes}`;
      timeElements[3].textContent = `${seconds}`;
      completeEl.hidden = true;
      countDownEl.hidden = false;
    }
  }, second);
}
// Take Values from Form Input
function updateCountdown(e) {
  e.preventDefault();
  countTitle = e.srcElement[0].value;
  countDownDate = e.srcElement[1].value;
  console.log(countTitle, countDownDate);
  // Check for valid date
  if (countDownDate === "") {
    alert("Please select a date");
  } else {
    //   Number version current date
    countDownValue = new Date(countDownDate).getTime();
    updateDOM();
  }
}

// Reset all Values
function reset() {
  // Hide countdowns and show inputs
  countDownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  //   Stop the countdown
  clearInterval(countDownActive);
  //   Reset the values
  countDownTitleEl = "";
  countDownDate = "";
}
// Event Listener for OnClick
countdownForm.addEventListener("submit", updateCountdown);
countDownButton.addEventListener("click", reset);
completeButton.addEventListener("click", reset);
