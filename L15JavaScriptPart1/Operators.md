JavaScript Operators: Complete Guide
JavaScript operators allow you to perform operations on variables and values. Here's a comprehensive breakdown of all operator types:

1. Arithmetic Operators
Used for mathematical calculations:

Operator Description Example

+ Addition 5 + 2 → 7

+ Subtraction 5 - 2 → 3

+ Multiplication 5 * 2 → 10
/ Division 5 / 2 → 2.5
% Remainder 5 % 2 → 1
**Exponentiation (ES6) 2** 3 → 8
++ Increment x++ or ++x
-- Decrement x-- or --x
javascript
Copy
let x = 5;
console.log(x++); // 5 (post-increment)
console.log(++x); // 7 (pre-increment)

2. Assignment Operators
Assign values to variables:

Operator Example Equivalent To
= x = 5 x = 5
+= x += 3 x = x + 3
-= x -= 3 x = x - 3
*= x*= 3 x = x * 3
/= x /= 3 x = x / 3
%= x %= 3 x = x % 3
**= x**= 3 x = x ** 3
3. Comparison Operators
Compare two values (return true or false):

Operator Description Example
== Loose equality '5' == 5 → true
=== Strict equality '5' === 5 → false
!= Loose inequality '5' != 5 → false
!== Strict inequality '5' !== 5 → true
> eater than 5 > 3 → true
< Less than 5 < 3 → false
>= Greater than or equal 5 >= 5 → true
<= Less than or equal 5 <= 3 → false

4. Logical Operators
Used for boolean logic:

Operator Description Example
&& AND true && false → false
`` OR `true  false→true`
! NOT !true → false
?? Nullish Coalescing (ES11) null ?? 'default' → 'default'
javascript
Copy
let age = 25;
console.log(age > 18 && age < 30); // true
5. Bitwise Operators
Work on 32-bit integer representations:

Operator Description Example
& AND 5 & 1 → 1
`` OR `5 1→5`
^ XOR 5 ^ 1 → 4
~ NOT ~5 → -6
<< Left shift 5 << 1 → 10
>> ight shift 5 >> 1 → 2
>>> Unsigned right shift -5 >>> 1 → 2147483645

6. Ternary (Conditional) Operator
Short if-else statement:

javascript
Copy
let price = 100;
let discount = price > 50 ? 10 : 0; // 10
7. Type Operators
Check variable types:

Operator Description Example
typeof Returns type typeof 'hello' → 'string'
instanceof Checks object type [] instanceof Array → true
8. String Operators
Concatenate strings:

javascript
Copy
let name = 'John' + ' ' + 'Doe'; // "John Doe"
Operator Precedence (Important!)
Operations are executed in this order (highest to lowest):

() (Grouping)

++, -- (Increment/Decrement)

!, ~, +, - (Unary)

** (Exponentiation)

*, /, %

+, -

<<, >>, >>>

<, <=, >, >=

==, !=, ===, !==

&&

||

??

? : (Ternary)

=, +=, -=, etc.

javascript
Copy
let result = 5 + 3 *2; // 11 (not 16)
When to Use Which Operator?
Mathematical operations: +, -,*, /, %

Comparisons: ===, !==, >, <

Logical checks: &&, ||, !

Conditional rendering: Ternary (? :)

Default values: Nullish coalescing (??)

Would you like more examples of any specific operator? 😊
