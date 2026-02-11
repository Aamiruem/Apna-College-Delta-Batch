// MISCELLANEOUS TOPICS in JS :
// Arrow functions :
const sum = (a, b) => {
    console.log(`Sum of ${a} and ${b} is : ${a + b}`);
}
sum(5, 3);

const pow = (a, b) => {
    console.log(`${a}^${b} is : ${a**b}`);
}
pow(2, 4);

const cube = n => { // a single parameter is allowed without parenthesis
    console.log(`Cube of ${n} is : ${n*n*n}`);
}
cube(3);

const greet = () => { // without parameter is not allowed without parenthesis
    console.log("Helo");
}
greet();


// Arrow functions : implicit return
const mul = (a, b) => (a * b);
console.log(`Multiply of two  nums is : ${mul(8, 6)}`);

const power = (a, b) => (Math.pow(a, b));
console.log("Power of two nums is :", power(2, 6));


// Set Timeout :
console.log("Hi there!");
setTimeout( () => {
    console.log("Apna college.");
}, 3000);
console.log("Welcome to");

const salam = () => (console.log("AssalamuAleikum"));
setTimeout (salam, 5000);


// Set Interval :
const aSalam = () => (console.log("AssalamuAleikum"));
const wSalam = () => (console.log("WaleikumAssalam"));

let id1 = setInterval(aSalam, 2500);
let id2 = setInterval(wSalam, 2600);

// console.log("id for 1st interval :", id1); // id showing on browser's console = 3
// console.log("id for 2nd interval :", id2); // id showing on browser's console = 4

clearInterval(id1); // for stopping id1 interval
clearInterval(id2); // for stopping id2 interval