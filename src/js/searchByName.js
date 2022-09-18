import { refs } from './refs';
import ApiCoctails from './api';
import { baseMarkUpCreate } from "./createMarkUp";
const cocktailService = new ApiCoctails();


// cocktailService.fetchByName()

// menu_container: document.querySelector('.card__list')
// formEl: document.querySelector('form')
refs.formEl.addEventListener('submit', onSubmit)

async function onSubmit(e) {
    e.preventDefault();
  cocktailService.name = e.currentTarget.elements.query.value
    .trim()
    .toLowerCase();
    try {
        const { data } = await cocktailService.fetchByName();
        const drinks = data.drinks;
        cleanerMarkup();
        baseMarkUpCreate(drinks, refs.menu_container);
        
    } catch (error) {
        console.error(error)
        cleanerMarkup()
    }
  

  e.target.reset();
}

function cleanerMarkup() {
  refs.menu_container.innerHTML = '';
}