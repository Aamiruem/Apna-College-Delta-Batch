// let number = 2871253;
// let sum = 0;
// let copy = number;

// while(copy > 0){
//     digit = copy % 10;
//     sum += digit;
//     copy = Math.floor(copy / 10);
// }

// console.log(sum)



// // Input number
// let number = 287152;  // This is the number whose digits we want to sum
// let sum = 0;          // Initialize a variable to store the sum of digits

// // Extract each digit and add to sum
// while (number !== 0) {               // Loop runs until the number becomes 0
//     sum += number % 10;             // `number % 10` gets the last digit (e.g., 287152 % 10 = 2), and adds it to sum
//     number = Math.floor(number / 10); // `Math.floor(number / 10)` removes the last digit (e.g., 287152 / 10 = 28715.2 → 28715)
//     // This step effectively shortens the number one digit at a time from the right
// }

// // Output the result
// console.log(`The sum of digits is: ${sum}`); // Finally, print the result to the console




// 👇 Step-by-step breakdown for 287152:
// 287152 % 10 = 2 → sum becomes 2

// 287152 / 10 = 28715.2 → floor → 28715

// 28715 % 10 = 5 → sum becomes 7

// 2871 % 10 = 1 → sum becomes 8

// 287 % 10 = 7 → sum becomes 15

// 28 % 10 = 8 → sum becomes 23

// 2 % 10 = 2 → sum becomes 25

// Number becomes 0 → loop ends










let number = 287152; // Define the number whose digits we want to sum
let sum = 0;         // Initialize a variable to hold the sum of digits

// Convert the number to a string so we can loop through each digit as a character
for (let digit of number.toString()) {
    sum += parseInt(digit); // Convert the character back to a number and add it to the sum
    // Example: '2' → 2, then add to sum
}

// Print the final result to the console
console.log(`The sum of digits is: ${sum}`); // Output: The sum of digits is: 25



// 👇 Step - by - step breakdown for 287152:
//     number.toString() → "287152"

// Loop through each character: '2', '8', '7', '1', '5', '2'

// Convert each to number: 2 + 8 + 7 + 1 + 5 + 2 = 25

// Final output: The sum of digits is: 25
