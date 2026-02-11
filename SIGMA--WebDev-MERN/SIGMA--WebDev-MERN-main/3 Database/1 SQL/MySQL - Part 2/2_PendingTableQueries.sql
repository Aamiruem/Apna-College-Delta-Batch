-- Some pending Table Queries

SET SQL_SAFE_UPDATES = 0; -- Disable SAFE UPDATE MODE 

DELETE FROM userinfo -- Disable SAFE UPDATE MODE before execute
WHERE age = 28; -- Delete a single row

SELECT * FROM userinfo; -- See that row is deleted or not

ALTER TABLE userinfo
ADD COLUMN  city VARCHAR(25) DEFAULT "Delhi"; -- Adding a column with default value

ALTER TABLE userinfo
DROP COLUMN age; -- Ddeleting a column

ALTER TABLE userinfo
RENAME TO instaUsers; -- Renaming the table

SELECT * FROM instausers;

ALTER TABLE instausers
CHANGE COLUMN followers subscribers INT DEFAULT 0; -- changing a column name

ALTER TABLE instausers
MODIFY subscribers INT DEFAULT 5; -- It changes datatype & constraints of a column

INSERT INTO instausers
(id, name, email, following)
VALUES -- Adding value to see the default value of subscribers
(6, "Cummins", "cummins123@gmail.com", 12);

SELECT * FROM instausers;

TRUNCATE TABLE instausers; -- Delete all data from table

DROP TABLE userpost; -- Delete a table from database

DROP TABLE instausers; -- Delete table ffrom database

SHOW TABLES; -- No table