let msg = "  hello!  ";
let result = msg.trim().toUpperCase();
console.log(result); // "HELP!"


let names = "ApnaCollege";
console.log(names.slice(4, 9)); // "Colle"
console.log(names.indexOf("na")); // na is at starting index 2

console.log(names.replace("Apna", "Our")); // "OurCollege"


console.log(names.replaceAll("a", "o")); // "opnoColleoge"
console.log(names.repeat(2)); // "ApnaCollegeApnaCollege"

console.log(names.slice(4, 9)); // "Colle"


console.log(names.slice(4).replace('l', 't').replace('l', 't')); // "otot"
