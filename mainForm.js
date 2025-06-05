const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const form = document.querySelector("#my-form");
const alertErrorName = document.querySelector("#nameError");
const alertErrorEmail = document.querySelector("#emailError");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function (ev) {
  ev.preventDefault();

  const nameValue = nameInput.value.trim(); //trim remove espaços em branco do início e do fim da string.
  const emailValue = emailInput.value.trim();

  //Tenho que verificar sem os Campos name e email foram preenchidos.

  let errorConfirmed = false;
  let positionArr = emailValue.indexOf("@"); // Verifica sem tem '.' depois do arroba

  if (nameValue === "") {
    alertErrorName.textContent = "Por favor, Preencha o Campo Corretamente";
    alertErrorName.classList.add("error");
    errorConfirmed = true;
  } else {
    alertErrorName.classList.remove("error");
    alertErrorName.textContent = "";
  }

  if (
    emailValue === "" ||
    emailValue.indexOf("@") === -1 ||
    emailValue.indexOf(".",positionArr) === -1 ||
    emailValue.endsWith("@")
  ) {
    alertErrorEmail.textContent = "Por favor, Preencha o Campo Corretamente";
    alertErrorEmail.classList.add("error");
    errorConfirmed = true;
  } else {
    alertErrorEmail.classList.remove("error");
    alertErrorEmail.textContent = "";
  }

  if (errorConfirmed) {
    return; //interrompe qualquer envio do form.
  }
});
