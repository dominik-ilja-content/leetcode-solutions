SELECT employee1.name AS Employee
FROM Employee employee1
INNER JOIN Employee employee2
ON employee1.managerId = employee2.id
WHERE employee1.salary > employee2.salary;
