let primary = ["red", "green", "blue", "yellow"];
let secondary = ["orange", "purple", "pink", "black"];

console.log(primary.concat(secondary)); // Output: ["red", "green", "blue", "yellow", "orange", "purpl
console.log(secondary.concat(primary));// Output: ["orange", "purple", "pink", "black", "red", "green", "blue", "yellow"]
console.log(primary.concat(secondary, primary)); // Output: ["red", "green", "blue", "yellow", "orange", "purpl
console.log(secondary.concat(primary, secondary));// Output: ["orange", "purple", "pink", "black", "red", "green", "blue", "yellow", "orange", "purple", "pink", "black"]

console.log(primary.reverse());// Output: ["yellow", "blue", "green", "red"]
console.log(primary.reverse().reverse()); // Output: ["red", "green", "blue", "yellow"]
console.log(primary.reverse().reverse().reverse());// Output: ["red", "green", "blue", "yellow"]
