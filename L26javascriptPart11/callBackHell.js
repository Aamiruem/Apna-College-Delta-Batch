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







h1 = document.querySelector("h1");
function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange)   nextColorChange();
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

//callback nesting => is called callback hell

// This is an example of callback hell, where we have nested callbacks.
// It can make the code hard to read and maintain.



