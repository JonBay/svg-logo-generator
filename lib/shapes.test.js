const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

test('Triangle render method', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    triangle.setTextColor('white');
    triangle.setText('BJ');

    const renderedSVG = triangle.render();
    
    // Test SVG opening tag
    expect(renderedSVG).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');

    // Test polygon element
    expect(renderedSVG).toContain('<polygon points="150, 18 244, 182 56, 182" fill="blue" stroke="white" stroke-width="2"/>');

    // Test text element
    expect(renderedSVG).toContain('<text x="150" y="120" fill="white" text-anchor="middle" font-size="40">BJ</text>');

    // Test SVG closing tag
    expect(renderedSVG).toContain('</svg>');
});

test('Circle render method', () => {
    const circle = new Circle();
    circle.setColor('blue');
    circle.setTextColor('white');
    circle.setText('BJ');

    const renderedSVG = circle.render();
    
    // Test SVG opening tag
    expect(renderedSVG).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');

    // Test circle element
    expect(renderedSVG).toContain('<circle cx="150" cy="100" r="80" fill="blue" stroke="white" stroke-width="2"/>');

    // Test text element
    expect(renderedSVG).toContain('<text x="150" y="115" fill="white" text-anchor="middle" font-size="50">BJ</text>');

    // Test SVG closing tag
    expect(renderedSVG).toContain('</svg>');
});

test('Square render method', () => {
    const square = new Square();
    square.setColor('blue');
    square.setTextColor('white');
    square.setText('BJ');

    const renderedSVG = square.render();
    
    // Test SVG opening tag
    expect(renderedSVG).toContain('<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">');

    // Test rect element
    expect(renderedSVG).toContain('<rect x="50" y="50" width="200" height="100" fill="blue" stroke="white" stroke-width="2"/>');

    // Test text element
    expect(renderedSVG).toContain('<text x="150" y="115" fill="white" text-anchor="middle" font-size="50">BJ</text>');

    // Test SVG closing tag
    expect(renderedSVG).toContain('</svg>');
});