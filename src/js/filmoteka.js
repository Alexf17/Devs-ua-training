// https://api.themoviedb.org/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg

// genre_ids: (3)[(16, 28, 14)];
// poster_path: '/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg';
// release_date: '2021-12-24';
// title: 'Jujutsu Kaisen 0';
// vote_average: 7.935;
import { genresList } from './genres-list';
import { refs } from './refs';
// console.log(refs);
const API_KEY = '74bfe718a55ac7916c6e6ad87b15f944';
refs.filmList.addEventListener('click', onFilmItemClick);
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

const idArrayList = [28, 12, 16];
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

console.log(searchGenresById(idArrayList));

function fetchFilms() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  ).then(response => response.json());
}

async function markUp() {
  const results = await fetchFilms();
  const value = results.results
    .map(
      ({
        id,
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
      }) => `<li class="film-item">
  <div class="film-wrap"><a class="film-link" id="${id}">
  <img src="https://image.tmdb.org/t/p/original${poster_path}" class="film-item-img" alt="${title}" width="300"></a>
  </div>
  <div class="film-info">
  <p class="film-title">${title.toUpperCase()}</p>
  <div class="film-genres-date">
  <p class="film-genres">${searchGenresById(genre_ids)}</p>
  <p class="film-release-date">${new Date(release_date).getFullYear()}</p>
  </div>
   </div>
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

function onFilmItemClick(event) {
  event.preventDefault();
  console.log(event.target);
}
