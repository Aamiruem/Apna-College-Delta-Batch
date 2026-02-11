// Creating RESTful API (Quora post)
const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded( {extended: true} ));

app.listen(port, () => {
    console.log(`Listening on ${port} port`);
});

// Universally unique identifier (UUID) package :-
const { v4: uuidv4 } = require("uuid");
// Array for all posts 
let posts = [
    {
        id: uuidv4(),
        username: "altamash",
        content: "I am learning web development."
    },
    {
        id: uuidv4(),
        username: "apnacollege",
        content: "Launching a new web development course."
    },
    {
        id: uuidv4(),
        username: "shradhakhapra",
        content: "I will teach you web development."
    }
];

// (1) Index route
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// (2) Create route
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push( {id, username, content} );
    
    res.redirect("/posts"); // to redirect on the given route
});

// (3) View route
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find( (p) => (id === p.id) );
    
    res.render("show.ejs", { post } );
});

// Mthod OverRide package sendS the GET/POST request as a given (PUT, PATCH & DELETE) request
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// (4) Update route
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find( (p) => (id === p.id) );

    let newContent = req.body.content;
    post.content = newContent;

    res.redirect("/posts");
});
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find( (p) => (id === p.id) );
    
    res.render("edit.ejs", { post });
});

// (5) Destroy route
app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter( (p) => (id != p.id) );

    res.redirect("/posts");
});