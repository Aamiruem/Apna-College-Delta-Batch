let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = arr.map(num => num * 2);
    console.log(result)






// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let result = arr.map(num => num * 2);

// console.log(result);
// Word-by-Word Meaning
// let arr = [1,2,3,4,5,6,7,8];

// let → create a variable.

// arr → name of the variable (short for array).

// [1,2,3,4,5,6,7,8] → an array with numbers 1 to 8.

// arr.map(...)

// .map → array method. It goes through each element of the array and makes a new array.

// It does not change the original array.

// Inside, you give a function that tells how to transform each element.

// num => num * 2

// num → current element of the array.

// => → arrow function (short way to write a function).

// num * 2 → multiply the element by 2.

// So each element becomes double.

// let result = ...

// Save the new array into variable result.

// console.log(result);

// Print the new array on the screen.

// Dry Run (Step by Step)
// Original array = [1,2,3,4,5,6,7,8]

// First element → num = 1 → 1 * 2 = 2

// Second element → num = 2 → 2 * 2 = 4

// Third element → num = 3 → 3 * 2 = 6

// Fourth element → num = 4 → 4 * 2 = 8

// Fifth element → num = 5 → 5 * 2 = 10

// Sixth element → num = 6 → 6 * 2 = 12

// Seventh element → num = 7 → 7 * 2 = 14

// Eighth element → num = 8 → 8 * 2 = 16

// Final Result
// result = [2,4,6,8,10,12,14,16]

// Console output:

// Code
// [2, 4, 6, 8, 10, 12, 14, 16]
// 👉 Easy takeaway:

// map → makes a new array.

// Each element is transformed (here doubled).

// Original array stays the same.
