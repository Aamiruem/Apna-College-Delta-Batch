// Qs1.Write a JavaScript program to get the last n elements of an array.[n can be any positive number].For example:for array[7,9,0,-2] and n=3Print,[9, 0, -2]


let arr = [7, 9, 0, -2];

let n = 3;
// let ans = arr.slice(1, n);
let ans = arr.slice(arr.length-n);

console.log(ans); // Output: [9, 0, -2]




// Qs1.Write a Java Script program to get the first n elements of an array.[n can be any positive number].For example: for array[7, 9, 0, -2] and n = 3 Print, [7, 9, 0]
let arr1 = [7, 9, 0, -2];
let n1 = 3;
let ans1 = arr1.slice(0, n1);
console.log(ans1);
