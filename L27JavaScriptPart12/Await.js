// Await Keyword
// pauses the execution of its surrounding async function until the promise is settled
// (resolved or rejected)

// async functions always return a Promise.

async function show() {
    await colorChange("violet", 1000);
    await colorChange("indigo", 1000);
    await colorChange("blue", 1000);
    await colorChange("green", 1000);
    await colorChange("yellow", 1000);
    await colorChange("orange", 1000);
    return "done";
}

await colorChange("green", 1000);
await colorChange("yellow", 1000);
await colorChange("orange", 1000);
return "done";





function getNum() {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            return num;
        }, 1000);
        console.log(5);
    
    });
}
async function demo() {
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}
demo();


// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             resolve(num); // ✅ resolve the value
//         }, 1000);

//         console.log(5); // This will still run immediately
//     });
// }

// async function demo() {
//     console.log(await getNum());
//     console.log(await getNum());
//     console.log(await getNum());
//     console.log(await getNum());
//     console.log(await getNum()); // add console.log to see values
// }

// demo();





// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
        
//     setTimeout(() => {
//         let num = Math.floor(Math.random() * 5) +1;
//         if(num >3){
//             reject("failed");
//         }
//         h1.style.color = color;
//         console.log(`color changed to ${color}!`);
//         resolve("color changed!");
//     }, delay);

//     });
// }

// async function demo() {
//     try{
//         await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     changeColor("orange", 1000);
//     } catch(err) {
//         console.log("error", err);
//         console.log("error caught");
        
//     }


//     let a = 5;
//     console.log(a);
//     console.log("new number", a+ 3);
    
// }
