// console.log(this); // Window
// "use strict"; // undefined
// function thisFun() {
//   console.log(this); 
// }
// thisFun();

// const person = {
//   name: "Mohit",
//   greet() {
//     console.log(this.name); // person
//   }
// };
// person.greet();

//Arrow function
// const person = {
//   name: "Mohit",
//   greet: () => {
//     console.log(this.name); 
//   }
// };
// person.greet();

const person = {
  name: "Mohit",
  greet: function() {
    console.log(this.name); 
    const arrow = () => {
      console.log(this.name); 
    };
    arrow();
  }
};
person.greet();



