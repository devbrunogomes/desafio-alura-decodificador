//HTML elements and Values as variables
const textarea = document.querySelector("#textInput");
const exibitionWithoutMesage = document.querySelector("#imgSpanWrapper");
const textExibitionDiv = document.querySelector("#textToCopyAndButton");
const textExibitionParagraph = document.querySelector("#textExibition");

//Function which will be called to encrypt the user text
function toEncryptTheUserText() {
  //validation process with an external function
  let textToBeValidated = textarea.value;
  const textNormalizated = validateText(textToBeValidated);

  //encryptation process
  let textWithCharacterChanged = changingCharacters(textNormalizated);

  //displaying the encrypted text in the field on HTML
  exibitionWithoutMesage.style.display = "none";
  textExibitionDiv.style.display = "flex";
  textExibitionParagraph.innerHTML = textWithCharacterChanged;

  console.log(textWithCharacterChanged);
}

//Function which will be called to validate the user text, changing the strangers characters
function validateText(textToBeValidated) {
  const textInValidator = textToBeValidated
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (textInValidator.length < 2) {
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
