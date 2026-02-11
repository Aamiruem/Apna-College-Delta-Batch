// let arr = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

// let max = arr.reduce((max, ele) => {
//     if(ele>max){
//         return ele;
//     } else{
//         return max
//     }
// });

// console.log("This is a max number of over all given array = ", max);




let arr = [22, 43, 4, 75, 33, 14, 7, 78, 1, 12];

let max = -1;
for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log("This is a max number of over all given array = ", max);



 