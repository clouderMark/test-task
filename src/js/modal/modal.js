const modal = document.querySelector('.modal');
const buttonOpen = document.querySelector('.modal__open');

const title = modal.querySelector('.modal__header');
const text = modal.querySelector('.modal__text');

title.textContent = 'Заголовок';
text.style.display = 'flex';
text.style.justifyContent = 'center';
text.innerHTML = '<iframe src="https://giphy.com/embed/wsUtUtLR3A2XPvfLVs" width="100%" height="400px" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>'

buttonOpen.addEventListener('click', (e) => {
  e.preventDefault()

  modal.classList.add('modal--shown');
  document.body.style.overflow = "hidden";
})

modal.addEventListener('click', () => {
  modal.classList.remove('modal--shown');
  document.body.style.overflow = ""; 
})

modal.firstElementChild.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
})

export default modal;