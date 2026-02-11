// Qs1: Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example: If arr = [1, 2, 3, 4, 5, 6, 2, 3] and num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

function removeOccurrences(arr, num) {
  return arr.filter((element) => element !== num);
}

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log(removeOccurrences(arr, num)); // Output: [1, 3, 4, 5, 6, 3]
