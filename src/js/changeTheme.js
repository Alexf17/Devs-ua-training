const page = document.querySelector('.page')
const buttonChangeTheme = document.querySelector('.theme-switcher')
const body = document.querySelector('body')

buttonChangeTheme.addEventListener('click', changeTheme)
function changeTheme(e) {
  
    page.classList.toggle('dark__theme');
    
    if (body.classList.contains('dark__theme')) {
        e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-sun"></use>'
    } else {
        e.path[0].innerHTML = '<use href="/symbol-defs.a8b2e413.svg#icon-moon"></use>'
    }
    