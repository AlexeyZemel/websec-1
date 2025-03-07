function whenButtonClicked() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let result;
    if (isNaN(number1) || isNaN(number2)) {
        result = 0;
        // smth
    }
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            if (Math.abs(number2) < Number.EPSILON) {
                result = 0;
                break;
            }
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
    }
    document.getElementById("result").innerHTML = result;
    console.log(number1, number2, operation);
}