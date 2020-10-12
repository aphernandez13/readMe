const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      // array of questions for user
      message: "State the name of this project",
      name: "title",
    },
    {
      message: "Briefly describe this project.",
      name: "description",
    },
    {
      message: "What are the instructions for installing this project?",
      name: "installation",
    },
    {
      message: "Describe the usage of this project.",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "What is the licensing for this project?",
      name: "license",
      choices: ["MIT", "Apache", "GPL"],
    },
    {
      message: " how someone can contribute to this project?",
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
    await writeFileAsync("readmeExample/readme.md", ReadMe);
    console.log("Success in writing README.md");
  } catch (err) {
    console.log(err);
  }
}

init();


//have to resolve issue
