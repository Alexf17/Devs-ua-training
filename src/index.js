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
  pictureService.fetchByName().then(({ data }) => {
       markUp(data.drinks);
 return data.drinks
  })
    .then(drinks => {
      
      for (const drink of drinks) {
    const filteredArray2 = [];
    let ingrObject = {};
    // console.log(drink);
    filteredArray = Object.keys(drink).filter(element =>
      element.match(/strIngredient/g)
    );
    
        for (let i = 0; i < filteredArray.length; i += 1) {

      if (drink[filteredArray[i]] !== null) {
        filteredArray2.push(drink[filteredArray[i]]);
        ingrObject[filteredArray[i]] = drink[filteredArray[i]];
      }
    }
        finalArray.push(ingrObject);
      
      }
    return finalArray
    })
  .then(ingredients => markUp(ingredients))
  
  
}

function markUp(card) {
console.log(card);
  galleryWrap.insertAdjacentHTML(
    'beforeend',
    card
      .map(
        ({
          strDrinkThumb,
          strDrink,
          strGlass,
          strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
        }) =>
          `<div class="photo-card">
            <img src="${strDrinkThumb}" alt="${strDrink}" loading="lazy" height="300" width="400" />
            <div class="info">
              <ul>
  <li>${strIngredient1}</li>
  <li>${strIngredient2}</li>
  <li>${strIngredient3}</li>
  <li>${strIngredient4}</li>
  <li>${strIngredient5}</li>

</ul>
                <p class="info-item">
                <b>Type of Glass: ${strGlass}</b>
                </p>
            </div>
            </div>`
      )
      .join('')
  )

}

// function markupIngredients(ingredients) {
//   const markup = ingredients.map(({strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10}) => `<ul>
//   <li>${strIngredient1}</li>
//   <li>${strIngredient2}</li>
//   <li>${strIngredient3}</li>
//   <li>${strIngredient4}</li>
//   <li>${strIngredient5}</li>
//   <li>${strIngredient6}</li>
//   <li>${strIngredient7}</li>
//   <li>${strIngredient8}</li>
//   <li>${strIngredient9}</li>
//   <li>${strIngredient10}</li>
// </ul>`)
//   .join('')
//   list.insertAdjacentHTML('beforeend', markup)
// }







