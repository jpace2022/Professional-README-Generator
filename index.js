// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {writeFile} = require("./markdown/genMarkdown.js")

// Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
        {
       type: 'input',
       name: 'title',
       message: 'What is your GitHub user name',
     },
     {
        type: 'input',
        name: 'discription',
        message: 'Please provide a Project discription here.',
       },
       {
        type: 'input',
        name: 'installation',
        message: 'Please provide project installation instruction here',
       }, 
       {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address here.',
       },
       {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the project?',
       },
       {
        type: 'input',
        name: 'usage',
        message: 'Please provide how user should use this repo.',
       },
       {
        type: 'input',
        name: 'test',
        message: 'What did the user use to run tests?',
       },
       {
        type: 'input',
        name: 'mockup',
        message: 'Please provide a project mockup. Use "<img src="">"',
       },
       {
        type: 'input',
        name: 'deployedurl',
        message: 'Enter in deployed url here.',
       },
       {
        type: 'input',
        name: 'github',
        message: 'Enter GitHub repo here.',
       },
       {
        type: 'checkbox',
        name: 'badge',
        message: 'Please select a project license badge.',
        choices: [
            "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]",
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
        ],
       },
       {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the corrisponding license to selected badge.',
        choices: [
            "(https://opensource.org/licenses/Apache-2.0)",
            "(https://opensource.org/licenses/MIT)",
        ],
       },

    ]);
}
//Create a function to initialize app
function init() {
    questions().then((data) => {
        writeFile(data);
    });
}


// Function to initialize app
init();