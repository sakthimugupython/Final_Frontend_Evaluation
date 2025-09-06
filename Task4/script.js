let count = 0;
const counter = document.getElementById('counter');
const message = document.getElementById('message');
const container = document.querySelector('.counter-container');

function updateDisplay() {
    counter.textContent = count;

    // Reset state classes and inline color
    message.classList.remove('high', 'low');
    message.style.color = '';

    if (count < 0) {
        message.textContent = '';
        message.setAttribute('data-badge', 'LOW');
        message.classList.add('low');
    } else if (count > 10) {
        message.textContent = '';
        message.setAttribute('data-badge', 'HIGH');
        message.classList.add('high');
    } else {
        message.textContent = '';
        message.removeAttribute('data-badge');
    }
}

function increment() {
    count++;
    updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

