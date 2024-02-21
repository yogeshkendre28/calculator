document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');

    function clearScreen() {
        screen.value = '';
    }

    function clearLast() {
        screen.value = screen.value.slice(0, -1);
    }

    function appendToScreen(value) {
        screen.value += value;
    }

    function calculate() {
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Error';
        }
    }

    const buttons = document.querySelectorAll('.number, .symbol');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.textContent === '=') {
                calculate();
            } else if (button.textContent === 'AC') {
                clearScreen();
            } else if (button.textContent === 'C') {
                clearLast();
            } else {
                appendToScreen(button.textContent);
            }
        });
    });
});
