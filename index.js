// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage information for your project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines for your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions for your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use for your project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const response = generateMarkdown(answers);
    writeToFile("./output/README.md", response);
  });
}

// Function call to initialize app
init();
