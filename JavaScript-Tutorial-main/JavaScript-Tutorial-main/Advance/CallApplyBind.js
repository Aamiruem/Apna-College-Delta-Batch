// function greet(city){
//     console.log(`My name is ${this.name} and My City is : ${city}`);
// }

// const person = {
//     name: "Mohit"
// }

// Using call
// greet.call(person, "Delhi");
// Using apply
// greet.apply(person, ["Delhi"]);
// Using bind
// const greetPerson = greet.bind(person, "Delhi");
// greetPerson(); 

const obj1 = {
    name: "Mohit",
    age: 25,
    greet: function() {
        console.log("My name is " + this.name);
    }
};
const getval = obj1.greet.bind(obj1);
console.log(getval());
