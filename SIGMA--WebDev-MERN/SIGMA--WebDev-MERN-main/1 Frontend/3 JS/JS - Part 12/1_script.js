// Call Stack in JS
function hello() {
    console.log("Inside hello function :");
    console.log("Hello!");
}

function demo() {
    console.log("Inside demo function calling hello function :");
    hello(); // Function call
}
console.log("Calling demo function :");
demo(); // Function call
console.log("Done, Bye!");


// Visualizing the Call Stack
function one() {
    return 1;
}
function two() {
    return one() + one(); // 3rd Call of one() and 4th Call for another one()
}
function three() {
    let ans = two() + one(); // ans is undefined in the beginning, 2nd Call of two() and 5th Call for one()

    console.log(ans); // After total 5th call, ans will print 3 and all function call and ans will be remove from the functions
}
three(); // 1st Call


/* Breakpoints => Go to inspect feature of browser and click on sources tab and then
click on your js file name and then click on line number where you want to set
breakpoint. (for Debugging) */


/* JS is 'Single threaded' => It means that JS can only execute one task at a time and
it will execute the task line by line in 'Synchronous' nature but it can execute
multiple tasks at a time in 'Asynchronous' nature. */
let a = 10;
console.log(a);
let b = 20;
console.log(b);
console.log(a + b);
setTimeout( () => { // Here, JS will act Asynchronously (due to setTimeout)
    console.log("My name is Jack");
}, 1000);
console.log("Hello...");


/* Callback Hell => It is a situation where we have multiple asynchronous tasks and
we have to write a lot of code to handle them. */
let h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1500);
// setTimeout(() => {
//     h1.style.color = "lightblue";
// }, 2500);
// setTimeout(() => {
//     h1.style.color = "blue";
// }, 3500);

// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }
// setTimeout(changeColor("red", 1500));
// setTimeout(changeColor("lightblue", 2500));
// setTimeout(changeColor("blue", 3500));

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1500, () => {
    changeColor("lightblue", 1000, () => {
        changeColor("blue", 1000);
    });
});


/* Promises => It is a way to handle Asynchronous Tasks in a better way. */
function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random() * 10) + 1;
        if (netSpeed > 4) {
            resolve("Success : Data saved");
        } else {
            reject("Failure : Weak connection, Data not saved");
        }
    });
} // console.log(saveToDb("Random data"));

saveToDb("Random data").then((result) => {
    console.log("Promise1 resolved");
    console.log("Result:-", result);
    return saveToDb("New random data");
}).then((result) => {
    console.log("Promise2 resolved");
    console.log("Result:-", result);
    return saveToDb("Newer random data");
}).then((result) => {
    console.log("Promise3 resolved");
    console.log("Result:-", result);
})
.catch((error) => {
    console.log("Promise rejected");
    console.log("Error:-", error);
});


// Applying promise on changeColor function
function changeBgColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.backgroundColor = color;
            resolve("Background color Updated");
        }, delay);
    });
}
changeBgColor("black", 1500).then((result) => {
    console.log("Result :", result);
    console.log("Background color changed to black");
    return changeBgColor("red", 1000);
}).then(() => {
    console.log("Background color changed to red");
    return changeBgColor("lightblue", 1000);
}).then(() => {
    console.log("Background color changed to lightblue");
    return changeBgColor("blue", 1000);
});

/* Async Functions :
Async keyword => It is a way to handle Asynchronous tasks in a more better/cleaner way. */
async function greet() { // Async function returns a promise
    // throw "Something went wrong";
    return "Hello, Im Async Function";
}
greet().then((result) => {
    console.log("Greet result :", result);
})
.catch((err) => {
    console.log("Greet error :", err);
});

let getNumDemo = async () => { // Async function returns a promise
    return 5;
}
console.log(getNumDemo());


/* Await keyword => It pauses the execution of its surrounding async function
                    until the promise is settled (resolved or rejected) */
function getRandomNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log("Random number :", num);
            resolve();
        }, 1000);
    });
}
async function randomNumDemo() {
    await getRandomNum();
    await getRandomNum();
    getRandomNum();
}
randomNumDemo();

// Applying await on changeColor function
function changeSize(size, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Handling rejection with await
            let rndmNum = Math.floor(Math.random() * 5) + 1;
            if (rndmNum > 3) {
                reject("Promise rejected: handling rejections with await");
            }
            h1.style.fontSize = size;
            resolve("Font size changed");
        }, delay);
    });
}
async function changeSizeDemo() {
    try {
        await changeSize("40px", 1500);
    await changeSize("60px", 1000);
    await changeSize("80px", 1000);
    } catch(err) {
        console.log("Error caught :");
        console.log(err);
    }

    let a = 7;
    console.log("a value :", a);
    console.log("New value :", a + 3);
}
changeSizeDemo();
