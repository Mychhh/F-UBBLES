// menu button
const navButton = document.getElementsByClassName('nav__menu_button')[0]
const navButtonIcon = document.getElementsByClassName('nav__menu_button_icon')[0]
const sidebar = document.getElementById('sidebar')
const sidebarButton = document.getElementById('nav__button')
let sliderIsOpen = false

//slider
const slider = document.getElementsByClassName('nav__menu_mobile')[0]

// slider mobile menu
const sliderMobileMenu = document.querySelectorAll('.nave__menu_mobile_menu')

//mobile menu button 
navButton.addEventListener('click', function() {

    if(sliderIsOpen){
        navButton.classList.remove('active')
        navButtonIcon.classList.remove('active')
        slider.classList.remove('active')
        slider.classList.add('inactive')
    }else{
        navButton.classList.add('active')
        navButtonIcon.classList.add('active')
        slider.classList.remove('inactive')
        slider.classList.add('active')
    }
    sliderIsOpen = !sliderIsOpen
})
// close sidebar on click to the menu
sliderMobileMenu.forEach(slidermobilemenu => {
    slidermobilemenu.addEventListener('click', () => {
        if(sliderIsOpen){
            navButton.classList.remove('active')
            navButtonIcon.classList.remove('active')
            slider.classList.remove('active')
            slider.classList.add('inactive')
        }else{
            navButton.classList.add('active')
            navButtonIcon.classList.add('active')
            slider.classList.remove('inactive')
            slider.classList.add('active')
        }
        sliderIsOpen = !sliderIsOpen
    })
});
