let n = prompt("Write your number: ");
n = parseInt(n);// convert string to number

for(let i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " = " + (n * i));
}
