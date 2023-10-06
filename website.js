let body = document.body
let html = document.documentElement

const arrowDisappear = () => {
    let button = document.getElementsByClassName('button-container')[0]
    let scrollTop = html.scrollTop
    button.style.opacity = 1 - (scrollTop / button.offsetHeight / 3)
    // console.log(`${button.style.opacity}, ${button.offsetHeight}, ${html.scrollTop}`)
}

const experienceAppear = () => {
    let experience = document.getElementsByClassName('experience')
    let scrollTop = html.scrollTop
    // experience.style.opacity = 0 + ( scrollTop / experience.offsetHeight)
    // console.log(`${experience.style.opacity}, ${experience.offsetHeight}, ${html.scrollTop}`)
}

const fadeInAndOut = () => {
    arrowDisappear()
    experienceAppear()
}

document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
});



window.addEventListener('scroll', fadeInAndOut)
