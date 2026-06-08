//while loops
//Syntax
// while (condition) {
//     // code block to be executed
// }

//Example
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//do while loops
//Syntax

// do { 
//     // code block to be executed
// } while (condition);
//Example
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//Real Life Example
let password = "";
let correctPassword = "admin";
do {
    password = prompt("Enter your password:");
} while (password !== correctPassword); 
console.log("Access granted!");