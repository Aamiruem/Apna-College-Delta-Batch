let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let even = arr.filter(num => num%2 === 0);
console.log(even);





// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let even = arr.filter(num => num % 2 === 0);

// console.log(even);
// Word-by-Word Meaning
// let arr = [1,2,3,4,5,6,7,8];

// let → create a variable.

// arr → name of the variable (short for array).

// [1,2,3,4,5,6,7,8] → an array with numbers 1 to 8.

// arr.filter(...)

// .filter → array method. It checks each element and keeps only those that pass the condition (true).

// Makes a new array with the selected elements.

// num => num % 2 === 0

// num → current element of the array.

// % → modulus operator (remainder after division).

// num % 2 → remainder when dividing by 2.

// === 0 → check if remainder is exactly 0.

// So this condition means: is the number even?

// let even = ...

// Save the new filtered array into variable even.

// console.log(even);

// Print the new array on the screen.

// Dry Run (Step by Step)
// Array = [1,2,3,4,5,6,7,8]

// num = 1 → 1 % 2 = 1 → not 0 → skip

// num = 2 → 2 % 2 = 0 → keep

// num = 3 → 3 % 2 = 1 → skip

// num = 4 → 4 % 2 = 0 → keep

// num = 5 → 5 % 2 = 1 → skip

// num = 6 → 6 % 2 = 0 → keep

// num = 7 → 7 % 2 = 1 → skip

// num = 8 → 8 % 2 = 0 → keep

// Final Result
// even = [2,4,6,8]

// Console output:

// Code
// [2, 4, 6, 8]
// 👉 Easy takeaway:

// filter → keeps only elements that match the condition.

// Here, condition = “is even number”.

// Result = all even numbers from the array.
