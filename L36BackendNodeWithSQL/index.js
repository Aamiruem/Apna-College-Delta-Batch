
// const { faker } = require("@faker-js/faker");

// let createRandomUser = ()=> {
//     return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//     };
// }
// console.log(createRandomUser())






// const { faker } = require("@faker-js/faker");
// const mysql = require('mysql2');
// const express = require('express');
// const app = express();

// const path = require('path');

// app.set("view engine ", "ejs");
// app.use("views", path.join(__dirname, "/views"));
// app.use(express.static("public"));

// // create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'delta_app',
//     password: 'Aamir@786'
// });


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let getRandomUser = () => {
//     return [
//         faker.string.uuid(),
//         faker.internet.userName(),
//         faker.internet.email(),
//         faker.internet.password(),
//     ];
// };



// app.get("/", (req, res) => {
//     let q = `SELECT count(*) From user`;
// });

// try {
//     connection.query(q, (err, result) => {
//     if (err) throw err;
//         console.log(result);
//         res.send(result);
//         // console.log(result[0]);
//         // console.log(result[0].id);
// });
// } catch (err) {
//     console.log(err);
//     res.send("some err in database");
// }
// connection.end();







// let data = [];

// for (let i = 1; i < 100; i++) {
//     data.push(getRandomUser());
    // console.log(getRandomUser());
// }




// let user = [
// ["123", "234_newuser", "abc@gmail.come", "abc"],
// ["1453", "267_newuser", "afdf@gmail.come", "abcd"],
// ];






// app.get('/', (req, res) => {
//     res.send('Hello from Delta App Server! welcome to home page');
// });
// app.listen("8080", () => {
//     console.log("Server is running on port 8080");  // server is running on port 8080
// });






// let getRandomUser = ()=> {
//     return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//     ];
// }
// console.log(getRandomUser());










//chatgpt part


// const { faker } = require("@faker-js/faker");
// const mysql = require('mysql2');
// const express = require('express');
// const path = require('path');

// const app = express();

// // Set view engine and views directory
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "/views"));
// app.use(express.static("public"));

// // Create the connection to the database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'delta_app',
//     password: 'Aamir@786'
// });

// // Route for fetching count of users
// //home page
// app.get("/", (req, res) => {
//     const query = `SELECT count(*) AS userCount FROM user`;

//     connection.query(query, (err, result) => {
//         if (err) {
//             console.log(err);
//             let count = result[0]["count(*)"]
//             return res.status(500).send("Some error occurred in the database.");
//         }
//         console.log(result);
//         res.send(`Total Users: ${result[0].userCount}`);
//         res.render("home.ejs", {count})
//     });
// });

// // Route for greeting
// app.get('/greet', (req, res) => {
//     res.send('Hello from Delta App Server! Welcome to the home page.');
// });

// // show Route
// app.get('/users', (req, res) => {
//     let query = `SELECT * FROM user`;

//     connection.query(query, (err, users) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Some error occurred in the database.");
//         }
//         console.log(result);
//         res.render("showusers.ejs", { users});
//     });
// });

// //Edit Route

// app.get('/users/:id/edit', (req, res) => {
//     let userId = req.params.id;
//     let query = `SELECT * FROM user WHERE id = ${userId}`;

//     connection.query(query, (err, user) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Some error occurred in the database.");
//         }
//         console.log(user);
//         res.render("edituser.ejs", { user });
//     });
// });

// // Start server on port 8080
// app.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });









const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require('express');
const path = require('path');

const app = express();
const methodOverride = require("methodoverride");

app.use(methodOverride("_method"));
// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static("public"));

// Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamir@786'
});

// Route for fetching count of users (Home page)
app.get("/", (req, res) => {
    const query = `SELECT count(*) AS userCount FROM user`;

    connection.query(query, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error occurred in the database.");
        }

        let count = result[0].userCount;
        console.log(`Total Users: ${count}`);
        res.render("home.ejs", { count });
    });
});

// Greeting Route
app.get('/greet', (req, res) => {
    res.send('Hello from Delta App Server! Welcome to the home page.');
});

// Show Users Route
app.get('/users', (req, res) => {
    let query = `SELECT * FROM user`;

    connection.query(query, (err, users) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error occurred in the database.");
        }

        console.log(users);
        res.render("showusers.ejs", { users });
    });
});

// Edit User Route
app.get('/users/:id/edit', (req, res) => {
    let userId = req.params.id;
    let query = `SELECT * FROM user WHERE id = ?`;

    connection.query(query, [userId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error occurred in the database.");
        }

        let user = result[0];
        console.log(user);
        res.render("edituser.ejs", { user });
    });
});


//Update (DB) Route

app.patch('/user/:id', (req, res) => {
    let userId = req.params.id;
    let updatedUser = req.body;

    let query = `UPDATE user SET? WHERE id =?`;

    connection.query(query, [updatedUser, userId], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error occurred in the database.");
        }

        console.log(`User with id ${userId} updated successfully.`);
        res.send("User updated successfully.");
    });
});

// Start server on port 8080
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
