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
  //Table of Contents
  {
    type: "input",
    name: "table of contents",
    message: "what is your table of contents?",
  },
  //Installation
  {
    type: "input",
    name: "instalation",
    message: "Please type ouu your installation instructions?",
  },
  //Usage
  {
    type: "input",
    name: "instalation",
    message: "what is your usage?",
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
    message: "Who is the contributor?",
  },
  //Tests
  {
    type: "input",
    name: "tests",
    message: "what is your project description?",
  },
  //Questions-Github
  {
    type: "input",
    name: "questions",
    message: "what is your Github username?",
  },
  //Questions-email
  {
    type: "input",
    name: "questions",
    message: "what is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.MD", data, (err) => {
    if (err) {
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
    const markdown = generateMarkdown(answers);
  });
}

// function call to initialize program
init();
