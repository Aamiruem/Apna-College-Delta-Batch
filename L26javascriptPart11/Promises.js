// function savetoDB(data){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         console.log("your data was saved: ", data);
        
//     } else{
//         console.log("week connection. data not saved");
//     }
// }

// savetoDB("apna college");



function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success();
    } else{
        failure();
    }
}

savetoDB("My Data", 
    () => {
        console.log("Data saved successfully!");
    }, 
    () => {
        console.log("Failed to save data. Check internet connection.");
    }
);



// function savetoDB(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     setTimeout(() => {
//         if (internetSpeed > 4) {
//             success();
//         } else {
//             failure();
//         }
//     }, 1000); // simulate 1-second network delay
// }
















function savetoDB(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        success();
        
    } else{
        failure();
    }
}




savetoDB(
    "apna college", 
    ()=> {
    console.log("success: your data was saved: ");
    savetoDB(
        "Hello world",
        ()=> {
        console.log("success2: your data2 was saved: ");
        savetoDB(
            "Hello kamran",
            ()=> {
            console.log("success3: your data3 was saved: ");
            },
            ()=> {
            console.log("failure3: week connection. data3 not saved");
            }
        )
        },
        ()=> {
        console.log("failure2: week connection. data not saved");
        }
    )
    },
    ()=> {
    console.log("failure: week connection. data not saved");
    }
);





// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         resolve("success: data was saved");
        
//     } else{
//         reject("failure: week connection");
//     }
// });
// }









// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         resolve("success: data was saved");
        
//     } else{
//         reject("failure: week connection");
//     }
// });
// }

let request = savetoDb("apna college");// request = promises object

request
    .then((data)=> {
        console.log("promise was resolved");
        console.log(request)
    })
    .catch((data)=> {
        console.log("promise was rejected");
        console.log(request)
    })





function savetoDb(data){
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        resolve("success: data was saved");
        
    } else{
        reject("failure: week connection");
    }
});
}

savetoDb("apna college") // request = promises object
    .then(()=> {
        console.log("promise was resolved");
    })
    .catch(()=> {
        console.log("promise was rejected");
    })










function savetoDb(data){
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        resolve("success: data was saved");
        
    } else{
        reject("failure: week connection");
    }
});
}

savetoDb("apna college") // request = promises object
    .then(()=> {
        console.log("data1 saved");
        return savetoDb("kamran");
    
    })
    .then(() =>{
        console.log("data2 saved");
        return savetoDb("kamran");
    })
    .then(() =>{
        console.log("data3 saved");
    })
    .catch(()=> {
        console.log("promise was rejected");
    })









function savetoDb(data){
    return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4){
        resolve("success: data was saved");
        
    } else{
        reject("failure: week connection");
    }
});
}

savetoDb("apna college") // request = promises object
    .then((result)=> {
        console.log("data1 saved");
        console.log("result of promise: " , result);
        return savetoDb("kamran");
    
    })
    .then((result) =>{
        console.log("data2 saved");
        console.log("result of promise: " , result);
        return savetoDb("kamran");
    })
    .then((result) =>{
        console.log("data3 saved");
        console.log("result of promise: " , result);
    })
    .catch((error)=> {
        console.log("promise was rejected");
        console.log("error of promise: " ,error);
    })










h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!")
        }, delay);
    })
}
changeColor("red", 1000)
.then(() =>{
    console.log("red color was completed");
    return changeColor("orange", 1000);
})

.then(() =>{
    console.log("orange color was completed");
    return changeColor("green", 1000);
})

.then(() =>{
    console.log("green color was completed");
    return changeColor("blue", 1000);
})

.then(() =>{
    console.log("blue color was completed");
    // return changeColor("orange", 1000);
})
