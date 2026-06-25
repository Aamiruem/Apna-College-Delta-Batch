/**
 * Comparison of Non-Numbers in JavaScript
 * Demonstrates comparison operations with various non-numeric types
 * including string comparisons using Unicode values
 */

// 1. String Comparisons
console.log("=== String Comparisons ===");
console.log("'apple' < 'banana':", 'apple' < 'banana'); // true (lexicographical order)
console.log("'Apple' < 'apple':", 'Apple' < 'apple'); // true (uppercase letters have lower Unicode values)

// Comparing strings with Unicode values
const str1 = "A";
const str2 = "a";
console.log(`'${str1}' < '${str2}':`, str1 < str2); // true
console.log(`'${str1}' Unicode:`, str1.charCodeAt(0)); // 65
console.log(`'${str2}' Unicode:`, str2.charCodeAt(0)); // 97

// String vs number (type coercion)
console.log("'10' > 5:", '10' > 5); // true (string '10' coerced to number 10)
console.log("'10' == 10:", '10' == 10); // true (loose equality with coercion)
console.log("'10' === 10:", '10' === 10); // false (strict equality, no coercion)

// 2. Boolean Comparisons
console.log("\n=== Boolean Comparisons ===");
console.log("true == 1:", true == 1); // true (boolean true coerced to 1)
console.log("false == 0:", false == 0); // true (boolean false coerced to 0)
console.log("true === 1:", true === 1); // false (strict equality)
console.log("false === 0:", false === 0); // false (strict equality)

// 3. null and undefined Comparisons
console.log("\n=== null and undefined Comparisons ===");
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
console.log("null == 0:", null == 0); // false (null only equals undefined in loose equality)
console.log("undefined == 0:", undefined == 0); // false

// 4. Object Comparisons (reference comparison)
console.log("\n=== Object Comparisons ===");
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log("obj1 == obj2:", obj1 == obj2); // false (different references)
console.log("obj1 === obj2:", obj1 === obj2); // false (different references)
console.log("obj1 == obj3:", obj1 == obj3); // true (same reference)
console.log("obj1 === obj3:", obj1 === obj3); // true (same reference)

// 5. Array Comparisons (reference comparison)
console.log("\n=== Array Comparisons ===");
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

console.log("arr1 == arr2:", arr1 == arr2); // false (different references)
console.log("arr1 === arr2:", arr1 === arr2); // false (different references)
console.log("arr1 == arr3:", arr1 == arr3); // true (same reference)
console.log("arr1 === arr3:", arr1 === arr3); // true (same reference)

// 6. Special Cases
console.log("\n=== Special Cases ===");
console.log("NaN == NaN:", NaN == NaN); // false (NaN is not equal to anything, including itself)
console.log("NaN === NaN:", NaN === NaN); // false
console.log("isNaN(NaN):", isNaN(NaN)); // true (use isNaN() to check for NaN)

console.log("'' == false:", '' == false); // true (empty string coerces to 0, false coerces to 0)
console.log("'' === false:", '' === false); // false

console.log("[] == false:", [] == false); // true (empty array coerces to empty string, then to 0)
// Explicitly convert the array to a primitive value for comparison
console.log("String([]) === false:", String([]) === false); // false

// 7. String Comparison with Locale
console.log("\n=== Locale-aware String Comparison ===");
console.log("'ä'.localeCompare('z'):", 'ä'.localeCompare('z')); // -1 (or negative value, depends on locale)
console.log("'ä'.charCodeAt(0):", 'ä'.charCodeAt(0)); // 228

// 8. Symbol Comparisons
console.log("\n=== Symbol Comparisons ===");
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');
console.log("sym1 == sym2:", sym1 == sym2); // false (each Symbol is unique)
console.log("sym1 === sym2:", sym1 === sym2); // false

// 9. BigInt Comparisons
console.log("\n=== BigInt Comparisons ===");
const big1 = 10n;
const big2 = 20n;
console.log("10n < 20n:", big1 < big2); // true
console.log("10n == 10:", big1 == 10); // true (loose equality with number)
console.log("10n === 10:", big1 === 10); // false (strict equality, different types)

// 10. Mixed Type Comparisons
console.log("\n=== Mixed Type Comparisons ===");
console.log("'10' > true:", '10' > true); // true ('10' coerced to 10, true coerced to 1)
console.log("false < '5':", false < '5'); // true (false coerced to 0, '5' coerced to 5)
console.log("null > -1:", null > -1); // true (null coerced to 0)
console.log("undefined < 0:", undefined < 0); // false (undefined coerced to NaN)

// Helper function to show comparison details
function compareWithUnicode(a, b) {
    const aUnicode = typeof a === 'string' ? a.charCodeAt(0) : 'N/A';
    const bUnicode = typeof b === 'string' ? b.charCodeAt(0) : 'N/A';
    
    console.log(`Comparing ${typeof a} '${a}' (Unicode: ${aUnicode}) with ${typeof b} '${b}' (Unicode: ${bUnicode}):`);
    console.log(`  ${a} == ${b}:`, a == b);
    console.log(`  ${a} === ${b}:`, a === b);
    console.log(`  ${a} > ${b}:`, a > b);
    console.log(`  ${a} < ${b}:`, a < b);
}

console.log("\n=== Detailed Unicode String Comparisons ===");
compareWithUnicode('A', 'a');
compareWithUnicode('😊', '★');
compareWithUnicode('1', 1);
compareWithUnicode('ß', 's');
