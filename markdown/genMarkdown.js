const fs = require("fs");

function generateMarkdown(data) {
    if (data.license === "MIT License") {
        data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (data.license === "Apache 2.0") "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/Apache-2.0)"
    
}

// Create a function to generate README file
function generateMarkdown(data) {
    return  `
# ${data.title}

 ${data.badge}


## Table of Content
* [Project Discription](#discription)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#test)
* [Mock Up](#mockup)
* [Deployed URL](#deployedurl)
* [GitHub](#github)
* [Contact](#contact)

# Discription

    ${data.discription}

# Installation
    ${data.installation}

# Usage
    ${data.usage}

# License
    ${data.license}

# Contribution
    ${data.contribution}

# Test
    ${data.test}

# Mock Up
    ${data.mockup}

# Deployed URL
    ${data.deployedurl}

# GitHub
    ${data.github}

# Contact
    ${data.contact}
    
    `
}

 function writeFile (data) {
     return new Promise((resolve, reject) => {
        fs.writeFile("./markdown/README.md", generateMarkdown(data), (err) => {
            if (err) {
                 reject(err);
                 return;
             }
             resolve({ok: true, message: ""});
         });
     });
 };
 

 module.exports = {
     writeFile,
 };
 