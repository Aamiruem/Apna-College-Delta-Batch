// Ans : 1
let numArr = [2, 5, 10, 3, 7, 12, 6, 4];
let num = 5;

function getLargerElements(arr, n) {
    let ans = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > n) {
            ans.push(arr[i]);
        }
    }
    console.log(ans);
}
getLargerElements(numArr, num);


// Ans : 2
let str = "abcdabcdefgggh";

function getUniqueChars(str) {
    let ans = "";
    for (let i=0; i<str.length; i++) {
        if (ans.indexOf(str[i]) == -1) {
            ans += str[i];
        }
    }
    return ans;
}
console.log(getUniqueChars(str));


// Ans : 3
let countriesArr = ["Australia", "Germany", "United States of America"];

function getLargestCountryName(countries) {
    let ans = "";

    for (let i=0; i<countries.length; i++) {
        if (countries[i].length > ans.length) {
            ans = countries[i];
        }
    }
    return ans;
}
console.log(getLargestCountryName(countriesArr));


// Ans : 4
let string = "altomashsiddique";

// function countNumOfVowels(string) {
//     let vowels = "aeiou";
//     let count = 0;

//     for (let i=0; i<string.length; i++) {
//         if (vowels.indexOf(string[i]) != -1) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countNumOfVowels(string));

function countVowels(string) {
    let count = 0;

    for (let i=0; i<string.length; i++) {
        if (string.charAt(i) == 'a' || string.charAt(i) == 'e' ||
    string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') {
            count++;
        }
    }
    return count;
}
console.log(countVowels(string));


// Ans : 5
function randomNums(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log(randomNums(5, 10));
// console.log("Your One Time Password (OTP) is :", randomNums(103821, 991879)); // OTP test