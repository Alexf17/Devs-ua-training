!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var i=a("4Nugj"),o=a("bpxeT"),c=a("8MBJY"),d=a("a2hTj"),u=a("2TvXO"),f=a("dIxxU"),l=function(){"use strict";function t(){e(c)(this,t),this.id=0}return e(d)(t,[{key:"fetchById",value:function(){var t=this;return e(o)(e(u).mark((function n(){var r;return e(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(f).defaults.baseURL="https://api.themoviedb.org/3","74bfe718a55ac7916c6e6ad87b15f944",n.prev=2,n.next=5,e(f).get("/movie/".concat(t.id,"?api_key=").concat("74bfe718a55ac7916c6e6ad87b15f944","&language=en-US"));case 5:return r=n.sent,console.log(r),n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(2),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})))()}},{key:"filmId",get:function(){return this.id},set:function(e){this.id=e}}]),t}();a("jPW8c"),a("6qd2L");var s=new l;i.refs.filmList.addEventListener("click",(function(e){if(e.preventDefault(),"A"!==e.target.parentNode.parentElement.nodeName)return;var t=e.target.parentNode.parentElement.id;console.dir(e.target.parentNode.parentElement),s.filmId=t;s.fetchById()}))}();
//# sourceMappingURL=films.ddac0dc4.js.map
