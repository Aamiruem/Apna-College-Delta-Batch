const student = {
    name: "aamir",
    class: "graduate",
    age: 22,
    
    subjects: ["Mathematics", "Physics", "Chemistry"],
    grades: {
        math: 90,
        physics: 95,
        chemistry: 95
    },
    userName: "aamir@123",
    password: 123,

};
const { userName: user, password: pass } = student;
console.log(user, pass);





const person = {
    name: "Alice",
    age: 28,
    city: "Delhi"
};

// Basic
const { name, age } = person;
console.log(name, age); // Alice 28

// Renaming variables
const { city: location } = person;
console.log(location); // Delhi

// Default values
const { job = "Engineer" } = person;
console.log(job); // Engineer
