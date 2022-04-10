/*menampilkan menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('navigation-close')

// toggle function
// menu ditampilkan
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// toggle function
// menu disembunyikan
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

//menghapus menu di bagian mobile dengan query selector
//ketika salah 1 menu di click maka nav menu akan langsung toggle off
const navLink = document.querySelectorAll('.navigation_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//changed scrolled header
function scrollHeader(){
    const header = document.getElementById('header')
    // Ketika scroll lebih besar dari 100 ketinggian viewport, tambahkan kelas scroll-header ke tag header
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//place discover swipe effect
let swiper = new Swiper(".discover_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 40,
    coverflowEffect: {
        rotate: 0,
        modifier: 2
    },
})