// Array Reduce() method 
// Synax
// array.reduce((accumulator, currentValue
//     )=> [initialValue])
//Example
// const numbers = [10,20,30];
// const sum = numbers.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);
// console.log(sum);

//Slice vs Splice
// Slice
//eXAMPLE
// const fruits = ['apple', 'banana', 'cherry', 'date'];
// const slicedFruits = fruits.slice(1, 3); // ['banana', 'cherry']
// console.log(slicedFruits); // ['banana', 'cherry']
// console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

// Splice
//eXAMPLE
// const fruits2 = ['apple', 'banana', 'cherry', 'date'];
// const splicedFruits = fruits2.splice(1, 2,"x","y"); // ['banana', 'cherry']
// console.log(splicedFruits); // ['banana', 'cherry']
// console.log(fruits2); // ['apple', 'date']

//concat
// Example
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(array1.concat(array2)); // [1, 2, 3, 4, 5, 6]

//Flat
// Example
// const nestedArray = [1, 2, [3, 4], [5, 6,[7,8]]];
// const flattenedArray = nestedArray.flat();
// console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

//Spread operator (...)
// Example
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log([...array1, 10,20,30,...array2]); // [1, 2, 3, 10, 20, 30, 4, 5, 6]


//Destructuring
// Example
//syntax
// const [first, second] = ["html", "css"];
const array3 = [1, 2, 3];
const [a, b, c] = array3;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
const [first, second] = ["html", "css"];
console.log(first); // "html"
console.log(second); // "css"