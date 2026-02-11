// API - Application Programming Interface (Mostly we'll talk about Web APIs)

// Format - JSON & XML (Generally we use JSON(JavaScript Object Notation))
// Accessing Data from JSON :-
let jsonResponseData = 
'{"fact":"A cat can sprint at about thirty-one miles per hour.","length":52}'; // JSON Response Data from an api

let validData = JSON.parse(jsonResponseData); // This method converts jsonData into JS Object
console.log("JS Object :-", validData);
console.log("JS Property Value :-", validData.fact);

let studentObject = {
    name: "altamash",
    age: 20
}; // we created a JS Object

let jsonData = JSON.stringify(studentObject); // it converts JS Object into jsonData
console.log("JSON Data :-", jsonData);

// Testing API requests :-
// Tools :- Hoppscoth & Postman

// Ajax - Asynchronous JavaScript and XML
// Ajaj - Asynchronous JavaScript and JSON (Generally we'll talk Ajax)

// HTTP Verbs :-
/*  GET - Retrieve data
    POST - Send data
    PUT - Update data
    DELETE - Remove data    */

    // Status Codes :-
    /*  200 - OK
        404 - Not Found
        400 - Bad Request
        500 - Internal Server Error     */

// Add Informations in URLs :-
/* Query Strings
Examples :
https://api.potterdb.com    ===>>> movie api
https://api.potterdb.com/v1/movies  ===> added information to find movies

http://universities.hipolabs.com    ===>>> university api
http://universities.hipolabs.com/search?name=india  ===> added information for india's universities     */

// HTTP Headers :-
/*  Request Header - Go to 'google.com' and then go to 'Network' tab in the inspect then
search for a value (for example): 'mango' then you can see all requests then click on a
request and then you can you can go on 'Headers' section then find 'Request Headers' to
see all headers about a request     */

/*  Response Header - Go to 'hoppscoth.io' and then paste this random api 'https://icanhazdadjoke.com/'
and see the headers and pass a value in header like 'Accept' 'application/json' for JSON    */


// Our First Request
// (i) using fetch() method
let url = "https://catfact.ninja/fact";

fetch(url).then((res) => { // fetch returns a promise
    // console.log("Response :-", res);
    return res.json(); // it also returns a promise
}).then((data) => {
    // console.log("Data :-", data); // data of api
    console.log("Fact from data1 :-", data.fact);
    return fetch(url);
}).then((res) => {
    return res.json();
}).then((data2) => {
    console.log("Fact from data2 :-", data2.fact);
})
.catch((err) => {
    console.log("Error :-", err);
});
console.log("This line will be print first then asynchronous operations like promise because javascript does not wait for asynchronous");


// (ii) using fetch with async & await
async function getFacts() {
    try {
        let res = await fetch(url);
    let data = await res.json();
    console.log("Data1 with async & await :-", data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log("Data2 with async & await :-", data2.fact);
    } catch(err) {
        console.log("Error :-", err);
    }
}
getFacts();