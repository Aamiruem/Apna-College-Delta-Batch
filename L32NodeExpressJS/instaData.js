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





// app.get("/ig/:username", (req, res) => {
//     let { username } = req.params;
//     const instaData = require("./data.json");
//     res.render("instagram.ejs", {data: instaData[username] });

// });




app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instaData.ejs", { username });
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data)
    if (data) {
        res.render("instaData.ejs", { data });
    } else {
        res.render("user not found");
    }

});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
