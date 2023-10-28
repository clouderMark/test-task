export const validateForm = (name, phone, email, message) => {
  const namePattern = /^[-а-я]{2,}( [-а-я]{2,}){1,2}$/i;
  const isNameValid = namePattern.test(name.trim());
  const phonePattern = /^\+375\([0-9]{2}\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/i;
  const isPhoneValid = phonePattern.test(phone.trim());
  const emailPattern = /^[-_.a-z]+@([-a-z]+\.){1,2}[a-z]+$/i;
  const isEmailValid = emailPattern.test(email.trim());

  return {
    name: isNameValid,
    phone: isPhoneValid,
    email: isEmailValid,
    message: message.trim() !== '',
  };
};
