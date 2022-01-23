const btnMenu = document.querySelector('button')
const timesIcon = document.querySelector('.fa-times')
const barsIcon = document.querySelector('.fa-bars')
const navLinks = document.querySelectorAll('li')
const ulList = document.querySelector('ul')


// this function is responsible for changing the menu icons 
const showHide = () => {
	if (timesIcon.classList.contains('hide')) {
		timesIcon.classList.remove('hide')
		barsIcon.classList.add('hide')
        ulList.classList.remove('hide')
	} else {
		barsIcon.classList.remove('hide')
		timesIcon.classList.add('hide')
        ulList.classList.add('hide')
	}
}

const hideAfterClick = () => {
    ulList.classList.add('hide')
    barsIcon.classList.remove('hide')
    timesIcon.classList.add('hide')

}

btnMenu.addEventListener('click', showHide)
navLinks.forEach(nav => nav.addEventListener('click', hideAfterClick))
