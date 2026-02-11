// Rest operator is used to represent an indefinite number of arguments as an array
// Rest => Allows a function to take an indefinite number of arguments and bundle them in an array


function sum(...args) {
    //arguments
    for(let i = 0; i< args.length; i++){
        console.log("you gave us: ", args[i]);
    }
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// function min(){
//     console.log(args);
//      console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }



function min(msg,...args){
    console.log(msg);
    console.log(args);
    return args.reduce((min, ele) => {
        if(min>ele){
            return ele;
        } else{
            return min;
        }
    });
}
console.log(min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));



function sum(...args){
    return args.reduce((sum, ele) => sum + ele);

}
console.log(sum(1, 2, 3, 4));
