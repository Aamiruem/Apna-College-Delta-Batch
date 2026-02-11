// Object literals are one of the most fundamental and versatile features in JavaScript.They allow you to create objects quickly with a simple syntax.Here's a comprehensive overview covering all key concepts:

// Basic Object Literal Syntax
// javascript
const student = {
    firstName: 'Amir',
    lastName: 'Hussain',
    age: 30,
    grade: 'A',
    subjects: ['Math', 'Science', 'Computer Science'],
    marks: {
        Math: 95,
        Science: 90,
        Computer: 95
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    isEmployed: true
};
// Property Types
// Primitive Values:

// javascript
const example = {
    string: 'hello',
    number: 42,
    boolean: true,
    nullValue: null,
    undefinedValue: undefined,
    symbol: Symbol('unique')
};
console.log(example);


// Nested Objects:
// javascript
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: {
        name: 'Alice',
        age: 30
    }
};

// Array Values:

// javascript
const colors = {
    primary: '#f00',
    secondary: '#0f0',
    tertiary: '#00f'
};  



// Object Values:

// javascript
const nested = {
    innerObject: { a: 1, b: 2 },
    array: [1, 2, 3],
    date: new Date(),
    regex: /pattern/gi
};
// Function Methods:

// javascript
const calculator = {
    add: function (a, b) { return a + b; },
    // Shorthand method syntax (ES6+):
    subtract(a, b) { return a - b; }
};
// Advanced Features
// Computed Property Names(ES6 +):

// javascript
const propName = 'age';
const person1 = {
    name: 'Alice',
    [propName]: 25,
    ['get' + propName]() { return this[propName]; }
};
// Property Shorthand(ES6 +):

// javascript
const x = 10, y = 20;
const point = { x, y }; // Same as { x: x, y: y }
// Spread Operator(ES2018 +):
// javascript
const defaults = { color: 'red', size: 'medium' };
const config = { ...defaults, size: 'large' };
// Object Destructuring:
// javascript
const { firstName, lastName } = person;
// Prototypes and Inheritance
// javascript
const animal = {
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
};

const dog = {
    __proto__: animal, // Set prototype
    name: 'Rex',
    speak() {
        super.speak(); // Call parent method
        console.log(`${this.name} barks.`);
    }
};
// Getters and Setters
// javascript
const circle = {
    radius: 5,
    get diameter() { return this.radius * 2; },
    set diameter(value) { this.radius = value / 2; }
};
// Property Descriptors
// javascript
const obj = {};
Object.defineProperty(obj, 'readOnlyProp', {
    value: 42,
    writable: false,
    enumerable: true,
    configurable: false
});
// Symbol Properties
// javascript
const id = Symbol('id');
const user = {
    name: 'John',
    [id]: 123 // Symbol as property key
};
// Dynamic Property Access
// javascript
const key = 'firstName';
console.log(person[key]); // Dynamic property access
// Practical Patterns
// Namespace Pattern:

// javascript
const myApp = {
    utils: {
        formatDate() { /* ... */ },
        validateEmail() { /* ... */ }
    },
    models: { /* ... */ }
};
// Module Pattern:

// javascript
const counter = (() => {
    let count = 0;

    return {
        increment() { count++; },
        get value() { return count; }
    };
})();
// Factory Function:

// javascript
function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, I'm ${this.name}`);
        }
    };
}
// Object literals are incredibly flexible in JavaScript and form the basis for many patterns and techniques in modern JavaScript development.
