function throttle(fn, delay) {
    let flag = true; // ✅ allows first call

    return function () {
        if (!flag) return; // ❌ skip if not allowed

        flag = false; // 🚫 block further calls

        fn(); // ✅ run the function

        setTimeout(() => {
            flag = true; // ⏳ after delay, allow again
        }, delay);
    };
}

// Example Use Cases:

// 1. Scroll Event (limit heavy work)
window.addEventListener("scroll", throttle(() => {
    console.log("Scroll event handled!");
}, 500));

// 2. Button Click (prevent spamming)
const button = document.querySelector("button");
button.addEventListener("click", throttle(() => {
    console.log("Button clicked!");
}, 1000));



















// 🔹 Easy Definition
// Throttle = A technique that makes sure a function runs at most once in a fixed time interval, no matter how many times you call it.
// 👉 Example: If you scroll a page, throttle ensures the function runs every 200ms, not on every pixel move.

// 🔹 Your Code Explained Word‑by‑Word

function throttle(fn, delay) {

    let flag = true; // ✅ allows first call

    return function() {

        if (!flag) return; // ❌ if flag is false, skip

        flag = false; // 🚫 block further calls

        fn(); // ✅ run the function

        setTimeout(() => {
            flag = true; // ⏳ after delay, allow again
        }, delay);
    };
}




// function throttle(fn, delay) → A wrapper that takes:

// fn = the function you want to run (like scroll handler).

// delay = minimum time gap between runs.

// let flag = true; → A switch that says “can I run now?”

// return function() { ... } → Returns a new function that controls when fn runs.

// if (!flag) return; → If flag is false, skip execution.

// flag = false; → Block further calls until timer resets.

// fn(); → Run the actual function.

// setTimeout(() => { flag = true; }, delay); → After delay ms, reset flag so the function can run again.

// 🔹 Example Use Cases

// 1. Scroll Event (limit heavy work)
window.addEventListener("scroll", throttle(() => {
    console.log("Scroll event handled!");
}, 500));

// 2. Button Click (prevent spamming)
const button = document.querySelector("button");
button.addEventListener("click", throttle(() => {
    console.log("Button clicked!");
}, 1000));



// 🔹 Real Life Analogy
// Imagine a traffic signal:

// Cars (function calls) want to go continuously.

// Throttle = signal allows cars to pass only once every X seconds.

// Even if cars keep coming, they must wait until the light turns green again.

// ⚡ Quick Comparison with Debounce:

// Debounce → Wait until you stop, then run once.

// Throttle → Run regularly, but not too often.

// Do you want me to make a side‑by‑side table of debounce vs throttle so you can instantly see the difference?

// Complete code
// Here’s the complete throttle code with easy explanation and examples, side‑by‑side with debounce so you can clearly see the difference:

// 🔹 Throttle Code

function throttle(fn, delay) {
    let flag = true; // ✅ allows first call

    return function () {
        if (!flag) return; // ❌ skip if not allowed

        flag = false; // 🚫 block further calls

        fn(); // ✅ run the function

        setTimeout(() => {
            flag = true; // ⏳ after delay, allow again
        }, delay);
    };
}

// Example Use Cases:

// 1. Scroll Event (limit heavy work)
window.addEventListener("scroll", throttle(() => {
    console.log("Scroll event handled!");
}, 500));

// 2. Button Click (prevent spamming)
const button = document.querySelector("button");
button.addEventListener("click", throttle(() => {
    console.log("Button clicked!");
}, 1000));





// 🔹 Debounce Code (for comparison)

function debounce(fn, delay) {
    let timer; // store timer id

    return function () {
        clearTimeout(timer); // cancel previous timer
        timer = setTimeout(() => {
            fn(); // run the function after delay
        }, delay);
    };
}

// Example Use Cases:

// 1. Search Input (wait until user stops typing)
const search = debounce(() => {
    console.log("Searching...");
}, 500);

// 2. Resize Window (avoid calling on every pixel change)
window.addEventListener("resize", debounce(() => {
    console.log("Window resized!");
}, 300));

// 3. Auto Save (save only after user stops editing)
const autoSave = debounce(() => {
    console.log("Data auto-saved!");
}, 1000);
// 🔹 Easy Difference Table
// Feature	Debounce 🕒	Throttle 🚦
// When runs	After you stop triggering	At fixed intervals
// Use case	Search box, auto-save	Scroll, resize, button spam
// Analogy	Wait until typing stops	Traffic light lets cars pass every X sec


// ⚡ In short:

// Debounce → “Run once after the action stops.”

// Throttle → “Run regularly, but not too often.”
