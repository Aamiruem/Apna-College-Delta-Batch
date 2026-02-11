const express = require("express");
const app = express();
const router = expressRouter();

app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

app.use("/users", users);

// Index - Users
app.get("/", (req, res) => {
    res.send("Welcome to the User Index!");
});

// Show - Users
app.get("/:id", (req, res) => {
    res.send("Show Users ID Index!");
});

// post - Users
app.post("/", (req, res) => {
    res.send("Post Users ID Index!");
});

// delete - Users
app.delete("/:id", (req, res) => {
    res.send("Delete Users ID Index!");
});

module.exports = router;
