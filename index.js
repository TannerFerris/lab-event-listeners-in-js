// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const backgrounds = document.querySelector("body");
  backgrounds.style.backgroundColor = "red";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  // Implement the function to reset background color
  const backgrounds = document.querySelector("body");
  backgrounds.style.backgroundColor = "white";
}

const pdisplay = document.getElementById("keyPressDisplay");

// Function to display the key pressed by the user
function displayKeyPress(event) {
  // Implement the function to display key pressed
  pdisplay.textContent = event.key;
}

// Process Text Input
//const inputedValue = document.getElementById("textInput");
const textDisplay = document.getElementById("textInputDisplay");
// Function to display user input in real-time
function displayUserInput() {
  textDisplay.textContent = dInput.value;
}

// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
const bColor = document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
const rBcolor = document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
const dKey = document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type

const dInput = document.getElementById('textInput')
const inputs = document.addEventListener('input', displayUserInput)
