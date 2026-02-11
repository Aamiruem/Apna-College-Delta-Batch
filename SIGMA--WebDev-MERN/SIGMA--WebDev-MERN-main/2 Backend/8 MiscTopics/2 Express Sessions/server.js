// Express Sessions

const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};
app.use(session(sessionOptions));
app.use(flash());
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
    console.log("Server is running.");
});

// app.get("/test", (req, res) => {
//     res.send("Test successful.");
// });

// app.get("/reqcount", (req, res) => {
//     req.session.count ? req.session.count++ : req.session.count = 1;
    
//     res.send(`You send a request ${req.session.count} times.`);
// });

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (name == "anonymous") {
        req.flash("error", "User not registered!");
    } else {
        req.flash("success", "User registered successfully!");
    }
    res.redirect("/welcome");
});
app.get("/welcome", (req, res) => {
    res.render("page.ejs", {name: req.session.name});
});