window.onload = () => {
    getAllWords();
}

const getAllWords = async () => {
    let arrayWords = await fetch("./words-list.json")
        .then(response => response.json())
        .then(response => response.words)
        .catch(error => console.log(error));
    
    getWord(arrayWords);
    console.log(arrayWords);
}

const getWord = arrayWords => {
    //  Math.random() * (max - min) + min
    let arraySize = arrayWords.length - 1;
    let getNumber = Math.random() * (arraySize - 0) + 0;
    // arredondar
    getNumber = Math.floor(getNumber);
    console.log(getNumber);
    console.log(arrayWords[getNumber]);

    return arrayWords[getNumber];
}