CREATE DATABASE emp;

DROP DATABASE emp;
USE emp;


CREATE TABLE emp(
 id INT PRIMARY KEY,
name VARCHAR(30),
age INT NOT NULL,
salary INT
);

CREATE DATABASE college;
USE college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO student VALUES (1, "Aamir", 22);
INSERT INTO student VALUES (2, "kamran", 12);

SELECT * FROM student;


CREATE DATABASE IF NOT EXISTS college;

DROP DATABASE IF EXISTS company;
CREATE DATABASE IF NOT EXISTS company;



SHOW DATABASES;



SHOW TABLES;

DROP TABLE student;



CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

SELECT * FROM student;

INSERT INTO student
(id, name, age)
VALUES
(101, "kamran", 22),
(102, "aadil", 21);

DROP DATABASE student;

INSERT INTO student
(id, name, age)
VALUES
(101, "kamran", 22),
(102, "aadil", 21);


INSERT INTO student VALUES (104, "adnan", 5);

SELECT * FROM student;




CREATE DATABASE empl_info;
USE empl_info;

CREATE TABLE empl_info(
id INT PRIMARY KEY,
name VARCHAR(60),
salary INT
);

INSERT INTO empl_info VALUES (id, name, salary),
(1, "Aniket", 20000),
(2, "parabhat", 21000),
(3, "kamran", 29000);

SELECT * FROM empl_info;


CREATE TABLE emp(
id INT,
salary INT DEFAULT 20000
);

INSERT INTO emp(id) VALUES(102);

SELECT * FROM emp;



CREATE TABLE city(
id INT PRIMARY KEY,
city VARCHAR(50),
age INT,
CONSTRAINT age_check CHECK (age>=18 AND city = "Delhi")
);

CREATE TABLE newTab(
age INT CHECK (age>= 18)
);





DROP DATABASE college;
CREATE DATABASE college;
USE college;

CREATE TABLE college(
rollno INT PRIMARY KEY,
name VARCHAR(20),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(30)
);


CREATE TABLE student(
rollno INT PRIMARY KEY,
name VARCHAR(20),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(30)
);

INSERT INTO student (rollno, name, marks, grade, city) VALUES
(101, "KAMRAN", 98, "O", "Gurgaon"),
(102, "ADAN", 88, "B", "MUMBAI"),
(103, "ABDUL", 68, "C", "JAIPUR"),
(104, "RAKESH", 84, "B", "KOLKATA"),
(105, "AMAN", 78, "B", "HYDERABAD"),
(106, "RAJIV", 58, "C", "DELHI"),
(107, "AFROZ", 83, "A", "LUCKNOW"),
(108, "ABHISHEK", 91, "A", "PATANA");

SELECT * FROM student;


SELECT name, marks FROM student;
SELECT city FROM student;
SELECT distinct city FROM student;


SELECT * FROM  student WHERE marks>80;


SELECT * FROM  student WHERE marks>90;


SELECT * FROM  student WHERE marks<80;


SELECT * 
FROM  student
 WHERE city = "Mumbai";
 
 
 
SELECT * 
FROM  student
 WHERE marks>80 AND city = "Mumbai";



SELECT * 
FROM  student
 WHERE marks>80 OR city = "Mumbai";
 
 
 SELECT * 
FROM  student
 WHERE marks BETWEEN 80 AND 90;


SELECT * 
FROM  student
 WHERE city IN ("DELHI", "MUMBAI");
 
 
 SELECT * 
FROM  student
 WHERE city NOT IN ("DELHI", "MUMBAI");
 
 
  SELECT * 
FROM  student
LIMIT 3;

SELECT * 
FROM  student
WHERE marks >78
LIMIT 3;

SELECT * 
FROM  student
ORDER BY city ASC;

 
  SELECT * 
FROM  student
ORDER BY marks ASC;


 SELECT * 
FROM  student
ORDER BY marks DESC;


 SELECT * 
FROM  student
ORDER BY city DESC;





SELECT * 
FROM  student
ORDER BY city DESC
LIMIT 3;




SELECT  max(marks)
FROM  student;


SELECT  count(rollno)
FROM  student;



SELECT  min(marks)
FROM  student;


SELECT  AVG(marks)
FROM  student;



SELECT  sum(marks)
FROM  student;




SELECT city, count(name)
FROM  student
GROUP BY city;


SELECT city, AVG(name)
FROM  student
GROUP BY city;




SELECT city, MAX(name)
FROM  student
GROUP BY city;


SELECT city, MIN(marks)
FROM  student
GROUP BY city;


SELECT city, SUM(marks)
FROM  student
GROUP BY city;



SELECT city
FROM  student
GROUP BY city
ORDER BY city
;
