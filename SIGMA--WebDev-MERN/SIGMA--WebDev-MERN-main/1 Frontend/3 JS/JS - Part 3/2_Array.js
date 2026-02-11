// Arrays in JS
let studentsArray = ["Altamsh", "Adeeb", "Nazeef"]; // Creation of array
console.log("Strings array :", studentsArray); // Print
console.log("Length of array :", studentsArray.length); // Find length
console.log("Index of array :", studentsArray[0]); // Find index

let numsArray = [2, 4, 6, 8, 10];
console.log("Numbers array :", numsArray);
console.log("Length of array :", numsArray.length);
console.log("Index of array :", numsArray[3]);

console.log("Type of array :", typeof studentsArray, typeof numsArray); // Find type

let infoArray = ["Altamash", 20, 7.1]; // Mixed array
let emptyArray = []; // Empty array

console.log("For index of array :", infoArray[0]); // Finding index of array
console.log("For character of index in array :", infoArray[0][0]); // Finding character of index in array
console.log("For length of index in array :", infoArray[0].length); // Finding length of index in array

// NOTE : Arrays are mutable, while strings are immutable (Studied in the pre lectures or codes)
let fruitsArray = ["Apple", "Litchi", "Mango"];
console.log("Fruits array :", fruitsArray);
fruitsArray[1] = "Banana"; // Changing 1 index of array
console.log("Changed array due to(arrays're mutable):", fruitsArray);
console.log("Length of array :", fruitsArray.length);
fruitsArray[10] = "Orange";
console.log("Added new element/index in array :", fruitsArray);
console.log("Length after new added element :", fruitsArray.length);
console.log("Empty elements in array :", fruitsArray[7]);