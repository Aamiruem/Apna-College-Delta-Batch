String Methods - Complete Guide with Examples
Strings are fundamental in JavaScript, and they come with many built-in methods for manipulation. Below is a comprehensive list of all major JavaScript string methods with code examples and explanations.

1. String Length (length)
Returns the number of characters in a string.

javascript
Copy
const str = "Hello, World!";
console.log(str.length); // 13
2. Accessing Characters
charAt(index)
Returns the character at a specified index.

javascript
Copy
console.log(str.charAt(0)); // "H"
charCodeAt(index)
Returns the Unicode value of the character at a given index.

javascript
Copy
console.log(str.charCodeAt(0)); // 72 (Unicode for 'H')
Bracket Notation ([])
Alternative way to access characters (ES6).

javascript
Copy
console.log(str[0]); // "H"
3. String Searching
indexOf(searchValue, fromIndex)
Returns the first index where a substring is found.

javascript
Copy
console.log(str.indexOf("World")); // 7
console.log(str.indexOf("world")); // -1 (not found, case-sensitive)
lastIndexOf(searchValue, fromIndex)
Returns the last index where a substring is found.

javascript
Copy
console.log(str.lastIndexOf("l")); // 10 (last 'l' in "World")
includes(searchValue, fromIndex)
Checks if a string contains a substring (returns true/false).

javascript
Copy
console.log(str.includes("World")); // true
startsWith(searchValue, fromIndex)
Checks if a string starts with a substring.

javascript
Copy
console.log(str.startsWith("Hello")); // true
endsWith(searchValue, length)
Checks if a string ends with a substring.

javascript
Copy
console.log(str.endsWith("!")); // true
4. String Extraction
slice(start, end)
Extracts a substring between start and end (end not included).

javascript
Copy
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-6)); // "World!" (negative index)
substring(start, end)
Similar to slice, but does not accept negative indices.

javascript
Copy
console.log(str.substring(0, 5)); // "Hello"
substr(start, length) (Deprecated in ES6)
Extracts a substring starting at start with a given length.

javascript
Copy
console.log(str.substr(7, 5)); // "World"
5. String Modification
toUpperCase()
Converts a string to uppercase.

javascript
Copy
console.log(str.toUpperCase()); // "HELLO, WORLD!"
toLowerCase()
Converts a string to lowercase.

javascript
Copy
console.log(str.toLowerCase()); // "hello, world!"
concat(str1, str2, ...)
Combines strings.

javascript
Copy
console.log(str.concat(" Goodbye!")); // "Hello, World! Goodbye!"
trim()
Removes whitespace from both ends.

javascript
Copy
const spacedStr = "   Hello   ";
console.log(spacedStr.trim()); // "Hello"
trimStart() / trimEnd()
Removes whitespace from start/end.

javascript
Copy
console.log(spacedStr.trimStart()); // "Hello   "
console.log(spacedStr.trimEnd()); // "   Hello"
replace(searchValue, newValue)
Replaces the first occurrence of a substring.

javascript
Copy
console.log(str.replace("World", "Universe")); // "Hello, Universe!"
replaceAll(searchValue, newValue) (ES2021)
Replaces all occurrences of a substring.

javascript
Copy
const repeatedStr = "Hello Hello";
console.log(repeatedStr.replaceAll("Hello", "Hi")); // "Hi Hi"
6. String Splitting & Joining
split(separator, limit)
Splits a string into an array based on a separator.

javascript
Copy
console.log(str.split(", ")); // ["Hello", "World!"]
join(separator) (Array method, but useful with strings)
Joins an array into a string.

javascript
Copy
const arr = ["Hello", "World"];
console.log(arr.join(", ")); // "Hello, World"
7. String Padding
padStart(targetLength, padString)
Pads the start of a string to reach a given length.

javascript
Copy
console.log("5".padStart(3, "0")); // "005"
padEnd(targetLength, padString)
Pads the end of a string to reach a given length.

javascript
Copy
console.log("5".padEnd(3, "0")); // "500"
8. String Repeat (repeat(count))
Repeats a string count times.

javascript
Copy
console.log("Ha".repeat(3)); // "HaHaHa"
9. String Comparison
localeCompare(otherString)
Compares two strings (returns -1, 0, or 1).

javascript
Copy
console.log("a".localeCompare("b")); // -1 (a comes before b)
console.log("b".localeCompare("a")); // 1 (b comes after a)
console.log("a".localeCompare("a")); // 0 (equal)
10. String Template Literals (ES6)
Allows embedded expressions (${...}) and multi-line strings.

javascript
Copy
const name = "Alice";
const age = 25;
console.log(`Hello, ${name}! You are ${age} years old.`);
// Output: "Hello, Alice! You are 25 years old."
Summary Table of Key String Methods
Method Description Example
length Get string length str.length
charAt() Get character at index str.charAt(0)
indexOf() Find first occurrence str.indexOf("World")
includes() Check if substring exists str.includes("Hello")
slice() Extract substring str.slice(0, 5)
toUpperCase() Convert to uppercase str.toUpperCase()
trim() Remove whitespace str.trim()
replace() Replace substring str.replace("World", "Universe")
split() Split into array str.split(", ")
padStart() Pad start of string "5".padStart(3, "0")
repeat() Repeat string "Ha".repeat(3)
When to Use Which Method?
✅ Need to find a substring? → indexOf(), includes()
✅ Extract part of a string? → slice(), substring()
✅ Modify case? → toUpperCase(), toLowerCase()
✅ Remove whitespace? → trim(), trimStart(), trimEnd()
✅ Replace text? → replace(), replaceAll()
✅ Split a string? → split()
✅ Pad a string? → padStart(), padEnd()
✅ Repeat a string? → repeat()
✅ Modern string formatting? → Template Literals (``)

Final Thoughts
Strings are immutable (methods return new strings, don’t modify the original).

Template literals (``) are preferred for dynamic strings.

Use slice() over substring() (more flexible with negative indices).

Would you like a deep dive into regex with strings? 🚀
