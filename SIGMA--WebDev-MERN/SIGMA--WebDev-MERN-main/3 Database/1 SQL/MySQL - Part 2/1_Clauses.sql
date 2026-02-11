USE instagram;

SELECT id, name, followers FROM userinfo 
WHERE followers >= 250; -- Comparison operator

SELECT id, name, age FROM userinfo
WHERE age + 1 = 36; -- Arithmetic operator

SELECT id, name, age, followers FROM userinfo
WHERE age > 30 AND followers > 250; -- Logical AND operator

SELECT id, name, age, followers FROM userinfo
WHERE age > 30 OR followers > 250; -- Logical OR operator

SELECT id, name, age FROM userinfo
WHERE age BETWEEN 25 AND 30; -- Logical BETWEEN operator

SELECT id, name, email FROM userinfo
WHERE email IN  -- Logical IN operator
("starc123@gmail.com", "russell123@gmail.com", "abc@gmail.com"); -- Matching list

SELECT id, name, age FROM userinfo
WHERE age IN (25, 30, 35); -- Another example of Logical  IN operator

SELECT id, name, age FROM userinfo
WHERE age NOT IN (25, 30, 35); -- Logical NOT operator with IN operator

SELECT id, name FROM userinfo
WHERE id <= 5
LIMIT 2; -- Limit Clause, We can also use it without Where Clause

SELECT id, name, followers FROM userinfo
ORDER BY followers DESC; -- Sorted in Descending order

SELECT id, name FROM userinfo
ORDER BY name; -- By default sort in Ascending order (Use ASC if you want)

SELECT COUNT(age) FROM userinfo
WHERE age = 35; -- Aggregate COUNT func return 2 in our case.

SELECT MAX(followers) FROM userinfo; -- MAX func return maximum followers 321

SELECT MIN(age) FROM userinfo; -- MIN func return min age 28

SELECT SUM(followers) FROM userinfo; -- SUM func return sum of followers 1200

SELECT AVG(age) FROM userinfo; -- AVG func return average of age 32.0000

SELECT age, COUNT(id) FROM userinfo
GROUP BY age; -- GROUP BY with Aggregate func

SELECT age, MAX(followers) FROM userinfo
GROUP BY age; -- Maximum followers on the age, Grouping

SELECT age, MAX(followers) FROM userinfo
GROUP BY age
HAVING MAX(followers) > 250; -- HAVING with GROUP BY

SELECT age, MAX(followers) FROM userinfo
GROUP BY age
HAVING MAX(followers) > 250
ORDER BY age ASC; -- Combination of Clauses is called General Order