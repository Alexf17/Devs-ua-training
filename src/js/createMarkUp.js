import { createIngridientsStr } from "./createIngridientsEl";
export function baseMarkUpCreate(cards, renderTarget) {
  let createMarkup = cards
    .map(card => {
      const { strDrinkThumb, strDrink, idDrink } = card;

      return ` <li class="card__item">
        <img src="${strDrinkThumb}" alt="${strDrink}" loading="lazy" height="294" width="370" class="card__img" />
            <div class="card__info">
                <h3 class="card__name">${strDrink}</h3>
                <button id='${idDrink}' type="button" class="card__btn">Read more</button>
            </div>
      </li>`;
    })
    .join('');

  renderTarget.insertAdjacentHTML('beforeend', createMarkup);
}

// Moved markup cleanup function. Takes the markup reference argument
export function cleanerMarkup(markup) {
  markup.innerHTML = '';
}
// Функция которая создает разметку 
export async function renderModalInfoMarkup(data, renderTarget) {
  let ingredientsList = await createIngridientsStr(data);
  const { strDrink, strGlass, strInstructions, strDrinkThumb
  } = data;
  
  let markup = `<div class="modal-img-wrap">
      <img class="modal-img" src="${strDrinkThumb}" alt="${strDrink}" />
    </div>
    <div class="modal-info">
      <h3 class="modal-info-title">
        <span class="modal-info-span">Name:</span>${strDrink}
      </h3>
      <p class="modal-info-text">
        <span class="modal-info-span">Type of Glass:</span>${strGlass}
      </p>
      <p class="modal-info-text">
        <span class="modal-info-span">Instruction:</span>${strInstructions}
      </p>
      <p class="modal-info-text">
        <span class="modal-info-span">Ingredients:</span>${ingredientsList}
      </p>
    </div>`;
 console.log(markup);
  renderTarget.insertAdjacentHTML('beforeend', markup);
  
}
