// Qs1.Create a number variable num with some value.Now,print“good”if the number is divisible by 10 and print“bad”if it is not.


let num = 10;
if(num % 10 == 0){
    console.log("good");
} else{
    console.log("bad");
}



// Qs2.Create a variable num and assign it a value.Now,print“even”if the number is divisible by 2 and print“odd”if it is not.

let nums = 10;
if(nums % 2 == 0){
    console.log("even");
} else{
    console.log("odd");
}




// Qs3.Create a variable num and assign it a value.Now,print“positive”if the number is positive and print“negative”if it is not.

let num1 = 10;
if(num1 > 0){
    console.log("positive");
} else{
    console.log("negative");
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your name: ', (name) => {
    rl.question('Please enter your age: ', (age) => {
        console.log(`${name} is ${age} years old.`);
        rl.close();
    });
});
