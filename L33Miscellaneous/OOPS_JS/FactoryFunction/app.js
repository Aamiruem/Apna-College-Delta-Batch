function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        },
    };

    return person;
}
let p1 = personMaker("adam", 22);// copy of more data to use our convenience
let p2 = personMaker("kamran", 22); // many time to create this function
