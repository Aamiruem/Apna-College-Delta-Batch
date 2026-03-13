function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        console.log("Color changed to", color);

        if(nextColorChange){
            nextColorChange();
        }

    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("green", 1000, () => {
        changeColor("blue", 1000, () => {
            changeColor("yellow", 1000);
        });
    });
});




changeColor("red",1000)
.then(() => {
    return changeColor("green",1000);
})
.then(() => {
    return changeColor("blue",1000);
})
.then(() => {
    return changeColor("yellow",1000);
})
.then(() => {
    console.log("All colors changed");
});




// 4. Shorter Promise Chain

// We can write it even cleaner.

changeColor("red",1000)
.then(() => changeColor("green",1000))
.then(() => changeColor("blue",1000))
.then(() => changeColor("yellow",1000))
.then(() => console.log("All colors changed"));

// Much easier to read.

// 5. Adding Error Handling
changeColor("red",1000)
.then(() => changeColor("green",1000))
.then(() => changeColor("blue",1000))
.then(() => changeColor("yellow",1000))
.then(() => console.log("All colors changed"))
.catch((err)=>{
    console.log("Error:", err);
});





function saveToDb(data) {
    return new Promise((success, failure) => {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            success("Data was saved: " + data);
        } else {
            failure("Weak connection. Data not saved");
        }

    });
}

saveToDb("My Data")
.then((message) => {
    console.log(message);
})
.catch((err) => {
    console.log("Error:", err);
});
