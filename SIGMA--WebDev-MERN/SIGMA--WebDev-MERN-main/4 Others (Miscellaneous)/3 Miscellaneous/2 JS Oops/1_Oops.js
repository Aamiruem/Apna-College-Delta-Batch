// Oops - Object Oriented Programming

// Object Prototype :-
let arr1 = [1, 2, 3];
arr1.sayHello = () => (console.log("Hey, I am an array"));
// console.log("Array 1 :", arr1);

let arr2 = [1, 2, 3];
arr2.sayHello = () => (console.log("Hey, I am an array"));
// console.log("Array 2 :", arr2);

// console.log(arr1.sayHello === arr2.sayHello); // returns false
// console.log("abc".toLowerCase === "xyz".toLowerCase); // returns true 


// Factory functions :- A function that creates objects
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hey, My name is ${this.name}`);
        }
    };

    return person;
}
let p1 = PersonMaker("Sam", 20); 
let p2 = PersonMaker("Altmash", 20);

// console.log(p1.talk === p2.talk); // returns false 


// 'new' operator :-
function PersonNew(name, age) { // Constructor : name starts with capital letter
    this.name = name; // and does'nt return anything
    this.age = age;
    // console.log(this); // without 'new' operator it will print window
}
PersonNew.prototype.talk = function () {
    console.log(`Hey, My name is ${this.name}`);
}

let pNew1 = new PersonNew("Jack", 25);
let pNew2 = new PersonNew("Sparrow", 25);

// console.log(pNew1.talk === pNew2.talk); // returns true


// Classes :-
class PersonClass { // class : name starts with capital letter
    constructor(name, age) { // constructor of class
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hey, My name is ${this.name}`);
    }
}
let pCls1 = new PersonClass("Josh", 22);
let pCls2 = new PersonClass("Hazelwood", 22);

// console.log(pCls1.talk === pCls2.talk); // returns true


// Inheritance :-
class Person { // Parent or Base class
    constructor(name, age) {
        console.log("Person class constructor called");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hey, I am ${this.name}`);
    }
}
class Student extends Person { // Child class
    constructor(name, age, marks) {
        console.log("Child class constructor called");
        super(name, age); // parent class constructor is being called
        this.marks = marks;
    }
}
class Teacher extends Person {
    constructor(name, age, subject) {
        console.log("Child class constructor called");
        super(name, age);
        this.subject = subject;
    }
}
let person1 = new Student("Virat", 35, 70);
let teacher1 = new Teacher("Kohli", 35, "english");

// console.log(person1.talk === teacher1.talk); // returns true


// Another example with inheritance 
class Mammal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.type = "warm-blooded";
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Mammal {
    constructor(name, color) {
        super(name, color);
    }
    bark() {
        console.log(`${this.name} is barking...`);
    }
}
class Cat extends Mammal {
    constructor(name, color) {
        super(name, color);
    }
    meow() {
        console.log("Meow meow...");
    }
    eat() { // It will override to parent class's function
        console.log(`White color Cat is eating`);
    }
}

let dog1 = new Dog("Dog", "black");
let cat1 = new Cat("Cat", "white");