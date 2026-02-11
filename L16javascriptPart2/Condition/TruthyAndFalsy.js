// 8. Truthy and Falsy Values

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

let value = "hello";
if (value) {
  console.log("Value is truthy"); // This will execute
}

value = 0;
if (value) {
  console.log("This won't execute");
} else {
  console.log("Value is falsy"); // This will execute
}

// Checking for empty array
let items = [];
if (items.length) {
  console.log("Array has items");
} else {
  console.log("Array is empty"); // This will execute
}
