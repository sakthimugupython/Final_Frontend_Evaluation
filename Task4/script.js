let count = 0;
const counter = document.getElementById('counter');
const message = document.getElementById('message');

function updateDisplay() {
    counter.textContent = count;
    if (count < 0) {
        message.textContent = 'Low Count';
        message.style.color = '#dc3545';
    } else if (count > 10) {
        message.textContent = 'High Count';
        message.style.color = '#0d6efd';
    } else {
        message.textContent = '';
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

