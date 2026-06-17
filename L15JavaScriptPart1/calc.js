// let display = document.getElementById("display");

// function appendValue(value) {
//   display.value += value;
// }

// function clearDisplay() {
//   display.value = "";
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch {
//     display.value = "Error";
//   }
// }



// Get the display element
const display = document.getElementById("display");

// Add value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Calculate expression
function calculate() {
  try {
    display.value = eval(display.value); // ⚠️ eval is simple but unsafe for real apps
  } catch (error) {
    display.value = "Error";
  }
}
