// 1. if statement
let age = 20;
if (age >= 18) {
    console.log("You are eligible to vote."); // Runs if age is 18 or more
}

// 2. if-else statement
let isRaining = true;
if (isRaining) {
    console.log("Take an umbrella."); // Runs if isRaining is true
} else {
    console.log("Enjoy the sunshine."); // Runs if isRaining is false
}

// 3. if-else if-else ladder
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 75) {
    console.log("Grade: A"); // Runs for 75 to 89
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// 4. Ternary operator (short-hand for if-else)
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: "Please log in."

// 5. Nested if
let username = "admin";
let password = "12345";

if (username === "admin") {
    if (password === "12345") {
        console.log("Login successful."); // Both conditions must be true
    } else {
        console.log("Incorrect password.");
    }
} else {
    console.log("Unknown user.");
}

// 6. switch-case statement
let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Wednesday":
        console.log("Midweek day."); // Runs here
        break;
    case "Friday":
        console.log("Almost the weekend.");
        break;
    default:
        console.log("Regular day.");
}

// 7. Using logical operators in conditions
let hasID = true;
let isAdult = false;

if (hasID && isAdult) {
    console.log("Entry allowed.");
} else {
    console.log("Entry denied."); // Runs because isAdult is false
}
