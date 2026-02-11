// Template Literals
// They are used to add embedded expressions in a string.
// let a = 5;
// let b = 10;
// console.log(Your pay $(a + b) rupees');
// Il console.log("Price is", a + b, "rupees");

let pencilPrice = 15;
let erasorPrice = 10;
// let output = `The total price is: ${pencilPrice + erasorPrice} Rupees.`;
// console.log(output);

let output = (`The total price is: ${pencilPrice + erasorPrice} Rupees.`); // This is a template literal expression (back ticks ``)
console.log(output);




const name = "Aman";
const age = 25;

const intro = `My name is ${name} and I am ${age} years old.`;
console.log(intro);
// Output: My name is Aman and I am 25 years old.


const multiLine = `This is the first line.
This is the second line.`;
console.log(multiLine);



const a = 5;
const b = 10;

console.log(`The sum of a and b is ${a + b}`);
// Output: The sum of a and b is 15


function greet(name) {
  return `Hello, ${name}!`;
}

const message = `${greet("Aman")}`;
console.log(message); // Output: Hello, Aman!




function tag(strings, nameExp, ageExp) {
  const str0 = strings[0]; // "Hello, my name is "
  const str1 = strings[1]; // " and I am "
  const str2 = strings[2]; // " years old."
  return `${str0}${nameExp.toUpperCase()}${str1}${ageExp * 2}${str2}`;
}

const name1 = "Aamir";
const age1 = 22;

const result = tag`Hello, my name is ${name1} and I am ${age1} years old.`;
console.log(result); // Hello, my name is AMAN and I am 50 years old.





