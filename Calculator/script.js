
function myclick(a) {
    const display = document.getElementById('display');
    if (display.value === '0') {
        display.value = a; // Replace '0' with the new number
    } else {
        display.value += a; // Append to the current value
    }
}

function eualto() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error'; // Handle any eval errors
    }
}

function ac() {
    document.getElementById('display').value = '0';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
}

function fsin() {
    const display = document.getElementById('display');
    display.value = Math.sin(parseFloat(display.value));
}

function fcos() {
    const display = document.getElementById('display');
    display.value = Math.cos(display.value);
}

function ftan() {
    const display = document.getElementById('display');
    display.value = Math.tan(display.value);
}

function square() {
    const display = document.getElementById('display');
    display.value = Math.pow((display.value), 2);
}

function squarert() {
    const display = document.getElementById('display');
    display.value = Math.sqrt((display.value),1/2);
}
