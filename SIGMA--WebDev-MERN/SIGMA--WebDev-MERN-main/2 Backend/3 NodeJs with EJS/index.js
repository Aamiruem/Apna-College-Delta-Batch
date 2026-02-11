// EJS - Embedded JavaScript template

const express = require('express');
const app = express();

const port = 8080;
app.listen(port, () => {
    console.log(`App is listening on ${port} port`);
});

// Using EJS :-
app.set("view engine", "ejs"); // express internally require to ejs

const path = require("path"); // path is a package for the bottom line
app.set("views", path.join(__dirname, "/views")); // path setted to  run the server from parent dir
app.get("/", (req, res) => {
    res.render("home"); // home.ejs
});
app.get("/home", (req, res) => {
    res.send("Welcome");
});

// Interpolation Syntax :- check ejs file for syntax --->>>     <%= EJS %>


// Passing data to EJS :-
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs", { diceValue: diceValue } );
});
/*
Instagram EJS :- Create a basic template for instagram page based on following route
              : /ig/:username   */
app.get("/ig/:username", (req, res) => {
    const followers = ["bob", "mario", "jack", "david", "joshua"];
    let { username } = req.params;
    res.render("instagram.ejs", { username, followers });
});
// Conditional Statements & Loops in EJS :- check ejs file for syntax <% %>

// Instagram page with EJS :-
app.get("/insta/:username", (req, res) => {
    let { username } = req.params;

    const instaData = require("./data.json");
    let data = instaData[ username ];

    if (data) {
        res.render("insta.ejs", { data });
    } else {
        res.render("instaerror.ejs");
    }
});

// Serving static files :- check public folder
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/js")));


// includes :- check ejs files for syntax <%- %>