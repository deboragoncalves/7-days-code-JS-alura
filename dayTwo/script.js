window.onload = () => {
    document.querySelector("#message-error").style.display = "none";
    document.querySelector("#message-success").style.display = "none";
}

const sendData = () => {
    validateForm();
}

const validateForm = () => {
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let language = document.querySelector("#language").value;

    !language ? showErrorMessage("Linguagem de programação") :
        !age ? showErrorMessage("Idade") :
            !name ? showErrorMessage("Nome") : showSuccessMessage(language, age, name);

}

// Onchange input

const showErrorMessage = (field) => {
    console.log("entrou erro " + field)
    let errorMessage = `O campo ${field} está inválido`;

    document.querySelector("#message-error").innerHTML = errorMessage;
    document.querySelector("#message-error").style.display = "block";
}

const showSuccessMessage = (language, age, name) => {
    console.log(language)
    let successMessage = `${name}, você tem ${age} anos de idade e está aprendendo a 
    linguagem ${language}`;

    document.querySelector("#message-success").innerHTML = successMessage;
    document.querySelector("#message-success").style.display = "block";
}