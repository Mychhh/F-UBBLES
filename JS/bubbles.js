let aosBubbles = Array.from(document.querySelectorAll('.bubble'))

window.addEventListener('scroll', scanBubbles)
window.addEventListener('scroll', scanCardsBubbble)

function scanBubbles(){
    aosBubbles.forEach(bubbles => {
        if(isVisible(bubbles)){
            bubbles.classList.add('active')
        }else{
            bubbles.classList.remove('active')
        }
    })
}

function isVisible(bubbles){
    const bubblesDiv = bubbles.getBoundingClientRect()
    let distance = -10
    return bubblesDiv.top - window.innerHeight < distance ? true : false
}

let aosCardsBubbles =  Array.from(document.querySelectorAll('.page_three__cards_bubble'))

function scanCardsBubbble(){
    aosCardsBubbles.forEach(aoscardsbubbles => {
        if(isVisible(aoscardsbubbles)){
            aoscardsbubbles.classList.add('active')
        }else{
            aoscardsbubbles.classList.remove('active')
        }
    })
}