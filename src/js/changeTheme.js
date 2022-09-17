const page = document.querySelector('.page')
<<<<<<< Updated upstream
const buttonChangeTheme = document.querySelector('.theme-switcher')

buttonChangeTheme.addEventListener('click', changeTheme)
function changeTheme() {
    page.classList.toggle('light__theme')
    page.classList.toggle('dark__theme')
}
=======
const buttonChangeTheme = document.querySelector('.switcher__svg')
const body = document.querySelector('body')

buttonChangeTheme.addEventListener('click', changeTheme)
function changeTheme(e) {
    
    page.classList.toggle('dark__theme');
    buttonChangeTheme.innerHTML = '';
    if (body.classList.contains('dark__theme')) {
        buttonChangeTheme.insertAdjacentHTML('beforeend', '<use href="/symbol-defs.a8b2e413.svg#icon-sun"></use>');
        // e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-sun"></use>'
    } else {
        buttonChangeTheme.insertAdjacentHTML('beforeend', '<use href="/symbol-defs.a8b2e413.svg#icon-moon"></use>');
        // e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-moon"></use>'
    }
    
>>>>>>> Stashed changes
