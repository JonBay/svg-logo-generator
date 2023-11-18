const Shape = require('./Shape');

class Triangle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" stroke="${this.textColor}" stroke-width="2"/>
                    <text x="150" y="120" fill="${this.textColor}" text-anchor="middle" font-size="40">${this.text}</text>
                </svg>`;
    }
}

module.exports = Triangle;




