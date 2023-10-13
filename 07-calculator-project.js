let calculation = '';
const output = document.getElementById('output');

/*function toggle(className) {
    const className = document.query
    if (element.classList.contains('is-toggled')) {
        element.classList.remove('is-toggled');
    } else {
        element.classList.add('is-toggled');
    }
} */

function updateCalculation(value) {

    if (value === '0' && calculation === '0') {
    } else if (calculation === '0') {
        calculation = value;
    } else {
        calculation += value;
    }

    output.innerHTML = calculation;
}

function clearOutput() {
    calculation = '0';
    output.innerHTML = calculation;
}

function clearAllOutput() {
    calculation = '0';
    output.innerHTML = calculation;
}

function delChar() {
    if (output.innerHTML === '0') {
    } else {
        if (output.innerHTML.length === 1) {
            calculation = '0';
        } else {
            calculation = output.innerText.substring(0, output.innerHTML.length - 1);
        }
        output.innerHTML = calculation;
    }
}