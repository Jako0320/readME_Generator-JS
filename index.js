// TODO: Include packages needed for this application
const { prompt } = require("inquirer");
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
    name: "testing",
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
const generateREADME = (data) => {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Testing
${data.testing}

## Questions
Please feel free to reach out for any questions:
- GitHub: (https://github.com/${data.username})
- Email: ${data.email}
`;
};

// TODO: Create a function to initialize app
prompt(questions).then((data) => {      
      fs.writeFile("README.md", generateREADME(data), (err) => {
        err ? console.log(err) : console.log("README.md successfully created!")
      });
    })