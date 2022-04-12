var username, birthday;
var buttonSave = document.querySelector("#buttonSave");

const changeName = () => {
    username = document.querySelector("#name").value;
}

const changeBirthday = () => {
    birthday = document.querySelector("#birthday").value;
}

const saveBirthday = () => {
    console.log(`Nome: ${username}`);
    console.log(`Aniversário: ${birthday}`);
}

buttonSave.addEventListener("click", saveBirthday);
