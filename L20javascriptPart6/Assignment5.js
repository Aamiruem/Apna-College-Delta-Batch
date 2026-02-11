let start = 100;
let end = 200;


function generateRandom(start, end){
    let diff = end -start;
    let randomNumber = Math.floor(Math.random() * diff) + start;
    return randomNumber;
}

let randomNumber1 = generateRandom(start, end);

let randomNumber2 = generateRandom(start, end);

console.log(`Random number between ${start} and ${end}: = ${randomNumber1}`);
