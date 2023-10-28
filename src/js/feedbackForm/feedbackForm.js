import { validateForm } from './validateForm';
import IMask from 'imask';
import { sendFeedbackForm } from '../http/contactApi';
import { showNotise } from '../notice/showNotise';

const feedbackForm = document.querySelector('.feedback-form');
const name = feedbackForm.querySelector(`.feedback-form__input--name`);
const phone = feedbackForm.querySelector(`.feedback-form__input--phone`);
const email = feedbackForm.querySelector(`.feedback-form__input--email`);
const message = feedbackForm.querySelector(`.feedback-form__input--message`);
const ERRORINPUTCLASS = 'feedback-form__input--error';
const VISUALLYHIDDEN = 'visually-hidden';

const maskOptions = {
  mask: '+375(00) 000-00-00',
  lazy: false,
};

new IMask(phone, maskOptions);

feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const isValid = validateForm(name.value, phone.value, email.value, message.value);

  if (!isValid.name) {
    name.classList.add(ERRORINPUTCLASS);
    name.previousElementSibling.classList.remove(VISUALLYHIDDEN);
  }
  if (!isValid.phone) {
    phone.classList.add(ERRORINPUTCLASS);
    phone.previousElementSibling.classList.remove(VISUALLYHIDDEN);
  }
  if (!isValid.email) {
    email.classList.add(ERRORINPUTCLASS);
    email.previousElementSibling.classList.remove(VISUALLYHIDDEN);
  }
  if (!isValid.message) {
    message.classList.add(ERRORINPUTCLASS);
    message.previousElementSibling.classList.remove(VISUALLYHIDDEN);
  }
  if (isValid.name && isValid.phone && isValid.email && isValid.message) {
    const data = new FormData();

    data.append('name', name.value.trim());
    data.append('phone', phone.value.trim());
    data.append('email', email.value.trim());
    data.append('message', message.value.trim());

    const response = await sendFeedbackForm(data);

    if (response.status === 200) {
      name.value = '';
      phone.value = '';
      email.value = '';
      message.value = '';

      showNotise(200, {title: 'Успех', message: 'Форма успешно отправленна'})
    } else {
      showNotise(400, {title: 'Ошибка', message: 'Что-то пошло не так. Отправьте форму еще раз'})
    }
  }
});

name.addEventListener('input', () => {
  if (name.classList.contains(ERRORINPUTCLASS)) {
    name.classList.remove(ERRORINPUTCLASS);
    name.previousElementSibling.classList.add(VISUALLYHIDDEN);
  }
});

phone.addEventListener('input', () => {
  if (phone.classList.contains(ERRORINPUTCLASS)) {
    phone.classList.remove(ERRORINPUTCLASS);
    phone.previousElementSibling.classList.add(VISUALLYHIDDEN);
  }
});

email.addEventListener('input', () => {
  if (email.classList.contains(ERRORINPUTCLASS)) {
    email.classList.remove(ERRORINPUTCLASS);
    email.previousElementSibling.classList.add(VISUALLYHIDDEN);
  }
});

message.addEventListener('input', () => {
  if (message.classList.contains(ERRORINPUTCLASS)) {
    message.classList.remove(ERRORINPUTCLASS);
    message.previousElementSibling.classList.add(VISUALLYHIDDEN);
  }
});

export default feedbackForm;
