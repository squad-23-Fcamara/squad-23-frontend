const menu = document.querySelector('.nav-menu');
const navBtn = document.querySelector('.navBtn');

navBtn.addEventListener('click', function(){
   console.log(menu); 
   menu.classList.add('nav-menu-open')
})

