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


app.get("/:username", (req, res) => {
    // console.log("Params: ", req.params);
    // res.send("Hello i am root path");
    // console.log("Request received")
});


app.get("/:username/:id", (req, res) => {
    // let { username, id } = req.params;
    // res.send(`welcome to the page of @username: ${username} and id: ${id}`);
    // console.log("Params: ", req.params);
    // res.send("Hello i am root path");
    let htmlStr = `<h1>welcome to the page of @username: ${username} and id: ${id}</h1>`
    res.send(htmlStr);
    console.log("Request received")
});



app.get("/search", (req, res) => {
    // console.log("Search request received", req.query);
    let { q } = req.query;

    if (!q) {
        res.send("nothing search to find the result");
    }
    res.send(`<h1>search result for query: ${q}</h1>`);
});
