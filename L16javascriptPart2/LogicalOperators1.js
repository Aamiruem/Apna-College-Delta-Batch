let marks1 = 90;
if((marks1>=90 && marks1<=100) || false){
console.log("pass");
}






let marks2 = 90;
if((marks2>=90 && marks2<=100) || !false){ //!false = true
console.log("pass");
}









let marks = 90;
if(marks>=90 && marks<=100){
    console.log("Grade: A");
}else if(marks>=80 && marks<90){
    console.log("Grade: B");
}else if(marks>=70 && marks<80){
    console.log("Grade: C");
}else if(marks>=60 && marks<70){
    console.log("Grade: D");
}else{
    console.log("Grade: F");
}





// AND (&&): Returns true if both operands are true.

// OR (||): Returns true if at least one of the operands is true.

// NOT (!): Returns the opposite Boolean value of its operand.

// Logical AND (&&)
// The && operator returns the first falsy value or the last value if none are falsy.
console.log(true && true);   // true
console.log(true && false);  // false
console.log(0 && "Hello");   // 0 (0 is falsy)
console.log(1 && "Hello");   // "Hello" (both are truthy)




// Logical OR (||)
// The || operator returns the first truthy value or the last value if none are truthy.

console.log(true || false);  // true
console.log(false || false); // false
console.log(0 || "Hello");   // "Hello" (0 is falsy)
console.log("" || "World");  // "World" (empty string is falsy)



// Logical NOT (!)
// The ! operator returns the opposite Boolean value of its operand.
console.log(!true);   // false
console.log(!false);  // true
console.log(!0);      // true (0 is falsy)
console.log(!"Hello"); // false ("Hello" is truthy)





let a = 10;
let b = 20;
let c = 30;

if (a < b && b < c) {
  console.log("a is less than b and b is less than c"); // This will log
}

if (a > b || b < c) {
  console.log("a is greater than b or b is less than c"); // This will log
}

let isLoggedIn = false;
if (!isLoggedIn) {
  console.log("User is not logged in"); // This will log
}






let x = 0;
let y = 10;
console.log(x && y); // 0 (y is not evaluated because x is falsy)
console.log(x || y); // 10 (y is evaluated because x is falsy)
