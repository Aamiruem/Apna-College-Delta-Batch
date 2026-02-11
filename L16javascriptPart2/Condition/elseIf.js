// if (condition1) {
//   // code to execute if condition1 is true
// } else if (condition2) {
//   // code to execute if condition1 is false and condition2 is true
// } else if (condition3) {
//   // code to execute if both condition1 and condition2 are false, and condition3 is true
// } else {
//   // code to execute if all conditions above are false
// }





// 1. Grading System
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will execute
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}



// 2. Time of Day Greeting
let hour = 14; // 2 PM

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 17) {
  console.log("Good afternoon!"); // This will execute
} else if (hour < 20) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}


// 3. User Authentication
let isLoggedIn = true;
let isAdmin = false;
let hasPermission = true;

if (!isLoggedIn) {
  console.log("Please log in first");
} else if (isAdmin) {
  console.log("Welcome, Administrator!");
} else if (hasPermission) {
  console.log("Welcome, User!"); // This will execute
} else {
  console.log("You don't have permission to access this page");
}





// Important Notes
// Order Matters: Conditions are checked from top to bottom. The first true condition will execute its block, and the rest will be skipped.

// Only one block executes: Even if multiple conditions are true, only the first matching block will run.

// Else is optional: You can have multiple else if statements without a final else.

// Equivalent to nested ifs: An else if chain is equivalent to nested if...else statements but is more readable.

// Comparison with Switch Statement





// Using else if
let day = 3;
if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 3) {
  console.log("Wednesday"); // This will execute
} else {
  console.log("Other day");
}

// Equivalent switch
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Other day");
}
