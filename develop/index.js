// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type:
        name:
        message:
    },
    {
        type:
        name:
        message:
    },
    {
        type:
        name:
        message:
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
    }
];

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