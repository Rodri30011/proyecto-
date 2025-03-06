let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function manualInput() {
    let input = prompt("Ingrese la operación (ejemplo: 5+3*2):");
    if (input !== null && input.trim() !== "") {
        display.value = input;
    }
}