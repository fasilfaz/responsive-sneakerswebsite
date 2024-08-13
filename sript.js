const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    })
}

//for remove menu when menu item is selected

const navLink = document.querySelectorAll('.nav__link');

const linkAcation = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => navMenu.addEventListener('click', linkAcation));

let swiperImages = new Swiper('.home__swiper',{
    loop: true,
    spaceBetween:64,
    grabCursor:true,
    centeredSlides:true,

    pagination: {
        el:'swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

let swiperTitles = new Swiper('.home__titles',{
    loop: true,
    spaceBetween:64,
    grabCursor:true,
    centeredSlides:true,
  
});

swiperImages.controller.control = swiperTitles
swiperTitles.controller.control = swiperImages

const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : 
    header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)