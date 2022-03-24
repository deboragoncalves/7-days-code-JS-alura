let numberOne = 1;
let stringOne = '1';
let numberThirty = 30;
let stringThirty = '30';
let numberTen = 10;
let stringTen = '10';

const resultEqual = (number, string) => {
    alert(`As variáveis ${number} e ${string} tem o mesmo valor, mas tipos diferentes`);
}

const resultDifferent = (number, string) => {
    alert(`As variáveis ${number} e ${string} não tem o mesmo valor`);
}

const compareTypes = (number, string) => {
    if (number && string) {
        number === string ? resultEqual(number, string) : resultDifferent(number, string);
    } else {
        alert($`As variáveis informadas são inválidas.`);
    }
}

compareTypes(numberOne, stringOne);
compareTypes(numberTen, stringTen);