// https://api.themoviedb.org/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg

// genre_ids: (3)[(16, 28, 14)];
// poster_path: '/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg';
// release_date: '2021-12-24';
// title: 'Jujutsu Kaisen 0';
// vote_average: 7.935;

import { refs } from './refs';
console.log(refs);
const API_KEY = '74bfe718a55ac7916c6e6ad87b15f944';

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
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
      }) => `<li class="film-item">
  <div class="film-wrap"><img src="https://image.tmdb.org/t/p/original${poster_path}" class="film-item-img" alt="${title}" width="300"></div>
  <p>${title}</p>
  <p>${genre_ids}</p>
  <p>${new Date(release_date).getFullYear()}</p>
  <p>${vote_average}</p>
  </li>`
    )
    .join('');
  return value;
}

async function renderFilms() {
  const value = await markUp();
  refs.filmList.insertAdjacentHTML('beforeend', value);
}
renderFilms();
