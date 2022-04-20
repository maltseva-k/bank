
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
const circle1 = document.querySelector('.circle-1')
const circle2 = document.querySelector('.circle-2')
const circle3 = document.querySelector('.circle-3')
const circle4 = document.querySelector('.circle-4')
const button = document.querySelector('.swiper-button')


const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: false,
    mousewheel: true,
    speed: 2000,
    initialSlide: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button'
    }
})

function addClassIndex(index) {
    circle1.classList.add(`animation-${index}-circle-1`)
    circle2.classList.add(`animation-${index}-circle-2`)
    circle3.classList.add(`animation-${index}-circle-3`)
    circle4.classList.add(`animation-${index}-circle-4`)
}

function removeClassIndex() {
    for (let i=1; i<=4; i++) {
        circle1.classList.remove(`animation-${i}-circle-1`)
        circle2.classList.remove(`animation-${i}-circle-2`)
        circle3.classList.remove(`animation-${i}-circle-3`)
        circle4.classList.remove(`animation-${i}-circle-4`)
    }
    button.classList.remove('hidden')
}

swiper.on('activeIndexChange', function () {
    removeClassIndex()
    addClassIndex(swiper.activeIndex)
    if(swiper.activeIndex === 4) {
        button.classList.add('hidden')
    }
})



