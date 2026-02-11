// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try {
//         let res = await axios.get(url);
//         // console.log("data1 =", data.fact);
//         console.log(res)

//         return res.data.fact;

//     } catch(e){
//         console.log("ERROR - ",e);
//         return "An error occurred while fetching data. Please try again later.";
//         return "No fact found";
//     }
// }










// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//     try {
//         let res = await axios.get(url);
//         // console.log("data1 =", data.fact);
//         console.log(res)

//         return res.data.fact;

//     } catch(e){
//         console.log("ERROR - ",e);
//         return "An error occurred while fetching data. Please try again later.";
//         return "No fact found";
//     }
// }














let btn = document.querySelector("button");
btn.addEventListener('click', async() =>{
    let fact = await getFacts();
    console.log("Button was clicked");
    console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact;
    
})




let url = "https://catfact.ninja/fact";

async function getFacts(){
    try {
        let res = await axios.get(url);
        // console.log("data1 =", data.fact);

        return res.data.fact;

    } catch(e){
        console.log("ERROR - ",e);
        return "An error occurred while fetching data. Please try again later.";
        return "No fact found";
    }
}
