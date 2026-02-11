// const express = require("express");
// const app = express();
// const users = require("./routes/users.js");
// const posts = require("./routes/post.js");


// const usersRoutes = require('./routes/users');
// const postsRoutes = require('./routes/posts')
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// console.log(__dirname);
// const users = usersRoutes;
// const posts = postsRoutes;
// console.log('Current directory:', __dirname);


// app.get("/getcookies", (req, res) => {
//     res.send("sent you some cookies!");
// });

// app.get("/", (req, res) => {
//     res.send("HI, I am root!");
// });

// app.use("/users", users);
// app.post("/posts", posts);


// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });













const express = require("express");
const app = (express);
const users = require("./routes/user.js");
const posts = require(". /routes/post.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.use(cookieParser ("secretcode") );
app.get("/getsignedcookie", (req, res) =>{
    res.cookie("color", "red", { signed: true });
    res.cookie("made-in", "India", { signed: true });
res.send ("done!");
});

app.get ("/verify", (req, res) =>{
    res.send(req.signedCookies);
    res.send(req.cookieParser);
    res.send("Verified!");
});

app.get("/greet", (req, res) => {
    let {name = "anonymous"} = req.cookies;
    res.send("Hi, ${name}");
});
app - get("/getcookies", (req, res) => {
    res.cookie("greet", "namaste");
    res.cookie("madeIn", "India");
    res, send("sent you some cookies!");
});
app - get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi, I am root!");
});


// Importing routes
const usersRoutes = require("./routes/users"); // Ensure the file exists: ./routes/users.js
const postsRoutes = require("./routes/post");  // Ensure the file exists: ./routes/post.js

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Handlers
app.use("/users", usersRoutes); // Routes for user-related endpoints
app.use("/posts", postsRoutes); // Routes for post-related endpoints

// Root Route
app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

// Example Route for Cookies
app.get("/getcookies", (req, res) => {
    res.cookie("cookieName", "cookieValue", { maxAge: 900000, httpOnly: true }); // Set a cookie with a max age of 15 minutes
    res.cookie("greet", "Assalamu Alaikum", { maxAge: 900000, httpOnly: true });
    res.cookie("madeIn", "India");
    res.send("Sent you some cookies!");
});



// Start the Server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
