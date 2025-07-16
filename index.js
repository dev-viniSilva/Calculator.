const total = document.getElementById('total');

function addNumber(value) {
total.value += value;
}

function equalCalculator() {
    try {
        total.value = eval(total.value);
    }  catch (error) {
        total.value = "Error";
        return;
    }
}

function clearCalculator() {
total.value = "";
}