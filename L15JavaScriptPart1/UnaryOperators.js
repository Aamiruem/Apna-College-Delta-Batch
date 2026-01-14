// unary operators
// +, -, !, typeof, void, delete, ++, --, ~


let y = 2000;

let z = -y; 


let x1 = "10";
x = +x1; // x is now 10 (number)
console.log(x)

let x2 = "10";
x = -x; // x is now -10 (number)
console.log(x)

//pre increment
let x3 = 5;
let y1 = ++x; // y is 6, x is 6 (prefix)
console.log(y1);

//post increment
x = 5;
y = x++; // y is 5, x is 6 (postfix)
console.log(y);


//unary negation
let x4 = true;
let y2 = !x4; // y is false
console.log(y2);


//typeof operator
let x = 5;
void x; // evaluates x, but the result is always undefined
console.log(x);


//
let obj = {a: 1, b: 2};
delete obj.a; // returns true, obj is now {b: 2}
console.log(obj);



//typeof operator
let xs = 5;
typeof xs; // returns "number"   
