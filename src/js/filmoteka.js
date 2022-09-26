import { genresList } from './genres-list';
import { refs } from './refs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import MovieService from './film-api';
import { cleanerMarkup } from './createMarkUp';
const movieservice = new MovieService();
// console.log(refs);
const API_KEY = '74bfe718a55ac7916c6e6ad87b15f944';
const container = document.getElementById('tui-pagination-container');

const options = {
  // below default value of options
  totalItems: 1000,
  itemsPerPage: 2,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};
const instance = new Pagination(container, options);
container.addEventListener('click', onPagClick);
function onPagClick() {
  let currentPage = instance.getCurrentPage();
  cleanerMarkup(refs.filmList);
  let markUpValue = markUp2(currentPage);
  renderFilms2(markUpValue);
}

async function renderFilms2(markUp) {
  const value = await markUp;

  refs.filmList.insertAdjacentHTML('beforeend', value);
}

async function markUp2(page) {
  const response = await movieservice.fetchFilmsByPage(page);
  const value = response.results
    .map(
      ({
        id,
        poster_path,
        title,
        genre_ids,
        release_date,
      }) => `<li class="film-item">
        <a class="film-link" id="${id}">
  <div class="film-wrap">
  <img src="https://image.tmdb.org/t/p/original${poster_path}" class="film-item-img" alt="${title}" width="300">
  </div>
  <div>
  <h3 class="film-title">${title.toUpperCase()}</h3>
  </div>
  <div class="film-genres-date">
  <p class="film-genres">${searchGenresById(genre_ids)}</p>
  <p class="film-release-date">${new Date(release_date).getFullYear()}</p>
  
   </div>
   </a>
   </li>`
    )
    .join('');
  return value;
}

function fetchGenres() {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  )
    .then(response => response.json())
    .then(data => data);
}

// const idArrayList = [28, 12, 16];
// async function searchGenresById(idArrayList) {
//   const genresNameList = [];
//   const genresList = await fetchGenres();
//   console.log(genresList.genres);
//   genresList.genres.map(({ id, name }) => {
//     // console.log('id', id);
//     for (let i = 0; i < idArrayList.length; i += 1) {
//       if (id === idArrayList[i]) {
//         genresNameList.push(name);
//       }
//     }
//   });
//   result = await genresNameList.join(', ');
//   return result;
// }

// const idArrayList = [28, 12, 16];
function searchGenresById(idArrayList) {
  const genresNameList = [];
  genresList.map(({ id, name }) => {
    for (let i = 0; i < idArrayList.length; i += 1) {
      if (id === idArrayList[i]) {
        genresNameList.push(name);
      }
    }
  });
  return genresNameList.join(', ');
}

// console.log(searchGenresById(idArrayList));

async function markUp() {
  const results = await movieservice.fetchFilms();
  const value = results.results
    .map(
      ({
        id,
        poster_path,
        title,
        genre_ids,
        release_date,
      }) => `<li class="film-item">
        <a class="film-link" id="${id}">
  <div class="film-wrap">
  <img src="https://image.tmdb.org/t/p/original${poster_path}" class="film-item-img" alt="${title}" width="300">
  </div>
  <div>
  <h3 class="film-title">${title.toUpperCase()}</h3>
  </div>
  <div class="film-genres-date">
  <p class="film-genres">${searchGenresById(genre_ids)}</p>
  <p class="film-release-date">${new Date(release_date).getFullYear()}</p>
  
   </div>
   </a>
   </li>`
    )
    .join('');
  return value;
}
/* <p>${vote_average}</p>; */

async function renderFilms() {
  const value = await markUp();

  refs.filmList.insertAdjacentHTML('beforeend', value);
}
renderFilms();
