// STRING METHODS
// NOTE : Strings are immutable in JS :- No changes can be made to strings.
//      :- Whenever we do try to make a change, a new string is created and old one remains same.

// trim method
let str = "   Hlw World!   ";
let trimStr = str.trim();

console.log("Original string :", str);
console.log("Trimmed string :", trimStr);

// toLowerCase and toUpperCase methods
let name = "Alt mash";

console.log("Lowercase :", name.toLowerCase());
console.log("Uppercase :", name.toUpperCase());

// Methods with arguments
// indexOf method
let msg = "ILoveCoding";

console.log("Searching/Index :", msg.indexOf("C"));

// Method Chaining
let newMsg = "    ILoveCoding   ";

console.log("Method Chaining :", newMsg.trim().toUpperCase());

// slice method
let ac = "ApnaCollege";

console.log("From si To ei :", ac.slice(0, 4)); // from starting index to ending index
console.log("From si To till the ei :", ac.slice(4)); // from starting index to till the last ending index
console.log("From ei To si :", ac.slice(-3)); // From last ending index to starting index

// replace and repeat method
let fruit = "Mango";

console.log("Replaced :", fruit.replace("Mango", "Apple"));
console.log("Repeated :", fruit.repeat(3));

// Practice Qs
let mssg = "help!";

console.log("PrQs1 :", mssg.trim().toUpperCase());
let acName = "ApnaCollege";
console.log("PrQs2 :", acName.slice(4, 9));
console.log("PrQs2 :", acName.indexOf("na"));
console.log("PrQs2 :", acName.replace("Apna", "Our"));
console.log("PrQs3 :", acName.slice(4).replace("l", "t").replace("l", "t"));