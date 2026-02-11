// try and catch

// the try statement allows to define a block of code to be tested for errors while it is being executed

// the catch statement defines a block of code to be executed, if an error occurs in the try block

// the finally statement defines a block of code to be executed regardless of the result of the try or catch blocks

// the throw statement throws an error and stops the execution of the program

try {
    // code that can throw an error
    console.log(a);
} catch {
    // code to handle the error
    console.log("variable a doesn't define ");
}











// try...catch is used to handle errors so that your program doesn’t crash when something unexpected happens.

// It lets you try a block of code, and if an error occurs, it jumps to the catch block where you can handle it.

//     Syntax
// javascript
// Copy
// Edit
try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
} finally {
    // (Optional) Code that always runs, no matter what
}
// Basic Example
// javascript
// Copy
// Edit
try {
    let num = 10;
    console.log(num.toUpperCase()); // ❌ Error: toUpperCase is not a function
} catch (err) {
    console.log("Something went wrong:", err.message);
}
// Output:

// vbnet
// Copy
// Edit
// Something went wrong: num.toUpperCase is not a function
// 🔹 The catch block caught the error so the program didn’t stop.

// Using finally
// finally always runs — whether an error happened or not.

//     javascript
// Copy
// Edit
try {
    console.log("Opening file...");
    throw new Error("File not found");
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("Closing file...");
}
// Output:

// mathematica
// Copy
// Edit
// Opening file...
// Error: File not found
// Closing file...
// Throwing Custom Errors
// You can create and throw your own errors.

//     javascript
// Copy
// Edit
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (err) {
    console.log("Error:", err.message);
}
// Async + Try / Catch
// With async / await, try...catch works for handling Promise rejections.

//     javascript
// Copy
// Edit
async function fetchData() {
    try {
        let res = await fetch("https://invalid-url.com");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Fetch failed:", err.message);
    }
}

fetchData();
// ✅ Key Points

// try → Code that might fail.

//     catch → Code to handle the error.

//         finally → Always runs, good for cleanup.

// You can throw custom errors using throw new Error("message").
