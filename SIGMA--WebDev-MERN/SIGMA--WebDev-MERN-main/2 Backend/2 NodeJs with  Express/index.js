// Getting Started with Express
const express = require("express");

const app = express();
// console.dir(app);
let port = 3000; // 8080

// app.listen :-
app.listen(port, () => { // created a server on 3000 port with the help of express
    console.log(`App is listening on ${port} port`);
});

// app.use :-
// app.use((request, response) => { // Tracking the incoming requests
//     console.log("Request recieved"); // when will come a req, it'll print on each req

//     // console.log("Request object :-", request); // returns an  object
//     // response.send("This is a basic response."); // Sending the response
//     // response.send({ // Sending an object in the response
//     //     name: "Altmash",
//     //     age: 20
//     // });
//     let htmlCode = "<h1>Fruits</h1><ul><li>Apple</li><li>Mango</li><li>Orange</li></ul>";
//     response.send(htmlCode); // Sending HTML Code in the response
// });

// Routing :-
app.get("/", (req, res) => {
    res.send("Hello, I am root and You contacted with root path");
});
// app.get("/apple", (req, res) => {
//     res.send("You contacted with apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("You contacted with orange path");
// });
// app.get("*", (req, res) => { // * for all
//     res.send("This path does not exist");
// });
app.post("/", (req, res) => {
    res.send("You sent a post request to root path");
});

// Path Parameters
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`<h1>Welcome to the page of ${username}.</h1>`);
    console.log(req.params);
});

// Query Strings
app.get("/search", (req, res) => {
    let { q } = req.query;
    console.log(q);
    if(!q) {
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`<h1>Search results for query string: ${q}</h1>`);
});