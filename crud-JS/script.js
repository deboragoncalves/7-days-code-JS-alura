var username, birthday;
var buttonSave = document.querySelector("#buttonSave");

window.onload = () => {
    hiddenInvalidMessages();
}

const showMessageInvalidName = () => {
    document.querySelector("#invalidName").style.display = "block";
    document.querySelector("#invalidName").innerHTML = "O campo 'Nome' é inválido";
}

const showMessageInvalidBirthday = () => {
    document.querySelector("#invalidBirthday").style.display = "block";
    document.querySelector("#invalidBirthday").innerHTML = "O campo 'Aniversário' é inválido";
}

const hiddenInvalidMessages = () => {
    document.querySelector("#invalidName").style.display = "none";
    document.querySelector("#invalidBirthday").style.display = "none";
}

const changeName = () => {
    username = document.querySelector("#name").value;
}

const changeBirthday = () => {
    birthday = document.querySelector("#birthday").value;
}

const validateBirthday = birthday => {
    let arrayBirthday = birthday.split("-");
    let validBirthday = true;

    if (arrayBirthday.length >= 2) {
        let birthdayDay = parseInt(arrayBirthday[2]);
        let birthdayMonth = parseInt(arrayBirthday[1]) - 1;
        let birthdayYear = parseInt(arrayBirthday[0]);

        let birthdayDate = new Date(birthdayYear, birthdayMonth, birthdayDay);
        
        let currentDay = new Date().getDate();
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        let currentDate = new Date(currentYear, currentMonth, currentDay);

        if (birthdayDate > currentDate) {
            validBirthday = false;
        }
    }

    return validBirthday;
}

const formatBirthday = birthday => {

    let arrayBirthday = birthday.split("-");

    if (arrayBirthday.length >= 2) {
        let birthdayDay = parseInt(arrayBirthday[2]);
        let birthdayMonth = parseInt(arrayBirthday[1]) - 1;
        let birthdayYear = parseInt(arrayBirthday[0]);

        let birthdayDate = new Date(birthdayYear, birthdayMonth, birthdayDay);
        let formatBirthdayDate = birthdayDate.toLocaleDateString("pt-BR");
        return formatBirthdayDate;
    }

}

const validateForm = (username, birthday) => {
    let validForm = true;

    if (username) {
        let regexContainNumber = /[0-9]/;
        let usernameContainNumber = regexContainNumber.test(username);

        if (username.length < 3) {
            validForm = false;
            showMessageInvalidName();
        } else if (username.length >= 120) {
            validForm = false;
            showMessageInvalidName();
        } else if (usernameContainNumber) {
            validForm = false;
            showMessageInvalidName();
        }
    } else {
        validForm = false;
        showMessageInvalidName();      
    }

    if (birthday) {
        // Date.parse() - recebe como parâmetro uma data, e retorna em milissegundos, se não for válida retorna NaN
        // NaN - mes > 12 ou mes < 1

        let validBirthday = Date.parse(birthday);

        if (isNaN(validBirthday)) {
            validForm = false;
            showMessageInvalidBirthday();
        }

        // se data > dataAtual
        validBirthday = validateBirthday(birthday);

        if (!validBirthday) {
            validForm = false;
            showMessageInvalidBirthday();   
        }

    } else {
        validForm = false;
        showMessageInvalidBirthday();
    }

    return validForm;
}

const saveBirthday = () => {
    hiddenInvalidMessages();

    let validForm = validateForm(username, birthday);
    if (!validForm) return;

    let birthdayFormat = formatBirthday(birthday);
    if (!birthdayFormat) return;

    const dataPerson = {
        name: username,
        birthday: birthdayFormat
    }

    // Salvar em localStorage sempre como JSON string
    localStorage.setItem('dataPerson', JSON.stringify(dataPerson));
    showDataPerson();
}

buttonSave.addEventListener("click", saveBirthday);

const showDataPerson = () => {
    // Resgatar com JSON.parse
    const dataPerson = JSON.parse(localStorage.getItem('dataPerson'));

    let containerPerson = document.createElement("div");
    containerPerson.classList.add("container-dislay-flex");

    let namePerson = document.createElement("span");
    namePerson.classList.add("text-margin-right");
    namePerson.innerHTML = dataPerson.name;

    let birthdayPerson = document.createElement("span");
    birthdayPerson.innerHTML = dataPerson.birthday;

    // Adicionar como filho do container
    containerPerson.appendChild(namePerson);
    containerPerson.appendChild(birthdayPerson);

    let containerDataPeople = document.querySelector("#data-people");
    containerDataPeople.appendChild(containerPerson);
}