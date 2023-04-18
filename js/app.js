
//container elements
const outputEmptyContainer = document.querySelector('.encript__output-div'); //empty state
const outputMessageContainer = document.querySelector('.encript__output-message'); //message

// inputs
const inputMessage = document.querySelector('.encript__input-input');
const outputMessage = document.querySelector('.output_message');
const outputMessage2 = document.querySelector('.output__description');

const imageElement = document.querySelector('.output__img');
const outputTitle = document.querySelector('.output__title')
const alertContainer = document.querySelector('.input-alert');

// buttons
const encriptBtn = document.querySelector('#encrypt');
const desencriptBtn = document.querySelector('#decrypt');
const copyBtn = document.querySelector('#copy');


const KEY_VALUE = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

// Generic method encrypt message
const encryptMethod = (message) => {
  return message.split("").map(character => {
    if (KEY_VALUE[character] !== undefined) {
      return KEY_VALUE[character];
    }
    return character;
  }).join("");
}

// Generic method decrypt message
const decryptMethod = (message) => {
  let decryptMessage = "";

  for (let i = 0; i < message.length; i++) {
    let character = message[i];

    if (KEY_VALUE[character] !== undefined) {
      let key = KEY_VALUE[character];
      let keyHidenInText = message.slice(i, i + key.length);

      if (keyHidenInText === key) {
        i = i + (key.length - 1);
      }
    }
    decryptMessage += character;
  }
  return decryptMessage;
}

//conditional messages info errors
const typeAlert = {
  emptyMessage: 'El campo no puede estar vació',
  specialCharacters: 'El emsanje no puede contener caracteres especiales'
}

//generic method encrypt or decrypt
const encryptDecryptMethod = (method) => {

  const regex = /^[a-zA-Z\s]*$/;
  const message = inputMessage.value.trim();

  if (message === '') {
    outputTitle.innerText = typeAlert.emptyMessage;
  } else if (!regex.test(message)) {
    outputTitle.innerText = typeAlert.specialCharacters;
  }

  outputTitle.style.visibility = 'hidden';
  outputMessage2.innerText = method(message);
  imageElement.style.visibility = 'hidden';
}


const encryptMessage = () => {
  encryptDecryptMethod(encryptMethod)
}

const decryptMessage = () => {
  encryptDecryptMethod(decryptMethod)
}


const copyMessage = () => {
  const message = outputMessage2.innerText;
  navigator.clipboard.writeText(message);
  alert('mensaje copiado ' + message);
}


encriptBtn.addEventListener('click', encryptMessage);
desencriptBtn.addEventListener('click', decryptMessage);
copyBtn.addEventListener('click', copyMessage);














