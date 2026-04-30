
// let keywords
// Scope = Accessibility of variables (where a variable can be used in code).

// Global Scope → usable everywhere
// Variables declared outside any function or block can be accessed from anywhere in the code.

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal(); // I am global


// Function Scope → usable inside function only
// var variables declared inside a function are accessible only within that function.

function myFunction() {
    var functionVar = "I am function scoped";
    console.log(functionVar);
}

myFunction(); // I am function scoped
// console.log(functionVar); // Error


// Block Scope → usable inside {}
// let and const variables declared inside a block are accessible only inside that block.

{
    let blockVar = "I am block scoped";
    const blockConst = "I am also block scoped";

    console.log(blockVar);
    console.log(blockConst);
}

// console.log(blockVar); // Error
// console.log(blockConst); // Error

















// let keywords
// Scope = Accessibility of variables (where a variable can be used in code).

// Global Scope → usable everywhere => let variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code. For example:

    
// Function Scope → usable inside function only => var variables declared inside a function are not accessible outside the function. They are local to that function and can only be used within it. This is known as function scope. For example:


// Block Scope → usable inside {} only=>   const  Block Scope => let and const variables declared inside a block (e.g., within curly braces {}) are only accessible within that block. This is known as block scope. For example:

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
