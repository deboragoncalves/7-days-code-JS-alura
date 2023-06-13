var userKeyPressed = "";
let wordCorrect = "";
let rightAnswer = false;

let codeKey = "";

let countFirstWord = 0,
    countSecondWord = 0,
    countThirdWord = 0,
    countFourthWord = 0,
    countFifthWord = 0,
    countSixthWord = 0;

let letterClicked = "";
let elementButtonLetter = "";

let userFirstWord = "",
    userSecondWord = "",
    userThirdWord = "",
    userFourthWord = "",
    userFifthWord = "",
    userSixthWord = "";

let buttonsLetters = document.querySelectorAll(".letra-teclado");
buttonsLetters.forEach(buttonLetter => {
    buttonLetter.addEventListener("click", (e) => {
        elementButtonLetter = buttonLetter;
        // pegar letra clickada no teclado
        letterClicked = e.target.value;
        letterClicked = letterClicked.toUpperCase();
        showFirstWord();
    })    
});

window.onload = () => {
    getAllWords();
    getKeyDown();
}

const getKeyDown = () => {
    document.addEventListener("keydown", e => {
        if (rightAnswer) return;
        codeKey = e.code;

        // somente letras, enter ou backspace
        if (codeKey.startsWith("Key") || codeKey == "Backspace" || codeKey == "Delete") {
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
    console.log(wordCorrect);
}

const getWord = arrayWords => {
    //  Math.random() * (max - min) + min
    let arraySize = arrayWords.length - 1;
    let getNumber = Math.random() * (arraySize - 0) + 0;
    // arredondar pra cima
    getNumber = Math.floor(getNumber);
    return arrayWords[getNumber];
}

const showAlert = () => {
    Toastify({
        text: "Congrats, you got it!",
        position: "center",
        style: {
            fontFamily: "Arial, sans-serif",
            background: "#538D4E"
        },
        duration: 3000
    }).showToast();
}

const checkCorrectWord = word => {
    let userWord = word.toUpperCase();
    wordCorrect = wordCorrect.toUpperCase();
    rightAnswer = userWord == wordCorrect;
    if (rightAnswer) showAlert();
    return rightAnswer;
}

const addBackgroundColor = (containerLetters, counter) => {
    let letter = "";

    // ver se letra foi do teclado do usuario ou teclado desenho
    if (!codeKey) {
        letter = letterClicked;
    } else {
        letter = userKeyPressed;
    }

    letter = letter.toUpperCase();
    wordCorrect = wordCorrect.toUpperCase();

    if (wordCorrect[counter] == letter) {
        containerLetters[counter].style.backgroundColor = "#538D4E";
        elementButtonLetter.style.background = "#538D4E";
    } else if (wordCorrect.includes(letter)) {
        containerLetters[counter].style.backgroundColor = "#B59F3B";
        elementButtonLetter.style.background = "#B59F3B";
    } else if (!wordCorrect.includes(letter)) {
        containerLetters[counter].style.backgroundColor = "#585858";
        elementButtonLetter.style.background = "#585858";
    }
}

const showFirstWord = () => {
    let containerLetters = document.querySelectorAll("#primeira-palavra div");
    let keyPressedDelete = userKeyPressed == "Backspace" || userKeyPressed == "Delete";
    let keyPressedNotDelete = userKeyPressed != "Backspace" && userKeyPressed != "Delete";
    
    // deletar ultima letra
    if (keyPressedDelete && containerLetters[countFirstWord]) {
        containerLetters[countFirstWord].textContent = "";
        containerLetters[countFirstWord].style.backgroundColor = "transparent";
        countFirstWord--;
        return;
    }

    // verificar se está certa e ir para proxima palavra
    if (countFirstWord == 5) {
        checkCorrectWord(userFirstWord);

        if (!rightAnswer) {
            showSecondWord();
            return;
        }
        
        return;
    }

    // se todas as letras foram deletadas
    if (!containerLetters[countFirstWord]) {
        containerLetters[countFirstWord] = document.createElement("div");
        containerLetters[countFirstWord].classList.add("letra");
    }

    if (keyPressedNotDelete) {
        // se letra não foi pressionada no teclado do usuário, pegar a letra do teclado desenhado
        if (!codeKey) {
            containerLetters[countFirstWord].textContent = letterClicked;
            userFirstWord += letterClicked;
        } else {
            containerLetters[countFirstWord].textContent = userKeyPressed;
            userFirstWord += userKeyPressed;
        }

        addBackgroundColor(containerLetters, countFirstWord);
        countFirstWord++;
    }
}

const showSecondWord = () => {
    let containerLetters = document.querySelectorAll("#segunda-palavra div");
    let keyPressedDelete = userKeyPressed == "Backspace" || userKeyPressed == "Delete";
    let keyPressedNotDelete = userKeyPressed != "Backspace" && userKeyPressed != "Delete";
    
    if (keyPressedDelete && containerLetters[countSecondWord]) {
        containerLetters[countSecondWord].textContent = "";
        containerLetters[countSecondWord].style.backgroundColor = "transparent";
        countSecondWord--;
        return;
    }

    if (countSecondWord == 5) {
        checkCorrectWord(userSecondWord);

        if (!rightAnswer) {
            showThirdWord();
            return;
        }

        return;
    }

    if (!containerLetters[countSecondWord]) {
        containerLetters[countSecondWord] = document.createElement("div");
        containerLetters[countSecondWord].classList.add("letra");
    }

    if (keyPressedNotDelete) {
        if (!codeKey) {
            containerLetters[countSecondWord].textContent = letterClicked;
            userSecondWord += letterClicked;
        } else {
            containerLetters[countSecondWord].textContent = userKeyPressed;
            userSecondWord += userKeyPressed;
        }
        
        addBackgroundColor(containerLetters, countSecondWord);
        countSecondWord++;
    }
}

const showThirdWord = () => {
    let containerLetters = document.querySelectorAll("#terceira-palavra div");
    let keyPressedDelete = userKeyPressed == "Backspace" || userKeyPressed == "Delete";
    let keyPressedNotDelete = userKeyPressed != "Backspace" && userKeyPressed != "Delete";

    if (keyPressedDelete && containerLetters[countThirdWord]) {
        containerLetters[countThirdWord].textContent = "";
        containerLetters[countThirdWord].style.backgroundColor = "transparent";
        countThirdWord--;
        return;
    }

    if (countThirdWord == 5) {
        checkCorrectWord(userThirdWord);

        if (!rightAnswer) {
            showFourthWord();
            return;
        }

        return;
    }

    if (!containerLetters[countThirdWord]) {
        containerLetters[countThirdWord] = document.createElement("div");
        containerLetters[countThirdWord].classList.add("letra");
    }

    if (keyPressedNotDelete) {
        if (!codeKey) {
            containerLetters[countThirdWord].textContent = letterClicked;
            userThirdWord += letterClicked;
        } else {
            containerLetters[countThirdWord].textContent = userKeyPressed;
            userThirdWord += userKeyPressed;
        }

        addBackgroundColor(containerLetters, countThirdWord);
        countThirdWord++;
    }
}

const showFourthWord = () => {
    let containerLetters = document.querySelectorAll("#quarta-palavra div");
    let keyPressedDelete = userKeyPressed == "Backspace" || userKeyPressed == "Delete";
    let keyPressedNotDelete = userKeyPressed != "Backspace" && userKeyPressed != "Delete";

    if (keyPressedDelete && containerLetters[countFourthWord]) {
        containerLetters[countFourthWord].textContent = "";
        containerLetters[countFourthWord].style.backgroundColor = "transparent";
        countFourthWord--;
        return;
    }

    if (countFourthWord == 5) {
        checkCorrectWord(userFourthWord);

        if (!rightAnswer) {
            showFifthWord();
            return;
        }
        
        return;
    }

    if (!containerLetters[countFourthWord]) {
        containerLetters[countFourthWord] = document.createElement("div");
        containerLetters[countFourthWord].classList.add("letra");
    }

    if (keyPressedNotDelete) {
        if (!codeKey) {
            containerLetters[countFourthWord].textContent = letterClicked;
            userFourthWord += letterClicked;
        } else {
            containerLetters[countFourthWord].textContent = userKeyPressed;
            userFourthWord += userKeyPressed;
        }
        
        addBackgroundColor(containerLetters, countFourthWord);
        countFourthWord++;
    }
}

const showFifthWord = () => {
    let containerLetters = document.querySelectorAll("#quinta-palavra div");
    let keyPressedDelete = userKeyPressed == "Backspace" || userKeyPressed == "Delete";
    let keyPressedNotDelete = userKeyPressed != "Backspace" && userKeyPressed != "Delete";
       
    if (keyPressedDelete && containerLetters[countFifthWord]) {
        containerLetters[countFifthWord].textContent = "";
        containerLetters[countFifthWord].style.backgroundColor = "transparent";
        countFifthWord--;
        return;
    }

    if (countFifthWord == 5) {
        checkCorrectWord(userFifthWord);

        if (!rightAnswer) {
            showSixthWord();
            return;
        }

        return;
    }

    if (!containerLetters[countFifthWord]) {
        containerLetters[countFifthWord] = document.createElement("div");
        containerLetters[countFifthWord].classList.add("letra");
    }

    if (keyPressedNotDelete) {
        if (!codeKey) {
            containerLetters[countFifthWord].textContent = letterClicked;
            userFifthWord += letterClicked;
        } else {
            containerLetters[countFifthWord].textContent = userKeyPressed;
            userFifthWord += userKeyPressed;
        }

        addBackgroundColor(containerLetters, countFifthWord);
        countFifthWord++;
    }

}

const showSixthWord = () => {
    let containerLetters = document.querySelectorAll("#sexta-palavra div");
    let keyPressedDelete = userKeyPressed == "Backspace" || userKeyPressed == "Delete";
    let keyPressedNotDelete = userKeyPressed != "Backspace" && userKeyPressed != "Delete";
    
    if (keyPressedDelete && containerLetters[countSixthWord]) {
        containerLetters[countSixthWord].textContent = "";
        containerLetters[countSixthWord].style.backgroundColor = "transparent";
        countSixthWord--;
        return;
    }

    if (countSixthWord == 5) {
        checkCorrectWord(userSixthWord);
        return;
    }

    if (!containerLetters[countSixthWord]) {
        containerLetters[countSixthWord] = document.createElement("div");
        containerLetters[countSixthWord].classList.add("letra");
    }

    if (keyPressedNotDelete) {
        if (!codeKey) {
            containerLetters[countSixthWord].textContent = letterClicked;
            userSixthWord += letterClicked;
        } else {
            containerLetters[countSixthWord].textContent = userKeyPressed;
            userSixthWord += userKeyPressed;
        }
        
        addBackgroundColor(containerLetters, countSixthWord);
        countSixthWord++;
    }

}

// TODO: Refatorar criando uma só função generica que serve para todas as palavras 
// TODO: Implementar evento Enter no teclado desenhado