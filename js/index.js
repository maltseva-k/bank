
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    /*cssMode: true,*/
    mousewheel: true,
    speed: 2000,
    initialSlide: 0,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button'
    }
});
swiper.on('activeIndexChange', function () {
    if(swiper.activeIndex === 0) {
        circle1.classList.remove('animation-circle-1', 'animation-2-circle-1', 'animation-3-circle-1', 'animation-4-circle-1')
        circle2.classList.remove('animation-circle-2', 'animation-2-circle-2', 'animation-3-circle-2', 'animation-4-circle-2')
        circle3.classList.remove('animation-circle-3', 'animation-2-circle-3', 'animation-3-circle-3', 'animation-4-circle-3')
        circle4.classList.remove('animation-circle-4', 'animation-2-circle-4', 'animation-3-circle-4', 'animation-4-circle-4')
        button.classList.remove('hidden')
    }

    if(swiper.activeIndex === 1) {
        circle1.classList.remove('animation-circle-1', 'animation-2-circle-1', 'animation-3-circle-1', 'animation-4-circle-1')
        circle2.classList.remove('animation-circle-2', 'animation-2-circle-2', 'animation-3-circle-2', 'animation-4-circle-2')
        circle3.classList.remove('animation-circle-3', 'animation-2-circle-3', 'animation-3-circle-3', 'animation-4-circle-3')
        circle4.classList.remove('animation-circle-4', 'animation-2-circle-4', 'animation-3-circle-4', 'animation-4-circle-4')
        circle1.classList.add('animation-circle-1')
        circle2.classList.add('animation-circle-2')
        circle3.classList.add('animation-circle-3')
        circle4.classList.add('animation-circle-4')
        button.classList.remove('hidden')
    }
    if(swiper.activeIndex === 2) {
        circle1.classList.remove('animation-circle-1', 'animation-2-circle-1', 'animation-3-circle-1', 'animation-4-circle-1')
        circle2.classList.remove('animation-circle-2', 'animation-2-circle-2', 'animation-3-circle-2', 'animation-4-circle-2')
        circle3.classList.remove('animation-circle-3', 'animation-2-circle-3', 'animation-3-circle-3', 'animation-4-circle-3')
        circle4.classList.remove('animation-circle-4', 'animation-2-circle-4', 'animation-3-circle-4', 'animation-4-circle-4')
        circle1.classList.add('animation-2-circle-1')
        circle2.classList.add('animation-2-circle-2')
        circle3.classList.add('animation-2-circle-3')
        circle4.classList.add('animation-2-circle-4')
        button.classList.remove('hidden')
    }
    if(swiper.activeIndex === 3) {
        circle1.classList.remove('animation-circle-1', 'animation-2-circle-1', 'animation-3-circle-1', 'animation-4-circle-1')
        circle2.classList.remove('animation-circle-2', 'animation-2-circle-2', 'animation-3-circle-2', 'animation-4-circle-2')
        circle3.classList.remove('animation-circle-3', 'animation-2-circle-3', 'animation-3-circle-3', 'animation-4-circle-3')
        circle4.classList.remove('animation-circle-4', 'animation-2-circle-4', 'animation-3-circle-4', 'animation-4-circle-4')
        circle1.classList.add('animation-3-circle-1')
        circle2.classList.add('animation-3-circle-2')
        circle3.classList.add('animation-3-circle-3')
        circle4.classList.add('animation-3-circle-4')
        button.classList.remove('hidden')
    }
    if(swiper.activeIndex === 4) {
        circle1.classList.remove('animation-circle-1', 'animation-2-circle-1', 'animation-3-circle-1', 'animation-4-circle-1')
        circle2.classList.remove('animation-circle-2', 'animation-2-circle-2', 'animation-3-circle-2', 'animation-4-circle-2')
        circle3.classList.remove('animation-circle-3', 'animation-2-circle-3', 'animation-3-circle-3', 'animation-4-circle-3')
        circle4.classList.remove('animation-circle-4', 'animation-2-circle-4', 'animation-3-circle-4', 'animation-4-circle-4')
        circle1.classList.add('animation-4-circle-1')
        circle2.classList.add('animation-4-circle-2')
        circle3.classList.add('animation-4-circle-3')
        circle4.classList.add('animation-4-circle-4')
        button.classList.add('hidden')
    }

});

const circle1 = document.querySelector('.circle-1')
const circle2 = document.querySelector('.circle-2')
const circle3 = document.querySelector('.circle-3')
const circle4 = document.querySelector('.circle-4')
const button = document.querySelector('.swiper-button')



