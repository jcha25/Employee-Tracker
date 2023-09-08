const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require("./config/connection")

db.connect(function (err) {
    if (err) throw err
    console.log("MySQL Connected")
    startingQuestions()
});

const questions = [
    {
        type: "list",
        name: "startingQuestions",
        message: "What is it that you would like to do?",
        choices: ["View All Employees", "Add Employee", "View All Roles", "Add Role", "View All Departments", "Add Department", "Update an Employees Role"] 
    }
]

const startingQuestions = () => {
    inquirer.prompt(questions).then((res) => {
        if(res.startingQuestions === "View All Employees") {

        }
        if(res.startingQuestions === "Add Employee") {
            
        }
        if(res.startingQuestions === "View All Roles") {
            
        }
        if(res.startingQuestions === "Add Role") {
            
        }
        if(res.startingQuestions === "View All Departments") {
            
        }
        if(res.startingQuestions === "Add Department") {
            
        }
        if(res.startingQuestions === "Update an Employees Role") {
            
        }
    })
}