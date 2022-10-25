const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

let countTitle = "";
let countDownDate = "";
// Set Date Input Minimum
const Today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", Today);

function updateCountdown(e) {
  e.preventDefault();
  countTitle = e.srcElement[0].value;
  countDownDate = e.srcElement[1].value;
  console.log(countTitle, countDownDate);
}

// Event Listener for OnClick
countdownForm.addEventListener("submit", updateCountdown);
