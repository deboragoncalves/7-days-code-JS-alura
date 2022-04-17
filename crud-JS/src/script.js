var username, birthday;
var buttonSave = document.querySelector("#buttonSave");
var buttonEdit = document.querySelector("#buttonEdit");

window.onload = () => {
    hiddenInvalidMessages();
    buttonEdit.style.display = "none";
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

    cleanInputs();
}

buttonSave.addEventListener("click", saveBirthday);

const editDataPerson = containerPerson => {

    let spanContainerPerson = containerPerson.querySelectorAll("span");
    spanContainerPerson[0].textContent = username;

    let birthdayFormat = formatBirthday(birthday);
    if (!birthdayFormat) return;
    spanContainerPerson[1].textContent = birthdayFormat;

    cleanInputs();
    buttonEdit.style.marginLeft = "10px";
    buttonSave.style.display = "block";
}

const editBirthday = containerPerson => {
    let spanContainerPerson = containerPerson.querySelectorAll("span");
    let namePerson = spanContainerPerson[0].textContent;
    let birthdayPerson = spanContainerPerson[1].textContent;

    // Preencher inputs
    document.querySelector("#name").value = namePerson;
    document.querySelector("#birthday").value = birthdayPerson;

    buttonEdit.style.display = "block";
    buttonSave.style.display = "none";

    buttonEdit.addEventListener("click", () => {
        editDataPerson(containerPerson);
    })
}

const deleteBirthday = containerPerson => {
    let containerDataPeople = document.querySelector("#data-people");
    containerDataPeople.removeChild(containerPerson);
}

const addTitles = containerDataPeople => {
    let containerTitles = document.createElement("div");
    containerTitles.classList.add("container-dislay-flex");

    let titleName = document.createElement("span");
    titleName.innerHTML = "Nome";
    titleName.classList.add("name-person");
    titleName.classList.add("text-bold");
    
    let titleBirthday = document.createElement("span");
    titleBirthday.innerHTML = "Aniversário";
    titleBirthday.classList.add("text-bold");
    titleBirthday.classList.add("birthday-person");

    let titleActions = document.createElement("span");
    titleActions.innerHTML = "Ações";
    titleActions.classList.add("text-bold");

    containerTitles.appendChild(titleName);
    containerTitles.appendChild(titleBirthday);
    containerTitles.appendChild(titleActions);

    containerDataPeople.appendChild(containerTitles);
}

const showDataPerson = () => {
    // Resgatar com JSON.parse
    const dataPerson = JSON.parse(localStorage.getItem('dataPerson'));

    let containerPerson = document.createElement("div");
    containerPerson.classList.add("container-dislay-flex");

    let containerDataPeople = document.querySelector("#data-people");
    let firstChildDataPeople = containerDataPeople.firstChild;

    if (!firstChildDataPeople) {
        addTitles(containerDataPeople);
    }

    let namePerson = document.createElement("span");
    namePerson.classList.add("name-person");
    namePerson.innerHTML = dataPerson.name;

    let birthdayPerson = document.createElement("span");
    birthdayPerson.classList.add("birthday-person");
    birthdayPerson.innerHTML = dataPerson.birthday;

    let imageEditBirthday = document.createElement("img");
    imageEditBirthday.src = "images/image-edit.svg";
    imageEditBirthday.alt = "Editar dados da pessoa";
    imageEditBirthday.classList.add("button-edit-birthday");
    imageEditBirthday.addEventListener("click", () => {

        // Passar como parâmetro o container
        editBirthday(containerPerson);

    });

    let imageDeleteBirthday = document.createElement("img");
    imageDeleteBirthday.src = "images/image-delete.svg";
    imageDeleteBirthday.alt = "Deletar dados da pessoa";
    imageDeleteBirthday.classList.add("button-delete-birthday");
    imageDeleteBirthday.addEventListener("click", () => {

        deleteBirthday(containerPerson);

    });

    // Adicionar como filho do container
    containerPerson.appendChild(namePerson);
    containerPerson.appendChild(birthdayPerson);
    containerPerson.appendChild(imageEditBirthday);
    containerPerson.appendChild(imageDeleteBirthday);

    containerDataPeople.appendChild(containerPerson);
}

const cleanInputs = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#birthday").value = "";
}

/* TODO: 
- ao editar, preencher campo da data 
- layout responsivo
*/