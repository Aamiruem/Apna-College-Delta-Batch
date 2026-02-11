let str = "ilovecodding";

str.slice("love", "do");
console.log(str.replace("love", "do")); // it will replace the first occurrence of the string

console.log(str.replaceAll("o", "x"))


// let string = "I love coding";
// console.log(string.repeat(count)); // it will repeat the string count number of times
// console.log(string.repeat(3)); // it will repeat the string 3 times

let word = "Hi! ";
console.log(word.repeat(3));  // Output: "Hi! Hi! Hi! "


// string.replace(searchValue, newValue)
let sentence = "I love JavaScript";
let result = sentence.replace("JavaScript", "Python");
console.log(result);  // Output: "I love Python"

let msg = "apple banana apple";
let newMsg = msg.replace(/apple/g, "orange");
console.log(newMsg);  // Output: "orange banana orange"








// repeat
// Returns a string with the number of copies of a string concatenated together.

let str1 = "Hello";
let result1 = str1.repeat(3);
console.log(result1);  // Output: "HelloHelloHello"
