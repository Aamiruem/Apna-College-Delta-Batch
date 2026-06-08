// //String Length
// let str = "Mohit";
// console.log(str.length); // 5

// //String to Lower Case and Upper Case
// let str1 = "Mohit";
// console.log(str1.toLowerCase()); // mohit
// console.log(str1.toUpperCase()); // MOHIT

// //charAt() method
// let str2 = "Mohit";
// console.log(str2.charAt(3));

// //indexOf() method
// let str3 = "Mohit";
// console.log(str3.indexOf("h"));

// //includes() method
// let str4 = "Mohit Kumar";
// console.log(str4.includes("Kumar")); // T/F

//slice() vs substring()
// let str5 = "Mohit Kumar";
// console.log(str5.slice(-5)); 
// console.log(str5.substring(-5)); //0

// //replace() method
let str6 = "Mohit Kumar";
console.log(str6.replace("Kumar", "Singh")); // Mohit Singh

// //split() method
let str7 = "HTML,CSS,JS";
console.log(str7.split(",")); 

// //trim() method
let str8 = "   Mohit    ";
console.log(str8.trim()); // "Mohit"

// //String Concatenation
let str9 = "Mohit";
let str10 = " Kumar";
console.log(str9.concat(str10)); // Mohit Kumar