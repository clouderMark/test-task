import { validateForm } from './validateForm';
import IMask from 'imask';

const feedbackForm = document.querySelector('.feedback-form');
const name = feedbackForm.querySelector(`.feedback-form__input--name`);
const phone = feedbackForm.querySelector(`.feedback-form__input--phone`);
const email = feedbackForm.querySelector(`.feedback-form__input--email`);
const message = feedbackForm.querySelector(`.feedback-form__input--message`);

const maskOptions = {
  mask: '+375(00) 000-00-00',
  lazy: false,
};

new IMask(phone, maskOptions);

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const isValid = validateForm(name.value, phone.value, email.value, message.value);

  if (!isValid.name) {
    name.classList.add('feedback-form__input--error');
  }
  if (!isValid.phone) {
    phone.classList.add('feedback-form__input--error');
  }
  if (!isValid.email) {
    email.classList.add('feedback-form__input--error');
  }
  if (!isValid.message) {
    message.classList.add('feedback-form__input--error');
  }
});

name.addEventListener('input', () => {
  if (name.classList.contains('feedback-form__input--error')) {
    name.classList.remove('feedback-form__input--error');
  }
});

phone.addEventListener('input', () => {
  if (phone.classList.contains('feedback-form__input--error')) {
    phone.classList.remove('feedback-form__input--error');
  }
});

email.addEventListener('input', () => {
  if (email.classList.contains('feedback-form__input--error')) {
    email.classList.remove('feedback-form__input--error');
  }
});

message.addEventListener('input', () => {
  if (message.classList.contains('feedback-form__input--error')) {
    message.classList.remove('feedback-form__input--error');
  }
});

export default feedbackForm;
