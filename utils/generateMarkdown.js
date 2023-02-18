// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.description}

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
