// Ans : 1
let arr = [7, 9, 0, -2];
let n = 3;
let ans1 = arr.slice(0, n);
console.log("Ans1 :", ans1);

// Ans : 2
arr = [7, 9, 0, -2];
n = 3;
let ans2 = arr.slice(-n);
console.log("Ans2 :", ans2);

// Ans : 3
let str = "";
// str = prompt("Enter a string :");
if (str .length == 0) {
    console.log("Ans3 : Blank/Empty String");
} else {
    console.log("Ans3 : Not Blank/Empty String");
}

// Ans : 4
let str1 = "HeloSir";
let index = 3;
if ( str1[index] == str1[index].toLowerCase() ) {
    console.log("Ans4 : Character is lowercase");
} else {
    console.log("Ans4 : Character is not lowercase");
}

// Ans : 5
let str2 = "    HanjiKaiseHainAap  ";
// str2 = prompt("Enter a string :");
console.log("Ans5 - Original string :", str2);
console.log("Ans5 - String without spaces :", str2.trim());

// Ans : 6
let randomArr = ["Hanji", 'H', 10, 45, 63, -10];
let element = 45;
if (randomArr.indexOf(element) != -1) {
    console.log("Ans6 : Element exists in array");
} else {
    console.log("Ans6 : Element does not exist in array");
}