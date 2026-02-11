// Qs1: Write a JavaScript program to get the first n elements of an array.
// [n can be any positive number]
// Example: For array [7, 9, 0, -2] and n=3, print [7, 9, 0].

function getFirstElements(arr, n) {
  return arr.slice(0, n);
}

let array = [7, 9, 0, -2];
let n = 3;
console.log(getFirstElements(array, n)); // Output: [7, 9, 0]
