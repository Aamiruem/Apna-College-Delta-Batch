const express = require("express");
const app = express();

// Middlewares
// app.use( () => {
//     console.log("Our 1st Middleware."); // only load & print this in the console
// } );
// app.use( (req, res) => {
//     res.send("Hey, I am 2nd Middleware."); // shows this on every path
// } );
// app.use( (req, res, next) => {
//     console.log("This is our 3rd Middleware."); // print this in the console
//     next();  // and it calls the next middleware or path routes
// });
// app.use( (req, res, next) => {
//     console.log("This is our 4th Middleware.");
//     return next();
//     console.log("This is after 4th Middleware."); // this line will be print without `return next()`
// });

/* Creating Utility Middleware - Logger */
// app.use( (req, res, next) => {
//     // console.log(req);
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// app.use("/random", (req, res, next) => {
//     console.log("I am a middleware only for given path.");
//     next();
// });

/* Activity :- Token as Query String -> Let's create a middleware for an api that checks
if the access token was passed in the query string or not.  */
// First way :-
// app.use("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "access_token") {
//         next();
//     }
//     res.send("ACCESS DENIED");
// });
// app.get("/api", (req, res) => {
//     res.send("Data is displaying.");
// });

// Second way :-
const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "access_token") {
        next();
    }
    throw new Error("ACCESS DENIED"); // It is a custom error by me
}
app.get("/api", checkToken, (req, res) => {
    res.send("Data is displaying.");
});

/* Express Default Error Handler */
app.get("/wrong", (req, res) => {
    abc = abc; // Express shows an error on the path with the help of default error handler
});

app.get("/", (req, res) => {
    res.send("Hey, I am root.");
});
app.get("/random", (req, res) => {
    res.send("This is a random page.");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// If any path or middleware does not match then it will call
app.use( (req, res) => {
    res.status(404).send("PAGE NOT FOUND");
    console.log("Middleware only for 'NOT FOUND'.");
});