const express = require("express");
const app = express();
console.dir();
let port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.get("/", (req, res) => {
    res.send("Hello i am root path");
    console.log("Request received")
});

app.get("/search", (req, res) => {
    // console.log("Search request received",  req.query);
    let { q } = req.query;
    if (!q) {
        res.send("nothing search to find the result");
    }
    res.send(`<h1>search result for query: ${q}</h1>`);
});
