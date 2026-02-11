const express = require("express");
const app = express();
console.dir();
let port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("Hello i am root path");
    console.log("Request received")
});


app.get("/apple", (req, res) => {
    res.send("Hello i am root path using apple ");
    console.log("Request received")
});

app.get("/orange", (req, res) => {
    res.send("Hello i am root path using orange ");
    console.log("Request received")
});

app.get("*", (req, res) => {
    res.send(" Hello i am root path this path does not exist ");
    console.log("Request received")
});



app.post("/", (req, res) => {
    res.send(" Hello i am root path this path does not exist ");
    console.log("Request received")
});
