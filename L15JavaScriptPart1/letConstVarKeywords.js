// let keywords


let num1 = 1;
let num2 = 2;
let finalNum = num1 + num2;
console.log(finalNum);

let num3 = 1;
let num4 = 2;
let finalNum1 = num3 * num4;
console.log(finalNum1);

let num5 = 1;
let num6 = 2;
let finalNum2 = num5 / num6;
console.log(finalNum2);

//let keywords
let num7 = 1;
let num8 = 2;
let finalNum3 = num7 - num8;
console.log(finalNum3);


// const keywords
const pi = 3.14;
let rad = 4;
let area = pi * rad * rad; //or area = pi * Math.pow(rad, 2);
console.log(area);


// var keyword
var age = 22;
var cgpa = 8;
console.log(age, cgpa);

var x = 5;
var y = 10;
var sum = x + y;
console.log(sum);













// Fahrenheit to Celsius and Celsius to Fahrenheit in JavaScript
// Here are two simple functions to convert between Fahrenheit and Celsius in JavaScript:


// Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
    return (f - 32) * 5 / 9;
}

// Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
    return (c * 9 / 5) + 32;
}

// Usage examples:
console.log(fahrenheitToCelsius(32));    // 0 (freezing point of water)
console.log(fahrenheitToCelsius(212));   // 100 (boiling point of water)
console.log(celsiusToFahrenheit(0));     // 32
console.log(celsiusToFahrenheit(100));   // 212
// ES6 Arrow Function Version
const fahrenheitToCelsius = f => (f - 32) * 5 / 9;
const celsiusToFahrenheit = c => (c * 9 / 5) + 32;


// Rounding the Result
// If you want to round to a specific number of decimal places:


function fahrenheitToCelsius(f, decimals = 2) {
    return Number(((f - 32) * 5 / 9).toFixed(decimals));
}

function celsiusToFahrenheit(c, decimals = 2) {
    return Number(((c * 9 / 5) + 32).toFixed(decimals));
}
// These functions follow the standard conversion formulas:

// °C = (°F - 32) × 5 / 9

// °F = (°C × 9 / 5) + 32
