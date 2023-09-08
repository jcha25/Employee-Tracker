INSERT INTO departments (id, department_name)
VALUES (1, "Board"),
       (2, "Sales"),
       (3, "Engineering"),
       (4, "Finance"),
       (5, "Legal");

-- Role seeds
INSERT INTO roles (department_id, title, salary)
VALUES (1, "CEO", 1000000),
       (2, "Sales Lead", 100000),
       (2, "Salesperson", 80000),
       (3, "Lead Engineer", 150000),
       (3, "Software Engineer", 120000),
       (4, "Accountant Manager", 160000),
       (4, "Accountant", 125000),
       (5, "Legal Team Lead", 250000),
       (5, "Lawyer", 190000);

-- Employee seeds
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Justice", "Champion", 1, null),
       ("Bryan", "Johnson", 2, 1),
       ("Eric", "Cottle", 3, 2),
       ("Jamie", "Bryan", 4, 1),
       ("Patrick", "Star", 5, 4), 
       ("Adam", "Grey", 6, 1),
       ("Bryce", "Thompson", 7, 6),
       ("James", "Brown", 8, 1),
       ("Larry", "Porter", 9, 8);