
function calculate(a, b, operator) {


    if (operator === "+") {
        return a + b;
    }
    else if (operator === "/") {
        return a / b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else {
        console.log("Invalid operator");
    }

}


function handlecalculate() {
    let display = document.getElementById("result");
    let secondNumber = Number(display.value);

    let num1 = firstNumber;
    let num2 = secondNumber;
    let operator = mojoperator;

    console.log(num1);
    console.log(num2);
    console.log(operator);


    if (num2 === 0 && operator === "/") {
        document.getElementById("result").value = "Cannot divide by zero";
        return;
    }

    let result = calculate(num1, num2, operator);

    console.log("Cislo", num1, operator, num2, "Sa bude rovnat", result);

    console.log(result);
    document.getElementById("result").value = result;

    let historia = document.getElementById("Historia");
    let riadok = num1 + " " + operator + " " + num2 + " = " + result;
    historia.innerHTML += riadok + "<br>";
}

function addNumber(button) {

    let display = document.getElementById("result");
    display.value += button.value;

}


function operator(op) {
    let display = document.getElementById("result");
    firstNumber = Number(display.value);

    mojoperator = op;
    display.value = "";
}

function clearDisplay() {

    document.getElementById("result").value = "";
}







