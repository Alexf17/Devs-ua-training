function e(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=l.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var l=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,l){i[e]=l},l.parcelRequired7c6=a);var n=a("krGWQ"),o=a("2shzp");a("iWJ8d"),a("4TNnu");const s=new class{async fetchById(){e(o).defaults.baseURL="https://api.themoviedb.org/3";try{const l=await e(o).get(`/movie/${this.id}?api_key=74bfe718a55ac7916c6e6ad87b15f944&language=en-US`);return console.log(l),l}catch(e){console.error(e)}}get filmId(){return this.id}set filmId(e){this.id=e}constructor(){this.id=0}};n.refs.filmList.addEventListener("click",(async function(e){if(e.preventDefault(),"A"!==e.target.parentNode.parentElement.nodeName)return;let l=e.target.parentNode.parentElement.id;console.dir(e.target.parentNode.parentElement),s.filmId=l;const t=await s.fetchById();(function(e){n.refs.modalFilmWrap.insertAdjacentHTML("beforeend",e)})(await function(e){const{poster_path:l,original_title:t,title:i,vote_average:a,vote_count:n,genres:o,popularity:s,overview:r}=e,d=o.map((({name:e})=>e)).join(", ");return`<img class="modal-film-image" src="https://image.tmdb.org/t/p/original${l}\n    " alt="${i}">\n    <h2 class="modal-film-title">${i}</h2>\n    <ul class="modal-film-properties-list">\n      <li class="modal-film-properties-item">Vote/Votes</li>\n      <li class="modal-film-properties-item">Popularity</li>\n      <li class="modal-film-properties-item">Original Title</li>\n      <li class="modal-film-properties-item">Genre</li>\n    </ul>\n    <ul class="modal-film-value-list">\n      <li class="modal-film-value-item"><span class="modal-film-vote-average">${a}</span>/<span class="modal-film-vote-count">${n}</span></li>\n      <li class="modal-film-value-item">${s}</li>\n      <li class="modal-film-value-item">${t}</li>\n      <li class="modal-film-value-item">${d}</li>\n    </ul>\n    <h3 class="modal-film-about-title">ABOUT</h3>\n    <p class="modal-film-about-text">${r}</p>\n    <ul class="modal-film-button-list">\n      <li class="modal-film-button-item"><button class="modal-film-button" type="button">ADD TO WATCHED</button></li>\n      <li class="modal-film-button-item"><button class="modal-film-button" type="button">ADD TO QUEUE</button></li>\n    </ul>`}(t.data)),n.refs.backdropEl.classList.remove("visually-hidden")})),n.refs.closeBtnEl.addEventListener("click",(function(){n.refs.backdropEl.classList.add("visually-hidden")})),console.log(n.refs.modalFilmWrap);
//# sourceMappingURL=films.204e9395.js.map
