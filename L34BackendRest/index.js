const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
const { v4: uuidv4 } = require('uuid');

const methodOverride = require("method-override");


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username: "apna college",
        content: "I love coding"
    },

    {
        id: uuidv4(),
        username: "kamran",
        content: "Hard work is important to achieve a success! "
    },

    {
        id: uuidv4(),
        username: "Aamir",
        content: "I love Data science"
    },

    {
        id: uuidv4(),
        username: "Adam khan",
        content: "I got selected for first my internship "
    },

    {
        id: uuidv4(),
        username: "apna college",
        content: "I love coding"
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
    // res.send("server working well!");
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    // res.send("post request working");

    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});


app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({id, username, content });
    res.redirect("/posts");
});



app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
let post = posts.find((p) => id === p.id);

    res.render("show.ejs", { post });
    
});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    console.log(newContent)
    console.log(id)
    res.send("patch request is working ")
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    // res.redirect(`/posts/${id}`);
    res.redirect("/posts");

    res.render("show.ejs", { post });
    
});


app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");

    // res.render("show.ejs", { post });

    res.send("post deleted successfully");
    
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
