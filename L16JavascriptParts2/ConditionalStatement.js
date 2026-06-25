//IF STATEMENT

let age1 = 18;

if (age1 >= 18) {
    console.log("You are an adult.");
}


//IF ELSE STATEMENT
let age2 = 16;

if (age2 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


//ELSE IF STATEMENT
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}




//IF ELSE IF ELSE STATEMENT

let age3 = 18;

if (age3 >= 18) {
    console.log("You are an adult.");
} else if (age3 >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}



// SWITCH STATEMENT
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}



// TERNARY OPERATOR
let age = 20;
let type = age >= 18 ? "adult" : "minor";
console.log("You are an " + type + ".");






// Example Combining Multiple Conditional Statements
let age4 = 25;
let score4 = 75;
let day4 = 5;

if (age4 >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

if (score4 >= 90) {
    console.log("Grade: A");
} else if (score4 >= 80) {
    console.log("Grade: B");
} else if (score4 >= 70) {
    console.log("Grade: C");
} else if (score4 >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

switch (day4) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let isWeekend = (day4 === 6 || day4 === 7) ? "It's the weekend!" : "It's a weekday.";
console.log(isWeekend);



// conditional statement
let firstName = "kamran";

if (firstName === "kamran") {
    console.log("Hello, Kamran!");
    console.log("Your first name starts with the letter 'K'.");
    console.log(`welcome ${firstName}`)
} else {
    console.log("Hello, stranger!");
}






let age5 = 14;
if (age5 >= 18) {
    console.log("you are eligible for vote.");
} else {
    console.log("you are not eligible for vote.");
}
