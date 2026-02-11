// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         },
//     };

//     return person;
// }

//constructors => it doesn't return anything and start with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.talk = function () {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };

//     return this;
// }





//constructors => it doesn't return anything and start with capital letter
function Person(name, age) {
    this.name = name;
    this.age = age;
    //this.talk = talk; // this will overwrite the prototype method
    console.log(this)
}

Person.prototype.talk = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
        

let p1 = new Person("adam", 22);
let p2 = new Person("kamran", 22);
