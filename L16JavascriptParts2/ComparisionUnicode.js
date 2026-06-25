// Comparison of Non-Numbers in JavaScript

// 1. String Comparison (Lexicographical based on Unicode values)
console.log("apple" > "banana");       // false
console.log("grape" < "grapefruit");   // true
console.log("Zebra" > "apple");        // false (Z has lower Unicode value than 'a')

// 2. Checking Unicode values of characters
console.log("Unicode of 'A':", 'A'.charCodeAt(0)); // 65
console.log("Unicode of 'a':", 'a'.charCodeAt(0)); // 97

console.log("A" < "a"); // true, because 65 < 97

// 3. Boolean Comparison
console.log(true > false); // true (1 > 0)
console.log(true == 1);    // true
console.log(false == 0);   // true

// 4. Mixed Type Comparison (JS coerces values)
console.log("5" > 3);       // true (string "5" converted to number 5)
console.log("abc" > 5);     // false (NaN > 5 is false)
console.log(true > "0");    // true (true → 1, "0" → 0)
console.log(false == "");   // true (false → 0, "" → 0)

// 5. Unicode Based Custom Comparison Function
function compareByUnicode(a, b) {
  return a.charCodeAt(0) - b.charCodeAt(0);
}

const chars = ['ß', 'A', 'a', 'z', 'Z', 'ç', 'Ç'];
chars.sort(compareByUnicode);
console.log("Sorted by Unicode:", chars);







// ComparisonNonNumbers.js
// Demonstrates comparison of non-number values in JavaScript with Unicode values

// Utility function to get Unicode code point of a character
function getCodePoint(char) {
    return char.codePointAt(0).toString(16).toUpperCase();
}

// List of non-number values to compare
const values = [
    undefined,
    null,
    true,
    false,
    '',
    ' ',
    '0',
    '1',
    'a',
    'A',
    '!',
    '@',
    '[',
    '{',
    '💩' // Poop emoji
];

// Compare all values against each other
console.log('Comparison Results:');
console.log('===================');

// Header row
let header = 'Value'.padEnd(12) + 'Type'.padEnd(12) + 'Unicode'.padEnd(10) + '== null'.padEnd(10) + 
             '== undefined'.padEnd(14) + '== true'.padEnd(10) + '== false'.padEnd(10);
console.log(header);
console.log('-'.repeat(header.length));

// Compare each value
for (const value of values) {
    const type = typeof value;
    let unicode = '-';
    
    if (type === 'string' && value.length === 1) {
        unicode = 'U+' + getCodePoint(value);
    } else if (type === 'boolean') {
        unicode = value ? 'U+0001' : 'U+0000'; // Not actual Unicode, just for illustration
    }
    
    const row = 
        String(value).padEnd(12) + 
        type.padEnd(12) + 
        unicode.padEnd(10) +
        (value == null).toString().padEnd(10) +
        (value == undefined).toString().padEnd(14) +
        (value == true).toString().padEnd(10) +
        (value == false).toString().padEnd(10);
    
    console.log(row);
}

// Detailed Unicode comparisons for strings
console.log('\nString Character Unicode Comparisons:');
console.log('====================================');
chars = [' ', '0', '1', 'a', 'A', '!', '@', '[', '{', '💩'];
for (let i = 0; i < chars.length; i++) {
    for (let j = i + 1; j < chars.length; j++) {
        const char1 = chars[i];
        const char2 = chars[j];
        const cp1 = 'U+' + getCodePoint(char1);
        const cp2 = 'U+' + getCodePoint(char2);
        
        console.log(
            `'${char1}' (${cp1}) ${char1 < char2 ? '<' : '>'} '${char2}' (${cp2}) ` +
            `- Difference: ${Math.abs(char1.codePointAt(0) - char2.codePointAt(0))}`
        );
    }
}

// Special cases
console.log('\nSpecial Cases:');
console.log('==============');
console.log(`null == undefined: ${null == undefined}`); // true
console.log(`null === undefined: ${null === undefined}`); // false
console.log(`NaN == NaN: ${NaN == NaN}`); // false
console.log(`NaN === NaN: ${NaN === NaN}`); // false
console.log(`'true' == true: ${'true' == true}`); // false ('true' becomes NaN, true becomes 1)
console.log(`'1' == true: ${'1' == true}`); // true ('1' becomes 1, true becomes 1)
console.log(`'' == false: ${'' == false}`); // true ('' becomes 0, false becomes 0)
