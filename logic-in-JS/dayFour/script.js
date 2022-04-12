var userNumber, trying = 1;

window.onload = () => {
    document.querySelector("#message").style.display = "none";
}

const changeNumber = () => {
    userNumber = document.querySelector("#number").value;
}

const startGame = () => {
    let messageElement = document.querySelector("#message");
    let number = Math.floor(Math.random(1, 11) * 10);

    while (trying <= 3) {

        messageElement.style.display = "none";

        if (userNumber != number) {
            messageElement.innerHTML = `Não foi dessa vez. Tente novamente.`;
            messageElement.style.color = "red";
            messageElement.style.display = "block";
        } else {
            messageElement.innerHTML = `Parabéns, você acertou! A resposta é ${number}`;
            messageElement.style.color = "black";  
            messageElement.style.display = "block";
        }

        if (trying == 3) {
            endGame(number);
        }

        trying++;

    }
}

const endGame = answer => {
    let messageElement = document.querySelector("#message");
    messageElement.innerHTML = `Fim do jogo. A resposta é ${answer}`;
    messageElement.style.color = "red";  
    messageElement.style.display = "block";
    document.querySelector("#number").disabled = true;
    document.querySelector("#buttonSend").disabled = true; 
}

// TODO: três tentativas