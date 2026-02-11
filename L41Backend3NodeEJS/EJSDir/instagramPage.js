const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", { data });
    res.render("error.ejs");
    // res.render("instagram.ejs", {data: instaData[username]});
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
