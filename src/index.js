import PictureService from './js/api'
const pictureService = new PictureService()

const formEl = document.querySelector("form")
const galleryWrap = document.querySelector(".render")
formEl.addEventListener('submit', onSubmit)
const list = document.querySelector(".ingredients")

async function onSubmit(e) {
    e.preventDefault()
    pictureService.name = e.currentTarget.elements.query.value.trim().toLowerCase()
    const {data} = await pictureService.fetchByName()
    markUp(data.drinks)
}

function markUp(card) {
    const neww = card.filter(value => {
        return Object.values(value)
        
    } )
    console.log(neww)

    galleryWrap.insertAdjacentHTML('beforeend', card.map(
        ({
    strDrinkThumb,strDrink,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strGlass,
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
    )
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
