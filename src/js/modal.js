import ApiCoctails from './api';
import { baseMarkUpCreate } from './createMarkUp';
import Notiflix from 'notiflix';
import { refs } from './refs';

const xxx = new ApiCoctails();

refs.confirmButtonEl.addEventListener('click', onButtonClick);
refs.backdropEl.addEventListener('click', onBackdropClick);

function onButtonClick(event) {
  refs.backdropEl.classList.add('visually-hidden');
  refs.bodyEl.classList.remove('no-scroll');
}

async function onBackdropClick(event) {
  if (refs.backdropEl !== event.target) {
    return;
  }
  refs.backdropEl.classList.add('visually-hidden');
  refs.bodyEl.classList.remove('no-scroll');
  try {
    const { data } = await xxx.fetchNonAlchogol();

    const cocktails = data.drinks;
    baseMarkUpCreate(cocktails, refs.menu_container);
    refs.headerEl.classList.add('visually-hidden');
    refs.menu_wrap.classList.add('visually-hidden');
    Notiflix.Notify.info('Only Non alchoholic cocktails for you', {
      timeout: '4000',
    });
  } catch (error) {
    console.log(error);
  }
}
