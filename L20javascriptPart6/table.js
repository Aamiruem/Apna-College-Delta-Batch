
// function printTable(n) {
//     // Loop from 1 to 10
//     for (let i = 1; i <= 10; i++) {
//         // Print the multiplication in format: n * i = result
//         // Example: 5 * 1 = 5
//         console.log(`${n} * ${i} = ${n * i}`);
//     }
// }

// // Call the function to print the table of 5
// printTable(5);



// console.log("\n");
// function printTables(n) {
//     // Loop from n to n*10, with a step of n
//     for (let i = n; i <= n * 10; i += n) {
//         // Print each multiple of n
//         console.log(i);
//     }
// }

// // Call the function to print multiples of 5 up to 50
// printTables(5);











const prompt = require('prompt-sync')(); // Import prompt-sync

const n = parseInt(prompt("Enter a number: ")); // Take number input

function printTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n * i}`);
    }
}

printTable(n);
