// let arr = [1, 2, 3];

// let combine = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(combine);



let arr = [1,2,3,4];

let sum = arr.reduce((acc,curr)=>acc+curr, 0);

console.log(sum);





// Word-by-Word Meaning
// let arr = [1,2,3,4];

// let → create a variable.

// arr → name of the variable (short for array).

// [1,2,3,4] → an array with numbers 1, 2, 3, 4.

// arr.reduce(...)

// .reduce → array method. It loops through the array and combines values into one result.

// Needs two things:

// A callback function (acc,curr)=>acc+curr

// An initial value 0.

// (acc,curr)=>acc+curr

// acc → accumulator (stores running total).

// curr → current element of the array.

// => acc+curr → arrow function, adds current element to accumulator.

// ,0

// This is the initial value of the accumulator.

// Start the sum at 0.

// let sum = ...

// Save the final result of reduce into variable sum.

// console.log(sum);

// Print the value of sum on the screen.

// Dry Run (Step by Step)
// Array = [1,2,3,4]  
// Initial accumulator = 0

// First element → curr = 1  
// acc = 0 + 1 = 1

// Second element → curr = 2  
// acc = 1 + 2 = 3

// Third element → curr = 3  
// acc = 3 + 3 = 6

// Fourth element → curr = 4  
// acc = 6 + 4 = 10
