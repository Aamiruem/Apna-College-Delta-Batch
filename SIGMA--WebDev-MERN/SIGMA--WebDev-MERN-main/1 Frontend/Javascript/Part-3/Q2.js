//Write a JavaScript program to get the last n elements of an array.
// [n can be any positive number]
// Example: For array [7, 9, 0, -2] and n=3, print [9, 0, -2].

function getLastElements(arr, n) {
  return arr.slice(-n);
}

let array = [7, 9, 0, -2];
let n = 3;
console.log(getLastElements(array, n)); // Output: [9, 0, -2]
