CREATE DATABASE college;

create database xyz_company;

DROP DATABASE xyz_company;

USE college;

CREATE TABLE
    student (rollno INT, NAME varchar(30), age INT);

INSERT INTO
    student
VALUES
    (101, "ADAM", 22),
    (102, "BOB", 21);

SELECT
    *
FROM
    student;

CREATE DATABASE IF NOT EXISTS student;

CREATE DATABASE IF NOT EXISTS college;

DROP DATABASE IF EXISTS college;

SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;

SHOW TABLES;

DROP TABLE IF EXISTS user;

CREATE TABLE
    user(
        id INT,
        age INT,
        name VARCHAR(30) NOT NULL,
        email VARCHAR(50) UNIQUE,
        followers INT DEFAULT 0,
        following INT,
        CONSTRAINT CHECK (age >= 13),
        PRIMARY KEY (id)
    );

CREATE TABLE
    post (
        id INT PRIMARY KEY,
        content VARCHAR(100),
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES user(id)
    );

INSERT INTO
    user(id, age, name, email, followers, following)
VALUES
    (1, 22, "adam", "adam123@gmail.com", 455, 12),
    (2, 21, "kamran", "kamran223@gmail.com", 12345, 34),
    (3, 19, "rahul", "rahul123@gmail.com", 566, 56),
    (4, 22, "vikash", "vikash123@gmail.com", 122, 896);

SELECT
    *
FROM
    user;

SELECT
    id,
    name,
    email
FROM
    user;

SELECT
    id,
    name,
    age
FROM
    user;

SELECT
    name,
    email
FROM
    user;

SELECT
    id,
    name,
    email
FROM
    user;

SELECT DISTINCT
    age
FROM
    user;

SELECT
    *
FROM
    user
WHERE
    followers >= 200;

SELECT
    name,
    followers
FROM
    user
WHERE
    followers >= 200;

SELECT
    name,
    age
FROM
    user
WHERE
    age >= 16;

SELECT
    name,
    age
FROM
    user
WHERE
    age + 1 = 19;

SELECT
    name,
    age,
    followers
FROM
    user
WHERE
    age > 15
    AND followers > 200;

SELECT
    name,
    age,
    followers
FROM
    user
WHERE
    age > 15
    OR followers > 200;

SELECT
    name,
    age,
    followers
FROM
    user
WHERE
    age BETWEEN 15 AND 20;

SELECT
    name,
    email,
    followers
FROM
    user
WHERE
    email IN (
        "adam123@gmail.com",
        "vikash123@gmail.com",
        "rahul123@gmail.com"
    );

INSERT INTO
    user(id, age, name, email, followers, following)
VALUES
    (5, 14, "azad", "azad13@gmail.com", 6544, 1004),
    (6, 15, "jeve", "jeve13@gmail.com", 655, 1333),
    (7, 16, "asam", "asam23@gmail.com", 1345, 3124);

SELECT
    name,
    age,
    email
FROM
    user
WHERE
    age IN (14, 16);

SELECT
    name,
    age,
    email
FROM
    user
WHERE
    age > 15 LIMIT 2;

SELECT
    name,
    age,
    email
FROM
    user
WHERE
    age LIMIT 3;

SELECT
    name,
    age,
    email,
    followers
FROM
    user
ORDER BY
    followers ASC;

SELECT
    name,
    age,
    email,
    followers
FROM
    user
ORDER BY
    followers DESC;

SELECT
    name,
    age,
    email,
    followers
FROM
    user
ORDER BY
    followers;

SELECT
    max(age)
FROM
    user;

SELECT
    count(age)
FROM
    user
WHERE
    age = 14;

SELECT
    avg(age)
FROM
    user;

SELECT
    sum(followers)
FROM
    user;

SELECT
    age,
    count(id)
FROM
    user
GROUP BY
    age;

SELECT
    age,
    max(followers)
FROM
    user
GROUP BY
    age;

SELECT
    age,
    max(followers)
FROM
    user
GROUP BY
    age
HAVING
    max(followers) >= 1000;

SELECT
    age,
    max(followers)
FROM
    user
GROUP BY
    age
HAVING
    max(followers) >= 1000
ORDER BY
    AGE DESC;

SELECT
    age,
    max(followers)
FROM
    user
GROUP BY
    age
HAVING
    max(followers) >= 1000
ORDER BY
    AGE ASC;

SET
    SQL_SAFE_UPDATES = 0;

UPDATE user
SET
    followers = 600
WHERE
    age = 16;

SELECT
    *
FROM
    user;

DELETE FROM user
WHERE
    age = 14;

SELECT
    *
FROM
    user;

ALTER TABLE user
ADD COLUMN city VARCHAR(25) DEFAULT "DELHI";

SELECT
    *
FROM
    user;

ALTER TABLE user
DROP COLUMN AGE;

SELECT
    *
FROM
    user;

ALTER TABLE user
RENAME TO InstaUser;

SELECT
    *
FROM
    InstaUser;

ALTER TABLE InstaUser
RENAME TO user;

SELECT
    *
FROM
    user;

ALTER TABLE user CHANGE COLUMN followers subs INT DEFAULT 0;

SELECT
    *
FROM
    user;

ALTER TABLE user
MODIFY subs INT DEFAULT 5;

SELECT
    *
FROM
    user;

INSERT INTO
    user(id, name, email, subs, following)
VALUES
    (9, "adil", "adil13@gmail.com", 244, 1204);

SELECT
    *
FROM
    user;

DROP TABLE post;

TRUNCATE TABLE user;

SELECT
    *
FROM
    user;

DROP TABLE user;

SELECT
    *
FROM
    user;

CREATE DATABASE emp;

DROP DATABASE emp;

USE emp;

CREATE TABLE
    emp (
        id INT PRIMARY KEY,
        name VARCHAR(30),
        age INT NOT NULL,
        salary INT
    );

CREATE DATABASE college;

USE college;

CREATE TABLE
    student (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT NOT NULL
    );

INSERT INTO
    student
VALUES
    (1, "Aamir", 22);

INSERT INTO
    student
VALUES
    (2, "kamran", 12);

SELECT
    *
FROM
    student;

CREATE DATABASE IF NOT EXISTS college;

DROP DATABASE IF EXISTS company;

CREATE DATABASE IF NOT EXISTS company;

SHOW DATABASES;

SHOW TABLES;

DROP TABLE student;

CREATE TABLE
    student (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT NOT NULL
    );

SELECT
    *
FROM
    student;

INSERT INTO
    student (id, name, age)
VALUES
    (101, "kamran", 22),
    (102, "aadil", 21);

DROP DATABASE student;

INSERT INTO
    student (id, name, age)
VALUES
    (101, "kamran", 22),
    (102, "aadil", 21);

INSERT INTO
    student
VALUES
    (104, "adnan", 5);

SELECT
    *
FROM
    student;

CREATE DATABASE empl_info;

USE empl_info;

CREATE TABLE
    empl_info (id INT PRIMARY KEY, name VARCHAR(60), salary INT);

INSERT INTO
    empl_info
VALUES
    (id, name, salary),
    (1, "Aniket", 20000),
    (2, "parabhat", 21000),
    (3, "kamran", 29000);

SELECT
    *
FROM
    empl_info;

CREATE TABLE
    emp (id INT, salary INT DEFAULT 20000);

INSERT INTO
    emp (id)
VALUES
    (102);

SELECT
    *
FROM
    emp;

CREATE TABLE
    city (
        id INT PRIMARY KEY,
        city VARCHAR(50),
        age INT,
        CONSTRAINT age_check CHECK (
            age >= 18
            AND city = "Delhi"
        )
    );

CREATE TABLE
    newTab (age INT CHECK (age >= 18));

DROP DATABASE college;

CREATE DATABASE college;

USE college;

CREATE TABLE
    college (
        rollno INT PRIMARY KEY,
        name VARCHAR(20),
        marks INT NOT NULL,
        grade VARCHAR(1),
        city VARCHAR(30)
    );

CREATE TABLE
    student (
        rollno INT PRIMARY KEY,
        name VARCHAR(20),
        marks INT NOT NULL,
        grade VARCHAR(1),
        city VARCHAR(30)
    );

INSERT INTO
    student (rollno, name, marks, grade, city)
VALUES
    (101, "KAMRAN", 98, "O", "Gurgaon"),
    (102, "ADAN", 88, "B", "MUMBAI"),
    (103, "ABDUL", 68, "C", "JAIPUR"),
    (104, "RAKESH", 84, "B", "KOLKATA"),
    (105, "AMAN", 78, "B", "HYDERABAD"),
    (106, "RAJIV", 58, "C", "DELHI"),
    (107, "AFROZ", 83, "A", "LUCKNOW"),
    (108, "ABHISHEK", 91, "A", "PATANA");

SELECT
    *
FROM
    student;

SELECT
    name,
    marks
FROM
    student;

SELECT
    city
FROM
    student;

SELECT distinct
    city
FROM
    student;

SELECT
    *
FROM
    student
WHERE
    marks > 80;

SELECT
    *
FROM
    student
WHERE
    marks > 90;

SELECT
    *
FROM
    student
WHERE
    marks < 80;

SELECT
    *
FROM
    student
WHERE
    city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks > 80
    AND city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks > 80
    OR city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks BETWEEN 80 AND 90;

SELECT
    *
FROM
    student
WHERE
    city IN ("DELHI", "MUMBAI");

SELECT
    *
FROM
    student
WHERE
    city NOT IN ("DELHI", "MUMBAI");

SELECT
    *
FROM
    student LIMIT 3;

SELECT
    *
FROM
    student
WHERE
    marks > 78 LIMIT 3;

SELECT
    *
FROM
    student
ORDER BY
    city ASC;

SELECT
    *
FROM
    student
ORDER BY
    marks ASC;

SELECT
    *
FROM
    student
ORDER BY
    marks DESC;

SELECT
    *
FROM
    student
ORDER BY
    city DESC;

SELECT
    *
FROM
    student
ORDER BY
    city DESC LIMIT 3;

SELECT
    max(marks)
FROM
    student;

SELECT
    count(rollno)
FROM
    student;

SELECT
    min(marks)
FROM
    student;

SELECT
    AVG(marks)
FROM
    student;

SELECT
    sum(marks)
FROM
    student;

SELECT
    city,
    count(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    AVG(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    MAX(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    MIN(marks)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    SUM(marks)
FROM
    student
GROUP BY
    city;

SELECT
    city
FROM
    student
GROUP BY
    city
ORDER BY
    city;

DROP TABLE IF EXISTS college;

DROP TABLE college;

CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE
    teacher (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        subJECT VARCHAR(50),
        salary INT
    );

INSERT INTO
    teacher (id, name, subject, salary)
VALUES
    (23, "AJAY", "MATH", 50000),
    (47, "BHARAT", "ENGLISH", 60000),
    (18, "CHETAN", "CHEMISTRY", 45000),
    (9, "DIVYA", "PHYSICS", 75000);

SELECT
    *
FROM
    teacher;

SELECT
    *
FROM
    teacher
WHERE
    salary >= 55000;

ALTER TABLE teacher CHANGE COLUMN salary cst INT;

ALTER TABLE teacher CHANGE COLUMN cst ctc INT;

SELECT
    *
FROM
    teacher;

UPDATE teacher
SET
    ctc = ctc + ctc * 0.25;

SELECT
    *
FROM
    teacher;

ALTER TABLE teacher
ADD COLUMN city VARCHAR(50) DEFAULT "GURGAON";

SELECT
    *
FROM
    teacher;

ALTER TABLE teacher
DROP COLUMN CTC;

SELECT
    *
FROM
    teacher;

CREATE DATABASE emp;

DROP DATABASE emp;

USE emp;

CREATE TABLE
    emp (
        id INT PRIMARY KEY,
        name VARCHAR(30),
        age INT NOT NULL,
        salary INT
    );

CREATE DATABASE college;

USE college;

DROP TABLE student;

CREATE TABLE
    student (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT NOT NULL
    );

INSERT INTO
    student
VALUES
    (1, "Aamir", 22);

INSERT INTO
    student
VALUES
    (2, "kamran", 12);

SELECT
    *
FROM
    student;

CREATE DATABASE IF NOT EXISTS college;

DROP DATABASE IF EXISTS company;

CREATE DATABASE IF NOT EXISTS company;

SHOW DATABASES;

SHOW TABLES;

DROP TABLE student;

CREATE TABLE
    student (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT NOT NULL
    );

SELECT
    *
FROM
    student;

INSERT INTO
    student (id, name, age)
VALUES
    (101, "kamran", 22),
    (102, "aadil", 21);

DROP DATABASE student;

INSERT INTO
    student (id, name, age)
VALUES
    (101, "kamran", 22),
    (102, "aadil", 21);

INSERT INTO
    student
VALUES
    (104, "adnan", 5);

SELECT
    *
FROM
    student;

CREATE DATABASE empl_info;

USE empl_info;

CREATE TABLE
    empl_info (id INT PRIMARY KEY, name VARCHAR(60), salary INT);

INSERT INTO
    empl_info
VALUES
    (id, name, salary),
    (1, "Aniket", 20000),
    (2, "parabhat", 21000),
    (3, "kamran", 29000);

SELECT
    *
FROM
    empl_info;

CREATE TABLE
    emp (id INT, salary INT DEFAULT 20000);

INSERT INTO
    emp (id)
VALUES
    (102);

SELECT
    *
FROM
    emp;

CREATE TABLE
    city (
        id INT PRIMARY KEY,
        city VARCHAR(50),
        age INT,
        CONSTRAINT age_check CHECK (
            age >= 18
            AND city = "Delhi"
        )
    );

CREATE TABLE
    newTab (age INT CHECK (age >= 18));

DROP DATABASE college;

CREATE DATABASE college;

USE college;

CREATE TABLE
    college (
        rollno INT PRIMARY KEY,
        name VARCHAR(20),
        marks INT NOT NULL,
        grade VARCHAR(1),
        city VARCHAR(30)
    );

DROP TABLE student;

CREATE TABLE
    student (
        rollno INT PRIMARY KEY,
        name VARCHAR(20),
        marks INT NOT NULL,
        grade VARCHAR(1),
        city VARCHAR(30)
    );

INSERT INTO
    student (rollno, name, marks, grade, city)
VALUES
    (101, "KAMRAN", 98, "O", "Gurgaon"),
    (102, "ADAN", 88, "B", "MUMBAI"),
    (103, "ABDUL", 68, "C", "JAIPUR"),
    (104, "RAKESH", 84, "B", "KOLKATA"),
    (105, "AMAN", 78, "B", "HYDERABAD"),
    (106, "RAJIV", 58, "C", "DELHI"),
    (107, "AFROZ", 83, "A", "LUCKNOW"),
    (108, "ABHISHEK", 91, "A", "PATANA");

SELECT
    *
FROM
    student;

SELECT
    *
FROM
    student
WHERE
    marks > 75;

SELECT
    name,
    marks
FROM
    student;

SELECT
    city
FROM
    student;

SELECT DISTINCT
    city
FROM
    student;

SELECT
    city
FROM
    student
GROUP BY
    city;

SELECT
    city,
    max(marks)
FROM
    student
GROUP BY
    city;

SELECT
    avg(marks)
FROM
    student;

ALTER TABLE student
DROP COLUMN grade;

ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student
SET
    grade = "O"
WHERE
    marks >= 80;

UPDATE student
SET
    grade = "A"
WHERE
    marks >= 70
    AND marks < 80;

UPDATE student
SET
    grade = "B"
WHERE
    marks >= 60
    AND marks < 70;

SELECT
    *
FROM
    student;

SELECT
    *
FROM
    student
WHERE
    marks > 80;

SELECT
    *
FROM
    student
WHERE
    marks > 90;

SELECT
    *
FROM
    student
WHERE
    marks < 80;

SELECT
    *
FROM
    student
WHERE
    city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks > 80
    AND city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks > 80
    OR city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks BETWEEN 80 AND 90;

SELECT
    *
FROM
    student
WHERE
    city IN ("DELHI", "MUMBAI");

SELECT
    *
FROM
    student
WHERE
    city NOT IN ("DELHI", "MUMBAI");

SELECT
    *
FROM
    student LIMIT 3;

SELECT
    *
FROM
    student
WHERE
    marks > 78 LIMIT 3;

SELECT
    *
FROM
    student
ORDER BY
    city ASC;

SELECT
    *
FROM
    student
ORDER BY
    marks ASC;

SELECT
    *
FROM
    student
ORDER BY
    marks DESC;

SELECT
    *
FROM
    student
ORDER BY
    city DESC;

SELECT
    *
FROM
    student
ORDER BY
    city DESC LIMIT 3;

SELECT
    max(marks)
FROM
    student;

SELECT
    count(rollno)
FROM
    student;

SELECT
    min(marks)
FROM
    student;

SELECT
    AVG(marks)
FROM
    student;

SELECT
    sum(marks)
FROM
    student;

SELECT
    city,
    count(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    AVG(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    MAX(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    MIN(marks)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    SUM(marks)
FROM
    student
GROUP BY
    city;

SELECT
    city
FROM
    student
GROUP BY
    city
ORDER BY
    city;

CREATE DATABASE emp;

DROP DATABASE emp;

USE emp;

CREATE TABLE
    emp (
        id INT PRIMARY KEY,
        name VARCHAR(30),
        age INT NOT NULL,
        salary INT
    );

CREATE DATABASE college;

USE college;

CREATE TABLE
    student (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT NOT NULL
    );

INSERT INTO
    student
VALUES
    (1, "Aamir", 22);

INSERT INTO
    student
VALUES
    (2, "kamran", 12);

SELECT
    *
FROM
    student;

CREATE DATABASE IF NOT EXISTS college;

DROP DATABASE IF EXISTS company;

CREATE DATABASE IF NOT EXISTS company;

SHOW DATABASES;

SHOW TABLES;

DROP TABLE student;

CREATE TABLE
    student (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT NOT NULL
    );

SELECT
    *
FROM
    student;

INSERT INTO
    student (id, name, age)
VALUES
    (101, "kamran", 22),
    (102, "aadil", 21);

DROP DATABASE student;

INSERT INTO
    student (id, name, age)
VALUES
    (101, "kamran", 22),
    (102, "aadil", 21);

INSERT INTO
    student
VALUES
    (104, "adnan", 5);

SELECT
    *
FROM
    student;

CREATE DATABASE empl_info;

USE empl_info;

CREATE TABLE
    empl_info (id INT PRIMARY KEY, name VARCHAR(60), salary INT);

INSERT INTO
    empl_info
VALUES
    (id, name, salary),
    (1, "Aniket", 20000),
    (2, "parabhat", 21000),
    (3, "kamran", 29000);

SELECT
    *
FROM
    empl_info;

CREATE TABLE
    emp (id INT, salary INT DEFAULT 20000);

INSERT INTO
    emp (id)
VALUES
    (102);

SELECT
    *
FROM
    emp;

CREATE TABLE
    city (
        id INT PRIMARY KEY,
        city VARCHAR(50),
        age INT,
        CONSTRAINT age_check CHECK (
            age >= 18
            AND city = "Delhi"
        )
    );

CREATE TABLE
    newTab (age INT CHECK (age >= 18));

DROP DATABASE college;

CREATE DATABASE college;

USE college;

CREATE TABLE
    college (
        rollno INT PRIMARY KEY,
        name VARCHAR(20),
        marks INT NOT NULL,
        grade VARCHAR(1),
        city VARCHAR(30)
    );

CREATE TABLE
    student (
        rollno INT PRIMARY KEY,
        name VARCHAR(20),
        marks INT NOT NULL,
        grade VARCHAR(1),
        city VARCHAR(30)
    );

INSERT INTO
    student (rollno, name, marks, grade, city)
VALUES
    (101, "KAMRAN", 98, "O", "Gurgaon"),
    (102, "ADAN", 88, "B", "MUMBAI"),
    (103, "ABDUL", 68, "C", "JAIPUR"),
    (104, "RAKESH", 84, "B", "KOLKATA"),
    (105, "AMAN", 78, "B", "HYDERABAD"),
    (106, "RAJIV", 58, "C", "DELHI"),
    (107, "AFROZ", 83, "A", "LUCKNOW"),
    (108, "ABHISHEK", 91, "A", "PATANA");

SELECT
    *
FROM
    student;

SELECT
    name,
    marks
FROM
    student;

SELECT
    city
FROM
    student;

SELECT distinct
    city
FROM
    student;

SELECT
    *
FROM
    student
WHERE
    marks > 80;

SELECT
    *
FROM
    student
WHERE
    marks > 90;

SELECT
    *
FROM
    student
WHERE
    marks < 80;

SELECT
    *
FROM
    student
WHERE
    city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks > 80
    AND city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks > 80
    OR city = "Mumbai";

SELECT
    *
FROM
    student
WHERE
    marks BETWEEN 80 AND 90;

SELECT
    *
FROM
    student
WHERE
    city IN ("DELHI", "MUMBAI");

SELECT
    *
FROM
    student
WHERE
    city NOT IN ("DELHI", "MUMBAI");

SELECT
    *
FROM
    student LIMIT 3;

SELECT
    *
FROM
    student
WHERE
    marks > 78 LIMIT 3;

SELECT
    *
FROM
    student
ORDER BY
    city ASC;

SELECT
    *
FROM
    student
ORDER BY
    marks ASC;

SELECT
    *
FROM
    student
ORDER BY
    marks DESC;

SELECT
    *
FROM
    student
ORDER BY
    city DESC;

SELECT
    *
FROM
    student
ORDER BY
    city DESC LIMIT 3;

SELECT
    max(marks)
FROM
    student;

SELECT
    count(rollno)
FROM
    student;

SELECT
    min(marks)
FROM
    student;

SELECT
    AVG(marks)
FROM
    student;

SELECT
    sum(marks)
FROM
    student;

SELECT
    city,
    count(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    AVG(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    MAX(name)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    MIN(marks)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    SUM(marks)
FROM
    student
GROUP BY
    city;

SELECT
    city
FROM
    student
GROUP BY
    city
ORDER BY
    city;

CREATE DATABASE payment;

USE payment;

CREATE TABLE
    payment (
        customer_id INT PRIMARY KEY,
        customer VARCHAR(30),
        mode VARCHAR(20),
        city VARCHAR(20)
    );

INSERT INTO
    payment (customer_id, customer, mode, city)
VALUES
    (101, "Olivia Barret", "Netbanking", "Portland"),
    (102, "Ethan Sinlair", "Credit Card", "Miami"),
    (103, "Maya Hemandez", "Credit Card", "Seattle"),
    (104, "Liam Donovan", "Netbanking", "Denver"),
    (
        105,
        "Sophiya Nguyen",
        "Credit Card",
        "New Orleans"
    ),
    (106, "Caleb Foster", "Debit Card", "Minnipolis"),
    (107, "Ava Patel", "Debit Card", "Phoenix"),
    (108, "Lucas Carter", "Netbanking", "Boston"),
    (109, "Isabel Martinez", "Netbanking", "Nashville"),
    (110, "Jackson Brooks", "Cret Card", "Boston");

SELECT
    *
FROM
    payment;

SELECT
    city,
    AVG(marks)
FROM
    student
GROUP BY
    city
ORDER BY
    city;

SELECT
    grade
FROM
    student
GROUP BY
    grade
ORDER BY
    grade;

SELECT
    grade,
    count(rollno)
FROM
    student
GROUP BY
    grade
ORDER BY
    grade;

SELECT
    city
FROM
    student
GROUP BY
    city
ORDER BY
    city;

SELECT
    city,
    count(rollno)
FROM
    student
GROUP BY
    city;

SELECT
    city,
    count(rollno)
FROM
    student
GROUP BY
    city
HAVING
    MAX(marks) > 90;

SELECT
    city
FROM
    student
WHERE
    grade = "A"
GROUP BY
    city;

SELECT
    city
FROM
    student
WHERE
    grade = "A"
GROUP BY
    city
HAVING
    MAX(marks) >= 90
ORDER BY
    city ASC;

SELECT
    city
FROM
    student
WHERE
    grade = "A"
GROUP BY
    city
HAVING
    MAX(marks) <= 90
ORDER BY
    city DESC;

SET
    SQL_SAFE_UPDATES = 0;

UPDATE student
SET
    grade = "O"
WHERE
    grade = "A";

SELECT
    *
FROM
    student;

UPDATE student
SET
    grade = "B"
WHERE
    marks BETWEEN 80 AND 90;

UPDATE student
SET
    marks = marks + 1;

SELECT
    *
FROM
    student;

DELETE FROM student
WHERE
    marks <= 80;

SELECT
    *
FROM
    student;

CREATE TABLE
    dept (id INT PRIMARY KEY, name VARCHAR(50));

CREATE TABLE
    teacher (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        dept_id INT,
        FOREIGN KEY (dept_id) REFERENCES dept (id)
    );
