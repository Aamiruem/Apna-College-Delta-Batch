CREATE DATABASES delta_app;
-- mysql> CREATE DATABASE delta_app;
SHOW TABLES;

-- mysql> USE delta_app;
-- Database changed
-- mysql> SOURCE schema.sql;
USE delta_app;
DROP TABLE user;
CREATE TABLE user(
    id INT PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

-- CREATE TABLE posts(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     user_id INT NOT NULL,
--     title VARCHAR(100) NOT NULL,
--     body TEXT NOT NULL,
