function debounce(fn, delay) {
    let timer;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, delay);
    }
}

// Real Use
// Search Input

// Resize Window

// Auto Save









// 🔹 Easy Definition
// Debounce = A technique that makes sure a function runs only after a pause in repeated calls.
// 👉 Example: If you type in a search box, debounce waits until you stop typing for a few milliseconds before running the search.



function debounce(fn, delay) {
    let timer; // store timer id

    return function () {
        clearTimeout(timer); // cancel previous timer
        timer = setTimeout(() => {
            fn(); // run the function after delay
        }, delay);
    }
}

// Example Use Cases:

// 1. Search Input (wait until user stops typing)
const search = debounce(() => {
    console.log("Searching...");
}, 500);

// Simulate typing
search();
search();
search(); // Only this one runs after 500ms pause

// 2. Resize Window (avoid calling on every pixel change)
window.addEventListener("resize", debounce(() => {
    console.log("Window resized!");
}, 300));

// 3. Auto Save (save only after user stops editing)
const autoSave = debounce(() => {
    console.log("Data auto-saved!");
}, 1000);





// 🔹 Word‑by‑Word Explanation
// function debounce(fn, delay) → A function that takes:

// fn = the actual work you want to do (like search, save, resize).

// delay = how long to wait (in ms).

// let timer; → A variable to remember the timer ID.

// return function () { ... } → Returns a new function that wraps your fn.

// clearTimeout(timer); → Cancels the previous timer if the user keeps triggering.

// timer = setTimeout(() => { fn(); }, delay);

// Starts a new timer.

// After delay ms, runs fn().

// If another call happens before time ends, the old timer is cleared, and a new one starts.

// 🔹 Real Life Analogy
// Imagine you’re writing a WhatsApp message.

// If you keep typing, debounce waits.

// When you stop typing for a moment, then it sends the “typing stopped” signal.

// ⚡ So in short:
// Debounce = Wait until the user stops doing something, then run the function once.
