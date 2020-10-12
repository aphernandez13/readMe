const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      // array of questions for user
      message: "What is the name of your project?",
      name: "title",
    },
    {
      message: "Please enter a description of the project.",
      name: "description",
    },
    {
      message: "Please enter instructions for installation.",
      name: "installation",
    },
    {
      message: "Please enter a description of the usage of this project.",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "What is the licensing for this project?",
      name: "license",
      choices: ["MIT", "Apache", "GPL"],
    },
    {
      message: "Please describe how someone can contribute to this project.",
      name: "contribution",
    },
    {
      message: "What is your github username?",
      name: "username",
    },
    {
      message: "What is your email address?",
      name: "email",
    },
  ]);
}

async function init() {
  try {
    const answers = await promptUser();
    const ReadMe = generateMarkdown(answers);
    await writeFileAsync("readmeStorage/readme.md", ReadMe);
    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

init();
