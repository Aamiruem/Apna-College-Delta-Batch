let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
// num = 3;
// num = 2;

console.log(arr);


for(let i = 0; i < arr.length; i++){

    if(arr[i] == num){
        arr.splice(i, 1); // splice(index, deleteCount)
    }
}

console.log(arr);
