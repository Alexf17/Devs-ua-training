import ApiCoctails from './api';
const cocktailService = new ApiCoctails();
import { baseMarkUpCreate } from './createMarkUp';
import Notiflix from 'notiflix';
import { refs } from './refs';


refs.menu_wrap.addEventListener('click', onClickLetter);

async function onClickLetter(e) {
  e.preventDefault();
  let value = e.target.textContent.toLowerCase();
  if (value.length === 1) {
    cocktailService.letter = value;
    try {
      const { data } = await cocktailService.fetchByLetter();
      const cocktails = data.drinks;
      console.log(cocktails);
      clearnerWrap();
      baseMarkUpCreate(cocktails, refs.menu_container);
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
  refs.menu_container.innerHTML = '';
}
