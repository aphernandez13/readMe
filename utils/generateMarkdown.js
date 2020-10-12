// function to generate markdown for README
function generateMarkdown({
    title,
    description,
    installation,
    usage,
    license,
    contribution,
    username,
    email,
}) {
    return `${title}readme.md`,
        `# ${title}
## ${description} 
![License](https://img.shields.io/badge/License-${license}-blue.svg "License Badge")
# Table of Contents :
      
- [Installation](#installation)
- [Contributing](#contribution)
- [Test](#tests)
- [Questions](#questions)
## Installation:
${installation} 
## Usage:
${usage} 
## Contributing:
${contribution}   
## Questions
If you have any questions, please feel free to email me at ${email} or take a look at my github page: https://github.com/${username} 
 `;

};

module.exports = generateMarkdown;