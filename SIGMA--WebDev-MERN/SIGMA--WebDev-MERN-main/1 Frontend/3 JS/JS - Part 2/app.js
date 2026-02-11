// Print something using console.log
console.log("Hlw JavaScript.");
console.log("JavaScript code is running.");
let a = 5;
let b = 3;
// console.log("Sum is : " + (a+b) );
console.log("Sum is : ", a+b);

// Template Literals
let pencilPrice = 10;
let erasorPrice = 5;
console.log(`The total price is : ${pencilPrice + erasorPrice} Rupees.`); // BackTicks

// Operators in JS
// 1. Arithmetic Operators
let x = 10;
let y = 5;

console.log("Addition : ", x+y); // Addition
console.log("Substraction : ", x-y); // Substraction
console.log("Multiplication : ", x*y); // Multiplication
console.log("Division : ", x/y); // Division
console.log("Modulo/Remainder : ", x%y); // Modulo/Remainder
console.log("Power : ", x**y); // Power

// 2. Unary Operators
// Pre Increament/Decreament Operators
console.log("Pre Increament : ", ++x);
console.log("Pre Decreament : ", --x);
// Post Increament/Decreament Operators
console.log("Post Increament : ", x++);
console.log("Post Decreament : ", x--);

console.log("Final value of x : ", x); // Final value of x after the all operations

// 3. Assignment Operators
y = x; console.log("Equalto : ", y); // Equalto operator
y += x; console.log("PlusEqualto : ", y); // PlusEqualto
y -= x; console.log("MinusEqualto : ", y); // MinusEqualto
y *= x; console.log("MultipliedByEqualto : ", y); // MultipliedByEqualto
y /= x; console.log("DivideByEqualto : ", y); // DivideByEqualto
y %= x; console.log("ModuloEqualto : ", y); // ModuloEqualto
y = 2; // y value declared because it was 0
y **= x; console.log("PowerEqualto : ", y); // PowerEqualto

// 4. Comparison Operators
let age = 18;
console.log("LessThan : ", age < 18); // LessThan
console.log("GreaterThan : ", age > 18); // GreaterThan
console.log("LessThanEqualto : ", age <= 18); // LessThanEqualto
console.log("GreaterThanEqualto : ", age >= 18); // GreaterThanEqualto
console.log("DoubleEqualto : ", age == 18); // DoubleEqualto
console.log("NotEqualto : ", age != 18); // NotEqualto
console.log("TrippleEqualto : ", age === "18"); // TrippleEqualto

// Comparison for Non Numbers
console.log("CapitalSmall", 'a' == 'A'); // in JS, Every Character has a value like :-
console.log("CapitalSmall", 'a' === 'A'); // 'a' value starts from 61 and 'A' value starts from 41
console.log("SpecialChar : ", '*' < '&'); // SpecialCharacters Comparison
console.log("Zero : ", '0' == 0); // Zero 

// Conditional Statements
age = 18;
if (age >= 18) {
    console.log("You can vote.");
    console.log("You can drive.");
}
let firstName = "Altamash";
if (firstName == "Altamash") {
    console.log(`Welcome Mr ${firstName} in our website.`);
}
// Practice Question
let trafficLightColor = "green";
if (trafficLightColor == "red") {
    console.log("STOP : Red Light is ON.");
}
if (trafficLightColor == "yellow") {
    console.log("SLOW DOWN : Yellow Light is ON.");
}
if (trafficLightColor == "green") {
    console.log("GO : Green Light is ON.");
}

age = 14;
if (age >= 18) {
    console.log("You can vote.");
}
else if (age < 18) {
    console.log("You cannot vote.");
}
let marks = 75;
if (marks >= 80) {
    console.log("Grade : A+");
} else if (marks >= 60) {
    console.log("Grade : A");
} else if (marks >= 33) {
    console.log("Grade : B");
} else if (marks < 33) {
    console.log("Grade : F");
}

color = "blue";
if (color === "red") {
    console.log("Stop");
} else if (color === "yellow") {
    console.log("Slow Down");
} else if (color === "green") {
    console.log("Go");
}
else {
    console.log("Traffic light is broken");
}

age = 16;
if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}

// Practice Question
let size = "S";
if (size == "XL") {
    console.log("Price : Rs. 250");
} else if (size == "L") {
    console.log("Price : Rs. 200");
} else if (size == 'M') {
    console.log("Price : Rs. 100");
} else { // for small size 'S'
    console.log("Price : Rs. 50");
}

// Nested If Else Statement
marks = 33;
if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Fail");
}

// Logical Operators
console.log("Logical AND : ", 5>5 && 5<=5);
console.log("Logical OR : ", 5>5 || 5<=5);
console.log("Logical NOT : ", !(5 == 5) );
marks = 75;
if (marks >= 33 && marks >= 80) {
    console.log("Pass"); console.log("Grade : A+");
}
if (marks >= 33 || marks >= 60) {
    console.log("Pass"); console.log("Grade : A+");
}
if ( !(marks < 33) ) {
    console.log("Pass");
    console.log("Grade : A+");
}
if ( (10>5 && 10<5) || !(10==5) ) {
    console.log("Combination of Logical Operators.");
}

// Practice Question 
let str = "apple";
if (str[0] == 'a' && str.length > 3) {
    console.log("Good String");
} else {
    console.log("Not a Good String");
}
let num = 12;
if ( (num%3 === 0) && ((num+1 == 15) || (num-1 == 11)) ) {
    console.log("Safe");
} else {
    console.log("Unsafe");
}

// Truthy and Falsy
// Truthy values :- Everything else except "Falsy values"
if ( (true) && (1) ) {
    console.log("For truthy: It's for true value.");
} else {
    console.log("For falsy: It's for false value.");
}
// Falsy values :- 0, -0, 0n(Right value), ""(Empty string), null, undefined, NaN
if ( (true) && (0n) ) {
    console.log("For truthy: It's for true values.");
} else {
    console.log("For falsy: It's for false values.");
}

// Switch statement 
let colour = "green";

switch (colour) {
    case "red" : console.log("Stop"); break;
    case "yellow" : console.log("Slow Down"); break;
    case "green" : console.log("Go"); break;
    default : console.log("Traffic light is broken");
}

// Practice Question 
let day = 7;
switch (day) {
    case 1 : console.log("Monday"); break;
    case 2 : console.log("Tuesday"); break;
    case 3 : console.log("Wednesday"); break;
    case 4 : console.log("Thursday"); break;
    case 5 : console.log("Friday"); break;
    case 6 : console.log("Saturday"); break;
    case 7 : console.log("Sunday"); break;
    default : console.log("Wrong day"); break;
}