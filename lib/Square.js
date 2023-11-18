const Shape = require('./Shape');

class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <rect x="50" y="50" width="200" height="100" fill="${this.color}" stroke="${this.textColor}" stroke-width="2"/>
                    <text x="150" y="115" fill="${this.textColor}" text-anchor="middle" font-size="50">${this.text}</text>
                </svg>`;
    }
}

module.exports = Square;