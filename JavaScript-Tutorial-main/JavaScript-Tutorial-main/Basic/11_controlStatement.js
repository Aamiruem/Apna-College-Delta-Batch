//If-else or else if statement
//If-else else-if statement
// let mark = 30;
// if (mark >= 80) {
//   console.log("You have passed with distinction");
// } else if (mark >= 60) {
//   console.log("You have passed");
// } else if (mark >= 40) {
//   console.log("You are promoted");
// } else {
//   console.log("You have failed");
// }

//Switch statement
//syntax
// switch (expression) {
//   case value1:
// code block
//     break;
//   case value2:
// code block
//     break;
//   case valueN:
// code block
//     break;
//   default:
// code block
// }
//Example
// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

//Ternary operator es6
//syntax
// condition ? expression1 : expression2;

//Example
// let age = 18;
// let result = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
// console.log(result);

// Real Life Example
let isLogin = true;
let message = isLogin ? "Welcome back!" : "Please log in";
console.log(message);

// if(isLogin) {
//   console.log("Welcome back!");
// }
// else {
//   console.log("Please log in");
// }

//Muliple Ternary operator
let age = 20;
let result =
  age < 18
    ? "You are a minor"
    : age < 60
    ? "You are an adult"
    : "You are a senior citizen";
console.log(result);
