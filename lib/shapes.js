const Circle = require('./Circle');
const Triangle = require('./Triangle');
const Square = require('./Square');

function shapes(shapeName) {
  switch (shapeName) {
    case 'Triangle':
      return new Triangle();
    case 'Circle':
      return new Circle();
    case 'Square':
      return new Square();
    default:
      throw new Error(`Unsupported shape: ${shapeName}`);
  }
}

module.exports = shapes;