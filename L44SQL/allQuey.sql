CREATE DATABASE college;
create database xyz_company;

DROP DATABASE xyz_company;

USE college;

CREATE TABLE student(
rollno INT,
NAME varchar(30),
age INT
);


INSERT INTO student VALUES
(101, "ADAM", 22),
(102, "BOB", 21);


SELECT * FROM student;



CREATE DATABASE IF NOT EXISTS student;
CREATE DATABASE IF NOT EXISTS college;

DROP DATABASE IF EXISTS college;

SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;
SHOW TABLES;


DROP TABLE IF EXISTS user;


CREATE TABLE user(
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT CHECK (age>=13),
PRIMARY KEY (id)
);


CREATE TABLE post(
id INT PRIMARY KEY,
content VARCHAR(100),
user_id INT,
FOREIGN KEY (user_id) REFERENCES user(id)
);





INSERT INTO user
(id, age, name, email, followers, following)
VALUES
	(1, 22,	"adam", "adam123@gmail.com", 455,	12),
	(2, 21,	"kamran",	"kamran223@gmail.com",	12345,	34),
	(3, 19,	"rahul", "rahul123@gmail.com",	566,	56),
	(4, 22,	"vikash",  "vikash123@gmail.com",	122,	896);
    
    SELECT * FROM user;
	SELECT id, name, email FROM user;
	SELECT id, name, age FROM user;
	SELECT name, email FROM user;
    
    SELECT id, name, email FROM user;
    
    SELECT DISTINCT age FROM user;
