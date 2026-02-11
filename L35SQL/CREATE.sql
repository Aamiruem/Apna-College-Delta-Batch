CREATE DATABASE college;
USE college;

CREATE TABLE IF NOT EXISTS student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    gender VARCHAR(10),
    course VARCHAR(50),
    fee DECIMAL(10,2),
    address VARCHAR(100),
    contact VARCHAR(15)
);

INSERT INTO student(name, age, gender, course, fee, address, contact)
VALUES('Rahul', 20, 'Male', 'Python', 5000, 'Delhi', '9876543210'),
('Rani', 21, 'Female', 'Java', 6000, 'Mumbai', '9876543211'),
('Raj', 22, 'Male', 'C++', 7000, 'Kolkata', '9876543212'),
('Rita', 23, 'Female', 'C', 8000, 'Chennai', '9876543213'),
('Rajesh', 24, 'Male', 'Python', 9000, 'Hyderabad', '9876543214');


SELECT * FROM student;

SELECT * FROM student WHERE course = 'Python';
