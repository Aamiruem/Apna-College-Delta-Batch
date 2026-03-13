// let promise = new Promise((resolve, reject) => {

//     let success = true;

//     if(success){
//         resolve("Data saved");
//     }else{
//         reject("Error saving data");
//     }

// });

// promise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });




// let promise = new Promise((resolve, reject) => {
//     resolve(2);
// });

// promise
// .then((num)=>{
//     console.log(num);
//     return num * 2;
// })
// .then((num)=>{
//     console.log(num);
//     return num * 2;
// })
// .then((num)=>{
//     console.log(num);
// });



let promise = new Promise((resolve, reject) => {
    resolve("Start");
});

promise
.then((msg)=>{
    console.log(msg);
    throw "Error occurred";
})
.then(()=>{
    console.log("This will not run");
})
.catch((err)=>{
    console.log("Caught:", err);
});
