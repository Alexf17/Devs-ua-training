import { refs } from './refs';
import ApiCoctails from './api';
import { baseMarkUpCreate } from "./createMarkUp";
import { Notify } from 'notiflix';
import { optionsNotify } from './optionsNotify';
import { cleanerMarkup } from './createMarkUp';

const cocktailService = new ApiCoctails();

// cardListEl, modalInfoDivEl
// cocktailService.fetchByName()

// menu_container: document.querySelector('.card__list')
// formEl: document.querySelector('form')
refs.formEl.addEventListener('submit', onSubmit)
refs.cardListEl.addEventListener('click', onReadMoreClick);

async function onSubmit(e) {
  e.preventDefault();
  // Add trim() mуthod
  cocktailService.name = e.currentTarget.elements.query.value.trim().toLowerCase().trim();
  
  // Add check value for non-empty string
  if (!cocktailService.name) {
    Notify.info("You need to enter something Bro", optionsNotify);
    return
  }

    try {
        const { data } = await cocktailService.fetchByName();
        const drinks = data.drinks;
        cleanerMarkup(refs.menu_container);
        baseMarkUpCreate(drinks, refs.menu_container);
        
      
    } catch (error) {
      console.error(error);
      cleanerMarkup(refs.menu_container);
    }
  
  
  e.target.reset();
}


function onReadMoreClick(e) {
  // Проверяем, что б клик был именно по кнопке
  if (e.target.nodeName !== 'BUTTON') {
    console.log("Клик мимо бутончика!")
    return
  }
  // Выводим id кнопки
  console.log(e.target.id);
  
}