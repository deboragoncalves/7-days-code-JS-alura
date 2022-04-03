var finalMessage = document.querySelector("#final-message");
var otherTechs;

window.onload = () => {
  finalMessage.style.display = "none";
};

const changeOtherTechs = (textArea) => {
  otherTechs = textArea.value;
}

const sendAnswers = () => {
  if (!validateForm()) {
    finalMessage.style.display = "block";
    finalMessage.innerHTML = "Os campos estão inválidos. Tente novamente";
    finalMessage.style.color = "red";
    return;
  }

  finalMessage.style.display = "none";
  showBackFrontArea();
}

const showBackFrontArea = () => {
  finalMessage.style.display = "none";

  let containerFrontend = document.querySelector(".frontend-area");
  let containerBackend = document.querySelector(".backend-area");

  containerFrontend.style.display = "none";
  containerBackend.style.display = "none";
  
  let inputFirstArea = document.querySelector(
    'input[name="firstArea"]:checked'
  );

  if (inputFirstArea) {
    let firstArea = inputFirstArea.value.toUpperCase();

    if (firstArea == "FRONTEND") {
      containerFrontend.style.display = "block";
      
      if (!validateFrontArea()) {
        finalMessage.style.display = "block";
        finalMessage.innerHTML = "Os campos estão inválidos. Tente novamente";
        finalMessage.style.color = "red";
        return;
      }

      let inputAreaFrontend = document.querySelector(
        'input[name="areaFrontend"]:checked'
      );

      showFinalMessage(inputAreaFrontend.value);
    
    } else if (firstArea == "BACKEND") {
      containerBackend.style.display = "block";
      validateBackendArea();

      if (!validateBackendArea()) {
        finalMessage.style.display = "block";
        finalMessage.innerHTML = "Os campos estão inválidos. Tente novamente";
        finalMessage.style.color = "red";
        return;
      }

      let inputAreaBackend = document.querySelector(
        'input[name="areaBackend"]:checked'
      );

      showFinalMessage(inputAreaBackend.value);
    }

  }
}

const validateFrontArea = () => {
  let validForm = true;

  let inputAreaFrontend = document.querySelector(
    'input[name="areaFrontend"]:checked'
  );

  if (!inputAreaFrontend) {
    validForm = false;
  } else if (!inputAreaFrontend.value) {
    validForm = false;
  }

  return validForm;
}

const validateBackendArea = () => {
  let validForm = true;

  let inputAreaBackend = document.querySelector(
    'input[name="areaBackend"]:checked'
  );

  if (!inputAreaBackend) {
    validForm = false;
  } else if (!inputAreaBackend.value) {
    validForm = false;
  }

  return validForm;
}

const validateForm = () => {
  let validForm = true;
  let inputFirstArea = document.querySelector(
    'input[name="firstArea"]:checked'
  );
  let inputSecondArea = document.querySelector(
    'input[name="secondArea"]:checked'
  );

  if (!inputFirstArea || !inputSecondArea || !otherTechs) {
    validForm = false;
  } else if (!inputFirstArea.value || !inputSecondArea.value) {
    validForm = false;
  }

  return validForm;
}

const showFinalMessage = languageArea => {
  finalMessage.style.display = "none";

  let inputFirstArea = document.querySelector(
    'input[name="firstArea"]:checked'
  );
  let inputSecondArea = document.querySelector(
    'input[name="secondArea"]:checked'
  );

  finalMessage.innerHTML = "Próximos passos: ";
  finalMessage.innerHTML += `Você escolheu estudar ${inputFirstArea.value}, se especializando na linguagem
  ${languageArea}. Posteriormente, pretende ${inputSecondArea.value}, nas seguintes tecnologias: ${otherTechs}`;

  finalMessage.style.display = "block";
  finalMessage.style.color = "black";
}