const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({ extended: true }));
// console.dir();
// app.use(express.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamirazad@786'
});

// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');
// });


// CREATE TABLE user(
//     id INT PRIMARY KEY,
//     username VARCHAR(100) UNIQUE,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password VARCHAR(100) NOT NULL
// );


let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ];
}

// // let q = "SHOW TABLES";
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for (let i = 0; i < 100; i++) {
//     data.push(getRandomUser());
//     // console.log(getRandomUser());
// }



// let users = [
//     ["182", "234_newuser", "abcd@gmail.com", "abc"],
//     ["234", "345_newuser", "def@gmail.com", "def"],
//     ["345", "456_newuser", "ghi@gmail.com", "ghi"],
//     ["456", "567_newuser", "jkl@gmail.com", "jkl"],
//     ["567", "678_newuser", "mno@gmail.com", "mno"],
//     ["678", "789_newuser", "pqr@gmail.com", "pqr"],
//     ["786", "890_newuser", "stu@gmail.com", "stu"],
// ];


// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         // console.log(result.length);
//         // console.log(result[0]);
//     })
// } catch (err) {
//     console.log(err);
// }
// connection.end();


// let getRandomUser = () => {
//     return {
//         userId: faker.string.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         password: faker.internet.password()
//     };
// }
// console.log(getRandomUser());






// app.get("/", (req, res) => {
//     res.send("Hello i am root path welcome to home page");
//     console.log("Request received")
// });

//Home Rout
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
    connection.query(q,(err, result) => {
        if (err) throw err;
        console.log(result[0]["count(*)"]);
        res.send(`Total number of user: ${result[0]["count(*)"]}`);
        // res.send(`Total number of users: ${result[0].count}`);
        // console.log(result.length);
        // console.log(result[0]);
        res.render("home.ejs")
    })
} catch (err) {
        console.log(err);
        res.render("some error in database connection");
}
});

//show route
app.get("/user", (req, res) => {
    // res.send("Success");
    let q = `SELECT * FROM user`;
    try {
        connection.query(q,(err, users) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("showusers.ejs", {users})
        })
    } catch (err) {
            console.log(err);
            res.render("some error in database connection");
    }
});

//Edit route
app.get("/user/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM user WHERE id = '${id}'`;


    try {
        connection.query(q,(err, result) => {
            if (err) throw err;
            // console.log(result);
            // res.send(result);
            let user = result[0];
            res.render("edit.ejs",{ user });
        })
    } catch (err) {
            console.log(err);
            res.render("some error in database connection");
    }
});

//Update db route

app.patch("/user/:id", (req, res) => {
    let {id} = req.params;
    let { username, email, password } = req.body;
    let { password: formPass, username: newUsername } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    // let q = `UPDATE user SET username='${username}', email='${email}', password='${password}' WHERE id='${id}'`;

    try {
        connection.query(q,(err, result) => {
            if (err) throw err;
            let user = result[0];
            if (formPass != user.password) {
                res.send("WRONG Password entered!");

                return res.status(404).send("User not found");
            }
            else {
                let q = `UPDATE user SET username='${newUsername}', email='${email}', password='${password}' WHERE id='${id}'`;
            }
            console.log(result);
            res.send(`User with id ${id} has been updated successfully`);
        })
    } catch (err) {
            console.log(err);
            res.render("some error in database connection");
    }
});

let port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
