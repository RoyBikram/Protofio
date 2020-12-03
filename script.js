const button = document.querySelector('.manuButton')
const buttonElements = button.querySelectorAll('div')
const sideBar = document.querySelector('.sideBar')
const overlay = document.querySelector('.overlay')


// Function is to open and close the sidebar
const openandclosesidebar = function () {
    buttonElements[1].classList.toggle('bar2Clicked')
    buttonElements[0].classList.toggle('bar1Clicked')
    buttonElements[2].classList.toggle('bar3Clicked')
    sideBar.classList.toggle('sideBarVisible')
    overlay.classList.toggle('overlayVisible')
    button.classList.toggle('manuButtonClicked')
}

button.addEventListener('click', openandclosesidebar)
overlay.addEventListener('click', openandclosesidebar)


