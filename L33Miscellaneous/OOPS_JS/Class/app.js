class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let p1 = new Person("adam", 22);

p1.talk();
// console.log(p1.name);

