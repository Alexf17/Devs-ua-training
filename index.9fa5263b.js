!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},s=r.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,r.call(s.exports,s,s.exports),s.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},r.parcelRequired7c6=s);var l=s("bpxeT"),o=s("2TvXO"),a=s("b7ONl"),i=s("5hsTI"),c=s("iU1Pc"),d=s("4Nugj"),u=new(0,a.default);function f(){return(f=e(l)(e(o).mark((function r(n){var t,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(d.refs.backdropEl===n.target){r.next=2;break}return r.abrupt("return");case 2:return d.refs.backdropEl.classList.add("visually-hidden"),d.refs.bodyEl.classList.remove("no-scroll"),r.prev=4,r.next=7,u.fetchNonAlchogol();case 7:t=r.sent.data,s=t.drinks,(0,i.baseMarkUpCreate)(s,d.refs.menu_container),d.refs.headerEl.classList.add("visually-hidden"),d.refs.menu_wrap.classList.add("visually-hidden"),e(c).Notify.info("Only Non alchoholic cocktails for you",{timeout:"4000"}),r.next=18;break;case 15:r.prev=15,r.t0=r.catch(4),console.log(r.t0);case 18:case"end":return r.stop()}}),r,null,[[4,15]])})))).apply(this,arguments)}d.refs.confirmButtonEl.addEventListener("click",(function(e){d.refs.backdropEl.classList.add("visually-hidden"),d.refs.bodyEl.classList.remove("no-scroll")})),d.refs.backdropEl.addEventListener("click",(function(e){return f.apply(this,arguments)}))}();
//# sourceMappingURL=index.9fa5263b.js.map
