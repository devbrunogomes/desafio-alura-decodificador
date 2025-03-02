//HTML elements and Values as variables
const textarea = document.querySelector("#textInput");
const noResultArea = document.querySelector("#no-result-area");
const resultArea = document.querySelector("#result-area");
const resultExibitionParagraph = document.querySelector("#result-exibition");

//Function which will be called to encrypt the user text
function toEncryptTheUserText() {
  //validation process with an external function
  let textToBeValidated = textarea.value;
  const textValidatedToBeEncrypted = validateText(textToBeValidated);

  //encryptation process
  let textWithCharacterChanged = encryptingCharacters(
    textValidatedToBeEncrypted
  );

  //displaying the encrypted text in the field on HTML
  noResultArea.style.display = "none";
  resultArea.style.display = "flex";
  resultExibitionParagraph.innerHTML = textWithCharacterChanged;

  //clearing the text field after encryption
  textarea.value = "";
}

//Function which will be called to validate the user text, changing the strangers characters
function validateText(textToBeValidated) {
  const textInValidator = textToBeValidated.trim();
  // .toLowerCase()
  // .normalize("NFD")
  // .replace(/[\u0300-\u036f]/g, "");

  const regexToValidateText = /^[a-z\s]+$/;

  if (!regexToValidateText.test(textInValidator)) {
    alert("Por favor insira um texto válido");
    textarea.focus();
    return;
  }

  return textInValidator;
}

//Function which will be called to encrypt characters from user text, after validation
function encryptingCharacters(textToBeEncrypted) {
  const textInEncryptingProcess = textToBeEncrypted.split("").map((lether) => {
    if (lether === "a") return "ai";
    if (lether === "e") return "enter";
    if (lether === "i") return "imes";
    if (lether === "o") return "ober";
    if (lether === "u") return "ufat";
    return lether;
  });

  return textInEncryptingProcess.join("");
}

//Function which will be called to decrypt the user text
function toDecryptTheUserText() {
  const userTextToBeDecrypted = textarea.value;
  const textValidatedToBeDecrypted = validateText(userTextToBeDecrypted);
  let textDecrypted = decryptingCharacters(textValidatedToBeDecrypted);

  //displaying the encrypted text in the field on HTML
  noResultArea.style.display = "none";
  resultArea.style.display = "flex";
  resultExibitionParagraph.innerHTML = textDecrypted;

  //clearing the text field after encryption
  textarea.value = "";
}

//Function which will be called to decrypt characters from user text, after validation
function decryptingCharacters(textToBeDecrypted) {
  let textInDecryptingProcess = textToBeDecrypted
    .replace("enter", "e")
    .replace("imes", "i")
    .replace("ai", "a")
    .replace("ober", "o")
    .replace("ufat", "u");

  // Validation process with recursion method
  if (
    textInDecryptingProcess.indexOf("enter") !== -1 ||
    textInDecryptingProcess.indexOf("imes") !== -1 ||
    textInDecryptingProcess.indexOf("ai") !== -1 ||
    textInDecryptingProcess.indexOf("ober") !== -1 ||
    textInDecryptingProcess.indexOf("ufat") !== -1
  ) {
    return decryptingCharacters(textInDecryptingProcess);
  } else {
    return textInDecryptingProcess;
  }
}

//Function which will be called to copy the text from result area
function toCopyTheTextFromResultArea() {
  const textToBeCopied = resultExibitionParagraph.innerHTML;

  navigator.clipboard.writeText(textToBeCopied).then(
    () => {
      alert("Texto copiado com sucesso!");
    },
    (err) => {
      console.error("Error ao copiar texto: ", err);
      alert("Não foi possível copiar o texto!");
    }
  );

  //Clearing the result area after copying the text
  resultArea.style.display = "none";
  noResultArea.style.display = "flex";
}
