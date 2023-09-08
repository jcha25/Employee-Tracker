const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require("./config/connection")

db.connect(function (err) {
    if (err) throw err
    console.log("MySQL Connected")
    startingQuestions()
});

const mainQuestions = [
    {
        type: "list",
        name: "startingQuestions",
        message: "What is it that you would like to do?",
        choices: ["View All Employees", "Add Employee", "View All Roles", "Add Role", "View All Departments", "Add Department", "Update an Employees Role"]
    }
]

const employeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: "Employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "Employee's last name?"
    },
    {
        type: 'input',
        name: 'employeeRole',
        message: "Employee's role id?"
    },
    {
        type: 'input',
        name: 'employeeManager',
        message: "Employee's manager id?"
    },
]

const startingQuestions = () => {
    inquirer.prompt(mainQuestions).then((res) => {
        if (res.startingQuestions === "View All Employees") {
            viewAllEmployees()
        }
        if (res.startingQuestions === "Add Employee") {
            addEmployee()
        }
        if (res.startingQuestions === "View All Roles") {

        }
        if (res.startingQuestions === "Add Role") {

        }
        if (res.startingQuestions === "View All Departments") {

        }
        if (res.startingQuestions === "Add Department") {

        }
        if (res.startingQuestions === "Update an Employees Role") {

        }
    })
}

const viewAllEmployees = () => {
    db.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.table(res)
        startingQuestions()
    })
}

const addEmployee = () => {
    inquirer.prompt(employeeQuestions).then(res => {
            db.query(`INSERT INTO employee SET ?`, {
                first_name: res.firstName,
                last_name: res.lastName,
                role_id: res.employeeRole,
                manager_id: res.employeeManager
            })
            console.log(`Employee added to the database`);
            startingQuestions()
        })
}