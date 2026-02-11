const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello i am root path");
});

app.get("/", (req, res) => {
    res.send("you contacted about path");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`welcome to the page of @username: ${username} and id: ${id}`);
    res.send(`Hello ${req.params.username}`);
    console.log(req.params)
    res.send("you contacted about path");
});



app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome the page of @${username}</h1>`

    res.send(htmlStr);
});
