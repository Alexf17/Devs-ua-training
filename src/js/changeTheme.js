const page = document.querySelector('.page')
const buttonChangeTheme = document.querySelector('.switcher__svg')
const body = document.querySelector('body')

buttonChangeTheme.addEventListener('click', changeTheme)
function changeTheme(e) {

    page.classList.toggle('dark__theme')
    buttonChangeTheme.innerHTML = ''
    if (body.classList.contains('dark__theme')) {
        buttonChangeTheme.insertAdjacentHTML('beforeend', '<use href="/Devs-ua-training/symbol-defs.df4646d6.svg#icon-sun"></use>')
        // e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-sun"></use>'
    } else {
        buttonChangeTheme.insertAdjacentHTML('beforeend', '<use href="./images/symbol-defs.svg#icon-moon"></use>')
        // e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-moon"></use>'
    }

