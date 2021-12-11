// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  console.log('license: ', license);
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'GNU':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    default:
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
}

function renderProjectTitle(title) {
    return `${title}`;
}


function renderProjectDescription(description) {
     return `${description}`;
}

function renderInstallation(installation) {
      return `${installation}`;

}

function renderUsername(username) {
      return `${username}`;
}

function renderEmail(email) {
      return `${email}`;
}
function renderContributors(contributors) {
      return `${contributors}`;
}

function renderTests(tests) {
      return `${tests}`;
}

function renderScreenshot(screenshot) {
      return `${screenshot}`;
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
  // ${renderLicense(data.license)}

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
