// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 8080;

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "./views"));

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.render("home.ejs");
// })
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })





const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home Route
app.get("/", (req, res) => {
    res.render("home");
});

// Instagram Route
app.get("/ig/:username", (req, res) => {
    const { username } = req.params;

    const instaData = require("./data.json");
    const data = instaData[username];

    if (data) {
        res.render("instagram", { data });
    } else {
        res.render("error");
    }
});

// Hello Route
app.get("/hello", (req, res) => {
    res.send("Hello World 🚀");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
