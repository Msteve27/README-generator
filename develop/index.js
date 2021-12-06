// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message:'What is the title of your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title.');
                return false;
            }
        }
    },
    {
        type:'input',
        name:'description',
        message:'Give a description of your project: (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'installation',
        message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'screenshot',
        message:'Please upload screenshot to the images folder and copy relative path here. (required)',
        validate: screenshotInput => {
            if (screenshotInput) {
                return true;
            } else {
                console.log('Please enter a path to the screenshot.');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license',
        choices: [
            {name: 'MIT'},
            {name: 'Apache'},
            {name: 'BSD'},
            {name: 'GNU'},
            {name: 'ISC'},
        ]
    },
    {
        type:'input',
        name: 'username',
        message:'What is your GitHub username?(required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message:'What is your email?(required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
    
      }
    },
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw Error(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markDown = generateMarkdown(answers)
            writeToFile('Hobbies.md', markDown)
        })
}

// Function call to initialize app
init();