// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {writeFile} = require("./markdown/genMarkdown.js")

// TODO: Create a function to initialize app

// Function call to initialize app

   
// TODO: Create an array of questions for user input

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
        name: 'license',
        message: 'Please select a project license badge.',
        choices: [
            "**Apache** [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)(#license)",
            "**Eclipse** [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)(#license)",
            "**MIT** [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)(#license)",
            "**Mozilla** [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)(#license)"
        ]
       },
       {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the corrisponding license to selected badge.',
        choices: [
            "**Apache** (https://opensource.org/licenses/Apache-2.0)",
            "**Eclipse** (https://opensource.org/licenses/EPL-1.0)",
            "**MIT** (https://opensource.org/licenses/MIT)",
            "**Mozilla** (https://opensource.org/licenses/MPL-2.0)"
        ]
       },

    ]);
}
// TODO: Create a function to write README file
function init() {
    questions().then((data)=> {
        writeFile(data);
    });
}

init();