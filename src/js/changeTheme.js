import { refs } from './refs';


refs.buttonChangeTheme.addEventListener('click', changeTheme)
export function changeTheme(e) {

    refs.page.classList.toggle('dark__theme')
    refs.buttonChangeTheme.innerHTML = ''
    if (refs.body.classList.contains('dark__theme')) {
        refs.buttonChangeTheme.insertAdjacentHTML('beforeend', '<use href="/Devs-ua-training/symbol-defs.df4646d6.svg#icon-sun"></use>')
        // e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-sun"></use>'
    } else {
        refs.buttonChangeTheme.insertAdjacentHTML('beforeend', '<use href="/Devs-ua-training/symbol-defs.df4646d6.svg#icon-moon"></use>')
        // e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-moon"></use>'
    }
}