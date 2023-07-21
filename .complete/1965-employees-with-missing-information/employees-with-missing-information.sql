# Write your MySQL query statement below
SELECT employee_id
FROM (
  SELECT e.employee_id FROM Employees e LEFT JOIN Salaries s ON e.employee_id = s.employee_id
  WHERE s.salary IS NULL
  UNION
  SELECT s.employee_id FROM Employees e RIGHT JOIN Salaries s ON e.employee_id = s.employee_id
  WHERE e.name IS NULL
) AS full
ORDER BY employee_id;
