import { refs } from './refs';
import MovieService from './film-api';
import { genresList } from './genres-list';
import { title } from 'process';
import { cleanerMarkup } from './createMarkUp';

const movieService = new MovieService();

let saveDataStorage = JSON.parse(localStorage.getItem('saveDataStorage')) || {
  queue: [],
  watched: [],
};
if (saveDataStorage.watched.length !== 0) {
  refs.watchedHederBtnEl.textContent = `watched  ${saveDataStorage.watched.length}`;
} else if (saveDataStorage.queue.length !== 0) {
  // console.log(saveDataStorage.watched.length);
  refs.queueHederBtnEl.textContent = `queue ${saveDataStorage.queue.length}`;
}
refs.filmList.addEventListener('click', onFilmItemClick);
refs.closeBtnEl.addEventListener('click', onCloseFilmModal);
refs.modalFilmWrap.addEventListener('click', onModalBtnClick);
refs.watchedHederBtnEl.addEventListener('click', onWatchedHederBtnClick);
refs.queueHederBtnEl.addEventListener('click', onQueueHederBtnClick);

function onWatchedHederBtnClick() {
  cleanerMarkup(refs.filmList);
}

function onQueueHederBtnClick() {
  cleanerMarkup(refs.filmList);
}
let filmArray = {};
async function onFilmItemClick(event) {
  console.log(window);
  event.preventDefault();
  if (event.target.parentNode.parentElement.nodeName !== 'A') {
    return;
  }
  let filmCardId = event.target.parentNode.parentElement.id;
  // console.dir(event.target.parentNode.parentElement);
  movieService.filmId = filmCardId;

  const backendData = await movieService.fetchById();

  const markup = await createFilmModalMarkup(backendData.data);
  cleanerMarkup(refs.modalFilmWrap);
  renderFilmModalMarkup(markup);

  refs.backdropEl.classList.remove('visually-hidden');
  filmArray = backendData.data;
  console.log(filmArray);
}

// console.log(await filmArray);
function createFilmModalMarkup(data) {
  const {
    poster_path,
    original_title,
    title,
    vote_average,
    vote_count,
    genres,
    popularity,
    overview,
    id,
  } = data;
  const genreItems = genres.map(({ name }) => name).join(', ');
  const markup = `<div class="modal-film-image-wrap"><img class="modal-film-image" src="https://image.tmdb.org/t/p/original${poster_path}
    " alt="${title}" width="375" height="478">
    </div>
    <div class="modal-film-info-wrap">
    <h2 class="modal-film-title">${title}</h2>
    <div class="modal-film-info-list">
    <ul class="modal-film-properties-list">
      <li class="modal-film-properties-item">Vote/Votes</li>
      <li class="modal-film-properties-item">Popularity</li>
      <li class="modal-film-properties-item">Original Title</li>
      <li class="modal-film-properties-item">Genre</li>
    </ul>
    <ul class="modal-film-value-list">
      <li class="modal-film-value-item"><span class="modal-film-vote-average">${vote_average}</span>/<span class="modal-film-vote-count">${vote_count}</span></li>
      <li class="modal-film-value-item">${popularity}</li>
      <li class="modal-film-value-item">${original_title.toUpperCase()}</li>
      <li class="modal-film-value-item">${genreItems}</li>
    </ul>
    </div>
    <h3 class="modal-film-about-title">ABOUT</h3>
    <p class="modal-film-about-text">${overview}</p>
    <ul class="modal-film-button-list">
      <li class="modal-film-button-item"><button id="${id}" class="modal-film-button" type="button" data-action='watched'>ADD TO WATCHED</button></li>
      <li class="modal-film-button-item"><button id="${id}" class="modal-film-button" type="button" data-action='queue'>ADD TO QUEUE</button></li>
    </ul> </div>`;
  return markup;
}

function renderFilmModalMarkup(markup) {
  refs.modalFilmWrap.insertAdjacentHTML('beforeend', markup);
}

function onCloseFilmModal() {
  refs.backdropEl.classList.add('visually-hidden');
  cleanerMarkup(refs.modalFilmWrap);
}

// добавили слушателя после рендера кнопок
// refs.queueModalBtnEl.addEventListener("click", onQueueModalBtnClick);
// refs.watchedModalBtnEl.addEventListener("click", onWatchedModalBtnClick);

function onModalBtnClick(e) {
  // const filmArray =
  console.log(filmArray);
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.dataset.action === 'watched') {
    let value = filmArray;

    saveDataStorage.watched.push(value);
    if (saveDataStorage.watched.length !== 0) {
      refs.watchedHederBtnEl.textContent = `watched  ${saveDataStorage.watched.length}`;
    }
    localStorage.setItem('saveDataStorage', JSON.stringify(saveDataStorage));
  }

  if (e.target.dataset.action === 'queue') {
    let value2 = filmArray;

    saveDataStorage.queue.push(value2);

    if (saveDataStorage.watched.length !== 0) {
      refs.queueHederBtnEl.textContent = `queue ${saveDataStorage.queue.length}`;
    }
    localStorage.setItem('saveDataStorage', JSON.stringify(saveDataStorage));
  }
}
