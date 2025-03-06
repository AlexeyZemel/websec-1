function whenButtonClicked() {
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operation = document.getElementById("operation").value;
    number1 = Number(number1);
    number2 = Number(number2);
    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
    }
    document.getElementById("result").innerHTML = result;
    console.log(number1, number2, operation);
}