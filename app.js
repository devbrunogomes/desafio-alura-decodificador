//HTML elements and Values as variables
const textarea = document.querySelector("#textInput");

//Function which will be called to encrypt the user text
function toEncryptTheUserText() {
  let textToBeValidated = textarea.value;
  const textNormalizated = validateText(textToBeValidated);

  console.log(textNormalizated);
}

//Function which will be called to validate the user text, changing the strangers characters
function validateText(textToBeValidated) {
  const textInValidator = textToBeValidated
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (textInValidator.length < 5) {
    alert("Por favor insira um texto válido");
    textarea.focus();
    return;
  }


  return textInValidator;
}
