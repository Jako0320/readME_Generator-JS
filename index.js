// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project description:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter any installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the video link describing the project's usage:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC", "None"],
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
