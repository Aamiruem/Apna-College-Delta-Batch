//Find the largest number in an array with only positive numbers.

function findLargestNumber(arr) {
  return Math.max(...arr);
}

let arr = [34, 67, 12, 98, 24];
console.log(findLargestNumber(arr)); // Output: 98
