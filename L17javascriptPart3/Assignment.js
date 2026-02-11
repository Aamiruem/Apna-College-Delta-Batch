// Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].For example:for array[7,9,0,-2]and n = 3 Print,[7,9,0]


function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
  // Example usage:
  const arr = [7, 9, 0, -2];
  const n = 3;
  const result = getFirstNElements(arr, n);
  console.log(result); // [7, 9, 0]



// let arr = [7, 9, 0, -2];
// let n = 3;

// let ans = arr.slice(0, n); // slice from 0 to n number

// console.log(ans);
