// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("data1 =", data.fact);
//         return fetch(url);
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("data2 =", data.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR - ",err);
//     });






// let url = "https://catfact.ninja/fact";

// async function getFact(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log("data1 =", data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data2 =", data2.fact);
//     } catch (e) {
//         console.log("ERROR - ",e);
//     }
//     console.log("Bye");
    
// }


// let url = "https://catfact.ninja/fact";
// fetch(url) ;






let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data1) => {
    console.log("data1 =", data1.fact);
    return fetch(url); // Fetch another fact
  })
  .then((res) => {
    return res.json();
  })
  .then((data2) => {
    console.log("data2 =", data2.fact);
  })
  .catch((err) => {
    console.log("ERROR -", err);
  });
