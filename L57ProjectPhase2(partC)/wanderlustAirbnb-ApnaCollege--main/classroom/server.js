const express = require("express");
const app = (express);
const users = require("../routes/user.js");
const posts = require("../routes/post.js");
const session = require("express-session");
const passport = require("passport");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const User = require("./models/user.js");
const Review = require("./models/review.js");
const Listing = require("./models/listing.js");
const { urlencoded } = require("express-urlencoded");
const { urlencodedParser } = require("body-parser");
const { urlencoded } = require("body-parser");

mongoose.connect("mongodb://localhost/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));
const sessionConfig = {
    name: "session",
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 *
            7,
        },
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/register", (req, res) => {
    res.render("page.ejs");
    let { name = "anonymous", age = 0 } = req.query;
    req.session.name = name;
    res.send(name + age);
    console.log(name, age);
})

app.use(session({
    secret: "mysupersecretstring", 
    resave: false,
    saveUninitialized: true,
}));

app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`Request count: ${req.session.count}`);
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});
