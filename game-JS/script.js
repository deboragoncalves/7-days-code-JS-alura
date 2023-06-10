var userKeyPressed = "";
let wordCorrect = "";

let countFirstWord = 0,
    countSecondWord = 0,
    countThirdWord = 0,
    countFourthWord = 0,
    countFifthWord = 0,
    countSixthWord = 0;

let userFirstWord = "",
    userSecondWord = "",
    userThirdWord = "",
    userFourthWord = "",
    userFifthWord = "",
    userSixthWord = "";

window.onload = () => {
    getAllWords();
    getKeyDown();
}

const getKeyDown = () => {
    document.addEventListener("keydown", e => {
        let codeKey = e.code;

        // somente letras, enter ou backspace
        if (codeKey.startsWith("Key") || codeKey == "Backspace") {
            if (countSixthWord >= 5) return;
            userKeyPressed = e.key;
            showFirstWord();
        }
    });
}

const getAllWords = async () => {
    let arrayWords = await fetch("./words-list.json")
        .then(response => response.json())
        .then(response => response.words)
        .catch(error => console.log(error));
    
    wordCorrect = getWord(arrayWords);
}

const getWord = arrayWords => {
    //  Math.random() * (max - min) + min
    let arraySize = arrayWords.length - 1;
    let getNumber = Math.random() * (arraySize - 0) + 0;
    // arredondar pra cima
    getNumber = Math.floor(getNumber);
    return arrayWords[getNumber];
}

const checkCorrectWord = word => {
    let userWord = word.toUpperCase();
    wordCorrect = wordCorrect.toUpperCase();
    return userWord == wordCorrect;
}

const showFirstWord = () => {
    let containerLetters = document.querySelectorAll("#primeira-palavra div");

    // deletar ultima letra
    if (userKeyPressed == "Backspace" && containerLetters[countFirstWord]) {
        containerLetters[countFirstWord].textContent = "";
        countFirstWord--;
        return;
    }

    // verificar se está certa
    if (userFirstWord.length == 5) {
        checkCorrectWord(userFirstWord);
    }
    
    // proxima palavra
    if (countFirstWord >= 5) {
        showSecondWord();
        return;
    } 

    // se todas as letras foram deletadas
    if (!containerLetters[countFirstWord]) {
        containerLetters[countFirstWord] = document.createElement("div");
        containerLetters[countFirstWord].classList.add("letra");
    }

    if (userKeyPressed != "Backspace") {
        containerLetters[countFirstWord].textContent = userKeyPressed;
        userFirstWord += userKeyPressed;
        countFirstWord++;
    }
}

const showSecondWord = () => {
    let containerLetters = document.querySelectorAll("#segunda-palavra div");

    if (userKeyPressed == "Backspace" && containerLetters[countSecondWord]) {
        containerLetters[countSecondWord].textContent = "";
        countSecondWord--;
        return;
    }

    if (userSecondWord.length == 5) {
        checkCorrectWord(userSecondWord);
    }

    if (countSecondWord >= 5) {
        showThirdWord();
        return;
    } 

    if (!containerLetters[countSecondWord]) {
        containerLetters[countSecondWord] = document.createElement("div");
        containerLetters[countSecondWord].classList.add("letra");
    }

    if (userKeyPressed != "Backspace") {
        containerLetters[countSecondWord].textContent = userKeyPressed;
        userSecondWord += userKeyPressed;
        countSecondWord++;
    }
}

const showThirdWord = () => {
    let containerLetters = document.querySelectorAll("#terceira-palavra div");

    if (userKeyPressed == "Backspace" && containerLetters[countThirdWord]) {
        containerLetters[countThirdWord].textContent = "";
        countThirdWord--;
        return;
    }

    if (userThirdWord.length == 5) {
        checkCorrectWord(userThirdWord);
    }

    if (countThirdWord >= 5) {
        showFourthWord();
        return;
    } 

    if (!containerLetters[countThirdWord]) {
        containerLetters[countThirdWord] = document.createElement("div");
        containerLetters[countThirdWord].classList.add("letra");
    }

    if (userKeyPressed != "Backspace") {
        containerLetters[countThirdWord].textContent = userKeyPressed;
        userThirdWord += userKeyPressed;
        countThirdWord++;
    }
}

const showFourthWord = () => {
    let containerLetters = document.querySelectorAll("#quarta-palavra div");

    if (userKeyPressed == "Backspace" && containerLetters[countFourthWord]) {
        containerLetters[countFourthWord].textContent = "";
        countFourthWord--;
        return;
    }

    if (userFourthWord.length == 5) {
        checkCorrectWord(userFourthWord);
    }

    if (countFourthWord >= 5) {
        showFifthWord();
        return;
    }

    if (!containerLetters[countFourthWord]) {
        containerLetters[countFourthWord] = document.createElement("div");
        containerLetters[countFourthWord].classList.add("letra");
    }

    if (userKeyPressed != "Backspace") {
        containerLetters[countFourthWord].textContent = userKeyPressed;
        userFourthWord += userKeyPressed;
        countFourthWord++;
    }
}

const showFifthWord = () => {
    let containerLetters = document.querySelectorAll("#quinta-palavra div");

    if (userKeyPressed == "Backspace" && containerLetters[countFifthWord]) {
        containerLetters[countFifthWord].textContent = "";
        countFifthWord--;
        return;
    }

    if (userFifthWord.length == 5) {
        checkCorrectWord(userFifthWord);
    }

    if (countFifthWord >= 5) {
        showSixthWord();
        return;
    }

    if (!containerLetters[countFifthWord]) {
        containerLetters[countFifthWord] = document.createElement("div");
        containerLetters[countFifthWord].classList.add("letra");
    }

    if (userKeyPressed != "Backspace") {
        containerLetters[countFifthWord].textContent = userKeyPressed;
        userFifthWord += userKeyPressed;
        countFifthWord++;
    }

}

const showSixthWord = () => {
    let containerLetters = document.querySelectorAll("#sexta-palavra div");

    if (userKeyPressed == "Backspace" && containerLetters[countSixthWord]) {
        containerLetters[countSixthWord].textContent = "";
        countSixthWord--;
        return;
    }

    if (userSixthWord.length == 5) {
        checkCorrectWord(userSixthWord);
    }

    if (countSixthWord >= 5) {
        return;
    }

    if (!containerLetters[countSixthWord]) {
        containerLetters[countSixthWord] = document.createElement("div");
        containerLetters[countSixthWord].classList.add("letra");
    }

    if (userKeyPressed != "Backspace") {
        containerLetters[countSixthWord].textContent = userKeyPressed;
        userSixthWord += userKeyPressed;
        countSixthWord++;
    }

}

// TODO: Refatorar criando uma só função generica que serve para todas as palavras 