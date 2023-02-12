let aosBubbles = Array.from(document.querySelectorAll('.bubble'))

window.addEventListener('scroll', scanBubbles)

function scanBubbles(e){
    console.count(e)
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