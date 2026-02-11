// set time out function

setTimeout(() => {
    console.log("hello");
}, 2000);
// it will print hello after 2 seconds

// it is used to delay the execution of a function

// it takes two arguments

// 1. function

// 2. time in milliseconds
// it is used to delay the execution of a function



console.log("Hi there!");

setTimeout( () =>{
    console.log("How are you?");
},

2000);

console.log("Bye!");
// it will print Hi there! first then after 2 seconds it will print How are you? and then Bye!
// it is used to delay the execution of a function











// setTimeout() is used to run a function once after a specified delay(in milliseconds).

// Basic Syntax
// javascript
// Copy
// Edit
// setTimeout(function, delay, arg1, arg2, ...);
// function → The code or function to run.

//     delay → Time in milliseconds before running the function.

// arg1, arg2... (optional) → Arguments passed to the function.

// Example 1: Simple
// javascript
// Copy
// Edit
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000); // 2000ms = 2 seconds
// Example 2: Passing Arguments
// javascript
// Copy
// Edit
function greet(name) {
    console.log(`Hello, ${name}!`);
}

setTimeout(greet, 1500, "Aamir"); // Runs after 1.5 seconds
// Example 3: Stopping with clearTimeout()
// javascript
// Copy
// Edit
const timerId = setTimeout(() => {
    console.log("This will not run");
}, 3000);

clearTimeout(timerId); // Cancels the timeout
// 💡 Key Points:

// Runs only once after the delay.

// If you need something to run repeatedly, use setInterval() instead.

// Always store the ID returned by setTimeout() if you plan to cancel it later.
