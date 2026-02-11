const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Aamir@786',
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting:', err);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

connection.query('SHOW DATABASES;', (err, results) => {
    if (err) {
        console.error('error running query:', err);
        return;
    }
    console.log(results);
});

connection.end();
