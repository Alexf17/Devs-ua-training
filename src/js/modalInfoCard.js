import { refs } from './refs'
refs.menu_container.addEventListener('click', onReadMoreClick);
refs.closeBtnEl.addEventListener('click', onCloseBtnClick);


function onReadMoreClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    refs.backdropEl.classList.remove('visually-hidden')
    
   
}

function onCloseBtnClick(e) {
    refs.backdropEl.classList.add('visually-hidden')
}