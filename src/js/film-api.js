import axios from 'axios';
export default class MovieService {
  constructor() {
    this.id = 0;
    this.API_KEY = '74bfe718a55ac7916c6e6ad87b15f944';
  }

  fetchFilms() {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}`
    ).then(response => response.json());
  }
  fetchFilmsByPage(pageP) {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.API_KEY}&page=${pageP}`
    ).then(response => response.json());
  }

  async fetchById() {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3';

    try {
      const response = await axios.get(
        `/movie/${this.id}?api_key=${this.API_KEY}&language=en-US`
      );
      //  console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  get filmId() {
    return this.id;
  }

  set filmId(newId) {
    this.id = newId;
  }
}
