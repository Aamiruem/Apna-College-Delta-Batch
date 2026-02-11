const  log = require("console");
const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        res.send("401, Access Granted!");
        next();
    } 
        throw new ExpressError("Access Denied!");
};


// app.get("/wrong", (req, res) => {
//     res.status(404).send("Not Found");
// });

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

app.get("/random", (req, res) => {
    res.send("This is a random page.");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
});




app.use((err, req, res, next) => {
    let {status, message} = err;
    res.status(status).end(message);
});


// app.use((err, req, res, next) => {
//     console.log("-----ERROR -----");
    // res.status(500).send("Internal Server Error");
//     next();
// });

// app.use((err, req, res, next) => {
//     res.status(404).send("Page Not Found");
//     console.log("-----ERROR -----");
//     next(err);
// });


// app.use((err, req, res, next) => {
//     console.log("-----ERROR -----");
//     res.send(err);
// });

// app.use((err, req, res, next) => {
//     console.log("-----ERROR2 Middleware -----");
//     next(err);
// });



app.get("/random", (req, res) => {
    res.send("This is the about page.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080...");
    // console.log("You can access it at http://localhost:8080/");
});
