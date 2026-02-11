// GET & POST Requests :-
const express = require("express");
const app = express();

const path = require("path");
app.set("Backend", path.join(__dirname, "/Backend"));

let port = 3000;
app.listen(port, () => {
    console.log(`App is listening on ${port} port`);
});

app.get("/", (req, res) => {
    res.send("This is a server for GET & POST requests");
});

// GET request example :-
app.get("/register", (req, res) => {
    let {username, password} = req.query;
    
    res.send(`Standard GET Request, Welcome @${username}`);
});

// POST request example :-
// Handling post request
app.use(express.urlencoded( {extended: true} )); // parse post request data
app.use(express.json()); // for json data

app.post("/register", (req, res) => { // set route for post request
    let {username, password} = req.body;
    console.log(req.body);

    res.send(`Standard POST Request, Welcome @${username}`);
});