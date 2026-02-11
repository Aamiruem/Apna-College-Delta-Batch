// const { faker } = require('@faker-js/faker');
// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'delta_app',
//     password: 'Aamir@786'
// });

// // Establish connection
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');

//     // Query to show tables
//     connection.query("SHOW TABLES", (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err);
//             connection.end();
//             return;
//         }
//         console.log(result);

//         // Close the connection after query execution
//         connection.end();
//     });
// });

// // Function to generate a random user
// let getRandomUser = () => {
//     try {
//         return {
//             userId: faker.string.uuid(),
//             username: faker.internet.userName(),
//             email: faker.internet.email(),
//             avatar: faker.image.avatar(),
//             password: faker.internet.password()
//         };
//     } catch (err) {
//         console.error('Error generating random user:', err);
//         return null;
//     }
// };

// // Generate and log a random user
// console.log(getRandomUser());











const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamirazad@786'  // Use the correct password here
});

// Establish connection
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    // Query to show tables
    connection.query("SHOW TABLES", (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            connection.end();
            return;
        }
        console.log(result);

        // Close the connection after query execution
        connection.end();
    });
});

// Function to generate a random user
let getRandomUser = () => {
    try {
        return {
            userId: faker.string.uuid(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            password: faker.internet.password()
        };
    } catch (err) {
        console.error('Error generating random user:', err);
        return null;
    }
};

// Generate and log a random user
console.log(getRandomUser());
