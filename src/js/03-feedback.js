const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);

function handleInput(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;

  const currentInfo = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(currentInfo));
}

const curJsonLocalStorageData = localStorage.getItem('feedback-form-state');
currentLocalStorageData = JSON.parse(curJsonLocalStorageData);

document.addEventListener('DOMContentLoaded', getInfo);

function getInfo(event) {
  inputEl = document.querySelector('input');
  textareaEl = document.querySelector('textarea');

  if (curJsonLocalStorageData) {
    inputEl.value = currentLocalStorageData.email;
    textareaEl.value = currentLocalStorageData.message;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(currentLocalStorageData);
  form.reset();
  localStorage.clear();
}
