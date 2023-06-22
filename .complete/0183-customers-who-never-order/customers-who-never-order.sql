# Write your MySQL query statement below
SELECT name AS Customers FROM customers
LEFT JOIN orders on customers.id = orders.customerId
WHERE orders.customerId IS NULL;
