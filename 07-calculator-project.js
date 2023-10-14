let calculation = '';
const output = document.getElementById('output');
const errorMessage = 'error: Syntax';

/*function toggle(className) {
    const className = document.query
    if (element.classList.contains('is-toggled')) {
        element.classList.remove('is-toggled');
    } else {
        element.classList.add('is-toggled');
    }
} */

function updateCalculation(value) {

    if (typeof value === 'undefined') {
        try {
            output.innerHTML = eval(calculation) || errorMessage;
        } catch (calculation) {
            if (calculation instanceof SyntaxError) {
                output.innerHTML = errorMessage;
            }
        }
        if (output.innerHTML !== errorMessage) {
            calculation = eval(calculation);
        }
    } else {
        if (value === '0' && output.innerHTML === '0') {
        } else {
            calculation += value;
            output.innerHTML = calculation;
        }
    } 
}

function clearAllOutput() {
    output.innerHTML = '';
    calculation = '';
}

function delChar() {
    if (output.innerHTML === errorMessage) {
        output.innerHTML = calculation;
    } else {
        if (output.innerHTML[output.innerHTML.length - 1] === ' ') {
            calculation = output.innerText.substring(0, output.innerHTML.length - 2);
        } else {
            calculation = output.innerText.substring(0, output.innerHTML.length - 1);
        }
        output.innerHTML = calculation;
    }
}