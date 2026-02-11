// ARRAY METHODS

// push method : add to end
let carsArr = ["Audi", "BMW", "XUV", "Maruti"];
console.log("Cars array :", carsArr);
carsArr.push("Toyota", "Farrari"); // Add 2 elmnts in the end/last
console.log("Array after push/add :", carsArr);

// pop method : delete from end & remains it
carsArr.pop(); // delete one elmnt from end
carsArr.pop(); // delete another one elmnt from end
console.log("Array after pop/delete :", carsArr);

// unshift method : add to start
carsArr.unshift("Toyota", "Farrari"); // Added 2 elmnts the start
console.log("Array after unshift/add :", carsArr);

// shift method : delete from start & remains it
carsArr.shift(); // delete one elmnt from start
carsArr.shift(); // delete another one elmnt from start
console.log("Array after shift/delete :", carsArr);

// We can store deleted elements in a variable, let's see an example
let followersArr = ['a', 'A', 'B', 'C', 'D', 'd'];
console.log("Followers :", followersArr);

let blockedUser = followersArr.shift() + ", " + followersArr.pop() + ", " + followersArr.pop();
console.log("Blocked User :", blockedUser);

console.log("Followers after blocked users :", followersArr);

// Practice Qs
let monthsArr = ["January", "July", "March", "August"];

monthsArr.shift(); monthsArr.shift();
monthsArr.unshift("July", "June");
console.log("Final array :", monthsArr);

// indexOf method
let primaryColor = ["red", "yellow", "blue"];
console.log("Search for index of element in array :", primaryColor.indexOf("yellow"));
console.log("Search for index of wrong element in array :", primaryColor.indexOf("green"));

// includes method
console.log("Search for index of element in array (in boolean) :", primaryColor.includes("blue"));
console.log("Search for index of wrong element in array (in boolean) :", primaryColor.includes("black"));

// concat method : merge 2 array
let primaryArr = ["white", "black", "blue"];
let secondaryArr = ["red", "green", "yellow"];

let allColorArr = primaryArr.concat(secondaryArr); // concatination in array

console.log("Primary color array :", primaryArr);
console.log("Secondary color array :", secondaryArr);
console.log("Merged array after concatinate :", allColorArr);

// reverse method
console.log("Reversed array :", allColorArr.reverse());

// slice method : copies a portion of an array
let slicedArr = allColorArr.slice(); // complete copy of array
console.log("Sliced array :", slicedArr);
let slicedArr1 = allColorArr.slice(2); // copy from starting index to till the end
console.log("Sliced array 1 :", slicedArr1);
let slicedArr2 = allColorArr.slice(3, 4); // copy from starting index to given ending index
console.log("Sliced array 2 :", slicedArr2);
let slicedArr3 = allColorArr.slice(-2); // copy from ending index
console.log("Sliced array 3 :", slicedArr3);

// splice method : removes / replaces / add elements in place
// splice(start, deleteCount, item1, item2...itemN)
let colorsArr = ["white", "black", "red", "pink", "yellow", "green"];
console.log("Original array :", colorsArr);

console.log("Splice 1 :", colorsArr.splice(4)); // delete all except given starting elements
console.log("Original array after splice 1 :", colorsArr);

console.log("Splice 2 :", colorsArr.splice(1, 1)); // delete from given si elmnt to given ei elmnt
console.log("Original array after splice 2 :", colorsArr);

console.log("Splice 3 :", colorsArr.splice(1, 0, "yellow", "green")); // add 2 elmnt after given index, 0 delete (nothing)
console.log("Original array after splice 3 :", colorsArr);

// sort method

// Strings/Char sort
let alphabets = ['z', 'm', 'a', 'f', 'b', 'e', 'c', 'k', 'd'];
console.log("Original string/characters :", alphabets); // original
console.log("Sorted string/characters :", alphabets.sort()); // sorted

let numbers = [4, 8, 1, 6, 12, 30, 45];
console.log("Original numbers :", numbers); // original
console.log("Sorted numbers :", numbers.sort()); // sorting based on string

// Practice Qs
let monthsArray = ["January", "July", "March", "August"];
console.log("PrQs1 - Splice :", monthsArray.splice(0, 2, "July", "June"));
console.log("PrQs1 - Final string :", monthsArray);

let lang = ['C', "C++", "HTML", "JavaScript", "Python", "Java", "C#", "SQL"];
console.log("PrQs2 - JavaScript index of Reversed array :", lang.reverse().indexOf("JavaScript"));

// Array References
console.log("Compare1 :", [1, 2, 3] == [1, 2, 3] );
console.log("Compare2 :", [1, 2, 3] === [1, 2, 3] );

let n = [1, 2, 3];

let nn = [1, 2, 3];
console.log("Compare01 :", n == nn);
console.log("Compare02 :", n === nn);

nnn = n; // Linked array (connected to eachother)
console.log("Compare001 :", n == nnn);
console.log("Compare002 :", n === nnn);

nnn.push(4);
console.log("Changed nnn :", nnn);
console.log("Changed n :", n);

// Constant Arrays
const constantArray = [1, 2, 3];

constantArray.unshift(0); constantArray.push(4);
console.log("Constant array after unshift and push :", constantArray);
constantArray.shift(); constantArray.pop();
console.log("Constant array after shift and pop :", constantArray);
// constantArray = [1, 2, 3, 4]; // It'll give an error

// Nested Arrays
let nestedArray = [[1, 2], [3, 4], [5, 6] ];

console.log("Nested array :", nestedArray);
console.log("Length of nested array :", nestedArray.length);
console.log("First nested array :", nestedArray[0]);
console.log("Length of first nested array :", nestedArray[0].length);
console.log("Character on first index of second nested array :", nestedArray[1][1]);

// Practice Qs
let practiceQsArr = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X'] ];
console.log("Practice Qs - Array :", practiceQsArr);

// Extra adding in array 
practiceQsArr[0][1] = 'O';
console.log("Practice Qs - Changed array :", practiceQsArr);