const express = require('express');
const router = express.Router();
const users = require("./routes/users.js");


// Index - Users
router.get("/users", (req, res) => {
    res.send("Welcome to the User Index!");
});

// Show - Users
router.get("/users/:id", (req, res) => {
    res.send("Show Users ID Index!");
});

// post - Users
router.post("/users", (req, res) => {
    res.send("Post Users ID Index!");
});

// delete - Users
router.delete("/users/:id", (req, res) => {
    res.send("Delete Users ID Index!");
});


module.exports = router;
