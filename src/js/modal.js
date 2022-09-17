import PictureService from './api';
import { baseMarkUpCreate } from './createMarkUp';
const confirmButtonEl = document.querySelector('.modal__btn');
const backdropEl = document.querySelector('.backdrop');
const bodyEl = document.querySelector('.page');
const alph_container = document.querySelector('.card__list');
const headerEl = document.querySelector('.header__container');
const alphEl = document.querySelector('.alph');
const xxx = new PictureService();
import Notiflix from 'notiflix';
confirmButtonEl.addEventListener('click', onButtonClick);
backdropEl.addEventListener('click', onBackdropClick);

function onButtonClick(event) {
  backdropEl.classList.add('visually-hidden');
  bodyEl.classList.remove('no-scroll');
}

async function onBackdropClick(event) {
  if (backdropEl !== event.target) {
    return;
  }
  backdropEl.classList.add('visually-hidden');
  bodyEl.classList.remove('no-scroll');
  try {
    const { data } = await xxx.fetchNonAlchogol();

    const cocktails = data.drinks;
    baseMarkUpCreate(cocktails, alph_container);
    headerEl.classList.add('visually-hidden');
    alphEl.classList.add('visually-hidden');
    Notiflix.Notify.info('Only Non alchoholic cocktails for you', {
      timeout: '4000',
    });
  } catch (error) {
    console.log(error);
  }
}
