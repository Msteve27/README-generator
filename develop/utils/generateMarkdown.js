// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log('license: ', license);
    switch (license) {
      case 'MIT':
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case 'Apache':
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      case 'BSD':
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      case 'GNU':
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case 'ISC':
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        `
      default:
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }
  ​
  }

function renderProjectTitle(title) {
    if (title === true) {
        return `${title}`;
    } 
}


function renderProjectDescription(description) {
    if (description === true) {
        return `${description}`;
    } 
}

function renderInstallation(installation) {
    if (installation === true) {
        return `${installation}`;
    } 
}

function renderUsername(username) {
    if (username === true) {
        return `${installation}`;
    } 
}

function renderEmail(email) {
    if (email === true) {
        return `${installation}`;
    } 
}
function renderContributors(contributors) {
    if (contributors === true) {
        return `${contributors}`;
    } 
}

function renderTests(tests) {
    if (tests === true) {
        return `${tests}`;
    } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('data is ==>', data)
  return `
  # Project Title
  ${renderProjectTitle(data.title)}

  # Description
  ${renderProjectDescription(data.description)}

  # Table of Contents  
  * [Installation](#Installation)\n
  * [Usage](#Usage)\n
  * [License](#License)\n
  * [Contributing](#Contributing)\n
  * [Tests](#Tests)\n
  * [Questions](#Questions)\n

  # Installation
  ${renderInstallation(data.installation)}

  # Usage
  ${renderScreenshot(data.screenshot)}

  # Liscense
  This is licensed under: 
  ${renderLicense(data.license)}

  # Contributing
  Contributors to this project: ${renderContributors(data.contributors)}

  # Tests
  ${renderTests(data.tests)}

  # Questions
  https://github.com/${renderUsername(data.username)}
  My email: ${renderEmail(data.email)}
  `;
}

module.exports = generateMarkdown;