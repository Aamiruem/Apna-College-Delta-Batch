// Promise - Success(resolve) / Failure(reject)
// Syntax => new Promise((res,rej) => { ... })

// let myPromise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Promise is resolved successfully");
//   } else {
//     reject("Promise is rejected");
//   }
//     // setTimeout(() => {
//     //     resolve("Promise is resolved successfully");
//     // }, 5000);

// });

// myPromise.then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
// .finally(() => {
//       console.log("Promise is completed");
//     }
//   );

//Async/Await
async function fetchData() {
    try {
        let response =  fetch("https://jsonplaceholder.typicode.com/todos/1");
        let response1 =  fetch("https://jsonplaceholder.typicode.com/todos/1");
        let ren = await response;
        let ren1 = await response1;
        let data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
    finally {
        console.log("Fetch operation completed");
    }
}

fetchData();