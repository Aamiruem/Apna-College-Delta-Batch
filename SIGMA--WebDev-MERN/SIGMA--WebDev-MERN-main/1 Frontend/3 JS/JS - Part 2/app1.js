// Alerts, Prompts and Confirm
alert("Something is wrong.");
alert("This is a simple alert.");

prompt("Enter your name :"); // without store
let fName = prompt("Enter your first naem :"); 
let lName = prompt("Enter your last name :");
let fullName = fName + " " + lName; // It'll store prompt
console.log(`Welcome ${fullName} in our website.`);

confirm("Are you sure, you want to blast your system?");

// Error and Warning

console.error("This is an error.");
console.error("This is a simple error.");

console.warn("This is a warning message.");
console.warn("This is a simple warning message.");