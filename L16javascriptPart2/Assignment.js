// Assignment operators

// Simple Assignment:
let x1 = 10;
console.log(x1);

// Addition Assignment:
let x2 = 5;
x2 += 3; // x is now 8
console.log(x2); // Corrected from x12 to x2

// Subtraction Assignment:
let x3 = 5;
x3 -= 3; // x is now 2
console.log(x3);

// Multiplication Assignment:
let x4 = 5;
x4 *= 3; // x is now 15
console.log(x4);

// Division Assignment:
let x5 = 6;
x5 /= 3; // x is now 2
console.log(x5);

// Remainder (Modulus) Assignment:
let x6 = 5;
x6 %= 2; // x is now 1
console.log(x6);

// Exponentiation Assignment:
let x7 = 2;
x7 **= 3; // x is now 8
console.log(x7);

// Bitwise Assignment Operators
// Bitwise AND Assignment:
let x8 = 5; // 101 in binary
x8 &= 3;   // 011 in binary, x is now 1 (001 in binary)
console.log(x8);

// Bitwise OR Assignment:
let x9 = 5; // 101 in binary
x9 |= 3;   // 011 in binary, x is now 7 (111 in binary)
console.log(x9);

// Bitwise XOR Assignment:
let x10 = 5; // 101 in binary
x10 ^= 3;   // 011 in binary, x is now 6 (110 in binary)
console.log(x10);

// Bitwise Left Shift Assignment:
let x11 = 5; // 101 in binary
x11 <<= 1;  // x is now 10 (1010 in binary)
console.log(x11);

// Bitwise Right Shift Assignment:
let x12 = 5; // 101 in binary
x12 >>= 1;  // x is now 2 (10 in binary)
console.log(x12);

// Unsigned Right Shift Assignment:
let x13 = -5; // binary representation is platform-dependent
x13 >>>= 1;  // shifts bits to the right, x is now a large positive number
console.log(x13);



