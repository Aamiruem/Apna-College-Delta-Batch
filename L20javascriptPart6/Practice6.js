let str = ["Hi", "Hello", "Bye", "!"];

function concat(str){
    let result = " ";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

console.log(concat(str));
// output: HiHelloBye!
// we can also use join() method to concatenate the elements of an array
console.log(str.join(" ")); // output: HiHelloBye!
// join() method is more efficient than using a for loop to concatenate the elements of an array

// output: HiHelloBye!
