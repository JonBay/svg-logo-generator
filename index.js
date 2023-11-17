const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./utils/generateSvg');

const questions =
  [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to be placed on your logo.'
      },
    {
      type: 'input',
      name: 'text color',
      message: 'Enter the color for your text as a color keyword or hexadecimal number.',
    },
    {
      type: 'input',
      name: 'shape',
      message: 'Pick a shape.',
      choices: ['Circle','Triangle','Square'],
    },
    {
      type: 'input',
      name: 'shape color',
      message: 'Enter the color for your shape as a color keyword or hexadecimal number.',
    },    
  ]



// function to write SVG file
function writeToFile(fileName, data) 
  {
    fs.writeFile(fileName, data, (err) =>
      {
        if(err)
          {
            console.error(err);
          }
        else
          {
            console.log('Generated logo.svg');
          }  
      });
  }

// function to ask questions and run generatemarkdown
function init() 
  {
    inquirer
      .prompt(questions)
      .then((response) => 
        {
          const questionResponses = generatemarkdown(response);
          writeToFile('README.md', questionResponses);
        })
        .catch((err) =>
          {
            console.error(err);
          });
  }

//initilize app
init();
