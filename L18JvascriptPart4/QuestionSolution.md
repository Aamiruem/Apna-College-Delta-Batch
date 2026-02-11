Q1.Delete all occurrences of an element 'num' in a given array
javascript
function removeAllOccurrences(arr, num) {
    return arr.filter(item => item !== num);
}

// Example usage:
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log(removeAllOccurrences(arr, num)); // Output: [1, 3, 4, 5, 6, 3]
Q2. Find the number of digits in a number
javascript
function countDigits(number) {
    return number.toString().length;
}

// Example usage:
let number = 287152;
console.log(countDigits(number)); // Output: 6
Q3. Find the sum of digits in a number
javascript
function sumDigits(number) {
    return number
        .toString()
        .split('')
        .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Example usage:
let number = 287152;
console.log(sumDigits(number)); // Output: 25
Q4. Print the factorial of a number n
javascript
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage:
console.log(factorial(7)); // Output: 5040
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1
Q5. Find the largest number in an array with only positive numbers
javascript
function findLargest(arr) {
    return Math.max(...arr);
}

// Example usage:
let arr = [10, 5, 20, 8, 15];
console.log(findLargest(arr)); // Output: 20
Alternative (without Math.max)
javascript
function findLargest(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

// Example usage:
let arr = [10, 5, 20, 8, 15];
console.log(findLargest(arr)); // Output: 20
Summary of Solutions
Problem	Solution
Q1	arr.filter(item => item !== num)
Q2	number.toString().length
Q3	number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
Q4	Loop from 2 to n and multiply
Q5	Math.max(...arr) or loop to compare
These solutions cover all your requirements efficiently. Let me know if you need any modifications! 🚀
