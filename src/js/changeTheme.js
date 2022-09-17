const page = document.querySelector('.page')
const buttonChangeTheme = document.querySelector('.theme-switcher')

buttonChangeTheme.addEventListener('click', changeTheme)
function changeTheme() {
    page.classList.toggle('light__theme')
    page.classList.toggle('dark__theme')
}