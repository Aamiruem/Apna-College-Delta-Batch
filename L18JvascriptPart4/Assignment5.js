// let arr = [2, 5, 10, 4, 2, 7, 1, 9];
// let largest = 0;

// for(let i = 0; i<=arr.length; i++){
//     if(arr[i]>largest){
//         largest = arr[i];
//     }
// }

// console.log(largest)






// let arr = [2, 5, 10, 4, 2, 7, 1, 9]; // Define an array of numbers
// let largest = 0;                    // Start by assuming the largest number is 0

// // Loop through the array from index 0 to arr.length (inclusive ❌ — this is a bug)
// for (let i = 0; i <= arr.length; i++) {
//     // Check if the current element is greater than the current largest
//     if (arr[i] > largest) {
//         largest = arr[i]; // If so, update the largest value
//     }
// }

// // Output the largest number found
// console.log(largest);








let arr = [2, 5, 10, 4, 2, 7, 1, 9]; // Array of numbers
let largest = arr[0];               // Initialize largest with the first element of the array

// Loop from second element (index 1) to the end of the array
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {         // If current element is greater than current largest
        largest = arr[i];           // Update largest
    }
}

// Display the result
console.log(`The largest number is: ${largest}`);
