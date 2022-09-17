import ApiCoctails from './api';
const pictureService = new ApiCoctails();
import { baseMarkUpCreate } from './createMarkUp';
import Notiflix from 'notiflix';

const refs = {
  letter: document.querySelector('.alph__link'),
  alph_wrap: document.querySelector('.alph'),
  alph_container: document.querySelector('.card__list'),
};

refs.alph_wrap.addEventListener('click', onClickLetter);

async function onClickLetter(e) {
  e.preventDefault();
  let value = e.target.textContent.toLowerCase();
  if (value.length === 1) {
    pictureService.letter = value;
    try {
      const { data } = await pictureService.fetchByLetter();
      const cocktails = data.drinks;
      console.log(cocktails);
      clearnerWrap();
      baseMarkUpCreate(cocktails, refs.alph_container);
    } catch (error) {
      console.error(error);
      Notiflix.Notify.failure('There are no cocktails with this name!');
      clearnerWrap();
    }
  } else {
    Notiflix.Notify.failure('Please, push letter or number!');
  }
}

function clearnerWrap() {
  refs.alph_container.innerHTML = '';
}
