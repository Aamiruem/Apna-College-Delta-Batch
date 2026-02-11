// let arr = [1, 2, 3, 4, 5, 6];
// let print = function(ele){
//     console.log(ele);
// };

// arr.forEach(print);





// arr.forEach(function(ele){
//     console.log(ele);
// });

// output: 1 2 3 4 5 6



// using arrow function
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach((ele) => {
    console.log(ele);
});

console.log("other way\n");

// output: 1 2 3 4 5 6
arr.forEach(function (ele){
    console.log(ele);
});
  



console.log("other way");
arr.forEach(ele => console.log(ele));









let arr1 = [
    {
        name: "aamir",
        id: 1,
        marks: 95,
    },
    {
        name: "kamran",
        id: 2,
        marks: 90,
    },
    {
        name: "khan",
        id: 3,
        marks: 80,
    },
];
console.log(arr1);

arr1.forEach((ele) => {
    console.log(ele);
});



// Array Methods
// • forEach
// • map
// • filter
// • some
// • every
// • reduce



//forEach => forEach is used to iterate over an array and perform a specific operation on each element.
let arr2 = [1, 2, 3, 4, 5, 6];
arr2.forEach((ele) => {
    console.log(ele);
});


//map=>  map is used to create a new array by performing a specific operation on each element of the original array.

let arr3 = [1, 2, 3, 4, 5, 6];
let square = arr3.map((ele) => ele * ele);
console.log(square);



//filter => it means to filter out elements from an array based on a certain condition.
let arr4 = [1, 2, 3, 4, 5, 6];
let even = arr4.filter((ele) => ele % 2 == 0);
console.log(even);


//some => some is used to check if at least one element in an array satisfies a certain condition.
let arr5 = [1, 2, 3, 4, 5, 6];
let ans = arr5.some((ele) => ele % 2 == 0);
console.log(ans);


//every => every is used to check if every element in an array satisfies a certain condition.
let arr6 = [1, 2, 3, 4, 5, 6];
let ans1 = arr6.every((ele) => ele % 2 == 0);
console.log(ans1);


//reduce => reduce is used to reduce an array to a single value.
let arr7 = [1, 2, 3, 4, 5, 6];
let sum = arr7.reduce((acc, cur) => acc + cur, 0);
console.log(sum);
