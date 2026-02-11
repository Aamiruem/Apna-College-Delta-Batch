let msg = '"kamran    "';

console.log(msg.length);

console.log(msg.trim());

console.log(msg);// original string is not change



let myString = "abbdef";
myString[2] = 'c'; // This won't work; myString remains unchanged

console.log(myString);


let a = b = "hello";
a = a + " world"; // b remains unaffected
console.log(a,b);
