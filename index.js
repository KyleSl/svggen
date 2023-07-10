const {Square, Circle, Triangle} = require('./lib/shapes');
const inquirer = require ('inquirer');

const questions = [
    {
        name: 'shape',
        type: 'list',
        message: 'What type of shape do you want your logo?',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        name: 'text',
        type: 'input',
        message: 'Enter text to display (Up to 3 characters): ',
        validate: async (input) => {
            if(input.length < 4){
                return true;
            }
            return false;
        }
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'Enter color of text: '
    },
    {
        name: 'logoColor',
        type: 'input',
        message: 'Enter color of logo: '
    }
]

function renderShape (data) {
    switch(data.shape) {
        case 'Circle': 
            const circle = new Circle (data.logoColor, data.text, data.textColor);
            circle.render();
            break;
        case 'Square':
            const square = new Square (data.logoColor, data.text, data.textColor);
            square.render();
            break;
        case 'Triangle':
            const triangle = new Triangle (data.logoColor, data.text, data.textColor);
            triangle.render();
            break;
        default:
            console.log('error occurred');
    }
}

inquirer.prompt(questions)
.then((answers) => { renderShape(answers) });