const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');


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


document.addEventListener('DOMContentLoaded', getInfo);

function getInfo() {
  const currentLocalStorageData = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (currentLocalStorageData) {
    inputEl.value = currentLocalStorageData.email;
    textareaEl.value = currentLocalStorageData.message;
  }
}


form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (inputEl.value || textareaEl.value) {
    let consoleObj = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(consoleObj);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  } else {
    return;
  }
}
