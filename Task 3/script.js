let displayValue = '0';

function appendToDisplay(val) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += val;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    let result = eval(displayValue);
    displayValue = result.toString();
    document.getElementById('display').innerText = displayValue;
}
