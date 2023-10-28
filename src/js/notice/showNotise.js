const SUCCESS = 'notice--success';
const ERROR = 'notice--error';
const VISUALLYHIDDEN = 'visually-hidden';
const noticeShownFor = 4000;

export const showNotise = (code = 200, content) => {
  const notice = document.querySelector('.notice');
  const title = notice.querySelector('.notice__title');
  const message = notice.querySelector('.notice__message');

  title.textContent = content.title;
  message.textContent = content.message;

  if (code === 200) {
    notice.classList.add(SUCCESS);
  } else {
    notice.classList.add(ERROR);
  }

  notice.classList.remove(VISUALLYHIDDEN);

  setTimeout(() => {
    notice.classList.add(VISUALLYHIDDEN);
    if (notice.classList.contains(SUCCESS)) {
      notice.classList.remove(SUCCESS);
    }
    if (notice.classList.contains(ERROR)) {
      notice.classList.remove(ERROR);
    }
  }, noticeShownFor);
};
