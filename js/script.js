const buttonRed = document.querySelector(".highlightdot.red");
const buttonBlue = document.querySelector(".highlightdot.blue");
const buttonOrange = document.querySelector(".highlightdot.orange");
const buttonGreen = document.querySelector(".highlightdot.green");
const buttonPurple = document.querySelector(".highlightdot.purple");
const buttonSwitch = document.querySelector(".switchlight");
const background = document.querySelector("html");
let currentButton = buttonBlue;

function setupEventListener(button, color) {
  button.addEventListener("click", () => {
    document.documentElement.style.setProperty("--highlightColor", color);
    button.classList.add("activeHighlightdot");
    currentButton.classList.remove("activeHighlightdot");
    currentButton = button;
  });
}

setupEventListener(buttonRed, "var(--highlightRed)");
setupEventListener(buttonBlue, "var(--highlightBlue)");
setupEventListener(buttonOrange, "var(--highlightOrange)");
setupEventListener(buttonGreen, "var(--highlightGreen)");
setupEventListener(buttonPurple, "var(--highlightPurple)");
