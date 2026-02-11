let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

console.log(id);


setTimeout(() => {
    clearInterval(id);
    console.log("Bye world clear interval ran");
}, 10000);
console.log(clearInterval(id));
