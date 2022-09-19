import PictureService from './js/api';
import { cleanerMarkup } from './js/createMarkUp';
import { createIngridientsEl } from './js/createIngridientsEl';
const pictureService = new PictureService();
// import {makeIngridientsArr} from "./js/makeIngridientsArray"

// const formEl = document.querySelector('form');
// const galleryWrap = document.querySelector('.render');
// formEl.addEventListener('submit', onSubmit);
// const list = document.querySelector('.ingredients');

// let keys = [];
// let values = [];
// let filteredArray = [];
// const finalArray = [];

async function onSubmit(e) {
  e.preventDefault();
  pictureService.name = e.currentTarget.elements.query.value
    .trim()
    .toLowerCase();
  const { data } = await pictureService.fetchByName();
  const drinks = data.drinks;
  cleanerMarkup(galleryWrap);
  markUp(drinks, galleryWrap);

  e.target.reset();
  // const ingridientsArr = await makeIngridientsArr(drinks);
  // console.log(ingridientsArr);

  // for (drink of data.drinks) {
  //   const filteredArray2 = [];
  //   let ingrObject = {};
  //   // console.log(drink);
  //   filteredArray = Object.keys(drink).filter(element =>
  //     element.match(/strIngredient/g)
  //   );
  //   // console.log(filteredArray);
  //   for (let i = 0; i < filteredArray.length; i += 1) {
  //     //   console.log(filteredArray[i]);

  //     if (drink[filteredArray[i]] !== null) {
  //       filteredArray2.push(drink[filteredArray[i]]);
  //       ingrObject[filteredArray[i]] = drink[filteredArray[i]];
  //     }
  //   }
  //   finalArray.push(ingrObject);
  //   console.log(finalArray);
  // }
}

// function consolee() {
//   console.log(finalArray);
// }
// setTimeout(consolee, 5000);

// console.log(keys);
export async function markUp(cards, renderTarget) {
  let createMarkup = cards
    .map(card => {
      let liMarkupFin = await createIngridientsEl(card);

      const { strDrinkThumb, strDrink, strGlass } = card;

      return `<div class="photo-card">
            <img src="${strDrinkThumb}" alt="${strDrink}" loading="lazy" height="300" width="400" />
            <div class="info">
            <p class="info-item">
            <b> Cocktail Name: ${strDrink}</b>
            </p>
            <p class="info-item">
                <b>Type of Glass: ${strGlass}</b>
            </p>
                <ul class="ingredients">
                ${liMarkupFin}
                </ul>
            </div>
            </div>`;
    })
    .join('');

  renderTarget.insertAdjacentHTML('beforeend', createMarkup);
}








