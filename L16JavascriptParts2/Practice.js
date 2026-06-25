// Traffic Light
let color = "red";

if (color == "red") {
    console.log("Stop!");
} else if (color == "yellow") {
    console.log("Ready");
} else if (color == "green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}











let color1 = "red";

if (color1 == "red") {
    console.log("Stop!");
}
if (color1 == "yellow") {
    console.log("Ready");
}
if (color1 == "green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}






let marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}





let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
    console.log("You need to wait " + (18 - age) + " more years to be eligible to vote");
}
console.log("Thank you for voting");






let today = new Date();
let currentMonth = today.getMonth(); // Returns a zero-based index
console.log("Current Month (0-based):", currentMonth);






let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let today1 = new Date();
let currentMonthIndex = today.getMonth();
let currentMonthName = monthNames[currentMonthIndex];
console.log("Current Month Name:", currentMonthName);



let specificDate = new Date('2024-07-13');
let monthIndex = specificDate.getMonth();
let monthName = monthNames[monthIndex];
console.log("Month from Specific Date:", monthName);



function getMonthName(date) {
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let monthIndex = date.getMonth();
    return monthNames[monthIndex];
}

let date = new Date('2024-07-13');
console.log("Month Name for given date:", getMonthName(date)); // July






// Array of month names
let monthNames1 = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Get the current month
let today2 = new Date();
let currentMonthIndex1 = today.getMonth();
let currentMonthName1 = monthNames[currentMonthIndex];
console.log("Current Month Name:", currentMonthName);



// Get month from a specific date
let specificDate1 = new Date('2024-07-13');
let specificMonthIndex = specificDate.getMonth();
let specificMonthName = monthNames[specificMonthIndex];
console.log("Month from Specific Date:", specificMonthName);






// Function to get month name from a date

// Set a specific month
let date1 = new Date();
date.setMonth(6); // Sets the month to July (0-based index)
console.log("Date after setting month to July:", date);

// Function to get month name from a date
function getMonthName(date) {
    let monthIndex = date.getMonth();
    return monthNames[monthIndex];
}

console.log("Month Name for given date:", getMonthName(new Date('2024-07-13'))); // July
