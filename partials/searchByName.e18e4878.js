var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){r[e]=n},e.parcelRequired7c6=t);var o=t("krGWQ"),a=t("7rYDH"),i=t("1vg23"),s=t("eWCmQ");const d={width:"350px",fontSize:"18px",timeout:"3000",distance:"15px",cssAnimationDuration:"700",borderRadius:"0px",fontAwesomeIconStyle:"shadow",cssAnimationStyle:"zoom"};i=t("1vg23");const f=new(0,a.default);o.refs.formEl.addEventListener("submit",(async function(e){if(e.preventDefault(),f.name=e.currentTarget.elements.query.value.toLowerCase().trim(),!f.name)return void s.Notify.info("You need to enter something Bro",d);try{const{data:e}=await f.fetchByName(),n=e.drinks;(0,i.cleanerMarkup)(o.refs.menu_container),(0,i.baseMarkUpCreate)(n,o.refs.menu_container)}catch(e){console.error(e),(0,i.cleanerMarkup)(o.refs.menu_container)}e.target.reset()}));
//# sourceMappingURL=searchByName.e18e4878.js.map
