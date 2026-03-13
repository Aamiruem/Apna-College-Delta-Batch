// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;

//         if (nextColorChange) {
//             nextColorChange();
//         }

//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("orange", 1000);
//         });
//     });
// });




let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed to " + color);
        }, delay);
    });
}

changeColor("red", 1000)
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





async function runColors() {
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("orange",1000);

    console.log("All colors changed");
}

runColors();
