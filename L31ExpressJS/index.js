// const express = require("express");
// const app = express();
// console.dir(app);


// const express = require("express");
// const app = express();
// console.dir();
// let port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// })



const express = require("express");
const app = express();

let port = 8080;

// Start server
app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

// Routes
app.get("/", (req, res) => {
    res.send("You contacted root path");
});

app.get("/apple", (req, res) => {
    res.send("You contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("You contacted orange path");
});

// Middleware (optional)
app.use((req, res) => {
    console.log("Request received");
});
