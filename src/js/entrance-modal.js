import ApiCoctails from './api';
import { baseMarkUpCreate } from './createMarkUp';
import Notiflix from 'notiflix';
import { refs } from './refs';

const cocktailService = new ApiCoctails();

refs.confirmButtonEl.addEventListener('click', onButtonClick);
refs.backdropEntranceEl.addEventListener('click', onBackdropClick);

export function onButtonClick(event) {
  event.preventDefault();
  refs.backdropEntranceEl.classList.add('visually-hidden');
  refs.page.classList.remove('no-scroll');
}

export async function onBackdropClick(event) {
  if (refs.backdropEntranceEl !== event.target) {
    return;
  }
  refs.backdropEntranceEl.classList.add('visually-hidden');
  refs.page.classList.remove('no-scroll');
  try {
    const { data } = await cocktailService.fetchNonAlchogol();

    const cocktails = data.drinks;
    baseMarkUpCreate(cocktails, refs.menu_container);
    refs.headerEl.classList.add('visually-hidden');
    refs.menu_wrap.classList.add('visually-hidden');
    refs.heroImg.style.width = '700px'
    refs.heroImgWrap.style.width = '400px'
    refs.heroImgWrap.style.top = '-40px'
    Notiflix.Notify.info('Only Non alchoholic cocktails for you', {
      timeout: '4000',
    });
  } catch (error) {
    console.log(error);
  }
}
