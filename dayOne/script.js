let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

const resultEqualValue = (firstValue, secondValue) => {
    alert(`As variáveis ${firstValue} e ${secondValue} tem o mesmo valor, mas tipos diferentes`);
}

const resultDifferentValue = (firstValue, secondValue) => {
    alert(`As variáveis ${firstValue} e ${secondValue} não tem o mesmo valor`);
}

const compareTypeValue = (firstValue, secondValue) => {
    if (firstValue && secondValue) {
        let differentType = firstValue !== secondValue && firstValue == secondValue;
        let differentValue = firstValue != secondValue;

        differentType ? resultEqualValue(firstValue, secondValue) :
        differentValue ? resultDifferentValue(firstValue, secondValue) : null; 
    } else {
        alert($`As variáveis informadas são inválidas.`);
    }
}

compareTypeValue(numberOne, stringOne);
compareTypeValue(numberThirty, 40);