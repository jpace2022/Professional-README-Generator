const fs = require("fs");

function generateMarkdown(data) {
    return  `
    # ${data.title}

    ${data.badge}


    ## Table of Content
    * [Project Discription]
    * [Installation]
    * [Usage]
    * [License]
    * [Contribution]
    * [Test]
    * [Mock Up]
    * [Deployed URL]
    * [GitHub]
    * [Contact]

    ## Discription

    ${data.discription}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contribution
    ${data.contribution}

    ## Test
    ${data.test}

    ## Mock Up
    ${data.mockup}

    ## Deployed URL
    ${data.deployedurl}

    ## GitHub
    ${data.github}

    ## Contact
    ${data.contact}
    `;
}

 function writeFile (data) {
     return new Promise((resolve, reject) => {
        fs.writeFile("./README.md", generateMarkdown(data), (err) => {
            if (err) {
                 reject(err);
                 return;
             }
             resolve({ok: true, message: "A README.md was created."});
         });
     });
 };

 module.exports = {
     writeFile,
 };