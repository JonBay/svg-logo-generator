class Shape {
    constructor() {
        this.color = "blue"; // Default color
        this.text = ""  // Default text
        this.textColor = "Orange" // Default text color
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor){
        this.textColor = textColor;
    }

    render() {
        throw new Error("Method not implemented");
    }
}

module.exports = Shape;