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
    cursor.style.zIndex = '-1';
}

function resumeBlinker(delayValue) {
    cursor.style.zIndex = '0';
    cursor.style.transition = 'z-index 5s';
}

function updateCalculation(value) {
    pauseBlinker();
    resumeBlinker(2.5);
    if (typeof value === 'undefined') {
        try {
            output.innerHTML = eval(calculation) || errorMessage;
        } catch (calculation) {
            // Needs looking at
            if (calculation instanceof SyntaxError || !Number(output.innerHTML[output.innerHTML.length - 1])) {
                output.innerHTML = errorMessage;
            }
        }
        if (output.innerHTML !== errorMessage) {
            calculation = eval(calculation);
        } else {
            output.innerHTML = calculation;
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

document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        delChar();
    } else if (event.key === ' ' || event.key === 'Enter') {
        updateCalculation();
    } else if (['0', '.'].includes(event.key) || Number(event.key)) {
        updateCalculation(event.key);
        if (event.key === '.') {
            document.getElementById('calc-decimal').click()
        } else {
            document.getElementById(`calc${event.key}`).active();
        }
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        updateCalculation(` ${event.key} `);
        document.getElementsByName
    } else {
        console.log(event.key);
    }
}, false);