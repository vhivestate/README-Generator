// * Function returns license badge 
function renderLicenseBadge(license) {
  if (license === "None") {
    return `[![License](https://img.shields.io/static/v1?label=License&message=Unlicense&color=critical&style=for-the-badge)](https://opensource.org/licenses/unlicense)`;
  }
  if (license === "MIT") {
    return `[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blueviolet&style=for-the-badge)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Apache") {
    return `[![License](https://img.shields.io/static/v1?label=License&message=Apache&color=blue&style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "GPL") {
    return `[![License](https://img.shields.io/static/v1?label=License&message=GPL&color=yellow&style=for-the-badge)](https://opensource.org/licenses/GPL-3.0)`;
  }
  if (license === "BSD-3-Clause") {
    return `[![License](https://img.shields.io/static/v1?label=License&message=BSD&color=yellowgreen&style=for-the-badge)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
};

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
  return `# ${data.title} ${renderLicenseBadge(data.license)}
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
