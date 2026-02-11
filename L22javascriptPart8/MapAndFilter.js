// using Map functions


let num = [1, 2, 3, 4, 5];
let double = num.map(function (ele) {
    return ele * 2;
});

console.log(double);

console.log("first way \n");



//filter function using function
let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter(function (ele) {
    return ele % 2 == 0;
});
console.log(even);


console.log("second way \n");



//filter function using arrow function
let nums1 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even1 = nums1.filter((ele) => {
    return ele % 2 == 0;
});
console.log(even1);




console.log("third way \n");

let nums2 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even2 = nums2.filter((num) => (num % 2 == 0));

console.log(even2);



console.log("first way \n");

let nums3 = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even3 = nums3.filter((num) => {
    return num % 2 == 0;// even -> true
});

console.log(even3);


console.log("*********************#\n");

// #****************************#
let students = [
    {
        name: "John",
        age: 20,
        grade: 90,
        city: "New York",
    },
    {
        name: "Alice",
        age: 21,
        grade: 95,
        city: "Los Angeles",
    },
    {
        name: "Bob",
        age: 19,
        grade: 85,
        city: "Chicago",
    },
    {
        name: "Emily",
        age: 22,
        grade: 92,
        city: "Houston",
    },
];

// Using map to get names of students
let names = students.map((student) => student.name);
console.log(names);


// Using filter to get students with grade > 90

let highGrades = students.filter((student) => student.grade > 90);
console.log(highGrades);



console.log("*********** Filter using arrow function **************#\n");
//filter function using function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = numbers.filter( (ele)=> {
    return ele < 5; // filter out numbers greater than 5
});
console.log(ans); // Output: [6, 7, 8, 9, 10]
