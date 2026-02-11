// dry run

let arr = ["hello", 'a', 23, 64, 99, -6];

for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log("\n");

// dry run for for of loop

let arr1 = ["hello", 'a', 23, 64, 99, -6];

for(let item of arr1){
    console.log(item);
}

// backward run
console.log("\n");

let arr2 = ["hello", 'a', 23, 64, 99, -6];

for(let i = arr2.length-1; i>=0; i--){
    console.log(arr2[i]);
}


console.log("\n");
for(let i = 10; i>=1; i--){
    console.log(i);
}


console.log("\n");
for(let i = 10; i>=1; i = 1-3){
    // let i = 5;
    console.log(i);
}
