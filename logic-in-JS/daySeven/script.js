var textResult = document.querySelector("#text-result");
var numberOne, numberTwo, result;

window.onload = () => {
    textResult.style.display = "none";
}

const changeNumberOne = () => {
    numberOne = document.querySelector("#numberOne").value;
}

const changeNumberTwo = () => {
    numberTwo = document.querySelector("#numberTwo").value;
}

const resultOperation = () => {

    if (!validateFields()) {
        return;
    }

    textResult.innerHTML = "";
    textResult.style.display = "none";

    let checkedOperation = document.querySelector('input[name="operation"]:checked').value;
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);

    checkedOperation == "Soma" ? sumOperation(numberOne, numberTwo) :
        checkedOperation == "Subtração" ? subOperation(numberOne, numberTwo) :
            checkedOperation == "Multiplicação" ? mutiplyOperation(numberOne, numberTwo) :
                checkedOperation == "Divisão" ? divisionOperation(numberOne, numberTwo) : null;
    
    showResult(checkedOperation, result);
}

const sumOperation = (numberOne, numberTwo) => {
    result = 0;
    result = numberOne + numberTwo;
}

const subOperation = (numberOne, numberTwo) => {
    result = 0;
    result = numberOne - numberTwo;
}

const mutiplyOperation = (numberOne, numberTwo) => {
    result = 0;
    result = numberOne * numberTwo;
}

const divisionOperation = (numberOne, numberTwo) => {
    result = 0;
    result = numberOne / numberTwo;
}

const showResult = (checkedOperation, resultOperation) => {
    resultOperation = Math.floor(resultOperation);
    
    textResult.style.color = "black";
    textResult.innerHTML = `O resultado da operação de ${checkedOperation.toUpperCase()} é: ${resultOperation}`;
    textResult.style.display = "block";
}

const validateFields = () => {
    let valid = true;

    if (!numberOne || !numberTwo) {
        textResult.innerHTML = "Os valores informados são inválidos";
        textResult.style.color = "red";
        textResult.style.display = "block";
        valid = false;
    }

    let checkedOperation = document.querySelector('input[name="operation"]:checked');

    if (!checkedOperation) {
        textResult.innerHTML = "Selecione a operação desejada.";
        textResult.style.color = "red";
        textResult.style.display = "block";
        valid = false;
    }

    return valid;
}