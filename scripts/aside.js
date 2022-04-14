const btnMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

function show(){
    btnMenu.style.display = 'flex';
    btnMenu.style.top = '0';
}

function close(){
    btnMenu.style.display = 'none';
}


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
