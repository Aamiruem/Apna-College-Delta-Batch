function hello(){
    console.log('Hello World!');
}

hello(); // Calling the function

function printName(){
    console.log('My name is kamran');
    return 'kamran';
    console.log('This line will not be executed' + ' because the return statement above ends the function');
}

let name = printName();
console.log(name);


function print1to5(){
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
print1to5();






function isAdult(){
    let age = 18;
    if(age>=18){
        console.log("Adult")
    }
    else{
        console.log("Not Adult");
    }
}

isAdult();
