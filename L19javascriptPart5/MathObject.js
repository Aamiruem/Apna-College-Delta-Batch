// math objects

// The Math object provides basic mathematics functionality and constants.
let math = Math;


// Log the Math object to the console.
console.log(math);

// Log the value of Euler's number (approximately 2.718).
console.log(math.E);

// Log the value of Pi (approximately 3.14159).
console.log(math.PI);

// Calculate 2 raised to the power of 3 (2^3 = 8).
console.log(math.pow(2, 3));

// Calculate the square root of 9 (√9 = 3).
console.log(math.sqrt(9));

// Get the absolute value of -10 (|-10| = 10).
console.log(math.abs(-10));

// Find the minimum value in the list of numbers (1, 2, ..., 10).
console.log(math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Find the maximum value in the list of numbers (1, 2, ..., 10).
console.log(math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Generate a random number between 0 (inclusive) and 1 (exclusive).
console.log(math.random());

// Round 2.5 to the nearest integer (2.5 rounds to 3).
console.log(math.round(2.5));

// Round 2.5 up to the next largest integer (2.5 rounds to 3).
console.log(math.ceil(2.5));

// Round 2.5 down to the next smallest integer (2.5 rounds to 2).
console.log(math.floor(2.5));

// Truncate the decimal part of 2.5, keeping only the integer part (2.5 truncates to 2).
console.log(math.trunc(2.5));

// Get the sign of -10 (-10 is negative, so the sign is -1).
console.log(Math.sign(-10));

// Calculate the natural logarithm of 10 (ln(10)).
console.log(Math.log(10));

// Calculate the base-10 logarithm of 10 (log10(10) = 1).
console.log(Math.log10(10));

// Calculate the base-2 logarithm of 10 (log2(10)).
console.log(Math.log2(10));

// Calculate the natural logarithm of 1 plus 10 (ln(1 + 10)).
console.log(Math.log1p(10));

// (This is a duplicate of the previous call, so the result is the same.)
console.log(Math.log1p(10));

// (This is a duplicate of the previous call to log2, so the result is the same.)
console.log(Math.log2(10));

// (This is a duplicate of the previous call to log10, so the result is the same.)
console.log(Math.log10(10));

// Calculate the cube root of 10 (∛10).
console.log(Math.cbrt(10));












// The Math object provides basic mathematics functionality and constants.

// Mathematical Constants
console.log(Math.E);         // Euler's number, the base of natural logarithms (approximately 2.718).
console.log(Math.PI);        // Pi, the ratio of a circle's circumference to its diameter (approximately 3.14159).
console.log(Math.SQRT2);     // The square root of 2 (approximately 1.414).
console.log(Math.SQRT1_2);   // The square root of 1/2 (approximately 0.707).
console.log(Math.LN2);       // The natural logarithm of 2 (approximately 0.693).
console.log(Math.LN10);      // The natural logarithm of 10 (approximately 2.303).
console.log(Math.LOG2E);     // The base-2 logarithm of E (approximately 1.442).
console.log(Math.LOG10E);    // The base-10 logarithm of E (approximately 0.434).

// Basic Arithmetic Functions
console.log(Math.abs(-10));      // Returns the absolute value of a number.
console.log(Math.ceil(2.5));     // Rounds a number up to the next largest integer.
console.log(Math.floor(2.5));    // Rounds a number down to the next smallest integer.
console.log(Math.round(2.5));    // Rounds a number to the nearest integer.
console.log(Math.trunc(2.5));    // Truncates the decimal part, leaving only the integer part.

console.log(Math.sign(-10));     // Returns the sign of a number: -1 for negative, 1 for positive, 0 for zero.

// Exponential and Logarithmic Functions
console.log(Math.exp(1));        // Returns E^x, where x is the argument.
console.log(Math.expm1(1));      // Returns E^x - 1, where x is the argument.
console.log(Math.log(10));       // Returns the natural logarithm (base E) of a number.
console.log(Math.log1p(10));     // Returns the natural logarithm of 1 + a number.
console.log(Math.log10(10));     // Returns the base-10 logarithm of a number.
console.log(Math.log2(10));      // Returns the base-2 logarithm of a number.

// Power and Root Functions
console.log(Math.pow(2, 3));     // Returns the base to the exponent power (2^3).
console.log(Math.sqrt(9));       // Returns the square root of a number.
console.log(Math.cbrt(10));      // Returns the cube root of a number.

// Trigonometric Functions
console.log(Math.sin(Math.PI / 2));   // Returns the sine of a number.
console.log(Math.cos(Math.PI));       // Returns the cosine of a number.
console.log(Math.tan(Math.PI / 4));   // Returns the tangent of a number.

console.log(Math.asin(1));       // Returns the arcsine (in radians) of a number.
console.log(Math.acos(1));       // Returns the arccosine (in radians) of a number.
console.log(Math.atan(1));       // Returns the arctangent (in radians) of a number.
console.log(Math.atan2(1, 1));   // Returns the arctangent of the quotient of its arguments (in radians).

// Hyperbolic Functions
console.log(Math.sinh(1));       // Returns the hyperbolic sine of a number.
console.log(Math.cosh(1));       // Returns the hyperbolic cosine of a number.
console.log(Math.tanh(1));       // Returns the hyperbolic tangent of a number.
console.log(Math.asinh(1));      // Returns the hyperbolic arcsine of a number.
console.log(Math.acosh(1));      // Returns the hyperbolic arccosine of a number.
console.log(Math.atanh(0.5));    // Returns the hyperbolic arctangent of a number.

// Minimum and Maximum Functions
console.log(Math.min(1, 2, 3));  // Returns the smallest of zero or more numbers.
console.log(Math.max(1, 2, 3));  // Returns the largest of zero or more numbers.

// Random Numbers
console.log(Math.random());      // Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

// Miscellaneous Functions
console.log(Math.hypot(3, 4));   // Returns the square root of the sum of squares of its arguments (Pythagorean theorem).
console.log(Math.imul(2, 3));    // Returns the result of a 32-bit integer multiplication of the two arguments.
console.log(Math.clz32(1));      // Returns the number of leading zero bits in the 32-bit binary representation of a number.
console.log(Math.fround(1.337)); // Returns the nearest 32-bit single precision float representation of a number.
console.log(Math.log1p(10));     // Returns the natural logarithm of 1 + a number.
console.log(Math.hypot(3, 4));   // Returns the square root of the sum of squares of its arguments (Pythagorean theorem).
console.log(Math.imul(2, 3));    // Returns the result of a 32-bit integer multiplication of the two arguments.
console.log(Math.clz32(1));      // Returns the number of leading zero bits in the 32-bit binary representation of a number.
console.log(Math.fround(1.337)); // Returns the nearest 32-bit single precision float representation of a number.

















// Math Constants

// Euler's number (approximately 2.718)
console.log(Math.E); 

// Natural logarithm of 2 (approximately 0.693)
console.log(Math.LN2); 

// Natural logarithm of 10 (approximately 2.303)
console.log(Math.LN10); 

// Base-2 logarithm of Euler's number (approximately 1.442)
console.log(Math.LOG2E); 

// Base-10 logarithm of Euler's number (approximately 0.434)
console.log(Math.LOG10E); 

// Pi (approximately 3.14159)
console.log(Math.PI); 

// Square root of 1/2 (approximately 0.707)
console.log(Math.SQRT1_2); 

// Square root of 2 (approximately 1.414)
console.log(Math.SQRT2); 

// Math Functions

// Absolute value
console.log(Math.abs(-10)); // 10

// Arc cosine (inverse cosine)
console.log(Math.acos(0.5)); // 1.0471975511965979 (radians)

// Hyperbolic arc cosine
console.log(Math.acosh(1)); // 0

// Arc sine (inverse sine)
console.log(Math.asin(0.5)); // 0.5235987755982989 (radians)

// Hyperbolic arc sine
console.log(Math.asinh(1)); // 0.881373587019543 (radians)

// Arc tangent (inverse tangent)
console.log(Math.atan(1)); // 0.7853981633974483 (radians)

// Arc tangent of the quotient of its arguments
console.log(Math.atan2(1, 1)); // 0.7853981633974483 (radians)

// Hyperbolic arc tangent
console.log(Math.atanh(0.5)); // 0.5493061443340548

// Cube root
console.log(Math.cbrt(27)); // 3

// Smallest integer greater than or equal to a number
console.log(Math.ceil(2.3)); // 3

// Cosine
console.log(Math.cos(Math.PI / 3)); // 0.5

// Hyperbolic cosine
console.log(Math.cosh(0)); // 1

// Exponential function (Euler's number to the power of x)
console.log(Math.exp(1)); // 2.718281828459045

// Exponential minus 1
console.log(Math.expm1(1)); // 1.718281828459045

// Largest integer less than or equal to a number
console.log(Math.floor(2.7)); // 2

// Natural logarithm (base e)
console.log(Math.log(10)); // 2.302585092994046

// Natural logarithm of 1 + a number
console.log(Math.log1p(10)); // 2.3978952727983707

// Base 10 logarithm
console.log(Math.log10(100)); // 2

// Base 2 logarithm
console.log(Math.log2(8)); // 3

// Maximum value
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// Minimum value
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// Power function
console.log(Math.pow(2, 3)); // 8

// Pseudo-random number between 0 and 1
console.log(Math.random()); // e.g., 0.123456789

// Round to the nearest integer
console.log(Math.round(2.5)); // 3

// Sign of a number (-1, 0, or 1)
console.log(Math.sign(-5)); // -1

// Sine
console.log(Math.sin(Math.PI / 2)); // 1

// Hyperbolic sine
console.log(Math.sinh(1)); // 1.1752011936438014

// Square root
console.log(Math.sqrt(16)); // 4

// Tangent
console.log(Math.tan(Math.PI / 4)); // 1

// Hyperbolic tangent
console.log(Math.tanh(1)); // 0.7615941559557649

// Integer part of a number (truncates the decimal)
console.log(Math.trunc(2.9)); // 2

// Miscellaneous

// Convert angle from degrees to radians
function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
console.log(degreesToRadians(180)); // 3.141592653589793

// Convert angle from radians to degrees
function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}
console.log(radiansToDegrees(Math.PI)); // 180
