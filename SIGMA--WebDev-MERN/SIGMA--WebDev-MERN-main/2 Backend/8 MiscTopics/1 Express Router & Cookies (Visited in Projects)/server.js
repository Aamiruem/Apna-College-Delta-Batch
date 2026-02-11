// Miscellaneous Topics
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server is running.");
});

// Topic 1 - Express Router
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.use("/users", users);
app.use("/posts", posts);

app.get("/", (req, res) => {
    res.send("Hii, I am root!");
});

// Topic - 2 Cookie (Web Cookies/HTTP Cookies)
const cookieParser = require("cookie-parser");
app.use(cookieParser("secretcode"));

app.get("/getcookies", (req, res) => {
    res.cookie("greet", "salam");
    res.cookie("made_in", "india");

    console.dir(req.cookies);
    res.send("We send you some cookies!");
});

app.get("/greet", (req, res) => {
    const { username = "altmash" } = req.cookies;
    res.send(`Hii ${username}`);
});

app.get("/getsignedcookies", (req, res) => {
    res.cookie("made-in", "india", { signed: true });
    res.send("Signed cookie sent!");
});
app.get("/verify", (req, res) => {
    // console.log(req.cookies); // for Normal/Unsigned Cookies
    console.log(req.signedCookies); // for Signed Cookies
    res.send("verified!");
});