import { refs } from './refs';
import MovieService from './film-api';
import { genresList } from './genres-list';
import { title } from 'process';

const movieService = new MovieService();

refs.filmList.addEventListener('click', onFilmItemClick);
refs.closeBtnEl.addEventListener('click', onCloseFilmModal);

console.log(refs.modalFilmWrap);

async function onFilmItemClick(event) {
  event.preventDefault();
  if (event.target.parentNode.parentElement.nodeName !== 'A') {
    return;
  }
  let filmCardId = event.target.parentNode.parentElement.id;
  console.dir(event.target.parentNode.parentElement);
  movieService.filmId = filmCardId;
  const backendData = await movieService.fetchById();
  const markup = await createFilmModalMarkup(backendData.data);
  renderFilmModalMarkup(markup);
  refs.backdropEl.classList.remove('visually-hidden');
}

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
  } = data;
  const genreItems = genres.map(({ name }) => name).join(', ');
  const markup = `<img class="modal-film-image" src="https://image.tmdb.org/t/p/original${poster_path}
    " alt="${title}">
    <h2 class="modal-film-title">${title}</h2>
    <ul class="modal-film-properties-list">
      <li class="modal-film-properties-item">Vote/Votes</li>
      <li class="modal-film-properties-item">Popularity</li>
      <li class="modal-film-properties-item">Original Title</li>
      <li class="modal-film-properties-item">Genre</li>
    </ul>
    <ul class="modal-film-value-list">
      <li class="modal-film-value-item"><span class="modal-film-vote-average">${vote_average}</span>/<span class="modal-film-vote-count">${vote_count}</span></li>
      <li class="modal-film-value-item">${popularity}</li>
      <li class="modal-film-value-item">${original_title}</li>
      <li class="modal-film-value-item">${genreItems}</li>
    </ul>
    <h3 class="modal-film-about-title">ABOUT</h3>
    <p class="modal-film-about-text">${overview}</p>
    <ul class="modal-film-button-list">
      <li class="modal-film-button-item"><button class="modal-film-button" type="button">ADD TO WATCHED</button></li>
      <li class="modal-film-button-item"><button class="modal-film-button" type="button">ADD TO QUEUE</button></li>
    </ul>`;
  return markup;
}

function renderFilmModalMarkup(markup) {
  refs.modalFilmWrap.insertAdjacentHTML('beforeend', markup);
}

function onCloseFilmModal() {
  refs.backdropEl.classList.add('visually-hidden');
}
