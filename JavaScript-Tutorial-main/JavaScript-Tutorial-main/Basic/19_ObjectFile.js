// const person = {
//   name: "Mohit",
//   age: 22,
//   isTrainer: true,
// };
// console.log(person.name);
// console.log(person["age"]);

// //Object Add
// person.location = "India";
// console.log(person);

// //Object Update
// person.age = 23;
// console.log(person);

// //Object Delete
// delete person.isTrainer;
// console.log(person);

//Nested Object
// const person = {
//   name: "Mohit",
//   age: 22,
//   isTrainer: true,
//   location: {
//     city: "Delhi",
//     state: "Delhi",
//   },
// };
// console.log(person.location.city);

//oBJECT mETHOD
// const person = {
//   name: "Mohit",
//   age: 22,
//   isTrainer: true,
// //   location: {
// //     city: "Delhi",
// //     state: "Delhi",
// //   },
// //   getName: function () {
// //     return this.name;
// //   },
// };
// console.log(person.getName());

//Loops in Object
// for (let key in person) {
//   console.log(key, person[key]);
// }

// console.log(Object.keys(person)); // ["name", "age", "isTrainer"]
// console.log(Object.values(person)); // ["Mohit", 22, true]
// console.log(Object.entries(person)); // [["name", "Mohit"], ["age", 22], ["isTrainer", true]]

//Object Destructuring
// const person = {
//   name: "Mohit",
//   age: 22,
//   isTrainer: true,
//   location: {
//     city: "Delhi",
//     state: "Delhi",
//   },
// };
// const { name, age, isTrainer } = person;
// console.log(name, age, isTrainer);
// const { city, state } = person.location;
// console.log(city, state);

// //Object Spread Operator(...)
// const person1 = {
//   name: "Mohit",
//   age: 22,
//   isTrainer: true,
// };
// const person2 = {
//   ...person1,
//   location: "India",
// };
// console.log(person2);

//Operation Chaining(?.)
// const person = {
//   name: "Mohit",
//   age: 22,       
//   isTrainer: true,
//   location: {
//     city: "Delhi",
//     state: "Delhi",
//   },
// };
// console.log(person.location?.city); // "Delhi"
// console.log(person.location?.country); // undefined

//nullish coalescing operator(??)
//Example
const person = {
  name: "Mohit",     
  age: 22,
  isTrainer: true,
  location: {
    city: "Delhi",
    state: "Delhi",
  },
};
const city = 0 ?? "Unknown City";
console.log(city); // "Delhi"
