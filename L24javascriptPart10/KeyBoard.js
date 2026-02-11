let btn = document.querySelector("button");

btn.addEventListener("click", function (event) {
    console.log(event)
    console.log("button clicked");
});

// // keydown event
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//     console.log("key = ", event.key);
//     console.log("code = ", event.code);
//     // console.log(event);
//     console.log("key was pressed");
// });

// // keyup event
// document.addEventListener("keyup", function (event) {
//     console.log(event);
//     console.log("key is released");
// });

// // keypress event
// document.addEventListener("keypress", function (event) {
//     console.log(event);
//     console.log("key is pressed");
// });




// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//     console.log("code = ", event.code);
    
//     if(event.code == "ArrowUp"){
//         console.log("character moves forward");
//     } else if(event.code == "ArrowDown"){
//         console.log("character moves backward");
//     } else if(event.code == "ArrowLeft"){
//         console.log("character moves left");
//     } else if(event.code == "ArrowRight"){
//         console.log("character moves right");
//     }

// });





let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("code = ", event.code); // ArrowUp, ArrowDown, ArrowLeft, ArrowRight

    if (event.code === "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code === "ArrowDown") {
        console.log("character moves backward");
    } else if (event.code === "ArrowLeft") {
        console.log("character moves left");
    } else if (event.code === "ArrowRight") {
        console.log("character moves right");
    }
});
