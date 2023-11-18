const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require('./lib/generateSvg');
const shapes = require('./lib/shapes'); 


const questions =
  [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters to be placed on your logo.'
      },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the color for your text as a color keyword or hexadecimal number.',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Pick a shape.',
      choices: ['Circle','Triangle','Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
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

// function to ask questions and run generateSvg
function init() {
  inquirer
    .prompt(questions)
    .then((response) => 
      {
        const { text, textColor, shape, shapeColor } = response;
        const shapeInstance = shapes(shape); 
        generateSvg(text, textColor, shape, shapeColor); 
      })
      .catch((err) => 
        {
        console.error(err);
        });
}

// initialize app
init();