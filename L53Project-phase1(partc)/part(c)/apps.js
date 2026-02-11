const  log = require("console");
const express = require("express");
const app = express();


// app.use((req, res, next) => {
//     let query = req.query;
//     console.log(query);
//     let querystring = Object.keys(query).map(key => `${key}=${query[key]}`).map(key => `${key}`).join("&");
//     console.log("Hello, I am 1st Middleware!");
//     res.send("Hello, I am  finished middleware!");
//     return next();
//     console.log("something like check ");
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd Middleware!");
//     next();
// });

//logger
// app.use((req, res, next) => {
//     req.time = Date (Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time, req.query);
//     next();
// });

//404
// app.use((req, res) => {
//     res.status(404).send("Not Found");
//     res.send("page Not Found!");
// });
// app.use((req, res, next) => {
//     console.log("I am only for random");
//     next();
// });
// app.get("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         res.send("Access Granted!");
//     } else {
//         res.status(401).send("Access Denied!");
//     }
// });



// const checkToken = (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         res.send("Access Granted!");
//     } else {
//         res.status(401).send("Access Denied!");
//     }
// };



const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        res.send("Access Granted!");
        next();
    } else {
        throw new Error("Access Denied!");
    }
};


app.get("/wrong", (req, res) => {
    res.status(404).send("Not Found");
})

app.get("/api", (checkToken, req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

app.get("/random", (req, res) => {
    res.send("This is the about page.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080...");
    // console.log("You can access it at http://localhost:8080/");
});
