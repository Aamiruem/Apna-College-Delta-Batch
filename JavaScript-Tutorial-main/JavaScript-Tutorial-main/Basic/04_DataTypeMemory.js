//Heap vs Stack memory

//Heap memory example
let person1 = {
    name: "Mohit",
    age: 30
};
let person2 = person1
person2.name = "Rohit";
console.log(person1.name); // Output: Rohit
console.log(person2.name); // Output: Rohit

//Stack memory example
let a = 10;
let b = a;
b = 20;
console.log(a); // Output: 10
console.log(b); // Output: 20
