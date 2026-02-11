const express = require("express");
const app = express();

const path = require("path");

const port = 8080;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
    // res.send("This is a root home");
});

app.set("views", path.join(__dirname, ("/views")));

app.get("/Hello", (req, res) => {
    res.send("home");
});


app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instagram.ejs", { username });
    // res.send("home");

});


app.get("/ig/:username", (req, res) => {
    const flowers = ["adam", "antony", "albee", "aston"];
   
    let { username } = req.params;
    res.render("instagram.ejs", { username, flowers});
    // res.send("home");

});


app.get("/ig1/:username", (req, res) => {
    const flowers = ["adam", "antony", "albee", "aston"];
   
    let { username } = req.params;
    res.render("instagram1.ejs", { username, flowers});
    // res.send("home");

});



app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instaData.ejs", { username });
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data)
    res.render("instaData.ejs", {data});

});






app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs", {num: diceVal});

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
