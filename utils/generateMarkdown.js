function renderLicenseBadge(license) {
    if (license !== 'No License') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return '';
}

function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}

## License

This project is ${data.license !== 'No License' ? 'licensed under the ' + data.license + ' license.' : 'not licensed.'}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
