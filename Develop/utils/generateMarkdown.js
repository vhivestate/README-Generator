
function renderLicenseBadge(license) {}

// function if user decides to include a table of contents 
function renderTable(table) {
  if(table) {
    return`## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Lisence](#lisence)
- [Contributions](#contributions)`
// Doesn't include 'undefined' in finished readme file
  } else {
    return''
  }
} 
// function is a user decides to include contributions
function renderCon(contributions, info) {
  console.log(contributions)
  if(contributions) {
    return`## Contributions
  ${info}`
  } else {
    return''
  }
}
// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

${renderTable(data.table)}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

${renderCon(data.contributions, data.contributionInput)}

## Test
${data.test}

## Email
${data.email}

## Username
${data.username}



`;
}

module.exports = generateMarkdown;
