// Functions in JS
function printHello() {
    console.log("PrintHello in function : Hello!");
}
printHello(); // Output: Function call

function printName() {
    console.log("PrintName in function : Alt Mash");
}
printName(); printName(); printName(); // Everytime prints when we'll call it

function print1to5() {
    console.log("Print number using loop in function :");
    for (let i=1; i<=5; i++) {
        console.log(i);
    }
}
print1to5();

function isAdult() {
    console.log("PrintAdultorNot using if-else in function :");
    let age =  17;
    if (age >= 18) {
        console.log("You are adult");
    } else {
        console.log("You are not adult");
    }
}
isAdult();

// Practice Qs
function printPoem() {
    console.log("Twinkle Twinkle little star,");
    console.log("How I wonder what you are,");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
printPoem();

function rollDice() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log("You rolled a", randomNum);
}
rollDice();

// Functions with Arguments(parameters)
function printMyName(name) {
    console.log("PrintName using args in function :", name);
}
printMyName("Alt Mash"); // Output: Function call with argument(parameter)

function printMyInfo(name, age) {
    console.log("PrintName and Age using args in function : ", `${name}'s age is ${age}`);
}
printMyInfo("Altamash", 20);
printMyInfo("Alt Mash");

function printSum(a, b) {
    console.log("Sum of two numbers using args in function :", a + b);
}
printSum(5, 3);

function calcAverage(a, b, c) {
    let average = (a + b + c) / 3;
    console.log("Average of three numbers using args in function :", average);
}
calcAverage(4, 7, 4);

function printTable(n) {
    console.log("Print multiplication table for", n);
    for (let i=n; i<=n*10; i+=n) {
        console.log(`${n} x ${i/n} = ${i}`);
    }
}
printTable(5);

// Return keyword 
function sum(a, b) {
    console.log("Return 1 :");
    return a + b;
    console.log("Return 2 :"); // After return, anything will not be execute/print
}
let printS = sum(4, 2); console.log("Return sum using a variable in consoleLog :", printS);
console.log("Return sum :", sum(3, 4)); // recommended way to print
console.log("Return sum using function inside a function :", sum(sum(3, 4), 8)); // it will also possible

function adultorNot(age) {
    if (age >= 18) {
        return "Adult";
        console.log("You are adult"); // Not execute after return
    } else {
        return "Not Adult";
        console.log("You are not adult"); // Not execute after return
    }
}
console.log("Return adult/notAdult :", adultorNot(20));

function ReturnSum(n) {
    let sum = 0;
    for (let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}
console.log("Return sum of n numbers :", ReturnSum(6));

let arr = ["Hlw", "My", "Name", "Is", "Altamash", "!"];
function concatArray(arr) {
    let str = "";
    for (let i=0; i<arr.length; i++) {
        str += arr[i];
    }
    return str;
}
console.log("Concatination :", concatArray(arr));