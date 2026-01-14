let a = 5;

console.log("Initial value of a:", a);

// Pre-increment
let preIncrement = ++a;
console.log("After pre-increment (++a):", preIncrement); // 6
console.log("Current value of a:", a); // 6

// Pre-decrement
let preDecrement = --a;
console.log("After pre-decrement (--a):", preDecrement); // 5
console.log("Current value of a:", a); // 5

// Post-increment
let postIncrement = a++;
console.log("After post-increment (a++):", postIncrement); // 5
console.log("Current value of a:", a); // 6

// Post-decrement
let postDecrement = a--;
console.log("After post-decrement (a--):", postDecrement); // 6
console.log("Current value of a:", a); // 5
