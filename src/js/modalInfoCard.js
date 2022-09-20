import { refs } from './refs'
import { renderModalInfoMarkup, cleanerMarkup } from './createMarkUp'
import  ApiCoctails  from './api'

const cocktailService = new ApiCoctails()

refs.menu_container.addEventListener('click', onReadMoreClick);
refs.closeBtnEl.addEventListener('click', onCloseBtnClick);


async function onReadMoreClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
  
    refs.backdropEl.classList.remove('visually-hidden');
    refs.body.classList.add('no-scroll');
    console.log(e.target.id);
    cocktailService.id = e.target.id;
    const { data } = await cocktailService.fetchById();
    console.log(data);
    const info = data.drinks[0]
    console.log(info);
    renderModalInfoMarkup(info, refs.modalCard )
    
    
   
}

function onCloseBtnClick(e) {
    refs.backdropEl.classList.add('visually-hidden');
    refs.body.classList.remove('no-scroll');
    cleanerMarkup(refs.modalCard)
}

