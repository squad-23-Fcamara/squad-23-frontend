const menu = document.querySelector('.nav-menu');
const navBtn = document.querySelector('.navBtn');

navBtn.addEventListener('click', function(){
   menu.classList.toggle('nav-menu-open')
})

