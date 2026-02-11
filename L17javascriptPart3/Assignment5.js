// Qs. write a javascript program to check if an element exists in an array or not.


// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log(`${item} exists in the array.`);
// } else{
//     console.log(`${item} does not exist in the array.`);
// }




// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 64;

// if(arr.indexOf(item) != -1){
//     console.log("Element exists in the array.");
// } else{
//     console.log("Element does not exist in the array.");
// }



const prompt = require('prompt-sync')();

// Define the array
let arr = ["hello", 'a', 23, 64, 99, -6];

// Get user input
let userInput = prompt("Enter an element to search: ");

// Convert to number if the input is a numeric string
let searchValue = isNaN(userInput) ? userInput : Number(userInput);

// Check if element exists in array
if (arr.indexOf(searchValue) !== -1) {
    console.log("Element exists in the array.");
} else {
    console.log("Element does not exist in the array.");
}
