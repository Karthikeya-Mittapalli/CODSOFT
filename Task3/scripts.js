document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let result = '';
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = button.textContent;
            if (buttonText === 'C') {
                currentInput = '';
                result = '';
                displayValue = '';
            } else if (buttonText === '=') {
                try {
                    result = eval(currentInput);
                    result = Math.round(result * 1000000) / 1000000;
                    currentInput = result.toString(); 
                    displayValue = currentInput;
                } catch (error) {
                    result = 'Error';
                    displayValue = result; // Show 'Error' on display
                }
            } else if (['+', '-', '*', '/'].includes(buttonText)) {
                currentInput += buttonText;
                displayValue = '';
            } else {
                currentInput += buttonText;
                displayValue += buttonText;
            }
            display.textContent = displayValue;
        });
    });

    // Animation end event for intro
    const intro = document.querySelector('.calci-intro');
    const header = document.getElementById('header');
    const calculatorSection = document.getElementById('calculator');

    intro.addEventListener('animationend', function() {
        document.getElementById('intro').style.display = 'none';
        header.style.display = 'flex';
        calculatorSection.style.display = 'flex';
        setTimeout(function() {
            header.style.opacity='1';
            calculatorSection.style.opacity='1';
        },50);
    });
});