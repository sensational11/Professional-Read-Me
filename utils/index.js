// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Why did you build this project?",
    name: "description",
  },
  {
    type: "input",
    message:
      "Please provide a table of contents for your app.",
    name: "contents",
  },
  {
    type: "input",
    message:
      "What are the steps required to install your project? Provide a step by step description of how to get the development environment running.",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Please provide the necessary license for this project. Choose the following options:",
    name: "license",
  },
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their Github profiles.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Please provide testing for your application if applicable.",
    name: "tests",
  },
  {
    type: "input",
    message:
      "If you woud like to contact me with additional questions.",
    name: "questions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    fileName,
    `##Title: ${data.title} 
##Description: ${data.description}
##Table of Contents : ${data.contents}
##Installation: ${data.installation}
##Usage: ${data.usage}
##License: ${data.license}
##Contributing: ${data.contributing}
##Tests: ${data.tests}
##Questions: ${data.questions}`,

    function (err) {
      if (err) throw err;
      console.log("File created, check it!");
    }
  );
}

// TODO: Create a function to initialize app
function init(questions) {
  // prompt the user for inputs
  inquirer.prompt(questions).then(function (answers) {
    writeToFile("markdown.md", answers);
    // // get your answers
    
  });
}

// Function call to initialize app
init(questions);
