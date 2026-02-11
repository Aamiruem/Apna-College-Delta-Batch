-- Practice Question 1

CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE Teacher (
id INT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
subject VARCHAR(40),
salary INT
);

INSERT INTO teacher
(id, name, subject, salary)
VALUES
(23, "Ajay", "Math", 50000),
(47, "Bharat", "English", 60000),
(18, "Chetan", "Chemistry", 45000),
(9, "Divya", "Physics", 75000);

SELECT * FROM teacher;


-- Practice Question 2

SELECT * FROM teacher
WHERE salary > 55000;

ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

SELECT * FROM teacher;

SET SQL_SAFE_UPDATES = 0;  

UPDATE teacher
SET ctc = ctc + ctc*0.25;

SELECT * FROM teacher;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";

SELECT * FROM teacher;

ALTER TABLE teacher
DROP COLUMN ctc;

SELECT * FROM teacher;


-- Practice Question 3

CREATE TABLE studentInfo (
roll_no INT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
city VARCHAR(40),
marks INT
);

INSERT INTO studentinfo
(roll_no, name, city, marks)
VALUES
(110, "Adam", "Delhi", 76),
(108, "Bob", "Mumbai", 65),
(124, "Casey", "Pune", 94),
(112, "Duke", "Pune", 80);

SELECT * FROM studentinfo;

-- Practice Question 4

SELECT * FROM studentinfo
WHERE marks > 75;

SELECT DISTINCT city FROM studentinfo; -- 1st way to solve

SELECT city FROM studentinfo
GROUP BY city; -- 2nd way to solve

SELECT city, MAX(marks) FROM studentinfo
GROUP BY city;

SELECT AVG(marks) FROM studentinfo;

ALTER TABLE studentinfo
ADD COLUMN grade VARCHAR(2);

UPDATE studentinfo
SET grade = "O"
WHERE marks >= 80;

UPDATE studentinfo
SET grade = "A"
WHERE marks BETWEEN 70 AND 81; -- 1st way to solve

UPDATE studentinfo
SET grade = "B"
WHERE marks >= 60 AND marks < 70; -- 2nd way to solve

SELECT * FROM studentinfo;