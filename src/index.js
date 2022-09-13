import PictureService from './js/api';
const pictureService = new PictureService();

const formEl = document.querySelector('form');
const galleryWrap = document.querySelector('.render');
formEl.addEventListener('submit', onSubmit);
const list = document.querySelector('.ingredients');
let keys = [];
let values = [];
let filteredArray = [];
const finalArray = [];

async function onSubmit(e) {
  e.preventDefault();
  pictureService.name = e.currentTarget.elements.query.value
    .trim()
    .toLowerCase();
  const { data } = await pictureService.fetchByName();
  markUp(data.drinks);
  for (drink of data.drinks) {
    const filteredArray2 = [];
    let ingrObject = {};
    // console.log(drink);
    filteredArray = Object.keys(drink).filter(element =>
      element.match(/strIngredient/g)
    );
    // console.log(filteredArray);
    for (let i = 0; i < filteredArray.length; i += 1) {
      //   console.log(filteredArray[i]);

      if (drink[filteredArray[i]] !== null) {
        filteredArray2.push(drink[filteredArray[i]]);
        ingrObject[filteredArray[i]] = drink[filteredArray[i]];
      }
    }
    finalArray.push(ingrObject);
    console.log(finalArray);
  }
}
function consolee() {
  console.log(finalArray);
}
setTimeout(consolee, 5000);

console.log(keys);
function markUp(card) {
  const neww = card.filter(value => {
    return Object.values(value);
  });
  console.log(neww);

  galleryWrap.insertAdjacentHTML(
    'beforeend',
    card
      .map(
        ({
          strDrinkThumb,
          strDrink,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strGlass,
        }) =>
          `<div class="photo-card">
            <img src="${strDrinkThumb}" alt="${strDrink}" loading="lazy" height="300" width="400" />
            <div class="info">
                <ul class="ingredients">
                <li>${strIngredient1}</li>
                <li>${strIngredient2}</li>
                <li>${strIngredient3}</li>
                </ul>
                <p class="info-item">
                <b>Type of Glass: ${strGlass}</b>
                </p>
            </div>
            </div>`
      )
      .join('')
  );
  // list.insertAdjacentHTML('beforeend', card.map(
  //     {
  // strIngredient1,strIngredient2,strIngredient3,strIngredient4,
  //     }) =>
  //  `
  // <li>${strIngredient1}</li>
  // <li>${strIngredient2}</li>
  // <li>${strIngredient3}</li>
  // `
  // )
  //     .join('')
}
