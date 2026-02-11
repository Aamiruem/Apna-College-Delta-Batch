const g = 10;
console.log(g); // 10
g = 20; // we cannot reassign constant variables
console.log(g); // 20

// we can do all the operations except reassigning the constant variables

// we can also do all the operations on constant objects
const obj = { name: "John", age: 30 };  // constant object
console.log(obj); // { name: 'John', age: 30 }
obj.name = "Jane"; // we can change the properties of constant objects  
console.log(obj); // { name: 'Jane', age: 30 }
obj = { name: "Doe", age: 25 }; // we cannot reassign constant objects
console.log(obj); // { name: 'Doe', age: 25 }



// we can do all the operations except reassigning the constant objects
// we can also do all the operations on constant arrays 
