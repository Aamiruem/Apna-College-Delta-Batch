// Ans : 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

console.log(`Original array : ${arr}`);
for (let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(`Array after removing all occurance of num : ${arr}`);

// Ans : 2
let number = 287152;
// 1. First way to solve using toString method (Changing Number into String)
let count1 = 0;
let numberStr = number.toString();

for (let i=0; i<numberStr.length; i++) {
    count1++;
}
console.log("1. Number of digits :", count1);
// 2. Second way to solve using Math.floor (Removing floating point last integer)
let count2 = 0;

while (number > 0) {
    count2++;
    number = Math.floor(number / 10);
}
console.log("2. Number of digits :", count2);

// Ans : 3
// 1. First way to solve
number = 287152;
let sum1 = 0;
numberStr = number.toString();

for (let i=0; i<numberStr.length; i++) {
    let digit = parseInt(numberStr[i]);
    sum1 += digit;
}
console.log("1. Sum of digits :", sum1);
// 2. Second way to solve
let sum2 = 0;
while (number > 0) {
    let digit = number % 10;
    sum2 += digit;
    number = Math.floor(number / 10);
}
console.log("2. Sum of digits :", sum2);

// Ans : 4
let n = 5;
// 1. First way to solve
let factorial = 1;
for (let i=1; i<=n; i++) {
    factorial *= i;
}
console.log(`1. Factorial of ${n} is : ${factorial}`);
// 2. Second way to solve
let fact = 1;
while (n >= 1) {
    fact *= n;
    n = n-1;
}
console.log("2. Factorial :", fact);

// Ans : 5
let numArray = [3, 7, 1, 5, 10, 8, 15, 9, 2];

let largestNum = 0;
for (let i=0; i<numArray.length; i++) {
    if (numArray[i] > largestNum) {
        largestNum = numArray[i];
    }
}
console.log("Largest numbner is :", largestNum);