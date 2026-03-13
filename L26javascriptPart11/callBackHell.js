// h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);


// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);


// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);





// h1 = document.querySelector("h1");
// function changeColor(color){
//     h1.style.color = color;
// }

// setTimeout(changeColor("red"), 1000);
// setTimeout(changeColor("orange"), 2000);
// setTimeout(changeColor("yellow"), 3000);





// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay);
// }
// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("orange", 3000);







// let h1 = document.querySelector("h1");
// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange)   nextColorChange();
//     }, delay);
// }
// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("orange", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("purple", 1000, () => {
//                         console.log("All colors changed");
//                     });
//                 });

//             });
//         });
        
//     });
// });

//callback nesting => is called callback hell

// This is an example of callback hell, where we have nested callbacks.
// It can make the code hard to read and maintain.








let h1 = document.querySelector("h1"); 
// # This line is commented out because it requires a DOM environment to work, and we are running this code in a non - browser environment.In a browser, this line would select the first < h1 > element in the document and assign it to the variable h1.

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;

        if (nextColorChange) {
            nextColorChange();
        }

    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("orange", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000, () => {
                    changeColor("purple", 1000, () => {
                        console.log("All colors changed");
                    });
                });
            });
        });
    });
});






// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         console.log("Color changed to:", color);

//         if (nextColorChange) {
//             nextColorChange();
//         }

//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("orange", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("purple", 1000, () => {
//                         console.log("All colors changed");
//                     });
//                 });
//             });
//         });
//     });
// });
