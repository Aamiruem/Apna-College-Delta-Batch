const express = require("express");
const app = express();

let port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted root path");
});

app.get("/about", (req, res) => {
    res.send("you contacted about path");
});

app.get("/contact", (req, res) => {
    res.send("you contacted contact path");
});

app.get("/:id", (req, res) => {
    res.send(`you contacted path with id: ${req.params.id}`);
});

app.get("/user/:name", (req, res) => {
    res.send(`you contacted user path with name: ${req.params.name}`);
});


app.get("*", (req, res) => {
    res.send("this path does not exist");
});

app.get("/", (req, res) => {
    res.send("you sent a post request to root");
});
