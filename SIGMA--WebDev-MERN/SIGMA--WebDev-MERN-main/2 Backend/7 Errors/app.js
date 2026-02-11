// :------------------------ Errors ------------------------:

const express = require("express");
const app = express();
const MyExpressError = require("./MyExpressError");

// Activity of previous class/lecture - using in this lecture with error
app.use("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "access_token") {
        next();
    }
    throw new MyExpressError(401, "ACCESS DENIED");
});
app.get("/api", (req, res) => {
    res.send("Data is displaying.");
});

app.get("/", (req, res) => {
    res.send("Hey, I am root.");
});
app.get("/random", (req, res) => {
    res.send("This is a random page.");
});

// Example of 'Express Default Error Handler'
app.get("/err", (req, res) => {
    abc = abc; // It'll show an err with the help of 'EXpress default err handler'
});

/* Activity :- Create an admin route & send an error with a 403 status code */
app.get("/admin", (req, res) => {
    throw new MyExpressError(403, "Access to admin is Forbidden");
});

/* Custom Error Handling Middlewares */
app.use( (err, req, res, next) => {
    console.log("---------- ERROR ----------");
    // next(err);

    /* Default status and message ---> */
    let { status = 500, message = "Some error occurred!" } = err;
    res.status(status).send(message);
});
// app.use( (err, req, res, next) => {
//     console.log("---------- ERROR2 Middleware ----------");
//     next(err);
// });

// If any path does not match with any path
app.use( (req, res) => {
    res.status(404).send("Page Not Found!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});