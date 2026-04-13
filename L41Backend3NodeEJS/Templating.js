const express = require("express");
const app = express();

app.get("/", (req, res) => {
    let name = "Aamir";
    let html = `<h1>Hello ${name}</h1>`;
    res.send(html);
});
