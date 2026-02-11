function sum(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}

console.log("This is the first methods ", sum(1, 2, 3, 4, 5))


// arguments is an array like object which is available in all the functions and it contains all the arguments passed to the function
// it is not an array but it can be converted into an array using Array.from(arguments) or [...arguments]

function getSum(n){
    let sum = 0;
    for(let i=0; i<n; i++){
        sum += i
    }
    return sum
}
getSum(8) // sum = 0+1+2+3+4+5+6+7 = 28

console.log("This is the second methods" , getSum(8))
