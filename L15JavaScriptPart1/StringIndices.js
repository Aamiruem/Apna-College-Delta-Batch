// let str = "Hello, World!";
// console.log(str[0]);      // "H"
// console.log(str.charAt(0)); // "H"
// console.log(str[7]);      // "W"
// console.log(str.charAt(7)); // "W"



// let str1 = "Hello, World!";
// console.log(str1.length); // 13




// let str2 = "Hello";

// for (let i = 0; i < str.length; i++) {
//   console.log(str2[i]);
// }

// // Using for...of loop
// for (let char of str2) {
//   console.log(char);
// }




// let str3 = "Hello, World!";
// console.log(str3.indexOf('W'));    // 7
// console.log(str3.indexOf('World')); // 7
// console.log(str3.indexOf('o'));    // 4
// console.log(str3.indexOf('x'));    // -1




// let str4 = "Hello, World!";
// console.log(str4.lastIndexOf('o')); // 8



// let str5 = "Hello, World!";

// // Using substring
// console.log(str5.substring(7, 12)); // "World"

// // Using substr
// console.log(str5.substr(7, 5)); // "World"

// // Using slice
// console.log(str5.slice(7, 12)); // "World"



// let str6 = "Hello, World!";
// let firstChar = str6[0];                 // "H"
// let lastChar = str[str6.length - 1];     // "!"
// console.log(firstChar); // "H"
// console.log(lastChar);  // "!"



// let str7 = "Hello, World!";

// for (let i = 0; i < str.length; i++) {
//   console.log(str7[i]);  // Prints each character
// }



// let str8 = "Hello, World!";
// let charToFind = 'o';
// let indices = [];

// for (let i = 0; i < str8.length; i++) {
//   if (str8[i] === charToFind) {
//     indices.push(i);
//   }
// }

// console.log(indices);  // [4, 8]



// let str9 = "Hello, World!";
// if (str9.indexOf('W') !== -1) {
//   console.log("Character 'W' found!");
// } else {
//   console.log("Character 'W' not found.");
// }



// let email = "user@example.com";
// let domain = email.slice(email.indexOf('@') + 1);
// console.log(domain); // "example.com"




// let str10 = "Hello, World!";
// let reversed = "";

// for (let i = str10.length - 1; i >= 0; i--) {
//   reversed += str10[i];
// }

// console.log(reversed); // "!dlroW ,olleH"



let firstName = "Tony";
let lastName = "Stark";
console.log((firstName + " " + lastName).slice(0, 8));


let fullName = firstName + " " + lastName;
console.log(fullName);

let fullNameWithQuotes = `"${firstName} ${lastName}"`;
console.log(fullNameWithQuotes);

let fullNameWithBackticks = `${firstName} ${lastName}`;
console.log(fullNameWithBackticks);



console.log("Hello, " + firstName + " " + lastName + "!");

console.log(`Hello, ${firstName} ${lastName}!`);

console.log("")
