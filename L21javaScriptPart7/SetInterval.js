// set interval


// let count = 0;

// setInterval(() => {
//     console.log(count++);
// }, 1000);

// it will run the function after every 1 sec

// it will run forever until we stop it
// we can stop it by using clearInterval()
// clearInterval(id)




// setInterval( () => {
//     console.log("Hello");
// }, 2000);
// console.log();

// it will run the function after every 2 sec
// it will run forever until we stop it




// setInterval( () => {
//     console.log("Apna College");
// }, 2000);
// console.log();



let ids = setInterval( () => {
    console.log("Apna College");
}, 2000);

clearInterval(ids); // it will stop the interval after 10 sec











// setInterval() repeatedly runs a function at fixed time intervals until you stop it with clearInterval().

//     Syntax
// javascript
// Copy
// Edit
// setInterval(function, delay, arg1, arg2, ...);
// function → The function to run.

//     delay → Time in milliseconds between each execution.

//         arg1, arg2... → Optional arguments to pass to the function.

// Example 1: Simple Counter
// javascript
// Copy
// Edit
let count = 1;

const intervalId = setInterval(() => {
    console.log(`Count: ${count}`);
    count++;

    if (count > 5) {
        clearInterval(intervalId); // Stop after 5 counts
    }
}, 1000); // Runs every 1 second
// Example 2: Passing Arguments
// javascript
// Copy
// Edit
function greet(name) {
    console.log(`Hello, ${name}!`);
}

const greetInterval = setInterval(greet, 2000, "Aamir"); // Runs every 2 seconds
// Example 3: Stop with clearInterval()
// javascript
// Copy
// Edit
const id = setInterval(() => {
    console.log("Running...");
}, 500);

setTimeout(() => {
    clearInterval(id); // Stops after 3 seconds
    console.log("Stopped");
}, 3000);
// 💡 Key Difference from setTimeout()

// setTimeout() → Runs once after a delay.

//     setInterval() → Runs repeatedly at the given delay until stopped.
