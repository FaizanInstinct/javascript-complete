document.getElementById('convertBtn').addEventListener('click', function() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsiusResult = document.getElementById('celsiusResult');

    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (isNaN(fahrenheit)) {
        celsiusResult.textContent = 'Please enter a valid number.';
    } else {
        const celsius = (fahrenheit - 32) * 5/9;
        celsiusResult.textContent = celsius.toFixed(2) + ' °C';
    }
});