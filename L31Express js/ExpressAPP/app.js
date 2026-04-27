const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// read 
app.get("/", (req, res) => {
    res.send("Hello World");
    console.log("Request received")
})


// create
app.post("/", (req, res) => {
    res.send("data created successfully");
    console.log("Request Received");
})

// update
app.put("/", (req, res) => {
    res.send("data updated successfully");
    console.log("Request Received");
})

// delete
app.delete("/", (req, res) => {
    res.send("data deleted successfully");
    console.log("Request Received");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
