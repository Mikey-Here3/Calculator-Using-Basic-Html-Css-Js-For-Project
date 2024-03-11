let ansInput = document.getElementById('ans');

function circleLeft() {
    ansInput.textContent += '(';
}

function circleRight() {
    ansInput.textContent += ')';
}

function clearValue() {
    ansInput.textContent = '0';
}
function backspace() {
    ansInput.textContent = ansInput.textContent.slice(0, -1);
}

function appendValue(value) {
    if (ansInput.textContent === '0') {
        ansInput.textContent = value;
    } else {
        ansInput.textContent += value;
    }
}

function calculate() {
    ansInput.textContent = eval(ansInput.textContent).toString();
}
