SELECT column1, column_2, column_n
FROM table_name
WHERE conditions;


INSERT INTO table_name(someData, someValue)
VALUES
('some data'),
('some_value');

INSERT INTO tabel1(someData, someValue)
SELECT column1, column_2
FROM table2
WHERE someCondition;

UPDATE table
SET column1 = value1,
    column2 = value2;
Where someCondition;


DELETE FROM table
WHERE someCondition; 