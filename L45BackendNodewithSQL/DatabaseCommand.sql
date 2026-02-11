-- database command for vs code terminal 
& "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
after entering password  Aamirazad@786

not working command
/usr/local/mysql/bin/mysql -u root -p
after password Aamirazad@786
-- create database
create database college;

-- use database
use college;

-- create table
create table student(
    id int,
    name varchar(20),
    age int,
    city varchar(20)
);

-- insert data into table
insert into student values(1,"Aamir",20,"Delhi");
insert into student values(2,"Aman",21,"Mumbai");
