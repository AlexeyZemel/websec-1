function whenButtonClicked() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let previous_field = document.getElementById("previous");
    let current_field = document.getElementById("current");
    let num1_field = document.getElementById("number1");
    let num2_field = document.getElementById("number2");
    let result;
    if (isNaN(number1) || isNaN(number2)) {
        if (isNaN(number1) && isNaN(number2)) {
            num1_field.value ="";
            num2_field.value ="";
            num1_field.placeholder = "Введите число!";
            num1_field.style.borderStyle = "solid";
            num2_field.placeholder = "Введите число!";
            num2_field.style.borderStyle = "solid";
        }
        else if (isNaN(number1)) {
            num1_field.value ="";
            num1_field.placeholder = "Введите число!";
            num1_field.style.borderStyle = "solid";
        }
        else if (isNaN(number2)) {
            num2_field.value ="";
            num2_field.placeholder = "Введите число!";
            num2_field.style.borderStyle = "solid";
        }
        previous_field.style.display = "none";
        current_field.style.display = "block";
        current_field.innerHTML = "Ошибка!";
        return;
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
                previous_field.style.display = "none";
                current_field.style.display = "block";
                num2_field.value ="";
                num2_field.placeholder = "Введите тут не ноль!";
                num2_field.style.borderStyle = "solid";
                current_field.innerHTML = "На ноль делить нельзя!";
                return;
            }
            result = number1 / number2;
            break;
        case '*':
            result = number1 * number2;
            break;
    }
    num1_field.style.borderStyle = "dashed";
    num2_field.style.borderStyle = "dashed";
    previous_field.innerHTML = current_field.innerHTML;
    previous_field.style.display = "block";
    current_field.style.display = "block";
    current_field.innerHTML = `${number1} ${operation} ${number2} = ${result}`;
    console.log(number1, number2, operation);
}