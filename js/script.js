burger = document.querySelector('.burger')
navbar = document.querySelector('.nav_bar')
ul = document.querySelector('.nav_bar ul')
search = document.querySelector('.search')

burger.addEventListener('click',()=>{
    // ul.classList.toggle('visiblility-nav-resp');
    // search.classList.toggle('visiblility-nav-resp');
    navbar.classList.toggle('slide-nav-resp');

})