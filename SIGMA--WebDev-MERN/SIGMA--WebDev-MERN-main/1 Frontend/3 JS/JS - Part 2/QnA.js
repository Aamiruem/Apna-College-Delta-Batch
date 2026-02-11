// Ans : 1
let num = 250;
if (num%10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

// Ans : 2
// let name = prompt("Enter your name :");   // prompt and alert is not working in terminal
// let age = prompt("Enter your age :");   // That's why i commented it
// alert(`${name} is ${age} years old.`);  // But without comment it'll work in browser's inspect (console)

// Ans : 3
let monthNameInQuarter = 1;
switch (monthNameInQuarter) {
    case 1 : console.log("January, February, March"); break;
    case 2 : console.log("April, May, June"); break;
    case 3 : console.log("July, August, September"); break;
    case 4 : console.log("October, November, December"); break;
}

// Ans : 4
let str = "Alt Mash";
if ( (str[0] == 'a' || str[0] == 'A') && (str.length > 5) ) {
    console.log("Golden String.");
} else {
    console.log("Not a Golden String.");
}

// Ans : 5
let a = 5;
let b = 18;
let c = 13;
if (a > b && a > c) {
    console.log(a, "is largest.");
} else if (b > a && b > c) {
    console.log(b, "is largest.");
} else {
    console.log(c, "is largest.");
}

// Ans : 6 (Bonus)
let num1 = 32;
let num2 = 47852;
if (num1%10 == num2%10) {
    console.log("Numbers have the same last digit which is", num1%10);
} else {
    console.log("Numbers don't have the same last digit");
}