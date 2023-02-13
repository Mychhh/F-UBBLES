const slides = document.querySelectorAll('.page_four__slider')
const prevButton = document.getElementById('page_four__prev_button')
const nextButton = document.getElementById('page_four__next_button')

console.log(slides)

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

let counter = 0

nextButton.addEventListener('click', () => {
   counter++
   carousel()
})
prevButton.addEventListener('click', () => {
    counter--
    carousel()
})


const carousel = () => {

    if(counter < 0){
        counter = slides.length -1
    }
    else if(counter >= 3){
        counter = 0
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}