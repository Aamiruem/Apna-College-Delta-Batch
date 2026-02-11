// MySQL Part 3 (Backend 5)

// Faker package to generate fake random data 
const { faker } = require("@faker-js/faker");

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};
// console.log( getRandomUser() );

// MySQL2 package to connect Node with MySQL
const mysql = require("mysql2");

const connection = mysql.createConnection({ // creating connection with mysql
    host: "localhost",
    user: "root",
    password: "mysql@123",
    database: "backend_part5"
});
// // Data insertion using placeholders
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let users = [ ["id2", "user2", "user2@gmail.com", "pass1232"],
//             ["id3", "user3", "user3@gmail.com", "pass1233"] ];

// Data insertion in bulk using faker
// let data = [];
// for (let i=1; i<=100; i++) {
//     data.push( getRandomUser() ); // 100 fake users
// }
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// try {
//     connection.query(q, [data], (error, result) => { // to run the queries
//         if(error) throw error;
//         console.log(result); // show result of query
//     });
// } catch(err) {
//     console.log(err);
// }
// connection.end(); // to close the connection


// Routing - Creating our routes (REST)

// Setting up Express App
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on ${port} port...`);
});

// Using ejs for rendering the pages
app.set("view engine", "ejs");
const path = require("path");
app.set("views", path.join(__dirname, "/views"));

// To fetch/show total number of users on our app
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM user";
    try {
        connection.query(q, (error, result) => {
            if(error) throw error;
            let count = result[0]["COUNT(*)"];
            console.log(count);
            res.render("home.ejs", { count });
        });
    } catch(err) {
        console.log(err);
        res.send("<h2>Some error in database.</h2>");
    }
});

// To fetch/show "id", "username" & "email" of all users
app.get("/user", (req, res) => {
    let q = "SELECT * FROM user";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let users = result;
            // console.log(users);
            res.render("users.ejs", { users });
        });
    } catch(err) {
        console.log(err);
        res.send("<h2>Some error in database</h2>");
    }
});

// To get form to edit the username based on id, This form will require a password.
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            console.log(user);
            res.render("edit.ejs", { user });
        });
    } catch(e) {
        console.log(e);
        res.send("<h2>Some error in database</h2>");
    }
});

// To edit username, if correct password has entered in form

const methodOverride = require("method-override"); // to change the method request
const { connect } = require("http2");
// const { connect } = require("http2");
app.use(methodOverride("_method"));

app.use(express.urlencoded( {extended: true})); // to parse the url data

app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username: newUsername, password: formPass } = req.body;
    let q = `SELECT * FROM user WHERE id = "${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                let wrongPassAlert = `<html><body><script>
                alert("Incorrect Password! Please enter a correct password.");
                </script></body></html>`;

                res.send(wrongPassAlert);
            } else {
                let q2 = `UPDATE user SET username="${newUsername}" WHERE id="${id}"`;
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    console.log("Username changed.");
                    res.redirect("/user");
                });
            }
        });
    } catch(e) {
        console.log(e);
        res.send("<h2>Some error in database.</h2>");
    }
});

// :---------------> HOMEWORK TASKS <---------------:

// Create form to 'Add a new user' to the database

const { v4: uuidv4 } = require("uuid"); // to generate a random id automatically for user
app.get("/user/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/user", (req, res) => {
    let {username, email, password} = req.body;
    let id = uuidv4(); // generating random id automatically using this pkg
    let q = `INSERT INTO user (id, username, email, password) VALUES ("${id}", "${username}", "${email}", "${password}")`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log("New user added.");
            res.redirect("/user");
        });
    } catch(e) {
        console.log(e);
        res.send("<h2>Some error in database.</h2>");
    }
});

// Create form to 'Delete a user' from database, if they enter correct email id & password
app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            res.render("delete.ejs", { user });
        });
    } catch(e) {
        console.log(e);
        res.send("<h2>Some error in database</h2>");
    }
});
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let dFormPass = req.body.password;
    let q = `SELECT * FROM user WHERE id="${id}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];

            if (dFormPass != user.password) {
                let wrongPassAlert = `<html><body><script>
                alert("Incorrect Password! Please enter a correct password.");
                </script></body></html>`;

                res.send(wrongPassAlert);
            } else {
                let q2 = `DELETE FROM user WHERE id="${id}"`;
                connection.query(q2, (err, result) => {
                    console.log("User deleted.");
                    res.redirect("/user");
                });
            }
        });
    } catch(e) {
        console.log(e);
        res.send("<h2>Some error in database.</h2>");
    }
});


// Find a a user in the database list based on username : 
//   This work comes in my mind and i tried to solve it on my behalf

app.get("/user/search", (req, res) => {
    let username = req.query.u;
    let q = `SELECT * FROM USER WHERE username="${username}"`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (user) {
                console.log("Searched user :", user);
            res.render("find.ejs", { user });
            } else {
                console.log(`'${username}' is not found.`);
                res.send("<h2>User not found.</h2>");
            }
        });
    } catch(e) {
        console.log(e);
        res.send("<h2>Some error in database.</h2>");
    }
});