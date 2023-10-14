let calculation = '';
const output = document.getElementById('output');
const errorMessage = 'error: Syntax';

const cursor = document.getElementById('cursor');

/*function toggle(className) {
    const className = document.query
    if (element.classList.contains('is-toggled')) {
        element.classList.remove('is-toggled');
    } else {
        element.classList.add('is-toggled');
    }
} */

function pauseBlinker() {
    cursor.style.animation = "none";
    cursor.style.opacity = "0";
}

function resumeBlinker(delayValue) {
    cursor.style.animation = "blink 1s infinite";
    cursor.style.animationDelay = `${String(delayValue)}s` || "1s";
}

function updateCalculation(value) {
    pauseBlinker();
    resumeBlinker(2.5);
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
    pauseBlinker();

    output.innerHTML = '';
    calculation = '';

    resumeBlinker(3);
}

function delChar() {
    pauseBlinker();

    if (output.innerHTML === errorMessage) {
        output.innerHTML = calculation;
    } else {
        if (output.innerHTML[output.innerHTML.length - 1] === ' ') {
            calculation = output.innerHTML.substring(0, output.innerHTML.length - 3);
        } else {
            calculation = output.innerHTML.substring(0, output.innerHTML.length - 1);
        }
        output.innerHTML = calculation;
    }

    resumeBlinker();
}