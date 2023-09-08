const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require("./config/connection")

db.connect(function (err) {
    if (err) throw err
    console.log("MySQL Connected")
});