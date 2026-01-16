WITH cte (ids)
     AS (SELECT managerid
         FROM   employee
         GROUP  BY managerid
         HAVING Count(id) >= 5)

SELECT NAME
FROM   employee
WHERE  id IN (SELECT ids
              FROM   cte
              WHERE  ids > = 5)  