function e(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=l.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var l=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,l.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,l){o[e]=l},l.parcelRequired7c6=n);var s=n("7rYDH"),a=n("1vg23"),t=n("eWCmQ"),i=n("krGWQ");const d=new(0,s.default);i.refs.confirmButtonEl.addEventListener("click",(function(e){i.refs.backdropEl.classList.add("visually-hidden"),i.refs.bodyEl.classList.remove("no-scroll")})),i.refs.backdropEl.addEventListener("click",(async function(l){if(i.refs.backdropEl!==l.target)return;i.refs.backdropEl.classList.add("visually-hidden"),i.refs.bodyEl.classList.remove("no-scroll");try{const{data:l}=await d.fetchNonAlchogol(),r=l.drinks;(0,a.baseMarkUpCreate)(r,i.refs.alph_container),i.refs.headerEl.classList.add("visually-hidden"),i.refs.alphEl.classList.add("visually-hidden"),e(t).Notify.info("Only Non alchoholic cocktails for you",{timeout:"4000"})}catch(e){console.log(e)}}));
//# sourceMappingURL=index.1cd71f73.js.map
