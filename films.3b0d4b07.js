function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o=i("krGWQ"),a=i("2shzp");i("iWJ8d"),i("4TNnu");const d=new class{async fetchById(){e(a).defaults.baseURL="https://api.themoviedb.org/3";try{const t=await e(a).get(`/movie/${this.id}?api_key=74bfe718a55ac7916c6e6ad87b15f944&language=en-US`);return console.log(t),t}catch(e){console.error(e)}}get filmId(){return this.id}set filmId(e){this.id=e}constructor(){this.id=0}};o.refs.filmList.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.parentNode.parentElement.nodeName)return;let t=e.target.parentNode.parentElement.id;console.dir(e.target.parentNode.parentElement),d.filmId=t;d.fetchById()}));
//# sourceMappingURL=films.3b0d4b07.js.map
