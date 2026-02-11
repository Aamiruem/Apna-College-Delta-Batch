// const express = require("express");
// const app = (express);
// const users = require("./routes/user.js");
// const posts = require(". /routes/post.js");
// const session = require("express-session");

// app.use(session({
//     secret: "mysupersecretstring", 
//     resave: false,
//     saveUninitialized: true,
// }));

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`Request count: ${req.session.count} times`);
// });

// app.listen(3000, () =>{
//     console.log("Server is running on port 3000");
// });








// const express = require("express");
// const app = express(); // Removed unnecessary parentheses
// const users = require("../routes/user.js");
// const posts = require("../routes/post.js");
// const session = require("express-session");

// app.use(
//     session({
//         secret: "mysupersecretstring",
//         resave: false,
//         saveUninitialized: true,
//     })
// );

// // Route for request count
// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else {
//         req.session.count = 1;
//     }
//     res.send(`Request count: ${req.session.count} times`);
// });

// // Assuming users and posts are route handlers, mount them to the app
// app.use("/users", users);
// app.use("/posts", posts);

// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });





const express = require("express");
const app = express();
const users = require("../routes/user.js"); // Ensure this path is correct
const posts = require("./routes/post.js"); // Ensure this file exists
const session = require("express-session");


app.get("/", (req, res) => {
    let { name = "anonymous", age = 0 } = req.query;
    req.session.name = name;
    res.send(name + age);
    console.log(name, age);
})

app.use(
    session({
        secret: "mysupersecretstring",
        resave: false,
        saveUninitialized: true,
    })
);

app.get("/reqcount", (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`Request count: ${req.session.count} times`);
});

// Use routes
app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
