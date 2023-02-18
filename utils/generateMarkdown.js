// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${data.tableOfContents}
  ## Table of Contents
  1. [Description](#description)   //[text with the link](URL of the link) 
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Licence](#licence)
  5. [Contributing](#contributing)
  6. [Tests](#Tests)
  7. [Questions](#github)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?  
  Github: https://github.com/${data.github}
  Email: ${data.email}
  
  ## Credits
  ${data.name}

   `;
}

module.exports = generateMarkdown;
