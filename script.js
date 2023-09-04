function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const resultElement = document.getElementById("result");

    if (celsiusInput.value === "") {
        resultElement.innerText = "Please enter a value.";
        return;
    }

    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9 / 5) + 32;

    resultElement.innerText = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
}
