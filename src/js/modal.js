// import PictureService from './api';

const confirmButtonEl = document.querySelector('.modal__btn');
const backdropnEl = document.querySelector('.backdrop');
const bodyEl = document.querySelector('.page');
// const nonAlcoholicFetch = new PictureService();

confirmButtonEl.addEventListener('click', onButtonClick);
backdropnEl.addEventListener('click', onBackdropClick);
function onButtonClick(event) {
  backdropnEl.classList.add('visually-hidden');
  bodyEl.classList.remove('no-scroll');
}
// async function onBackdropClick(event) {
//   backdropnEl.classList.add('visually-hidden');
//   bodyEl.classList.remove('no-scroll');
//   try {
//     const data = await nonAlcoholicFetch.fetchNonAlchogol();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
