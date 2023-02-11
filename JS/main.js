// menu button
const navButton = document.getElementsByClassName('nav__menu_button')[0]
const navButtonIcon = document.getElementsByClassName('nav__menu_button_icon')[0]
let sliderIsOpen = false

//slider
const slider = document.getElementsByClassName('nav__menu_mobile')[0]

// console.log(navButton)
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