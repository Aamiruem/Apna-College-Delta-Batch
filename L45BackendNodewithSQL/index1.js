const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamirazad@786'
});

// ================= HOME ROUTE =================
app.get("/", (req, res) => {
    let q = `SELECT count(*) AS count FROM user`;

    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database error");
        }

        let count = result[0].count;
        res.send(`Total number of users: ${count}`);
    });
});

// ================= SHOW USERS =================
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;

    connection.query(q, (err, users) => {
        if (err) {
            console.log(err);
            return res.send("Database error");
        }

        res.render("showusers.ejs", { users });
    });
});

// ================= EDIT USER =================
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;

    let q = `SELECT * FROM user WHERE id = ?`;

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database error");
        }

        let user = result[0];
        res.render("edit.ejs", { user });
    });
});

// ================= UPDATE USER =================
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let { username, email, password } = req.body;

    let findQuery = `SELECT * FROM user WHERE id = ?`;

    connection.query(findQuery, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Database error");
        }

        let user = result[0];

        if (!user) {
            return res.status(404).send("User not found");
        }

        // password check
        if (password !== user.password) {
            return res.send("Wrong password!");
        }

        let updateQuery = `
            UPDATE user 
            SET username = ?, email = ?, password = ? 
            WHERE id = ?
        `;

        connection.query(
            updateQuery,
            [username, email, password, id],
            (err, result) => {
                if (err) {
                    console.log(err);
                    return res.send("Update failed");
                }

                res.send(`User ${id} updated successfully`);
            }
        );
    });
});

// ================= SERVER =================
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
