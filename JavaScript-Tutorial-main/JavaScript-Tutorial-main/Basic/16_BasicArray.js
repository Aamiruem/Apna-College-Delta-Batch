//Array
// let name = ["mohit",24,true,"kumar"];
// console.log(name);
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);

// name[4]="singh";
// console.log(name);
// console.log(name[4]);
// name[1]=25;
// console.log(name);
// console.log(name[1]);
// console.log(name.length);

// Array Method
//push
let fruits = ["apple", "banana", "orange"];
// fruits.push("mango");
// console.log(fruits); // ["apple", "banana", "orange", "mango"]
// console.log(fruits.length); // 4

//pop
// let lastFruit = fruits.pop();
// console.log(lastFruit); // "mango"
// console.log(fruits); // ["apple", "banana", "orange"]
// console.log(fruits.length); // 3

//shift
let firstFruit = fruits.shift();
console.log(firstFruit); // "apple"
console.log(fruits); // ["banana", "orange"]
console.log(fruits.length); // 2

//unshift
fruits.unshift("kiwi", "grape");
console.log(fruits); // ["kiwi", "grape", "banana", "orange"]
console.log(fruits.length); // 4


