const fs = require('fs');

class Shape {
    constructor (shape, color, text, textColor) {
        this.shape = shape;
        this.shapeColor = color;
        this.text = text;
        this.textColor = textColor;
    }
}

class Square extends Shape {
    constructor (color, text, textColor){
        super('square', color, text, textColor);
    }
    render () {
        fs.writeFile('logo.svg', 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="0" width="200" height="200" fill="${this.shapeColor}"/>
<text font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" font-size="50px" dominant-baseline="middle" text-anchor="middle" x="150" y="105" fill='${this.textColor}' >${this.text}</text>
</svg>`,
        (err) => { console.log(err) });
    }
}

class Circle extends Shape {
    constructor (color, text, textColor){
        super('circle', color, text, textColor);
    }
    render () {
        fs.writeFile('logo.svg', 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
<text font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" font-size="50px" dominant-baseline="middle" text-anchor="middle" x="150" y="105" fill='${this.textColor}' >${this.text}</text>
</svg>`,
        (err) => { console.log(err) });
    }
}

class Triangle extends Shape {
    constructor (color, text, textColor){
        super('triangle', color, text, textColor);
    }
    render () {
        fs.writeFile('logo.svg', 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<polygon points="150 05, 260 170, 40 170, 150" fill="${this.shapeColor}"/>
<text font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" font-size="50px" dominant-baseline="middle" text-anchor="middle" x="150" y="105" fill='${this.textColor}' >${this.text}</text>
</svg>`,
        (err) => { console.log(err) });
    }
}

module.exports = {Shape, Square, Circle, Triangle};