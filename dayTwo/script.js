var username, age, language;

window.onload = () => {
    document.querySelector("#message-error").style.display = "none";
    document.querySelector("#message-success").style.display = "none";
}

const changeNameValue = () => {
    username = document.querySelector("#name").value;
}

const changeAgeValue = () => {
    age = document.querySelector("#age").value;
}

const changeLanguageValue = () => {
    language = document.querySelector("#language").value;
}

const validateForm = () => {
    !language ? showErrorMessage("Linguagem de programação") :
        !age ? showErrorMessage("Idade") :
            !username ? showErrorMessage("Nome") : showSuccessMessage(language, username, age);
}

const showErrorMessage = (field) => {
    let errorMessage = `O campo ${field} está inválido`;

    document.querySelector("#message-error").innerHTML = errorMessage;
    document.querySelector("#message-error").style.display = "block";
}

const showSuccessMessage = (language, username, age) => {
    let successMessage = `${username}, você tem ${age} anos de idade e está aprendendo a 
    linguagem ${language}`;

    document.querySelector("#message-success").innerHTML = successMessage;
    document.querySelector("#message-success").style.display = "block";
    document.querySelector("#message-error").style.display = "none";
}