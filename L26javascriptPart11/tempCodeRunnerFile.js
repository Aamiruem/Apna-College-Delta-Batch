.then((result) => {
    console.log(result);
    return changeColor("green", 1000);
})
.then((result) => {
    console.log(result);
    return changeColor("blue", 1000);
})
.then((result) => {
    console.log(result);
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("All colors changed");
});
