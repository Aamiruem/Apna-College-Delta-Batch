// Proptype
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    console.log("Hello, " + this.name);
}
const user = new Person("Mohit");
user.getName();

//Prototype chaining
//User-->Person.protype ->Object.prototype -> null

const animal = {
    eats: true
}
const dog = {
    barks: true
}
dog.__proto__ = animal; // dog is the child of animal
console.log(dog.eats); // true
console.log(dog.barks); // true