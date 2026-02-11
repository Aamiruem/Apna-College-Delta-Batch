Try - Catch - Finally in JavaScript
// In JavaScript, the try...catch...finally statement is used to handle errors (exceptions) gracefully without stopping the execution of your entire program.

// Basic Syntax
// javascript
try {
    // Code that might throw an exception
} catch (error) {
    // Code to handle the error
} finally {
    // Code that will always execute
}
// How It Works
// try block: Contains the code that might throw an exception.

// catch block: Executes if an exception is thrown in the try block.

// finally block: Always executes, regardless of whether an exception was thrown or caught.

// Examples
// Basic Example
// javascript
try {
    let result = riskyOperation();
    console.log('Success:', result);
} catch (error) {
    console.error('Error:', error.message);
} finally {
    console.log('This always runs');
}
// Catching Specific Errors
// javascript
try {
    // Code that might throw different types of errors
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Type error occurred');
    } else if (error instanceof ReferenceError) {
        console.log('Reference error occurred');
    } else {
        console.log('Unknown error:', error);
    }
}
// The Finally Block
// javascript
function divide(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    } catch (error) {
        console.error(error.message);
        return null;
    } finally {
        console.log("Division operation attempted");
    }
}

divide(10, 2);  // Logs "Division operation attempted", returns 5
divide(10, 0);  // Logs error message and "Division operation attempted", returns null
// Important Notes
// The catch and finally blocks are optional, but you must have at least one of them.

// The finally block runs:

// After the try block completes successfully

// After the catch block handles an error

// Even if you return from inside the try or catch blocks

// If an exception is thrown and there's no catch block, the finally block still executes before the exception propagates up.

// Nested Try-Catch
// javascript
try {
try {
    throw new Error('Inner error');
} finally {
    console.log('Inner finally');
}
} catch (error) {
    console.log('Outer catch:', error.message);
}
// This pattern is useful when you need to clean up resources (like closing files or database connections) regardless of whether an operation succeeds or fails.
