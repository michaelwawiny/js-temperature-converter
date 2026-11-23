// Function 1: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


// Function 2: Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


// Function 3: Format Temperature
function formatTemperature(value, unit) {
    return `${Number(value.toFixed(2))} ${unit}`;
}


// Sample checks
const fahrenheit = celsiusToFahrenheit(25);
console.log(formatTemperature(fahrenheit, "F"));

const celsius = fahrenheitToCelsius(68);
console.log(formatTemperature(celsius, "C"));

const freezingFahrenheit = celsiusToFahrenheit(0);
console.log(formatTemperature(freezingFahrenheit, "F"));

const freezingCelsius = fahrenheitToCelsius(32);
console.log(formatTemperature(freezingCelsius, "C"));