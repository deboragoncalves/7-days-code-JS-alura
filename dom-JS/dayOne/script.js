const saveBirthday = e => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let birthday = document.querySelector("#birthday").value;
    console.log("Nome: " + name);
    console.log("Data de nascimento: " + birthday);
}