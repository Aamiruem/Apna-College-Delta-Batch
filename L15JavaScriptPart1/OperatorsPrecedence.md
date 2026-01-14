# Operator Precedence in JavaScript

Operator precedence determines the order in which operations are evaluated in an expression. JavaScript follows a specific hierarchy, where operators with higher precedence are executed first.

1. Operator Precedence Table (Highest to Lowest)
Precedence Operator Type Operators Example
20 Grouping ( ) (2 + 3) *4
19 Member Access . obj.property
19 Computed Member Access [ ] arr[0]
19 new (with args) new new Date()
18 Function Call ( ) func()
17 Postfix Increment ++ i++
17 Postfix Decrement -- i--
16 Logical NOT ! !true
16 Bitwise NOT ~ ~5
16 Unary Plus + +"5" (converts to number)
16 Unary Negation - -5
16 Prefix Increment ++ ++i
16 Prefix Decrement -- --i
16 typeof typeof typeof x
16 void void void(0)
16 delete delete delete obj.x
15 Exponentiation **2**3(8)
14 Multiplication* 2 * 3
14 Division / 6 / 2
14 Remainder % 5 % 2 (1)
13 Addition + 2 + 3
13 Subtraction - 5 - 2
12 Bitwise Left Shift << 4 << 1 (8)
12 Bitwise Right Shift >> 8 >> 1 (4)
12 Bitwise Unsigned Right Shift >>> -1 >>> 0
11 Less Than < 3 < 5
11 Less Than or Equal <= 3 <= 5
11 Greater Than > 5 > 3
11 Greater Than or Equal >= 5 >= 3
11 in in "x" in obj
11 instanceof instanceof arr instanceof Array
10 Equality == 5 == "5" (true)
10 Inequality != 5 != "6" (true)
10 Strict Equality === 5 === 5 (true)
10 Strict Inequality !== 5 !== "5" (true)
9 Bitwise AND & 5 & 3 (1)
8 Bitwise XOR ^ 5 ^ 3 (6)
7 Bitwise OR ` ` `5 3` (7)
6 Logical AND && true && false (false)
5 Logical OR `  ` `true  false` (true)
4 Nullish Coalescing ?? null ?? "default" ("default")
3 Conditional (Ternary) ? : x > 0 ? "Yes" : "No"
2 Assignment =, +=, -=, etc. x = 5
1 Comma , (x=1, y=2)
2. Examples of Precedence in Action
<!-- Example 1: Arithmetic Operators -->
javascript
Copy
let result = 2 + 3 *4; // 14 (not 20, because* has higher precedence)
3 * 4 is evaluated first (12), then 2 + 12 → 14.

<!-- Example 2: Logical Operators -->
let x = true || false && false; // true (&& has higher precedence)
false && false → false, then true || false → true.

<!-- Example 3: Assignment vs Comparison -->
javascript
Copy
let a = 5;
let b = 10;
if (a = b) console.log("Equal"); // "Equal" (assignment happens first)
a = b assigns 10 to a, then if (10) evaluates to true.

<!-- Example 4: Grouping Overrides Precedence -->
javascript
Copy
let value = (2 + 3) *4; // 20 (grouping forces addition first)
3. Key Takeaways
✔ Parentheses ( ) have the highest precedence and can override default order.
✔ Multiplication (*), Division (/), and Exponentiation (**) have higher precedence than addition (+) and subtraction (-).
✔ Logical AND (&&) has higher precedence than Logical OR (||).
✔ Assignment (=, +=) has very low precedence (executed last).
✔ Use parentheses to make complex expressions clearer.

Would you like a deeper explanation of any specific operator group? 😊
