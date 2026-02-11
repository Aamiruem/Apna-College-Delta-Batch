// Math Object: Complete Reference
// The Math object in JavaScript provides properties and methods for mathematical constants and functions. Unlike other objects, Math is not a constructor and all its properties and methods are static.

// Math Properties (Constants)
// These are read-only mathematical constants:

// javascript
Math.PI       // π (pi) ≈ 3.141592653589793
Math.E        // Euler's number ≈ 2.718281828459045
Math.LN2      // Natural log of 2 ≈ 0.6931471805599453
Math.LN10     // Natural log of 10 ≈ 2.302585092994046
Math.LOG2E    // Base 2 log of E ≈ 1.4426950408889634
Math.LOG10E   // Base 10 log of E ≈ 0.4342944819032518
Math.SQRT2    // Square root of 2 ≈ 1.4142135623730951
Math.SQRT1_2  // Square root of 1/2 ≈ 0.7071067811865476
// Math Methods
// Basic Arithmetic Methods
// javascript
Math.abs(x)      // Absolute value of x
Math.sign(x)     // Returns -1, 0, or 1 (sign of x)
Math.sqrt(x)     // Square root of x
Math.cbrt(x)     // Cube root of x (ES6)
// Exponential and Logarithmic Methods
// javascript
Math.pow(x, y)   // x raised to power y (x^y)
Math.exp(x)      // e^x (Euler's number to power x)
Math.log(x)      // Natural log (ln) of x
Math.log2(x)     // Base 2 log of x (ES6)
Math.log10(x)    // Base 10 log of x (ES6)
// Rounding Methods
// javascript
Math.floor(x)    // Rounds down to nearest integer
Math.ceil(x)     // Rounds up to nearest integer
Math.round(x)    // Rounds to nearest integer
Math.trunc(x)    // Removes fractional digits (ES6)
// Trigonometric Methods
// javascript
Math.sin(x)      // Sine of x (x in radians)
Math.cos(x)      // Cosine of x
Math.tan(x)      // Tangent of x
Math.asin(x)     // Arcsine of x
Math.acos(x)     // Arccosine of x
Math.atan(x)     // Arctangent of x
Math.atan2(y, x) // Arctangent of y/x (proper quadrant)
// Random Numbers
// javascript
Math.random()    // Random number between 0 (inclusive) and 1 (exclusive)
// Min/Max Methods
// javascript
// Math.min(a, b, c, ...) // Returns smallest of arguments
// Math.max(a, b, c, ...) // Returns largest of arguments
// Practical Examples
// Generate random number in range:

// javascript
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Calculate circle area:

// javascript
function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}
// Round to 2 decimal places:

// javascript
function roundToTwo(num) {
    return Math.round(num * 100) / 100;
}
// Convert degrees to radians:

// javascript
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
// Check if number is integer:

// javascript
function isInteger(num) {
    return Math.trunc(num) === num;
}
// The Math object is essential for any numerical operations in JavaScript and provides precise implementations of common mathematical functions.






// Math Object - Properties and Methods
// The Math object in JavaScript provides mathematical constants and functions. It is a built-in object that does not need to be instantiated (you don't use new Math()).

// 🔹 Math Properties (Constants)
// These are read-only mathematical constants:

// Property	Description	Example Value
// Math.PI	π (Pi) - The ratio of a circle's circumference to its diameter	3.141592653589793
// Math.E	Euler's number - The base of natural logarithms	2.718281828459045
// Math.LN2	Natural logarithm of 2	0.6931471805599453
// Math.LN10	Natural logarithm of 10	2.302585092994046
// Math.SQRT2	Square root of 2	1.4142135623730951
// Math.SQRT1_2	Square root of 1/2	0.7071067811865476
// Example Usage:
// javascript
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.E);  // 2.718281828459045
// 🔹 Math Methods (Functions)
// 1. Basic Math Operations
// Method	Description	Example
// Math.abs(x)	Returns the absolute value of x	Math.abs(-5) → 5
// Math.pow(a, b)	Returns a raised to the power of b (aᵇ)	Math.pow(2, 3) → 8
// Math.sqrt(x)	Returns the square root of x	Math.sqrt(16) → 4
// 2. Rounding Numbers
// Method	Description	Example
// Math.floor(x)	Rounds down to the nearest integer	Math.floor(4.9) → 4
// Math.ceil(x)	Rounds up to the nearest integer	Math.ceil(4.1) → 5
// Math.round(x)	Rounds to the nearest integer	Math.round(4.5) → 5
// Math.trunc(x)	Removes the decimal part (ES6)	Math.trunc(4.9) → 4
// 3. Random Numbers
// Method	Description	Example
// Math.random()	Returns a random number between 0 (inclusive) and 1 (exclusive)	Math.random() → 0.123...
// Generate a random number between min and max:
// javascript
// function randomInRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInRange(1, 10)); // e.g., 7
// 4. Min & Max
// Method	Description	Example
// Math.min(a, b, c, ...)	Returns the smallest of the given numbers	Math.min(5, 3, 8) → 3
// Math.max(a, b, c, ...)	Returns the largest of the given numbers	Math.max(5, 3, 8) → 8
// 🔹 Practical Examples
// 1. Calculate the area of a circle
// javascript
// const radius = 5;
// const area = Math.PI * Math.pow(radius, 2);
// console.log(area); // 78.53981633974483
// 2. Round a number to 2 decimal places
// javascript
// const num = 3.14159;
// const rounded = Math.round(num * 100) / 100;
// console.log(rounded); // 3.14
// 3. Check if a number is an integer
// javascript
// function isInteger(num) {
//   return Math.trunc(num) === num;
// }
// console.log(isInteger(5.0)); // true
// console.log(isInteger(5.5)); // false
// 🔹 Summary Table
// Category	Methods/Properties
// Constants	Math.PI, Math.E, Math.SQRT2
// Basic Math	Math.abs(), Math.pow(), Math.sqrt()
// Rounding	Math.floor(), Math.ceil(), Math.round(), Math.trunc()
// Random	Math.random()
// Min/Max	Math.min(), Math.max()
// The Math object is essential for performing mathematical operations in JavaScript efficiently. 
