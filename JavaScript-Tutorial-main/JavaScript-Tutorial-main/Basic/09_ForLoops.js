//for loops

//Syntex
// for (initialization; condition; increment/decrement) {
//     //code to be executed        
// }

//Example
// for (let i = 0; i < 5; i++) {
//     console.log("Mohit Decodes " + i);
// }

//for in loop
//syntex
// for (variable in object) {
//     //code to be executed
// }

//Example
// let person = {fname:"Mohit", lname:"Kumar", age:25};
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

//for of loop
//syntex
// for (variable of iterable) {
//     //code to be executed
// }

//Example
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

//Real Example
const students = [
    { name: "Mohit", age: 25 },
    { name: "Amit", age: 22 },
    { name: "Ravi", age: 23 },
];
for (let student of students) {
    console.log(student.name + " is " + student.age + " years old.");
}
