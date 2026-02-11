// this keyword refers to the object that is currently executing the code — but what it actually points to depends on how and where the function is called.

//     Here’s the breakdown:

// 1️⃣ In an Object Method
// When used inside an object’s method, this refers to the object itself.

//     javascript
// Copy
// Edit
const user = {
    name: "Aamir",
    greet: function () {
        console.log("Hello, " + this.name);
    }
};

user.greet(); // Hello, Aamir
// 🔹 Here, this refers to the user object because greet was called using user.greet().

// 2️⃣ In a Regular Function(Non - strict Mode)
// In normal functions, this refers to the global object(window in browsers, global in Node.js).

//     javascript
// Copy
// Edit
function showThis() {
    console.log(this);
}
showThis(); // In browser → Window object
// 3️⃣ In Strict Mode
// In "use strict" mode, this is undefined if the function is called without an object.

//     javascript
// Copy
// Edit
// "use strict";
function showThis() {
    console.log(this);
}
showThis(); // undefined
// 4️⃣ Inside a Constructor Function
// When used in a constructor, this refers to the newly created object.

//     javascript
// Copy
// Edit
function Person(name) {
    this.name = name;
}
const p1 = new Person("Aamir");
console.log(p1.name); // Aamir
// 5️⃣ In a Class
// this works the same way as in constructors — it refers to the current instance.

//     javascript
// Copy
// Edit
class User {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hi, ${this.name}`);
    }
}
const u = new User("Aamir");
u.greet(); // Hi, Aamir
// 6️⃣ In Arrow Functions
// Arrow functions do not have their own this — they inherit this from the surrounding scope.

//     javascript
// Copy
// Edit
const obj = {
    name: "Aamir",
    arrowGreet: () => {
        console.log(this.name);
    }
};
obj.arrowGreet(); // undefined (because `this` comes from outer scope, not `obj`)
// 7️⃣ With call, apply, and bind
// We can manually set what this refers to.

//     javascript
// Copy
// Edit
function greet() {
    console.log("Hello, " + this.name);
}
const user1 = { name: "Aamir" };
const user2 = { name: "Hussain" };

greet.call(user1);  // Hello, Aamir
greet.apply(user2); // Hello, Hussain

const boundGreet = greet.bind(user1);
boundGreet();       // Hello, Aamir
// 💡 Quick Summary Table:

// Context	this Refers To
// Method in object	The object itself
// Regular function (non-strict)	Global object(window or global)
// Regular function (strict)	undefined
// Constructor function / class	The new instance
// Arrow function Inherited from surrounding scope
// call / apply / bind	Explicitly set object





const student = {
    name: "kamran",
    age:  22,
    english: 89,
    math: 96,
    phy: 98,
    getAvg() {
        console.log(this); //this is the object itself
        let avg = (this.eng + this.math + this.phy) / 3;
        
        console.log(`${this.name} got avg marks =  ${avg}`); //console.log(avg);
    }
}

console.log(student.getAvg());

function getAvg() {
    console.log(this); //this is the object itself and window object in browser
}
