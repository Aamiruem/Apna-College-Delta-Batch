// Qs1.Write a JavaScript function that returns array elements larger than a number.

// let arr1 = [8, 9, 10, 1, 2, 3, 4, 7, 6];
// let num1 = 5;

// //elements larger than numbers 

// function findLargerNumbers(arr1, num1) {
//   return arr.filter(element => element > num1);
// }

// console.log("This is the five larger numbers " , findLargerNumbers(arr1, num1)); // Output: [9, 10, 8]








let arr = [8, 9, 10, 1, 2, 3, 4, 7, 6];
let num = 5;

//elements larger than numbers 
function getElements(arr, num){
    for(let i = 0; i< arr.length; i++){
        if(arr[i]> num){
            console.log(arr[i]);
        }
    }
}

getElements(arr, num); // Output: 9, 10, 8
