//HTML elements and Values as variables
const textarea = document.querySelector('#textInput');

//
function toEncryptTheUserText() {
  let textToBeEncrypted = textarea.value.trim().toLowerCase();

  if (textToBeEncrypted.length < 5) {
    alert('Por favor insira um texto válido')
  }
  console.log(textToBeEncrypted)
}

function validateText(textToBeValidated) {

}

