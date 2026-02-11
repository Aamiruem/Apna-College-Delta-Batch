// const { faker } = require("@faker-js/faker");

// const mysql = require('mysql2');

// // create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'delta_app',
//     password: 'Aamir@786'
// });

// //inserting New Data

// let q = "INSERT INTO user (id, useRname, email, password) VALUES (?, ?, ?, ?)";
// let user = ["123", "234_newuser", "abc@gmail.come", "abc"];
// try {
//     connection.query(q, (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });
// } catch (err) {
//     console.log(err);
// }
// connection.end();
// // create the connection to database

// let getRandomUser = ()=> {
//     return {
//     id: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     };
// }






const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'yourdatabase'
});

// Connect to the database
connection.connect(err => {
    if (err) throw err;
    console.log('Connected to the database.');
});

// Insert data
const sql = 'INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)';
const values = ['101', 'OliviaBarrett', 'olivia@example.com', 'password123'];

connection.query(sql, values, (err, results) => {
    if (err) throw err;
    console.log('Record inserted:', results);
});

// Close the connection
connection.end();

let getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}
