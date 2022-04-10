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

//mengubah header ketika di scroll
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

// efek video effect animation play
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Ketika video ada di detik terakhir / sudah selesai, icon nya akan berubah
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// bakal langsung berhenti ketika video nya juga berhenti
videoFile.addEventListener('ended', finalVideo)

// fungsi untuk hide dan show kelas scroll langsung ke top section (home)
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Ketika scroll nya itu udah melebihi 200vh (viewport height), kita tambahkan kelas show-scroll ke tag html dengan kelas scroll-top
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// akan scroll ke link aktif dan mengambahkan kelas active-link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Efek mode malam //
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// menggunakan local storage untuk menyimpan data tema yang dipilih oleh user ketika memilih tema (dengan syarat user menekan icon tema)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Kita ambil tema sebelumnya dengan kita melihat data sebelumnya contain mode gelap atau tidak
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// kemudian kita ganti juga icon nya berdasarkan tema 
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  // Disini kita validasikan terlebih dahulu apakah selectedTheme nya itu dark atau bukan jika ya maka kita akan aktifkan darkTheme nya jika tidak maka akan diremove
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  // begitu juga icon nya
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Mengaktifkan tema mode gelap atau terang dengan button
themeButton.addEventListener('click', () => {
    // tambah atau hapus tema
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // masukan kedalam localstorage, berdasarkan tema apa yang user pilih
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})