// if...else statement
let hour = 14;
if (hour < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!"); // This will execute
}

// Multiple conditions
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will execute
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D or F");
}




// 3. Ternary Operator (Shorthand if...else)

// Ternary operator
let isRaining = true;
let weatherMessage = isRaining ? "Take an umbrella" : "Enjoy the weather";
console.log(weatherMessage); // "Take an umbrella"

// Nested ternary
let speed = 75;
let message = speed > 100 ? "Too fast" : 
               speed > 80 ? "Fast" : 
               speed > 60 ? "Moderate" : "Slow";
console.log(message); // "Moderate"
