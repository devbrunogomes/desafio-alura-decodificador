//HTML elements and Values as variables
const textarea = document.querySelector("#textInput");

//Function which will be called to encrypt the user text
function toEncryptTheUserText() {
  //validation process with an external function
  let textToBeValidated = textarea.value;
  const textNormalizated = validateText(textToBeValidated);

  //encryptation process
  let textWithCharacterChanged = changingCharacters(textNormalizated);

  console.log(textWithCharacterChanged);
}

//Function which will be called to validate the user text, changing the strangers characters
function validateText(textToBeValidated) {
  const textInValidator = textToBeValidated
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (textInValidator.length < 0) {
    alert("Por favor insira um texto válido");
    textarea.focus();
    return;
  }

  return textInValidator;
}

//Function which will be called to change characters from user text, after validation
function changingCharacters(textToBeChanged) {
  const textInProcessOfChange = textToBeChanged.split("").map((lether) => {
    if (lether === "a") return "ai";
    if (lether === "e") return "enter";
    if (lether === "i") return "imes";
    if (lether === "o") return "ober";
    if (lether === "u") return "ufat";
    return lether;
  });

  return textInProcessOfChange.join("");
}
