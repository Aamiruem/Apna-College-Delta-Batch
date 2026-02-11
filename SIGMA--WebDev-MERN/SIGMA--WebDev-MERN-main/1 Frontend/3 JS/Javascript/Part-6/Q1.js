// Return elements larger than a number

function elementsLargerThan(arr, nums) {
  return arr.filter((item) => item > nums);
}

let array = [10, 25, 5, 8, 30];
let number = 10;
console.log(elementsLargerThan(array, number));
