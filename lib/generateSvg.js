const fs = require("fs");
const shapes = require("./shapes");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Generated logo.svg");
    }
  });
}

function generateSvg(text, textColor, shapeType, shapeColor) {
  const shapeInstance = shapes(shapeType);

  if ("setText" in shapeInstance && "setTextColor" in shapeInstance) {
    shapeInstance.setText(text);
    shapeInstance.setTextColor(textColor);
  }

  if ("setColor" in shapeInstance) {
    shapeInstance.setColor(shapeColor);
  }

  const svgString = shapeInstance.render();
  writeToFile("logo.svg", svgString);
}

module.exports = generateSvg;
