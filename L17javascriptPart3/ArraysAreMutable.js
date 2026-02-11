// Arrays are mutable in JavaScript=> it can be changed after it is created
// Example 1: Changing the value of an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]
// Changing the value of the array
numbers[0] = 10;
console.log(numbers); // [10, 2, 3, 4, 5]
// Example 2: Adding a new element to an array
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1); // [1, 2, 3, 4, 5]
// Adding a new element to the array
numbers1[5] = 6;
console.log(numbers1); // [1, 2, 3, 4, 5, 6]
// Example 3: Changing the value of a string (which is immutable in JavaScript)
let name1 = "kamran";
console.log(name1); // "kamran"
// Changing the value of the string
name1[0] = "k";
console.log(name1); // "kamran"


let fruits = ["mango", "apple", "litchi"];

console.log(fruits);
console.log(" length of fruits" ,fruits.length);

fruits[0] = "banana";

console.log(fruits);

fruits[3] = "orange";

fruits[10] = "kiwi";

console.log(fruits);

fruits[fruits.length] = "grapes";

console.log(fruits);

fruits[fruits.length] = "pineapple";


console.log(" length of fruits" ,fruits.length);



let nums = [2, 4, 6, 8, 10];

console.log(nums);

nums[0] = 1;

console.log(nums);

nums[1] = 3;

console.log(nums);

nums[2] = 5;

console.log(nums);



let name = "rohit";
name[0] = 'm';
console.log(name);



let fruits1 = ["mango", "apple", "litchi"];

console.log(fruits1);
