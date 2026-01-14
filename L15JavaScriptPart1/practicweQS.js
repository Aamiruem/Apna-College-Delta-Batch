// Practice Qs
// Qs.What is the value of age after this code runs ?
//     let age = 23;
// age + 2; //after 2 years

// answer

let age = 23;
age + 2;
console.log(age); //output 23

age = age + 2;
console.log(age); //output 25



// Qs.What is the value of avg after this code runs ?
//     let hindi = 80;
// let eng = 90;
// let math = 100;
// let avg = (hindi + eng + math) / 3;

//answer

let hindi = 80;
let eng = 90;
let maths = 100;

let total = hindi + eng + maths;
console.log(total);

let avg = (hindi + eng + maths) / 3;
console.log(avg);







// ✅ Qs 1: Declare your name as a string and print its length

let name = "Aamir Hussain Azad";
console.log(name.length); // Output: 18


// ✅ Qs 2: Declare your first name as a string and print its first character

let firstName = "Aamir";
console.log(firstName[0]); // Output: A



//✅ Qs 3: Declare your first name as a string and print its last character

let firstName1 = "Aamir";
console.log(firstName[firstName1.length - 1]); // Output: r


    // ✅ Qs 4: What is the output of the following code ?
    
console.log("apnacollege" + 123);

//     ➤ Output:
// nginx
// apnacollege123
// 👉 Explanation: JavaScript converts the number 123 to a string and performs string concatenation.
    
    // ✅ Qs 5: What are the lengths of an empty string & a string with a single space ?
    
let emptyStr = "";
let spaceStr = " ";

console.log(emptyStr.length); // Output: 0
console.log(spaceStr.length); // Output: 1
    
