let promise = new Promise((resolve, reject) => {
    resolve("Step 1 completed");
});

promise
.then((result) => {
    console.log(result);
    return "Step 2 completed";
})
.then((result) => {
    console.log(result);
    return "Step 3 completed";
})
.then((result) => {
    console.log(result);
});



function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Color:", color);
            resolve();
        }, delay);
    });
}

changeColor("red",1000)
.then(()=>changeColor("green",1000))
.then(()=>changeColor("blue",1000))
.then(()=>changeColor("yellow",1000))
.then(()=>console.log("All colors changed"));




function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;

        if(internetSpeed > 4){
            resolve("Data saved: " + data);
        }else{
            reject("Weak connection");
        }
    });
}

saveToDb("User1")
.then((result)=>{
    console.log(result);
    return saveToDb("User2");
})
.then((result)=>{
    console.log(result);
    return saveToDb("User3");
})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log("Error:", err);
});
