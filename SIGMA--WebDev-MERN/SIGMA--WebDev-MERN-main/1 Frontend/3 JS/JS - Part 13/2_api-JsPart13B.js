// Axios - library to make HTTP requests
let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log("Fact using axios :-", res.data.fact);
        return res.data.fact;
    } catch(e) {
        console.log("Error :-", e);
        return "No fact found";
    }
} // getFacts();

// Activity - Show everytime new facts clicking on a button
let factBtn = document.querySelector(".factButton");
factBtn.addEventListener("click", async () => {
    let fact = await getFacts();

    let factPara = document.querySelector(".factP");
    factPara.innerText = fact;

    factBtn.innerText = "Show new fact";
});

// Activity - Show everytime new dog images clicking on a button
let url2 = "https://dog.ceo/api/breeds/image/random";
async function getDogImg() {
    try {
        let response = await axios.get(url2);
    console.log("Image link using axios :-", response.data.message);
    return response.data.message;
    } catch(err) {
        console.log("Error :-", err);
        return "No image found";
    }
}
let dogShowBtn = document.querySelector(".dogButton");
dogShowBtn.addEventListener("click", async () => {
    let dogImgLink = await getDogImg();

    let dogImg = document.querySelector(".dogImg");
    dogImg.setAttribute("src", dogImgLink);

    dogShowBtn.innerText = "Show new image";
});

// Sending headers using Axios
let jokeUrl = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const configHeaders = {headers: {Accept: "application/json"} };
        let res = await axios.get(jokeUrl, configHeaders);
        console.log("Data in JSON :-", res.data);
    } catch(e) {
        console.log("Error :-", e);
    }
}
getJokes();