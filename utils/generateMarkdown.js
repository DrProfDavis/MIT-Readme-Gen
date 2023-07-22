// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}\n
  ## DESCRIPTION
  ${data.description}\n
  ## TABLE OF CONTENTS
  -- [Installation](#installation)\n
  -- [Usage](#usage)\n
  -- [Contributions](#contributions)\n
  -- [Tests](#tests)\n
  -- [License](#license)\n
  -- [Contacts](#contacts)\n
  ## INSTALLATION
  ${data.installation}\n
  ## USAGE
  ${data.usage}\n
  ## CONTRIBUTIONS
  ${data.contributions}\n
  ## TESTS
  ${data.tests}\n
  ## LICENSE 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n
  ## CONTACTS
  GitHub: [${data.username}](https://github.com/${data.username})\nEmail: [${data.email}](mailto:${data.email})
`;
}


module.exports = generateMarkdown;
