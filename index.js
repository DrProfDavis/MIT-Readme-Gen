// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
function questions() {
    // WHEN I enter my project title
    // THEN this is displayed as the title of the README
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        {
            type: 'input',
            message: 'What do you want the description to be?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What do you want the installation section to say?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What do you want the usage section to say?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What do you want the contributions section to say?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'What about the tests section?',
            name: 'tests',
        },
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
    .then((response) =>
    writeToFile(markdown(response))
    );
};


// TODO: Create a function to write README file
function writeToFile(info) {
    fs.appendFile('BLINGME.md', `${info}\n`, (err) =>

        err ? console.error(err) : console.log('Successfully wrote to README')
    );
}

// TODO: Create a function to initialize app
function init() {

    questions()
}

// Function call to initialize app
init();



