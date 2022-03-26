var userSpeciality, nextSteps, frontendLanguage, backendLanguage;
var languages = new Array();

window.onload = () => {
  document.querySelector("#final-message").style.display = "none";
  startGame();
};

const startGame = () => {
  userSpeciality = prompt(
    "Em qual área você deseja de especializar: Front-end ou Back-end?"
  );

  if (!userSpeciality) {
    alert("Resposta inválida");
    return;
  } else if (
    !userSpeciality.toUpperCase().includes("FRONT") &&
    !userSpeciality.toUpperCase().includes("BACK")
  ) {
    alert("Resposta inválida");
    return;
  }

  secondQuestion(userSpeciality);
};

const secondQuestion = (userSpeciality) => {
  if (userSpeciality.toUpperCase().includes("FRONT")) {
    frontendLanguage = prompt(
      "Qual linguagem você deseja aprender: React ou Vue?"
    );

    if (!frontendLanguage) {
      alert("Resposta inválida");
      return;
    } else if (
      !frontendLanguage.toUpperCase().includes("REACT") &&
      !frontendLanguage.toUpperCase().includes("VUE")
    ) {
      alert("Resposta inválida");
      return;
    }
  } else if (userSpeciality.toUpperCase().includes("BACK")) {
    backendLanguage = prompt(
      "Qual linguagem você deseja aprender: C# ou Java?"
    );

    if (!backendLanguage) {
      alert("Resposta inválida");
      return;
    } else if (
      !backendLanguage.toUpperCase().includes("C#") &&
      !backendLanguage.toUpperCase().includes("JAVA")
    ) {
      alert("Resposta inválida");
      return;
    }
  }

  thirdQuestion();
};

const thirdQuestion = () => {
  nextSteps = prompt(
    "Você deseja continuar como: FRONTEND ou BACKEND, ou se tornar um FULLSTACK?"
  );

  if (!nextSteps) {
    alert("Resposta inválida");
    return;
  } else if (
    !nextSteps.toUpperCase().includes("FRONT") &&
    !nextSteps.toUpperCase().includes("BACK") &&
    !nextSteps.toUpperCase().includes("FULLSTACK")
  ) {
    alert("Resposta inválida");
    return;
  }

  fourthQuestion();
};

const fourthQuestion = () => {
  let language;

  language = prompt("Qual linguagem você deseja aprender?");

  while (language.length > 0) {
      language = prompt("Qual linguagem você deseja aprender?");
      languages.push(language);
  }

  showFinalMessage(userSpeciality, frontendLanguage, backendLanguage, nextSteps, languages);
};

const showFinalMessage = (userSpeciality, frontendLanguage, backendLanguage, nextSteps, languages) => {
    let finalMessage = `Fim do jogo. Você deseja se especializar na área de ${userSpeciality}`;

    if (userSpeciality.toUpperCase().includes("FRONT")) {
        finalMessage += `, através da linguagem ${frontendLanguage}.`;
    } else if (userSpeciality.toUpperCase().includes("BACK")) {
        finalMessage += `, através da linguagem ${backendLanguage}.`;
    }

    if (nextSteps.toUpperCase().includes("FULLSTACK")) {
        finalMessage += ` Posteriormente, deseja se tornar um desenvolvedor generalista, se tornando um ${nextSteps}.`;
    }

    let elementFinalMessage = document.querySelector("#final-message");
    elementFinalMessage.style.display = "block";
    elementFinalMessage.innerHTML = finalMessage;
}

// TODO: refatorar usando inputs