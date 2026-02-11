
// Implicit return in arrow functions allows you to write concise functions without the need for curly braces and the return keyword.
// This is particularly useful for simple operations or when you want to return the result of a single expression directly.

// Basic arithmetic operations with implicit returns
const add = (a, b) => a + b;
const square = (x) => x * x;
const isEven = (num) => num % 2 === 0;
const greet = (name) => `Hello, ${name}!`;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

// Division with error handling for division by zero
const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero is not allowed");
    return a / b;
};

// Example usage with try-catch for the divide function
try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // Throws error
} catch (error) {
    console.error(error.message); // "Division by zero is not allowed"
}
