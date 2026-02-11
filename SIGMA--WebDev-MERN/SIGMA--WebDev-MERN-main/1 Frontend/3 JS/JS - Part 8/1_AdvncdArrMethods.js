// ARRAY METHODS - ADVANCED

// For Each method
let numArr1 = [1, 2, 3, 4, 5];
let printFunc = function (elmnt) { // storing an element
    console.log(elmnt);
}
numArr1.forEach(printFunc); // printing every element of numArr using printFunc through forEach method

let numArr2 = [6, 7, 8, 9, 10];
numArr2.forEach( (elmnt) => { // using function/arrow function definition
    console.log(elmnt);
} );

const stuObj = [ {
        name: "Altamash",
        age: 20,
        marks: 70.4
    },
    {
        name: "Nazeef",
        age: 20,
        marks: 66.3
    },
    {
        name: "Adeeb",
        age: 19,
        marks: 64
    } ];
stuObj.forEach(function (student) {
    console.log("Student Info :", student);
    console.log("Student Name :", student.name);
    console.log("Student Marks :", student.marks);
} );


// Map method
let num = [1, 2, 3, 4, 5];
let copyNum = num.map( (elmnt) => (elmnt * 2) ); // it creates a new arr and returned it
copyNum.push(20); // add an elmnt in new copied array
console.log("Copied arr using map :", copyNum);

let gpa = stuObj.map( (elmnt) => {
    return elmnt.marks / 10;
} );
console.log("CGPA :", gpa);


// Filter method
let numsArr = [2, 5,  8, 11, 14, 17, 20, 23, 26];
let evenArr = numsArr.filter( (elmnt) => ( elmnt%2 == 0) ); // when condition will be true
let oddArr = numsArr.filter( (elmnt) => ( elmnt%2 != 0) ); // when condition will be true
let rangeArr = numsArr.filter( (elmnt) => ( elmnt < 15) ); // when condition will be true
console.log("Even array:", evenArr); console.log("Odd array:", oddArr); console.log("Below from 15 - array:", rangeArr);


// Every method - very similar to logical AND
let eA = evenArr.every( (elmnt) => (elmnt%2 == 0) ); // every conditions must be true for checking true result
let oA = oddArr.every( (elmnt) => (elmnt%2 != 0) ); // every conditions must be true for checking true result
console.log("All are even elements in evenArr :", eA); console.log("All are odd elements in oddArr :", oA);


// Some method - very similar to logical OR
let  randomArr = [1, 2, 3, 4, 5];
let isGreaterArr = randomArr.some( (elmnt) => (elmnt > 3) );
console.log("Some elements are greater than three :", isGreaterArr);


// Reduce method
let array = [1, 2, 3, 4, 5];
let finalValue = array.reduce( (accumulator, elmnt) => (accumulator + elmnt) );
console.log("Array converted into a single value using reduced :", finalValue);
// Practice Qs
// Qs : 1 answer
let arrayRandom = [1, 5, 11, 3, 15, 8, 2, 18, 7, 14, 9, 15, 4, 9];
// let max = -1;
// for (let i=0; i<arrayRandom.length; i++) {
//     if (max < arrayRandom[i]) {
//         max = arrayRandom[i];
//     }
// }
let max = arrayRandom.reduce( (max, elmnt) => {
    if (max > elmnt) {
        return max;
    } else {
        return elmnt;
    }
} );
console.log("Maximum value in array is :", max);

// Qs : 2 answer
let arrayRandom2 = [40, 20, 50, 10, 30];
let isMultipleOfTen = arrayRandom2.every( (elmnt) => (elmnt%10 == 0) );
console.log("Multiple of 10 :", isMultipleOfTen);

// Qs : 3 answer
let min = arrayRandom2.reduce( (min, elmnt) => {
    if (min < elmnt) {
        return min;
    } else {
        return elmnt;
    }
} );
console.log("Minimum value in array is :", min);


// Default parameters
function sum(a, b = 5) { // 'b' has a defualt value
    return a + b;
}
console.log(sum(2)); // a = 2 and 'b' has a defulat value = 5
console.log(sum(6, 3)); // a=6 and b=3