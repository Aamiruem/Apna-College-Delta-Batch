-- First class


CREATE DATABASE college;
create database xyz_college;

DROP DATABASE xyz_college;

USE college;

CREATE TABLE student (
rollno INT,
name VARCHAR(30),
age INT
);

INSERT INTO student
VALUES
(1, "John", 35),
(2, "Starc", 31),
(3, "Russell", 34);

SELECT * FROM student;


CREATE DATABASE IF NOT EXISTS instagram;

create database insta;
DROP DATABASE IF EXISTS insta;

USE instagram;

CREATE TABLE userinfo (
id INT,
name VARCHAR(30) NOT NULL,
age INT,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK (age >= 18),
PRIMARY KEY (id)
);

CREATE TABLE userpost (
id INT PRIMARY KEY,
content VARCHAR(100) NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES userinfo(id)
);

INSERT INTO userinfo
(id, name, age, email, followers, following)
VALUES
(1, "John", 35, "john123@gmail.com", 123, 32),
(2, "Starc", 32, "starc123@gmail.com", 213, 64),
(3, "Russell", 30, "russell123@gmail.com", 312, 48),
(4, "Marsh", 28, "marsh123@gmail.com", 231, 72);

SELECT * FROM userinfo;

INSERT INTO userinfo (id, name, age, email, followers, following)
VALUES (5, "Stayn", 35, "stayn123@gmail.com", 321, 96);

SELECT DISTINCT age FROM userinfo;

-- HomeWork problem is for me that insert data into 'userpost' table.
INSERT INTO userpost
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(102, "Hello SIGMA", 1),
(103, "Bye Bye", 3);

SELECT * FROM userpost;