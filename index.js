const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  //Title
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  //Description
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  // //Table of Contents
  // {
  //   type: "checkbox",
  //   name: "tableOfContents",
  //   message: "Please select table of contents from list below?",
  //   choices: [
  //     "Installation",
  //     "Usage",
  //     "Licence",
  //     "Contributing",
  //     "Tests",
  //     "Questions",
  //   ],
  // },

  //Installation
  {
    type: "input",
    name: "installation",
    message: "Please type ouu your installation instructions?",
  },
  //Usage
  {
    type: "input",
    name: "usage",
    message:
      "Please provide instructions and examples of use? Please use screenshots as needed",
  },

  //Licence
  {
    type: "list",
    choices: ["MIT", "GPL", "GNU", "Bsd-2-Clause"],
    name: "licence",
    message: "Please select your project licence?",
  },
  //Contributing
  {
    type: "input",
    name: "contributing",
    message: "lease provide ways that others can contribute to this project?",
  },
  //Tests
  {
    type: "input",
    name: "tests",
    message: "Please list your test instructions?",
  },
  //Questions-Github
  {
    type: "input",
    name: "github",
    message: "what is your Github username?",
  },
  //Questions-email
  {
    type: "input",
    name: "email",
    message: "what is your email address?",
  },

  //Questions-email
  {
    type: "input",
    name: "name",
    message: "what is your name?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./README.md", readmeText, (error) => {
    if (error) {
      console.error(err);
    } else {
      console.log("success!");
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    const readmeText = generateMarkdown(answers);
    console.log(readmeText);
    fs.writeFileSync(path.join(process.cwd(), "README.md"), readmeText);
  });
}

// function call to initialize program
init();
