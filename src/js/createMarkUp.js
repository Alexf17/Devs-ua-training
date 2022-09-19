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
export function renderModalInfoMarkup(data, renderTarget) {

  let markup = `<h3 class="modal-info-title">
        <span class="modal-info-span">Name:</span>
      </h3>
      <p class="modal-info-text">
        <span class="modal-info-span">Type of Glass:</span>
      </p>
      <p class="modal-info-text">
        <span class="modal-info-span">Instruction:</span>
      </p>
      <p class="modal-info-text">
        <span class="modal-info-span">Ingredients:</span>
      </p>
  `

};