const button = document.querySelector('.manuButton')
const buttonElements = button.querySelectorAll('div')
const sideBar = document.querySelector('.sideBar')
const overlay = document.querySelector('.overlay')

//Side bar button selection
const side_home_button = sideBar.querySelector('.home')
const side_about_button = sideBar.querySelector('.about')
const side_skill_button = sideBar.querySelector('.skill')
// const side_home_button = sideBar.querySelector('.home')
// const side_home_button = sideBar.querySelector('.home')

// Section selaction
const headerSection = document.querySelector('.headerContainer');
const aboutSection = document.querySelector('.aboutSection');
const skillSection = document.querySelector('.skillSection');

// Function is to open and close the sidebar
//function declaretion
const openandclosesidebar = function () {
    buttonElements[1].classList.toggle('bar2Clicked')
    buttonElements[0].classList.toggle('bar1Clicked')
    buttonElements[2].classList.toggle('bar3Clicked')
    sideBar.classList.toggle('sideBarVisible')
    overlay.classList.toggle('overlayVisible')
    button.classList.toggle('manuButtonClicked')
}
//Function call
button.addEventListener('click', openandclosesidebar)
overlay.addEventListener('click', openandclosesidebar)



// ! side bar smooth scrolling Implimantation start
side_home_button.addEventListener('click', function () {
    headerSection.scrollIntoView({ behavior: "smooth" })
    openandclosesidebar();
})

side_about_button.addEventListener('click', function () {
    aboutSection.scrollIntoView({ behavior: "smooth" })
    openandclosesidebar();
})

side_skill_button.addEventListener('click', function () {
    skillSection.scrollIntoView({ behavior: "smooth" })
    openandclosesidebar();
})
// ! side bar smooth scrolling Implimantation End

