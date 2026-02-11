const express = require("express");
const router = express.Router();

// For users route
router.get("/", (req, res) => {
    res.send("GET for users");
});
router.get("/:id", (req, res) => {
    res.send("GET for user id");
});
router.post("/", (req, res) => {
    res.send("POST for users");
});
router.delete("/:id", (req, res) => {
    res.send("DELETE for user id");
});

module.exports = router;