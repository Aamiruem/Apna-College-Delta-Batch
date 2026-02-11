// AND (&&) operator
let hasTicket = true;
let hasId = true;
if (hasTicket && hasId) {
  console.log("You can enter the venue."); // This will execute
}

// OR (||) operator
let isStudent = false;
let isSenior = true;
if (isStudent || isSenior) {
  console.log("You qualify for a discount."); // This will execute
}

// NOT (!) operator
let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("Please log in to continue."); // This will execute
}

// Combining operators
let age = 25;
let hasLicense = true;
if ((age >= 18 && hasLicense) || age >= 65) {
  console.log("You can rent a car."); // This will execute
}
